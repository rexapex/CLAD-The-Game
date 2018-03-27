import {Triangle} from "./Triangle"
import {Point} from "./Point"

// navmesh pathfinding: https://medium.com/@mscansian/a-with-navigation-meshes-246fd9e72424
export class NavMesh
{
    // valid regions of the navmesh
    private tris: Array<Triangle>;

    // TODO - new system of triangle representation
    private vertices: Array<Point>;
    private edges: Array<{v1: number, v2: number}>;         // v1 and v2 are indices into vertices list
    private outerEdges: Array<{v1: number, v2: number}>;    // edges which only appear in 1 tri

    constructor(tris: Array<Triangle>) {
        this.tris = tris ? tris : [];
        this.vertices = [];
        this.edges = [];
        this.outerEdges = [];

        // initialise vertices and edges list
        for(const tri of tris) {
            let p1Index = this.indexOfVertex(this.vertices, tri.point1);
            let p2Index = this.indexOfVertex(this.vertices, tri.point2);
            let p3Index = this.indexOfVertex(this.vertices, tri.point3);

            // if vertex is not in the list, add it to the list
            if(p1Index === -1) {
                this.vertices.push(tri.point1);
                p1Index = this.indexOfVertex(this.vertices, tri.point1);
            }
            // if vertex is not in the list, add it to the list
            if(p2Index === -1) {
                this.vertices.push(tri.point2);
                p2Index = this.indexOfVertex(this.vertices, tri.point2);
            }
            // if vertex is not in the list, add it to the list
            if(p3Index === -1) {
                this.vertices.push(tri.point3);
                p3Index = this.indexOfVertex(this.vertices, tri.point3);
            }

            // add all 3 edges of the tri to the edges list
            const edge1 = {v1: p1Index, v2: p2Index};
            const edge2 = {v1: p2Index, v2: p3Index};
            const edge3 = {v1: p3Index, v2: p1Index};

            // add the edges if they are not already in the list
            if(this.indexOfEdge(this.edges, edge1) === -1) {
                this.edges.push(edge1);
                this.outerEdges.push(edge1);
            } else {
                this.outerEdges.splice(this.indexOfEdge(this.outerEdges, edge1), 1);
            }

            if(this.indexOfEdge(this.edges, edge2) === -1) {
                this.edges.push(edge2);
                this.outerEdges.push(edge2);
            } else {
                this.outerEdges.splice(this.indexOfEdge(this.outerEdges, edge2), 1);
            }

            if(this.indexOfEdge(this.edges, edge3) === -1) {
                this.edges.push(edge3);
                this.outerEdges.push(edge3);
            } else {
                this.outerEdges.splice(this.indexOfEdge(this.outerEdges, edge3), 1);
            }
        }
        //console.log(this.vertices);
        //console.log(this.edges);
        //console.log(this.outerEdges);
    }

    public getWaypoints = (currentX: number, currentY: number, targetX: number, targetY: number): Array<Point> => {
        for(let tri of this.tris) {
            // allow free movement within a triangle
            if(tri.contains(targetX, targetY) && tri.contains(currentX, currentY))
            {
                return [new Point(targetX, targetY)];
            }
        }
        for(let tri of this.tris) {
            // if both points fall under different triangles, find the a waypoint to reach the next tri
            if(tri.contains(targetX, targetY))
            {
                //return new Point(targetX, targetY);
                const obj = this.findPath(new Point(currentX, currentY), new Point(targetX, targetY));
                if(obj != null) {
                    let route: Array<Point> = [];
                    route.push(new Point(targetX, targetY));    // go from last point to the end point
                    this.buildRoute(obj.cameFrom, obj.endVertex, route);
                    this.reduceRoute(route);    // remove redundant nodes from the path
                    if(route.length > 0)        // last waypoint will be start -> get rid of it
                        route.pop();
                    console.log("route: " + route);
                    return route;
                }
                break;
            }
        }
        return null;
    }

