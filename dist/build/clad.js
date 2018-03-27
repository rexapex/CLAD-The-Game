/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/collision/Circle.ts":
/*!*********************************!*\
  !*** ./src/collision/Circle.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glob_ts_1 = __webpack_require__(/*! ../glob.ts */ "./src/glob.ts");
class Circle {
    constructor(x, y, radius, color = "red", line_width = 2) {
        this.x = 0;
        this.y = 0;
        this.radius = 10;
        this.lineWidth = 2;
        this.color = "red";
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.lineWidth = line_width;
    }
    draw() {
        glob_ts_1.ctx.save();
        glob_ts_1.ctx.beginPath();
        glob_ts_1.ctx.strokeStyle = this.color;
        glob_ts_1.ctx.lineWidth = this.lineWidth;
        glob_ts_1.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        glob_ts_1.ctx.stroke();
        glob_ts_1.ctx.restore();
    }
    contains(x, y) {
        return (Math.pow((y - this.y), 2) + Math.pow((x - this.x), 2)) <= Math.pow(this.radius, 2);
    }
}
exports.Circle = Circle;


/***/ }),

/***/ "./src/collision/NavMesh.ts":
/*!**********************************!*\
  !*** ./src/collision/NavMesh.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Point_1 = __webpack_require__(/*! ./Point */ "./src/collision/Point.ts");
// navmesh pathfinding: https://medium.com/@mscansian/a-with-navigation-meshes-246fd9e72424
class NavMesh {
    constructor(tris) {
        this.getWaypoints = (currentX, currentY, targetX, targetY) => {
            for (let tri of this.tris) {
                // allow free movement within a triangle
                if (tri.contains(targetX, targetY) && tri.contains(currentX, currentY)) {
                    return [new Point_1.Point(targetX, targetY)];
                }
            }
            for (let tri of this.tris) {
                // if both points fall under different triangles, find the a waypoint to reach the next tri
                if (tri.contains(targetX, targetY)) {
                    //return new Point(targetX, targetY);
                    const obj = this.findPath(new Point_1.Point(currentX, currentY), new Point_1.Point(targetX, targetY));
                    if (obj != null) {
                        let route = [];
                        route.push(new Point_1.Point(targetX, targetY)); // go from last point to the end point
                        this.buildRoute(obj.cameFrom, obj.endVertex, route);
                        this.reduceRoute(route); // remove redundant nodes from the path
                        if (route.length > 0)
                            route.pop();
                        console.log("route: " + route);
                        return route;
                    }
                    break;
                }
            }
            return null;
        };
        // remove unecessary waypoints from the route, i.e. if their is a straight path from a to c, remove b
        this.reduceRoute = (route) => {
            let index = 0;
            // loop until no more reductions can be made
            while (index < route.length - 2) {
                const a = route[index];
                const c = route[index + 2];
                // there is a valid straight path between a and c if the path does not intersect an outer edge
                let intersectsOuterEdge = false;
                for (const outerEdge of this.outerEdges) {
                    if (this.doLineSegmentsIntersect(this.vertices[outerEdge.v1], this.vertices[outerEdge.v2], a, c)) {
                        //console.log(a.toString(), c.toString(), "intersects", this.vertices[outerEdge.v1].toString(), this.vertices[outerEdge.v2].toString())
                        intersectsOuterEdge = true;
                        break;
                    }
                }
                // if the path does not intersect an outer edge, remove waypoint b
                if (!intersectsOuterEdge) {
                    route.splice(index + 1, 1);
                    // don't need to increment index since array length has been reduced
                }
                else {
                    // move onto next pair of waypoints
                    index++;
                }
            }
        };
        this.buildRoute = (cameFrom, vertex, route) => {
            route.push(vertex); // route is read in reverse order
            if (cameFrom[vertex.toString()] != null) {
                this.buildRoute(cameFrom, cameFrom[vertex.toString()].node, route);
            }
        };
        // use the A* algorithm to find a shortest path through the navmesh
        this.findPath = (start, end) => {
            let open = [{ node: start, priority: 0 }]; // lowest priority = 0
            let closed = [];
            // find the triangle containing the start point
            let startTri;
            for (const tri of this.tris) {
                if (tri.contains(start.x, start.y)) {
                    startTri = tri;
                    break;
                }
            }
            if (startTri == null) {
                return null;
            }
            // find the triangle containing the end point
            let endTri;
            for (const tri of this.tris) {
                if (tri.contains(end.x, end.y)) {
                    endTri = tri;
                    break;
                }
            }
            if (endTri == null) {
                return null;
            }
            // g[i] is the cost to get to i from the start vertex
            let g = {};
            let cameFrom = {};
            g[start.toString()] = 0;
            cameFrom[start.toString()] = null;
            // execute A* algorithm
            // pseudocode: http://theory.stanford.edu/~amitp/GameProgramming/ImplementationNotes.html
            while (open.length > 0 && !endTri.isVertex(open[0].node)) {
                let current = open.shift(); // remove first item from open (item with lowest priority)
                closed.push(current);
                //console.log("current vertex: " + current.node.toString());
                for (const neighbour of this.getNeighbours(current.node)) {
                    let cost = g[current.node.toString()] + this.getEdgeCost(current.node, neighbour);
                    //console.log("neighbour: " + neighbour.toString() + ", cost: " + cost);
                    // neighbour in open
                    if (this.indexOfPriorityNode(open, neighbour) !== -1 && cost < g[neighbour.toString()]) {
                        open.splice(this.indexOfPriorityNode(open, neighbour), 1);
                    }
                    // neighbour in closed
                    if (this.indexOfPriorityNode(closed, neighbour) !== -1 && cost < g[neighbour.toString()]) {
                        closed.splice(this.indexOfPriorityNode(closed, neighbour), 1);
                    }
                    // neighbour neither in open nor closed
                    if (this.indexOfPriorityNode(open, neighbour) === -1 && this.indexOfPriorityNode(closed, neighbour) === -1) {
                        g[neighbour.toString()] = cost;
                        cameFrom[neighbour.toString()] = current;
                        open.push({ node: neighbour, priority: cost }); // TODO - priority = cost + h(neighbour)
                        open.sort((a, b) => {
                            return a.priority - b.priority;
                        });
                    }
                }
            }
            //console.log(open.length > 0 ? "end: " + open[0].node.toString() : "no path");
            return open.length > 0 ? { cameFrom: cameFrom, endVertex: open[0].node } : null;
        };
        this.draw = () => {
            for (let tri of this.tris) {
                tri.draw();
            }
        };
        // returns the cost of traversing an edge between p1 and p2
        this.getEdgeCost = (p1, p2) => {
            return Math.sqrt(Math.pow((p1.x - p2.x), 2) + Math.pow((p1.y - p2.y), 2));
        };
        // return a list of vertcies which are adjacent to the vertex p
        this.getNeighbours = (p) => {
            let neighbours = [];
            for (const edge of this.edges) {
                if (this.vertices[edge.v1].equals(p)) {
                    neighbours.push(this.vertices[edge.v2]);
                }
                else if (this.vertices[edge.v2].equals(p)) {
                    neighbours.push(this.vertices[edge.v1]);
                }
            }
            // if the vertex is not a vertex of a triangle, check if it is within a triangle
            if (neighbours.length === 0) {
                for (const tri of this.tris) {
                    if (tri.contains(p.x, p.y)) {
                        neighbours.push(tri.point1);
                        neighbours.push(tri.point2);
                        neighbours.push(tri.point3);
                        break;
                    }
                }
            }
            return neighbours;
        };
        // answer 2 from: https://stackoverflow.com/questions/563198/how-do-you-detect-where-two-line-segments-intersect
        this.doLineSegmentsIntersect = (e1v1, e1v2, e2v1, e2v2) => {
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
            t = (s2_x * (p0_y - p2_y) - s2_y * (p0_x - p2_x)) / (-s2_x * s1_y + s1_x * s2_y);
            if (s >= 0 && s <= 1 && t >= 0 && t <= 1) {
                // return false if the intersection point is the vertex position since it breaks the route reduction algorithm
                const i_x = (p0_x + (t * s1_x));
                const i_y = (p0_y + (t * s1_y));
                return !(i_x === e1v1.x && i_y === e1v1.y) && !(i_x === e1v2.x && i_y === e1v2.y) && !(i_x === e2v1.x && i_y === e2v1.y) && !(i_x === e2v2.x && i_y === e2v2.y);
            }
            //console.log("no collision");
            return false; // no collision
        };
        //
        this.crossProduct = (point1, point2) => {
            return point1.x * point2.y - point1.y * point2.x;
        };
        this.indexOfPriorityNode = (vertices, p) => {
            if (p == null) {
                return -1;
            }
            else {
                for (let index = 0; index < vertices.length; index++) {
                    const vertex = vertices[index].node;
                    if (vertex.x === p.x && vertex.y === p.y) {
                        return index;
                    }
                }
            }
            return -1;
        };
        this.indexOfVertex = (vertices, p) => {
            if (p == null) {
                return -1;
            }
            else {
                for (let index = 0; index < vertices.length; index++) {
                    const vertex = vertices[index];
                    if (vertex.x === p.x && vertex.y === p.y) {
                        return index;
                    }
                }
            }
            return -1;
        };
        this.indexOfEdge = (edges, edge) => {
            if (edge == null || edge.v1 == null || edge.v2 == null) {
                return -1;
            }
            else {
                for (let index = 0; index < edges.length; index++) {
                    const e = edges[index];
                    if ((e.v1 === edge.v1 && e.v2 === edge.v2) || (e.v1 === edge.v2 && e.v2 === edge.v1)) {
                        return index;
                    }
                }
            }
            return -1;
        };
        this.tris = tris ? tris : [];
        this.vertices = [];
        this.edges = [];
        this.outerEdges = [];
        // initialise vertices and edges list
        for (const tri of tris) {
            let p1Index = this.indexOfVertex(this.vertices, tri.point1);
            let p2Index = this.indexOfVertex(this.vertices, tri.point2);
            let p3Index = this.indexOfVertex(this.vertices, tri.point3);
            // if vertex is not in the list, add it to the list
            if (p1Index === -1) {
                this.vertices.push(tri.point1);
                p1Index = this.indexOfVertex(this.vertices, tri.point1);
            }
            // if vertex is not in the list, add it to the list
            if (p2Index === -1) {
                this.vertices.push(tri.point2);
                p2Index = this.indexOfVertex(this.vertices, tri.point2);
            }
            // if vertex is not in the list, add it to the list
            if (p3Index === -1) {
                this.vertices.push(tri.point3);
                p3Index = this.indexOfVertex(this.vertices, tri.point3);
            }
            // add all 3 edges of the tri to the edges list
            const edge1 = { v1: p1Index, v2: p2Index };
            const edge2 = { v1: p2Index, v2: p3Index };
            const edge3 = { v1: p3Index, v2: p1Index };
            // add the edges if they are not already in the list
            if (this.indexOfEdge(this.edges, edge1) === -1) {
                this.edges.push(edge1);
                this.outerEdges.push(edge1);
            }
            else {
                this.outerEdges.splice(this.indexOfEdge(this.outerEdges, edge1), 1);
            }
            if (this.indexOfEdge(this.edges, edge2) === -1) {
                this.edges.push(edge2);
                this.outerEdges.push(edge2);
            }
            else {
                this.outerEdges.splice(this.indexOfEdge(this.outerEdges, edge2), 1);
            }
            if (this.indexOfEdge(this.edges, edge3) === -1) {
                this.edges.push(edge3);
                this.outerEdges.push(edge3);
            }
            else {
                this.outerEdges.splice(this.indexOfEdge(this.outerEdges, edge3), 1);
            }
        }
        //console.log(this.vertices);
        //console.log(this.edges);
        //console.log(this.outerEdges);
    }
}
exports.NavMesh = NavMesh;


/***/ }),

/***/ "./src/collision/Point.ts":
/*!********************************!*\
  !*** ./src/collision/Point.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Point {
    constructor(x = 0, y = 0) {
        this.x = 0;
        this.y = 0;
        this.equals = (p) => {
            return p != null && p.x === this.x && p.y === this.y;
        };
        this.toString = () => {
            return `Point(${this.x},${this.y})`;
        };
        this.x = x;
        this.y = y;
    }
}
exports.Point = Point;


/***/ }),

/***/ "./src/collision/Rectangle.ts":
/*!************************************!*\
  !*** ./src/collision/Rectangle.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glob_ts_1 = __webpack_require__(/*! ../glob.ts */ "./src/glob.ts");
class Rectangle {
    constructor(x, y, width, height, color = "red", line_width = 2) {
        this.x = 0;
        this.y = 0;
        this.lineWidth = 5;
        this.width = 0;
        this.height = 0;
        this.color = "blue";
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.lineWidth = line_width;
    }
    draw() {
        glob_ts_1.ctx.save();
        glob_ts_1.ctx.beginPath();
        glob_ts_1.ctx.strokeStyle = this.color;
        glob_ts_1.ctx.lineWidth = this.lineWidth;
        glob_ts_1.ctx.rect(this.x, this.y, this.width, this.height);
        glob_ts_1.ctx.stroke();
        glob_ts_1.ctx.restore();
    }
    contains(x, y) {
        return (x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height);
    }
}
exports.Rectangle = Rectangle;


/***/ }),

/***/ "./src/collision/Triangle.ts":
/*!***********************************!*\
  !*** ./src/collision/Triangle.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glob_ts_1 = __webpack_require__(/*! ../glob.ts */ "./src/glob.ts");
const Point_1 = __webpack_require__(/*! ./Point */ "./src/collision/Point.ts");
class Triangle {
    constructor(x1, y1, x2, y2, x3, y3) {
        this.draw = () => {
            glob_ts_1.ctx.save();
            glob_ts_1.ctx.strokeStyle = "red";
            glob_ts_1.ctx.lineWidth = 5;
            glob_ts_1.ctx.beginPath();
            glob_ts_1.ctx.moveTo(this.point1.x, this.point1.y);
            glob_ts_1.ctx.lineTo(this.point2.x, this.point2.y);
            glob_ts_1.ctx.lineTo(this.point3.x, this.point3.y);
            glob_ts_1.ctx.lineTo(this.point1.x, this.point1.y);
            glob_ts_1.ctx.stroke();
            glob_ts_1.ctx.restore();
        };
        // returns true iff the point p is a vertex of the triangle
        this.isVertex = (p) => {
            return this.point1.equals(p) || this.point2.equals(p) || this.point3.equals(p);
        };
        // http://jsfiddle.net/PerroAZUL/zdaY8/1/
        this.contains = (x, y) => {
            var s = (this.point1.y * this.point3.x - this.point1.x * this.point3.y + (this.point3.y - this.point1.y) * x + (this.point1.x - this.point3.x) * y) * this.sign;
            var t = (this.point1.x * this.point2.y - this.point1.y * this.point2.x + (this.point1.y - this.point2.y) * x + (this.point2.x - this.point1.x) * y) * this.sign;
            return (s > 0 && t > 0 && (s + t) < 2 * this.area * this.sign) || (this.isVertex(new Point_1.Point(x, y)));
        };
        this.point1 = new Point_1.Point(x1, y1);
        this.point2 = new Point_1.Point(x2, y2);
        this.point3 = new Point_1.Point(x3, y3);
        this.area = 1 / 2 * (-this.point2.y * this.point3.x + this.point1.y * (-this.point2.x + this.point3.x) + this.point1.x * (this.point2.y - this.point3.y) + this.point2.x * this.point3.y);
        this.sign = this.area < 0 ? -1 : 1;
    }
}
exports.Triangle = Triangle;


/***/ }),

/***/ "./src/game/Interaction.ts":
/*!*********************************!*\
  !*** ./src/game/Interaction.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Interaction {
    // item can be null
    constructor(item) {
        this.item = item;
    }
    getItem() {
        return this.item;
    }
}
exports.Interaction = Interaction;


/***/ }),

/***/ "./src/game/Level.ts":
/*!***************************!*\
  !*** ./src/game/Level.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const JSONLoader_1 = __webpack_require__(/*! ../resources/JSONLoader */ "./src/resources/JSONLoader.ts");
const TextureAtlas_1 = __webpack_require__(/*! ../sprites/TextureAtlas */ "./src/sprites/TextureAtlas.ts");
const StaticSprite_1 = __webpack_require__(/*! ../sprites/StaticSprite */ "./src/sprites/StaticSprite.ts");
const InteractableSprite_1 = __webpack_require__(/*! ../sprites/InteractableSprite */ "./src/sprites/InteractableSprite.ts");
const NavMesh_1 = __webpack_require__(/*! ../collision/NavMesh */ "./src/collision/NavMesh.ts");
const Triangle_1 = __webpack_require__(/*! ../collision/Triangle */ "./src/collision/Triangle.ts");
const ReceiveItemInteraction_1 = __webpack_require__(/*! ./ReceiveItemInteraction */ "./src/game/ReceiveItemInteraction.ts");
const Circle_1 = __webpack_require__(/*! ../collision/Circle */ "./src/collision/Circle.ts");
const Rectangle_1 = __webpack_require__(/*! ../collision/Rectangle */ "./src/collision/Rectangle.ts");
class Level {
    static loadLevel(path, items) {
        return new Promise((resolve, reject) => {
            const levelDataPromise = JSONLoader_1.JSONLoader.loadJSONFile(path).then((levelData) => {
                // create the texture atlas
                let atlas = new TextureAtlas_1.TextureAtlas(levelData.texture_atlas);
                const textureAtlasPromise = atlas.load().catch(() => {
                    console.log("error: texture atlas could not be loaded");
                });
                // create the sprites
                let staticSprites = new Array();
                let interactableSprites = new Array();
                for (const obj of levelData.static_sprites) {
                    if (obj.type == "interactable") {
                        let interactions = new Array();
                        for (const inter of obj.interactions) {
                            if (inter.type == "receive_item") {
                                let receiveItems = new Array();
                                for (const itm of inter.items_received) {
                                    receiveItems.push(items[itm]);
                                }
                                interactions.push(new ReceiveItemInteraction_1.ReceiveItemInteraction(inter.item ? items[inter.item] : null, inter.success_text, inter.fail_text, receiveItems));
                            }
                        }
                        interactableSprites.push(new InteractableSprite_1.InteractableSprite(obj.x, obj.y, obj.scale, obj.origin_horizontal, obj.origin_vertical, atlas, obj.image_name, obj.examine_text, new Circle_1.Circle(obj.x, obj.y, obj.interaction_radius), new Rectangle_1.Rectangle(obj.x - obj.click_zone_width / 2, obj.y - obj.click_zone_height / 2, obj.click_zone_width, obj.click_zone_height), interactions));
                    }
                    else {
                        staticSprites.push(new StaticSprite_1.StaticSprite(obj.x, obj.y, obj.scale, obj.origin_horizontal, obj.origin_vertical, atlas, obj.image_name));
                    }
                }
                //let animatedSprites = new Array<AnimatedSprite>();
                // create the navmesh
                let tris = [];
                for (let tri of levelData.navmesh) {
                    tris.push(new Triangle_1.Triangle(tri.x1, tri.y1, tri.x2, tri.y2, tri.x3, tri.y3));
                }
                let navmesh = new NavMesh_1.NavMesh(tris);
                Promise.all([textureAtlasPromise]).then(() => {
                    for (const sprite of staticSprites) {
                        sprite.refreshImage(); // texture atlas probably hadn't loaded when sprite was initialised so refresh image
                    }
                    for (const sprite of interactableSprites) {
                        sprite.refreshImage(); // texture atlas probably hadn't loaded when sprite was initialised so refresh image
                    }
                    resolve({ 'textureAtlas': atlas, 'sceneScale': levelData.scene_scale,
                        'playerStartX': levelData.player_start_x, 'playerStartY': levelData.player_start_y, 'playerStarts': levelData.player_starts,
                        'depthScaleY': levelData.depth_scale_y, 'navmesh': navmesh, 'staticSprites': staticSprites,
                        'interactableSprites': interactableSprites });
                }).catch(() => {
                    reject(null);
                });
            }).catch(() => {
                console.log("error: failed to load level");
                reject(null);
            });
        });
    }
    constructor() { }
}
exports.Level = Level;


/***/ }),

/***/ "./src/game/ReceiveItemInteraction.ts":
/*!********************************************!*\
  !*** ./src/game/ReceiveItemInteraction.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Interaction_1 = __webpack_require__(/*! ./Interaction */ "./src/game/Interaction.ts");
class ReceiveItemInteraction extends Interaction_1.Interaction {
    // item can be null
    constructor(item, successText, failText, itemsReceived) {
        super(item);
        this.successText = successText;
        this.failText = failText;
        this.itemsReceived = itemsReceived;
    }
    // interact with the object
    // returns a list of items received from the interaction
    interact(item) {
        if (item == this.item) {
            return { text: this.successText, items: this.itemsReceived };
        }
        return { text: this.failText, items: null };
    }
}
exports.ReceiveItemInteraction = ReceiveItemInteraction;


/***/ }),

/***/ "./src/glob.ts":
/*!*********************!*\
  !*** ./src/glob.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function initCanvasAndContext() {
    exports.canvas = document.getElementById("canvas");
    exports.ctx = exports.canvas.getContext("2d");
    exports.ctx.globalCompositeOperation = 'destination-over';
    exports.ctx.imageSmoothingEnabled = true; // enable anti-aliasing of images
}
exports.initCanvasAndContext = initCanvasAndContext;


/***/ }),

/***/ "./src/input/InputManager.ts":
/*!***********************************!*\
  !*** ./src/input/InputManager.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class InputManager {
    constructor() {
        this.mouseDownCallbacks = Array();
        this.mouseDown = (e) => {
            e.preventDefault();
            // notify all callbacks
            for (const callback of this.mouseDownCallbacks) {
                callback(e);
            }
        };
        document.addEventListener("mousedown", this.mouseDown);
        document.addEventListener("contextmenu", event => event.preventDefault()); // disable right click context menu
    }
    addMouseDownCallback(callback) {
        this.mouseDownCallbacks.push(callback);
    }
}
exports.InputManager = InputManager;


/***/ }),

/***/ "./src/items/Inventory.ts":
/*!********************************!*\
  !*** ./src/items/Inventory.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Inventory {
    constructor() {
        this.items = new Array(9); // MAX_NUM_ITEMS = 9
    }
    addItem(item) {
        if (item != null) {
            // add the item to the first available slot
            for (let index = 0; index < this.items.length; index++) {
                if (this.items[index] == null) {
                    this.items[index] = item;
                    return true;
                }
            }
        }
        return false;
    }
    removeItem(item) {
        for (let index = 0; index < this.items.length; index++) {
            if (this.items[index] === item) {
                console.log("removed " + item.getName());
                this.items[index] = null;
                return this.items[index];
            }
        }
        return null;
    }
    removeItemByIndex(index) {
        if (index != null && index < this.items.length) {
            const item = this.items[index];
            this.items[index] = null;
            return item;
        }
        return null;
    }
    moveItem(item, index) {
        if (this.items[index] == null) {
            let x = this.removeItem(item);
            if (x != null) {
                this.items[index] = item;
            }
        }
    }
    clear() {
        for (let index = 0; index < this.items.length; index++) {
            this.items[index] = null;
        }
    }
    getItems() {
        return this.items;
    }
}
exports.Inventory = Inventory;


/***/ }),

