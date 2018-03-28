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
const NPCSprite_1 = __webpack_require__(/*! ../sprites/NPCSprite */ "./src/sprites/NPCSprite.ts");
const SpriteAnimation_1 = __webpack_require__(/*! ../sprites/SpriteAnimation */ "./src/sprites/SpriteAnimation.ts");
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
                let allPromises = [textureAtlasPromise];
                // create the sprites
                let staticSprites = new Array();
                let interactableSprites = new Array();
                let npcSprites = new Array();
                for (const obj of levelData.sprites) {
                    if (obj.type == "interactable") {
                        let interactions = new Array();
                        for (const inter of obj.interactions) {
                            if (inter.type == "receive_item") {
                                let receiveItems = new Array();
                                for (const itm of inter.items_received) {
                                    receiveItems.push(items[itm]);
                                }
                                interactions.push(new ReceiveItemInteraction_1.ReceiveItemInteraction(inter.item ? items[inter.item] : null, inter.success_text, inter.fail_text, new Audio(inter.success_audio), new Audio(inter.fail_audio), receiveItems));
                            }
                        }
                        interactableSprites.push(new InteractableSprite_1.InteractableSprite(obj.x, obj.y, obj.scale, obj.origin_horizontal, obj.origin_vertical, atlas, obj.image_name, obj.examine_text, new Audio(obj.examine_audio), new Circle_1.Circle(obj.x, obj.y, obj.interaction_radius), new Rectangle_1.Rectangle(obj.x - obj.click_zone_width / 2, obj.y - obj.click_zone_height / 2, obj.click_zone_width, obj.click_zone_height), interactions));
                    }
                    else if (obj.type == "npc") {
                        // load the animations
                        let atlas = new TextureAtlas_1.TextureAtlas(obj.atlas);
                        let animations = [];
                        const atlasLoadedPromise = atlas.load().then(() => {
                            for (let sequenceName in obj.animations) {
                                const seq = obj.animations[sequenceName];
                                const anim = new SpriteAnimation_1.SpriteAnimation(seq.num_frames, atlas, sequenceName);
                                animations.push(anim);
                            }
                            npcSprites.push(new NPCSprite_1.NPCSprite(obj.x, obj.y, obj.scale, obj.origin_horizontal, obj.origin_vertical, animations, obj.examine_text, new Circle_1.Circle(obj.x, obj.y, obj.interaction_radius), new Rectangle_1.Rectangle(obj.x - obj.click_zone_width / 2, obj.y - obj.click_zone_height / 2, obj.click_zone_width, obj.click_zone_height), Level.buildConversation(obj)));
                        }).catch(() => {
                            console.log('error: unable to load sprite texture atlas');
                            reject(null);
                        });
                        allPromises.push(atlasLoadedPromise);
                    }
                    else {
                        staticSprites.push(new StaticSprite_1.StaticSprite(obj.x, obj.y, obj.scale, obj.origin_horizontal, obj.origin_vertical, atlas, obj.image_name));
                    }
                }
                // create the navmesh
                let tris = [];
                for (let tri of levelData.navmesh) {
                    tris.push(new Triangle_1.Triangle(tri.x1, tri.y1, tri.x2, tri.y2, tri.x3, tri.y3));
                }
                let navmesh = new NavMesh_1.NavMesh(tris);
                Promise.all(allPromises).then(() => {
                    for (const sprite of staticSprites) {
                        sprite.refreshImage(); // texture atlas probably hadn't loaded when sprite was initialised so refresh image
                    }
                    for (const sprite of interactableSprites) {
                        sprite.refreshImage(); // texture atlas probably hadn't loaded when sprite was initialised so refresh image
                    }
                    resolve({ 'textureAtlas': atlas, 'sceneScale': levelData.scene_scale,
                        'playerStartX': levelData.player_start_x, 'playerStartY': levelData.player_start_y, 'playerStarts': levelData.player_starts,
                        'depthScaleY': levelData.depth_scale_y, 'navmesh': navmesh, 'staticSprites': staticSprites,
                        'interactableSprites': interactableSprites, 'npcSprites': npcSprites });
                }).catch(() => {
                    reject(null);
                });
            }).catch(() => {
                console.log("error: failed to load level");
                reject(null);
            });
        });
    }
    static buildConversation(spriteObj) {
        return null;
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
    constructor(item, successText, failText, successAudio, failAudio, itemsReceived) {
        super(item);
        this.successText = successText;
        this.failText = failText;
        this.successAudio = successAudio;
        this.failAudio = failAudio;
        this.itemsReceived = itemsReceived;
    }
    // interact with the object
    // returns a list of items received from the interaction
    interact(item) {
        if (item == this.item) {
            return { text: this.successText, audio: this.successAudio, items: this.itemsReceived };
        }
        return { text: this.failText, audio: this.failAudio, items: null };
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
    constructor(name, examineText, examineAudio, imgpath) {
        this.name = name;
        this.examineText = examineText;
        this.examineAudio = examineAudio;
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
    getExamineAudio() {
        return this.examineAudio;
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
let npcSprites = new Array();
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
    // draw the NPC sprites
    for (const sprite of npcSprites) {
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
                    if (obj.audio != null) {
                        obj.audio.play();
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
                if (sprite.getExamineAudio() != null) {
                    sprite.getExamineAudio().play();
                }
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
            items[id] = new Item_1.Item(itm.name, itm.examine_text, new Audio(itm.examine_audio), itm.image);
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
        npcSprites = levelData.npcSprites;
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
// chat gui
function openChatGUI(conversation) {
    const html = `
    <div id="chatpanel">
        <img class="playerchathead" src="res/images/player_head.png"></img>
        <label class="chatmsg">Do I know you?</label>
        <button class="chatoption">No, we haven't met</button>
        <button class="chatoption">Yeah, you have my wrench</button>
        <button class="chatoption">Back</button>
    </div>`;
    if (conversation != null) {
        let chatpanel = document.getElementById("chatpanel");
        if (chatpanel != null) {
            // remove the chat panel if it already exists
            chatpanel.parentNode.removeChild(chatpanel);
        }
        chatpanel = document.createElement("div");
        chatpanel.id = "chatpanel";
        document.body.insertBefore(chatpanel, document.getElementById("invent"));
        let d = conversation.getFirstDialog();
        if (d != null) {
        }
    }
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
        if (item.getExamineAudio() != null) {
            item.getExamineAudio().play();
        }
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
    constructor(x, y, scale, originHorizontal, originVertical, atlas, imageName, examineText, examineAudio, interactionZone, clickZone, interactions) {
        super(x, y, scale, originHorizontal, originVertical, atlas, imageName);
        this.examineText = examineText;
        this.examineAudio = examineAudio;
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
    getExamineAudio() {
        return this.examineAudio;
    }
}
exports.InteractableSprite = InteractableSprite;


/***/ }),

/***/ "./src/sprites/NPCSprite.ts":
/*!**********************************!*\
  !*** ./src/sprites/NPCSprite.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glob_ts_1 = __webpack_require__(/*! ../glob.ts */ "./src/glob.ts");
const NavSprite_1 = __webpack_require__(/*! ./NavSprite */ "./src/sprites/NavSprite.ts");
class NPCSprite extends NavSprite_1.NavSprite {
    constructor(x, y, scale, originHorizontal, originVertical, anims, examineText, interactionZone, clickZone, conversation, moveSpeed = 0.5) {
        super(x, y, scale, originHorizontal, originVertical, anims, moveSpeed);
        this.examineText = examineText;
        this.interactionZone = interactionZone;
        this.clickZone = clickZone;
        this.conversation = conversation;
        this.speechBubbleOpen = false;
        this.BASE_FONT_SIZE = 75;
        this.setCurrentAnimation(0);
    }
    draw(currentTime, deltaTime) {
        super.draw(currentTime, deltaTime);
        if (this.speechBubbleOpen) {
            // draw the speech bubble
            glob_ts_1.ctx.save();
            glob_ts_1.ctx.translate(this.x, this.originY);
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
        // DEBUG - draw the circle and rectangle
        this.clickZone.draw();
        this.interactionZone.draw();
    }
    openSpeechBubble(text) {
        if (text != null) {
            this.speechBubbleOpen = true;
            this.speechBubbleText = text;
            this.speechBubbleShownAt = Date.now();
            glob_ts_1.ctx.font = `${this.BASE_FONT_SIZE}px Bookman`;
            this.textWidth = glob_ts_1.ctx.measureText(text).width;
        }
    }
    inInteractionZone(x, y) {
        return this.interactionZone.contains(x, y);
    }
    inClickZone(x, y) {
        return this.clickZone.contains(x, y);
    }
    getExamineText() {
        return this.examineText;
    }
}
exports.NPCSprite = NPCSprite;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbGxpc2lvbi9DaXJjbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbGxpc2lvbi9OYXZNZXNoLnRzIiwid2VicGFjazovLy8uL3NyYy9jb2xsaXNpb24vUG9pbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbGxpc2lvbi9SZWN0YW5nbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbGxpc2lvbi9UcmlhbmdsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9JbnRlcmFjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9MZXZlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9SZWNlaXZlSXRlbUludGVyYWN0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9nbG9iLnRzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dC9JbnB1dE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2l0ZW1zL0ludmVudG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaXRlbXMvSXRlbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVzb3VyY2VzL0ltYWdlTG9hZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvSlNPTkxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlcy9BbmltYXRlZFNwcml0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlcy9JbnRlcmFjdGFibGVTcHJpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZXMvTlBDU3ByaXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGVzL05hdlNwcml0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlcy9QbGF5ZXJTcHJpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZXMvU3ByaXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGVzL1Nwcml0ZUFuaW1hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlcy9TdGF0aWNTcHJpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZXMvVGV4dHVyZUF0bGFzLnRzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGVzL1RleHR1cmVBdGxhc0ZyYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuRUEseUVBQThCO0FBRzlCO0lBUUksWUFBWSxDQUFTLEVBQUUsQ0FBUyxFQUFFLE1BQWMsRUFBRSxRQUFnQixLQUFLLEVBQUUsYUFBcUIsQ0FBQztRQU54RixNQUFDLEdBQVcsQ0FBQyxDQUFDO1FBQ2QsTUFBQyxHQUFXLENBQUMsQ0FBQztRQUNkLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsY0FBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixVQUFLLEdBQVcsS0FBSyxDQUFDO1FBSXpCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUss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QUFNLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDcEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNwQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDcEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNwQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7WUFFcEIsSUFBSSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7WUFDM0IsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7WUFFbkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ1QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQ2xGLENBQUMsR0FBRyxDQUFFLElBQUksR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFFbEYsRUFBRSxFQUFDLENBQUMsSUFBSSxD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QUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNoSyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLGFBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZHLENBQUM7UUE5QkcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGFBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGFBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGFBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4TCxJQUFJLENBQUMsSUFBSSxHQUFH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LENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNmLENBQUM7Q0FDSjtBQTdCRCw4Q0E2QkMiLCJmaWxlIjoiYnVpbGQvY2xhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tYWluLnRzXCIpO1xuIiwiaW1wb3J0IHtjdHh9IGZyb20gXCIuLi9nbG9iLnRzXCJcclxuaW1wb3J0IHtJU2hhcGV9IGZyb20gXCIuL0lTaGFwZVwiXHJcblxyXG5leHBvcnQgY2xhc3MgQ2lyY2xlIGltcGxlbWVudHMgSVNoYXBlXHJcbntcclxuICAgIHB1YmxpYyB4OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHk6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgcmFkaXVzOiBudW1iZXIgPSAxMDtcclxuICAgIHB1YmxpYyBsaW5lV2lkdGg6IG51bWJlciA9IDI7XHJcbiAgICBwdWJsaWMgY29sb3I6IHN0cmluZyA9IFwicmVkXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBjb2xvcjogc3RyaW5nID0gXCJyZWRcIiwgbGluZV93aWR0aDogbnVtYmVyID0gMilcclxuICAgIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMubGluZVdpZHRoID0gbGluZV93aWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdygpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvcjtcclxuICAgICAgICBjdHgubGluZVdpZHRoID0gdGhpcy5saW5lV2lkdGg7XHJcbiAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29udGFpbnMoeDogbnVtYmVyLCB5OiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICgoeSAtIHRoaXMueSkgKiogMiArICh4IC0gdGhpcy54KSAqKiAyKSA8PSB0aGlzLnJhZGl1cyAqKiAyO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7VHJpYW5nbGV9IGZyb20gXCIuL1RyaWFuZ2xlXCJcclxuaW1wb3J0IHtQb2ludH0gZnJvbSBcIi4vUG9pbnRcIlxyXG5cclxuLy8gbmF2bWVzaCBwYXRoZmluZGluZzogaHR0cHM6Ly9tZWRpdW0uY29tL0Btc2NhbnNpYW4vYS13aXRoLW5hdmlnYXRpb24tbWVzaGVzLTI0NmZkOWU3MjQyNFxyXG5leHBvcnQgY2xhc3MgTmF2TWVzaFxyXG57XHJcbiAgICAvLyB2YWxpZCByZWdpb25zIG9mIHRoZSBuYXZtZXNoXHJcbiAgICBwcml2YXRlIHRyaXM6IEFycmF5PFRyaWFuZ2xlPjtcclxuXHJcbiAgICAvLyBUT0RPIC0gbmV3IHN5c3RlbSBvZiB0cmlhbmdsZSByZXByZXNlbnRhdGlvblxyXG4gICAgcHJpdmF0ZSB2ZXJ0aWNlczogQXJyYXk8UG9pbnQ+O1xyXG4gICAgcHJpdmF0ZSBlZGdlczogQXJyYXk8e3YxOiBudW1iZXIsIHYyOiBudW1iZXJ9PjsgICAgICAgICAvLyB2MSBhbmQgdjIgYXJlIGluZGljZXMgaW50byB2ZXJ0aWNlcyBsaXN0XHJcbiAgICBwcml2YXRlIG91dGVyRWRnZXM6IEFycmF5PHt2MTogbnVtYmVyLCB2MjogbnVtYmVyfT47ICAgIC8vIGVkZ2VzIHdoaWNoIG9ubHkgYXBwZWFyIGluIDEgdHJpXHJcblxyXG4gICAgY29uc3RydWN0b3IodHJpczogQXJyYXk8VHJpYW5nbGU+KSB7XHJcbiAgICAgICAgdGhpcy50cmlzID0gdHJpcyA/IHRyaXMgOiBbXTtcclxuICAgICAgICB0aGlzLnZlcnRpY2VzID0gW107XHJcbiAgICAgICAgdGhpcy5lZGdlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMub3V0ZXJFZGdlcyA9IFtdO1xyXG5cclxuICAgICAgICAvLyBpbml0aWFsaXNlIHZlcnRpY2VzIGFuZCBlZGdlcyBsaXN0XHJcbiAgICAgICAgZm9yKGNvbnN0IHRyaSBvZiB0cmlzKSB7XHJcbiAgICAgICAgICAgIGxldCBwMUluZGV4ID0gdGhpcy5pbmRleE9mVmVydGV4KHRoaXMudmVydGljZXMsIHRyaS5wb2ludDEpO1xyXG4gICAgICAgICAgICBsZXQgcDJJbmRleCA9IHRoaXMuaW5kZXhPZlZlcnRleCh0aGlzLnZlcnRpY2VzLCB0cmkucG9pbnQyKTtcclxuICAgICAgICAgICAgbGV0IHAzSW5kZXggPSB0aGlzLmluZGV4T2ZWZXJ0ZXgodGhpcy52ZXJ0aWNlcywgdHJpLnBvaW50Myk7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiB2ZXJ0ZXggaXMgbm90IGluIHRoZSBsaXN0LCBhZGQgaXQgdG8gdGhlIGxpc3RcclxuICAgICAgICAgICAgaWYocDFJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmVydGljZXMucHVzaCh0cmkucG9pbnQxKTtcclxuICAgICAgICAgICAgICAgIHAxSW5kZXggPSB0aGlzLmluZGV4T2ZWZXJ0ZXgodGhpcy52ZXJ0aWNlcywgdHJpLnBvaW50MSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gaWYgdmVydGV4IGlzIG5vdCBpbiB0aGUgbGlzdCwgYWRkIGl0IHRvIHRoZSBsaXN0XHJcbiAgICAgICAgICAgIGlmKHAySW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2godHJpLnBvaW50Mik7XHJcbiAgICAgICAgICAgICAgICBwMkluZGV4ID0gdGhpcy5pbmRleE9mVmVydGV4KHRoaXMudmVydGljZXMsIHRyaS5wb2ludDIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGlmIHZlcnRleCBpcyBub3QgaW4gdGhlIGxpc3QsIGFkZCBpdCB0byB0aGUgbGlzdFxyXG4gICAgICAgICAgICBpZihwM0luZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHRyaS5wb2ludDMpO1xyXG4gICAgICAgICAgICAgICAgcDNJbmRleCA9IHRoaXMuaW5kZXhPZlZlcnRleCh0aGlzLnZlcnRpY2VzLCB0cmkucG9pbnQzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gYWRkIGFsbCAzIGVkZ2VzIG9mIHRoZSB0cmkgdG8gdGhlIGVkZ2VzIGxpc3RcclxuICAgICAgICAgICAgY29uc3QgZWRnZTEgPSB7djE6IHAxSW5kZXgsIHYyOiBwMkluZGV4fTtcclxuICAgICAgICAgICAgY29uc3QgZWRnZTIgPSB7djE6IHAySW5kZXgsIHYyOiBwM0luZGV4fTtcclxuICAgICAgICAgICAgY29uc3QgZWRnZTMgPSB7djE6IHAzSW5kZXgsIHYyOiBwMUluZGV4fTtcclxuXHJcbiAgICAgICAgICAgIC8vIGFkZCB0aGUgZWRnZXMgaWYgdGhleSBhcmUgbm90IGFscmVhZHkgaW4gdGhlIGxpc3RcclxuICAgICAgICAgICAgaWYodGhpcy5pbmRleE9mRWRnZSh0aGlzLmVkZ2VzLCBlZGdlMSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVkZ2VzLnB1c2goZWRnZTEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdXRlckVkZ2VzLnB1c2goZWRnZTEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdXRlckVkZ2VzLnNwbGljZSh0aGlzLmluZGV4T2ZFZGdlKHRoaXMub3V0ZXJFZGdlcywgZWRnZTEpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5pbmRleE9mRWRnZSh0aGlzLmVkZ2VzLCBlZGdlMikgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVkZ2VzLnB1c2goZWRnZTIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdXRlckVkZ2VzLnB1c2goZWRnZTIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdXRlckVkZ2VzLnNwbGljZSh0aGlzLmluZGV4T2ZFZGdlKHRoaXMub3V0ZXJFZGdlcywgZWRnZTIpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5pbmRleE9mRWRnZSh0aGlzLmVkZ2VzLCBlZGdlMykgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVkZ2VzLnB1c2goZWRnZTMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdXRlckVkZ2VzLnB1c2goZWRnZTMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdXRlckVkZ2VzLnNwbGljZSh0aGlzLmluZGV4T2ZFZGdlKHRoaXMub3V0ZXJFZGdlcywgZWRnZTMpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMudmVydGljZXMpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5lZGdlcyk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLm91dGVyRWRnZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRXYXlwb2ludHMgPSAoY3VycmVudFg6IG51bWJlciwgY3VycmVudFk6IG51bWJlciwgdGFyZ2V0WDogbnVtYmVyLCB0YXJnZXRZOiBudW1iZXIpOiBBcnJheTxQb2ludD4gPT4ge1xyXG4gICAgICAgIGZvcihsZXQgdHJpIG9mIHRoaXMudHJpcykge1xyXG4gICAgICAgICAgICAvLyBhbGxvdyBmcmVlIG1vdmVtZW50IHdpdGhpbiBhIHRyaWFuZ2xlXHJcbiAgICAgICAgICAgIGlmKHRyaS5jb250YWlucyh0YXJnZXRYLCB0YXJnZXRZKSAmJiB0cmkuY29udGFpbnMoY3VycmVudFgsIGN1cnJlbnRZKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtuZXcgUG9pbnQodGFyZ2V0WCwgdGFyZ2V0WSldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgdHJpIG9mIHRoaXMudHJpcykge1xyXG4gICAgICAgICAgICAvLyBpZiBib3RoIHBvaW50cyBmYWxsIHVuZGVyIGRpZmZlcmVudCB0cmlhbmdsZXMsIGZpbmQgdGhlIGEgd2F5cG9pbnQgdG8gcmVhY2ggdGhlIG5leHQgdHJpXHJcbiAgICAgICAgICAgIGlmKHRyaS5jb250YWlucyh0YXJnZXRYLCB0YXJnZXRZKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy9yZXR1cm4gbmV3IFBvaW50KHRhcmdldFgsIHRhcmdldFkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqID0gdGhpcy5maW5kUGF0aChuZXcgUG9pbnQoY3VycmVudFgsIGN1cnJlbnRZKSwgbmV3IFBvaW50KHRhcmdldFgsIHRhcmdldFkpKTtcclxuICAgICAgICAgICAgICAgIGlmKG9iaiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJvdXRlOiBBcnJheTxQb2ludD4gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZS5wdXNoKG5ldyBQb2ludCh0YXJnZXRYLCB0YXJnZXRZKSk7ICAgIC8vIGdvIGZyb20gbGFzdCBwb2ludCB0byB0aGUgZW5kIHBvaW50XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZFJvdXRlKG9iai5jYW1lRnJvbSwgb2JqLmVuZFZlcnRleCwgcm91dGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVkdWNlUm91dGUocm91dGUpOyAgICAvLyByZW1vdmUgcmVkdW5kYW50IG5vZGVzIGZyb20gdGhlIHBhdGhcclxuICAgICAgICAgICAgICAgICAgICBpZihyb3V0ZS5sZW5ndGggPiAwKSAgICAgICAgLy8gbGFzdCB3YXlwb2ludCB3aWxsIGJlIHN0YXJ0IC0+IGdldCByaWQgb2YgaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyb3V0ZTogXCIgKyByb3V0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmVtb3ZlIHVuZWNlc3Nhcnkgd2F5cG9pbnRzIGZyb20gdGhlIHJvdXRlLCBpLmUuIGlmIHRoZWlyIGlzIGEgc3RyYWlnaHQgcGF0aCBmcm9tIGEgdG8gYywgcmVtb3ZlIGJcclxuICAgIHByaXZhdGUgcmVkdWNlUm91dGUgPSAocm91dGU6IEFycmF5PFBvaW50PikgPT4ge1xyXG4gICAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgLy8gbG9vcCB1bnRpbCBubyBtb3JlIHJlZHVjdGlvbnMgY2FuIGJlIG1hZGVcclxuICAgICAgICB3aGlsZShpbmRleCA8IHJvdXRlLmxlbmd0aCAtIDIpIHtcclxuICAgICAgICAgICAgY29uc3QgYSA9IHJvdXRlW2luZGV4XVxyXG4gICAgICAgICAgICBjb25zdCBjID0gcm91dGVbaW5kZXggKyAyXVxyXG5cclxuICAgICAgICAgICAgLy8gdGhlcmUgaXMgYSB2YWxpZCBzdHJhaWdodCBwYXRoIGJldHdlZW4gYSBhbmQgYyBpZiB0aGUgcGF0aCBkb2VzIG5vdCBpbnRlcnNlY3QgYW4gb3V0ZXIgZWRnZVxyXG4gICAgICAgICAgICBsZXQgaW50ZXJzZWN0c091dGVyRWRnZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmb3IoY29uc3Qgb3V0ZXJFZGdlIG9mIHRoaXMub3V0ZXJFZGdlcylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5kb0xpbmVTZWdtZW50c0ludGVyc2VjdCh0aGlzLnZlcnRpY2VzW291dGVyRWRnZS52MV0sIHRoaXMudmVydGljZXNbb3V0ZXJFZGdlLnYyXSwgYSwgYykpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGEudG9TdHJpbmcoKSwgYy50b1N0cmluZygpLCBcImludGVyc2VjdHNcIiwgdGhpcy52ZXJ0aWNlc1tvdXRlckVkZ2UudjFdLnRvU3RyaW5nKCksIHRoaXMudmVydGljZXNbb3V0ZXJFZGdlLnYyXS50b1N0cmluZygpKVxyXG4gICAgICAgICAgICAgICAgICAgIGludGVyc2VjdHNPdXRlckVkZ2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBpZiB0aGUgcGF0aCBkb2VzIG5vdCBpbnRlcnNlY3QgYW4gb3V0ZXIgZWRnZSwgcmVtb3ZlIHdheXBvaW50IGJcclxuICAgICAgICAgICAgaWYoIWludGVyc2VjdHNPdXRlckVkZ2UpIHtcclxuICAgICAgICAgICAgICAgIHJvdXRlLnNwbGljZShpbmRleCsxLCAxKTtcclxuICAgICAgICAgICAgICAgIC8vIGRvbid0IG5lZWQgdG8gaW5jcmVtZW50IGluZGV4IHNpbmNlIGFycmF5IGxlbmd0aCBoYXMgYmVlbiByZWR1Y2VkXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBtb3ZlIG9udG8gbmV4dCBwYWlyIG9mIHdheXBvaW50c1xyXG4gICAgICAgICAgICAgICAgaW5kZXggKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBidWlsZFJvdXRlID0gKGNhbWVGcm9tOiB7fSwgdmVydGV4OiBQb2ludCwgcm91dGU6IEFycmF5PFBvaW50PikgPT4ge1xyXG4gICAgICAgIHJvdXRlLnB1c2godmVydGV4KTsgLy8gcm91dGUgaXMgcmVhZCBpbiByZXZlcnNlIG9yZGVyXHJcbiAgICAgICAgaWYoY2FtZUZyb21bdmVydGV4LnRvU3RyaW5nKCldICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5idWlsZFJvdXRlKGNhbWVGcm9tLCBjYW1lRnJvbVt2ZXJ0ZXgudG9TdHJpbmcoKV0ubm9kZSwgcm91dGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB1c2UgdGhlIEEqIGFsZ29yaXRobSB0byBmaW5kIGEgc2hvcnRlc3QgcGF0aCB0aHJvdWdoIHRoZSBuYXZtZXNoXHJcbiAgICBwcml2YXRlIGZpbmRQYXRoID0gKHN0YXJ0OiBQb2ludCwgZW5kOiBQb2ludCk6IHtjYW1lRnJvbToge30sIGVuZFZlcnRleDogUG9pbnR9ID0+IHtcclxuICAgICAgICBsZXQgb3BlbiA9IFt7bm9kZTogc3RhcnQsIHByaW9yaXR5OiAwfV07ICAgIC8vIGxvd2VzdCBwcmlvcml0eSA9IDBcclxuICAgICAgICBsZXQgY2xvc2VkID0gW107XHJcblxyXG4gICAgICAgIC8vIGZpbmQgdGhlIHRyaWFuZ2xlIGNvbnRhaW5pbmcgdGhlIHN0YXJ0IHBvaW50XHJcbiAgICAgICAgbGV0IHN0YXJ0VHJpO1xyXG4gICAgICAgIGZvcihjb25zdCB0cmkgb2YgdGhpcy50cmlzKSB7XHJcbiAgICAgICAgICAgIGlmKHRyaS5jb250YWlucyhzdGFydC54LCBzdGFydC55KSkge1xyXG4gICAgICAgICAgICAgICAgc3RhcnRUcmkgPSB0cmk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihzdGFydFRyaSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZmluZCB0aGUgdHJpYW5nbGUgY29udGFpbmluZyB0aGUgZW5kIHBvaW50XHJcbiAgICAgICAgbGV0IGVuZFRyaTtcclxuICAgICAgICBmb3IoY29uc3QgdHJpIG9mIHRoaXMudHJpcykge1xyXG4gICAgICAgICAgICBpZih0cmkuY29udGFpbnMoZW5kLngsIGVuZC55KSkge1xyXG4gICAgICAgICAgICAgICAgZW5kVHJpID0gdHJpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZW5kVHJpID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBnW2ldIGlzIHRoZSBjb3N0IHRvIGdldCB0byBpIGZyb20gdGhlIHN0YXJ0IHZlcnRleFxyXG4gICAgICAgIGxldCBnID0ge307XHJcbiAgICAgICAgbGV0IGNhbWVGcm9tID0ge307XHJcbiAgICAgICAgZ1tzdGFydC50b1N0cmluZygpXSA9IDA7XHJcbiAgICAgICAgY2FtZUZyb21bc3RhcnQudG9TdHJpbmcoKV0gPSBudWxsO1xyXG5cclxuICAgICAgICAvLyBleGVjdXRlIEEqIGFsZ29yaXRobVxyXG4gICAgICAgIC8vIHBzZXVkb2NvZGU6IGh0dHA6Ly90aGVvcnkuc3RhbmZvcmQuZWR1L35hbWl0cC9HYW1lUHJvZ3JhbW1pbmcvSW1wbGVtZW50YXRpb25Ob3Rlcy5odG1sXHJcbiAgICAgICAgd2hpbGUob3Blbi5sZW5ndGggPiAwICYmICFlbmRUcmkuaXNWZXJ0ZXgob3BlblswXS5ub2RlKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50ID0gb3Blbi5zaGlmdCgpOyAgLy8gcmVtb3ZlIGZpcnN0IGl0ZW0gZnJvbSBvcGVuIChpdGVtIHdpdGggbG93ZXN0IHByaW9yaXR5KVxyXG4gICAgICAgICAgICBjbG9zZWQucHVzaChjdXJyZW50KTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImN1cnJlbnQgdmVydGV4OiBcIiArIGN1cnJlbnQubm9kZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgZm9yKGNvbnN0IG5laWdoYm91ciBvZiB0aGlzLmdldE5laWdoYm91cnMoY3VycmVudC5ub2RlKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvc3QgPSBnW2N1cnJlbnQubm9kZS50b1N0cmluZygpXSArIHRoaXMuZ2V0RWRnZUNvc3QoY3VycmVudC5ub2RlLCBuZWlnaGJvdXIpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIm5laWdoYm91cjogXCIgKyBuZWlnaGJvdXIudG9TdHJpbmcoKSArIFwiLCBjb3N0OiBcIiArIGNvc3QpO1xyXG4gICAgICAgICAgICAgICAgLy8gbmVpZ2hib3VyIGluIG9wZW5cclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5kZXhPZlByaW9yaXR5Tm9kZShvcGVuLCBuZWlnaGJvdXIpICE9PSAtMSAmJiBjb3N0IDwgZ1tuZWlnaGJvdXIudG9TdHJpbmcoKV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGVuLnNwbGljZSh0aGlzLmluZGV4T2ZQcmlvcml0eU5vZGUob3BlbiwgbmVpZ2hib3VyKSwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBuZWlnaGJvdXIgaW4gY2xvc2VkXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluZGV4T2ZQcmlvcml0eU5vZGUoY2xvc2VkLCBuZWlnaGJvdXIpICE9PSAtMSAmJiBjb3N0IDwgZ1tuZWlnaGJvdXIudG9TdHJpbmcoKV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjbG9zZWQuc3BsaWNlKHRoaXMuaW5kZXhPZlByaW9yaXR5Tm9kZShjbG9zZWQsIG5laWdoYm91ciksIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gbmVpZ2hib3VyIG5laXRoZXIgaW4gb3BlbiBub3IgY2xvc2VkXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluZGV4T2ZQcmlvcml0eU5vZGUob3BlbiwgbmVpZ2hib3VyKSA9PT0gLTEgJiYgdGhpcy5pbmRleE9mUHJpb3JpdHlOb2RlKGNsb3NlZCwgbmVpZ2hib3VyKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBnW25laWdoYm91ci50b1N0cmluZygpXSA9IGNvc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZUZyb21bbmVpZ2hib3VyLnRvU3RyaW5nKCldID0gY3VycmVudDtcclxuICAgICAgICAgICAgICAgICAgICBvcGVuLnB1c2goe25vZGU6IG5laWdoYm91ciwgcHJpb3JpdHk6IGNvc3R9KTsgLy8gVE9ETyAtIHByaW9yaXR5ID0gY29zdCArIGgobmVpZ2hib3VyKVxyXG4gICAgICAgICAgICAgICAgICAgIG9wZW4uc29ydCgoYSwgYikgPT4geyAgIC8vIHNvcnQgb3BlbiBxdWV1ZSBieSBwcmlvcml0eVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5wcmlvcml0eSAtIGIucHJpb3JpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vY29uc29sZS5sb2cob3Blbi5sZW5ndGggPiAwID8gXCJlbmQ6IFwiICsgb3BlblswXS5ub2RlLnRvU3RyaW5nKCkgOiBcIm5vIHBhdGhcIik7XHJcbiAgICAgICAgcmV0dXJuIG9wZW4ubGVuZ3RoID4gMCA/IHtjYW1lRnJvbTogY2FtZUZyb20sIGVuZFZlcnRleDogb3BlblswXS5ub2RlfSA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgZm9yKGxldCB0cmkgb2YgdGhpcy50cmlzKSB7XHJcbiAgICAgICAgICAgIHRyaS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHJldHVybnMgdGhlIGNvc3Qgb2YgdHJhdmVyc2luZyBhbiBlZGdlIGJldHdlZW4gcDEgYW5kIHAyXHJcbiAgICBwcml2YXRlIGdldEVkZ2VDb3N0ID0gKHAxOiBQb2ludCwgcDI6IFBvaW50KTogbnVtYmVyID0+IHtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KChwMS54IC0gcDIueCkgKiogMiArIChwMS55IC0gcDIueSkgKiogMik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmV0dXJuIGEgbGlzdCBvZiB2ZXJ0Y2llcyB3aGljaCBhcmUgYWRqYWNlbnQgdG8gdGhlIHZlcnRleCBwXHJcbiAgICBwcml2YXRlIGdldE5laWdoYm91cnMgPSAocDogUG9pbnQpOiBBcnJheTxQb2ludD4gPT4ge1xyXG4gICAgICAgIGxldCBuZWlnaGJvdXJzOiBBcnJheTxQb2ludD4gPSBbXTtcclxuICAgICAgICBmb3IoY29uc3QgZWRnZSBvZiB0aGlzLmVkZ2VzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYodGhpcy52ZXJ0aWNlc1tlZGdlLnYxXS5lcXVhbHMocCkpIHtcclxuICAgICAgICAgICAgICAgIG5laWdoYm91cnMucHVzaCh0aGlzLnZlcnRpY2VzW2VkZ2UudjJdKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMudmVydGljZXNbZWRnZS52Ml0uZXF1YWxzKHApKSB7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvdXJzLnB1c2godGhpcy52ZXJ0aWNlc1tlZGdlLnYxXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmIHRoZSB2ZXJ0ZXggaXMgbm90IGEgdmVydGV4IG9mIGEgdHJpYW5nbGUsIGNoZWNrIGlmIGl0IGlzIHdpdGhpbiBhIHRyaWFuZ2xlXHJcbiAgICAgICAgaWYobmVpZ2hib3Vycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgZm9yKGNvbnN0IHRyaSBvZiB0aGlzLnRyaXMpIHtcclxuICAgICAgICAgICAgICAgIGlmKHRyaS5jb250YWlucyhwLngsIHAueSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZWlnaGJvdXJzLnB1c2godHJpLnBvaW50MSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3Vycy5wdXNoKHRyaS5wb2ludDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5laWdoYm91cnMucHVzaCh0cmkucG9pbnQzKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmVpZ2hib3VycztcclxuICAgIH1cclxuXHJcbiAgICAvLyBhbnN3ZXIgMiBmcm9tOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81NjMxOTgvaG93LWRvLXlvdS1kZXRlY3Qtd2hlcmUtdHdvLWxpbmUtc2VnbWVudHMtaW50ZXJzZWN0XHJcbiAgICBwcml2YXRlIGRvTGluZVNlZ21lbnRzSW50ZXJzZWN0ID0gKGUxdjE6IFBvaW50LCBlMXYyOiBQb2ludCwgZTJ2MTogUG9pbnQsIGUydjI6IFBvaW50KTogYm9vbGVhbiA9PiB7XHJcbiAgICAgICAgY29uc3QgcDBfeCA9IGUxdjEueDtcclxuICAgICAgICBjb25zdCBwMF95ID0gZTF2MS55O1xyXG4gICAgICAgIGNvbnN0IHAxX3ggPSBlMXYyLng7XHJcbiAgICAgICAgY29uc3QgcDFfeSA9IGUxdjIueTtcclxuICAgICAgICBjb25zdCBwMl94ID0gZTJ2MS54O1xyXG4gICAgICAgIGNvbnN0IHAyX3kgPSBlMnYxLnk7XHJcbiAgICAgICAgY29uc3QgcDNfeCA9IGUydjIueDtcclxuICAgICAgICBjb25zdCBwM195ID0gZTJ2Mi55O1xyXG5cclxuICAgICAgICBsZXQgczFfeCwgczFfeSwgczJfeCwgczJfeTtcclxuICAgICAgICBzMV94ID0gcDFfeCAtIHAwX3g7XHJcbiAgICAgICAgczFfeSA9IHAxX3kgLSBwMF95O1xyXG4gICAgICAgIHMyX3ggPSBwM194IC0gcDJfeDtcclxuICAgICAgICBzMl95ID0gcDNfeSAtIHAyX3k7XHJcblxyXG4gICAgICAgIGxldCBzLCB0O1xyXG4gICAgICAgIHMgPSAoLXMxX3kgKiAocDBfeCAtIHAyX3gpICsgczFfeCAqIChwMF95IC0gcDJfeSkpIC8gKC1zMl94ICogczFfeSArIHMxX3ggKiBzMl95KTtcclxuICAgICAgICB0ID0gKCBzMl94ICogKHAwX3kgLSBwMl95KSAtIHMyX3kgKiAocDBfeCAtIHAyX3gpKSAvICgtczJfeCAqIHMxX3kgKyBzMV94ICogczJfeSk7XHJcblxyXG4gICAgICAgIGlmKHMgPj0gMCAmJiBzIDw9IDEgJiYgdCA+PSAwICYmIHQgPD0gMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiBmYWxzZSBpZiB0aGUgaW50ZXJzZWN0aW9uIHBvaW50IGlzIHRoZSB2ZXJ0ZXggcG9zaXRpb24gc2luY2UgaXQgYnJlYWtzIHRoZSByb3V0ZSByZWR1Y3Rpb24gYWxnb3JpdGhtXHJcbiAgICAgICAgICAgIGNvbnN0IGlfeCA9IChwMF94ICsgKHQgKiBzMV94KSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlfeSA9IChwMF95ICsgKHQgKiBzMV95KSk7XHJcbiAgICAgICAgICAgIHJldHVybiAhKGlfeCA9PT0gZTF2MS54ICYmIGlfeSA9PT0gZTF2MS55KSAmJiAhKGlfeCA9PT0gZTF2Mi54ICYmIGlfeSA9PT0gZTF2Mi55KSAmJiAhKGlfeCA9PT0gZTJ2MS54ICYmIGlfeSA9PT0gZTJ2MS55KSAmJiAhKGlfeCA9PT0gZTJ2Mi54ICYmIGlfeSA9PT0gZTJ2Mi55KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJubyBjb2xsaXNpb25cIik7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBubyBjb2xsaXNpb25cclxuICAgIH1cclxuXHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjcm9zc1Byb2R1Y3QgPSAocG9pbnQxOiBQb2ludCwgcG9pbnQyOiBQb2ludCkgPT4ge1xyXG4gICAgXHRyZXR1cm4gcG9pbnQxLnggKiBwb2ludDIueSAtIHBvaW50MS55ICogcG9pbnQyLng7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbmRleE9mUHJpb3JpdHlOb2RlID0gKHZlcnRpY2VzOiBBcnJheTx7bm9kZTogUG9pbnQsIHByaW9yaXR5OiBudW1iZXJ9PiwgcDogUG9pbnQpID0+IHtcclxuICAgICAgICBpZihwID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaW5kZXggPSAwOyBpbmRleCA8IHZlcnRpY2VzLmxlbmd0aDsgaW5kZXggKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZlcnRleCA9IHZlcnRpY2VzW2luZGV4XS5ub2RlO1xyXG4gICAgICAgICAgICAgICAgaWYodmVydGV4LnggPT09IHAueCAmJiB2ZXJ0ZXgueSA9PT0gcC55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbmRleE9mVmVydGV4ID0gKHZlcnRpY2VzOiBBcnJheTxQb2ludD4sIHA6IFBvaW50KTogbnVtYmVyID0+IHtcclxuICAgICAgICBpZihwID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaW5kZXggPSAwOyBpbmRleCA8IHZlcnRpY2VzLmxlbmd0aDsgaW5kZXggKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZlcnRleCA9IHZlcnRpY2VzW2luZGV4XTtcclxuICAgICAgICAgICAgICAgIGlmKHZlcnRleC54ID09PSBwLnggJiYgdmVydGV4LnkgPT09IHAueSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpbmRleDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5kZXhPZkVkZ2UgPSAoZWRnZXM6IEFycmF5PHt2MTogbnVtYmVyLCB2MjogbnVtYmVyfT4sIGVkZ2U6IHt2MTogbnVtYmVyLCB2MjogbnVtYmVyfSk6IG51bWJlciA9PiB7XHJcbiAgICAgICAgaWYoZWRnZSA9PSBudWxsIHx8IGVkZ2UudjEgPT0gbnVsbCB8fCBlZGdlLnYyID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaW5kZXggPSAwOyBpbmRleCA8IGVkZ2VzLmxlbmd0aDsgaW5kZXggKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGUgPSBlZGdlc1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICBpZigoZS52MSA9PT0gZWRnZS52MSAmJiBlLnYyID09PSBlZGdlLnYyKSB8fCAoZS52MSA9PT0gZWRnZS52MiAmJiBlLnYyID09PSBlZGdlLnYxKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpbmRleDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBQb2ludFxyXG57XHJcbiAgICBwdWJsaWMgeDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyB5OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlcXVhbHMgPSAocDogUG9pbnQpOiBib29sZWFuID0+IHtcclxuICAgICAgICByZXR1cm4gcCAhPSBudWxsICYmIHAueCA9PT0gdGhpcy54ICYmIHAueSA9PT0gdGhpcy55O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZyA9ICgpIDogc3RyaW5nID0+IHtcclxuICAgICAgICByZXR1cm4gYFBvaW50KCR7dGhpcy54fSwke3RoaXMueX0pYDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge2N0eH0gZnJvbSBcIi4uL2dsb2IudHNcIlxyXG5pbXBvcnQge0lTaGFwZX0gZnJvbSBcIi4vSVNoYXBlXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBSZWN0YW5nbGUgaW1wbGVtZW50cyBJU2hhcGVcclxue1xyXG4gICAgcHVibGljIHg6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgeTogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBsaW5lV2lkdGg6IG51bWJlciA9IDU7XHJcbiAgICBwdWJsaWMgd2lkdGg6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgaGVpZ2h0OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGNvbG9yOiBzdHJpbmcgPSBcImJsdWVcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGNvbG9yOiBzdHJpbmcgPSBcInJlZFwiLCBsaW5lX3dpZHRoOiBudW1iZXIgPSAyKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMubGluZVdpZHRoID0gbGluZV93aWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdygpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvcjtcclxuICAgICAgICBjdHgubGluZVdpZHRoID0gdGhpcy5saW5lV2lkdGg7XHJcbiAgICAgICAgY3R4LnJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29udGFpbnMoeDogbnVtYmVyLCB5OiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICh4ID49IHRoaXMueCAmJiB4IDw9IHRoaXMueCArIHRoaXMud2lkdGggJiYgeSA+PSB0aGlzLnkgJiYgeSA8PSB0aGlzLnkgKyB0aGlzLmhlaWdodCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtjdHh9IGZyb20gXCIuLi9nbG9iLnRzXCJcclxuaW1wb3J0IHtJU2hhcGV9IGZyb20gXCIuL0lTaGFwZVwiXHJcbmltcG9ydCB7UG9pbnR9IGZyb20gXCIuL1BvaW50XCJcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmlhbmdsZVxyXG57XHJcbiAgICBwdWJsaWMgcG9pbnQxOiBQb2ludDtcclxuICAgIHB1YmxpYyBwb2ludDI6IFBvaW50O1xyXG4gICAgcHVibGljIHBvaW50MzogUG9pbnQ7XHJcbiAgICBwcml2YXRlIGFyZWE6IG51bWJlcjtcclxuICAgIHByaXZhdGUgc2lnbjogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHgxOiBudW1iZXIsIHkxOiBudW1iZXIsIHgyOiBudW1iZXIsIHkyOiBudW1iZXIsIHgzOiBudW1iZXIsIHkzOiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5wb2ludDEgPSBuZXcgUG9pbnQoeDEsIHkxKTtcclxuICAgICAgICB0aGlzLnBvaW50MiA9IG5ldyBQb2ludCh4MiwgeTIpO1xyXG4gICAgICAgIHRoaXMucG9pbnQzID0gbmV3IFBvaW50KHgzLCB5Myk7XHJcbiAgICAgICAgdGhpcy5hcmVhID0gMS8yICogKC10aGlzLnBvaW50Mi55ICogdGhpcy5wb2ludDMueCArIHRoaXMucG9pbnQxLnkgKiAoLXRoaXMucG9pbnQyLnggKyB0aGlzLnBvaW50My54KSArIHRoaXMucG9pbnQxLnggKiAodGhpcy5wb2ludDIueSAtIHRoaXMucG9pbnQzLnkpICsgdGhpcy5wb2ludDIueCAqIHRoaXMucG9pbnQzLnkpO1xyXG4gICAgICAgIHRoaXMuc2lnbiA9IHRoaXMuYXJlYSA8IDAgPyAtMSA6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJlZFwiO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSA1O1xyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHgubW92ZVRvKHRoaXMucG9pbnQxLngsIHRoaXMucG9pbnQxLnkpO1xyXG4gICAgICAgIGN0eC5saW5lVG8odGhpcy5wb2ludDIueCwgdGhpcy5wb2ludDIueSk7XHJcbiAgICAgICAgY3R4LmxpbmVUbyh0aGlzLnBvaW50My54LCB0aGlzLnBvaW50My55KTtcclxuICAgICAgICBjdHgubGluZVRvKHRoaXMucG9pbnQxLngsIHRoaXMucG9pbnQxLnkpO1xyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJldHVybnMgdHJ1ZSBpZmYgdGhlIHBvaW50IHAgaXMgYSB2ZXJ0ZXggb2YgdGhlIHRyaWFuZ2xlXHJcbiAgICBwdWJsaWMgaXNWZXJ0ZXggPSAocDogUG9pbnQpOiBib29sZWFuID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb2ludDEuZXF1YWxzKHApIHx8IHRoaXMucG9pbnQyLmVxdWFscyhwKSB8fCB0aGlzLnBvaW50My5lcXVhbHMocCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaHR0cDovL2pzZmlkZGxlLm5ldC9QZXJyb0FaVUwvemRhWTgvMS9cclxuICAgIHB1YmxpYyBjb250YWlucyA9ICh4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW4gPT4ge1xyXG4gICAgICAgIHZhciBzID0gKHRoaXMucG9pbnQxLnkgKiB0aGlzLnBvaW50My54IC0gdGhpcy5wb2ludDEueCAqIHRoaXMucG9pbnQzLnkgKyAodGhpcy5wb2ludDMueSAtIHRoaXMucG9pbnQxLnkpICogeCArICh0aGlzLnBvaW50MS54IC0gdGhpcy5wb2ludDMueCkgKiB5KSAqIHRoaXMuc2lnbjtcclxuICAgICAgICB2YXIgdCA9ICh0aGlzLnBvaW50MS54ICogdGhpcy5wb2ludDIueSAtIHRoaXMucG9pbnQxLnkgKiB0aGlzLnBvaW50Mi54ICsgKHRoaXMucG9pbnQxLnkgLSB0aGlzLnBvaW50Mi55KSAqIHggKyAodGhpcy5wb2ludDIueCAtIHRoaXMucG9pbnQxLngpICogeSkgKiB0aGlzLnNpZ247XHJcbiAgICAgICAgcmV0dXJuIChzID4gMCAmJiB0ID4gMCAmJiAocyArIHQpIDwgMiAqIHRoaXMuYXJlYSAqIHRoaXMuc2lnbikgfHwgKHRoaXMuaXNWZXJ0ZXgobmV3IFBvaW50KHgsIHkpKSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtJdGVtfSBmcm9tIFwiLi4vaXRlbXMvSXRlbVwiXHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSW50ZXJhY3Rpb25cclxue1xyXG4gICAgLy8gaXRlbSBjYW4gYmUgbnVsbFxyXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGl0ZW06IEl0ZW0pIHt9XHJcblxyXG4gICAgLy8gaW50ZXJhY3Qgd2l0aCB0aGUgb2JqZWN0XHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgaW50ZXJhY3QoaXRlbTogSXRlbSk6ICB7dGV4dDogc3RyaW5nLCBpdGVtczogQXJyYXk8SXRlbT59O1xyXG5cclxuICAgIHB1YmxpYyBnZXRJdGVtKCk6IEl0ZW1cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7SlNPTkxvYWRlcn0gZnJvbSBcIi4uL3Jlc291cmNlcy9KU09OTG9hZGVyXCJcclxuaW1wb3J0IHtJbWFnZUxvYWRlcn0gZnJvbSBcIi4uL3Jlc291cmNlcy9JbWFnZUxvYWRlclwiXHJcbmltcG9ydCB7VGV4dHVyZUF0bGFzfSBmcm9tIFwiLi4vc3ByaXRlcy9UZXh0dXJlQXRsYXNcIlxyXG5pbXBvcnQge1Nwcml0ZX0gZnJvbSBcIi4uL3Nwcml0ZXMvU3ByaXRlXCJcclxuaW1wb3J0IHtTdGF0aWNTcHJpdGV9IGZyb20gXCIuLi9zcHJpdGVzL1N0YXRpY1Nwcml0ZVwiXHJcbmltcG9ydCB7QW5pbWF0ZWRTcHJpdGV9IGZyb20gXCIuLi9zcHJpdGVzL0FuaW1hdGVkU3ByaXRlXCJcclxuaW1wb3J0IHtJbnRlcmFjdGFibGVTcHJpdGV9IGZyb20gXCIuLi9zcHJpdGVzL0ludGVyYWN0YWJsZVNwcml0ZVwiXHJcbmltcG9ydCB7TlBDU3ByaXRlfSBmcm9tIFwiLi4vc3ByaXRlcy9OUENTcHJpdGVcIlxyXG5pbXBvcnQge1Nwcml0ZUFuaW1hdGlvbn0gZnJvbSBcIi4uL3Nwcml0ZXMvU3ByaXRlQW5pbWF0aW9uXCJcclxuaW1wb3J0IHtOYXZNZXNofSBmcm9tIFwiLi4vY29sbGlzaW9uL05hdk1lc2hcIlxyXG5pbXBvcnQge1RyaWFuZ2xlfSBmcm9tIFwiLi4vY29sbGlzaW9uL1RyaWFuZ2xlXCJcclxuaW1wb3J0IHtJbnRlcmFjdGlvbn0gIGZyb20gXCIuL0ludGVyYWN0aW9uXCJcclxuaW1wb3J0IHtSZWNlaXZlSXRlbUludGVyYWN0aW9ufSBmcm9tIFwiLi9SZWNlaXZlSXRlbUludGVyYWN0aW9uXCJcclxuaW1wb3J0IHtJdGVtfSBmcm9tIFwiLi4vaXRlbXMvSXRlbVwiXHJcbmltcG9ydCB7Q2lyY2xlfSBmcm9tIFwiLi4vY29sbGlzaW9uL0NpcmNsZVwiXHJcbmltcG9ydCB7UmVjdGFuZ2xlfSBmcm9tIFwiLi4vY29sbGlzaW9uL1JlY3RhbmdsZVwiXHJcbmltcG9ydCB7Q29udmVyc2F0aW9ufSBmcm9tIFwiLi4vY2hhdC9Db252ZXJzYXRpb25cIlxyXG5pbXBvcnQge0RpYWxvZ30gZnJvbSBcIi4uL2NoYXQvRGlhbG9nXCJcclxuaW1wb3J0IHtDb250aW51ZURpYWxvZ30gZnJvbSBcIi4uL2NoYXQvQ29udGludWVEaWFsb2dcIlxyXG5pbXBvcnQge09wdGlvbkRpYWxvZ30gZnJvbSBcIi4uL2NoYXQvT3B0aW9uRGlhbG9nXCJcclxuaW1wb3J0IHtSZWNlaXZlSXRlbURpYWxvZ30gZnJvbSBcIi4uL2NoYXQvUmVjZWl2ZUl0ZW1EaWFsb2dcIlxyXG5cclxuZXhwb3J0IGNsYXNzIExldmVsXHJcbntcclxuICAgIHN0YXRpYyBsb2FkTGV2ZWwocGF0aDogc3RyaW5nLCBpdGVtczogYW55KTogUHJvbWlzZTxhbnk+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBsZXZlbERhdGFQcm9taXNlID0gSlNPTkxvYWRlci5sb2FkSlNPTkZpbGUocGF0aCkudGhlbigobGV2ZWxEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgdGhlIHRleHR1cmUgYXRsYXNcclxuICAgICAgICAgICAgICAgIGxldCBhdGxhcyA9IG5ldyBUZXh0dXJlQXRsYXMobGV2ZWxEYXRhLnRleHR1cmVfYXRsYXMpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dHVyZUF0bGFzUHJvbWlzZSA9IGF0bGFzLmxvYWQoKS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvcjogdGV4dHVyZSBhdGxhcyBjb3VsZCBub3QgYmUgbG9hZGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGFsbFByb21pc2VzID0gW3RleHR1cmVBdGxhc1Byb21pc2VdO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgc3ByaXRlc1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0YXRpY1Nwcml0ZXMgPSBuZXcgQXJyYXk8U3RhdGljU3ByaXRlPigpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGludGVyYWN0YWJsZVNwcml0ZXMgPSBuZXcgQXJyYXk8SW50ZXJhY3RhYmxlU3ByaXRlPigpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5wY1Nwcml0ZXMgPSBuZXcgQXJyYXk8TlBDU3ByaXRlPigpO1xyXG4gICAgICAgICAgICAgICAgZm9yKGNvbnN0IG9iaiBvZiBsZXZlbERhdGEuc3ByaXRlcylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihvYmoudHlwZSA9PSBcImludGVyYWN0YWJsZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbnRlcmFjdGlvbnMgPSBuZXcgQXJyYXk8SW50ZXJhY3Rpb24+KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihjb25zdCBpbnRlciBvZiBvYmouaW50ZXJhY3Rpb25zKSAgICAvLyBjcmVhdGUgYW4gYXJyYXkgb2YgaW50ZXJhY3Rpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGludGVyLnR5cGUgPT0gXCJyZWNlaXZlX2l0ZW1cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWNlaXZlSXRlbXMgPSBuZXcgQXJyYXk8SXRlbT4oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IoY29uc3QgaXRtIG9mIGludGVyLml0ZW1zX3JlY2VpdmVkKSAgIC8vIGNyZWF0ZSBhbiBhcnJheSBvZiByZWNlaXZlIGl0ZW1zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNlaXZlSXRlbXMucHVzaChpdGVtc1tpdG1dKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25zLnB1c2gobmV3IFJlY2VpdmVJdGVtSW50ZXJhY3Rpb24oaW50ZXIuaXRlbSA/IGl0ZW1zW2ludGVyLml0ZW1dIDogbnVsbCwgaW50ZXIuc3VjY2Vzc190ZXh0LCBpbnRlci5mYWlsX3RleHQsIG5ldyBBdWRpbyhpbnRlci5zdWNjZXNzX2F1ZGlvKSwgbmV3IEF1ZGlvKGludGVyLmZhaWxfYXVkaW8pLCByZWNlaXZlSXRlbXMpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcmFjdGFibGVTcHJpdGVzLnB1c2gobmV3IEludGVyYWN0YWJsZVNwcml0ZShvYmoueCwgb2JqLnksIG9iai5zY2FsZSwgb2JqLm9yaWdpbl9ob3Jpem9udGFsLCBvYmoub3JpZ2luX3ZlcnRpY2FsLCBhdGxhcywgb2JqLmltYWdlX25hbWUsIG9iai5leGFtaW5lX3RleHQsIG5ldyBBdWRpbyhvYmouZXhhbWluZV9hdWRpbyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENpcmNsZShvYmoueCwgb2JqLnksIG9iai5pbnRlcmFjdGlvbl9yYWRpdXMpLCBuZXcgUmVjdGFuZ2xlKG9iai54LW9iai5jbGlja196b25lX3dpZHRoLzIsIG9iai55LW9iai5jbGlja196b25lX2hlaWdodC8yLCBvYmouY2xpY2tfem9uZV93aWR0aCwgb2JqLmNsaWNrX3pvbmVfaGVpZ2h0KSwgaW50ZXJhY3Rpb25zKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKG9iai50eXBlID09IFwibnBjXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxvYWQgdGhlIGFuaW1hdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGF0bGFzID0gbmV3IFRleHR1cmVBdGxhcyhvYmouYXRsYXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYW5pbWF0aW9uczogQXJyYXk8U3ByaXRlQW5pbWF0aW9uPiA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhdGxhc0xvYWRlZFByb21pc2UgPSBhdGxhcy5sb2FkKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IHNlcXVlbmNlTmFtZSBpbiBvYmouYW5pbWF0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlcSA9IG9iai5hbmltYXRpb25zW3NlcXVlbmNlTmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5pbSA9IG5ldyBTcHJpdGVBbmltYXRpb24oc2VxLm51bV9mcmFtZXMsIGF0bGFzLCBzZXF1ZW5jZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbnMucHVzaChhbmltKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBucGNTcHJpdGVzLnB1c2gobmV3IE5QQ1Nwcml0ZShvYmoueCwgb2JqLnksIG9iai5zY2FsZSwgb2JqLm9yaWdpbl9ob3Jpem9udGFsLCBvYmoub3JpZ2luX3ZlcnRpY2FsLCBhbmltYXRpb25zLCBvYmouZXhhbWluZV90ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ2lyY2xlKG9iai54LCBvYmoueSwgb2JqLmludGVyYWN0aW9uX3JhZGl1cyksIG5ldyBSZWN0YW5nbGUob2JqLngtb2JqLmNsaWNrX3pvbmVfd2lkdGgvMiwgb2JqLnktb2JqLmNsaWNrX3pvbmVfaGVpZ2h0LzIsIG9iai5jbGlja196b25lX3dpZHRoLCBvYmouY2xpY2tfem9uZV9oZWlnaHQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMZXZlbC5idWlsZENvbnZlcnNhdGlvbihvYmopKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcjogdW5hYmxlIHRvIGxvYWQgc3ByaXRlIHRleHR1cmUgYXRsYXMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFByb21pc2VzLnB1c2goYXRsYXNMb2FkZWRQcm9taXNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTcHJpdGVzLnB1c2gobmV3IFN0YXRpY1Nwcml0ZShvYmoueCwgb2JqLnksIG9iai5zY2FsZSwgb2JqLm9yaWdpbl9ob3Jpem9udGFsLCBvYmoub3JpZ2luX3ZlcnRpY2FsLCBhdGxhcywgb2JqLmltYWdlX25hbWUpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIHRoZSBuYXZtZXNoXHJcbiAgICAgICAgICAgICAgICBsZXQgdHJpcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCB0cmkgb2YgbGV2ZWxEYXRhLm5hdm1lc2gpIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmlzLnB1c2gobmV3IFRyaWFuZ2xlKHRyaS54MSwgdHJpLnkxLCB0cmkueDIsIHRyaS55MiwgdHJpLngzLCB0cmkueTMpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBuYXZtZXNoID0gbmV3IE5hdk1lc2godHJpcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoYWxsUHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcihjb25zdCBzcHJpdGUgb2Ygc3RhdGljU3ByaXRlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGUucmVmcmVzaEltYWdlKCk7ICAvLyB0ZXh0dXJlIGF0bGFzIHByb2JhYmx5IGhhZG4ndCBsb2FkZWQgd2hlbiBzcHJpdGUgd2FzIGluaXRpYWxpc2VkIHNvIHJlZnJlc2ggaW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvcihjb25zdCBzcHJpdGUgb2YgaW50ZXJhY3RhYmxlU3ByaXRlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGUucmVmcmVzaEltYWdlKCk7ICAvLyB0ZXh0dXJlIGF0bGFzIHByb2JhYmx5IGhhZG4ndCBsb2FkZWQgd2hlbiBzcHJpdGUgd2FzIGluaXRpYWxpc2VkIHNvIHJlZnJlc2ggaW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeyd0ZXh0dXJlQXRsYXMnOiBhdGxhcywgJ3NjZW5lU2NhbGUnOiBsZXZlbERhdGEuc2NlbmVfc2NhbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAncGxheWVyU3RhcnRYJzogbGV2ZWxEYXRhLnBsYXllcl9zdGFydF94LCAncGxheWVyU3RhcnRZJzogbGV2ZWxEYXRhLnBsYXllcl9zdGFydF95LCAncGxheWVyU3RhcnRzJzogbGV2ZWxEYXRhLnBsYXllcl9zdGFydHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGVwdGhTY2FsZVknOiBsZXZlbERhdGEuZGVwdGhfc2NhbGVfeSwgJ25hdm1lc2gnOiBuYXZtZXNoLCAnc3RhdGljU3ByaXRlcyc6IHN0YXRpY1Nwcml0ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaW50ZXJhY3RhYmxlU3ByaXRlcyc6IGludGVyYWN0YWJsZVNwcml0ZXMsICducGNTcHJpdGVzJzogbnBjU3ByaXRlc30pO1xyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChudWxsKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yOiBmYWlsZWQgdG8gbG9hZCBsZXZlbFwiKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdChudWxsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYnVpbGRDb252ZXJzYXRpb24oc3ByaXRlT2JqOiBhbnkpOiBDb252ZXJzYXRpb25cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge31cclxufVxyXG4iLCJpbXBvcnQge0ludGVyYWN0aW9ufSBmcm9tIFwiLi9JbnRlcmFjdGlvblwiXHJcbmltcG9ydCB7SXRlbX0gZnJvbSBcIi4uL2l0ZW1zL0l0ZW1cIlxyXG5cclxuZXhwb3J0IGNsYXNzIFJlY2VpdmVJdGVtSW50ZXJhY3Rpb24gZXh0ZW5kcyBJbnRlcmFjdGlvblxyXG57XHJcbiAgICAvLyBpdGVtIGNhbiBiZSBudWxsXHJcbiAgICBjb25zdHJ1Y3RvcihpdGVtOiBJdGVtLCBwcm90ZWN0ZWQgc3VjY2Vzc1RleHQ6IHN0cmluZywgcHJvdGVjdGVkIGZhaWxUZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHByb3RlY3RlZCBzdWNjZXNzQXVkaW86IEhUTUxBdWRpb0VsZW1lbnQsIHByb3RlY3RlZCBmYWlsQXVkaW86IEhUTUxBdWRpb0VsZW1lbnQsIHByb3RlY3RlZCBpdGVtc1JlY2VpdmVkOiBBcnJheTxJdGVtPilcclxuICAgIHtcclxuICAgICAgICBzdXBlcihpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpbnRlcmFjdCB3aXRoIHRoZSBvYmplY3RcclxuICAgIC8vIHJldHVybnMgYSBsaXN0IG9mIGl0ZW1zIHJlY2VpdmVkIGZyb20gdGhlIGludGVyYWN0aW9uXHJcbiAgICBwdWJsaWMgaW50ZXJhY3QoaXRlbTogSXRlbSk6IHt0ZXh0OiBzdHJpbmcsIGF1ZGlvOiBIVE1MQXVkaW9FbGVtZW50LCBpdGVtczogQXJyYXk8SXRlbT59XHJcbiAgICB7XHJcbiAgICAgICAgaWYoaXRlbSA9PSB0aGlzLml0ZW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4ge3RleHQ6IHRoaXMuc3VjY2Vzc1RleHQsIGF1ZGlvOiB0aGlzLnN1Y2Nlc3NBdWRpbywgaXRlbXM6IHRoaXMuaXRlbXNSZWNlaXZlZH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge3RleHQ6IHRoaXMuZmFpbFRleHQsIGF1ZGlvOiB0aGlzLmZhaWxBdWRpbywgaXRlbXM6IG51bGx9O1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBsZXQgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuZXhwb3J0IGxldCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0Q2FudmFzQW5kQ29udGV4dCgpXHJcbntcclxuICAgIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb249J2Rlc3RpbmF0aW9uLW92ZXInO1xyXG4gICAgY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IHRydWU7ICAgLy8gZW5hYmxlIGFudGktYWxpYXNpbmcgb2YgaW1hZ2VzXHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIElucHV0TWFuYWdlclxyXG57XHJcbiAgICBwcml2YXRlIG1vdXNlRG93bkNhbGxiYWNrczogQXJyYXk8KGU6IE1vdXNlRXZlbnQpID0+IHZvaWQ+ID0gQXJyYXk8KCkgPT4gdm9pZD4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLm1vdXNlRG93bik7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIGV2ZW50ID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkpOyAgLy8gZGlzYWJsZSByaWdodCBjbGljayBjb250ZXh0IG1lbnVcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW91c2VEb3duID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIC8vIG5vdGlmeSBhbGwgY2FsbGJhY2tzXHJcbiAgICAgICAgZm9yKGNvbnN0IGNhbGxiYWNrIG9mIHRoaXMubW91c2VEb3duQ2FsbGJhY2tzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRNb3VzZURvd25DYWxsYmFjayhjYWxsYmFjazogKGU6IE1vdXNlRXZlbnQpID0+IHZvaWQpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5tb3VzZURvd25DYWxsYmFja3MucHVzaChjYWxsYmFjayk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtJdGVtfSBmcm9tIFwiLi9JdGVtXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnZlbnRvcnlcclxue1xyXG4gICAgcHJpdmF0ZSBpdGVtcyA9IG5ldyBBcnJheTxJdGVtPig5KTsgLy8gTUFYX05VTV9JVEVNUyA9IDlcclxuXHJcbiAgICBwdWJsaWMgYWRkSXRlbShpdGVtOiBJdGVtKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIGlmKGl0ZW0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAvLyBhZGQgdGhlIGl0ZW0gdG8gdGhlIGZpcnN0IGF2YWlsYWJsZSBzbG90XHJcbiAgICAgICAgICAgIGZvcihsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpbmRleCArKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5pdGVtc1tpbmRleF0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNbaW5kZXhdID0gaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZUl0ZW0oaXRlbTogSXRlbSk6IEl0ZW1cclxuICAgIHtcclxuICAgICAgICBmb3IobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLml0ZW1zLmxlbmd0aDsgaW5kZXggKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZih0aGlzLml0ZW1zW2luZGV4XSA9PT0gaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZW1vdmVkIFwiICsgaXRlbS5nZXROYW1lKCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtc1tpbmRleF0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXNbaW5kZXhdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVJdGVtQnlJbmRleChpbmRleDogbnVtYmVyKTogSXRlbVxyXG4gICAge1xyXG4gICAgICAgIGlmKGluZGV4ICE9IG51bGwgJiYgaW5kZXggPCB0aGlzLml0ZW1zLmxlbmd0aClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW1zW2luZGV4XTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtc1tpbmRleF0gPSBudWxsO1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1vdmVJdGVtKGl0ZW06IEl0ZW0sIGluZGV4OiBudW1iZXIpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYodGhpcy5pdGVtc1tpbmRleF0gPT0gbnVsbCkgeyAvLyBpZiBuZXcgaXRlbXNsb3QgaXMgZnJlZVxyXG4gICAgICAgICAgICBsZXQgeCA9IHRoaXMucmVtb3ZlSXRlbShpdGVtKTtcclxuICAgICAgICAgICAgaWYoeCAhPSBudWxsKSB7IC8vIGNoZWNrIHRoZSBwbGF5ZXIgYWN0dWFsbHkgaGFkIHRoZSBpdGVtXHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW2luZGV4XSA9IGl0ZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsZWFyKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBmb3IobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLml0ZW1zLmxlbmd0aDsgaW5kZXggKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1zW2luZGV4XSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJdGVtcygpOiBBcnJheTxJdGVtPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBJdGVtXHJcbntcclxuICAgIHByb3RlY3RlZCBjb21iaW5hdGlvbnM6IEFycmF5PHtvdGhlcjogSXRlbSwgb3V0OiBBcnJheTxJdGVtPn0+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBuYW1lOiBzdHJpbmcsIHByb3RlY3RlZCBleGFtaW5lVGV4dDogc3RyaW5nLCBwcm90ZWN0ZWQgZXhhbWluZUF1ZGlvOiBIVE1MQXVkaW9FbGVtZW50LCBwcm90ZWN0ZWQgaW1ncGF0aDogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY29tYmluYXRpb25zID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbWJpbmUob3RoZXI6IEl0ZW0pOiBBcnJheTxJdGVtPlxyXG4gICAge1xyXG4gICAgICAgIGZvcihjb25zdCBjbWIgb2YgdGhpcy5jb21iaW5hdGlvbnMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBpZiB0aGUgaXRlbSBpcyBjb21iaW5hYmxlLCByZXR1cm4gdGhlIGFycmF5IG9mIGl0ZW1zIGNyZWF0ZWRcclxuICAgICAgICAgICAgaWYob3RoZXIgPT09IGNtYi5vdGhlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNtYi5vdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRDb21iaW5hdGlvbihvdGhlcjogSXRlbSwgb3V0OiBBcnJheTxJdGVtPik6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZihvdGhlciAhPSBudWxsICYmIG91dCAhPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jb21iaW5hdGlvbnMucHVzaCh7b3RoZXI6IG90aGVyLCBvdXQ6IG91dH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TmFtZSgpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRFeGFtaW5lVGV4dCgpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5leGFtaW5lVGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RXhhbWluZUF1ZGlvKCk6IEhUTUxBdWRpb0VsZW1lbnRcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5leGFtaW5lQXVkaW87XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEltYWdlUGF0aCgpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbWdwYXRoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gYEl0ZW0oJHt0aGlzLm5hbWV9KWA7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtjYW52YXMsIGN0eCwgaW5pdENhbnZhc0FuZENvbnRleHR9IGZyb20gXCIuL2dsb2JcIlxyXG5pbXBvcnQge05hdk1lc2h9IGZyb20gXCIuL2NvbGxpc2lvbi9OYXZNZXNoXCJcclxuaW1wb3J0IHtUcmlhbmdsZX0gZnJvbSBcIi4vY29sbGlzaW9uL1RyaWFuZ2xlXCJcclxuaW1wb3J0IHtJU2hhcGV9IGZyb20gXCIuL2NvbGxpc2lvbi9JU2hhcGVcIlxyXG5pbXBvcnQge0lucHV0TWFuYWdlcn0gZnJvbSBcIi4vaW5wdXQvSW5wdXRNYW5hZ2VyXCJcclxuaW1wb3J0IHtJbWFnZUxvYWRlcn0gZnJvbSBcIi4vcmVzb3VyY2VzL0ltYWdlTG9hZGVyXCJcclxuaW1wb3J0IHtKU09OTG9hZGVyfSBmcm9tIFwiLi9yZXNvdXJjZXMvSlNPTkxvYWRlclwiXHJcbmltcG9ydCB7TGV2ZWx9IGZyb20gXCIuL2dhbWUvTGV2ZWxcIlxyXG5pbXBvcnQge1N0YXRpY1Nwcml0ZX0gZnJvbSBcIi4vc3ByaXRlcy9TdGF0aWNTcHJpdGVcIlxyXG5pbXBvcnQge0FuaW1hdGVkU3ByaXRlfSBmcm9tIFwiLi9zcHJpdGVzL0FuaW1hdGVkU3ByaXRlXCJcclxuaW1wb3J0IHtJbnRlcmFjdGFibGVTcHJpdGV9IGZyb20gXCIuL3Nwcml0ZXMvSW50ZXJhY3RhYmxlU3ByaXRlXCJcclxuaW1wb3J0IHtOYXZTcHJpdGV9IGZyb20gXCIuL3Nwcml0ZXMvTmF2U3ByaXRlXCJcclxuaW1wb3J0IHtTcHJpdGVBbmltYXRpb259IGZyb20gXCIuL3Nwcml0ZXMvU3ByaXRlQW5pbWF0aW9uXCJcclxuaW1wb3J0IHtUZXh0dXJlQXRsYXN9IGZyb20gXCIuL3Nwcml0ZXMvVGV4dHVyZUF0bGFzXCJcclxuaW1wb3J0IHtQbGF5ZXJTcHJpdGV9IGZyb20gXCIuL3Nwcml0ZXMvUGxheWVyU3ByaXRlXCJcclxuaW1wb3J0IHtOUENTcHJpdGV9IGZyb20gXCIuL3Nwcml0ZXMvTlBDU3ByaXRlXCJcclxuaW1wb3J0IHtJdGVtfSBmcm9tIFwiLi9pdGVtcy9JdGVtXCJcclxuaW1wb3J0IHtJbnZlbnRvcnl9IGZyb20gXCIuL2l0ZW1zL0ludmVudG9yeVwiXHJcbmltcG9ydCB7Q29udmVyc2F0aW9ufSBmcm9tIFwiLi9jaGF0L0NvbnZlcnNhdGlvblwiXHJcbmltcG9ydCB7RGlhbG9nfSBmcm9tIFwiLi9jaGF0L0RpYWxvZ1wiXHJcbmltcG9ydCB7Q29udGludWVEaWFsb2d9IGZyb20gXCIuL2NoYXQvQ29udGludWVEaWFsb2dcIlxyXG5pbXBvcnQge09wdGlvbkRpYWxvZ30gZnJvbSBcIi4vY2hhdC9PcHRpb25EaWFsb2dcIlxyXG5cclxubGV0IGlucHV0TWFuYWdlciA9IG5ldyBJbnB1dE1hbmFnZXIoKTtcclxubGV0IGltZzogSFRNTEltYWdlRWxlbWVudDtcclxubGV0IHNjZW5lU2NhbGU6IG51bWJlcjtcclxubGV0IGxldmVsU2NhbGU6IG51bWJlcjtcclxubGV0IGRlcHRoU2NhbGVZOiBudW1iZXI7XHJcbmxldCBzdGF0aWNTcHJpdGVzID0gbmV3IEFycmF5PFN0YXRpY1Nwcml0ZT4oKTtcclxubGV0IGludGVyYWN0YWJsZVNwcml0ZXMgPSBuZXcgQXJyYXk8SW50ZXJhY3RhYmxlU3ByaXRlPigpO1xyXG5sZXQgbnBjU3ByaXRlcyA9IG5ldyBBcnJheTxOUENTcHJpdGU+KCk7XHJcbmxldCBwbGF5ZXJTcHJpdGU7XHJcbmxldCBuYXZtZXNoO1xyXG5cclxubGV0IGl0ZW1zID0ge307ICAgICAgICAgLy8gZGF0YWJhc2Ugb2YgaXRlbXNcclxubGV0IGl0ZW1zbG90YnRucyA9IFtdOyAgLy8gYXJyYXkgb2YgaXRlbXNsb3QgaHRtbCBidXR0b25zXHJcbmxldCBpdGVtYnRucyA9IFtdOyAgICAgIC8vIGFycmF5IG9mIGl0ZW0gaHRtbCBidXR0b25zXHJcbmxldCBpbnZlbnQgPSBuZXcgSW52ZW50b3J5KCk7IC8vIHRoZSBwbGF5ZXIncyBpbnZlbnRvcnlcclxubGV0IHNlbGVjdGVkSXRlbTsgICAgICAgLy8gdXNlciBjYW4gc2VsZWN0IGFuIGl0ZW0gZnJvbSBpbnZlbnRvcnkgYnkgbGVmdCBjbGlja2luZ1xyXG5sZXQgc2VsZWN0ZWRJdGVtQnRuO1xyXG5cclxubGV0IGZiV2lkdGg7XHJcbmxldCBmYkhlaWdodDtcclxuXHJcbmxldCBsYXN0VGltZTtcclxuXHJcbmZ1bmN0aW9uIGdhbWVMb29wKCkgLy8gVE9ETyAtIHNwbGl0IGRyYXcgaW50byB1cGRhdGUgYW5kIGRyYXcgZnVuY3Rpb25zXHJcbntcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xyXG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIGZiV2lkdGgsIGZiSGVpZ2h0KTtcclxuXHJcbiAgICAvLyBzZXQgb3JpZ2luIHRvIHRoZSBjYW52YXMncyBjZW50cmVcclxuICAgIGN0eC5zYXZlKCk7XHJcbiAgICBjdHgudHJhbnNsYXRlKGZiV2lkdGgvMiwgZmJIZWlnaHQvMik7XHJcbiAgICBjdHguc2NhbGUoc2NlbmVTY2FsZSwgc2NlbmVTY2FsZSk7XHJcblxyXG4gICAgY29uc3QgY3VycmVudFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgY29uc3QgZGVsdGFUaW1lID0gY3VycmVudFRpbWUgLSBsYXN0VGltZTtcclxuXHJcbiAgICAvLyBkcmF3IHRoZSBzY2VuZSBzcGVjaWZpYyBzcHJpdGVzXHJcbiAgICBmb3IoY29uc3Qgc3ByaXRlIG9mIHN0YXRpY1Nwcml0ZXMpXHJcbiAgICB7XHJcbiAgICAgICAgc3ByaXRlLmRyYXcoY3VycmVudFRpbWUsIGRlbHRhVGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZHJhdyB0aGUgc3ByaXRlcyB3aGljaCB0aGUgcGxheWVyIGNhbiBpbnRlcmFjdCB3aXRoXHJcbiAgICBmb3IoY29uc3Qgc3ByaXRlIG9mIGludGVyYWN0YWJsZVNwcml0ZXMpXHJcbiAgICB7XHJcbiAgICAgICAgc3ByaXRlLmRyYXcoY3VycmVudFRpbWUsIGRlbHRhVGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZHJhdyB0aGUgTlBDIHNwcml0ZXNcclxuICAgIGZvcihjb25zdCBzcHJpdGUgb2YgbnBjU3ByaXRlcylcclxuICAgIHtcclxuICAgICAgICBzcHJpdGUuZHJhdyhjdXJyZW50VGltZSwgZGVsdGFUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBkcmF3IHRoZSBwbGF5ZXIgc3ByaXRlXHJcbiAgICBwbGF5ZXJTcHJpdGUuZHJhdyhjdXJyZW50VGltZSwgZGVsdGFUaW1lKTtcclxuXHJcbiAgICAvLyBERUJVRyAtIGRyYXcgdGhlIGNvbGxpc2lvbiBib3hlc1xyXG4gICAgbmF2bWVzaC5kcmF3KCk7XHJcblxyXG4gICAgLy8gcmVzdG9yZSBjYW52YXMgdG8gb3JpZ2luYWwgc2V0dGluZ3NcclxuICAgIGN0eC5yZXN0b3JlKCk7XHJcblxyXG4gICAgbGFzdFRpbWUgPSBjdXJyZW50VGltZTtcclxufVxyXG5cclxuaW5wdXRNYW5hZ2VyLmFkZE1vdXNlRG93bkNhbGxiYWNrKChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgbGV0IHggPSAoZXZlbnQubGF5ZXJYIC0gY2FudmFzLm9mZnNldExlZnQgLSBmYldpZHRoLzIpIC8gc2NlbmVTY2FsZTtcclxuICAgIGxldCB5ID0gKGV2ZW50LmxheWVyWSAtIGNhbnZhcy5vZmZzZXRUb3AgLSBmYkhlaWdodC8yKSAvIHNjZW5lU2NhbGU7XHJcbiAgICBjb25zb2xlLmxvZyhcIm1vdXNlIGRvd24gYXQgKFwiICsgeCArIFwiLCBcIiArIHkgKyBcIilcIik7XHJcblxyXG4gICAgbGV0IGludGVyYWN0ZWRXaXRoU3ByaXRlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgZm9yKGNvbnN0IHNwcml0ZSBvZiBpbnRlcmFjdGFibGVTcHJpdGVzKVxyXG4gICAge1xyXG4gICAgICAgIGlmKGV2ZW50LmJ1dHRvbiA9PT0gMCkgeyAgLy8gbGVmdCBtb3VzZSBidXR0b24gcHJlc3NcclxuICAgICAgICAgICAgaWYoc3ByaXRlLmluSW50ZXJhY3Rpb25ab25lKHBsYXllclNwcml0ZS54LCBwbGF5ZXJTcHJpdGUueSkgJiYgc3ByaXRlLmluQ2xpY2tab25lKHgsIHkpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpbnRlcmFjdCB3aXRoIHRoZSBzcHJpdGVcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IHNwcml0ZS5pbnRlcmFjdChzZWxlY3RlZEl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgaWYob2JqICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJTcHJpdGUub3BlblNwZWVjaEJ1YmJsZShvYmoudGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGNvbnN0IGl0bSBvZiBvYmouaXRlbXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW52ZW50LmFkZEl0ZW0oaXRtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmcmVzaEFsbEl0ZW1zRGlzcGxheWVkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKG9iai5hdWRpbyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iai5hdWRpby5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJTcHJpdGUub3BlblNwZWVjaEJ1YmJsZShcIlRoYXQncyBhIHJ1YmJpc2ggaWRlYSFcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbnRlcmFjdGVkV2l0aFNwcml0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZihldmVudC5idXR0b24gPT09IDIpIHsgLy8gcmlnaHQgbW91c2UgYnV0dG9uIHByZXNzXHJcbiAgICAgICAgICAgIGlmKHNwcml0ZS5pbkNsaWNrWm9uZSh4LCB5KSkge1xyXG4gICAgICAgICAgICAgICAgLy8gZXhhbWluZSB0aGUgaW50ZXJhY3RhYmxlIHNwcml0ZVxyXG4gICAgICAgICAgICAgICAgcGxheWVyU3ByaXRlLm9wZW5TcGVlY2hCdWJibGUoc3ByaXRlLmdldEV4YW1pbmVUZXh0KCkpO1xyXG4gICAgICAgICAgICAgICAgaWYoc3ByaXRlLmdldEV4YW1pbmVBdWRpbygpICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGUuZ2V0RXhhbWluZUF1ZGlvKCkucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW50ZXJhY3RlZFdpdGhTcHJpdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYoIWludGVyYWN0ZWRXaXRoU3ByaXRlKSB7XHJcbiAgICAgICAgaWYoZXZlbnQuYnV0dG9uID09PSAwKSAgLy8gbGVmdCBtb3VzZSBidXR0b24gcHJlc3NcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCB3YXlwb2ludHMgPSBuYXZtZXNoLmdldFdheXBvaW50cyhwbGF5ZXJTcHJpdGUueCwgcGxheWVyU3ByaXRlLnksIHgsIHkpO1xyXG4gICAgICAgICAgICBwbGF5ZXJTcHJpdGUuc2V0V2F5cG9pbnRzKHdheXBvaW50cyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGxvYWRQbGF5ZXJTcHJpdGUoKTogUHJvbWlzZTxBbmltYXRlZFNwcml0ZT5cclxue1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEFuaW1hdGVkU3ByaXRlPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgbGV0IGF0bGFzID0gbmV3IFRleHR1cmVBdGxhcyhcInJlcy9hdGxhc2VzL2FuaW1hdGVkLnBuZ1wiKTtcclxuICAgICAgICBsZXQgcGxheWVyU3ByaXRlO1xyXG4gICAgICAgIGNvbnN0IGF0bGFzTG9hZGVkUHJvbWlzZSA9IGF0bGFzLmxvYWQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgVEVTVF9BTklNQVRJT04gPSBuZXcgU3ByaXRlQW5pbWF0aW9uKDIsIGF0bGFzLCBcImFuaW1hdGVkXCIpO1xyXG4gICAgICAgICAgICBwbGF5ZXJTcHJpdGUgPSBuZXcgUGxheWVyU3ByaXRlKDEwMCwgMjAwLCAxLjI1LCBcImNlbnRyZVwiLCBcInRvcFwiLCBbVEVTVF9BTklNQVRJT05dKTtcclxuICAgICAgICAgICAgcGxheWVyU3ByaXRlLnNldEN1cnJlbnRBbmltYXRpb24oMCk7XHJcbiAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3I6IHVuYWJsZSB0byBsb2FkIHBsYXllciBzcHJpdGUgdGV4dHVyZSBhdGxhcycpO1xyXG4gICAgICAgICAgICByZWplY3QobnVsbCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBzcGVlY2hCdWJibGVJbWFnZTtcclxuICAgICAgICBjb25zdCBzcGVlY2hCdWJibGVMb2FkZWRQcm9taXNlID0gSW1hZ2VMb2FkZXIubG9hZEltYWdlKFwicmVzL2ltYWdlcy9zcGVlY2hfYnViYmxlLnBuZ1wiKS50aGVuKChpbWcpID0+IHtcclxuICAgICAgICAgICAgc3BlZWNoQnViYmxlSW1hZ2UgPSBpbWc7XHJcbiAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yOiBzcGVlY2ggYnViYmxlIGltYWdlIGNvdWxkIG5vdCBiZSBsb2FkZWRcIik7XHJcbiAgICAgICAgICAgIHJlamVjdChudWxsKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgUHJvbWlzZS5hbGwoW2F0bGFzTG9hZGVkUHJvbWlzZSwgc3BlZWNoQnViYmxlTG9hZGVkUHJvbWlzZV0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBwbGF5ZXJTcHJpdGUuc2V0U3BlZWNoQnViYmxlSW1hZ2Uoc3BlZWNoQnViYmxlSW1hZ2UpO1xyXG4gICAgICAgICAgICByZXNvbHZlKHBsYXllclNwcml0ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gcHJvZ3JhbSBlbnRyeSBwb2ludFxyXG53aW5kb3cub25sb2FkID0gKCkgPT5cclxue1xyXG4gICAgaW5pdENhbnZhc0FuZENvbnRleHQoKTtcclxuXHJcbiAgICAvLyBzZXQgdGhlIGNhbnZhcyBzaXplXHJcbiAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIDAuOTU7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICogMC45NTtcclxuICAgIGZiV2lkdGggPSBjYW52YXMud2lkdGg7XHJcbiAgICBmYkhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XHJcblxyXG4gICAgLy8gbGV2ZWwgc2V0dXAgZGF0YVxyXG4gICAgbGV0IHBsYXllclN0YXJ0WCA9IDA7XHJcbiAgICBsZXQgcGxheWVyU3RhcnRZID0gMDtcclxuXHJcbiAgICBjb25zdCBsb2FkUGxheWVyU3ByaXRlUHJvbWlzZSA9IGxvYWRQbGF5ZXJTcHJpdGUoKS50aGVuKChzcHJpdGUpID0+IHtcclxuICAgICAgICBwbGF5ZXJTcHJpdGUgPSBzcHJpdGU7XHJcbiAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGxvYWRJdGVtc1Byb21pc2UgPSBKU09OTG9hZGVyLmxvYWRKU09ORmlsZShcInJlcy9pdGVtcy9pdGVtcy5qc29uXCIpLnRoZW4oKG9iaikgPT4ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cob2JqLml0ZW1zKVxyXG4gICAgICAgIGZvcihjb25zdCBpZCBpbiBvYmouaXRlbXMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBpdG0gPSBvYmouaXRlbXNbaWRdO1xyXG4gICAgICAgICAgICBpdGVtc1tpZF0gPSBuZXcgSXRlbShpdG0ubmFtZSwgaXRtLmV4YW1pbmVfdGV4dCwgbmV3IEF1ZGlvKGl0bS5leGFtaW5lX2F1ZGlvKSwgaXRtLmltYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGNvbnN0IGlkIGluIG9iai5jb21iaW5hdGlvbnMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBjb21iaW5hdGlvbiA9IG9iai5jb21iaW5hdGlvbnNbaWRdO1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtMSA9IGl0ZW1zW2NvbWJpbmF0aW9uLml0ZW0xXTtcclxuICAgICAgICAgICAgY29uc3QgaXRlbTIgPSBpdGVtc1tjb21iaW5hdGlvbi5pdGVtMl07XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zT3V0ID0gW107XHJcbiAgICAgICAgICAgIGZvcihjb25zdCBpZE91dCBvZiBjb21iaW5hdGlvbi5pdGVtc19vdXQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zT3V0LnB1c2goaXRlbXNbaWRPdXRdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihpdGVtMSAhPSBudWxsICYmIGl0ZW0yICE9IG51bGwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0xLmFkZENvbWJpbmF0aW9uKGl0ZW0yLCBpdGVtc091dCk7XHJcbiAgICAgICAgICAgICAgICBpdGVtMi5hZGRDb21iaW5hdGlvbihpdGVtMSwgaXRlbXNPdXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxvYWRQbGF5ZXJJbnZlbnRvcnkoXCJhY2tcIik7XHJcbiAgICAgICAgaW5pdEdVSUNvbnRyb2xsZXJzKCk7XHJcbiAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvcjogaXRlbXMgY291bGQgbm90IGJlIGxvYWRlZFwiKTtcclxuICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBMZXZlbC5sb2FkTGV2ZWwoXCJyZXMvbGV2ZWxzL2xldmVsMS5qc29uXCIsIGl0ZW1zKTtcclxuICAgIH0pLnRoZW4oKGxldmVsRGF0YSkgPT4ge1xyXG4gICAgICAgIGltZyA9IGxldmVsRGF0YS5iYWNrZ3JvdW5kSW1nO1xyXG4gICAgICAgIHN0YXRpY1Nwcml0ZXMgPSBsZXZlbERhdGEuc3RhdGljU3ByaXRlcztcclxuICAgICAgICBpbnRlcmFjdGFibGVTcHJpdGVzID0gbGV2ZWxEYXRhLmludGVyYWN0YWJsZVNwcml0ZXM7XHJcbiAgICAgICAgbnBjU3ByaXRlcyA9IGxldmVsRGF0YS5ucGNTcHJpdGVzO1xyXG4gICAgICAgIGxldmVsU2NhbGUgPSBsZXZlbERhdGEuc2NlbmVTY2FsZSA/IGxldmVsRGF0YS5zY2VuZVNjYWxlIDogMS4wO1xyXG4gICAgICAgIHNjZW5lU2NhbGUgPSBsZXZlbFNjYWxlICogY2FudmFzLmhlaWdodC84ODA7ICAvLyBzY2FsZSBiYXNlZCBvbiB0aGUgY2FudmFzIHNpemUgc28gZ2FtZSBmaXRzIG9uIHNjcmVlblxyXG4gICAgICAgIGRlcHRoU2NhbGVZID0gbGV2ZWxEYXRhLmRlcHRoU2NhbGVZO1xyXG5cclxuICAgICAgICBwbGF5ZXJTdGFydFggPSBsZXZlbERhdGEucGxheWVyU3RhcnRYO1xyXG4gICAgICAgIHBsYXllclN0YXJ0WSA9IGxldmVsRGF0YS5wbGF5ZXJTdGFydFk7XHJcblxyXG4gICAgICAgIG5hdm1lc2ggPSBsZXZlbERhdGEubmF2bWVzaDtcclxuICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yOiBsZXZlbCBjb3VsZCBub3QgYmUgbG9hZGVkXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgUHJvbWlzZS5hbGwoW2xvYWRQbGF5ZXJTcHJpdGVQcm9taXNlLCBsb2FkSXRlbXNQcm9taXNlXSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcGxheWVyU3ByaXRlLnggPSBwbGF5ZXJTdGFydFg7XHJcbiAgICAgICAgcGxheWVyU3ByaXRlLnkgPSBwbGF5ZXJTdGFydFk7XHJcbiAgICAgICAgcGxheWVyU3ByaXRlLnNldFN0YXJ0UG9zKHBsYXllclN0YXJ0WCwgcGxheWVyU3RhcnRZKTtcclxuICAgICAgICBwbGF5ZXJTcHJpdGUuc2V0RGVwdGhTY2FsZShkZXB0aFNjYWxlWSk7XHJcbiAgICAgICAgbGFzdFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIGdhbWVMb29wKCk7XHJcbiAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvcjogZ2FtZSBjb3VsZCBub3QgYmUgbG9hZGVkXCIpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIG9uIHdpbmRvdyByZXNpemUgY2hhbmdlIHRoZSBzY2FsZVxyXG53aW5kb3cub25yZXNpemUgPSAoKSA9PiB7XHJcbiAgICAvLyBzZXQgdGhlIGNhbnZhcyBzaXplXHJcbiAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIDAuOTU7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICogMC45NTtcclxuICAgIGZiV2lkdGggPSBjYW52YXMud2lkdGg7XHJcbiAgICBmYkhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XHJcbiAgICBzY2VuZVNjYWxlID0gbGV2ZWxTY2FsZSAqIGNhbnZhcy5oZWlnaHQvODgwOyAgLy8gc2NhbGUgYmFzZWQgb24gdGhlIGNhbnZhcyBzaXplIHNvIGdhbWUgZml0cyBvbiBzY3JlZW5cclxuICAgIGNvbnNvbGUubG9nKHNjZW5lU2NhbGUpO1xyXG59XHJcblxyXG4vLyBsb2FkIHRoZSBwbGF5ZXIncyBpbnZlbnRvcnlcclxuZnVuY3Rpb24gbG9hZFBsYXllckludmVudG9yeShwYXRoOiBzdHJpbmcpIHtcclxuICAgIC8vIFRPRE8gLSBsb2FkIGZyb20gZmlsZVxyXG4gICAgLy9pbnZlbnQuYWRkSXRlbShpdGVtc1tcIjAuMC4xLTAwMVwiXSk7XHJcbiAgICAvL2ludmVudC5hZGRJdGVtKGl0ZW1zW1wiMC4wLjEtMDAyXCJdKTtcclxuICAgIGludmVudC5hZGRJdGVtKGl0ZW1zW1wiMC4wLjEtMDAyXCJdKTtcclxuICAgIC8vaW52ZW50LmFkZEl0ZW0oaXRlbXNbXCIwLjAuMS0wMDNcIl0pO1xyXG59XHJcblxyXG4vLyBjaGF0IGd1aVxyXG5mdW5jdGlvbiBvcGVuQ2hhdEdVSShjb252ZXJzYXRpb246IENvbnZlcnNhdGlvbikge1xyXG4gICAgY29uc3QgaHRtbCA9IGBcclxuICAgIDxkaXYgaWQ9XCJjaGF0cGFuZWxcIj5cclxuICAgICAgICA8aW1nIGNsYXNzPVwicGxheWVyY2hhdGhlYWRcIiBzcmM9XCJyZXMvaW1hZ2VzL3BsYXllcl9oZWFkLnBuZ1wiPjwvaW1nPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNoYXRtc2dcIj5EbyBJIGtub3cgeW91PzwvbGFiZWw+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNoYXRvcHRpb25cIj5Obywgd2UgaGF2ZW4ndCBtZXQ8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2hhdG9wdGlvblwiPlllYWgsIHlvdSBoYXZlIG15IHdyZW5jaDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJjaGF0b3B0aW9uXCI+QmFjazwvYnV0dG9uPlxyXG4gICAgPC9kaXY+YDtcclxuXHJcbiAgICBpZihjb252ZXJzYXRpb24gIT0gbnVsbCkge1xyXG4gICAgICAgIGxldCBjaGF0cGFuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXRwYW5lbFwiKTtcclxuICAgICAgICBpZihjaGF0cGFuZWwgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAvLyByZW1vdmUgdGhlIGNoYXQgcGFuZWwgaWYgaXQgYWxyZWFkeSBleGlzdHNcclxuICAgICAgICAgICAgY2hhdHBhbmVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hhdHBhbmVsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNoYXRwYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY2hhdHBhbmVsLmlkID0gXCJjaGF0cGFuZWxcIjtcclxuICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShjaGF0cGFuZWwsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW52ZW50XCIpKTtcclxuXHJcbiAgICAgICAgbGV0IGQgPSBjb252ZXJzYXRpb24uZ2V0Rmlyc3REaWFsb2coKTtcclxuICAgICAgICBpZihkICE9IG51bGwpIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBndWkgY29udHJvbFxyXG5mdW5jdGlvbiBpbml0R1VJQ29udHJvbGxlcnMoKSB7XHJcbiAgICAvLyBnZXQgYWxsIG9mIHRoZSBpdGVtIHNsb3QgaHRtbCBidXR0b25zXHJcbiAgICBpdGVtc2xvdGJ0bnMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zbG90MVwiKSk7XHJcbiAgICBpdGVtc2xvdGJ0bnMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zbG90MlwiKSk7XHJcbiAgICBpdGVtc2xvdGJ0bnMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zbG90M1wiKSk7XHJcbiAgICBpdGVtc2xvdGJ0bnMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zbG90NFwiKSk7XHJcbiAgICBpdGVtc2xvdGJ0bnMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zbG90NVwiKSk7XHJcbiAgICBpdGVtc2xvdGJ0bnMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zbG90NlwiKSk7XHJcbiAgICBpdGVtc2xvdGJ0bnMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zbG90N1wiKSk7XHJcbiAgICBpdGVtc2xvdGJ0bnMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zbG90OFwiKSk7XHJcbiAgICBpdGVtc2xvdGJ0bnMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zbG90OVwiKSk7XHJcblxyXG4gICAgLy8gYWRkIGEgYnV0dG9uIGZvciBlYWNoIGl0ZW0gaW4gdGhlIHBsYXllcidzIGludmVudG9yeVxyXG4gICAgZm9yKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaW52ZW50LmdldEl0ZW1zKCkubGVuZ3RoOyBpbmRleCArKykge1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBpbnZlbnQuZ2V0SXRlbXMoKVtpbmRleF07XHJcbiAgICAgICAgaWYoaXRlbSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIC8vIGFkZCBhIGJ1dHRvbiBmb3IgZWFjaCBpdGVtIGluIHRoZSBwbGF5ZXIncyBpbnZlbnRvcnlcclxuICAgICAgICAgICAgYWRkTmV3SXRlbUJ1dHRvbihpbmRleCwgaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvcihsZXQgaW5kZXggPSAwOyBpbmRleCA8IGl0ZW1zbG90YnRucy5sZW5ndGg7IGluZGV4ICsrKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zbG90YnRuID0gaXRlbXNsb3RidG5zW2luZGV4XTtcclxuICAgICAgICBpdGVtc2xvdGJ0bi5vbmNsaWNrID0gKGV2dDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBvbkl0ZW1TbG90Q2xpY2soaXRlbXNsb3RidG4sIGluZGV4LCBldnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkTmV3SXRlbUJ1dHRvbihpdGVtc2xvdEluZGV4OiBudW1iZXIsIGl0ZW06IEl0ZW0pXHJcbntcclxuICAgIC8vIGFkZCBhIGJ1dHRvbiBmb3IgdGhlIGl0ZW1cclxuICAgIGxldCBpdGVtYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGl0ZW1idG4uY2xhc3NMaXN0LmFkZChcIml0ZW1cIik7XHJcbiAgICBpdGVtYnRuLnN0eWxlLmNzc1RleHQgPSBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7aXRlbS5nZXRJbWFnZVBhdGgoKX0pO2A7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnZlbnRcIikuaW5zZXJ0QmVmb3JlKGl0ZW1idG4sIGl0ZW1zbG90YnRuc1tpdGVtc2xvdEluZGV4XSk7XHJcblxyXG4gICAgLy8gYWRkIGEgbW91c2UgY2xpY2sgY2FsbGJhY2sgdG8gdGhlIG5ldyBlbGVtZW50XHJcbiAgICBpdGVtYnRuLm9ubW91c2Vkb3duID0gKGV2dDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgIG9uSXRlbUNsaWNrKGl0ZW1idG4sIGl0ZW0sIGV2dCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZnJlc2hBbGxJdGVtc0Rpc3BsYXllZCgpXHJcbntcclxuICAgIC8vIGZpcnN0LCByZW1vdmUgYWxsIGl0ZW0gYnV0dG9ucyBmcm9tIHRoZSBkb21cclxuICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIml0ZW1cIik7XHJcbiAgICBmb3IobGV0IGluZGV4ID0gMDsgaW5kZXggPCBlbGVtcy5sZW5ndGg7IGluZGV4ICsrKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gZWxlbXNbaW5kZXhdO1xyXG4gICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhZGQgYSBidXR0b24gZm9yIGVhY2ggaXRlbSBpbiB0aGUgcGxheWVyJ3MgaW52ZW50b3J5XHJcbiAgICBmb3IobGV0IGluZGV4ID0gMDsgaW5kZXggPCBpbnZlbnQuZ2V0SXRlbXMoKS5sZW5ndGg7IGluZGV4ICsrKSB7XHJcbiAgICAgICAgY29uc3QgaXRlbSA9IGludmVudC5nZXRJdGVtcygpW2luZGV4XTtcclxuICAgICAgICBpZihpdGVtICE9IG51bGwpIHtcclxuICAgICAgICAgICAgLy8gYWRkIGEgYnV0dG9uIGZvciBlYWNoIGl0ZW0gaW4gdGhlIHBsYXllcidzIGludmVudG9yeVxyXG4gICAgICAgICAgICBhZGROZXdJdGVtQnV0dG9uKGluZGV4LCBpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZnJlc2hJdGVtRGlzcGxheWVkKGl0ZW1idG46IEhUTUxCdXR0b25FbGVtZW50LCBpdGVtOiBJdGVtKVxyXG57XHJcbiAgICBpZihpdGVtICE9IG51bGwpIHtcclxuICAgICAgICAvLyBjaGFuZ2UgdGhlIGltYWdlIGRpc3BsYXllZCBvbiB0aGUgaXRlbSBidXR0b25cclxuICAgICAgICBpdGVtYnRuLnN0eWxlLmNzc1RleHQgPSBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7aXRlbS5nZXRJbWFnZVBhdGgoKX0pO2A7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIHJlbW92ZSB0aGUgaXRlbSBidXR0b24gZnJvbSB0aGUgZG9tXHJcbiAgICAgICAgaXRlbWJ0bi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGl0ZW1idG4pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBvbkl0ZW1TbG90Q2xpY2soaXRlbXNsb3RidG46IEhUTUxCdXR0b25FbGVtZW50LCBpdGVtc2xvdEluZGV4OiBudW1iZXIsIGV2dDogTW91c2VFdmVudClcclxue1xyXG4gICAgLy8gbW92ZSBzZWxlY3RlZCBpdGVtIHRvIHRoaXMgc2xvdFxyXG4gICAgaWYoc2VsZWN0ZWRJdGVtICE9IG51bGwgJiYgc2VsZWN0ZWRJdGVtQnRuICE9IG51bGwpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gcmVtb3ZlIGZyb20gcHJldmlvdXMgaXRlbXNsb3QgYW5kIGFkZCB0byBuZXcgaXRlbXNsb3RcclxuICAgICAgICBzZWxlY3RlZEl0ZW1CdG4uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkaXRlbVwiKTtcclxuICAgICAgICByZWZyZXNoSXRlbURpc3BsYXllZChzZWxlY3RlZEl0ZW1CdG4sIG51bGwpO1xyXG4gICAgICAgIGFkZE5ld0l0ZW1CdXR0b24oaXRlbXNsb3RJbmRleCwgc2VsZWN0ZWRJdGVtKTtcclxuICAgICAgICBpbnZlbnQubW92ZUl0ZW0oc2VsZWN0ZWRJdGVtLCBpdGVtc2xvdEluZGV4KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhpbnZlbnQuZ2V0SXRlbXMoKSk7XHJcbiAgICAgICAgc2VsZWN0ZWRJdGVtID0gbnVsbDtcclxuICAgICAgICBzZWxlY3RlZEl0ZW1CdG4gPSBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBvbkl0ZW1DbGljayhpdGVtYnRuOiBIVE1MQnV0dG9uRWxlbWVudCwgaXRlbTogSXRlbSwgZXZ0OiBNb3VzZUV2ZW50KVxyXG57XHJcbiAgICBpZihldnQuYnV0dG9uID09PSAwKSB7ICAvLyBsZWZ0IGNsaWNrXHJcbiAgICAgICAgLy8gY29tYmluZSAyIGl0ZW1zLCAoY2FuJ3QgY29tYmluZSBpdGVtIHdpdGggaXRzZWxmKVxyXG4gICAgICAgIGlmKHNlbGVjdGVkSXRlbSAhPSBudWxsICYmIHNlbGVjdGVkSXRlbUJ0biAhPSBudWxsICYmIGl0ZW0gIT09IHNlbGVjdGVkSXRlbSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IG91dEl0ZW1zID0gc2VsZWN0ZWRJdGVtLmNvbWJpbmUoaXRlbSk7XHJcbiAgICAgICAgICAgIGlmKG91dEl0ZW1zICE9IG51bGwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlZnJlc2hJdGVtRGlzcGxheWVkKHNlbGVjdGVkSXRlbUJ0biwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICByZWZyZXNoSXRlbURpc3BsYXllZChpdGVtYnRuLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIGludmVudC5yZW1vdmVJdGVtKHNlbGVjdGVkSXRlbSk7XHJcbiAgICAgICAgICAgICAgICBpbnZlbnQucmVtb3ZlSXRlbShpdGVtKTtcclxuICAgICAgICAgICAgICAgIGZvcihjb25zdCBvdXRJdGVtIG9mIG91dEl0ZW1zKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGludmVudC5hZGRJdGVtKG91dEl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbUJ0biA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbnZlbnQuZ2V0SXRlbXMoKSk7XHJcbiAgICAgICAgICAgICAgICByZWZyZXNoQWxsSXRlbXNEaXNwbGF5ZWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRpdGVtXCIpO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbUJ0biA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc2VsZWN0IGFuIGl0ZW1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihpdGVtID09PSBzZWxlY3RlZEl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRpdGVtXCIpO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbUJ0biA9IG51bGw7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW0gPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtQnRuID0gaXRlbWJ0bjtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbUJ0bi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRpdGVtXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmKGV2dC5idXR0b24gPT09IDIpIHsgICAvLyByaWdodCBjbGlja1xyXG4gICAgICAgIHBsYXllclNwcml0ZS5vcGVuU3BlZWNoQnViYmxlKGl0ZW0uZ2V0RXhhbWluZVRleHQoKSk7XHJcbiAgICAgICAgaWYoaXRlbS5nZXRFeGFtaW5lQXVkaW8oKSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uZ2V0RXhhbWluZUF1ZGlvKCkucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvL2RlY2xhcmUgUHJvbWlzZSBhbnk7XHJcblxyXG5leHBvcnQgY2xhc3MgSW1hZ2VMb2FkZXJcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBsb2FkSW1hZ2UocGF0aDogc3RyaW5nKTogUHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50PlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICBpbWcuc3JjID0gcGF0aDtcclxuICAgICAgICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoaW1nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbWcub25lcnJvciA9IChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBKU09OTG9hZGVyXHJcbntcclxuICAgIHN0YXRpYyBsb2FkSlNPTkZpbGUocGF0aDogc3RyaW5nKTogUHJvbWlzZTxhbnk+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZih4aHIucmVhZHlTdGF0ZSA9PT0gWE1MSHR0cFJlcXVlc3QuRE9ORSAmJiB4aHIuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvYmogPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUob2JqKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih4aHIucmVhZHlTdGF0ZSA9PT0gWE1MSHR0cFJlcXVlc3QuRE9ORSAmJiB4aHIuc3RhdHVzICE9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh4aHIuc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh4aHIuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHBhdGgpO1xyXG4gICAgICAgICAgICB4aHIub3BlbihcIkdFVFwiLCBwYXRoLCB0cnVlKTtcclxuICAgICAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge1Nwcml0ZX0gZnJvbSBcIi4vU3ByaXRlXCJcclxuaW1wb3J0IHtTcHJpdGVBbmltYXRpb259IGZyb20gXCIuL1Nwcml0ZUFuaW1hdGlvblwiXHJcblxyXG5leHBvcnQgY2xhc3MgQW5pbWF0ZWRTcHJpdGUgZXh0ZW5kcyBTcHJpdGVcclxue1xyXG4gICAgcHJvdGVjdGVkIHNwcml0ZUFuaW1hdGlvbnM6IEFycmF5PFNwcml0ZUFuaW1hdGlvbj4gPSBbXTtcclxuICAgIHByb3RlY3RlZCBjdXJyZW50QW5pbWF0aW9uID0gLTE7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBzY2FsZTogbnVtYmVyLCBvcmlnaW5Ib3Jpem9udGFsOiBzdHJpbmcsIG9yaWdpblZlcnRpY2FsOiBzdHJpbmcsIGFuaW1zOiBBcnJheTxTcHJpdGVBbmltYXRpb24+KSB7XHJcbiAgICAgICAgc3VwZXIoeCwgeSwgc2NhbGUsIG9yaWdpbkhvcml6b250YWwsIG9yaWdpblZlcnRpY2FsKTtcclxuICAgICAgICBpZihhbmltcyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlQW5pbWF0aW9ucyA9IGFuaW1zO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdyhjdXJyZW50VGltZTogbnVtYmVyLCBkZWx0YVRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmKHRoaXMuY3VycmVudEFuaW1hdGlvbiA+PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFuaW0gPSB0aGlzLnNwcml0ZUFuaW1hdGlvbnNbdGhpcy5jdXJyZW50QW5pbWF0aW9uXTtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoT3JpZ2luKGFuaW0uZ2V0Q3VycmVudEZyYW1lKCkudywgYW5pbS5nZXRDdXJyZW50RnJhbWUoKS5oKTtcclxuICAgICAgICAgICAgYW5pbS5kcmF3KGN1cnJlbnRUaW1lLCB0aGlzLm9yaWdpblgsIHRoaXMub3JpZ2luWSwgdGhpcy5zY2FsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRDdXJyZW50QW5pbWF0aW9uID0gKG5ld0FuaW1hdGlvbkluZGV4OiBudW1iZXIpOiB2b2lkID0+IHtcclxuICAgICAgICBpZihuZXdBbmltYXRpb25JbmRleCA8IHRoaXMuc3ByaXRlQW5pbWF0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uID0gbmV3QW5pbWF0aW9uSW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRTcHJpdGVBbmltYXRpb24gPSAoYW5pbSk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGlmKGFuaW0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZUFuaW1hdGlvbnMucHVzaChhbmltKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFNwcml0ZUFuaW1hdGlvbnMgPSAoYW5pbXM6IEFycmF5PFNwcml0ZUFuaW1hdGlvbj4pOiB2b2lkID0+IHtcclxuICAgICAgICBpZihhbmltcyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlQW5pbWF0aW9ucyA9IGFuaW1zO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24gPSAtMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFBvcyh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge2N0eH0gZnJvbSBcIi4uL2dsb2IudHNcIlxyXG5pbXBvcnQge1Nwcml0ZUFuaW1hdGlvbn0gZnJvbSBcIi4vU3ByaXRlQW5pbWF0aW9uXCJcclxuaW1wb3J0IHtTdGF0aWNTcHJpdGV9IGZyb20gXCIuL1N0YXRpY1Nwcml0ZVwiXHJcbmltcG9ydCB7SW50ZXJhY3Rpb259IGZyb20gXCIuLi9nYW1lL0ludGVyYWN0aW9uXCJcclxuaW1wb3J0IHtUZXh0dXJlQXRsYXN9IGZyb20gXCIuL1RleHR1cmVBdGxhc1wiXHJcbmltcG9ydCB7SXRlbX0gZnJvbSBcIi4uL2l0ZW1zL0l0ZW1cIlxyXG5pbXBvcnQge0NpcmNsZX0gZnJvbSBcIi4uL2NvbGxpc2lvbi9DaXJjbGVcIlxyXG5pbXBvcnQge1JlY3RhbmdsZX0gZnJvbSBcIi4uL2NvbGxpc2lvbi9SZWN0YW5nbGVcIlxyXG5cclxuZXhwb3J0IGNsYXNzIEludGVyYWN0YWJsZVNwcml0ZSBleHRlbmRzIFN0YXRpY1Nwcml0ZVxyXG57XHJcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgc2NhbGU6IG51bWJlciwgb3JpZ2luSG9yaXpvbnRhbDogc3RyaW5nLCBvcmlnaW5WZXJ0aWNhbDogc3RyaW5nLCBhdGxhczogVGV4dHVyZUF0bGFzLCBpbWFnZU5hbWU6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgIHByb3RlY3RlZCBleGFtaW5lVGV4dDogc3RyaW5nLCBwcm90ZWN0ZWQgZXhhbWluZUF1ZGlvOiBIVE1MQXVkaW9FbGVtZW50LCBwcm90ZWN0ZWQgaW50ZXJhY3Rpb25ab25lOiBDaXJjbGUsIHByb3RlY3RlZCBjbGlja1pvbmU6IFJlY3RhbmdsZSwgcHJvdGVjdGVkIGludGVyYWN0aW9uczogQXJyYXk8SW50ZXJhY3Rpb24+KVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKHgsIHksIHNjYWxlLCBvcmlnaW5Ib3Jpem9udGFsLCBvcmlnaW5WZXJ0aWNhbCwgYXRsYXMsIGltYWdlTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcoY3VycmVudFRpbWU6IG51bWJlciwgZGVsdGFUaW1lOiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIuZHJhdyhjdXJyZW50VGltZSwgZGVsdGFUaW1lKTtcclxuXHJcbiAgICAgICAgLy8gREVCVUcgLSBkcmF3IHRoZSBjaXJjbGUgYW5kIHJlY3RhbmdsZVxyXG4gICAgICAgIHRoaXMuY2xpY2tab25lLmRyYXcoKTtcclxuICAgICAgICB0aGlzLmludGVyYWN0aW9uWm9uZS5kcmF3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluSW50ZXJhY3Rpb25ab25lKHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmludGVyYWN0aW9uWm9uZS5jb250YWlucyh4LCB5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5DbGlja1pvbmUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpY2tab25lLmNvbnRhaW5zKHgsIHkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGludGVyYWN0IHdpdGggdGhlIHNwcml0ZVxyXG4gICAgLy8gaXRlbSBjYW4gYmUgbnVsbFxyXG4gICAgcHVibGljIGludGVyYWN0KGl0ZW06IEl0ZW0pOiB7dGV4dDogc3RyaW5nLCBpdGVtczogQXJyYXk8SXRlbT59XHJcbiAgICB7XHJcbiAgICAgICAgZm9yKGNvbnN0IGludGVyIG9mIHRoaXMuaW50ZXJhY3Rpb25zKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gaWYgdGhlIGl0ZW1zIG1hdGNoLCB0aGVuIGludGVyYWN0IHdpdGggdGhlIG9iamVjdFxyXG4gICAgICAgICAgICBpZihpbnRlci5nZXRJdGVtKCkgPT0gaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG9iaiA9IGludGVyLmludGVyYWN0KGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgaWYob2JqICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIGludGVyYWN0aW9uIGlmIGl0IGhhcyBiZWVuIGZ1bGZpbGxlZFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJhY3Rpb25zLnNwbGljZSh0aGlzLmludGVyYWN0aW9ucy5pbmRleE9mKGludGVyKSwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RXhhbWluZVRleHQoKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhhbWluZVRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEV4YW1pbmVBdWRpbygpOiBIVE1MQXVkaW9FbGVtZW50XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhhbWluZUF1ZGlvO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7Y3R4fSBmcm9tIFwiLi4vZ2xvYi50c1wiXHJcbmltcG9ydCB7TmF2U3ByaXRlfSBmcm9tIFwiLi9OYXZTcHJpdGVcIlxyXG5pbXBvcnQge1BvaW50fSBmcm9tIFwiLi4vY29sbGlzaW9uL1BvaW50XCJcclxuaW1wb3J0IHtBbmltYXRlZFNwcml0ZX0gZnJvbSBcIi4vQW5pbWF0ZWRTcHJpdGVcIlxyXG5pbXBvcnQge1Nwcml0ZUFuaW1hdGlvbn0gZnJvbSBcIi4vU3ByaXRlQW5pbWF0aW9uXCJcclxuaW1wb3J0IHtDb252ZXJzYXRpb259IGZyb20gXCIuLi9jaGF0L0NvbnZlcnNhdGlvblwiXHJcbmltcG9ydCB7Q2lyY2xlfSBmcm9tIFwiLi4vY29sbGlzaW9uL0NpcmNsZVwiXHJcbmltcG9ydCB7UmVjdGFuZ2xlfSBmcm9tIFwiLi4vY29sbGlzaW9uL1JlY3RhbmdsZVwiXHJcblxyXG5leHBvcnQgY2xhc3MgTlBDU3ByaXRlIGV4dGVuZHMgTmF2U3ByaXRlXHJcbntcclxuICAgIHByaXZhdGUgc3BlZWNoQnViYmxlT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBzcGVlY2hCdWJibGVTaG93bkF0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHNwZWVjaEJ1YmJsZVRleHQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgdGV4dFdpZHRoOiBudW1iZXI7ICAvLyB3aWR0aCBvZiB0aGUgdGV4dCBpbiBwaXhlbHNcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgQkFTRV9GT05UX1NJWkUgPSA3NTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHNjYWxlOiBudW1iZXIsIG9yaWdpbkhvcml6b250YWw6IHN0cmluZywgb3JpZ2luVmVydGljYWw6IHN0cmluZywgYW5pbXM6IEFycmF5PFNwcml0ZUFuaW1hdGlvbj4sXHJcbiAgICAgICAgICAgICAgICBwcm90ZWN0ZWQgZXhhbWluZVRleHQ6IHN0cmluZywgcHJvdGVjdGVkIGludGVyYWN0aW9uWm9uZTogQ2lyY2xlLCBwcm90ZWN0ZWQgY2xpY2tab25lOiBSZWN0YW5nbGUsIHByb3RlY3RlZCBjb252ZXJzYXRpb246IENvbnZlcnNhdGlvbiwgbW92ZVNwZWVkOiBudW1iZXIgPSAwLjUpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoeCwgeSwgc2NhbGUsIG9yaWdpbkhvcml6b250YWwsIG9yaWdpblZlcnRpY2FsLCBhbmltcywgbW92ZVNwZWVkKTtcclxuICAgICAgICB0aGlzLnNldEN1cnJlbnRBbmltYXRpb24oMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcoY3VycmVudFRpbWU6IG51bWJlciwgZGVsdGFUaW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5kcmF3KGN1cnJlbnRUaW1lLCBkZWx0YVRpbWUpO1xyXG5cclxuICAgICAgICBpZih0aGlzLnNwZWVjaEJ1YmJsZU9wZW4pIHtcclxuICAgICAgICAgICAgLy8gZHJhdyB0aGUgc3BlZWNoIGJ1YmJsZVxyXG4gICAgICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgICAgICBjdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy5vcmlnaW5ZKTtcclxuICAgICAgICAgICAgY3R4LnNjYWxlKHRoaXMuc2NhbGUsIHRoaXMuc2NhbGUpO1xyXG4gICAgICAgICAgICBjdHguc2hhZG93Q29sb3IgPSBcIiM1NTU1NTVcIjtcclxuICAgICAgICAgICAgY3R4LnNoYWRvd0JsdXIgPSA1O1xyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjMUFGRjgwXCI7ICAgLy8gZ3JlZW46ICMxQUZGODAsIGFtYmVyOiAjRkZCNjQyLCBibHVlOiAjMkVDRkZGXHJcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLnNwZWVjaEJ1YmJsZVRleHQsIC10aGlzLnRleHRXaWR0aC8yLCAwKTtcclxuICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHNwZWVjaCBidWJibGUgbGFzdHMgMS8yIHNlY29uZCBmb3IgZWFjaCB3b3JkXHJcbiAgICAgICAgICAgIGlmKGN1cnJlbnRUaW1lIC0gdGhpcy5zcGVlY2hCdWJibGVTaG93bkF0ID49IHRoaXMuc3BlZWNoQnViYmxlVGV4dC5zcGxpdChcIiBcIikubGVuZ3RoICogNTAwICsgNTAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVjaEJ1YmJsZU9wZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gREVCVUcgLSBkcmF3IHRoZSBjaXJjbGUgYW5kIHJlY3RhbmdsZVxyXG4gICAgICAgIHRoaXMuY2xpY2tab25lLmRyYXcoKTtcclxuICAgICAgICB0aGlzLmludGVyYWN0aW9uWm9uZS5kcmF3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9wZW5TcGVlY2hCdWJibGUodGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYodGV4dCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWNoQnViYmxlT3BlbiA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWNoQnViYmxlVGV4dCA9IHRleHQ7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWNoQnViYmxlU2hvd25BdCA9IERhdGUubm93KCk7XHJcblxyXG4gICAgICAgICAgICBjdHguZm9udCA9IGAke3RoaXMuQkFTRV9GT05UX1NJWkV9cHggQm9va21hbmA7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dFdpZHRoID0gY3R4Lm1lYXN1cmVUZXh0KHRleHQpLndpZHRoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5JbnRlcmFjdGlvblpvbmUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJhY3Rpb25ab25lLmNvbnRhaW5zKHgsIHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbkNsaWNrWm9uZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jbGlja1pvbmUuY29udGFpbnMoeCwgeSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEV4YW1pbmVUZXh0KCk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmV4YW1pbmVUZXh0O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7QW5pbWF0ZWRTcHJpdGV9IGZyb20gXCIuL0FuaW1hdGVkU3ByaXRlXCJcclxuaW1wb3J0IHtTcHJpdGVBbmltYXRpb259IGZyb20gXCIuL1Nwcml0ZUFuaW1hdGlvblwiXHJcbmltcG9ydCB7UG9pbnR9IGZyb20gXCIuLi9jb2xsaXNpb24vUG9pbnRcIlxyXG5cclxuZXhwb3J0IGNsYXNzIE5hdlNwcml0ZSBleHRlbmRzIEFuaW1hdGVkU3ByaXRlXHJcbntcclxuICAgIHByaXZhdGUgd2F5cG9pbnRzOiBBcnJheTxQb2ludD47XHJcbiAgICBwcml2YXRlIG5leHRXYXlwb2ludDogUG9pbnQ7XHJcbiAgICBwcml2YXRlIG1vdmVTcGVlZDogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgZGVwdGhTY2FsZVk6IG51bWJlcjtcclxuICAgIHByaXZhdGUgc3RhcnRYOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHN0YXJ0WTogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgc2NhbGU6IG51bWJlciwgb3JpZ2luSG9yaXpvbnRhbDogc3RyaW5nLCBvcmlnaW5WZXJ0aWNhbDogc3RyaW5nLCBhbmltczogQXJyYXk8U3ByaXRlQW5pbWF0aW9uPiwgbW92ZVNwZWVkOiBudW1iZXIgPSAwLjUpIHtcclxuICAgICAgICBzdXBlcih4LCB5LCBzY2FsZSwgb3JpZ2luSG9yaXpvbnRhbCwgb3JpZ2luVmVydGljYWwsIGFuaW1zKTtcclxuICAgICAgICB0aGlzLm1vdmVTcGVlZCA9IG1vdmVTcGVlZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdyhjdXJyZW50VGltZTogbnVtYmVyLCBkZWx0YVRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIC8vIG1vdmUgdG93YXJkcyB0aGUgbmV4dCB3YXlwb2ludFxyXG4gICAgICAgIGlmKHRoaXMubmV4dFdheXBvaW50ICE9IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbihNYXRoLmFicyh0aGlzLm5leHRXYXlwb2ludC55IC0gdGhpcy55KSAvIE1hdGguYWJzKHRoaXMubmV4dFdheXBvaW50LnggLSB0aGlzLngpKTtcclxuICAgICAgICAgICAgY29uc3QgbW92ZVNwZWVkWCA9IHRoaXMubW92ZVNwZWVkICogZGVsdGFUaW1lICogTWF0aC5jb3MoYW5nbGUpICogdGhpcy5zY2FsZTtcclxuICAgICAgICAgICAgY29uc3QgbW92ZVNwZWVkWSA9IHRoaXMubW92ZVNwZWVkICogZGVsdGFUaW1lICogTWF0aC5zaW4oYW5nbGUpICogdGhpcy5zY2FsZTtcclxuXHJcbiAgICAgICAgICAgIC8vIGlmIHRoZSBzcHJpdGUgaGFzIHJlYWNoZWQgdGhlIHdheXBvaW50IChvciB0aGVyZWFib3V0cykgdGhlbiBnZXQgdGhlIG5leHQgd2F5cG9pbnRcclxuICAgICAgICAgICAgaWYodGhpcy54ID49IHRoaXMubmV4dFdheXBvaW50LnggLSA1ICYmIHRoaXMueCA8PSB0aGlzLm5leHRXYXlwb2ludC54ICsgNSAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy55ID49IHRoaXMubmV4dFdheXBvaW50LnkgLSA1ICYmIHRoaXMueSA8PSB0aGlzLm5leHRXYXlwb2ludC55ICsgNSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImFycml2ZWRcIiwgdGhpcy54LCB0aGlzLnkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy54ID0gdGhpcy5uZXh0V2F5cG9pbnQueDtcclxuICAgICAgICAgICAgICAgIHRoaXMueSA9IHRoaXMubmV4dFdheXBvaW50Lnk7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLndheXBvaW50cyAhPSBudWxsICYmIHRoaXMud2F5cG9pbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHRXYXlwb2ludCA9IHRoaXMud2F5cG9pbnRzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHRXYXlwb2ludCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIG1vdmUgdG93YXJkcyB0aGUgbmV4dCB3YXlwb2ludFxyXG4gICAgICAgICAgICBpZih0aGlzLm5leHRXYXlwb2ludCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnggPCB0aGlzLm5leHRXYXlwb2ludC54IC0gNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCArPSBtb3ZlU3BlZWRYO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMueCA+IHRoaXMubmV4dFdheXBvaW50LnggKyA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54IC09IG1vdmVTcGVlZFg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy55IDwgdGhpcy5uZXh0V2F5cG9pbnQueSAtIDUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnkgKz0gbW92ZVNwZWVkWTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLnkgPiB0aGlzLm5leHRXYXlwb2ludC55ICsgNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueSAtPSBtb3ZlU3BlZWRZO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHNjYWxlIHRoZSBwbGF5ZXIgYmFzZWQgb24gdGhlIGRlcHRoIG9mIHRoZSBtb3VzZSBwb3NpdGlvblxyXG4gICAgICAgIHRoaXMuc2NhbGUgPSB0aGlzLmJhc2VTY2FsZSAqIHRoaXMuZGVwdGhTY2FsZVkgKiogKHRoaXMuc3RhcnRZIC0gdGhpcy55KTtcclxuXHJcbiAgICAgICAgc3VwZXIuZHJhdyhjdXJyZW50VGltZSwgZGVsdGFUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0V2F5cG9pbnRzKHdheXBvaW50czogQXJyYXk8UG9pbnQ+KSB7XHJcbiAgICAgICAgdGhpcy53YXlwb2ludHMgPSB3YXlwb2ludHM7XHJcbiAgICAgICAgdGhpcy5uZXh0V2F5cG9pbnQgPSBudWxsO1xyXG4gICAgICAgIGlmKHRoaXMud2F5cG9pbnRzICE9IG51bGwgJiYgdGhpcy53YXlwb2ludHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLndheXBvaW50cyk7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dFdheXBvaW50ID0gdGhpcy53YXlwb2ludHMucG9wKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibmV4dDogXCIgKyB0aGlzLm5leHRXYXlwb2ludC54ICsgXCIsIFwiICsgdGhpcy5uZXh0V2F5cG9pbnQueSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldERlcHRoU2NhbGUoZGVwdGhTY2FsZVk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZGVwdGhTY2FsZVkgPSBkZXB0aFNjYWxlWTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0U3RhcnRQb3MoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0WCA9IHg7XHJcbiAgICAgICAgdGhpcy5zdGFydFkgPSB5O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7Y3R4fSBmcm9tIFwiLi4vZ2xvYi50c1wiXHJcbmltcG9ydCB7TmF2U3ByaXRlfSBmcm9tIFwiLi9OYXZTcHJpdGVcIlxyXG5pbXBvcnQge1BvaW50fSBmcm9tIFwiLi4vY29sbGlzaW9uL1BvaW50XCJcclxuaW1wb3J0IHtBbmltYXRlZFNwcml0ZX0gZnJvbSBcIi4vQW5pbWF0ZWRTcHJpdGVcIlxyXG5pbXBvcnQge1Nwcml0ZUFuaW1hdGlvbn0gZnJvbSBcIi4vU3ByaXRlQW5pbWF0aW9uXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJTcHJpdGUgZXh0ZW5kcyBOYXZTcHJpdGVcclxue1xyXG4gICAgcHJpdmF0ZSBzcGVlY2hCdWJibGVJbWFnZTogSFRNTEltYWdlRWxlbWVudDtcclxuICAgIHByaXZhdGUgc3BlZWNoQnViYmxlT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBzcGVlY2hCdWJibGVTaG93bkF0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHNwZWVjaEJ1YmJsZVRleHQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgdGV4dFdpZHRoOiBudW1iZXI7ICAvLyB3aWR0aCBvZiB0aGUgdGV4dCBpbiBwaXhlbHNcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgQkFTRV9GT05UX1NJWkUgPSA3NTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHNjYWxlOiBudW1iZXIsIG9yaWdpbkhvcml6b250YWw6IHN0cmluZywgb3JpZ2luVmVydGljYWw6IHN0cmluZywgYW5pbXM6IEFycmF5PFNwcml0ZUFuaW1hdGlvbj4sIG1vdmVTcGVlZDogbnVtYmVyID0gMC41KVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKHgsIHksIHNjYWxlLCBvcmlnaW5Ib3Jpem9udGFsLCBvcmlnaW5WZXJ0aWNhbCwgYW5pbXMsIG1vdmVTcGVlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcoY3VycmVudFRpbWU6IG51bWJlciwgZGVsdGFUaW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5kcmF3KGN1cnJlbnRUaW1lLCBkZWx0YVRpbWUpO1xyXG5cclxuICAgICAgICBpZih0aGlzLnNwZWVjaEJ1YmJsZU9wZW4pIHtcclxuICAgICAgICAgICAgLy8gZHJhdyB0aGUgc3BlZWNoIGJ1YmJsZVxyXG4gICAgICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgICAgICBjdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy5vcmlnaW5ZKTtcclxuICAgICAgICAgICAgLy9jdHguZHJhd0ltYWdlKHRoaXMuc3BlZWNoQnViYmxlSW1hZ2UsIC10aGlzLnNwZWVjaEJ1YmJsZUltYWdlLndpZHRoLzIgKiB0aGlzLnNjYWxlLCAtdGhpcy5zcGVlY2hCdWJibGVJbWFnZS5oZWlnaHQvMiAqIHRoaXMuc2NhbGUsIHRoaXMuc3BlZWNoQnViYmxlSW1hZ2Uud2lkdGggKiB0aGlzLnNjYWxlLCB0aGlzLnNwZWVjaEJ1YmJsZUltYWdlLmhlaWdodCAqIHRoaXMuc2NhbGUpO1xyXG4gICAgICAgICAgICBjdHguc2NhbGUodGhpcy5zY2FsZSwgdGhpcy5zY2FsZSk7XHJcbiAgICAgICAgICAgIGN0eC5zaGFkb3dDb2xvciA9IFwiIzU1NTU1NVwiO1xyXG4gICAgICAgICAgICBjdHguc2hhZG93Qmx1ciA9IDU7XHJcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiMxQUZGODBcIjsgICAvLyBncmVlbjogIzFBRkY4MCwgYW1iZXI6ICNGRkI2NDIsIGJsdWU6ICMyRUNGRkZcclxuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMuc3BlZWNoQnViYmxlVGV4dCwgLXRoaXMudGV4dFdpZHRoLzIsIDApO1xyXG4gICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gc3BlZWNoIGJ1YmJsZSBsYXN0cyAxLzIgc2Vjb25kIGZvciBlYWNoIHdvcmRcclxuICAgICAgICAgICAgaWYoY3VycmVudFRpbWUgLSB0aGlzLnNwZWVjaEJ1YmJsZVNob3duQXQgPj0gdGhpcy5zcGVlY2hCdWJibGVUZXh0LnNwbGl0KFwiIFwiKS5sZW5ndGggKiA1MDAgKyA1MDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWNoQnViYmxlT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvcGVuU3BlZWNoQnViYmxlKHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgIGlmKHRleHQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVjaEJ1YmJsZU9wZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVjaEJ1YmJsZVRleHQgPSB0ZXh0O1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVjaEJ1YmJsZVNob3duQXQgPSBEYXRlLm5vdygpO1xyXG5cclxuICAgICAgICAgICAgY3R4LmZvbnQgPSBgJHt0aGlzLkJBU0VfRk9OVF9TSVpFfXB4IEJvb2ttYW5gO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRXaWR0aCA9IGN0eC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aDtcclxuXHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIGRpdiBjb250YWluaW5nIHRoZSB0ZXh0IHNvIHRoZSBwaXhlbCB3aWR0aCBvZiB0ZXh0IGNhbiBiZSBjYWxjdWxhdGVkXHJcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzExODI0MS9jYWxjdWxhdGUtdGV4dC13aWR0aC13aXRoLWphdmFzY3JpcHRcclxuICAgICAgICAgICAgLypsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgZGl2LnN0eWxlLmNzc1RleHQgPSBgcG9zaXRpb246IGFic29sdXRlOyB2aXNpYmlsaXR5OiBoaWRkZW47IGhlaWdodDogYXV0bzsgd2lkdGg6IGF1dG87IHdoaXRlLXNwYWNlOiBub3dyYXA7IGZvbnQtc2l6ZTogJHt0aGlzLkJBU0VfRk9OVF9TSVpFfWA7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGRpdiwgbnVsbCk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dFdpZHRoID0gZGl2LmNsaWVudFdpZHRoICsgMTsqL1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRleHQgd2lkdGhcIiwgdGhpcy50ZXh0V2lkdGgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0U3BlZWNoQnViYmxlSW1hZ2UoaW1nKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc3BlZWNoQnViYmxlSW1hZ2UgPSBpbWc7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNwcml0ZVxyXG57XHJcbiAgICBwcm90ZWN0ZWQgYmFzZVNjYWxlOiBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgb3JpZ2luWDogbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIG9yaWdpblk6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgeDogbnVtYmVyLCBwcm90ZWN0ZWQgeTogbnVtYmVyLCBwcm90ZWN0ZWQgc2NhbGU6IG51bWJlciwgcHJvdGVjdGVkIG9yaWdpbkhvcml6b250YWw6IHN0cmluZywgcHJvdGVjdGVkIG9yaWdpblZlcnRpY2FsOiBzdHJpbmcsIHByb3RlY3RlZCBkZXB0aDogbnVtYmVyID0gMClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmJhc2VTY2FsZSA9IHRoaXMuc2NhbGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHJlZnJlc2hPcmlnaW4od2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIHBvc2l0aW9uIGF0IHdoaWNoIHRvIGRyYXcgdGhlIHNwcml0ZVxyXG4gICAgICAgIGlmKHRoaXMub3JpZ2luSG9yaXpvbnRhbCA9PSBcInJpZ2h0XCIpIHtcclxuICAgICAgICAgICAgdGhpcy5vcmlnaW5YID0gdGhpcy54IC0gd2lkdGggKiB0aGlzLnNjYWxlO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLm9yaWdpbkhvcml6b250YWwgPT0gXCJsZWZ0XCIpIHtcclxuICAgICAgICAgICAgdGhpcy5vcmlnaW5YID0gdGhpcy54O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub3JpZ2luWCA9IHRoaXMueCAtIHdpZHRoLzIgKiB0aGlzLnNjYWxlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBwb3NpdGlvbiBhdCB3aGljaCB0byBkcmF3IHRoZSBzcHJpdGVcclxuICAgICAgICBpZih0aGlzLm9yaWdpblZlcnRpY2FsID09IFwidG9wXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5vcmlnaW5ZID0gdGhpcy55IC0gaGVpZ2h0KiB0aGlzLnNjYWxlO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLm9yaWdpblZlcnRpY2FsID09IFwiYm90dG9tXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5vcmlnaW5ZID0gdGhpcy55O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub3JpZ2luWSA9IHRoaXMueSAtIGhlaWdodC8yICogdGhpcy5zY2FsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBkcmF3KGN1cnJlbnRUaW1lOiBudW1iZXIsIGRlbHRhVGltZTogbnVtYmVyKTogdm9pZDtcclxufVxyXG4iLCJpbXBvcnQge2N0eH0gZnJvbSBcIi4uL2dsb2IudHNcIlxyXG5pbXBvcnQge1RleHR1cmVBdGxhc30gZnJvbSAnLi9UZXh0dXJlQXRsYXMnXHJcbmltcG9ydCB7VGV4dHVyZUF0bGFzRnJhbWV9IGZyb20gXCIuL1RleHR1cmVBdGxhc0ZyYW1lXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJpdGVBbmltYXRpb25cclxue1xyXG4gICAgLy8gaHR0cDovL3d3dy50eXBlc2NyaXB0Z2FtZXMuY29tL0FuaW1hdGVkU3ByaXRlcy5odG1sXHJcbiAgICBwcm90ZWN0ZWQgY3VycmVudEZyYW1lID0gMDtcclxuICAgIHByaXZhdGUgbGFzdFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIG51bUZyYW1lczogbnVtYmVyLCBwcm90ZWN0ZWQgYXRsYXM6IFRleHR1cmVBdGxhcywgcHJvdGVjdGVkIHNlcXVlbmNlTmFtZTogc3RyaW5nKSB7fVxyXG5cclxuICAgIHB1YmxpYyBkcmF3ID0gKGN1cnJlbnRUaW1lOiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyLCBzY2FsZTogbnVtYmVyKTogdm9pZCA9PiB7XHJcbiAgICAgICAgbGV0IGZyYW1lID0gdGhpcy5nZXRDdXJyZW50RnJhbWUoKTtcclxuICAgICAgICBpZihmcmFtZS5mcmFtZUR1cmF0aW9uIDw9IGN1cnJlbnRUaW1lIC0gdGhpcy5sYXN0VGltZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEZyYW1lKys7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuY3VycmVudEZyYW1lID49IHRoaXMubnVtRnJhbWVzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRGcmFtZSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sYXN0VGltZSA9IGN1cnJlbnRUaW1lO1xyXG4gICAgICAgICAgICBmcmFtZSA9IHRoaXMuZ2V0Q3VycmVudEZyYW1lKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzcHJpdGVzIGFyZSBkcmF3biBmcm9tIHRoZWlyIGNlbnRyZS14LCBib3R0b20teSwgaS5lLiBmZWV0IHBvc2l0aW9uXHJcbiAgICAgICAgLy9sZXQgdG9wTGVmdFggPSB4IC0gZnJhbWUudy8yICogc2NhbGU7XHJcbiAgICAgICAgLy9sZXQgdG9wTGVmdFkgPSB5IC0gZnJhbWUuaCAqIHNjYWxlO1xyXG5cclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC50cmFuc2xhdGUoeCwgeSk7XHJcbiAgICAgICAgY3R4LnJlY3QoZnJhbWUueCwgZnJhbWUueSwgZnJhbWUudywgZnJhbWUuaCk7XHJcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmF0bGFzLmltYWdlLFxyXG4gICAgICAgICAgICBmcmFtZS54LCBmcmFtZS55LFxyXG4gICAgICAgICAgICBmcmFtZS53LCBmcmFtZS5oLFxyXG4gICAgICAgICAgICBmcmFtZS5vZmZzZXR4LCBmcmFtZS5vZmZzZXR5LFxyXG4gICAgICAgICAgICBmcmFtZS53ICogc2NhbGUsIGZyYW1lLmggKiBzY2FsZSk7XHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q3VycmVudEZyYW1lID0gKCk6IFRleHR1cmVBdGxhc0ZyYW1lID0+IHtcclxuICAgICAgICBpZih0aGlzLmN1cnJlbnRGcmFtZSA+IDkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hdGxhcy5mcmFtZXNbdGhpcy5zZXF1ZW5jZU5hbWUgKyBcIl9cIiArIHRoaXMuY3VycmVudEZyYW1lLnRvU3RyaW5nKCldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5hdGxhcy5mcmFtZXNbdGhpcy5zZXF1ZW5jZU5hbWUgKyBcIl9cIiArIFwiMFwiICsgdGhpcy5jdXJyZW50RnJhbWUudG9TdHJpbmcoKV07XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtjdHh9IGZyb20gXCIuLi9nbG9iLnRzXCJcclxuaW1wb3J0IHtTcHJpdGV9IGZyb20gXCIuL1Nwcml0ZVwiXHJcbmltcG9ydCB7VGV4dHVyZUF0bGFzfSBmcm9tIFwiLi9UZXh0dXJlQXRsYXNcIlxyXG5pbXBvcnQge1RleHR1cmVBdGxhc0ZyYW1lfSBmcm9tIFwiLi9UZXh0dXJlQXRsYXNGcmFtZVwiXHJcblxyXG5leHBvcnQgY2xhc3MgU3RhdGljU3ByaXRlIGV4dGVuZHMgU3ByaXRlXHJcbntcclxuICAgIHByb3RlY3RlZCBpbWFnZTogVGV4dHVyZUF0bGFzRnJhbWU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHNjYWxlOiBudW1iZXIsIG9yaWdpbkhvcml6b250YWw6IHN0cmluZywgb3JpZ2luVmVydGljYWw6IHN0cmluZywgcHJvdGVjdGVkIGF0bGFzOiBUZXh0dXJlQXRsYXMsIHByb3RlY3RlZCBpbWFnZU5hbWU6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICBzdXBlcih4LCB5LCBzY2FsZSwgb3JpZ2luSG9yaXpvbnRhbCwgb3JpZ2luVmVydGljYWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZWZyZXNoSW1hZ2UoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSB0aGlzLmF0bGFzLmZyYW1lc1t0aGlzLmltYWdlTmFtZV07IC8vIGdldCB0aGUgaW1hZ2UgZnJvbSB0aGUgYXRsYXNcclxuICAgICAgICB0aGlzLnJlZnJlc2hPcmlnaW4odGhpcy5pbWFnZS53LCB0aGlzLmltYWdlLmgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3KGN1cnJlbnRUaW1lOiBudW1iZXIsIGRlbHRhVGltZTogbnVtYmVyKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLm9yaWdpblgsIHRoaXMub3JpZ2luWSk7XHJcbiAgICAgICAgY3R4LnJlY3QodGhpcy5pbWFnZS54LCB0aGlzLmltYWdlLnksIHRoaXMuaW1hZ2UudywgdGhpcy5pbWFnZS5oKTtcclxuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuYXRsYXMuaW1hZ2UsXHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UueCwgdGhpcy5pbWFnZS55LFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlLncsIHRoaXMuaW1hZ2UuaCxcclxuICAgICAgICAgICAgdGhpcy5pbWFnZS5vZmZzZXR4LCB0aGlzLmltYWdlLm9mZnNldHksXHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UudyAqIHRoaXMuc2NhbGUsIHRoaXMuaW1hZ2UuaCAqIHRoaXMuc2NhbGUpO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtKU09OTG9hZGVyfSBmcm9tICcuLi9yZXNvdXJjZXMvSlNPTkxvYWRlcidcclxuaW1wb3J0IHtJbWFnZUxvYWRlcn0gZnJvbSAnLi4vcmVzb3VyY2VzL0ltYWdlTG9hZGVyJ1xyXG5pbXBvcnQge1RleHR1cmVBdGxhc0ZyYW1lfSBmcm9tICcuL1RleHR1cmVBdGxhc0ZyYW1lJ1xyXG5cclxuZXhwb3J0IGNsYXNzIFRleHR1cmVBdGxhc1xyXG57XHJcbiAgICAvLyBodHRwOi8vd3d3LnR5cGVzY3JpcHRnYW1lcy5jb20vVGV4dHVyZUF0bGFzLmh0bWxcclxuICAgIHB1YmxpYyBmcmFtZXM6IHsgW2luZGV4OiBzdHJpbmddOiBUZXh0dXJlQXRsYXNGcmFtZSB9ID0ge307XHJcbiAgICBwdWJsaWMgdGFMb2FkQ29tcGxldGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBpbWFnZTogSFRNTEltYWdlRWxlbWVudCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgcHVibGljIGF0bGFzTmFtZTogc3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgaW1hZ2VGaWxlTmFtZTogc3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUganNvbkZpbGVOYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGF0bGFzTmFtZTogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuYXRsYXNOYW1lID0gYXRsYXNOYW1lO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VGaWxlTmFtZSA9IGF0bGFzTmFtZTtcclxuICAgICAgICB0aGlzLmpzb25GaWxlTmFtZSA9IGF0bGFzTmFtZS5yZXBsYWNlKFwiLnBuZ1wiLCBcIlwiKSArIFwiLmpzb25cIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZCgpOiBQcm9taXNlPGFueT5cclxuICAgIHtcclxuICAgICAgICBjb25zdCBpbWdQcm9taXNlID0gSW1hZ2VMb2FkZXIubG9hZEltYWdlKHRoaXMuaW1hZ2VGaWxlTmFtZSkudGhlbigoaW1nKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UgPSBpbWc7XHJcbiAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3I6IHVuYWJsZSB0byBsb2FkICcgKyB0aGlzLmltYWdlRmlsZU5hbWUpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IGpzb25Qcm9taXNlID0gSlNPTkxvYWRlci5sb2FkSlNPTkZpbGUodGhpcy5qc29uRmlsZU5hbWUpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVGcmFtZXMoZGF0YSk7XHJcbiAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3I6IHVuYWJsZSB0byBsb2FkICcgKyB0aGlzLmpzb25GaWxlTmFtZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbaW1nUHJvbWlzZSwganNvblByb21pc2VdKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5hdGxhc05hbWUgKyAnIGxvYWRlZCBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcjogJyArIHRoaXMuYXRsYXNOYW1lICsgJyBmYWlsZWQgdG8gbG9hZCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlRnJhbWVzKGRhdGE6IGFueSlcclxuICAgIHtcclxuICAgICAgICBmb3IoY29uc3QgbmFtZSBpbiBkYXRhLmZyYW1lcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwcml0ZURhdGEgPSBkYXRhLmZyYW1lc1tuYW1lXTtcclxuICAgICAgICAgICAgbGV0IGZyYW1lID0gbmV3IFRleHR1cmVBdGxhc0ZyYW1lKHNwcml0ZURhdGEuZnJhbWUueCwgc3ByaXRlRGF0YS5mcmFtZS55LCBzcHJpdGVEYXRhLmZyYW1lLncsIHNwcml0ZURhdGEuZnJhbWUuaCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlRGF0YS5zcHJpdGVTb3VyY2VTaXplLngsIHNwcml0ZURhdGEuc3ByaXRlU291cmNlU2l6ZS55LCBzcHJpdGVEYXRhLmZyYW1lRHVyYXRpb24pO1xyXG4gICAgICAgICAgICB0aGlzLmZyYW1lc1tuYW1lXSA9IGZyYW1lO1xyXG4gICAgICAgIH1cclxuLy8gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuZnJhbWVzKSk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFRleHR1cmVBdGxhc0ZyYW1lXHJcbntcclxuICAgIC8vIGh0dHA6Ly93d3cudHlwZXNjcmlwdGdhbWVzLmNvbS9BbmltYXRlZFNwcml0ZXMuaHRtbFxyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgdzogbnVtYmVyO1xyXG4gICAgaDogbnVtYmVyO1xyXG5cclxuICAgIG9mZnNldHg6IG51bWJlcjsgICAgLy8gaW1hZ2Ugd2lsbCBiZSBvZmZzZXQgYnkgdGhlc2UgdmFsdWVzIHNvIGZyYW1lcyBsaW5lIHVwIGluIGFuaW1hdGlvblxyXG4gICAgb2Zmc2V0eTogbnVtYmVyO1xyXG5cclxuICAgIGZyYW1lRHVyYXRpb246IG51bWJlcjsgIC8vIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoaXMgZnJhbWUgbGFzdHNcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCB3OiBudW1iZXIgPSAxLCBoOiBudW1iZXIgPSAxLCBvZmZzZXR4OiBudW1iZXIgPSAwLCBvZmZzZXR5OiBudW1iZXIgPSAwLCBmcmFtZUR1cmF0aW9uOiBudW1iZXIgPSAxMDApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMudyA9IHc7XHJcbiAgICAgICAgdGhpcy5oID0gaDtcclxuICAgICAgICB0aGlzLm9mZnNldHggPSBvZmZzZXR4O1xyXG4gICAgICAgIHRoaXMub2Zmc2V0eSA9IG9mZnNldHk7XHJcbiAgICAgICAgdGhpcy5mcmFtZUR1cmF0aW9uID0gZnJhbWVEdXJhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0KHg6IG51bWJlciwgeTogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9