    // remove unecessary waypoints from the route, i.e. if their is a straight path from a to c, remove b
    private reduceRoute = (route: Array<Point>) => {
        let index = 0;
        // loop until no more reductions can be made
        while(index < route.length - 2) {
            const a = route[index]
            const c = route[index + 2]

            // there is a valid straight path between a and c if the path does not intersect an outer edge
            let intersectsOuterEdge: boolean = false;
            for(const outerEdge of this.outerEdges)
            {
                if(this.doLineSegmentsIntersect(this.vertices[outerEdge.v1], this.vertices[outerEdge.v2], a, c)) {
                    //console.log(a.toString(), c.toString(), "intersects", this.vertices[outerEdge.v1].toString(), this.vertices[outerEdge.v2].toString())
                    intersectsOuterEdge = true;
                    break;
                }
            }

            // if the path does not intersect an outer edge, remove waypoint b
            if(!intersectsOuterEdge) {
                route.splice(index+1, 1);
                // don't need to increment index since array length has been reduced
            } else {
                // move onto next pair of waypoints
                index ++;
            }
        }
    }

    private buildRoute = (cameFrom: {}, vertex: Point, route: Array<Point>) => {
        route.push(vertex); // route is read in reverse order
        if(cameFrom[vertex.toString()] != null) {
            this.buildRoute(cameFrom, cameFrom[vertex.toString()].node, route);
        }
    }

    // use the A* algorithm to find a shortest path through the navmesh
    private findPath = (start: Point, end: Point): {cameFrom: {}, endVertex: Point} => {
        let open = [{node: start, priority: 0}];    // lowest priority = 0
        let closed = [];

        // find the triangle containing the start point
        let startTri;
        for(const tri of this.tris) {
            if(tri.contains(start.x, start.y)) {
                startTri = tri;
                break;
            }
        }
        if(startTri == null) {
            return null;
        }

        // find the triangle containing the end point
        let endTri;
        for(const tri of this.tris) {
            if(tri.contains(end.x, end.y)) {
                endTri = tri;
                break;
            }
        }
        if(endTri == null) {
            return null;
        }

        // g[i] is the cost to get to i from the start vertex
        let g = {};
        let cameFrom = {};
        g[start.toString()] = 0;
        cameFrom[start.toString()] = null;

        // execute A* algorithm
        // pseudocode: http://theory.stanford.edu/~amitp/GameProgramming/ImplementationNotes.html
        while(open.length > 0 && !endTri.isVertex(open[0].node))
        {
            let current = open.shift();  // remove first item from open (item with lowest priority)
            closed.push(current);
            //console.log("current vertex: " + current.node.toString());
            for(const neighbour of this.getNeighbours(current.node))
            {
                let cost = g[current.node.toString()] + this.getEdgeCost(current.node, neighbour);
                //console.log("neighbour: " + neighbour.toString() + ", cost: " + cost);
                // neighbour in open
                if(this.indexOfPriorityNode(open, neighbour) !== -1 && cost < g[neighbour.toString()]) {
                    open.splice(this.indexOfPriorityNode(open, neighbour), 1);
                }
                // neighbour in closed
                if(this.indexOfPriorityNode(closed, neighbour) !== -1 && cost < g[neighbour.toString()]) {
                    closed.splice(this.indexOfPriorityNode(closed, neighbour), 1);
                }
                // neighbour neither in open nor closed
                if(this.indexOfPriorityNode(open, neighbour) === -1 && this.indexOfPriorityNode(closed, neighbour) === -1) {
                    g[neighbour.toString()] = cost;
                    cameFrom[neighbour.toString()] = current;
                    open.push({node: neighbour, priority: cost}); // TODO - priority = cost + h(neighbour)
                    open.sort((a, b) => {   // sort open queue by priority
                        return a.priority - b.priority;
                    });
                }
            }
        }

        //console.log(open.length > 0 ? "end: " + open[0].node.toString() : "no path");
        return open.length > 0 ? {cameFrom: cameFrom, endVertex: open[0].node} : null;
    }

    public draw = (): void => {
        for(let tri of this.tris) {
            tri.draw();
        }
    }