/***/ "./src/items/Item.ts":
/*!***************************!*\
  !*** ./src/items/Item.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    constructor(name, examineText, imgpath) {
        this.name = name;
        this.examineText = examineText;
        this.imgpath = imgpath;
        this.combinations = [];
    }
    combine(other) {
        for (const cmb of this.combinations) {
            // if the item is combinable, return the array of items created
            if (other === cmb.other) {
                return cmb.out;
            }
        }
        return null;
    }
    addCombination(other, out) {
        if (other != null && out != null) {
            this.combinations.push({ other: other, out: out });
        }
    }
    getName() {
        return this.name;
    }
    getExamineText() {
        return this.examineText;
    }
    getImagePath() {
        return this.imgpath;
    }
    toString() {
        return `Item(${this.name})`;
    }
}
exports.Item = Item;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glob_1 = __webpack_require__(/*! ./glob */ "./src/glob.ts");
const InputManager_1 = __webpack_require__(/*! ./input/InputManager */ "./src/input/InputManager.ts");
const ImageLoader_1 = __webpack_require__(/*! ./resources/ImageLoader */ "./src/resources/ImageLoader.ts");
const JSONLoader_1 = __webpack_require__(/*! ./resources/JSONLoader */ "./src/resources/JSONLoader.ts");
const Level_1 = __webpack_require__(/*! ./game/Level */ "./src/game/Level.ts");
const SpriteAnimation_1 = __webpack_require__(/*! ./sprites/SpriteAnimation */ "./src/sprites/SpriteAnimation.ts");
const TextureAtlas_1 = __webpack_require__(/*! ./sprites/TextureAtlas */ "./src/sprites/TextureAtlas.ts");
const PlayerSprite_1 = __webpack_require__(/*! ./sprites/PlayerSprite */ "./src/sprites/PlayerSprite.ts");
const Item_1 = __webpack_require__(/*! ./items/Item */ "./src/items/Item.ts");
const Inventory_1 = __webpack_require__(/*! ./items/Inventory */ "./src/items/Inventory.ts");
let inputManager = new InputManager_1.InputManager();
let img;
let sceneScale;
let levelScale;
let depthScaleY;
let staticSprites = new Array();
let interactableSprites = new Array();
let playerSprite;
let navmesh;
let items = {}; // database of items
let itemslotbtns = []; // array of itemslot html buttons
let itembtns = []; // array of item html buttons
let invent = new Inventory_1.Inventory(); // the player's inventory
let selectedItem; // user can select an item from inventory by left clicking
let selectedItemBtn;
let fbWidth;
let fbHeight;
let lastTime;
function gameLoop() {
    requestAnimationFrame(gameLoop);
    glob_1.ctx.fillStyle = "black";
    glob_1.ctx.fillRect(0, 0, fbWidth, fbHeight);
    // set origin to the canvas's centre
    glob_1.ctx.save();
    glob_1.ctx.translate(fbWidth / 2, fbHeight / 2);
    glob_1.ctx.scale(sceneScale, sceneScale);
    const currentTime = Date.now();
    const deltaTime = currentTime - lastTime;
    // draw the scene specific sprites
    for (const sprite of staticSprites) {
        sprite.draw(currentTime, deltaTime);
    }
    // draw the sprites which the player can interact with
    for (const sprite of interactableSprites) {
        sprite.draw(currentTime, deltaTime);
    }
    // draw the player sprite
    playerSprite.draw(currentTime, deltaTime);
    // DEBUG - draw the collision boxes
    navmesh.draw();
    // restore canvas to original settings
    glob_1.ctx.restore();
    lastTime = currentTime;
}
inputManager.addMouseDownCallback((event) => {
    let x = (event.layerX - glob_1.canvas.offsetLeft - fbWidth / 2) / sceneScale;
    let y = (event.layerY - glob_1.canvas.offsetTop - fbHeight / 2) / sceneScale;
    console.log("mouse down at (" + x + ", " + y + ")");
    let interactedWithSprite = false;
    for (const sprite of interactableSprites) {
        if (event.button === 0) {
            if (sprite.inInteractionZone(playerSprite.x, playerSprite.y) && sprite.inClickZone(x, y)) {
                // interact with the sprite
                const obj = sprite.interact(selectedItem);
                if (obj != null) {
                    playerSprite.openSpeechBubble(obj.text);
                    for (const itm of obj.items) {
                        invent.addItem(itm);
                        refreshAllItemsDisplayed();
                    }
                }
                else {
                    playerSprite.openSpeechBubble("That's a rubbish idea!");
                }
                interactedWithSprite = true;
                break;
            }
        }
        else if (event.button === 2) {
            if (sprite.inClickZone(x, y)) {
                // examine the interactable sprite
                playerSprite.openSpeechBubble(sprite.getExamineText());
                interactedWithSprite = true;
                break;
            }
        }
    }
    if (!interactedWithSprite) {
        if (event.button === 0) {
            let waypoints = navmesh.getWaypoints(playerSprite.x, playerSprite.y, x, y);
            playerSprite.setWaypoints(waypoints);
        }
    }
});
function loadPlayerSprite() {
    return new Promise((resolve, reject) => {
        let atlas = new TextureAtlas_1.TextureAtlas("res/atlases/animated.png");
        let playerSprite;
        const atlasLoadedPromise = atlas.load().then(() => {
            const TEST_ANIMATION = new SpriteAnimation_1.SpriteAnimation(2, atlas, "animated");
            playerSprite = new PlayerSprite_1.PlayerSprite(100, 200, 1.25, "centre", "top", [TEST_ANIMATION]);
            playerSprite.setCurrentAnimation(0);
        }).catch(() => {
            console.log('error: unable to load player sprite texture atlas');
            reject(null);
        });
        let speechBubbleImage;
        const speechBubbleLoadedPromise = ImageLoader_1.ImageLoader.loadImage("res/images/speech_bubble.png").then((img) => {
            speechBubbleImage = img;
        }).catch(() => {
            console.log("error: speech bubble image could not be loaded");
            reject(null);
        });
        Promise.all([atlasLoadedPromise, speechBubbleLoadedPromise]).then(() => {
            playerSprite.setSpeechBubbleImage(speechBubbleImage);
            resolve(playerSprite);
        });
    });
}
// program entry point
window.onload = () => {
    glob_1.initCanvasAndContext();
    // set the canvas size
    glob_1.canvas.width = window.innerWidth * 0.95;
    glob_1.canvas.height = window.innerHeight * 0.95;
    fbWidth = glob_1.canvas.width;
    fbHeight = glob_1.canvas.height;
    // level setup data
    let playerStartX = 0;
    let playerStartY = 0;
    const loadPlayerSpritePromise = loadPlayerSprite().then((sprite) => {
        playerSprite = sprite;
    }).catch(() => {
        console.log("error");
    });
    const loadItemsPromise = JSONLoader_1.JSONLoader.loadJSONFile("res/items/items.json").then((obj) => {
        //console.log(obj.items)
        for (const id in obj.items) {
            const itm = obj.items[id];
            items[id] = new Item_1.Item(itm.name, itm.examine_text, itm.image);
        }
        for (const id in obj.combinations) {
            const combination = obj.combinations[id];
            const item1 = items[combination.item1];
            const item2 = items[combination.item2];
            const itemsOut = [];
            for (const idOut of combination.items_out) {
                itemsOut.push(items[idOut]);
            }
            if (item1 != null && item2 != null) {
                item1.addCombination(item2, itemsOut);
                item2.addCombination(item1, itemsOut);
            }
        }
        loadPlayerInventory("ack");
        initGUIControllers();
    }).catch(() => {
        console.log("error: items could not be loaded");
    }).then(() => {
        return Level_1.Level.loadLevel("res/levels/level1.json", items);
    }).then((levelData) => {
        img = levelData.backgroundImg;
        staticSprites = levelData.staticSprites;
        interactableSprites = levelData.interactableSprites;
        levelScale = levelData.sceneScale ? levelData.sceneScale : 1.0;
        sceneScale = levelScale * glob_1.canvas.height / 880; // scale based on the canvas size so game fits on screen
        depthScaleY = levelData.depthScaleY;
        playerStartX = levelData.playerStartX;
        playerStartY = levelData.playerStartY;
        navmesh = levelData.navmesh;
    }).catch(() => {
        console.log("error: level could not be loaded");
    });
    Promise.all([loadPlayerSpritePromise, loadItemsPromise]).then(() => {
        playerSprite.x = playerStartX;
        playerSprite.y = playerStartY;
        playerSprite.setStartPos(playerStartX, playerStartY);
        playerSprite.setDepthScale(depthScaleY);
        lastTime = Date.now();
        gameLoop();
    }).catch(() => {
        console.log("error: game could not be loaded");
    });
};
// on window resize change the scale
window.onresize = () => {
    // set the canvas size
    glob_1.canvas.width = window.innerWidth * 0.95;
    glob_1.canvas.height = window.innerHeight * 0.95;
    fbWidth = glob_1.canvas.width;
    fbHeight = glob_1.canvas.height;
    sceneScale = levelScale * glob_1.canvas.height / 880; // scale based on the canvas size so game fits on screen
    console.log(sceneScale);
};
// load the player's inventory
function loadPlayerInventory(path) {
    // TODO - load from file
    //invent.addItem(items["0.0.1-001"]);
    //invent.addItem(items["0.0.1-002"]);
    invent.addItem(items["0.0.1-002"]);
    //invent.addItem(items["0.0.1-003"]);
}
// gui control
function initGUIControllers() {
    // get all of the item slot html buttons
    itemslotbtns.push(document.getElementById("itemslot1"));
    itemslotbtns.push(document.getElementById("itemslot2"));
    itemslotbtns.push(document.getElementById("itemslot3"));
    itemslotbtns.push(document.getElementById("itemslot4"));
    itemslotbtns.push(document.getElementById("itemslot5"));
    itemslotbtns.push(document.getElementById("itemslot6"));
    itemslotbtns.push(document.getElementById("itemslot7"));
    itemslotbtns.push(document.getElementById("itemslot8"));
    itemslotbtns.push(document.getElementById("itemslot9"));
    // add a button for each item in the player's inventory
    for (let index = 0; index < invent.getItems().length; index++) {
        const item = invent.getItems()[index];
        if (item != null) {
            // add a button for each item in the player's inventory
            addNewItemButton(index, item);
        }
    }
    for (let index = 0; index < itemslotbtns.length; index++) {
        const itemslotbtn = itemslotbtns[index];
        itemslotbtn.onclick = (evt) => {
            onItemSlotClick(itemslotbtn, index, evt);
        };
    }
}
function addNewItemButton(itemslotIndex, item) {
    // add a button for the item
    let itembtn = document.createElement("button");
    itembtn.classList.add("item");
    itembtn.style.cssText = `background-image: url(${item.getImagePath()});`;
    document.getElementById("invent").insertBefore(itembtn, itemslotbtns[itemslotIndex]);
    // add a mouse click callback to the new element
    itembtn.onmousedown = (evt) => {
        onItemClick(itembtn, item, evt);
    };
}
function refreshAllItemsDisplayed() {
    // first, remove all item buttons from the dom
    const elems = document.getElementsByClassName("item");
    for (let index = 0; index < elems.length; index++) {
        let element = elems[index];
        element.parentNode.removeChild(element);
    }
    // add a button for each item in the player's inventory
    for (let index = 0; index < invent.getItems().length; index++) {
        const item = invent.getItems()[index];
        if (item != null) {
            // add a button for each item in the player's inventory
            addNewItemButton(index, item);
        }
    }
}
function refreshItemDisplayed(itembtn, item) {
    if (item != null) {
        // change the image displayed on the item button
        itembtn.style.cssText = `background-image: url(${item.getImagePath()});`;
    }
    else {
        // remove the item button from the dom
        itembtn.parentNode.removeChild(itembtn);
    }
}
function onItemSlotClick(itemslotbtn, itemslotIndex, evt) {
    // move selected item to this slot
    if (selectedItem != null && selectedItemBtn != null) {
        // remove from previous itemslot and add to new itemslot
        selectedItemBtn.classList.remove("selecteditem");
        refreshItemDisplayed(selectedItemBtn, null);
        addNewItemButton(itemslotIndex, selectedItem);
        invent.moveItem(selectedItem, itemslotIndex);
        console.log(invent.getItems());
        selectedItem = null;
        selectedItemBtn = null;
    }
}
function onItemClick(itembtn, item, evt) {
    if (evt.button === 0) {
        // combine 2 items, (can't combine item with itself)
        if (selectedItem != null && selectedItemBtn != null && item !== selectedItem) {
            const outItems = selectedItem.combine(item);
            if (outItems != null) {
                refreshItemDisplayed(selectedItemBtn, null);
                refreshItemDisplayed(itembtn, null);
                invent.removeItem(selectedItem);
                invent.removeItem(item);
                for (const outItem of outItems) {
                    invent.addItem(outItem);
                }
                selectedItem = null;
                selectedItemBtn = null;
                console.log(invent.getItems());
                refreshAllItemsDisplayed();
            }
            else {
                selectedItemBtn.classList.remove("selecteditem");
                selectedItem = null;
                selectedItemBtn = null;
            }
        }
        else {
            if (item === selectedItem) {
                selectedItemBtn.classList.remove("selecteditem");
                selectedItem = null;
                selectedItemBtn = null;
            }
            else {
                selectedItem = item;
                selectedItemBtn = itembtn;
                selectedItemBtn.classList.add("selecteditem");
            }
        }
    }
    else if (evt.button === 2) {
        playerSprite.openSpeechBubble(item.getExamineText());
    }
}


/***/ }),

/***/ "./src/resources/ImageLoader.ts":
/*!**************************************!*\
  !*** ./src/resources/ImageLoader.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//declare Promise any;
Object.defineProperty(exports, "__esModule", { value: true });
class ImageLoader {
    static loadImage(path) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = path;
            img.onload = () => {
                resolve(img);
            };
            img.onerror = (err) => {
                reject(null);
            };
        });
    }
}
exports.ImageLoader = ImageLoader;


/***/ }),

/***/ "./src/resources/JSONLoader.ts":
/*!*************************************!*\
  !*** ./src/resources/JSONLoader.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class JSONLoader {
    static loadJSONFile(path) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = () => {
                if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                    const obj = JSON.parse(xhr.responseText);
                    resolve(obj);
                }
                else if (xhr.readyState === XMLHttpRequest.DONE && xhr.status !== 200) {
                    console.log(xhr.status);
                    console.log(xhr.statusText);
                    reject(null);
                }
            };
            //console.log(path);
            xhr.open("GET", path, true);
            xhr.send();
        });
    }
}
exports.JSONLoader = JSONLoader;


/***/ }),

/***/ "./src/sprites/AnimatedSprite.ts":
/*!***************************************!*\
  !*** ./src/sprites/AnimatedSprite.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Sprite_1 = __webpack_require__(/*! ./Sprite */ "./src/sprites/Sprite.ts");
class AnimatedSprite extends Sprite_1.Sprite {
    constructor(x, y, scale, originHorizontal, originVertical, anims) {
        super(x, y, scale, originHorizontal, originVertical);
        this.spriteAnimations = [];
        this.currentAnimation = -1;
        this.setCurrentAnimation = (newAnimationIndex) => {
            if (newAnimationIndex < this.spriteAnimations.length) {
                this.currentAnimation = newAnimationIndex;
            }
        };
        this.addSpriteAnimation = (anim) => {
            if (anim != null) {
                this.spriteAnimations.push(anim);
            }
        };
        this.setSpriteAnimations = (anims) => {
            if (anims != null) {
                this.spriteAnimations = anims;
                this.currentAnimation = -1;
            }
        };
        if (anims != null) {
            this.spriteAnimations = anims;
        }
    }
    draw(currentTime, deltaTime) {
        if (this.currentAnimation >= 0) {
            const anim = this.spriteAnimations[this.currentAnimation];
            this.refreshOrigin(anim.getCurrentFrame().w, anim.getCurrentFrame().h);
            anim.draw(currentTime, this.originX, this.originY, this.scale);
        }
    }
    setPos(x, y) {
        this.x = x;
        this.y = y;
    }
}
exports.AnimatedSprite = AnimatedSprite;


/***/ }),

/***/ "./src/sprites/InteractableSprite.ts":
/*!*******************************************!*\
  !*** ./src/sprites/InteractableSprite.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const StaticSprite_1 = __webpack_require__(/*! ./StaticSprite */ "./src/sprites/StaticSprite.ts");
class InteractableSprite extends StaticSprite_1.StaticSprite {
    constructor(x, y, scale, originHorizontal, originVertical, atlas, imageName, examineText, interactionZone, clickZone, interactions) {
        super(x, y, scale, originHorizontal, originVertical, atlas, imageName);
        this.examineText = examineText;
        this.interactionZone = interactionZone;
        this.clickZone = clickZone;
        this.interactions = interactions;
    }
    draw(currentTime, deltaTime) {
        super.draw(currentTime, deltaTime);
        // DEBUG - draw the circle and rectangle
        this.clickZone.draw();
        this.interactionZone.draw();
    }
    inInteractionZone(x, y) {
        return this.interactionZone.contains(x, y);
    }
    inClickZone(x, y) {
        return this.clickZone.contains(x, y);
    }
    // interact with the sprite
    // item can be null
    interact(item) {
        for (const inter of this.interactions) {
            // if the items match, then interact with the object
            if (inter.getItem() == item) {
                let obj = inter.interact(item);
                if (obj != null) {
                    // remove the interaction if it has been fulfilled
                    this.interactions.splice(this.interactions.indexOf(inter), 1);
                }
                return obj;
            }
        }
        return null;
    }
    getExamineText() {
        return this.examineText;
    }
}
exports.InteractableSprite = InteractableSprite;


/***/ }),

/***/ "./src/sprites/NavSprite.ts":
/*!**********************************!*\
  !*** ./src/sprites/NavSprite.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const AnimatedSprite_1 = __webpack_require__(/*! ./AnimatedSprite */ "./src/sprites/AnimatedSprite.ts");
class NavSprite extends AnimatedSprite_1.AnimatedSprite {
    constructor(x, y, scale, originHorizontal, originVertical, anims, moveSpeed = 0.5) {
        super(x, y, scale, originHorizontal, originVertical, anims);
        this.moveSpeed = moveSpeed;
    }
    draw(currentTime, deltaTime) {
        // move towards the next waypoint
        if (this.nextWaypoint != null) {
            const angle = Math.atan(Math.abs(this.nextWaypoint.y - this.y) / Math.abs(this.nextWaypoint.x - this.x));
            const moveSpeedX = this.moveSpeed * deltaTime * Math.cos(angle) * this.scale;
            const moveSpeedY = this.moveSpeed * deltaTime * Math.sin(angle) * this.scale;
            // if the sprite has reached the waypoint (or thereabouts) then get the next waypoint
            if (this.x >= this.nextWaypoint.x - 5 && this.x <= this.nextWaypoint.x + 5 &&
                this.y >= this.nextWaypoint.y - 5 && this.y <= this.nextWaypoint.y + 5) {
                //console.log("arrived", this.x, this.y);
                this.x = this.nextWaypoint.x;
                this.y = this.nextWaypoint.y;
                if (this.waypoints != null && this.waypoints.length > 0) {
                    this.nextWaypoint = this.waypoints.pop();
                }
                else {
                    this.nextWaypoint = null;
                }
            }
            // move towards the next waypoint
            if (this.nextWaypoint != null) {
                if (this.x < this.nextWaypoint.x - 5) {
                    this.x += moveSpeedX;
                }
                else if (this.x > this.nextWaypoint.x + 5) {
                    this.x -= moveSpeedX;
                }
                if (this.y < this.nextWaypoint.y - 5) {
                    this.y += moveSpeedY;
                }
                else if (this.y > this.nextWaypoint.y + 5) {
                    this.y -= moveSpeedY;
                }
            }
        }
        // scale the player based on the depth of the mouse position
        this.scale = this.baseScale * Math.pow(this.depthScaleY, (this.startY - this.y));
        super.draw(currentTime, deltaTime);
    }
    setWaypoints(waypoints) {
        this.waypoints = waypoints;
        this.nextWaypoint = null;
        if (this.waypoints != null && this.waypoints.length > 0) {
            console.log(this.waypoints);
            this.nextWaypoint = this.waypoints.pop();
            console.log("next: " + this.nextWaypoint.x + ", " + this.nextWaypoint.y);
        }
    }
    setDepthScale(depthScaleY) {
        this.depthScaleY = depthScaleY;
    }
    setStartPos(x, y) {
        this.startX = x;
        this.startY = y;
    }
}
exports.NavSprite = NavSprite;


/***/ }),

/***/ "./src/sprites/PlayerSprite.ts":
/*!*************************************!*\
  !*** ./src/sprites/PlayerSprite.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glob_ts_1 = __webpack_require__(/*! ../glob.ts */ "./src/glob.ts");
const NavSprite_1 = __webpack_require__(/*! ./NavSprite */ "./src/sprites/NavSprite.ts");
class PlayerSprite extends NavSprite_1.NavSprite {
    constructor(x, y, scale, originHorizontal, originVertical, anims, moveSpeed = 0.5) {
        super(x, y, scale, originHorizontal, originVertical, anims, moveSpeed);
        this.speechBubbleOpen = false;
        this.BASE_FONT_SIZE = 75;
    }
    draw(currentTime, deltaTime) {
        super.draw(currentTime, deltaTime);
        if (this.speechBubbleOpen) {
            // draw the speech bubble
            glob_ts_1.ctx.save();
            glob_ts_1.ctx.translate(this.x, this.originY);
            //ctx.drawImage(this.speechBubbleImage, -this.speechBubbleImage.width/2 * this.scale, -this.speechBubbleImage.height/2 * this.scale, this.speechBubbleImage.width * this.scale, this.speechBubbleImage.height * this.scale);
            glob_ts_1.ctx.scale(this.scale, this.scale);
            glob_ts_1.ctx.shadowColor = "#555555";
            glob_ts_1.ctx.shadowBlur = 5;
            glob_ts_1.ctx.fillStyle = "#1AFF80"; // green: #1AFF80, amber: #FFB642, blue: #2ECFFF
            glob_ts_1.ctx.fillText(this.speechBubbleText, -this.textWidth / 2, 0);
            glob_ts_1.ctx.restore();
            // speech bubble lasts 1/2 second for each word
            if (currentTime - this.speechBubbleShownAt >= this.speechBubbleText.split(" ").length * 500 + 500) {
                this.speechBubbleOpen = false;
            }
        }
    }
    openSpeechBubble(text) {
        if (text != null) {
            this.speechBubbleOpen = true;
            this.speechBubbleText = text;
            this.speechBubbleShownAt = Date.now();
            glob_ts_1.ctx.font = `${this.BASE_FONT_SIZE}px Bookman`;
            this.textWidth = glob_ts_1.ctx.measureText(text).width;
            // create a div containing the text so the pixel width of text can be calculated
            // https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript
            /*let div = document.createElement("div");
            div.style.cssText = `position: absolute; visibility: hidden; height: auto; width: auto; white-space: nowrap; font-size: ${this.BASE_FONT_SIZE}`;
            document.body.insertBefore(div, null);
            this.textWidth = div.clientWidth + 1;*/
            console.log("text width", this.textWidth);
        }
    }
    setSpeechBubbleImage(img) {
        this.speechBubbleImage = img;
    }
}
exports.PlayerSprite = PlayerSprite;


/***/ }),

/***/ "./src/sprites/Sprite.ts":
/*!*******************************!*\
  !*** ./src/sprites/Sprite.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Sprite {
    constructor(x, y, scale, originHorizontal, originVertical, depth = 0) {
        this.x = x;
        this.y = y;
        this.scale = scale;
        this.originHorizontal = originHorizontal;
        this.originVertical = originVertical;
        this.depth = depth;
        this.baseScale = this.scale;
    }
    refreshOrigin(width, height) {
        // calculate the position at which to draw the sprite
        if (this.originHorizontal == "right") {
            this.originX = this.x - width * this.scale;
        }
        else if (this.originHorizontal == "left") {
            this.originX = this.x;
        }
        else {
            this.originX = this.x - width / 2 * this.scale;
        }
        // calculate the position at which to draw the sprite
        if (this.originVertical == "top") {
            this.originY = this.y - height * this.scale;
        }
        else if (this.originVertical == "bottom") {
            this.originY = this.y;
        }
        else {
            this.originY = this.y - height / 2 * this.scale;
        }
    }
}
exports.Sprite = Sprite;


/***/ }),

/***/ "./src/sprites/SpriteAnimation.ts":
/*!****************************************!*\
  !*** ./src/sprites/SpriteAnimation.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glob_ts_1 = __webpack_require__(/*! ../glob.ts */ "./src/glob.ts");
class SpriteAnimation {
    constructor(numFrames, atlas, sequenceName) {
        this.numFrames = numFrames;
        this.atlas = atlas;
        this.sequenceName = sequenceName;
        // http://www.typescriptgames.com/AnimatedSprites.html
        this.currentFrame = 0;
        this.lastTime = Date.now();
        this.draw = (currentTime, x, y, scale) => {
            let frame = this.getCurrentFrame();
            if (frame.frameDuration <= currentTime - this.lastTime) {
                this.currentFrame++;
                if (this.currentFrame >= this.numFrames) {
                    this.currentFrame = 0;
                }
                this.lastTime = currentTime;
                frame = this.getCurrentFrame();
            }
            // sprites are drawn from their centre-x, bottom-y, i.e. feet position
            //let topLeftX = x - frame.w/2 * scale;
            //let topLeftY = y - frame.h * scale;
            glob_ts_1.ctx.save();
            glob_ts_1.ctx.translate(x, y);
            glob_ts_1.ctx.rect(frame.x, frame.y, frame.w, frame.h);
            glob_ts_1.ctx.drawImage(this.atlas.image, frame.x, frame.y, frame.w, frame.h, frame.offsetx, frame.offsety, frame.w * scale, frame.h * scale);
            glob_ts_1.ctx.restore();
        };
        this.getCurrentFrame = () => {
            if (this.currentFrame > 9) {
                return this.atlas.frames[this.sequenceName + "_" + this.currentFrame.toString()];
            }
            return this.atlas.frames[this.sequenceName + "_" + "0" + this.currentFrame.toString()];
        };
    }
}
exports.SpriteAnimation = SpriteAnimation;