    // returns the cost of traversing an edge between p1 and p2
    private getEdgeCost = (p1: Point, p2: Point): number => {
        return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
    }

    // return a list of vertcies which are adjacent to the vertex p
    private getNeighbours = (p: Point): Array<Point> => {
        let neighbours: Array<Point> = [];
        for(const edge of this.edges)
        {
            if(this.vertices[edge.v1].equals(p)) {
                neighbours.push(this.vertices[edge.v2]);
            } else if(this.vertices[edge.v2].equals(p)) {
                neighbours.push(this.vertices[edge.v1]);
            }
        }

        // if the vertex is not a vertex of a triangle, check if it is within a triangle
        if(neighbours.length === 0) {
            for(const tri of this.tris) {
                if(tri.contains(p.x, p.y)) {
                    neighbours.push(tri.point1);
                    neighbours.push(tri.point2);
                    neighbours.push(tri.point3);
                    break;
                }
            }
        }
        return neighbours;
    }

    // answer 2 from: https://stackoverflow.com/questions/563198/how-do-you-detect-where-two-line-segments-intersect
    private doLineSegmentsIntersect = (e1v1: Point, e1v2: Point, e2v1: Point, e2v2: Point): boolean => {
        const p0_x = e1v1.x;
        const p0_y = e1v1.y;
        const p1_x = e1v2.x;
        const p1_y = e1v2.y;
        const p2_x = e2v1.x;
        const p2_y = e2v1.y;
        const p3_x = e2v2.x;
        const p3_y = e2v2.y;

        let s1_x, s1_y, s2_x, s2_y;
        s1_x = p1_x - p0_x;
        s1_y = p1_y - p0_y;
        s2_x = p3_x - p2_x;
        s2_y = p3_y - p2_y;

        let s, t;
        s = (-s1_y * (p0_x - p2_x) + s1_x * (p0_y - p2_y)) / (-s2_x * s1_y + s1_x * s2_y);
        t = ( s2_x * (p0_y - p2_y) - s2_y * (p0_x - p2_x)) / (-s2_x * s1_y + s1_x * s2_y);

        if(s >= 0 && s <= 1 && t >= 0 && t <= 1)
        {
            // return false if the intersection point is the vertex position since it breaks the route reduction algorithm
            const i_x = (p0_x + (t * s1_x));
            const i_y = (p0_y + (t * s1_y));
            return !(i_x === e1v1.x && i_y === e1v1.y) && !(i_x === e1v2.x && i_y === e1v2.y) && !(i_x === e2v1.x && i_y === e2v1.y) && !(i_x === e2v2.x && i_y === e2v2.y);
        }

        //console.log("no collision");
        return false; // no collision
    }

    //
    private crossProduct = (point1: Point, point2: Point) => {
    	return point1.x * point2.y - point1.y * point2.x;
    }

    private indexOfPriorityNode = (vertices: Array<{node: Point, priority: number}>, p: Point) => {
        if(p == null) {
            return -1;
        } else {
            for(let index = 0; index < vertices.length; index ++) {
                const vertex = vertices[index].node;
                if(vertex.x === p.x && vertex.y === p.y) {
                    return index;
                }
            }
        }

        return -1;
    }

    private indexOfVertex = (vertices: Array<Point>, p: Point): number => {
        if(p == null) {
            return -1;
        } else {
            for(let index = 0; index < vertices.length; index ++) {
                const vertex = vertices[index];
                if(vertex.x === p.x && vertex.y === p.y) {
                    return index;
                }
            }
        }

        return -1;
    }

    private indexOfEdge = (edges: Array<{v1: number, v2: number}>, edge: {v1: number, v2: number}): number => {
        if(edge == null || edge.v1 == null || edge.v2 == null) {
            return -1;
        } else {
            for(let index = 0; index < edges.length; index ++) {
                const e = edges[index];
                if((e.v1 === edge.v1 && e.v2 === edge.v2) || (e.v1 === edge.v2 && e.v2 === edge.v1)) {
                    return index;
                }
            }
        }

        return -1;
    }
}