/***/ }),

/***/ "./src/sprites/StaticSprite.ts":
/*!*************************************!*\
  !*** ./src/sprites/StaticSprite.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glob_ts_1 = __webpack_require__(/*! ../glob.ts */ "./src/glob.ts");
const Sprite_1 = __webpack_require__(/*! ./Sprite */ "./src/sprites/Sprite.ts");
class StaticSprite extends Sprite_1.Sprite {
    constructor(x, y, scale, originHorizontal, originVertical, atlas, imageName) {
        super(x, y, scale, originHorizontal, originVertical);
        this.atlas = atlas;
        this.imageName = imageName;
    }
    refreshImage() {
        this.image = this.atlas.frames[this.imageName]; // get the image from the atlas
        this.refreshOrigin(this.image.w, this.image.h);
    }
    draw(currentTime, deltaTime) {
        glob_ts_1.ctx.save();
        glob_ts_1.ctx.translate(this.originX, this.originY);
        glob_ts_1.ctx.rect(this.image.x, this.image.y, this.image.w, this.image.h);
        glob_ts_1.ctx.drawImage(this.atlas.image, this.image.x, this.image.y, this.image.w, this.image.h, this.image.offsetx, this.image.offsety, this.image.w * this.scale, this.image.h * this.scale);
        glob_ts_1.ctx.restore();
    }
}
exports.StaticSprite = StaticSprite;


/***/ }),

/***/ "./src/sprites/TextureAtlas.ts":
/*!*************************************!*\
  !*** ./src/sprites/TextureAtlas.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const JSONLoader_1 = __webpack_require__(/*! ../resources/JSONLoader */ "./src/resources/JSONLoader.ts");
const ImageLoader_1 = __webpack_require__(/*! ../resources/ImageLoader */ "./src/resources/ImageLoader.ts");
const TextureAtlasFrame_1 = __webpack_require__(/*! ./TextureAtlasFrame */ "./src/sprites/TextureAtlasFrame.ts");
class TextureAtlas {
    constructor(atlasName) {
        // http://www.typescriptgames.com/TextureAtlas.html
        this.frames = {};
        this.taLoadComplete = false;
        this.image = new Image();
        this.atlasName = "";
        this.imageFileName = "";
        this.jsonFileName = "";
        this.atlasName = atlasName;
        this.imageFileName = atlasName;
        this.jsonFileName = atlasName.replace(".png", "") + ".json";
    }
    load() {
        const imgPromise = ImageLoader_1.ImageLoader.loadImage(this.imageFileName).then((img) => {
            this.image = img;
        }).catch(() => {
            console.log('error: unable to load ' + this.imageFileName);
        });
        const jsonPromise = JSONLoader_1.JSONLoader.loadJSONFile(this.jsonFileName).then((data) => {
            this.createFrames(data);
        }).catch(() => {
            console.log('error: unable to load ' + this.jsonFileName);
        });
        return Promise.all([imgPromise, jsonPromise]).then(() => {
            console.log(this.atlasName + ' loaded successfully');
        }).catch(() => {
            console.log('error: ' + this.atlasName + ' failed to load');
        });
    }
    createFrames(data) {
        for (const name in data.frames) {
            const spriteData = data.frames[name];
            let frame = new TextureAtlasFrame_1.TextureAtlasFrame(spriteData.frame.x, spriteData.frame.y, spriteData.frame.w, spriteData.frame.h, spriteData.spriteSourceSize.x, spriteData.spriteSourceSize.y, spriteData.frameDuration);
            this.frames[name] = frame;
        }
        //        console.log(JSON.stringify(this.frames));
    }
}
exports.TextureAtlas = TextureAtlas;


/***/ }),

/***/ "./src/sprites/TextureAtlasFrame.ts":
/*!******************************************!*\
  !*** ./src/sprites/TextureAtlasFrame.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class TextureAtlasFrame {
    constructor(x = 0, y = 0, w = 1, h = 1, offsetx = 0, offsety = 0, frameDuration = 100) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.offsetx = offsetx;
        this.offsety = offsety;
        this.frameDuration = frameDuration;
    }
    set(x, y) {
        this.x = x;
        this.y = y;
    }
}
exports.TextureAtlasFrame = TextureAtlasFrame;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbGxpc2lvbi9DaXJjbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbGxpc2lvbi9OYXZNZXNoLnRzIiwid2VicGFjazovLy8uL3NyYy9jb2xsaXNpb24vUG9pbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbGxpc2lvbi9SZWN0YW5nbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbGxpc2lvbi9UcmlhbmdsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9JbnRlcmFjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9MZXZlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9SZWNlaXZlSXRlbUludGVyYWN0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9nbG9iLnRzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dC9JbnB1dE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2l0ZW1zL0ludmVudG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaXRlbXMvSXRlbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVzb3VyY2VzL0ltYWdlTG9hZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvSlNPTkxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlcy9BbmltYXRlZFNwcml0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlcy9JbnRlcmFjdGFibGVTcHJpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZXMvTmF2U3ByaXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGVzL1BsYXllclNwcml0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlcy9TcHJpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZXMvU3ByaXRlQW5pbWF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGVzL1N0YXRpY1Nwcml0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlcy9UZXh0dXJlQXRsYXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZXMvVGV4dHVyZUF0bGFzRnJhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ25FQSx5RUFBOEI7QUFHOUI7SUFRSSxZQUFZLENBQVMsRUFBRSxDQUFTLEVBQUUsTUFBYyxFQUFFLFFBQWdCLEtBQUssRUFBRSxhQUFxQixDQUFDO1FBTnhGLE1BQUMsR0FBVyxDQUFDLENBQUM7UUFDZCxNQUFDLEdBQVcsQ0FBQyxDQUFDO1FBQ2QsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLFVBQUssR0FBVyxLQUFLLENBQUM7UUFJekIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFD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TUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNwQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDcEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNwQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDcEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUVwQixJQUFJLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztZQUMzQixJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztZQUVuQixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDVCxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDbEYsQ0FBQyxHQUFHLENBQUUsSUFBSSxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztZQUVsRixFQUFFLEVBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUN4QyxDQUFDO2dCQUNHLDhHQUE4RztnQkFDOUcsTUFBTSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDaEMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDaEMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BLLENBQUM7WUFFRCw4QkFBOEI7WUFDOUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLGVBQWU7UUFDakMsQ0FBQztRQUVELEVBQUU7UUFDTSxpQkFBWSxHQUFHLENBQUMsTUFBYSxFQUFFLE1BQWEsRUFBRSxFQUFFO1lBQ3ZELE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2xELENBQUM7UUFFTyx3QkFBbUIsR0FBRyxDQUFDLFFBQWdELEVBQUUsQ0FBUSxFQUFFLEVBQUU7WUFDekYsRUFBRSxFQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNYLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNkLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixHQUFHLEVBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRyxFQUFFLENBQUM7b0JBQ25ELE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ3BDLEVBQUUsRUFBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDdEMsTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFDakIsQ0FBQztnQkFDTCxDQUFDO1lBQ0wsQ0FBQztZQUVELE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNkLENBQUM7UUFFTyxrQkFBYSxHQUFHLENBQUMsUUFBc0IsRUFBRSxDQUFRLEVBQVUsRUFBRTtZQUNqRSxFQUFFLEVBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2QsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLEdBQUcsRUFBQyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFHLEVBQUUsQ0FBQztvQkFDbkQsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUMvQixFQUFFLEVBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3RDLE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBQ2pCLENBQUM7Z0JBQ0wsQ0FBQztZQUNMLENBQUM7WUFFRCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZCxDQUFDO1FBRU8sZ0JBQVcsR0FBRyxDQUFDLEtBQXNDLEVBQUUsSUFBOEIsRUFBVSxFQUFFO1lBQ3JHLEVBQUUsRUFBQyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDcEQsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2QsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLEdBQUcsRUFBQyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFHLEVBQUUsQ0FBQztvQkFDaEQsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN2QixFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNsRixNQUFNLENBQUMsS0FBSyxDQUFDO29CQUNqQixDQUFDO2dCQUNMLENBQUM7WUFDTCxDQUFDO1lBRUQsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2QsQ0FBQztRQTFURyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFFckIscUNBQXFDO1FBQ3JDLEdBQUcsRUFBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUQsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1RCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRTVELG1EQUFtRDtZQUNuRCxFQUFFLEVBQUMsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMvQixPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1RCxDQUFDO1lBQ0QsbURBQW1EO1lBQ25ELEVBQUUsRUFBQyxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQy9CLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVELENBQUM7WUFDRCxtREFBbUQ7WUFDbkQsRUFBRSxFQUFDLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDL0IsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUQsQ0FBQztZQUVELCtDQUErQztZQUMvQyxNQUFNLEtBQUssR0FBRyxFQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBQyxDQUFDO1lBQ3pDLE1BQU0sS0FBSyxHQUFHLEVBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFDLENBQUM7WUFDekMsTUFBTSxLQUFLLEdBQUcsRUFBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUMsQ0FBQztZQUV6QyxvREFBb0Q7WUFDcEQsRUFBRSxFQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoQyxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3hFLENBQUM7WUFFRCxFQUFFLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDeEUsQ0FBQztZQUVELEVBQUUsRUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEMsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN4RSxDQUFDO1FBQ0wsQ0FBQztRQUNELDZCQUE2QjtRQUM3QiwwQkFBMEI7UUFDMUIsK0JBQStCO0lBQ25DLENBQUM7Q0FrUUo7QUF0VUQsMEJBc1VDOzs7Ozs7Ozs7Ozs7Ozs7QUMxVUQ7SUFLSSxZQUFZLElBQVksQ0FBQyxFQUFFLElBQVksQ0FBQztRQUhqQyxNQUFDLEdBQVcsQ0FBQyxDQUFDO1FBQ2QsTUFBQyxHQUFXLENBQUMsQ0FBQztRQVFkLFdBQU0sR0FBRyxDQUFDLENBQVEsRUFBVyxFQUFFO1lBQ2xDLE1BQU0sQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDekQsQ0FBQztRQUVNLGFBQVEsR0FBRyxHQUFZLEVBQUU7WUFDNUIsTUFBTSxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDeEMsQ0FBQztRQVZHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDO0NBU0o7QUFsQkQsc0JBa0JDOzs7Ozs7Ozs7Ozs7Ozs7QUNsQkQseUVBQThCO0FBRzlCO0lBU0ksWUFBWSxDQUFTLEVBQUUsQ0FBUyxFQUFFLEtBQWEsRUFBRSxNQUFjLEVBQUUsUUFBZ0IsS0FBSyxFQUFFLGFBQXFCLENBQUM7UUFQdkcsTUFBQyxHQUFXLENBQUMsQ0FBQztRQUNkLE1BQUMsR0FBVyxDQUFDLENBQUM7UUFDZCxjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixVQUFLLEdBQVcsTUFBTSxDQUFDO1FBSTFCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztJQUNoQyxDQUFDO0lBRU0sSUFBSTtRQUVQLGFBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNYLGFBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNoQixhQUFHLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDN0IsYUFBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQy9CLGFBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xELGFBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNiLGFBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRU0sUUFBUSxDQUFDLENBQVMsRUFBRSxDQUFTO1FBRWhDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pHLENBQUM7Q0FDSjtBQWxDRCw4QkFrQ0M7Ozs7Ozs7Ozs7Ozs7OztBQ3JDRCx5RUFBOEI7QUFFOUIsK0VBQTZCO0FBRTdCO0lBUUksWUFBWSxFQUFVLEVBQUUsRUFBVSxFQUFFLEVBQVUsRUFBRSxFQUFVLEVBQUUsRUFBVSxFQUFFLEVBQVU7UUFTM0UsU0FBSSxHQUFHLEdBQVMsRUFBRTtZQUNyQixhQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDWCxhQUFHLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN4QixhQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztZQUNsQixhQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDaEIsYUFBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLGFBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QyxhQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekMsYUFBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLGFBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNiLGFBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNsQixDQUFDO1FBRUQsMkRBQTJEO1FBQ3BELGFBQVEsR0FBRyxDQUFDLENBQVEsRUFBVyxFQUFFO1lBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRixDQUFDO1FBRUQseUNBQXlDO1FBQ2xDLGFBQVEsR0FBRyxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQVcsRUFBRTtZQUNoRCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDaEssSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ2hLLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksYUFBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkcsQ0FBQztRQTlCRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksYUFBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksYUFBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksYUFBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hMLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFD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akMsRUFBRSxFQUFDLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLENBQzdCLENBQUM7WUFDRyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekcsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQzdFLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUU3RSxxRkFBcUY7WUFDckYsRUFBRSxFQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFDckUsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FDM0UsQ0FBQztnQkFDRyx5Q0FBeUM7Z0JBQ3pDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLEVBQUUsRUFBQyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNyRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQzdDLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ0osSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQzdCLENBQUM7WUFDTCxDQUFDO1lBRUQsaUNBQWlDO1lBQ2pDLEVBQUUsRUFBQyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLEVBQUUsRUFBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2xDLElBQUksQ0FBQyxDQUFDLElBQUksVUFBVSxDQUFDO2dCQUN6QixDQUFDO2dCQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN6QyxJQUFJLENBQUMsQ0FBQyxJQUFJLFVBQVUsQ0FBQztnQkFDekIsQ0FBQztnQkFFRCxFQUFFLEVBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNsQyxJQUFJLENBQUMsQ0FBQyxJQUFJLFVBQVUsQ0FBQztnQkFDekIsQ0FBQztnQkFBQyxJQUFJLENBQUMsRUFBRSxFQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDekMsSUFBSSxDQUFDLENBQUMsSUFBSSxVQUFVLENBQUM7Z0JBQ3pCLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQztRQUNELDREQUE0RDtRQUM1RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBSSxDQUFDLFdBQVcsRUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDO1FBRXpFLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSxZQUFZLENBQUMsU0FBdUI7UUFDdkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsRUFBRSxFQUFDLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUM1RSxDQUFDO0lBQ0wsQ0FBQztJQUVNLGFBQWEsQ0FBQyxXQUFtQjtRQUNwQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNuQyxDQUFDO0lBRU0sV0FBVyxDQUFDLENBQVMsRUFBRSxDQUFTO1FBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7Q0FDSjtBQTVFRCw4QkE0RUM7Ozs7Ozs7Ozs7Ozs7OztBQ2hGRCx5RUFBOEI7QUFDOUIseUZBQXFDO0FBS3JDLGtCQUEwQixTQUFRLHFCQUFTO0lBU3ZDLFlBQW1CLENBQVMsRUFBRSxDQUFTLEVBQUUsS0FBYSxFQUFFLGdCQUF3QixFQUFFLGNBQXNCLEVBQUUsS0FBNkIsRUFBRSxZQUFvQixHQUFHO1FBRTVKLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBUm5FLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUl6QixtQkFBYyxHQUFHLEVBQUUsQ0FBQztJQUtyQyxDQUFDO0lBRU0sSUFBSSxDQUFDLFdBQW1CLEVBQUUsU0FBaUI7UUFDOUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFFbkMsRUFBRSxFQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFDdkIseUJBQXlCO1lBQ3pCLGFBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNYLGFBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDcEMsNE5BQTROO1lBQzVOLGFBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEMsYUFBRyxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7WUFDNUIsYUFBRyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7WUFDbkIsYUFBRyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBRyxnREFBZ0Q7WUFDN0UsYUFBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMxRCxhQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFZCwrQ0FBK0M7WUFDL0MsRUFBRSxFQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQy9GLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7WUFDbEMsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0lBRU0sZ0JBQWdCLENBQUMsSUFBWTtRQUNoQyxFQUFFLEVBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDZCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1lBQzdCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7WUFDN0IsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUV0QyxhQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsWUFBWSxDQUFDO1lBQzlDLElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFFN0MsZ0ZBQWdGO1lBQ2hGLGtGQUFrRjtZQUNsRjs7O21EQUd1QztZQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUMsQ0FBQztJQUNMLENBQUM7SUFFTSxvQkFBb0IsQ0FBQyxHQUFHO1FBRTNCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxHQUFHLENBQUM7SUFDakMsQ0FBQztDQUNKO0FBM0RELG9DQTJEQzs7Ozs7Ozs7Ozs7Ozs7O0FDakVEO0lBTUksWUFBc0IsQ0FBUyxFQUFZLENBQVMsRUFBWSxLQUFhLEVBQVksZ0JBQXdCLEVBQVksY0FBc0IsRUFBWSxRQUFnQixDQUFDO1FBQTFKLE1BQUMsR0FBRCxDQUFDLENBQVE7UUFBWSxNQUFDLEdBQUQsQ0FBQyxDQUFRO1FBQVksVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFZLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBUTtRQUFZLG1CQUFjLEdBQWQsY0FBYyxDQUFRO1FBQVksVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUU1SyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDaEMsQ0FBQztJQUVTLGFBQWEsQ0FBQyxLQUFhLEVBQUUsTUFBYztRQUNqRCxxREFBcUQ7UUFDckQsRUFBRSxFQUFDLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMvQyxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsZ0JBQWdCLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDMUIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNqRCxDQUFDO1FBRUQscURBQXFEO1FBQ3JELEVBQUUsRUFBQyxJQUFJLENBQUMsY0FBYyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sR0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQy9DLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxFQUFDLElBQUksQ0FBQyxjQUFjLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDMUIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sR0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNsRCxDQUFDO0lBQ0wsQ0FBQztDQUlKO0FBakNELHdCQWlDQzs7Ozs7Ozs7Ozs7Ozs7O0FDakNELHlFQUE4QjtBQUk5QjtJQUtJLFlBQXNCLFNBQWlCLEVBQVksS0FBbUIsRUFBWSxZQUFvQjtRQUFoRixjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQVksVUFBSyxHQUFMLEtBQUssQ0FBYztRQUFZLGlCQUFZLEdBQVosWUFBWSxDQUFRO1FBSHRHLHNEQUFzRDtRQUM1QyxpQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNuQixhQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBR3ZCLFNBQUksR0FBRyxDQUFDLFdBQW1CLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxLQUFhLEVBQVEsRUFBRTtZQUM3RSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDbkMsRUFBRSxFQUFDLEtBQUssQ0FBQyxhQUFhLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDdEQsQ0FBQztnQkFDRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3BCLEVBQUUsRUFBQyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FDdkMsQ0FBQztvQkFDRyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztnQkFDMUIsQ0FBQztnQkFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQztnQkFDNUIsS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUNuQyxDQUFDO1lBRUQsc0VBQXNFO1lBQ3RFLHVDQUF1QztZQUN2QyxxQ0FBcUM7WUFFckMsYUFBRyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ1gsYUFBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDcEIsYUFBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0MsYUFBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFDMUIsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUNoQixLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQ2hCLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFDNUIsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUN0QyxhQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbEIsQ0FBQztRQUVNLG9CQUFlLEdBQUcsR0FBc0IsRUFBRTtZQUM3QyxFQUFFLEVBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FDekIsQ0FBQztnQkFDRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ3JGLENBQUM7WUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUMzRixDQUFDO0lBcEN3RyxDQUFDO0NBcUM3RztBQTFDRCwwQ0EwQ0M7Ozs7Ozs7Ozs7Ozs7OztBQzlDRCx5RUFBOEI7QUFDOUIsZ0ZBQStCO0FBSS9CLGtCQUEwQixTQUFRLGVBQU07SUFJcEMsWUFBWSxDQUFTLEVBQUUsQ0FBUyxFQUFFLEtBQWEsRUFBRSxnQkFBd0IsRUFBRSxjQUFzQixFQUFZLEtBQW1CLEVBQVksU0FBaUI7UUFFekosS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBRm9ELFVBQUssR0FBTCxLQUFLLENBQWM7UUFBWSxjQUFTLEdBQVQsU0FBUyxDQUFRO0lBRzdKLENBQUM7SUFFTSxZQUFZO1FBRWYsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQywrQkFBK0I7UUFDL0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFTSxJQUFJLENBQUMsV0FBbUIsRUFBRSxTQUFpQjtRQUU5QyxhQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWCxhQUFHLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFDLGFBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRSxhQUFHLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxRCxhQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbEIsQ0FBQztDQUNKO0FBM0JELG9DQTJCQzs7Ozs7Ozs7Ozs7Ozs7O0FDaENELHlHQUFrRDtBQUNsRCw0R0FBb0Q7QUFDcEQsaUhBQXFEO0FBRXJEO0lBVUksWUFBWSxTQUFpQjtRQVI3QixtREFBbUQ7UUFDNUMsV0FBTSxHQUEyQyxFQUFFLENBQUM7UUFDcEQsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsVUFBSyxHQUFxQixJQUFJLEtBQUssRUFBRSxDQUFDO1FBQ3RDLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdEIsa0JBQWEsR0FBVyxFQUFFLENBQUM7UUFDM0IsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFJOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7UUFDL0IsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUM7SUFDaEUsQ0FBQztJQUVNLElBQUk7UUFFUCxNQUFNLFVBQVUsR0FBRyx5QkFBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDdEUsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRTtZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQy9ELENBQUMsQ0FBQztRQUVGLE1BQU0sV0FBVyxHQUFHLHVCQUFVLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUN6RSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM5RCxDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsc0JBQXNCLENBQUMsQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ2hFLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLFlBQVksQ0FBQyxJQUFTO1FBRTFCLEdBQUcsRUFBQyxNQUFNLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQzlCLENBQUM7WUFDRyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JDLElBQUksS0FBSyxHQUFHLElBQUkscUNBQWlCLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQzVFLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDNUgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDOUIsQ0FBQztRQUNULG1EQUFtRDtJQUMvQyxDQUFDO0NBQ0o7QUFqREQsb0NBaURDOzs7Ozs7Ozs7Ozs7Ozs7QUNyREQ7SUFhSSxZQUFZLElBQVksQ0FBQyxFQUFFLElBQVksQ0FBQyxFQUFFLElBQVksQ0FBQyxFQUFFLElBQVksQ0FBQyxFQUFFLFVBQWtCLENBQUMsRUFBRSxVQUFrQixDQUFDLEVBQUUsZ0JBQXdCLEdBQUc7UUFFekksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztJQUN2QyxDQUFDO0lBRU0sR0FBRyxDQUFDLENBQVMsRUFBRSxDQUFTO1FBRTNCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDO0NBQ0o7QUE3QkQsOENBNkJDIiwiZmlsZSI6ImJ1aWxkL2NsYWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi50c1wiKTtcbiIsImltcG9ydCB7Y3R4fSBmcm9tIFwiLi4vZ2xvYi50c1wiXHJcbmltcG9ydCB7SVNoYXBlfSBmcm9tIFwiLi9JU2hhcGVcIlxyXG5cclxuZXhwb3J0IGNsYXNzIENpcmNsZSBpbXBsZW1lbnRzIElTaGFwZVxyXG57XHJcbiAgICBwdWJsaWMgeDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyB5OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHJhZGl1czogbnVtYmVyID0gMTA7XHJcbiAgICBwdWJsaWMgbGluZVdpZHRoOiBudW1iZXIgPSAyO1xyXG4gICAgcHVibGljIGNvbG9yOiBzdHJpbmcgPSBcInJlZFwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCByYWRpdXM6IG51bWJlciwgY29sb3I6IHN0cmluZyA9IFwicmVkXCIsIGxpbmVfd2lkdGg6IG51bWJlciA9IDIpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmxpbmVXaWR0aCA9IGxpbmVfd2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHRoaXMubGluZVdpZHRoO1xyXG4gICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbnRhaW5zKHg6IG51bWJlciwgeTogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoKHkgLSB0aGlzLnkpICoqIDIgKyAoeCAtIHRoaXMueCkgKiogMikgPD0gdGhpcy5yYWRpdXMgKiogMjtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge1RyaWFuZ2xlfSBmcm9tIFwiLi9UcmlhbmdsZVwiXHJcbmltcG9ydCB7UG9pbnR9IGZyb20gXCIuL1BvaW50XCJcclxuXHJcbi8vIG5hdm1lc2ggcGF0aGZpbmRpbmc6IGh0dHBzOi8vbWVkaXVtLmNvbS9AbXNjYW5zaWFuL2Etd2l0aC1uYXZpZ2F0aW9uLW1lc2hlcy0yNDZmZDllNzI0MjRcclxuZXhwb3J0IGNsYXNzIE5hdk1lc2hcclxue1xyXG4gICAgLy8gdmFsaWQgcmVnaW9ucyBvZiB0aGUgbmF2bWVzaFxyXG4gICAgcHJpdmF0ZSB0cmlzOiBBcnJheTxUcmlhbmdsZT47XHJcblxyXG4gICAgLy8gVE9ETyAtIG5ldyBzeXN0ZW0gb2YgdHJpYW5nbGUgcmVwcmVzZW50YXRpb25cclxuICAgIHByaXZhdGUgdmVydGljZXM6IEFycmF5PFBvaW50PjtcclxuICAgIHByaXZhdGUgZWRnZXM6IEFycmF5PHt2MTogbnVtYmVyLCB2MjogbnVtYmVyfT47ICAgICAgICAgLy8gdjEgYW5kIHYyIGFyZSBpbmRpY2VzIGludG8gdmVydGljZXMgbGlzdFxyXG4gICAgcHJpdmF0ZSBvdXRlckVkZ2VzOiBBcnJheTx7djE6IG51bWJlciwgdjI6IG51bWJlcn0+OyAgICAvLyBlZGdlcyB3aGljaCBvbmx5IGFwcGVhciBpbiAxIHRyaVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRyaXM6IEFycmF5PFRyaWFuZ2xlPikge1xyXG4gICAgICAgIHRoaXMudHJpcyA9IHRyaXMgPyB0cmlzIDogW107XHJcbiAgICAgICAgdGhpcy52ZXJ0aWNlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZWRnZXMgPSBbXTtcclxuICAgICAgICB0aGlzLm91dGVyRWRnZXMgPSBbXTtcclxuXHJcbiAgICAgICAgLy8gaW5pdGlhbGlzZSB2ZXJ0aWNlcyBhbmQgZWRnZXMgbGlzdFxyXG4gICAgICAgIGZvcihjb25zdCB0cmkgb2YgdHJpcykge1xyXG4gICAgICAgICAgICBsZXQgcDFJbmRleCA9IHRoaXMuaW5kZXhPZlZlcnRleCh0aGlzLnZlcnRpY2VzLCB0cmkucG9pbnQxKTtcclxuICAgICAgICAgICAgbGV0IHAySW5kZXggPSB0aGlzLmluZGV4T2ZWZXJ0ZXgodGhpcy52ZXJ0aWNlcywgdHJpLnBvaW50Mik7XHJcbiAgICAgICAgICAgIGxldCBwM0luZGV4ID0gdGhpcy5pbmRleE9mVmVydGV4KHRoaXMudmVydGljZXMsIHRyaS5wb2ludDMpO1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgdmVydGV4IGlzIG5vdCBpbiB0aGUgbGlzdCwgYWRkIGl0IHRvIHRoZSBsaXN0XHJcbiAgICAgICAgICAgIGlmKHAxSW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2godHJpLnBvaW50MSk7XHJcbiAgICAgICAgICAgICAgICBwMUluZGV4ID0gdGhpcy5pbmRleE9mVmVydGV4KHRoaXMudmVydGljZXMsIHRyaS5wb2ludDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGlmIHZlcnRleCBpcyBub3QgaW4gdGhlIGxpc3QsIGFkZCBpdCB0byB0aGUgbGlzdFxyXG4gICAgICAgICAgICBpZihwMkluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHRyaS5wb2ludDIpO1xyXG4gICAgICAgICAgICAgICAgcDJJbmRleCA9IHRoaXMuaW5kZXhPZlZlcnRleCh0aGlzLnZlcnRpY2VzLCB0cmkucG9pbnQyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBpZiB2ZXJ0ZXggaXMgbm90IGluIHRoZSBsaXN0LCBhZGQgaXQgdG8gdGhlIGxpc3RcclxuICAgICAgICAgICAgaWYocDNJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmVydGljZXMucHVzaCh0cmkucG9pbnQzKTtcclxuICAgICAgICAgICAgICAgIHAzSW5kZXggPSB0aGlzLmluZGV4T2ZWZXJ0ZXgodGhpcy52ZXJ0aWNlcywgdHJpLnBvaW50Myk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGFkZCBhbGwgMyBlZGdlcyBvZiB0aGUgdHJpIHRvIHRoZSBlZGdlcyBsaXN0XHJcbiAgICAgICAgICAgIGNvbnN0IGVkZ2UxID0ge3YxOiBwMUluZGV4LCB2MjogcDJJbmRleH07XHJcbiAgICAgICAgICAgIGNvbnN0IGVkZ2UyID0ge3YxOiBwMkluZGV4LCB2MjogcDNJbmRleH07XHJcbiAgICAgICAgICAgIGNvbnN0IGVkZ2UzID0ge3YxOiBwM0luZGV4LCB2MjogcDFJbmRleH07XHJcblxyXG4gICAgICAgICAgICAvLyBhZGQgdGhlIGVkZ2VzIGlmIHRoZXkgYXJlIG5vdCBhbHJlYWR5IGluIHRoZSBsaXN0XHJcbiAgICAgICAgICAgIGlmKHRoaXMuaW5kZXhPZkVkZ2UodGhpcy5lZGdlcywgZWRnZTEpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lZGdlcy5wdXNoKGVkZ2UxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3V0ZXJFZGdlcy5wdXNoKGVkZ2UxKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3V0ZXJFZGdlcy5zcGxpY2UodGhpcy5pbmRleE9mRWRnZSh0aGlzLm91dGVyRWRnZXMsIGVkZ2UxKSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuaW5kZXhPZkVkZ2UodGhpcy5lZGdlcywgZWRnZTIpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lZGdlcy5wdXNoKGVkZ2UyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3V0ZXJFZGdlcy5wdXNoKGVkZ2UyKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3V0ZXJFZGdlcy5zcGxpY2UodGhpcy5pbmRleE9mRWRnZSh0aGlzLm91dGVyRWRnZXMsIGVkZ2UyKSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuaW5kZXhPZkVkZ2UodGhpcy5lZGdlcywgZWRnZTMpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lZGdlcy5wdXNoKGVkZ2UzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3V0ZXJFZGdlcy5wdXNoKGVkZ2UzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3V0ZXJFZGdlcy5zcGxpY2UodGhpcy5pbmRleE9mRWRnZSh0aGlzLm91dGVyRWRnZXMsIGVkZ2UzKSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnZlcnRpY2VzKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZWRnZXMpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5vdXRlckVkZ2VzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0V2F5cG9pbnRzID0gKGN1cnJlbnRYOiBudW1iZXIsIGN1cnJlbnRZOiBudW1iZXIsIHRhcmdldFg6IG51bWJlciwgdGFyZ2V0WTogbnVtYmVyKTogQXJyYXk8UG9pbnQ+ID0+IHtcclxuICAgICAgICBmb3IobGV0IHRyaSBvZiB0aGlzLnRyaXMpIHtcclxuICAgICAgICAgICAgLy8gYWxsb3cgZnJlZSBtb3ZlbWVudCB3aXRoaW4gYSB0cmlhbmdsZVxyXG4gICAgICAgICAgICBpZih0cmkuY29udGFpbnModGFyZ2V0WCwgdGFyZ2V0WSkgJiYgdHJpLmNvbnRhaW5zKGN1cnJlbnRYLCBjdXJyZW50WSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbbmV3IFBvaW50KHRhcmdldFgsIHRhcmdldFkpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IHRyaSBvZiB0aGlzLnRyaXMpIHtcclxuICAgICAgICAgICAgLy8gaWYgYm90aCBwb2ludHMgZmFsbCB1bmRlciBkaWZmZXJlbnQgdHJpYW5nbGVzLCBmaW5kIHRoZSBhIHdheXBvaW50IHRvIHJlYWNoIHRoZSBuZXh0IHRyaVxyXG4gICAgICAgICAgICBpZih0cmkuY29udGFpbnModGFyZ2V0WCwgdGFyZ2V0WSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vcmV0dXJuIG5ldyBQb2ludCh0YXJnZXRYLCB0YXJnZXRZKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IHRoaXMuZmluZFBhdGgobmV3IFBvaW50KGN1cnJlbnRYLCBjdXJyZW50WSksIG5ldyBQb2ludCh0YXJnZXRYLCB0YXJnZXRZKSk7XHJcbiAgICAgICAgICAgICAgICBpZihvYmogIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByb3V0ZTogQXJyYXk8UG9pbnQ+ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGUucHVzaChuZXcgUG9pbnQodGFyZ2V0WCwgdGFyZ2V0WSkpOyAgICAvLyBnbyBmcm9tIGxhc3QgcG9pbnQgdG8gdGhlIGVuZCBwb2ludFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRSb3V0ZShvYmouY2FtZUZyb20sIG9iai5lbmRWZXJ0ZXgsIHJvdXRlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZHVjZVJvdXRlKHJvdXRlKTsgICAgLy8gcmVtb3ZlIHJlZHVuZGFudCBub2RlcyBmcm9tIHRoZSBwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgaWYocm91dGUubGVuZ3RoID4gMCkgICAgICAgIC8vIGxhc3Qgd2F5cG9pbnQgd2lsbCBiZSBzdGFydCAtPiBnZXQgcmlkIG9mIGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicm91dGU6IFwiICsgcm91dGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlbW92ZSB1bmVjZXNzYXJ5IHdheXBvaW50cyBmcm9tIHRoZSByb3V0ZSwgaS5lLiBpZiB0aGVpciBpcyBhIHN0cmFpZ2h0IHBhdGggZnJvbSBhIHRvIGMsIHJlbW92ZSBiXHJcbiAgICBwcml2YXRlIHJlZHVjZVJvdXRlID0gKHJvdXRlOiBBcnJheTxQb2ludD4pID0+IHtcclxuICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgIC8vIGxvb3AgdW50aWwgbm8gbW9yZSByZWR1Y3Rpb25zIGNhbiBiZSBtYWRlXHJcbiAgICAgICAgd2hpbGUoaW5kZXggPCByb3V0ZS5sZW5ndGggLSAyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGEgPSByb3V0ZVtpbmRleF1cclxuICAgICAgICAgICAgY29uc3QgYyA9IHJvdXRlW2luZGV4ICsgMl1cclxuXHJcbiAgICAgICAgICAgIC8vIHRoZXJlIGlzIGEgdmFsaWQgc3RyYWlnaHQgcGF0aCBiZXR3ZWVuIGEgYW5kIGMgaWYgdGhlIHBhdGggZG9lcyBub3QgaW50ZXJzZWN0IGFuIG91dGVyIGVkZ2VcclxuICAgICAgICAgICAgbGV0IGludGVyc2VjdHNPdXRlckVkZ2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yKGNvbnN0IG91dGVyRWRnZSBvZiB0aGlzLm91dGVyRWRnZXMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuZG9MaW5lU2VnbWVudHNJbnRlcnNlY3QodGhpcy52ZXJ0aWNlc1tvdXRlckVkZ2UudjFdLCB0aGlzLnZlcnRpY2VzW291dGVyRWRnZS52Ml0sIGEsIGMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhhLnRvU3RyaW5nKCksIGMudG9TdHJpbmcoKSwgXCJpbnRlcnNlY3RzXCIsIHRoaXMudmVydGljZXNbb3V0ZXJFZGdlLnYxXS50b1N0cmluZygpLCB0aGlzLnZlcnRpY2VzW291dGVyRWRnZS52Ml0udG9TdHJpbmcoKSlcclxuICAgICAgICAgICAgICAgICAgICBpbnRlcnNlY3RzT3V0ZXJFZGdlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gaWYgdGhlIHBhdGggZG9lcyBub3QgaW50ZXJzZWN0IGFuIG91dGVyIGVkZ2UsIHJlbW92ZSB3YXlwb2ludCBiXHJcbiAgICAgICAgICAgIGlmKCFpbnRlcnNlY3RzT3V0ZXJFZGdlKSB7XHJcbiAgICAgICAgICAgICAgICByb3V0ZS5zcGxpY2UoaW5kZXgrMSwgMSk7XHJcbiAgICAgICAgICAgICAgICAvLyBkb24ndCBuZWVkIHRvIGluY3JlbWVudCBpbmRleCBzaW5jZSBhcnJheSBsZW5ndGggaGFzIGJlZW4gcmVkdWNlZFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gbW92ZSBvbnRvIG5leHQgcGFpciBvZiB3YXlwb2ludHNcclxuICAgICAgICAgICAgICAgIGluZGV4ICsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYnVpbGRSb3V0ZSA9IChjYW1lRnJvbToge30sIHZlcnRleDogUG9pbnQsIHJvdXRlOiBBcnJheTxQb2ludD4pID0+IHtcclxuICAgICAgICByb3V0ZS5wdXNoKHZlcnRleCk7IC8vIHJvdXRlIGlzIHJlYWQgaW4gcmV2ZXJzZSBvcmRlclxyXG4gICAgICAgIGlmKGNhbWVGcm9tW3ZlcnRleC50b1N0cmluZygpXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnVpbGRSb3V0ZShjYW1lRnJvbSwgY2FtZUZyb21bdmVydGV4LnRvU3RyaW5nKCldLm5vZGUsIHJvdXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXNlIHRoZSBBKiBhbGdvcml0aG0gdG8gZmluZCBhIHNob3J0ZXN0IHBhdGggdGhyb3VnaCB0aGUgbmF2bWVzaFxyXG4gICAgcHJpdmF0ZSBmaW5kUGF0aCA9IChzdGFydDogUG9pbnQsIGVuZDogUG9pbnQpOiB7Y2FtZUZyb206IHt9LCBlbmRWZXJ0ZXg6IFBvaW50fSA9PiB7XHJcbiAgICAgICAgbGV0IG9wZW4gPSBbe25vZGU6IHN0YXJ0LCBwcmlvcml0eTogMH1dOyAgICAvLyBsb3dlc3QgcHJpb3JpdHkgPSAwXHJcbiAgICAgICAgbGV0IGNsb3NlZCA9IFtdO1xyXG5cclxuICAgICAgICAvLyBmaW5kIHRoZSB0cmlhbmdsZSBjb250YWluaW5nIHRoZSBzdGFydCBwb2ludFxyXG4gICAgICAgIGxldCBzdGFydFRyaTtcclxuICAgICAgICBmb3IoY29uc3QgdHJpIG9mIHRoaXMudHJpcykge1xyXG4gICAgICAgICAgICBpZih0cmkuY29udGFpbnMoc3RhcnQueCwgc3RhcnQueSkpIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0VHJpID0gdHJpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoc3RhcnRUcmkgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGZpbmQgdGhlIHRyaWFuZ2xlIGNvbnRhaW5pbmcgdGhlIGVuZCBwb2ludFxyXG4gICAgICAgIGxldCBlbmRUcmk7XHJcbiAgICAgICAgZm9yKGNvbnN0IHRyaSBvZiB0aGlzLnRyaXMpIHtcclxuICAgICAgICAgICAgaWYodHJpLmNvbnRhaW5zKGVuZC54LCBlbmQueSkpIHtcclxuICAgICAgICAgICAgICAgIGVuZFRyaSA9IHRyaTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGVuZFRyaSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZ1tpXSBpcyB0aGUgY29zdCB0byBnZXQgdG8gaSBmcm9tIHRoZSBzdGFydCB2ZXJ0ZXhcclxuICAgICAgICBsZXQgZyA9IHt9O1xyXG4gICAgICAgIGxldCBjYW1lRnJvbSA9IHt9O1xyXG4gICAgICAgIGdbc3RhcnQudG9TdHJpbmcoKV0gPSAwO1xyXG4gICAgICAgIGNhbWVGcm9tW3N0YXJ0LnRvU3RyaW5nKCldID0gbnVsbDtcclxuXHJcbiAgICAgICAgLy8gZXhlY3V0ZSBBKiBhbGdvcml0aG1cclxuICAgICAgICAvLyBwc2V1ZG9jb2RlOiBodHRwOi8vdGhlb3J5LnN0YW5mb3JkLmVkdS9+YW1pdHAvR2FtZVByb2dyYW1taW5nL0ltcGxlbWVudGF0aW9uTm90ZXMuaHRtbFxyXG4gICAgICAgIHdoaWxlKG9wZW4ubGVuZ3RoID4gMCAmJiAhZW5kVHJpLmlzVmVydGV4KG9wZW5bMF0ubm9kZSkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudCA9IG9wZW4uc2hpZnQoKTsgIC8vIHJlbW92ZSBmaXJzdCBpdGVtIGZyb20gb3BlbiAoaXRlbSB3aXRoIGxvd2VzdCBwcmlvcml0eSlcclxuICAgICAgICAgICAgY2xvc2VkLnB1c2goY3VycmVudCk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjdXJyZW50IHZlcnRleDogXCIgKyBjdXJyZW50Lm5vZGUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIGZvcihjb25zdCBuZWlnaGJvdXIgb2YgdGhpcy5nZXROZWlnaGJvdXJzKGN1cnJlbnQubm9kZSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb3N0ID0gZ1tjdXJyZW50Lm5vZGUudG9TdHJpbmcoKV0gKyB0aGlzLmdldEVkZ2VDb3N0KGN1cnJlbnQubm9kZSwgbmVpZ2hib3VyKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJuZWlnaGJvdXI6IFwiICsgbmVpZ2hib3VyLnRvU3RyaW5nKCkgKyBcIiwgY29zdDogXCIgKyBjb3N0KTtcclxuICAgICAgICAgICAgICAgIC8vIG5laWdoYm91ciBpbiBvcGVuXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluZGV4T2ZQcmlvcml0eU5vZGUob3BlbiwgbmVpZ2hib3VyKSAhPT0gLTEgJiYgY29zdCA8IGdbbmVpZ2hib3VyLnRvU3RyaW5nKCldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3Blbi5zcGxpY2UodGhpcy5pbmRleE9mUHJpb3JpdHlOb2RlKG9wZW4sIG5laWdoYm91ciksIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gbmVpZ2hib3VyIGluIGNsb3NlZFxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmRleE9mUHJpb3JpdHlOb2RlKGNsb3NlZCwgbmVpZ2hib3VyKSAhPT0gLTEgJiYgY29zdCA8IGdbbmVpZ2hib3VyLnRvU3RyaW5nKCldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VkLnNwbGljZSh0aGlzLmluZGV4T2ZQcmlvcml0eU5vZGUoY2xvc2VkLCBuZWlnaGJvdXIpLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIG5laWdoYm91ciBuZWl0aGVyIGluIG9wZW4gbm9yIGNsb3NlZFxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmRleE9mUHJpb3JpdHlOb2RlKG9wZW4sIG5laWdoYm91cikgPT09IC0xICYmIHRoaXMuaW5kZXhPZlByaW9yaXR5Tm9kZShjbG9zZWQsIG5laWdoYm91cikgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ1tuZWlnaGJvdXIudG9TdHJpbmcoKV0gPSBjb3N0O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbWVGcm9tW25laWdoYm91ci50b1N0cmluZygpXSA9IGN1cnJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgb3Blbi5wdXNoKHtub2RlOiBuZWlnaGJvdXIsIHByaW9yaXR5OiBjb3N0fSk7IC8vIFRPRE8gLSBwcmlvcml0eSA9IGNvc3QgKyBoKG5laWdoYm91cilcclxuICAgICAgICAgICAgICAgICAgICBvcGVuLnNvcnQoKGEsIGIpID0+IHsgICAvLyBzb3J0IG9wZW4gcXVldWUgYnkgcHJpb3JpdHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEucHJpb3JpdHkgLSBiLnByaW9yaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2NvbnNvbGUubG9nKG9wZW4ubGVuZ3RoID4gMCA/IFwiZW5kOiBcIiArIG9wZW5bMF0ubm9kZS50b1N0cmluZygpIDogXCJubyBwYXRoXCIpO1xyXG4gICAgICAgIHJldHVybiBvcGVuLmxlbmd0aCA+IDAgPyB7Y2FtZUZyb206IGNhbWVGcm9tLCBlbmRWZXJ0ZXg6IG9wZW5bMF0ubm9kZX0gOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3ID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGZvcihsZXQgdHJpIG9mIHRoaXMudHJpcykge1xyXG4gICAgICAgICAgICB0cmkuZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyByZXR1cm5zIHRoZSBjb3N0IG9mIHRyYXZlcnNpbmcgYW4gZWRnZSBiZXR3ZWVuIHAxIGFuZCBwMlxyXG4gICAgcHJpdmF0ZSBnZXRFZGdlQ29zdCA9IChwMTogUG9pbnQsIHAyOiBQb2ludCk6IG51bWJlciA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCgocDEueCAtIHAyLngpICoqIDIgKyAocDEueSAtIHAyLnkpICoqIDIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJldHVybiBhIGxpc3Qgb2YgdmVydGNpZXMgd2hpY2ggYXJlIGFkamFjZW50IHRvIHRoZSB2ZXJ0ZXggcFxyXG4gICAgcHJpdmF0ZSBnZXROZWlnaGJvdXJzID0gKHA6IFBvaW50KTogQXJyYXk8UG9pbnQ+ID0+IHtcclxuICAgICAgICBsZXQgbmVpZ2hib3VyczogQXJyYXk8UG9pbnQ+ID0gW107XHJcbiAgICAgICAgZm9yKGNvbnN0IGVkZ2Ugb2YgdGhpcy5lZGdlcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudmVydGljZXNbZWRnZS52MV0uZXF1YWxzKHApKSB7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvdXJzLnB1c2godGhpcy52ZXJ0aWNlc1tlZGdlLnYyXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLnZlcnRpY2VzW2VkZ2UudjJdLmVxdWFscyhwKSkge1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3Vycy5wdXNoKHRoaXMudmVydGljZXNbZWRnZS52MV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiB0aGUgdmVydGV4IGlzIG5vdCBhIHZlcnRleCBvZiBhIHRyaWFuZ2xlLCBjaGVjayBpZiBpdCBpcyB3aXRoaW4gYSB0cmlhbmdsZVxyXG4gICAgICAgIGlmKG5laWdoYm91cnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGZvcihjb25zdCB0cmkgb2YgdGhpcy50cmlzKSB7XHJcbiAgICAgICAgICAgICAgICBpZih0cmkuY29udGFpbnMocC54LCBwLnkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3Vycy5wdXNoKHRyaS5wb2ludDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5laWdoYm91cnMucHVzaCh0cmkucG9pbnQyKTtcclxuICAgICAgICAgICAgICAgICAgICBuZWlnaGJvdXJzLnB1c2godHJpLnBvaW50Myk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5laWdoYm91cnM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYW5zd2VyIDIgZnJvbTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTYzMTk4L2hvdy1kby15b3UtZGV0ZWN0LXdoZXJlLXR3by1saW5lLXNlZ21lbnRzLWludGVyc2VjdFxyXG4gICAgcHJpdmF0ZSBkb0xpbmVTZWdtZW50c0ludGVyc2VjdCA9IChlMXYxOiBQb2ludCwgZTF2MjogUG9pbnQsIGUydjE6IFBvaW50LCBlMnYyOiBQb2ludCk6IGJvb2xlYW4gPT4ge1xyXG4gICAgICAgIGNvbnN0IHAwX3ggPSBlMXYxLng7XHJcbiAgICAgICAgY29uc3QgcDBfeSA9IGUxdjEueTtcclxuICAgICAgICBjb25zdCBwMV94ID0gZTF2Mi54O1xyXG4gICAgICAgIGNvbnN0IHAxX3kgPSBlMXYyLnk7XHJcbiAgICAgICAgY29uc3QgcDJfeCA9IGUydjEueDtcclxuICAgICAgICBjb25zdCBwMl95ID0gZTJ2MS55O1xyXG4gICAgICAgIGNvbnN0IHAzX3ggPSBlMnYyLng7XHJcbiAgICAgICAgY29uc3QgcDNfeSA9IGUydjIueTtcclxuXHJcbiAgICAgICAgbGV0IHMxX3gsIHMxX3ksIHMyX3gsIHMyX3k7XHJcbiAgICAgICAgczFfeCA9IHAxX3ggLSBwMF94O1xyXG4gICAgICAgIHMxX3kgPSBwMV95IC0gcDBfeTtcclxuICAgICAgICBzMl94ID0gcDNfeCAtIHAyX3g7XHJcbiAgICAgICAgczJfeSA9IHAzX3kgLSBwMl95O1xyXG5cclxuICAgICAgICBsZXQgcywgdDtcclxuICAgICAgICBzID0gKC1zMV95ICogKHAwX3ggLSBwMl94KSArIHMxX3ggKiAocDBfeSAtIHAyX3kpKSAvICgtczJfeCAqIHMxX3kgKyBzMV94ICogczJfeSk7XHJcbiAgICAgICAgdCA9ICggczJfeCAqIChwMF95IC0gcDJfeSkgLSBzMl95ICogKHAwX3ggLSBwMl94KSkgLyAoLXMyX3ggKiBzMV95ICsgczFfeCAqIHMyX3kpO1xyXG5cclxuICAgICAgICBpZihzID49IDAgJiYgcyA8PSAxICYmIHQgPj0gMCAmJiB0IDw9IDEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyByZXR1cm4gZmFsc2UgaWYgdGhlIGludGVyc2VjdGlvbiBwb2ludCBpcyB0aGUgdmVydGV4IHBvc2l0aW9uIHNpbmNlIGl0IGJyZWFrcyB0aGUgcm91dGUgcmVkdWN0aW9uIGFsZ29yaXRobVxyXG4gICAgICAgICAgICBjb25zdCBpX3ggPSAocDBfeCArICh0ICogczFfeCkpO1xyXG4gICAgICAgICAgICBjb25zdCBpX3kgPSAocDBfeSArICh0ICogczFfeSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gIShpX3ggPT09IGUxdjEueCAmJiBpX3kgPT09IGUxdjEueSkgJiYgIShpX3ggPT09IGUxdjIueCAmJiBpX3kgPT09IGUxdjIueSkgJiYgIShpX3ggPT09IGUydjEueCAmJiBpX3kgPT09IGUydjEueSkgJiYgIShpX3ggPT09IGUydjIueCAmJiBpX3kgPT09IGUydjIueSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwibm8gY29sbGlzaW9uXCIpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTsgLy8gbm8gY29sbGlzaW9uXHJcbiAgICB9XHJcblxyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY3Jvc3NQcm9kdWN0ID0gKHBvaW50MTogUG9pbnQsIHBvaW50MjogUG9pbnQpID0+IHtcclxuICAgIFx0cmV0dXJuIHBvaW50MS54ICogcG9pbnQyLnkgLSBwb2ludDEueSAqIHBvaW50Mi54O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5kZXhPZlByaW9yaXR5Tm9kZSA9ICh2ZXJ0aWNlczogQXJyYXk8e25vZGU6IFBvaW50LCBwcmlvcml0eTogbnVtYmVyfT4sIHA6IFBvaW50KSA9PiB7XHJcbiAgICAgICAgaWYocCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IobGV0IGluZGV4ID0gMDsgaW5kZXggPCB2ZXJ0aWNlcy5sZW5ndGg7IGluZGV4ICsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2ZXJ0ZXggPSB2ZXJ0aWNlc1tpbmRleF0ubm9kZTtcclxuICAgICAgICAgICAgICAgIGlmKHZlcnRleC54ID09PSBwLnggJiYgdmVydGV4LnkgPT09IHAueSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpbmRleDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5kZXhPZlZlcnRleCA9ICh2ZXJ0aWNlczogQXJyYXk8UG9pbnQ+LCBwOiBQb2ludCk6IG51bWJlciA9PiB7XHJcbiAgICAgICAgaWYocCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IobGV0IGluZGV4ID0gMDsgaW5kZXggPCB2ZXJ0aWNlcy5sZW5ndGg7IGluZGV4ICsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2ZXJ0ZXggPSB2ZXJ0aWNlc1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICBpZih2ZXJ0ZXgueCA9PT0gcC54ICYmIHZlcnRleC55ID09PSBwLnkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluZGV4T2ZFZGdlID0gKGVkZ2VzOiBBcnJheTx7djE6IG51bWJlciwgdjI6IG51bWJlcn0+LCBlZGdlOiB7djE6IG51bWJlciwgdjI6IG51bWJlcn0pOiBudW1iZXIgPT4ge1xyXG4gICAgICAgIGlmKGVkZ2UgPT0gbnVsbCB8fCBlZGdlLnYxID09IG51bGwgfHwgZWRnZS52MiA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IobGV0IGluZGV4ID0gMDsgaW5kZXggPCBlZGdlcy5sZW5ndGg7IGluZGV4ICsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlID0gZWRnZXNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgaWYoKGUudjEgPT09IGVkZ2UudjEgJiYgZS52MiA9PT0gZWRnZS52MikgfHwgKGUudjEgPT09IGVkZ2UudjIgJiYgZS52MiA9PT0gZWRnZS52MSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgUG9pbnRcclxue1xyXG4gICAgcHVibGljIHg6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgeTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZXF1YWxzID0gKHA6IFBvaW50KTogYm9vbGVhbiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHAgIT0gbnVsbCAmJiBwLnggPT09IHRoaXMueCAmJiBwLnkgPT09IHRoaXMueTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcgPSAoKSA6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGBQb2ludCgke3RoaXMueH0sJHt0aGlzLnl9KWA7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtjdHh9IGZyb20gXCIuLi9nbG9iLnRzXCJcclxuaW1wb3J0IHtJU2hhcGV9IGZyb20gXCIuL0lTaGFwZVwiXHJcblxyXG5leHBvcnQgY2xhc3MgUmVjdGFuZ2xlIGltcGxlbWVudHMgSVNoYXBlXHJcbntcclxuICAgIHB1YmxpYyB4OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHk6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgbGluZVdpZHRoOiBudW1iZXIgPSA1O1xyXG4gICAgcHVibGljIHdpZHRoOiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGhlaWdodDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBjb2xvcjogc3RyaW5nID0gXCJibHVlXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBjb2xvcjogc3RyaW5nID0gXCJyZWRcIiwgbGluZV93aWR0aDogbnVtYmVyID0gMilcclxuICAgIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmxpbmVXaWR0aCA9IGxpbmVfd2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHRoaXMubGluZVdpZHRoO1xyXG4gICAgICAgIGN0eC5yZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbnRhaW5zKHg6IG51bWJlciwgeTogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoeCA+PSB0aGlzLnggJiYgeCA8PSB0aGlzLnggKyB0aGlzLndpZHRoICYmIHkgPj0gdGhpcy55ICYmIHkgPD0gdGhpcy55ICsgdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7Y3R4fSBmcm9tIFwiLi4vZ2xvYi50c1wiXHJcbmltcG9ydCB7SVNoYXBlfSBmcm9tIFwiLi9JU2hhcGVcIlxyXG5pbXBvcnQge1BvaW50fSBmcm9tIFwiLi9Qb2ludFwiXHJcblxyXG5leHBvcnQgY2xhc3MgVHJpYW5nbGVcclxue1xyXG4gICAgcHVibGljIHBvaW50MTogUG9pbnQ7XHJcbiAgICBwdWJsaWMgcG9pbnQyOiBQb2ludDtcclxuICAgIHB1YmxpYyBwb2ludDM6IFBvaW50O1xyXG4gICAgcHJpdmF0ZSBhcmVhOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHNpZ246IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih4MTogbnVtYmVyLCB5MTogbnVtYmVyLCB4MjogbnVtYmVyLCB5MjogbnVtYmVyLCB4MzogbnVtYmVyLCB5MzogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucG9pbnQxID0gbmV3IFBvaW50KHgxLCB5MSk7XHJcbiAgICAgICAgdGhpcy5wb2ludDIgPSBuZXcgUG9pbnQoeDIsIHkyKTtcclxuICAgICAgICB0aGlzLnBvaW50MyA9IG5ldyBQb2ludCh4MywgeTMpO1xyXG4gICAgICAgIHRoaXMuYXJlYSA9IDEvMiAqICgtdGhpcy5wb2ludDIueSAqIHRoaXMucG9pbnQzLnggKyB0aGlzLnBvaW50MS55ICogKC10aGlzLnBvaW50Mi54ICsgdGhpcy5wb2ludDMueCkgKyB0aGlzLnBvaW50MS54ICogKHRoaXMucG9pbnQyLnkgLSB0aGlzLnBvaW50My55KSArIHRoaXMucG9pbnQyLnggKiB0aGlzLnBvaW50My55KTtcclxuICAgICAgICB0aGlzLnNpZ24gPSB0aGlzLmFyZWEgPCAwID8gLTEgOiAxO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3ID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZWRcIjtcclxuICAgICAgICBjdHgubGluZVdpZHRoID0gNTtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLnBvaW50MS54LCB0aGlzLnBvaW50MS55KTtcclxuICAgICAgICBjdHgubGluZVRvKHRoaXMucG9pbnQyLngsIHRoaXMucG9pbnQyLnkpO1xyXG4gICAgICAgIGN0eC5saW5lVG8odGhpcy5wb2ludDMueCwgdGhpcy5wb2ludDMueSk7XHJcbiAgICAgICAgY3R4LmxpbmVUbyh0aGlzLnBvaW50MS54LCB0aGlzLnBvaW50MS55KTtcclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZXR1cm5zIHRydWUgaWZmIHRoZSBwb2ludCBwIGlzIGEgdmVydGV4IG9mIHRoZSB0cmlhbmdsZVxyXG4gICAgcHVibGljIGlzVmVydGV4ID0gKHA6IFBvaW50KTogYm9vbGVhbiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9pbnQxLmVxdWFscyhwKSB8fCB0aGlzLnBvaW50Mi5lcXVhbHMocCkgfHwgdGhpcy5wb2ludDMuZXF1YWxzKHApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGh0dHA6Ly9qc2ZpZGRsZS5uZXQvUGVycm9BWlVML3pkYVk4LzEvXHJcbiAgICBwdWJsaWMgY29udGFpbnMgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuID0+IHtcclxuICAgICAgICB2YXIgcyA9ICh0aGlzLnBvaW50MS55ICogdGhpcy5wb2ludDMueCAtIHRoaXMucG9pbnQxLnggKiB0aGlzLnBvaW50My55ICsgKHRoaXMucG9pbnQzLnkgLSB0aGlzLnBvaW50MS55KSAqIHggKyAodGhpcy5wb2ludDEueCAtIHRoaXMucG9pbnQzLngpICogeSkgKiB0aGlzLnNpZ247XHJcbiAgICAgICAgdmFyIHQgPSAodGhpcy5wb2ludDEueCAqIHRoaXMucG9pbnQyLnkgLSB0aGlzLnBvaW50MS55ICogdGhpcy5wb2ludDIueCArICh0aGlzLnBvaW50MS55IC0gdGhpcy5wb2ludDIueSkgKiB4ICsgKHRoaXMucG9pbnQyLnggLSB0aGlzLnBvaW50MS54KSAqIHkpICogdGhpcy5zaWduO1xyXG4gICAgICAgIHJldHVybiAocyA+IDAgJiYgdCA+IDAgJiYgKHMgKyB0KSA8IDIgKiB0aGlzLmFyZWEgKiB0aGlzLnNpZ24pIHx8ICh0aGlzLmlzVmVydGV4KG5ldyBQb2ludCh4LCB5KSkpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7SXRlbX0gZnJvbSBcIi4uL2l0ZW1zL0l0ZW1cIlxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEludGVyYWN0aW9uXHJcbntcclxuICAgIC8vIGl0ZW0gY2FuIGJlIG51bGxcclxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBpdGVtOiBJdGVtKSB7fVxyXG5cclxuICAgIC8vIGludGVyYWN0IHdpdGggdGhlIG9iamVjdFxyXG4gICAgcHVibGljIGFic3RyYWN0IGludGVyYWN0KGl0ZW06IEl0ZW0pOiAge3RleHQ6IHN0cmluZywgaXRlbXM6IEFycmF5PEl0ZW0+fTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0SXRlbSgpOiBJdGVtXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0pTT05Mb2FkZXJ9IGZyb20gXCIuLi9yZXNvdXJjZXMvSlNPTkxvYWRlclwiXHJcbmltcG9ydCB7SW1hZ2VMb2FkZXJ9IGZyb20gXCIuLi9yZXNvdXJjZXMvSW1hZ2VMb2FkZXJcIlxyXG5pbXBvcnQge1RleHR1cmVBdGxhc30gZnJvbSBcIi4uL3Nwcml0ZXMvVGV4dHVyZUF0bGFzXCJcclxuaW1wb3J0IHtTcHJpdGV9IGZyb20gXCIuLi9zcHJpdGVzL1Nwcml0ZVwiXHJcbmltcG9ydCB7U3RhdGljU3ByaXRlfSBmcm9tIFwiLi4vc3ByaXRlcy9TdGF0aWNTcHJpdGVcIlxyXG5pbXBvcnQge0FuaW1hdGVkU3ByaXRlfSBmcm9tIFwiLi4vc3ByaXRlcy9BbmltYXRlZFNwcml0ZVwiXHJcbmltcG9ydCB7SW50ZXJhY3RhYmxlU3ByaXRlfSBmcm9tIFwiLi4vc3ByaXRlcy9JbnRlcmFjdGFibGVTcHJpdGVcIlxyXG5pbXBvcnQge1Nwcml0ZUFuaW1hdGlvbn0gZnJvbSBcIi4uL3Nwcml0ZXMvU3ByaXRlQW5pbWF0aW9uXCJcclxuaW1wb3J0IHtOYXZNZXNofSBmcm9tIFwiLi4vY29sbGlzaW9uL05hdk1lc2hcIlxyXG5pbXBvcnQge1RyaWFuZ2xlfSBmcm9tIFwiLi4vY29sbGlzaW9uL1RyaWFuZ2xlXCJcclxuaW1wb3J0IHtJbnRlcmFjdGlvbn0gIGZyb20gXCIuL0ludGVyYWN0aW9uXCJcclxuaW1wb3J0IHtSZWNlaXZlSXRlbUludGVyYWN0aW9ufSBmcm9tIFwiLi9SZWNlaXZlSXRlbUludGVyYWN0aW9uXCJcclxuaW1wb3J0IHtJdGVtfSBmcm9tIFwiLi4vaXRlbXMvSXRlbVwiXHJcbmltcG9ydCB7Q2lyY2xlfSBmcm9tIFwiLi4vY29sbGlzaW9uL0NpcmNsZVwiXHJcbmltcG9ydCB7UmVjdGFuZ2xlfSBmcm9tIFwiLi4vY29sbGlzaW9uL1JlY3RhbmdsZVwiXHJcblxyXG5leHBvcnQgY2xhc3MgTGV2ZWxcclxue1xyXG4gICAgc3RhdGljIGxvYWRMZXZlbChwYXRoOiBzdHJpbmcsIGl0ZW1zOiBhbnkpOiBQcm9taXNlPGFueT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxldmVsRGF0YVByb21pc2UgPSBKU09OTG9hZGVyLmxvYWRKU09ORmlsZShwYXRoKS50aGVuKChsZXZlbERhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgdGV4dHVyZSBhdGxhc1xyXG4gICAgICAgICAgICAgICAgbGV0IGF0bGFzID0gbmV3IFRleHR1cmVBdGxhcyhsZXZlbERhdGEudGV4dHVyZV9hdGxhcyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0dXJlQXRsYXNQcm9taXNlID0gYXRsYXMubG9hZCgpLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yOiB0ZXh0dXJlIGF0bGFzIGNvdWxkIG5vdCBiZSBsb2FkZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgdGhlIHNwcml0ZXNcclxuICAgICAgICAgICAgICAgIGxldCBzdGF0aWNTcHJpdGVzID0gbmV3IEFycmF5PFN0YXRpY1Nwcml0ZT4oKTtcclxuICAgICAgICAgICAgICAgIGxldCBpbnRlcmFjdGFibGVTcHJpdGVzID0gbmV3IEFycmF5PEludGVyYWN0YWJsZVNwcml0ZT4oKTtcclxuICAgICAgICAgICAgICAgIGZvcihjb25zdCBvYmogb2YgbGV2ZWxEYXRhLnN0YXRpY19zcHJpdGVzKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKG9iai50eXBlID09IFwiaW50ZXJhY3RhYmxlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGludGVyYWN0aW9ucyA9IG5ldyBBcnJheTxJbnRlcmFjdGlvbj4oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGNvbnN0IGludGVyIG9mIG9iai5pbnRlcmFjdGlvbnMpICAgIC8vIGNyZWF0ZSBhbiBhcnJheSBvZiBpbnRlcmFjdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaW50ZXIudHlwZSA9PSBcInJlY2VpdmVfaXRlbVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlY2VpdmVJdGVtcyA9IG5ldyBBcnJheTxJdGVtPigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcihjb25zdCBpdG0gb2YgaW50ZXIuaXRlbXNfcmVjZWl2ZWQpICAgLy8gY3JlYXRlIGFuIGFycmF5IG9mIHJlY2VpdmUgaXRlbXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpdmVJdGVtcy5wdXNoKGl0ZW1zW2l0bV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcmFjdGlvbnMucHVzaChuZXcgUmVjZWl2ZUl0ZW1JbnRlcmFjdGlvbihpbnRlci5pdGVtID8gaXRlbXNbaW50ZXIuaXRlbV0gOiBudWxsLCBpbnRlci5zdWNjZXNzX3RleHQsIGludGVyLmZhaWxfdGV4dCwgcmVjZWl2ZUl0ZW1zKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcmFjdGFibGVTcHJpdGVzLnB1c2gobmV3IEludGVyYWN0YWJsZVNwcml0ZShvYmoueCwgb2JqLnksIG9iai5zY2FsZSwgb2JqLm9yaWdpbl9ob3Jpem9udGFsLCBvYmoub3JpZ2luX3ZlcnRpY2FsLCBhdGxhcywgb2JqLmltYWdlX25hbWUsIG9iai5leGFtaW5lX3RleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENpcmNsZShvYmoueCwgb2JqLnksIG9iai5pbnRlcmFjdGlvbl9yYWRpdXMpLCBuZXcgUmVjdGFuZ2xlKG9iai54LW9iai5jbGlja196b25lX3dpZHRoLzIsIG9iai55LW9iai5jbGlja196b25lX2hlaWdodC8yLCBvYmouY2xpY2tfem9uZV93aWR0aCwgb2JqLmNsaWNrX3pvbmVfaGVpZ2h0KSwgaW50ZXJhY3Rpb25zKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3ByaXRlcy5wdXNoKG5ldyBTdGF0aWNTcHJpdGUob2JqLngsIG9iai55LCBvYmouc2NhbGUsIG9iai5vcmlnaW5faG9yaXpvbnRhbCwgb2JqLm9yaWdpbl92ZXJ0aWNhbCwgYXRsYXMsIG9iai5pbWFnZV9uYW1lKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9sZXQgYW5pbWF0ZWRTcHJpdGVzID0gbmV3IEFycmF5PEFuaW1hdGVkU3ByaXRlPigpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgbmF2bWVzaFxyXG4gICAgICAgICAgICAgICAgbGV0IHRyaXMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgdHJpIG9mIGxldmVsRGF0YS5uYXZtZXNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJpcy5wdXNoKG5ldyBUcmlhbmdsZSh0cmkueDEsIHRyaS55MSwgdHJpLngyLCB0cmkueTIsIHRyaS54MywgdHJpLnkzKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgbmF2bWVzaCA9IG5ldyBOYXZNZXNoKHRyaXMpO1xyXG5cclxuICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKFt0ZXh0dXJlQXRsYXNQcm9taXNlXSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGNvbnN0IHNwcml0ZSBvZiBzdGF0aWNTcHJpdGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZS5yZWZyZXNoSW1hZ2UoKTsgIC8vIHRleHR1cmUgYXRsYXMgcHJvYmFibHkgaGFkbid0IGxvYWRlZCB3aGVuIHNwcml0ZSB3YXMgaW5pdGlhbGlzZWQgc28gcmVmcmVzaCBpbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGNvbnN0IHNwcml0ZSBvZiBpbnRlcmFjdGFibGVTcHJpdGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZS5yZWZyZXNoSW1hZ2UoKTsgIC8vIHRleHR1cmUgYXRsYXMgcHJvYmFibHkgaGFkbid0IGxvYWRlZCB3aGVuIHNwcml0ZSB3YXMgaW5pdGlhbGlzZWQgc28gcmVmcmVzaCBpbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7J3RleHR1cmVBdGxhcyc6IGF0bGFzLCAnc2NlbmVTY2FsZSc6IGxldmVsRGF0YS5zY2VuZV9zY2FsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwbGF5ZXJTdGFydFgnOiBsZXZlbERhdGEucGxheWVyX3N0YXJ0X3gsICdwbGF5ZXJTdGFydFknOiBsZXZlbERhdGEucGxheWVyX3N0YXJ0X3ksICdwbGF5ZXJTdGFydHMnOiBsZXZlbERhdGEucGxheWVyX3N0YXJ0cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkZXB0aFNjYWxlWSc6IGxldmVsRGF0YS5kZXB0aF9zY2FsZV95LCAnbmF2bWVzaCc6IG5hdm1lc2gsICdzdGF0aWNTcHJpdGVzJzogc3RhdGljU3ByaXRlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpbnRlcmFjdGFibGVTcHJpdGVzJzogaW50ZXJhY3RhYmxlU3ByaXRlc30pO1xyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChudWxsKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yOiBmYWlsZWQgdG8gbG9hZCBsZXZlbFwiKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdChudWxsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHtJbnRlcmFjdGlvbn0gZnJvbSBcIi4vSW50ZXJhY3Rpb25cIlxyXG5pbXBvcnQge0l0ZW19IGZyb20gXCIuLi9pdGVtcy9JdGVtXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBSZWNlaXZlSXRlbUludGVyYWN0aW9uIGV4dGVuZHMgSW50ZXJhY3Rpb25cclxue1xyXG4gICAgLy8gaXRlbSBjYW4gYmUgbnVsbFxyXG4gICAgY29uc3RydWN0b3IoaXRlbTogSXRlbSwgcHJvdGVjdGVkIHN1Y2Nlc3NUZXh0OiBzdHJpbmcsIHByb3RlY3RlZCBmYWlsVGV4dDogc3RyaW5nLCBwcm90ZWN0ZWQgaXRlbXNSZWNlaXZlZDogQXJyYXk8SXRlbT4pXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaW50ZXJhY3Qgd2l0aCB0aGUgb2JqZWN0XHJcbiAgICAvLyByZXR1cm5zIGEgbGlzdCBvZiBpdGVtcyByZWNlaXZlZCBmcm9tIHRoZSBpbnRlcmFjdGlvblxyXG4gICAgcHVibGljIGludGVyYWN0KGl0ZW06IEl0ZW0pOiB7dGV4dDogc3RyaW5nLCBpdGVtczogQXJyYXk8SXRlbT59XHJcbiAgICB7XHJcbiAgICAgICAgaWYoaXRlbSA9PSB0aGlzLml0ZW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4ge3RleHQ6IHRoaXMuc3VjY2Vzc1RleHQsIGl0ZW1zOiB0aGlzLml0ZW1zUmVjZWl2ZWR9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHt0ZXh0OiB0aGlzLmZhaWxUZXh0LCBpdGVtczogbnVsbH07XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGxldCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG5leHBvcnQgbGV0IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRDYW52YXNBbmRDb250ZXh0KClcclxue1xyXG4gICAgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbj0nZGVzdGluYXRpb24tb3Zlcic7XHJcbiAgICBjdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gdHJ1ZTsgICAvLyBlbmFibGUgYW50aS1hbGlhc2luZyBvZiBpbWFnZXNcclxufVxyXG4iLCJleHBvcnQgY2xhc3MgSW5wdXRNYW5hZ2VyXHJcbntcclxuICAgIHByaXZhdGUgbW91c2VEb3duQ2FsbGJhY2tzOiBBcnJheTwoZTogTW91c2VFdmVudCkgPT4gdm9pZD4gPSBBcnJheTwoKSA9PiB2b2lkPigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMubW91c2VEb3duKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwgZXZlbnQgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSk7ICAvLyBkaXNhYmxlIHJpZ2h0IGNsaWNrIGNvbnRleHQgbWVudVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb3VzZURvd24gPSAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgLy8gbm90aWZ5IGFsbCBjYWxsYmFja3NcclxuICAgICAgICBmb3IoY29uc3QgY2FsbGJhY2sgb2YgdGhpcy5tb3VzZURvd25DYWxsYmFja3MpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZE1vdXNlRG93bkNhbGxiYWNrKGNhbGxiYWNrOiAoZTogTW91c2VFdmVudCkgPT4gdm9pZClcclxuICAgIHtcclxuICAgICAgICB0aGlzLm1vdXNlRG93bkNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0l0ZW19IGZyb20gXCIuL0l0ZW1cIlxyXG5cclxuZXhwb3J0IGNsYXNzIEludmVudG9yeVxyXG57XHJcbiAgICBwcml2YXRlIGl0ZW1zID0gbmV3IEFycmF5PEl0ZW0+KDkpOyAvLyBNQVhfTlVNX0lURU1TID0gOVxyXG5cclxuICAgIHB1YmxpYyBhZGRJdGVtKGl0ZW06IEl0ZW0pOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgaWYoaXRlbSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIC8vIGFkZCB0aGUgaXRlbSB0byB0aGUgZmlyc3QgYXZhaWxhYmxlIHNsb3RcclxuICAgICAgICAgICAgZm9yKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5pdGVtcy5sZW5ndGg7IGluZGV4ICsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLml0ZW1zW2luZGV4XSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtc1tpbmRleF0gPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlSXRlbShpdGVtOiBJdGVtKTogSXRlbVxyXG4gICAge1xyXG4gICAgICAgIGZvcihsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpbmRleCArKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuaXRlbXNbaW5kZXhdID09PSBpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlbW92ZWQgXCIgKyBpdGVtLmdldE5hbWUoKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW2luZGV4XSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pdGVtc1tpbmRleF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZUl0ZW1CeUluZGV4KGluZGV4OiBudW1iZXIpOiBJdGVtXHJcbiAgICB7XHJcbiAgICAgICAgaWYoaW5kZXggIT0gbnVsbCAmJiBpbmRleCA8IHRoaXMuaXRlbXMubGVuZ3RoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuaXRlbXNbaW5kZXhdO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1zW2luZGV4XSA9IG51bGw7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW92ZUl0ZW0oaXRlbTogSXRlbSwgaW5kZXg6IG51bWJlcik6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZih0aGlzLml0ZW1zW2luZGV4XSA9PSBudWxsKSB7IC8vIGlmIG5ldyBpdGVtc2xvdCBpcyBmcmVlXHJcbiAgICAgICAgICAgIGxldCB4ID0gdGhpcy5yZW1vdmVJdGVtKGl0ZW0pO1xyXG4gICAgICAgICAgICBpZih4ICE9IG51bGwpIHsgLy8gY2hlY2sgdGhlIHBsYXllciBhY3R1YWxseSBoYWQgdGhlIGl0ZW1cclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNbaW5kZXhdID0gaXRlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xlYXIoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGZvcihsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpbmRleCArKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXNbaW5kZXhdID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEl0ZW1zKCk6IEFycmF5PEl0ZW0+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXM7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIEl0ZW1cclxue1xyXG4gICAgcHJvdGVjdGVkIGNvbWJpbmF0aW9uczogQXJyYXk8e290aGVyOiBJdGVtLCBvdXQ6IEFycmF5PEl0ZW0+fT47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIG5hbWU6IHN0cmluZywgcHJvdGVjdGVkIGV4YW1pbmVUZXh0OiBzdHJpbmcsIHByb3RlY3RlZCBpbWdwYXRoOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jb21iaW5hdGlvbnMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29tYmluZShvdGhlcjogSXRlbSk6IEFycmF5PEl0ZW0+XHJcbiAgICB7XHJcbiAgICAgICAgZm9yKGNvbnN0IGNtYiBvZiB0aGlzLmNvbWJpbmF0aW9ucylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIGlmIHRoZSBpdGVtIGlzIGNvbWJpbmFibGUsIHJldHVybiB0aGUgYXJyYXkgb2YgaXRlbXMgY3JlYXRlZFxyXG4gICAgICAgICAgICBpZihvdGhlciA9PT0gY21iLm90aGVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY21iLm91dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZENvbWJpbmF0aW9uKG90aGVyOiBJdGVtLCBvdXQ6IEFycmF5PEl0ZW0+KTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmKG90aGVyICE9IG51bGwgJiYgb3V0ICE9IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNvbWJpbmF0aW9ucy5wdXNoKHtvdGhlcjogb3RoZXIsIG91dDogb3V0fSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXROYW1lKCk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEV4YW1pbmVUZXh0KCk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmV4YW1pbmVUZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJbWFnZVBhdGgoKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1ncGF0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIGBJdGVtKCR7dGhpcy5uYW1lfSlgO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7Y2FudmFzLCBjdHgsIGluaXRDYW52YXNBbmRDb250ZXh0fSBmcm9tIFwiLi9nbG9iXCJcclxuaW1wb3J0IHtOYXZNZXNofSBmcm9tIFwiLi9jb2xsaXNpb24vTmF2TWVzaFwiXHJcbmltcG9ydCB7VHJpYW5nbGV9IGZyb20gXCIuL2NvbGxpc2lvbi9UcmlhbmdsZVwiXHJcbmltcG9ydCB7SVNoYXBlfSBmcm9tIFwiLi9jb2xsaXNpb24vSVNoYXBlXCJcclxuaW1wb3J0IHtJbnB1dE1hbmFnZXJ9IGZyb20gXCIuL2lucHV0L0lucHV0TWFuYWdlclwiXHJcbmltcG9ydCB7SW1hZ2VMb2FkZXJ9IGZyb20gXCIuL3Jlc291cmNlcy9JbWFnZUxvYWRlclwiXHJcbmltcG9ydCB7SlNPTkxvYWRlcn0gZnJvbSBcIi4vcmVzb3VyY2VzL0pTT05Mb2FkZXJcIlxyXG5pbXBvcnQge0xldmVsfSBmcm9tIFwiLi9nYW1lL0xldmVsXCJcclxuaW1wb3J0IHtTdGF0aWNTcHJpdGV9IGZyb20gXCIuL3Nwcml0ZXMvU3RhdGljU3ByaXRlXCJcclxuaW1wb3J0IHtBbmltYXRlZFNwcml0ZX0gZnJvbSBcIi4vc3ByaXRlcy9BbmltYXRlZFNwcml0ZVwiXHJcbmltcG9ydCB7SW50ZXJhY3RhYmxlU3ByaXRlfSBmcm9tIFwiLi9zcHJpdGVzL0ludGVyYWN0YWJsZVNwcml0ZVwiXHJcbmltcG9ydCB7TmF2U3ByaXRlfSBmcm9tIFwiLi9zcHJpdGVzL05hdlNwcml0ZVwiXHJcbmltcG9ydCB7U3ByaXRlQW5pbWF0aW9ufSBmcm9tIFwiLi9zcHJpdGVzL1Nwcml0ZUFuaW1hdGlvblwiXHJcbmltcG9ydCB7VGV4dHVyZUF0bGFzfSBmcm9tIFwiLi9zcHJpdGVzL1RleHR1cmVBdGxhc1wiXHJcbmltcG9ydCB7UGxheWVyU3ByaXRlfSBmcm9tIFwiLi9zcHJpdGVzL1BsYXllclNwcml0ZVwiXHJcbmltcG9ydCB7SXRlbX0gZnJvbSBcIi4vaXRlbXMvSXRlbVwiXHJcbmltcG9ydCB7SW52ZW50b3J5fSBmcm9tIFwiLi9pdGVtcy9JbnZlbnRvcnlcIlxyXG5cclxubGV0IGlucHV0TWFuYWdlciA9IG5ldyBJbnB1dE1hbmFnZXIoKTtcclxubGV0IGltZzogSFRNTEltYWdlRWxlbWVudDtcclxubGV0IHNjZW5lU2NhbGU6IG51bWJlcjtcclxubGV0IGxldmVsU2NhbGU6IG51bWJlcjtcclxubGV0IGRlcHRoU2NhbGVZOiBudW1iZXI7XHJcbmxldCBzdGF0aWNTcHJpdGVzID0gbmV3IEFycmF5PFN0YXRpY1Nwcml0ZT4oKTtcclxubGV0IGludGVyYWN0YWJsZVNwcml0ZXMgPSBuZXcgQXJyYXk8SW50ZXJhY3RhYmxlU3ByaXRlPigpO1xyXG5sZXQgcGxheWVyU3ByaXRlO1xyXG5sZXQgbmF2bWVzaDtcclxuXHJcbmxldCBpdGVtcyA9IHt9OyAgICAgICAgIC8vIGRhdGFiYXNlIG9mIGl0ZW1zXHJcbmxldCBpdGVtc2xvdGJ0bnMgPSBbXTsgIC8vIGFycmF5IG9mIGl0ZW1zbG90IGh0bWwgYnV0dG9uc1xyXG5sZXQgaXRlbWJ0bnMgPSBbXTsgICAgICAvLyBhcnJheSBvZiBpdGVtIGh0bWwgYnV0dG9uc1xyXG5sZXQgaW52ZW50ID0gbmV3IEludmVudG9yeSgpOyAvLyB0aGUgcGxheWVyJ3MgaW52ZW50b3J5XHJcbmxldCBzZWxlY3RlZEl0ZW07ICAgICAgIC8vIHVzZXIgY2FuIHNlbGVjdCBhbiBpdGVtIGZyb20gaW52ZW50b3J5IGJ5IGxlZnQgY2xpY2tpbmdcclxubGV0IHNlbGVjdGVkSXRlbUJ0bjtcclxuXHJcbmxldCBmYldpZHRoO1xyXG5sZXQgZmJIZWlnaHQ7XHJcblxyXG5sZXQgbGFzdFRpbWU7XHJcblxyXG5mdW5jdGlvbiBnYW1lTG9vcCgpIC8vIFRPRE8gLSBzcGxpdCBkcmF3IGludG8gdXBkYXRlIGFuZCBkcmF3IGZ1bmN0aW9uc1xyXG57XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBmYldpZHRoLCBmYkhlaWdodCk7XHJcblxyXG4gICAgLy8gc2V0IG9yaWdpbiB0byB0aGUgY2FudmFzJ3MgY2VudHJlXHJcbiAgICBjdHguc2F2ZSgpO1xyXG4gICAgY3R4LnRyYW5zbGF0ZShmYldpZHRoLzIsIGZiSGVpZ2h0LzIpO1xyXG4gICAgY3R4LnNjYWxlKHNjZW5lU2NhbGUsIHNjZW5lU2NhbGUpO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgIGNvbnN0IGRlbHRhVGltZSA9IGN1cnJlbnRUaW1lIC0gbGFzdFRpbWU7XHJcblxyXG4gICAgLy8gZHJhdyB0aGUgc2NlbmUgc3BlY2lmaWMgc3ByaXRlc1xyXG4gICAgZm9yKGNvbnN0IHNwcml0ZSBvZiBzdGF0aWNTcHJpdGVzKVxyXG4gICAge1xyXG4gICAgICAgIHNwcml0ZS5kcmF3KGN1cnJlbnRUaW1lLCBkZWx0YVRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGRyYXcgdGhlIHNwcml0ZXMgd2hpY2ggdGhlIHBsYXllciBjYW4gaW50ZXJhY3Qgd2l0aFxyXG4gICAgZm9yKGNvbnN0IHNwcml0ZSBvZiBpbnRlcmFjdGFibGVTcHJpdGVzKVxyXG4gICAge1xyXG4gICAgICAgIHNwcml0ZS5kcmF3KGN1cnJlbnRUaW1lLCBkZWx0YVRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGRyYXcgdGhlIHBsYXllciBzcHJpdGVcclxuICAgIHBsYXllclNwcml0ZS5kcmF3KGN1cnJlbnRUaW1lLCBkZWx0YVRpbWUpO1xyXG5cclxuICAgIC8vIERFQlVHIC0gZHJhdyB0aGUgY29sbGlzaW9uIGJveGVzXHJcbiAgICBuYXZtZXNoLmRyYXcoKTtcclxuXHJcbiAgICAvLyByZXN0b3JlIGNhbnZhcyB0byBvcmlnaW5hbCBzZXR0aW5nc1xyXG4gICAgY3R4LnJlc3RvcmUoKTtcclxuXHJcbiAgICBsYXN0VGltZSA9IGN1cnJlbnRUaW1lO1xyXG59XHJcblxyXG5pbnB1dE1hbmFnZXIuYWRkTW91c2VEb3duQ2FsbGJhY2soKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICBsZXQgeCA9IChldmVudC5sYXllclggLSBjYW52YXMub2Zmc2V0TGVmdCAtIGZiV2lkdGgvMikgLyBzY2VuZVNjYWxlO1xyXG4gICAgbGV0IHkgPSAoZXZlbnQubGF5ZXJZIC0gY2FudmFzLm9mZnNldFRvcCAtIGZiSGVpZ2h0LzIpIC8gc2NlbmVTY2FsZTtcclxuICAgIGNvbnNvbGUubG9nKFwibW91c2UgZG93biBhdCAoXCIgKyB4ICsgXCIsIFwiICsgeSArIFwiKVwiKTtcclxuXHJcbiAgICBsZXQgaW50ZXJhY3RlZFdpdGhTcHJpdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBmb3IoY29uc3Qgc3ByaXRlIG9mIGludGVyYWN0YWJsZVNwcml0ZXMpXHJcbiAgICB7XHJcbiAgICAgICAgaWYoZXZlbnQuYnV0dG9uID09PSAwKSB7ICAvLyBsZWZ0IG1vdXNlIGJ1dHRvbiBwcmVzc1xyXG4gICAgICAgICAgICBpZihzcHJpdGUuaW5JbnRlcmFjdGlvblpvbmUocGxheWVyU3ByaXRlLngsIHBsYXllclNwcml0ZS55KSAmJiBzcHJpdGUuaW5DbGlja1pvbmUoeCwgeSkpIHtcclxuICAgICAgICAgICAgICAgIC8vIGludGVyYWN0IHdpdGggdGhlIHNwcml0ZVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqID0gc3ByaXRlLmludGVyYWN0KHNlbGVjdGVkSXRlbSk7XHJcbiAgICAgICAgICAgICAgICBpZihvYmogIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllclNwcml0ZS5vcGVuU3BlZWNoQnViYmxlKG9iai50ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IoY29uc3QgaXRtIG9mIG9iai5pdGVtcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnZlbnQuYWRkSXRlbShpdG0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoQWxsSXRlbXNEaXNwbGF5ZWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllclNwcml0ZS5vcGVuU3BlZWNoQnViYmxlKFwiVGhhdCdzIGEgcnViYmlzaCBpZGVhIVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGludGVyYWN0ZWRXaXRoU3ByaXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmKGV2ZW50LmJ1dHRvbiA9PT0gMikgeyAvLyByaWdodCBtb3VzZSBidXR0b24gcHJlc3NcclxuICAgICAgICAgICAgaWYoc3ByaXRlLmluQ2xpY2tab25lKHgsIHkpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBleGFtaW5lIHRoZSBpbnRlcmFjdGFibGUgc3ByaXRlXHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJTcHJpdGUub3BlblNwZWVjaEJ1YmJsZShzcHJpdGUuZ2V0RXhhbWluZVRleHQoKSk7XHJcbiAgICAgICAgICAgICAgICBpbnRlcmFjdGVkV2l0aFNwcml0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZighaW50ZXJhY3RlZFdpdGhTcHJpdGUpIHtcclxuICAgICAgICBpZihldmVudC5idXR0b24gPT09IDApICAvLyBsZWZ0IG1vdXNlIGJ1dHRvbiBwcmVzc1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHdheXBvaW50cyA9IG5hdm1lc2guZ2V0V2F5cG9pbnRzKHBsYXllclNwcml0ZS54LCBwbGF5ZXJTcHJpdGUueSwgeCwgeSk7XHJcbiAgICAgICAgICAgIHBsYXllclNwcml0ZS5zZXRXYXlwb2ludHMod2F5cG9pbnRzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gbG9hZFBsYXllclNwcml0ZSgpOiBQcm9taXNlPEFuaW1hdGVkU3ByaXRlPlxyXG57XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8QW5pbWF0ZWRTcHJpdGU+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBsZXQgYXRsYXMgPSBuZXcgVGV4dHVyZUF0bGFzKFwicmVzL2F0bGFzZXMvYW5pbWF0ZWQucG5nXCIpO1xyXG4gICAgICAgIGxldCBwbGF5ZXJTcHJpdGU7XHJcbiAgICAgICAgY29uc3QgYXRsYXNMb2FkZWRQcm9taXNlID0gYXRsYXMubG9hZCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBURVNUX0FOSU1BVElPTiA9IG5ldyBTcHJpdGVBbmltYXRpb24oMiwgYXRsYXMsIFwiYW5pbWF0ZWRcIik7XHJcbiAgICAgICAgICAgIHBsYXllclNwcml0ZSA9IG5ldyBQbGF5ZXJTcHJpdGUoMTAwLCAyMDAsIDEuMjUsIFwiY2VudHJlXCIsIFwidG9wXCIsIFtURVNUX0FOSU1BVElPTl0pO1xyXG4gICAgICAgICAgICBwbGF5ZXJTcHJpdGUuc2V0Q3VycmVudEFuaW1hdGlvbigwKTtcclxuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcjogdW5hYmxlIHRvIGxvYWQgcGxheWVyIHNwcml0ZSB0ZXh0dXJlIGF0bGFzJyk7XHJcbiAgICAgICAgICAgIHJlamVjdChudWxsKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IHNwZWVjaEJ1YmJsZUltYWdlO1xyXG4gICAgICAgIGNvbnN0IHNwZWVjaEJ1YmJsZUxvYWRlZFByb21pc2UgPSBJbWFnZUxvYWRlci5sb2FkSW1hZ2UoXCJyZXMvaW1hZ2VzL3NwZWVjaF9idWJibGUucG5nXCIpLnRoZW4oKGltZykgPT4ge1xyXG4gICAgICAgICAgICBzcGVlY2hCdWJibGVJbWFnZSA9IGltZztcclxuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3I6IHNwZWVjaCBidWJibGUgaW1hZ2UgY291bGQgbm90IGJlIGxvYWRlZFwiKTtcclxuICAgICAgICAgICAgcmVqZWN0KG51bGwpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBQcm9taXNlLmFsbChbYXRsYXNMb2FkZWRQcm9taXNlLCBzcGVlY2hCdWJibGVMb2FkZWRQcm9taXNlXSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHBsYXllclNwcml0ZS5zZXRTcGVlY2hCdWJibGVJbWFnZShzcGVlY2hCdWJibGVJbWFnZSk7XHJcbiAgICAgICAgICAgIHJlc29sdmUocGxheWVyU3ByaXRlKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBwcm9ncmFtIGVudHJ5IHBvaW50XHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PlxyXG57XHJcbiAgICBpbml0Q2FudmFzQW5kQ29udGV4dCgpO1xyXG5cclxuICAgIC8vIHNldCB0aGUgY2FudmFzIHNpemVcclxuICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogMC45NTtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjk1O1xyXG4gICAgZmJXaWR0aCA9IGNhbnZhcy53aWR0aDtcclxuICAgIGZiSGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcclxuXHJcbiAgICAvLyBsZXZlbCBzZXR1cCBkYXRhXHJcbiAgICBsZXQgcGxheWVyU3RhcnRYID0gMDtcclxuICAgIGxldCBwbGF5ZXJTdGFydFkgPSAwO1xyXG5cclxuICAgIGNvbnN0IGxvYWRQbGF5ZXJTcHJpdGVQcm9taXNlID0gbG9hZFBsYXllclNwcml0ZSgpLnRoZW4oKHNwcml0ZSkgPT4ge1xyXG4gICAgICAgIHBsYXllclNwcml0ZSA9IHNwcml0ZTtcclxuICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgbG9hZEl0ZW1zUHJvbWlzZSA9IEpTT05Mb2FkZXIubG9hZEpTT05GaWxlKFwicmVzL2l0ZW1zL2l0ZW1zLmpzb25cIikudGhlbigob2JqKSA9PiB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhvYmouaXRlbXMpXHJcbiAgICAgICAgZm9yKGNvbnN0IGlkIGluIG9iai5pdGVtcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0bSA9IG9iai5pdGVtc1tpZF07XHJcbiAgICAgICAgICAgIGl0ZW1zW2lkXSA9IG5ldyBJdGVtKGl0bS5uYW1lLCBpdG0uZXhhbWluZV90ZXh0LCBpdG0uaW1hZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IoY29uc3QgaWQgaW4gb2JqLmNvbWJpbmF0aW9ucylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbWJpbmF0aW9uID0gb2JqLmNvbWJpbmF0aW9uc1tpZF07XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0xID0gaXRlbXNbY29tYmluYXRpb24uaXRlbTFdO1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtMiA9IGl0ZW1zW2NvbWJpbmF0aW9uLml0ZW0yXTtcclxuICAgICAgICAgICAgY29uc3QgaXRlbXNPdXQgPSBbXTtcclxuICAgICAgICAgICAgZm9yKGNvbnN0IGlkT3V0IG9mIGNvbWJpbmF0aW9uLml0ZW1zX291dClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaXRlbXNPdXQucHVzaChpdGVtc1tpZE91dF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGl0ZW0xICE9IG51bGwgJiYgaXRlbTIgIT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaXRlbTEuYWRkQ29tYmluYXRpb24oaXRlbTIsIGl0ZW1zT3V0KTtcclxuICAgICAgICAgICAgICAgIGl0ZW0yLmFkZENvbWJpbmF0aW9uKGl0ZW0xLCBpdGVtc091dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbG9hZFBsYXllckludmVudG9yeShcImFja1wiKTtcclxuICAgICAgICBpbml0R1VJQ29udHJvbGxlcnMoKTtcclxuICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yOiBpdGVtcyBjb3VsZCBub3QgYmUgbG9hZGVkXCIpO1xyXG4gICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIExldmVsLmxvYWRMZXZlbChcInJlcy9sZXZlbHMvbGV2ZWwxLmpzb25cIiwgaXRlbXMpO1xyXG4gICAgfSkudGhlbigobGV2ZWxEYXRhKSA9PiB7XHJcbiAgICAgICAgaW1nID0gbGV2ZWxEYXRhLmJhY2tncm91bmRJbWc7XHJcbiAgICAgICAgc3RhdGljU3ByaXRlcyA9IGxldmVsRGF0YS5zdGF0aWNTcHJpdGVzO1xyXG4gICAgICAgIGludGVyYWN0YWJsZVNwcml0ZXMgPSBsZXZlbERhdGEuaW50ZXJhY3RhYmxlU3ByaXRlcztcclxuICAgICAgICBsZXZlbFNjYWxlID0gbGV2ZWxEYXRhLnNjZW5lU2NhbGUgPyBsZXZlbERhdGEuc2NlbmVTY2FsZSA6IDEuMDtcclxuICAgICAgICBzY2VuZVNjYWxlID0gbGV2ZWxTY2FsZSAqIGNhbnZhcy5oZWlnaHQvODgwOyAgLy8gc2NhbGUgYmFzZWQgb24gdGhlIGNhbnZhcyBzaXplIHNvIGdhbWUgZml0cyBvbiBzY3JlZW5cclxuICAgICAgICBkZXB0aFNjYWxlWSA9IGxldmVsRGF0YS5kZXB0aFNjYWxlWTtcclxuXHJcbiAgICAgICAgcGxheWVyU3RhcnRYID0gbGV2ZWxEYXRhLnBsYXllclN0YXJ0WDtcclxuICAgICAgICBwbGF5ZXJTdGFydFkgPSBsZXZlbERhdGEucGxheWVyU3RhcnRZO1xyXG5cclxuICAgICAgICBuYXZtZXNoID0gbGV2ZWxEYXRhLm5hdm1lc2g7XHJcbiAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvcjogbGV2ZWwgY291bGQgbm90IGJlIGxvYWRlZFwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIFByb21pc2UuYWxsKFtsb2FkUGxheWVyU3ByaXRlUHJvbWlzZSwgbG9hZEl0ZW1zUHJvbWlzZV0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHBsYXllclNwcml0ZS54ID0gcGxheWVyU3RhcnRYO1xyXG4gICAgICAgIHBsYXllclNwcml0ZS55ID0gcGxheWVyU3RhcnRZO1xyXG4gICAgICAgIHBsYXllclNwcml0ZS5zZXRTdGFydFBvcyhwbGF5ZXJTdGFydFgsIHBsYXllclN0YXJ0WSk7XHJcbiAgICAgICAgcGxheWVyU3ByaXRlLnNldERlcHRoU2NhbGUoZGVwdGhTY2FsZVkpO1xyXG4gICAgICAgIGxhc3RUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBnYW1lTG9vcCgpO1xyXG4gICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3I6IGdhbWUgY291bGQgbm90IGJlIGxvYWRlZFwiKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBvbiB3aW5kb3cgcmVzaXplIGNoYW5nZSB0aGUgc2NhbGVcclxud2luZG93Lm9ucmVzaXplID0gKCkgPT4ge1xyXG4gICAgLy8gc2V0IHRoZSBjYW52YXMgc2l6ZVxyXG4gICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiAwLjk1O1xyXG4gICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuOTU7XHJcbiAgICBmYldpZHRoID0gY2FudmFzLndpZHRoO1xyXG4gICAgZmJIZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xyXG4gICAgc2NlbmVTY2FsZSA9IGxldmVsU2NhbGUgKiBjYW52YXMuaGVpZ2h0Lzg4MDsgIC8vIHNjYWxlIGJhc2VkIG9uIHRoZSBjYW52YXMgc2l6ZSBzbyBnYW1lIGZpdHMgb24gc2NyZWVuXHJcbiAgICBjb25zb2xlLmxvZyhzY2VuZVNjYWxlKTtcclxufVxyXG5cclxuLy8gbG9hZCB0aGUgcGxheWVyJ3MgaW52ZW50b3J5XHJcbmZ1bmN0aW9uIGxvYWRQbGF5ZXJJbnZlbnRvcnkocGF0aDogc3RyaW5nKSB7XHJcbiAgICAvLyBUT0RPIC0gbG9hZCBmcm9tIGZpbGVcclxuICAgIC8vaW52ZW50LmFkZEl0ZW0oaXRlbXNbXCIwLjAuMS0wMDFcIl0pO1xyXG4gICAgLy9pbnZlbnQuYWRkSXRlbShpdGVtc1tcIjAuMC4xLTAwMlwiXSk7XHJcbiAgICBpbnZlbnQuYWRkSXRlbShpdGVtc1tcIjAuMC4xLTAwMlwiXSk7XHJcbiAgICAvL2ludmVudC5hZGRJdGVtKGl0ZW1zW1wiMC4wLjEtMDAzXCJdKTtcclxufVxyXG5cclxuLy8gZ3VpIGNvbnRyb2xcclxuZnVuY3Rpb24gaW5pdEdVSUNvbnRyb2xsZXJzKCkge1xyXG4gICAgLy8gZ2V0IGFsbCBvZiB0aGUgaXRlbSBzbG90IGh0bWwgYnV0dG9uc1xyXG4gICAgaXRlbXNsb3RidG5zLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtc2xvdDFcIikpO1xyXG4gICAgaXRlbXNsb3RidG5zLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtc2xvdDJcIikpO1xyXG4gICAgaXRlbXNsb3RidG5zLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtc2xvdDNcIikpO1xyXG4gICAgaXRlbXNsb3RidG5zLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtc2xvdDRcIikpO1xyXG4gICAgaXRlbXNsb3RidG5zLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtc2xvdDVcIikpO1xyXG4gICAgaXRlbXNsb3RidG5zLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtc2xvdDZcIikpO1xyXG4gICAgaXRlbXNsb3RidG5zLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtc2xvdDdcIikpO1xyXG4gICAgaXRlbXNsb3RidG5zLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtc2xvdDhcIikpO1xyXG4gICAgaXRlbXNsb3RidG5zLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtc2xvdDlcIikpO1xyXG5cclxuICAgIC8vIGFkZCBhIGJ1dHRvbiBmb3IgZWFjaCBpdGVtIGluIHRoZSBwbGF5ZXIncyBpbnZlbnRvcnlcclxuICAgIGZvcihsZXQgaW5kZXggPSAwOyBpbmRleCA8IGludmVudC5nZXRJdGVtcygpLmxlbmd0aDsgaW5kZXggKyspIHtcclxuICAgICAgICBjb25zdCBpdGVtID0gaW52ZW50LmdldEl0ZW1zKClbaW5kZXhdO1xyXG4gICAgICAgIGlmKGl0ZW0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAvLyBhZGQgYSBidXR0b24gZm9yIGVhY2ggaXRlbSBpbiB0aGUgcGxheWVyJ3MgaW52ZW50b3J5XHJcbiAgICAgICAgICAgIGFkZE5ld0l0ZW1CdXR0b24oaW5kZXgsIGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IobGV0IGluZGV4ID0gMDsgaW5kZXggPCBpdGVtc2xvdGJ0bnMubGVuZ3RoOyBpbmRleCArKylcclxuICAgIHtcclxuICAgICAgICBjb25zdCBpdGVtc2xvdGJ0biA9IGl0ZW1zbG90YnRuc1tpbmRleF07XHJcbiAgICAgICAgaXRlbXNsb3RidG4ub25jbGljayA9IChldnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgb25JdGVtU2xvdENsaWNrKGl0ZW1zbG90YnRuLCBpbmRleCwgZXZ0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZE5ld0l0ZW1CdXR0b24oaXRlbXNsb3RJbmRleDogbnVtYmVyLCBpdGVtOiBJdGVtKVxyXG57XHJcbiAgICAvLyBhZGQgYSBidXR0b24gZm9yIHRoZSBpdGVtXHJcbiAgICBsZXQgaXRlbWJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBpdGVtYnRuLmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIpO1xyXG4gICAgaXRlbWJ0bi5zdHlsZS5jc3NUZXh0ID0gYGJhY2tncm91bmQtaW1hZ2U6IHVybCgke2l0ZW0uZ2V0SW1hZ2VQYXRoKCl9KTtgO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW52ZW50XCIpLmluc2VydEJlZm9yZShpdGVtYnRuLCBpdGVtc2xvdGJ0bnNbaXRlbXNsb3RJbmRleF0pO1xyXG5cclxuICAgIC8vIGFkZCBhIG1vdXNlIGNsaWNrIGNhbGxiYWNrIHRvIHRoZSBuZXcgZWxlbWVudFxyXG4gICAgaXRlbWJ0bi5vbm1vdXNlZG93biA9IChldnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICBvbkl0ZW1DbGljayhpdGVtYnRuLCBpdGVtLCBldnQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZWZyZXNoQWxsSXRlbXNEaXNwbGF5ZWQoKVxyXG57XHJcbiAgICAvLyBmaXJzdCwgcmVtb3ZlIGFsbCBpdGVtIGJ1dHRvbnMgZnJvbSB0aGUgZG9tXHJcbiAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJpdGVtXCIpO1xyXG4gICAgZm9yKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZWxlbXMubGVuZ3RoOyBpbmRleCArKylcclxuICAgIHtcclxuICAgICAgICBsZXQgZWxlbWVudCA9IGVsZW1zW2luZGV4XTtcclxuICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYWRkIGEgYnV0dG9uIGZvciBlYWNoIGl0ZW0gaW4gdGhlIHBsYXllcidzIGludmVudG9yeVxyXG4gICAgZm9yKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaW52ZW50LmdldEl0ZW1zKCkubGVuZ3RoOyBpbmRleCArKykge1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBpbnZlbnQuZ2V0SXRlbXMoKVtpbmRleF07XHJcbiAgICAgICAgaWYoaXRlbSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIC8vIGFkZCBhIGJ1dHRvbiBmb3IgZWFjaCBpdGVtIGluIHRoZSBwbGF5ZXIncyBpbnZlbnRvcnlcclxuICAgICAgICAgICAgYWRkTmV3SXRlbUJ1dHRvbihpbmRleCwgaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZWZyZXNoSXRlbURpc3BsYXllZChpdGVtYnRuOiBIVE1MQnV0dG9uRWxlbWVudCwgaXRlbTogSXRlbSlcclxue1xyXG4gICAgaWYoaXRlbSAhPSBudWxsKSB7XHJcbiAgICAgICAgLy8gY2hhbmdlIHRoZSBpbWFnZSBkaXNwbGF5ZWQgb24gdGhlIGl0ZW0gYnV0dG9uXHJcbiAgICAgICAgaXRlbWJ0bi5zdHlsZS5jc3NUZXh0ID0gYGJhY2tncm91bmQtaW1hZ2U6IHVybCgke2l0ZW0uZ2V0SW1hZ2VQYXRoKCl9KTtgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvLyByZW1vdmUgdGhlIGl0ZW0gYnV0dG9uIGZyb20gdGhlIGRvbVxyXG4gICAgICAgIGl0ZW1idG4ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpdGVtYnRuKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gb25JdGVtU2xvdENsaWNrKGl0ZW1zbG90YnRuOiBIVE1MQnV0dG9uRWxlbWVudCwgaXRlbXNsb3RJbmRleDogbnVtYmVyLCBldnQ6IE1vdXNlRXZlbnQpXHJcbntcclxuICAgIC8vIG1vdmUgc2VsZWN0ZWQgaXRlbSB0byB0aGlzIHNsb3RcclxuICAgIGlmKHNlbGVjdGVkSXRlbSAhPSBudWxsICYmIHNlbGVjdGVkSXRlbUJ0biAhPSBudWxsKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHJlbW92ZSBmcm9tIHByZXZpb3VzIGl0ZW1zbG90IGFuZCBhZGQgdG8gbmV3IGl0ZW1zbG90XHJcbiAgICAgICAgc2VsZWN0ZWRJdGVtQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZGl0ZW1cIik7XHJcbiAgICAgICAgcmVmcmVzaEl0ZW1EaXNwbGF5ZWQoc2VsZWN0ZWRJdGVtQnRuLCBudWxsKTtcclxuICAgICAgICBhZGROZXdJdGVtQnV0dG9uKGl0ZW1zbG90SW5kZXgsIHNlbGVjdGVkSXRlbSk7XHJcbiAgICAgICAgaW52ZW50Lm1vdmVJdGVtKHNlbGVjdGVkSXRlbSwgaXRlbXNsb3RJbmRleCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coaW52ZW50LmdldEl0ZW1zKCkpO1xyXG4gICAgICAgIHNlbGVjdGVkSXRlbSA9IG51bGw7XHJcbiAgICAgICAgc2VsZWN0ZWRJdGVtQnRuID0gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gb25JdGVtQ2xpY2soaXRlbWJ0bjogSFRNTEJ1dHRvbkVsZW1lbnQsIGl0ZW06IEl0ZW0sIGV2dDogTW91c2VFdmVudClcclxue1xyXG4gICAgaWYoZXZ0LmJ1dHRvbiA9PT0gMCkgeyAgLy8gbGVmdCBjbGlja1xyXG4gICAgICAgIC8vIGNvbWJpbmUgMiBpdGVtcywgKGNhbid0IGNvbWJpbmUgaXRlbSB3aXRoIGl0c2VsZilcclxuICAgICAgICBpZihzZWxlY3RlZEl0ZW0gIT0gbnVsbCAmJiBzZWxlY3RlZEl0ZW1CdG4gIT0gbnVsbCAmJiBpdGVtICE9PSBzZWxlY3RlZEl0ZW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBvdXRJdGVtcyA9IHNlbGVjdGVkSXRlbS5jb21iaW5lKGl0ZW0pO1xyXG4gICAgICAgICAgICBpZihvdXRJdGVtcyAhPSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZWZyZXNoSXRlbURpc3BsYXllZChzZWxlY3RlZEl0ZW1CdG4sIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgcmVmcmVzaEl0ZW1EaXNwbGF5ZWQoaXRlbWJ0biwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICBpbnZlbnQucmVtb3ZlSXRlbShzZWxlY3RlZEl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgaW52ZW50LnJlbW92ZUl0ZW0oaXRlbSk7XHJcbiAgICAgICAgICAgICAgICBmb3IoY29uc3Qgb3V0SXRlbSBvZiBvdXRJdGVtcylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnZlbnQuYWRkSXRlbShvdXRJdGVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1CdG4gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaW52ZW50LmdldEl0ZW1zKCkpO1xyXG4gICAgICAgICAgICAgICAgcmVmcmVzaEFsbEl0ZW1zRGlzcGxheWVkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1CdG4uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkaXRlbVwiKTtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1CdG4gPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHNlbGVjdCBhbiBpdGVtXHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoaXRlbSA9PT0gc2VsZWN0ZWRJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1CdG4uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkaXRlbVwiKTtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1CdG4gPSBudWxsO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtID0gaXRlbTtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbUJ0biA9IGl0ZW1idG47XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1CdG4uY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkaXRlbVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZihldnQuYnV0dG9uID09PSAyKSB7ICAgLy8gcmlnaHQgY2xpY2tcclxuICAgICAgICBwbGF5ZXJTcHJpdGUub3BlblNwZWVjaEJ1YmJsZShpdGVtLmdldEV4YW1pbmVUZXh0KCkpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vZGVjbGFyZSBQcm9taXNlIGFueTtcclxuXHJcbmV4cG9ydCBjbGFzcyBJbWFnZUxvYWRlclxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGxvYWRJbWFnZShwYXRoOiBzdHJpbmcpOiBQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgIGltZy5zcmMgPSBwYXRoO1xyXG4gICAgICAgICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShpbWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGltZy5vbmVycm9yID0gKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIEpTT05Mb2FkZXJcclxue1xyXG4gICAgc3RhdGljIGxvYWRKU09ORmlsZShwYXRoOiBzdHJpbmcpOiBQcm9taXNlPGFueT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHhoci5yZWFkeVN0YXRlID09PSBYTUxIdHRwUmVxdWVzdC5ET05FICYmIHhoci5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShvYmopO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHhoci5yZWFkeVN0YXRlID09PSBYTUxIdHRwUmVxdWVzdC5ET05FICYmIHhoci5zdGF0dXMgIT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHhoci5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHhoci5zdGF0dXNUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QobnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocGF0aCk7XHJcbiAgICAgICAgICAgIHhoci5vcGVuKFwiR0VUXCIsIHBhdGgsIHRydWUpO1xyXG4gICAgICAgICAgICB4aHIuc2VuZCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7U3ByaXRlfSBmcm9tIFwiLi9TcHJpdGVcIlxyXG5pbXBvcnQge1Nwcml0ZUFuaW1hdGlvbn0gZnJvbSBcIi4vU3ByaXRlQW5pbWF0aW9uXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBBbmltYXRlZFNwcml0ZSBleHRlbmRzIFNwcml0ZVxyXG57XHJcbiAgICBwcm90ZWN0ZWQgc3ByaXRlQW5pbWF0aW9uczogQXJyYXk8U3ByaXRlQW5pbWF0aW9uPiA9IFtdO1xyXG4gICAgcHJvdGVjdGVkIGN1cnJlbnRBbmltYXRpb24gPSAtMTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHNjYWxlOiBudW1iZXIsIG9yaWdpbkhvcml6b250YWw6IHN0cmluZywgb3JpZ2luVmVydGljYWw6IHN0cmluZywgYW5pbXM6IEFycmF5PFNwcml0ZUFuaW1hdGlvbj4pIHtcclxuICAgICAgICBzdXBlcih4LCB5LCBzY2FsZSwgb3JpZ2luSG9yaXpvbnRhbCwgb3JpZ2luVmVydGljYWwpO1xyXG4gICAgICAgIGlmKGFuaW1zICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5zcHJpdGVBbmltYXRpb25zID0gYW5pbXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3KGN1cnJlbnRUaW1lOiBudW1iZXIsIGRlbHRhVGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYodGhpcy5jdXJyZW50QW5pbWF0aW9uID49IDApIHtcclxuICAgICAgICAgICAgY29uc3QgYW5pbSA9IHRoaXMuc3ByaXRlQW5pbWF0aW9uc1t0aGlzLmN1cnJlbnRBbmltYXRpb25dO1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hPcmlnaW4oYW5pbS5nZXRDdXJyZW50RnJhbWUoKS53LCBhbmltLmdldEN1cnJlbnRGcmFtZSgpLmgpO1xyXG4gICAgICAgICAgICBhbmltLmRyYXcoY3VycmVudFRpbWUsIHRoaXMub3JpZ2luWCwgdGhpcy5vcmlnaW5ZLCB0aGlzLnNjYWxlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEN1cnJlbnRBbmltYXRpb24gPSAobmV3QW5pbWF0aW9uSW5kZXg6IG51bWJlcik6IHZvaWQgPT4ge1xyXG4gICAgICAgIGlmKG5ld0FuaW1hdGlvbkluZGV4IDwgdGhpcy5zcHJpdGVBbmltYXRpb25zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24gPSBuZXdBbmltYXRpb25JbmRleDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZFNwcml0ZUFuaW1hdGlvbiA9IChhbmltKTogdm9pZCA9PiB7XHJcbiAgICAgICAgaWYoYW5pbSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlQW5pbWF0aW9ucy5wdXNoKGFuaW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0U3ByaXRlQW5pbWF0aW9ucyA9IChhbmltczogQXJyYXk8U3ByaXRlQW5pbWF0aW9uPik6IHZvaWQgPT4ge1xyXG4gICAgICAgIGlmKGFuaW1zICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5zcHJpdGVBbmltYXRpb25zID0gYW5pbXM7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbiA9IC0xO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0UG9zKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7Y3R4fSBmcm9tIFwiLi4vZ2xvYi50c1wiXHJcbmltcG9ydCB7U3ByaXRlQW5pbWF0aW9ufSBmcm9tIFwiLi9TcHJpdGVBbmltYXRpb25cIlxyXG5pbXBvcnQge1N0YXRpY1Nwcml0ZX0gZnJvbSBcIi4vU3RhdGljU3ByaXRlXCJcclxuaW1wb3J0IHtJbnRlcmFjdGlvbn0gZnJvbSBcIi4uL2dhbWUvSW50ZXJhY3Rpb25cIlxyXG5pbXBvcnQge1RleHR1cmVBdGxhc30gZnJvbSBcIi4vVGV4dHVyZUF0bGFzXCJcclxuaW1wb3J0IHtJdGVtfSBmcm9tIFwiLi4vaXRlbXMvSXRlbVwiXHJcbmltcG9ydCB7Q2lyY2xlfSBmcm9tIFwiLi4vY29sbGlzaW9uL0NpcmNsZVwiXHJcbmltcG9ydCB7UmVjdGFuZ2xlfSBmcm9tIFwiLi4vY29sbGlzaW9uL1JlY3RhbmdsZVwiXHJcblxyXG5leHBvcnQgY2xhc3MgSW50ZXJhY3RhYmxlU3ByaXRlIGV4dGVuZHMgU3RhdGljU3ByaXRlXHJcbntcclxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBzY2FsZTogbnVtYmVyLCBvcmlnaW5Ib3Jpem9udGFsOiBzdHJpbmcsIG9yaWdpblZlcnRpY2FsOiBzdHJpbmcsIGF0bGFzOiBUZXh0dXJlQXRsYXMsIGltYWdlTmFtZTogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgcHJvdGVjdGVkIGV4YW1pbmVUZXh0OiBzdHJpbmcsIHByb3RlY3RlZCBpbnRlcmFjdGlvblpvbmU6IENpcmNsZSwgcHJvdGVjdGVkIGNsaWNrWm9uZTogUmVjdGFuZ2xlLCBwcm90ZWN0ZWQgaW50ZXJhY3Rpb25zOiBBcnJheTxJbnRlcmFjdGlvbj4pXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoeCwgeSwgc2NhbGUsIG9yaWdpbkhvcml6b250YWwsIG9yaWdpblZlcnRpY2FsLCBhdGxhcywgaW1hZ2VOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdyhjdXJyZW50VGltZTogbnVtYmVyLCBkZWx0YVRpbWU6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICBzdXBlci5kcmF3KGN1cnJlbnRUaW1lLCBkZWx0YVRpbWUpO1xyXG5cclxuICAgICAgICAvLyBERUJVRyAtIGRyYXcgdGhlIGNpcmNsZSBhbmQgcmVjdGFuZ2xlXHJcbiAgICAgICAgdGhpcy5jbGlja1pvbmUuZHJhdygpO1xyXG4gICAgICAgIHRoaXMuaW50ZXJhY3Rpb25ab25lLmRyYXcoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5JbnRlcmFjdGlvblpvbmUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJhY3Rpb25ab25lLmNvbnRhaW5zKHgsIHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbkNsaWNrWm9uZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jbGlja1pvbmUuY29udGFpbnMoeCwgeSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaW50ZXJhY3Qgd2l0aCB0aGUgc3ByaXRlXHJcbiAgICAvLyBpdGVtIGNhbiBiZSBudWxsXHJcbiAgICBwdWJsaWMgaW50ZXJhY3QoaXRlbTogSXRlbSk6IHt0ZXh0OiBzdHJpbmcsIGl0ZW1zOiBBcnJheTxJdGVtPn1cclxuICAgIHtcclxuICAgICAgICBmb3IoY29uc3QgaW50ZXIgb2YgdGhpcy5pbnRlcmFjdGlvbnMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBpZiB0aGUgaXRlbXMgbWF0Y2gsIHRoZW4gaW50ZXJhY3Qgd2l0aCB0aGUgb2JqZWN0XHJcbiAgICAgICAgICAgIGlmKGludGVyLmdldEl0ZW0oKSA9PSBpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2JqID0gaW50ZXIuaW50ZXJhY3QoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICBpZihvYmogIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgaW50ZXJhY3Rpb24gaWYgaXQgaGFzIGJlZW4gZnVsZmlsbGVkXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGlvbnMuc3BsaWNlKHRoaXMuaW50ZXJhY3Rpb25zLmluZGV4T2YoaW50ZXIpLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBvYmo7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRFeGFtaW5lVGV4dCgpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5leGFtaW5lVGV4dDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0FuaW1hdGVkU3ByaXRlfSBmcm9tIFwiLi9BbmltYXRlZFNwcml0ZVwiXHJcbmltcG9ydCB7U3ByaXRlQW5pbWF0aW9ufSBmcm9tIFwiLi9TcHJpdGVBbmltYXRpb25cIlxyXG5pbXBvcnQge1BvaW50fSBmcm9tIFwiLi4vY29sbGlzaW9uL1BvaW50XCJcclxuXHJcbmV4cG9ydCBjbGFzcyBOYXZTcHJpdGUgZXh0ZW5kcyBBbmltYXRlZFNwcml0ZVxyXG57XHJcbiAgICBwcml2YXRlIHdheXBvaW50czogQXJyYXk8UG9pbnQ+O1xyXG4gICAgcHJpdmF0ZSBuZXh0V2F5cG9pbnQ6IFBvaW50O1xyXG4gICAgcHJpdmF0ZSBtb3ZlU3BlZWQ6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIGRlcHRoU2NhbGVZOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHN0YXJ0WDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBzdGFydFk6IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHNjYWxlOiBudW1iZXIsIG9yaWdpbkhvcml6b250YWw6IHN0cmluZywgb3JpZ2luVmVydGljYWw6IHN0cmluZywgYW5pbXM6IEFycmF5PFNwcml0ZUFuaW1hdGlvbj4sIG1vdmVTcGVlZDogbnVtYmVyID0gMC41KSB7XHJcbiAgICAgICAgc3VwZXIoeCwgeSwgc2NhbGUsIG9yaWdpbkhvcml6b250YWwsIG9yaWdpblZlcnRpY2FsLCBhbmltcyk7XHJcbiAgICAgICAgdGhpcy5tb3ZlU3BlZWQgPSBtb3ZlU3BlZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcoY3VycmVudFRpbWU6IG51bWJlciwgZGVsdGFUaW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICAvLyBtb3ZlIHRvd2FyZHMgdGhlIG5leHQgd2F5cG9pbnRcclxuICAgICAgICBpZih0aGlzLm5leHRXYXlwb2ludCAhPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4oTWF0aC5hYnModGhpcy5uZXh0V2F5cG9pbnQueSAtIHRoaXMueSkgLyBNYXRoLmFicyh0aGlzLm5leHRXYXlwb2ludC54IC0gdGhpcy54KSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vdmVTcGVlZFggPSB0aGlzLm1vdmVTcGVlZCAqIGRlbHRhVGltZSAqIE1hdGguY29zKGFuZ2xlKSAqIHRoaXMuc2NhbGU7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vdmVTcGVlZFkgPSB0aGlzLm1vdmVTcGVlZCAqIGRlbHRhVGltZSAqIE1hdGguc2luKGFuZ2xlKSAqIHRoaXMuc2NhbGU7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiB0aGUgc3ByaXRlIGhhcyByZWFjaGVkIHRoZSB3YXlwb2ludCAob3IgdGhlcmVhYm91dHMpIHRoZW4gZ2V0IHRoZSBuZXh0IHdheXBvaW50XHJcbiAgICAgICAgICAgIGlmKHRoaXMueCA+PSB0aGlzLm5leHRXYXlwb2ludC54IC0gNSAmJiB0aGlzLnggPD0gdGhpcy5uZXh0V2F5cG9pbnQueCArIDUgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMueSA+PSB0aGlzLm5leHRXYXlwb2ludC55IC0gNSAmJiB0aGlzLnkgPD0gdGhpcy5uZXh0V2F5cG9pbnQueSArIDUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJhcnJpdmVkXCIsIHRoaXMueCwgdGhpcy55KTtcclxuICAgICAgICAgICAgICAgIHRoaXMueCA9IHRoaXMubmV4dFdheXBvaW50Lng7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSB0aGlzLm5leHRXYXlwb2ludC55O1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy53YXlwb2ludHMgIT0gbnVsbCAmJiB0aGlzLndheXBvaW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0V2F5cG9pbnQgPSB0aGlzLndheXBvaW50cy5wb3AoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0V2F5cG9pbnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBtb3ZlIHRvd2FyZHMgdGhlIG5leHQgd2F5cG9pbnRcclxuICAgICAgICAgICAgaWYodGhpcy5uZXh0V2F5cG9pbnQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy54IDwgdGhpcy5uZXh0V2F5cG9pbnQueCAtIDUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnggKz0gbW92ZVNwZWVkWDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLnggPiB0aGlzLm5leHRXYXlwb2ludC54ICsgNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCAtPSBtb3ZlU3BlZWRYO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKHRoaXMueSA8IHRoaXMubmV4dFdheXBvaW50LnkgLSA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ICs9IG1vdmVTcGVlZFk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGhpcy55ID4gdGhpcy5uZXh0V2F5cG9pbnQueSArIDUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnkgLT0gbW92ZVNwZWVkWTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBzY2FsZSB0aGUgcGxheWVyIGJhc2VkIG9uIHRoZSBkZXB0aCBvZiB0aGUgbW91c2UgcG9zaXRpb25cclxuICAgICAgICB0aGlzLnNjYWxlID0gdGhpcy5iYXNlU2NhbGUgKiB0aGlzLmRlcHRoU2NhbGVZICoqICh0aGlzLnN0YXJ0WSAtIHRoaXMueSk7XHJcblxyXG4gICAgICAgIHN1cGVyLmRyYXcoY3VycmVudFRpbWUsIGRlbHRhVGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFdheXBvaW50cyh3YXlwb2ludHM6IEFycmF5PFBvaW50Pikge1xyXG4gICAgICAgIHRoaXMud2F5cG9pbnRzID0gd2F5cG9pbnRzO1xyXG4gICAgICAgIHRoaXMubmV4dFdheXBvaW50ID0gbnVsbDtcclxuICAgICAgICBpZih0aGlzLndheXBvaW50cyAhPSBudWxsICYmIHRoaXMud2F5cG9pbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy53YXlwb2ludHMpO1xyXG4gICAgICAgICAgICB0aGlzLm5leHRXYXlwb2ludCA9IHRoaXMud2F5cG9pbnRzLnBvcCgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5leHQ6IFwiICsgdGhpcy5uZXh0V2F5cG9pbnQueCArIFwiLCBcIiArIHRoaXMubmV4dFdheXBvaW50LnkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXREZXB0aFNjYWxlKGRlcHRoU2NhbGVZOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmRlcHRoU2NhbGVZID0gZGVwdGhTY2FsZVk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFN0YXJ0UG9zKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydFggPSB4O1xyXG4gICAgICAgIHRoaXMuc3RhcnRZID0geTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge2N0eH0gZnJvbSBcIi4uL2dsb2IudHNcIlxyXG5pbXBvcnQge05hdlNwcml0ZX0gZnJvbSBcIi4vTmF2U3ByaXRlXCJcclxuaW1wb3J0IHtQb2ludH0gZnJvbSBcIi4uL2NvbGxpc2lvbi9Qb2ludFwiXHJcbmltcG9ydCB7QW5pbWF0ZWRTcHJpdGV9IGZyb20gXCIuL0FuaW1hdGVkU3ByaXRlXCJcclxuaW1wb3J0IHtTcHJpdGVBbmltYXRpb259IGZyb20gXCIuL1Nwcml0ZUFuaW1hdGlvblwiXHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyU3ByaXRlIGV4dGVuZHMgTmF2U3ByaXRlXHJcbntcclxuICAgIHByaXZhdGUgc3BlZWNoQnViYmxlSW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHNwZWVjaEJ1YmJsZU9wZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgc3BlZWNoQnViYmxlU2hvd25BdDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBzcGVlY2hCdWJibGVUZXh0OiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHRleHRXaWR0aDogbnVtYmVyOyAgLy8gd2lkdGggb2YgdGhlIHRleHQgaW4gcGl4ZWxzXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IEJBU0VfRk9OVF9TSVpFID0gNzU7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBzY2FsZTogbnVtYmVyLCBvcmlnaW5Ib3Jpem9udGFsOiBzdHJpbmcsIG9yaWdpblZlcnRpY2FsOiBzdHJpbmcsIGFuaW1zOiBBcnJheTxTcHJpdGVBbmltYXRpb24+LCBtb3ZlU3BlZWQ6IG51bWJlciA9IDAuNSlcclxuICAgIHtcclxuICAgICAgICBzdXBlcih4LCB5LCBzY2FsZSwgb3JpZ2luSG9yaXpvbnRhbCwgb3JpZ2luVmVydGljYWwsIGFuaW1zLCBtb3ZlU3BlZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3KGN1cnJlbnRUaW1lOiBudW1iZXIsIGRlbHRhVGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIuZHJhdyhjdXJyZW50VGltZSwgZGVsdGFUaW1lKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5zcGVlY2hCdWJibGVPcGVuKSB7XHJcbiAgICAgICAgICAgIC8vIGRyYXcgdGhlIHNwZWVjaCBidWJibGVcclxuICAgICAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLngsIHRoaXMub3JpZ2luWSk7XHJcbiAgICAgICAgICAgIC8vY3R4LmRyYXdJbWFnZSh0aGlzLnNwZWVjaEJ1YmJsZUltYWdlLCAtdGhpcy5zcGVlY2hCdWJibGVJbWFnZS53aWR0aC8yICogdGhpcy5zY2FsZSwgLXRoaXMuc3BlZWNoQnViYmxlSW1hZ2UuaGVpZ2h0LzIgKiB0aGlzLnNjYWxlLCB0aGlzLnNwZWVjaEJ1YmJsZUltYWdlLndpZHRoICogdGhpcy5zY2FsZSwgdGhpcy5zcGVlY2hCdWJibGVJbWFnZS5oZWlnaHQgKiB0aGlzLnNjYWxlKTtcclxuICAgICAgICAgICAgY3R4LnNjYWxlKHRoaXMuc2NhbGUsIHRoaXMuc2NhbGUpO1xyXG4gICAgICAgICAgICBjdHguc2hhZG93Q29sb3IgPSBcIiM1NTU1NTVcIjtcclxuICAgICAgICAgICAgY3R4LnNoYWRvd0JsdXIgPSA1O1xyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjMUFGRjgwXCI7ICAgLy8gZ3JlZW46ICMxQUZGODAsIGFtYmVyOiAjRkZCNjQyLCBibHVlOiAjMkVDRkZGXHJcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLnNwZWVjaEJ1YmJsZVRleHQsIC10aGlzLnRleHRXaWR0aC8yLCAwKTtcclxuICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHNwZWVjaCBidWJibGUgbGFzdHMgMS8yIHNlY29uZCBmb3IgZWFjaCB3b3JkXHJcbiAgICAgICAgICAgIGlmKGN1cnJlbnRUaW1lIC0gdGhpcy5zcGVlY2hCdWJibGVTaG93bkF0ID49IHRoaXMuc3BlZWNoQnViYmxlVGV4dC5zcGxpdChcIiBcIikubGVuZ3RoICogNTAwICsgNTAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVjaEJ1YmJsZU9wZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3BlblNwZWVjaEJ1YmJsZSh0ZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICBpZih0ZXh0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5zcGVlY2hCdWJibGVPcGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zcGVlY2hCdWJibGVUZXh0ID0gdGV4dDtcclxuICAgICAgICAgICAgdGhpcy5zcGVlY2hCdWJibGVTaG93bkF0ID0gRGF0ZS5ub3coKTtcclxuXHJcbiAgICAgICAgICAgIGN0eC5mb250ID0gYCR7dGhpcy5CQVNFX0ZPTlRfU0laRX1weCBCb29rbWFuYDtcclxuICAgICAgICAgICAgdGhpcy50ZXh0V2lkdGggPSBjdHgubWVhc3VyZVRleHQodGV4dCkud2lkdGg7XHJcblxyXG4gICAgICAgICAgICAvLyBjcmVhdGUgYSBkaXYgY29udGFpbmluZyB0aGUgdGV4dCBzbyB0aGUgcGl4ZWwgd2lkdGggb2YgdGV4dCBjYW4gYmUgY2FsY3VsYXRlZFxyXG4gICAgICAgICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMTgyNDEvY2FsY3VsYXRlLXRleHQtd2lkdGgtd2l0aC1qYXZhc2NyaXB0XHJcbiAgICAgICAgICAgIC8qbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGRpdi5zdHlsZS5jc3NUZXh0ID0gYHBvc2l0aW9uOiBhYnNvbHV0ZTsgdmlzaWJpbGl0eTogaGlkZGVuOyBoZWlnaHQ6IGF1dG87IHdpZHRoOiBhdXRvOyB3aGl0ZS1zcGFjZTogbm93cmFwOyBmb250LXNpemU6ICR7dGhpcy5CQVNFX0ZPTlRfU0laRX1gO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShkaXYsIG51bGwpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRXaWR0aCA9IGRpdi5jbGllbnRXaWR0aCArIDE7Ki9cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0ZXh0IHdpZHRoXCIsIHRoaXMudGV4dFdpZHRoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFNwZWVjaEJ1YmJsZUltYWdlKGltZylcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNwZWVjaEJ1YmJsZUltYWdlID0gaW1nO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTcHJpdGVcclxue1xyXG4gICAgcHJvdGVjdGVkIGJhc2VTY2FsZTogbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIG9yaWdpblg6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBvcmlnaW5ZOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIHg6IG51bWJlciwgcHJvdGVjdGVkIHk6IG51bWJlciwgcHJvdGVjdGVkIHNjYWxlOiBudW1iZXIsIHByb3RlY3RlZCBvcmlnaW5Ib3Jpem9udGFsOiBzdHJpbmcsIHByb3RlY3RlZCBvcmlnaW5WZXJ0aWNhbDogc3RyaW5nLCBwcm90ZWN0ZWQgZGVwdGg6IG51bWJlciA9IDApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5iYXNlU2NhbGUgPSB0aGlzLnNjYWxlO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCByZWZyZXNoT3JpZ2luKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBwb3NpdGlvbiBhdCB3aGljaCB0byBkcmF3IHRoZSBzcHJpdGVcclxuICAgICAgICBpZih0aGlzLm9yaWdpbkhvcml6b250YWwgPT0gXCJyaWdodFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3JpZ2luWCA9IHRoaXMueCAtIHdpZHRoICogdGhpcy5zY2FsZTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5vcmlnaW5Ib3Jpem9udGFsID09IFwibGVmdFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3JpZ2luWCA9IHRoaXMueDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm9yaWdpblggPSB0aGlzLnggLSB3aWR0aC8yICogdGhpcy5zY2FsZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgcG9zaXRpb24gYXQgd2hpY2ggdG8gZHJhdyB0aGUgc3ByaXRlXHJcbiAgICAgICAgaWYodGhpcy5vcmlnaW5WZXJ0aWNhbCA9PSBcInRvcFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3JpZ2luWSA9IHRoaXMueSAtIGhlaWdodCogdGhpcy5zY2FsZTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5vcmlnaW5WZXJ0aWNhbCA9PSBcImJvdHRvbVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3JpZ2luWSA9IHRoaXMueTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm9yaWdpblkgPSB0aGlzLnkgLSBoZWlnaHQvMiAqIHRoaXMuc2NhbGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgZHJhdyhjdXJyZW50VGltZTogbnVtYmVyLCBkZWx0YVRpbWU6IG51bWJlcik6IHZvaWQ7XHJcbn1cclxuIiwiaW1wb3J0IHtjdHh9IGZyb20gXCIuLi9nbG9iLnRzXCJcclxuaW1wb3J0IHtUZXh0dXJlQXRsYXN9IGZyb20gJy4vVGV4dHVyZUF0bGFzJ1xyXG5pbXBvcnQge1RleHR1cmVBdGxhc0ZyYW1lfSBmcm9tIFwiLi9UZXh0dXJlQXRsYXNGcmFtZVwiXHJcblxyXG5leHBvcnQgY2xhc3MgU3ByaXRlQW5pbWF0aW9uXHJcbntcclxuICAgIC8vIGh0dHA6Ly93d3cudHlwZXNjcmlwdGdhbWVzLmNvbS9BbmltYXRlZFNwcml0ZXMuaHRtbFxyXG4gICAgcHJvdGVjdGVkIGN1cnJlbnRGcmFtZSA9IDA7XHJcbiAgICBwcml2YXRlIGxhc3RUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBudW1GcmFtZXM6IG51bWJlciwgcHJvdGVjdGVkIGF0bGFzOiBUZXh0dXJlQXRsYXMsIHByb3RlY3RlZCBzZXF1ZW5jZU5hbWU6IHN0cmluZykge31cclxuXHJcbiAgICBwdWJsaWMgZHJhdyA9IChjdXJyZW50VGltZTogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlciwgc2NhbGU6IG51bWJlcik6IHZvaWQgPT4ge1xyXG4gICAgICAgIGxldCBmcmFtZSA9IHRoaXMuZ2V0Q3VycmVudEZyYW1lKCk7XHJcbiAgICAgICAgaWYoZnJhbWUuZnJhbWVEdXJhdGlvbiA8PSBjdXJyZW50VGltZSAtIHRoaXMubGFzdFRpbWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRGcmFtZSsrO1xyXG4gICAgICAgICAgICBpZih0aGlzLmN1cnJlbnRGcmFtZSA+PSB0aGlzLm51bUZyYW1lcylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RnJhbWUgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFRpbWUgPSBjdXJyZW50VGltZTtcclxuICAgICAgICAgICAgZnJhbWUgPSB0aGlzLmdldEN1cnJlbnRGcmFtZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc3ByaXRlcyBhcmUgZHJhd24gZnJvbSB0aGVpciBjZW50cmUteCwgYm90dG9tLXksIGkuZS4gZmVldCBwb3NpdGlvblxyXG4gICAgICAgIC8vbGV0IHRvcExlZnRYID0geCAtIGZyYW1lLncvMiAqIHNjYWxlO1xyXG4gICAgICAgIC8vbGV0IHRvcExlZnRZID0geSAtIGZyYW1lLmggKiBzY2FsZTtcclxuXHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHgudHJhbnNsYXRlKHgsIHkpO1xyXG4gICAgICAgIGN0eC5yZWN0KGZyYW1lLngsIGZyYW1lLnksIGZyYW1lLncsIGZyYW1lLmgpO1xyXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5hdGxhcy5pbWFnZSxcclxuICAgICAgICAgICAgZnJhbWUueCwgZnJhbWUueSxcclxuICAgICAgICAgICAgZnJhbWUudywgZnJhbWUuaCxcclxuICAgICAgICAgICAgZnJhbWUub2Zmc2V0eCwgZnJhbWUub2Zmc2V0eSxcclxuICAgICAgICAgICAgZnJhbWUudyAqIHNjYWxlLCBmcmFtZS5oICogc2NhbGUpO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEN1cnJlbnRGcmFtZSA9ICgpOiBUZXh0dXJlQXRsYXNGcmFtZSA9PiB7XHJcbiAgICAgICAgaWYodGhpcy5jdXJyZW50RnJhbWUgPiA5KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXRsYXMuZnJhbWVzW3RoaXMuc2VxdWVuY2VOYW1lICsgXCJfXCIgKyB0aGlzLmN1cnJlbnRGcmFtZS50b1N0cmluZygpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXRsYXMuZnJhbWVzW3RoaXMuc2VxdWVuY2VOYW1lICsgXCJfXCIgKyBcIjBcIiArIHRoaXMuY3VycmVudEZyYW1lLnRvU3RyaW5nKCldO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7Y3R4fSBmcm9tIFwiLi4vZ2xvYi50c1wiXHJcbmltcG9ydCB7U3ByaXRlfSBmcm9tIFwiLi9TcHJpdGVcIlxyXG5pbXBvcnQge1RleHR1cmVBdGxhc30gZnJvbSBcIi4vVGV4dHVyZUF0bGFzXCJcclxuaW1wb3J0IHtUZXh0dXJlQXRsYXNGcmFtZX0gZnJvbSBcIi4vVGV4dHVyZUF0bGFzRnJhbWVcIlxyXG5cclxuZXhwb3J0IGNsYXNzIFN0YXRpY1Nwcml0ZSBleHRlbmRzIFNwcml0ZVxyXG57XHJcbiAgICBwcm90ZWN0ZWQgaW1hZ2U6IFRleHR1cmVBdGxhc0ZyYW1lO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBzY2FsZTogbnVtYmVyLCBvcmlnaW5Ib3Jpem9udGFsOiBzdHJpbmcsIG9yaWdpblZlcnRpY2FsOiBzdHJpbmcsIHByb3RlY3RlZCBhdGxhczogVGV4dHVyZUF0bGFzLCBwcm90ZWN0ZWQgaW1hZ2VOYW1lOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoeCwgeSwgc2NhbGUsIG9yaWdpbkhvcml6b250YWwsIG9yaWdpblZlcnRpY2FsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVmcmVzaEltYWdlKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmltYWdlID0gdGhpcy5hdGxhcy5mcmFtZXNbdGhpcy5pbWFnZU5hbWVdOyAvLyBnZXQgdGhlIGltYWdlIGZyb20gdGhlIGF0bGFzXHJcbiAgICAgICAgdGhpcy5yZWZyZXNoT3JpZ2luKHRoaXMuaW1hZ2UudywgdGhpcy5pbWFnZS5oKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdyhjdXJyZW50VGltZTogbnVtYmVyLCBkZWx0YVRpbWU6IG51bWJlcik6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC50cmFuc2xhdGUodGhpcy5vcmlnaW5YLCB0aGlzLm9yaWdpblkpO1xyXG4gICAgICAgIGN0eC5yZWN0KHRoaXMuaW1hZ2UueCwgdGhpcy5pbWFnZS55LCB0aGlzLmltYWdlLncsIHRoaXMuaW1hZ2UuaCk7XHJcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmF0bGFzLmltYWdlLFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlLngsIHRoaXMuaW1hZ2UueSxcclxuICAgICAgICAgICAgdGhpcy5pbWFnZS53LCB0aGlzLmltYWdlLmgsXHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2Uub2Zmc2V0eCwgdGhpcy5pbWFnZS5vZmZzZXR5LFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlLncgKiB0aGlzLnNjYWxlLCB0aGlzLmltYWdlLmggKiB0aGlzLnNjYWxlKTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7SlNPTkxvYWRlcn0gZnJvbSAnLi4vcmVzb3VyY2VzL0pTT05Mb2FkZXInXHJcbmltcG9ydCB7SW1hZ2VMb2FkZXJ9IGZyb20gJy4uL3Jlc291cmNlcy9JbWFnZUxvYWRlcidcclxuaW1wb3J0IHtUZXh0dXJlQXRsYXNGcmFtZX0gZnJvbSAnLi9UZXh0dXJlQXRsYXNGcmFtZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0dXJlQXRsYXNcclxue1xyXG4gICAgLy8gaHR0cDovL3d3dy50eXBlc2NyaXB0Z2FtZXMuY29tL1RleHR1cmVBdGxhcy5odG1sXHJcbiAgICBwdWJsaWMgZnJhbWVzOiB7IFtpbmRleDogc3RyaW5nXTogVGV4dHVyZUF0bGFzRnJhbWUgfSA9IHt9O1xyXG4gICAgcHVibGljIHRhTG9hZENvbXBsZXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHB1YmxpYyBhdGxhc05hbWU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwcml2YXRlIGltYWdlRmlsZU5hbWU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwcml2YXRlIGpzb25GaWxlTmFtZTogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihhdGxhc05hbWU6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICB0aGlzLmF0bGFzTmFtZSA9IGF0bGFzTmFtZTtcclxuICAgICAgICB0aGlzLmltYWdlRmlsZU5hbWUgPSBhdGxhc05hbWU7XHJcbiAgICAgICAgdGhpcy5qc29uRmlsZU5hbWUgPSBhdGxhc05hbWUucmVwbGFjZShcIi5wbmdcIiwgXCJcIikgKyBcIi5qc29uXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWQoKTogUHJvbWlzZTxhbnk+XHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgaW1nUHJvbWlzZSA9IEltYWdlTG9hZGVyLmxvYWRJbWFnZSh0aGlzLmltYWdlRmlsZU5hbWUpLnRoZW4oKGltZykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlID0gaW1nO1xyXG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yOiB1bmFibGUgdG8gbG9hZCAnICsgdGhpcy5pbWFnZUZpbGVOYW1lKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBqc29uUHJvbWlzZSA9IEpTT05Mb2FkZXIubG9hZEpTT05GaWxlKHRoaXMuanNvbkZpbGVOYW1lKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRnJhbWVzKGRhdGEpO1xyXG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yOiB1bmFibGUgdG8gbG9hZCAnICsgdGhpcy5qc29uRmlsZU5hbWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW2ltZ1Byb21pc2UsIGpzb25Qcm9taXNlXSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXRsYXNOYW1lICsgJyBsb2FkZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3I6ICcgKyB0aGlzLmF0bGFzTmFtZSArICcgZmFpbGVkIHRvIGxvYWQnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZUZyYW1lcyhkYXRhOiBhbnkpXHJcbiAgICB7XHJcbiAgICAgICAgZm9yKGNvbnN0IG5hbWUgaW4gZGF0YS5mcmFtZXMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBzcHJpdGVEYXRhID0gZGF0YS5mcmFtZXNbbmFtZV07XHJcbiAgICAgICAgICAgIGxldCBmcmFtZSA9IG5ldyBUZXh0dXJlQXRsYXNGcmFtZShzcHJpdGVEYXRhLmZyYW1lLngsIHNwcml0ZURhdGEuZnJhbWUueSwgc3ByaXRlRGF0YS5mcmFtZS53LCBzcHJpdGVEYXRhLmZyYW1lLmgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZURhdGEuc3ByaXRlU291cmNlU2l6ZS54LCBzcHJpdGVEYXRhLnNwcml0ZVNvdXJjZVNpemUueSwgc3ByaXRlRGF0YS5mcmFtZUR1cmF0aW9uKTtcclxuICAgICAgICAgICAgdGhpcy5mcmFtZXNbbmFtZV0gPSBmcmFtZTtcclxuICAgICAgICB9XHJcbi8vICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLmZyYW1lcykpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBUZXh0dXJlQXRsYXNGcmFtZVxyXG57XHJcbiAgICAvLyBodHRwOi8vd3d3LnR5cGVzY3JpcHRnYW1lcy5jb20vQW5pbWF0ZWRTcHJpdGVzLmh0bWxcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgIHc6IG51bWJlcjtcclxuICAgIGg6IG51bWJlcjtcclxuXHJcbiAgICBvZmZzZXR4OiBudW1iZXI7ICAgIC8vIGltYWdlIHdpbGwgYmUgb2Zmc2V0IGJ5IHRoZXNlIHZhbHVlcyBzbyBmcmFtZXMgbGluZSB1cCBpbiBhbmltYXRpb25cclxuICAgIG9mZnNldHk6IG51bWJlcjtcclxuXHJcbiAgICBmcmFtZUR1cmF0aW9uOiBudW1iZXI7ICAvLyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGlzIGZyYW1lIGxhc3RzXHJcblxyXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwgdzogbnVtYmVyID0gMSwgaDogbnVtYmVyID0gMSwgb2Zmc2V0eDogbnVtYmVyID0gMCwgb2Zmc2V0eTogbnVtYmVyID0gMCwgZnJhbWVEdXJhdGlvbjogbnVtYmVyID0gMTAwKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLncgPSB3O1xyXG4gICAgICAgIHRoaXMuaCA9IGg7XHJcbiAgICAgICAgdGhpcy5vZmZzZXR4ID0gb2Zmc2V0eDtcclxuICAgICAgICB0aGlzLm9mZnNldHkgPSBvZmZzZXR5O1xyXG4gICAgICAgIHRoaXMuZnJhbWVEdXJhdGlvbiA9IGZyYW1lRHVyYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCh4OiBudW1iZXIsIHk6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==