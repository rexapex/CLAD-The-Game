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
                                interactions.push(new ReceiveItemInteraction_1.ReceiveItemInteraction(inter.item ? items[inter.item] : null, inter.success_text, inter.fail_text, receiveItems));
                            }
                        }
                        interactableSprites.push(new InteractableSprite_1.InteractableSprite(obj.x, obj.y, obj.scale, obj.origin_horizontal, obj.origin_vertical, atlas, obj.image_name, obj.examine_text, new Circle_1.Circle(obj.x, obj.y, obj.interaction_radius), new Rectangle_1.Rectangle(obj.x - obj.click_zone_width / 2, obj.y - obj.click_zone_height / 2, obj.click_zone_width, obj.click_zone_height), interactions));
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
    openChatGUI();
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
function openChatGUI() {
    const html = `
    <div id="chatpanel">
        <img class="playerchathead" src="res/images/player_head.png"></img>
        <label class="chatmsg">Do I know you?</label>
        <button class="chatoption">No, we haven't met</button>
        <button class="chatoption">Yeah, you have my wrench</button>
        <button class="chatoption">Back</button>
    </div>`;
    let chatpanel = document.getElementById("chatpanel_parent");
    if (chatpanel != null) {
        // remove the chat panel if it already exists
        chatpanel.parentNode.removeChild(chatpanel);
    }
    chatpanel = document.createElement("div");
    chatpanel.innerHTML = html;
    chatpanel.id = "chatpanel_parent";
    document.body.insertBefore(chatpanel, document.getElementById("invent"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbGxpc2lvbi9DaXJjbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbGxpc2lvbi9OYXZNZXNoLnRzIiwid2VicGFjazovLy8uL3NyYy9jb2xsaXNpb24vUG9pbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbGxpc2lvbi9SZWN0YW5nbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbGxpc2lvbi9UcmlhbmdsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9JbnRlcmFjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9MZXZlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9SZWNlaXZlSXRlbUludGVyYWN0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9nbG9iLnRzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dC9JbnB1dE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2l0ZW1zL0ludmVudG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaXRlbXMvSXRlbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVzb3VyY2VzL0ltYWdlTG9hZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvSlNPTkxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlcy9BbmltYXRlZFNwcml0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlcy9JbnRlcmFjdGFibGVTcHJpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZXMvTlBDU3ByaXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGVzL05hdlNwcml0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlcy9QbGF5ZXJTcHJpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZXMvU3ByaXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGVzL1Nwcml0ZUFuaW1hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlcy9TdGF0aWNTcHJpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZXMvVGV4dHVyZUF0bGFzLnRzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGVzL1RleHR1cmVBdGxhc0ZyYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuRUEseUVBQThCO0FBRzlCO0lBUUksWUFBWSxDQUFTLEVBQUUsQ0FBUyxFQUFFLE1BQWMsRUFBRSxRQUFnQixLQUFLLEVBQUUsYUFBcUIsQ0FBQztRQU54RixNQUFDLEdBQVcsQ0FBQyxDQUFDO1FBQ2QsTUFBQyxHQUFXLENBQUMsQ0FBQztRQUNkLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsY0FBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixVQUFLLEdBQVcsS0FBSyxDQUFDO1FBSXpCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUss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QUFNLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDcEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNwQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDcEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNwQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7WUFFcEIsSUFBSSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7WUFDM0IsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7WUFFbkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ1QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQ2xGLENBQUMsR0FBRyxDQUFFLElBQUksR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFFbEYsRUFBRSxFQUFDLENBQUMsSUFBSSxD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QUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNoSyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLGFBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZHLENBQUM7UUE5QkcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGFBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGFBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGFBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4TCxJQUFJLENBQUMsSUFBSSxHQUFH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RyxDQUFDLENBQUM7SUFDZixDQUFDO0NBQ0o7QUE3QkQsOENBNkJDIiwiZmlsZSI6ImJ1aWxkL2NsYWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi50c1wiKTtcbiIsImltcG9ydCB7Y3R4fSBmcm9tIFwiLi4vZ2xvYi50c1wiXHJcbmltcG9ydCB7SVNoYXBlfSBmcm9tIFwiLi9JU2hhcGVcIlxyXG5cclxuZXhwb3J0IGNsYXNzIENpcmNsZSBpbXBsZW1lbnRzIElTaGFwZVxyXG57XHJcbiAgICBwdWJsaWMgeDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyB5OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHJhZGl1czogbnVtYmVyID0gMTA7XHJcbiAgICBwdWJsaWMgbGluZVdpZHRoOiBudW1iZXIgPSAyO1xyXG4gICAgcHVibGljIGNvbG9yOiBzdHJpbmcgPSBcInJlZFwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCByYWRpdXM6IG51bWJlciwgY29sb3I6IHN0cmluZyA9IFwicmVkXCIsIGxpbmVfd2lkdGg6IG51bWJlciA9IDIpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmxpbmVXaWR0aCA9IGxpbmVfd2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHRoaXMubGluZVdpZHRoO1xyXG4gICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbnRhaW5zKHg6IG51bWJlciwgeTogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoKHkgLSB0aGlzLnkpICoqIDIgKyAoeCAtIHRoaXMueCkgKiogMikgPD0gdGhpcy5yYWRpdXMgKiogMjtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge1RyaWFuZ2xlfSBmcm9tIFwiLi9UcmlhbmdsZVwiXHJcbmltcG9ydCB7UG9pbnR9IGZyb20gXCIuL1BvaW50XCJcclxuXHJcbi8vIG5hdm1lc2ggcGF0aGZpbmRpbmc6IGh0dHBzOi8vbWVkaXVtLmNvbS9AbXNjYW5zaWFuL2Etd2l0aC1uYXZpZ2F0aW9uLW1lc2hlcy0yNDZmZDllNzI0MjRcclxuZXhwb3J0IGNsYXNzIE5hdk1lc2hcclxue1xyXG4gICAgLy8gdmFsaWQgcmVnaW9ucyBvZiB0aGUgbmF2bWVzaFxyXG4gICAgcHJpdmF0ZSB0cmlzOiBBcnJheTxUcmlhbmdsZT47XHJcblxyXG4gICAgLy8gVE9ETyAtIG5ldyBzeXN0ZW0gb2YgdHJpYW5nbGUgcmVwcmVzZW50YXRpb25cclxuICAgIHByaXZhdGUgdmVydGljZXM6IEFycmF5PFBvaW50PjtcclxuICAgIHByaXZhdGUgZWRnZXM6IEFycmF5PHt2MTogbnVtYmVyLCB2MjogbnVtYmVyfT47ICAgICAgICAgLy8gdjEgYW5kIHYyIGFyZSBpbmRpY2VzIGludG8gdmVydGljZXMgbGlzdFxyXG4gICAgcHJpdmF0ZSBvdXRlckVkZ2VzOiBBcnJheTx7djE6IG51bWJlciwgdjI6IG51bWJlcn0+OyAgICAvLyBlZGdlcyB3aGljaCBvbmx5IGFwcGVhciBpbiAxIHRyaVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRyaXM6IEFycmF5PFRyaWFuZ2xlPikge1xyXG4gICAgICAgIHRoaXMudHJpcyA9IHRyaXMgPyB0cmlzIDogW107XHJcbiAgICAgICAgdGhpcy52ZXJ0aWNlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZWRnZXMgPSBbXTtcclxuICAgICAgICB0aGlzLm91dGVyRWRnZXMgPSBbXTtcclxuXHJcbiAgICAgICAgLy8gaW5pdGlhbGlzZSB2ZXJ0aWNlcyBhbmQgZWRnZXMgbGlzdFxyXG4gICAgICAgIGZvcihjb25zdCB0cmkgb2YgdHJpcykge1xyXG4gICAgICAgICAgICBsZXQgcDFJbmRleCA9IHRoaXMuaW5kZXhPZlZlcnRleCh0aGlzLnZlcnRpY2VzLCB0cmkucG9pbnQxKTtcclxuICAgICAgICAgICAgbGV0IHAySW5kZXggPSB0aGlzLmluZGV4T2ZWZXJ0ZXgodGhpcy52ZXJ0aWNlcywgdHJpLnBvaW50Mik7XHJcbiAgICAgICAgICAgIGxldCBwM0luZGV4ID0gdGhpcy5pbmRleE9mVmVydGV4KHRoaXMudmVydGljZXMsIHRyaS5wb2ludDMpO1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgdmVydGV4IGlzIG5vdCBpbiB0aGUgbGlzdCwgYWRkIGl0IHRvIHRoZSBsaXN0XHJcbiAgICAgICAgICAgIGlmKHAxSW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2godHJpLnBvaW50MSk7XHJcbiAgICAgICAgICAgICAgICBwMUluZGV4ID0gdGhpcy5pbmRleE9mVmVydGV4KHRoaXMudmVydGljZXMsIHRyaS5wb2ludDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGlmIHZlcnRleCBpcyBub3QgaW4gdGhlIGxpc3QsIGFkZCBpdCB0byB0aGUgbGlzdFxyXG4gICAgICAgICAgICBpZihwMkluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHRyaS5wb2ludDIpO1xyXG4gICAgICAgICAgICAgICAgcDJJbmRleCA9IHRoaXMuaW5kZXhPZlZlcnRleCh0aGlzLnZlcnRpY2VzLCB0cmkucG9pbnQyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBpZiB2ZXJ0ZXggaXMgbm90IGluIHRoZSBsaXN0LCBhZGQgaXQgdG8gdGhlIGxpc3RcclxuICAgICAgICAgICAgaWYocDNJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmVydGljZXMucHVzaCh0cmkucG9pbnQzKTtcclxuICAgICAgICAgICAgICAgIHAzSW5kZXggPSB0aGlzLmluZGV4T2ZWZXJ0ZXgodGhpcy52ZXJ0aWNlcywgdHJpLnBvaW50Myk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGFkZCBhbGwgMyBlZGdlcyBvZiB0aGUgdHJpIHRvIHRoZSBlZGdlcyBsaXN0XHJcbiAgICAgICAgICAgIGNvbnN0IGVkZ2UxID0ge3YxOiBwMUluZGV4LCB2MjogcDJJbmRleH07XHJcbiAgICAgICAgICAgIGNvbnN0IGVkZ2UyID0ge3YxOiBwMkluZGV4LCB2MjogcDNJbmRleH07XHJcbiAgICAgICAgICAgIGNvbnN0IGVkZ2UzID0ge3YxOiBwM0luZGV4LCB2MjogcDFJbmRleH07XHJcblxyXG4gICAgICAgICAgICAvLyBhZGQgdGhlIGVkZ2VzIGlmIHRoZXkgYXJlIG5vdCBhbHJlYWR5IGluIHRoZSBsaXN0XHJcbiAgICAgICAgICAgIGlmKHRoaXMuaW5kZXhPZkVkZ2UodGhpcy5lZGdlcywgZWRnZTEpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lZGdlcy5wdXNoKGVkZ2UxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3V0ZXJFZGdlcy5wdXNoKGVkZ2UxKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3V0ZXJFZGdlcy5zcGxpY2UodGhpcy5pbmRleE9mRWRnZSh0aGlzLm91dGVyRWRnZXMsIGVkZ2UxKSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuaW5kZXhPZkVkZ2UodGhpcy5lZGdlcywgZWRnZTIpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lZGdlcy5wdXNoKGVkZ2UyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3V0ZXJFZGdlcy5wdXNoKGVkZ2UyKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3V0ZXJFZGdlcy5zcGxpY2UodGhpcy5pbmRleE9mRWRnZSh0aGlzLm91dGVyRWRnZXMsIGVkZ2UyKSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuaW5kZXhPZkVkZ2UodGhpcy5lZGdlcywgZWRnZTMpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lZGdlcy5wdXNoKGVkZ2UzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3V0ZXJFZGdlcy5wdXNoKGVkZ2UzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3V0ZXJFZGdlcy5zcGxpY2UodGhpcy5pbmRleE9mRWRnZSh0aGlzLm91dGVyRWRnZXMsIGVkZ2UzKSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnZlcnRpY2VzKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZWRnZXMpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5vdXRlckVkZ2VzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0V2F5cG9pbnRzID0gKGN1cnJlbnRYOiBudW1iZXIsIGN1cnJlbnRZOiBudW1iZXIsIHRhcmdldFg6IG51bWJlciwgdGFyZ2V0WTogbnVtYmVyKTogQXJyYXk8UG9pbnQ+ID0+IHtcclxuICAgICAgICBmb3IobGV0IHRyaSBvZiB0aGlzLnRyaXMpIHtcclxuICAgICAgICAgICAgLy8gYWxsb3cgZnJlZSBtb3ZlbWVudCB3aXRoaW4gYSB0cmlhbmdsZVxyXG4gICAgICAgICAgICBpZih0cmkuY29udGFpbnModGFyZ2V0WCwgdGFyZ2V0WSkgJiYgdHJpLmNvbnRhaW5zKGN1cnJlbnRYLCBjdXJyZW50WSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbbmV3IFBvaW50KHRhcmdldFgsIHRhcmdldFkpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IHRyaSBvZiB0aGlzLnRyaXMpIHtcclxuICAgICAgICAgICAgLy8gaWYgYm90aCBwb2ludHMgZmFsbCB1bmRlciBkaWZmZXJlbnQgdHJpYW5nbGVzLCBmaW5kIHRoZSBhIHdheXBvaW50IHRvIHJlYWNoIHRoZSBuZXh0IHRyaVxyXG4gICAgICAgICAgICBpZih0cmkuY29udGFpbnModGFyZ2V0WCwgdGFyZ2V0WSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vcmV0dXJuIG5ldyBQb2ludCh0YXJnZXRYLCB0YXJnZXRZKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IHRoaXMuZmluZFBhdGgobmV3IFBvaW50KGN1cnJlbnRYLCBjdXJyZW50WSksIG5ldyBQb2ludCh0YXJnZXRYLCB0YXJnZXRZKSk7XHJcbiAgICAgICAgICAgICAgICBpZihvYmogIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByb3V0ZTogQXJyYXk8UG9pbnQ+ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGUucHVzaChuZXcgUG9pbnQodGFyZ2V0WCwgdGFyZ2V0WSkpOyAgICAvLyBnbyBmcm9tIGxhc3QgcG9pbnQgdG8gdGhlIGVuZCBwb2ludFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRSb3V0ZShvYmouY2FtZUZyb20sIG9iai5lbmRWZXJ0ZXgsIHJvdXRlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZHVjZVJvdXRlKHJvdXRlKTsgICAgLy8gcmVtb3ZlIHJlZHVuZGFudCBub2RlcyBmcm9tIHRoZSBwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgaWYocm91dGUubGVuZ3RoID4gMCkgICAgICAgIC8vIGxhc3Qgd2F5cG9pbnQgd2lsbCBiZSBzdGFydCAtPiBnZXQgcmlkIG9mIGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicm91dGU6IFwiICsgcm91dGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlbW92ZSB1bmVjZXNzYXJ5IHdheXBvaW50cyBmcm9tIHRoZSByb3V0ZSwgaS5lLiBpZiB0aGVpciBpcyBhIHN0cmFpZ2h0IHBhdGggZnJvbSBhIHRvIGMsIHJlbW92ZSBiXHJcbiAgICBwcml2YXRlIHJlZHVjZVJvdXRlID0gKHJvdXRlOiBBcnJheTxQb2ludD4pID0+IHtcclxuICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgIC8vIGxvb3AgdW50aWwgbm8gbW9yZSByZWR1Y3Rpb25zIGNhbiBiZSBtYWRlXHJcbiAgICAgICAgd2hpbGUoaW5kZXggPCByb3V0ZS5sZW5ndGggLSAyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGEgPSByb3V0ZVtpbmRleF1cclxuICAgICAgICAgICAgY29uc3QgYyA9IHJvdXRlW2luZGV4ICsgMl1cclxuXHJcbiAgICAgICAgICAgIC8vIHRoZXJlIGlzIGEgdmFsaWQgc3RyYWlnaHQgcGF0aCBiZXR3ZWVuIGEgYW5kIGMgaWYgdGhlIHBhdGggZG9lcyBub3QgaW50ZXJzZWN0IGFuIG91dGVyIGVkZ2VcclxuICAgICAgICAgICAgbGV0IGludGVyc2VjdHNPdXRlckVkZ2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yKGNvbnN0IG91dGVyRWRnZSBvZiB0aGlzLm91dGVyRWRnZXMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuZG9MaW5lU2VnbWVudHNJbnRlcnNlY3QodGhpcy52ZXJ0aWNlc1tvdXRlckVkZ2UudjFdLCB0aGlzLnZlcnRpY2VzW291dGVyRWRnZS52Ml0sIGEsIGMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhhLnRvU3RyaW5nKCksIGMudG9TdHJpbmcoKSwgXCJpbnRlcnNlY3RzXCIsIHRoaXMudmVydGljZXNbb3V0ZXJFZGdlLnYxXS50b1N0cmluZygpLCB0aGlzLnZlcnRpY2VzW291dGVyRWRnZS52Ml0udG9TdHJpbmcoKSlcclxuICAgICAgICAgICAgICAgICAgICBpbnRlcnNlY3RzT3V0ZXJFZGdlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gaWYgdGhlIHBhdGggZG9lcyBub3QgaW50ZXJzZWN0IGFuIG91dGVyIGVkZ2UsIHJlbW92ZSB3YXlwb2ludCBiXHJcbiAgICAgICAgICAgIGlmKCFpbnRlcnNlY3RzT3V0ZXJFZGdlKSB7XHJcbiAgICAgICAgICAgICAgICByb3V0ZS5zcGxpY2UoaW5kZXgrMSwgMSk7XHJcbiAgICAgICAgICAgICAgICAvLyBkb24ndCBuZWVkIHRvIGluY3JlbWVudCBpbmRleCBzaW5jZSBhcnJheSBsZW5ndGggaGFzIGJlZW4gcmVkdWNlZFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gbW92ZSBvbnRvIG5leHQgcGFpciBvZiB3YXlwb2ludHNcclxuICAgICAgICAgICAgICAgIGluZGV4ICsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYnVpbGRSb3V0ZSA9IChjYW1lRnJvbToge30sIHZlcnRleDogUG9pbnQsIHJvdXRlOiBBcnJheTxQb2ludD4pID0+IHtcclxuICAgICAgICByb3V0ZS5wdXNoKHZlcnRleCk7IC8vIHJvdXRlIGlzIHJlYWQgaW4gcmV2ZXJzZSBvcmRlclxyXG4gICAgICAgIGlmKGNhbWVGcm9tW3ZlcnRleC50b1N0cmluZygpXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnVpbGRSb3V0ZShjYW1lRnJvbSwgY2FtZUZyb21bdmVydGV4LnRvU3RyaW5nKCldLm5vZGUsIHJvdXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXNlIHRoZSBBKiBhbGdvcml0aG0gdG8gZmluZCBhIHNob3J0ZXN0IHBhdGggdGhyb3VnaCB0aGUgbmF2bWVzaFxyXG4gICAgcHJpdmF0ZSBmaW5kUGF0aCA9IChzdGFydDogUG9pbnQsIGVuZDogUG9pbnQpOiB7Y2FtZUZyb206IHt9LCBlbmRWZXJ0ZXg6IFBvaW50fSA9PiB7XHJcbiAgICAgICAgbGV0IG9wZW4gPSBbe25vZGU6IHN0YXJ0LCBwcmlvcml0eTogMH1dOyAgICAvLyBsb3dlc3QgcHJpb3JpdHkgPSAwXHJcbiAgICAgICAgbGV0IGNsb3NlZCA9IFtdO1xyXG5cclxuICAgICAgICAvLyBmaW5kIHRoZSB0cmlhbmdsZSBjb250YWluaW5nIHRoZSBzdGFydCBwb2ludFxyXG4gICAgICAgIGxldCBzdGFydFRyaTtcclxuICAgICAgICBmb3IoY29uc3QgdHJpIG9mIHRoaXMudHJpcykge1xyXG4gICAgICAgICAgICBpZih0cmkuY29udGFpbnMoc3RhcnQueCwgc3RhcnQueSkpIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0VHJpID0gdHJpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoc3RhcnRUcmkgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGZpbmQgdGhlIHRyaWFuZ2xlIGNvbnRhaW5pbmcgdGhlIGVuZCBwb2ludFxyXG4gICAgICAgIGxldCBlbmRUcmk7XHJcbiAgICAgICAgZm9yKGNvbnN0IHRyaSBvZiB0aGlzLnRyaXMpIHtcclxuICAgICAgICAgICAgaWYodHJpLmNvbnRhaW5zKGVuZC54LCBlbmQueSkpIHtcclxuICAgICAgICAgICAgICAgIGVuZFRyaSA9IHRyaTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGVuZFRyaSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZ1tpXSBpcyB0aGUgY29zdCB0byBnZXQgdG8gaSBmcm9tIHRoZSBzdGFydCB2ZXJ0ZXhcclxuICAgICAgICBsZXQgZyA9IHt9O1xyXG4gICAgICAgIGxldCBjYW1lRnJvbSA9IHt9O1xyXG4gICAgICAgIGdbc3RhcnQudG9TdHJpbmcoKV0gPSAwO1xyXG4gICAgICAgIGNhbWVGcm9tW3N0YXJ0LnRvU3RyaW5nKCldID0gbnVsbDtcclxuXHJcbiAgICAgICAgLy8gZXhlY3V0ZSBBKiBhbGdvcml0aG1cclxuICAgICAgICAvLyBwc2V1ZG9jb2RlOiBodHRwOi8vdGhlb3J5LnN0YW5mb3JkLmVkdS9+YW1pdHAvR2FtZVByb2dyYW1taW5nL0ltcGxlbWVudGF0aW9uTm90ZXMuaHRtbFxyXG4gICAgICAgIHdoaWxlKG9wZW4ubGVuZ3RoID4gMCAmJiAhZW5kVHJpLmlzVmVydGV4KG9wZW5bMF0ubm9kZSkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudCA9IG9wZW4uc2hpZnQoKTsgIC8vIHJlbW92ZSBmaXJzdCBpdGVtIGZyb20gb3BlbiAoaXRlbSB3aXRoIGxvd2VzdCBwcmlvcml0eSlcclxuICAgICAgICAgICAgY2xvc2VkLnB1c2goY3VycmVudCk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjdXJyZW50IHZlcnRleDogXCIgKyBjdXJyZW50Lm5vZGUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIGZvcihjb25zdCBuZWlnaGJvdXIgb2YgdGhpcy5nZXROZWlnaGJvdXJzKGN1cnJlbnQubm9kZSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb3N0ID0gZ1tjdXJyZW50Lm5vZGUudG9TdHJpbmcoKV0gKyB0aGlzLmdldEVkZ2VDb3N0KGN1cnJlbnQubm9kZSwgbmVpZ2hib3VyKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJuZWlnaGJvdXI6IFwiICsgbmVpZ2hib3VyLnRvU3RyaW5nKCkgKyBcIiwgY29zdDogXCIgKyBjb3N0KTtcclxuICAgICAgICAgICAgICAgIC8vIG5laWdoYm91ciBpbiBvcGVuXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluZGV4T2ZQcmlvcml0eU5vZGUob3BlbiwgbmVpZ2hib3VyKSAhPT0gLTEgJiYgY29zdCA8IGdbbmVpZ2hib3VyLnRvU3RyaW5nKCldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3Blbi5zcGxpY2UodGhpcy5pbmRleE9mUHJpb3JpdHlOb2RlKG9wZW4sIG5laWdoYm91ciksIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gbmVpZ2hib3VyIGluIGNsb3NlZFxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmRleE9mUHJpb3JpdHlOb2RlKGNsb3NlZCwgbmVpZ2hib3VyKSAhPT0gLTEgJiYgY29zdCA8IGdbbmVpZ2hib3VyLnRvU3RyaW5nKCldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VkLnNwbGljZSh0aGlzLmluZGV4T2ZQcmlvcml0eU5vZGUoY2xvc2VkLCBuZWlnaGJvdXIpLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIG5laWdoYm91ciBuZWl0aGVyIGluIG9wZW4gbm9yIGNsb3NlZFxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmRleE9mUHJpb3JpdHlOb2RlKG9wZW4sIG5laWdoYm91cikgPT09IC0xICYmIHRoaXMuaW5kZXhPZlByaW9yaXR5Tm9kZShjbG9zZWQsIG5laWdoYm91cikgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ1tuZWlnaGJvdXIudG9TdHJpbmcoKV0gPSBjb3N0O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbWVGcm9tW25laWdoYm91ci50b1N0cmluZygpXSA9IGN1cnJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgb3Blbi5wdXNoKHtub2RlOiBuZWlnaGJvdXIsIHByaW9yaXR5OiBjb3N0fSk7IC8vIFRPRE8gLSBwcmlvcml0eSA9IGNvc3QgKyBoKG5laWdoYm91cilcclxuICAgICAgICAgICAgICAgICAgICBvcGVuLnNvcnQoKGEsIGIpID0+IHsgICAvLyBzb3J0IG9wZW4gcXVldWUgYnkgcHJpb3JpdHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEucHJpb3JpdHkgLSBiLnByaW9yaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2NvbnNvbGUubG9nKG9wZW4ubGVuZ3RoID4gMCA/IFwiZW5kOiBcIiArIG9wZW5bMF0ubm9kZS50b1N0cmluZygpIDogXCJubyBwYXRoXCIpO1xyXG4gICAgICAgIHJldHVybiBvcGVuLmxlbmd0aCA+IDAgPyB7Y2FtZUZyb206IGNhbWVGcm9tLCBlbmRWZXJ0ZXg6IG9wZW5bMF0ubm9kZX0gOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3ID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGZvcihsZXQgdHJpIG9mIHRoaXMudHJpcykge1xyXG4gICAgICAgICAgICB0cmkuZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyByZXR1cm5zIHRoZSBjb3N0IG9mIHRyYXZlcnNpbmcgYW4gZWRnZSBiZXR3ZWVuIHAxIGFuZCBwMlxyXG4gICAgcHJpdmF0ZSBnZXRFZGdlQ29zdCA9IChwMTogUG9pbnQsIHAyOiBQb2ludCk6IG51bWJlciA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCgocDEueCAtIHAyLngpICoqIDIgKyAocDEueSAtIHAyLnkpICoqIDIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJldHVybiBhIGxpc3Qgb2YgdmVydGNpZXMgd2hpY2ggYXJlIGFkamFjZW50IHRvIHRoZSB2ZXJ0ZXggcFxyXG4gICAgcHJpdmF0ZSBnZXROZWlnaGJvdXJzID0gKHA6IFBvaW50KTogQXJyYXk8UG9pbnQ+ID0+IHtcclxuICAgICAgICBsZXQgbmVpZ2hib3VyczogQXJyYXk8UG9pbnQ+ID0gW107XHJcbiAgICAgICAgZm9yKGNvbnN0IGVkZ2Ugb2YgdGhpcy5lZGdlcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudmVydGljZXNbZWRnZS52MV0uZXF1YWxzKHApKSB7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvdXJzLnB1c2godGhpcy52ZXJ0aWNlc1tlZGdlLnYyXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLnZlcnRpY2VzW2VkZ2UudjJdLmVxdWFscyhwKSkge1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3Vycy5wdXNoKHRoaXMudmVydGljZXNbZWRnZS52MV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiB0aGUgdmVydGV4IGlzIG5vdCBhIHZlcnRleCBvZiBhIHRyaWFuZ2xlLCBjaGVjayBpZiBpdCBpcyB3aXRoaW4gYSB0cmlhbmdsZVxyXG4gICAgICAgIGlmKG5laWdoYm91cnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGZvcihjb25zdCB0cmkgb2YgdGhpcy50cmlzKSB7XHJcbiAgICAgICAgICAgICAgICBpZih0cmkuY29udGFpbnMocC54LCBwLnkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3Vycy5wdXNoKHRyaS5wb2ludDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5laWdoYm91cnMucHVzaCh0cmkucG9pbnQyKTtcclxuICAgICAgICAgICAgICAgICAgICBuZWlnaGJvdXJzLnB1c2godHJpLnBvaW50Myk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5laWdoYm91cnM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYW5zd2VyIDIgZnJvbTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTYzMTk4L2hvdy1kby15b3UtZGV0ZWN0LXdoZXJlLXR3by1saW5lLXNlZ21lbnRzLWludGVyc2VjdFxyXG4gICAgcHJpdmF0ZSBkb0xpbmVTZWdtZW50c0ludGVyc2VjdCA9IChlMXYxOiBQb2ludCwgZTF2MjogUG9pbnQsIGUydjE6IFBvaW50LCBlMnYyOiBQb2ludCk6IGJvb2xlYW4gPT4ge1xyXG4gICAgICAgIGNvbnN0IHAwX3ggPSBlMXYxLng7XHJcbiAgICAgICAgY29uc3QgcDBfeSA9IGUxdjEueTtcclxuICAgICAgICBjb25zdCBwMV94ID0gZTF2Mi54O1xyXG4gICAgICAgIGNvbnN0IHAxX3kgPSBlMXYyLnk7XHJcbiAgICAgICAgY29uc3QgcDJfeCA9IGUydjEueDtcclxuICAgICAgICBjb25zdCBwMl95ID0gZTJ2MS55O1xyXG4gICAgICAgIGNvbnN0IHAzX3ggPSBlMnYyLng7XHJcbiAgICAgICAgY29uc3QgcDNfeSA9IGUydjIueTtcclxuXHJcbiAgICAgICAgbGV0IHMxX3gsIHMxX3ksIHMyX3gsIHMyX3k7XHJcbiAgICAgICAgczFfeCA9IHAxX3ggLSBwMF94O1xyXG4gICAgICAgIHMxX3kgPSBwMV95IC0gcDBfeTtcclxuICAgICAgICBzMl94ID0gcDNfeCAtIHAyX3g7XHJcbiAgICAgICAgczJfeSA9IHAzX3kgLSBwMl95O1xyXG5cclxuICAgICAgICBsZXQgcywgdDtcclxuICAgICAgICBzID0gKC1zMV95ICogKHAwX3ggLSBwMl94KSArIHMxX3ggKiAocDBfeSAtIHAyX3kpKSAvICgtczJfeCAqIHMxX3kgKyBzMV94ICogczJfeSk7XHJcbiAgICAgICAgdCA9ICggczJfeCAqIChwMF95IC0gcDJfeSkgLSBzMl95ICogKHAwX3ggLSBwMl94KSkgLyAoLXMyX3ggKiBzMV95ICsgczFfeCAqIHMyX3kpO1xyXG5cclxuICAgICAgICBpZihzID49IDAgJiYgcyA8PSAxICYmIHQgPj0gMCAmJiB0IDw9IDEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyByZXR1cm4gZmFsc2UgaWYgdGhlIGludGVyc2VjdGlvbiBwb2ludCBpcyB0aGUgdmVydGV4IHBvc2l0aW9uIHNpbmNlIGl0IGJyZWFrcyB0aGUgcm91dGUgcmVkdWN0aW9uIGFsZ29yaXRobVxyXG4gICAgICAgICAgICBjb25zdCBpX3ggPSAocDBfeCArICh0ICogczFfeCkpO1xyXG4gICAgICAgICAgICBjb25zdCBpX3kgPSAocDBfeSArICh0ICogczFfeSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gIShpX3ggPT09IGUxdjEueCAmJiBpX3kgPT09IGUxdjEueSkgJiYgIShpX3ggPT09IGUxdjIueCAmJiBpX3kgPT09IGUxdjIueSkgJiYgIShpX3ggPT09IGUydjEueCAmJiBpX3kgPT09IGUydjEueSkgJiYgIShpX3ggPT09IGUydjIueCAmJiBpX3kgPT09IGUydjIueSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwibm8gY29sbGlzaW9uXCIpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTsgLy8gbm8gY29sbGlzaW9uXHJcbiAgICB9XHJcblxyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY3Jvc3NQcm9kdWN0ID0gKHBvaW50MTogUG9pbnQsIHBvaW50MjogUG9pbnQpID0+IHtcclxuICAgIFx0cmV0dXJuIHBvaW50MS54ICogcG9pbnQyLnkgLSBwb2ludDEueSAqIHBvaW50Mi54O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5kZXhPZlByaW9yaXR5Tm9kZSA9ICh2ZXJ0aWNlczogQXJyYXk8e25vZGU6IFBvaW50LCBwcmlvcml0eTogbnVtYmVyfT4sIHA6IFBvaW50KSA9PiB7XHJcbiAgICAgICAgaWYocCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IobGV0IGluZGV4ID0gMDsgaW5kZXggPCB2ZXJ0aWNlcy5sZW5ndGg7IGluZGV4ICsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2ZXJ0ZXggPSB2ZXJ0aWNlc1tpbmRleF0ubm9kZTtcclxuICAgICAgICAgICAgICAgIGlmKHZlcnRleC54ID09PSBwLnggJiYgdmVydGV4LnkgPT09IHAueSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpbmRleDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5kZXhPZlZlcnRleCA9ICh2ZXJ0aWNlczogQXJyYXk8UG9pbnQ+LCBwOiBQb2ludCk6IG51bWJlciA9PiB7XHJcbiAgICAgICAgaWYocCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IobGV0IGluZGV4ID0gMDsgaW5kZXggPCB2ZXJ0aWNlcy5sZW5ndGg7IGluZGV4ICsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2ZXJ0ZXggPSB2ZXJ0aWNlc1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICBpZih2ZXJ0ZXgueCA9PT0gcC54ICYmIHZlcnRleC55ID09PSBwLnkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluZGV4T2ZFZGdlID0gKGVkZ2VzOiBBcnJheTx7djE6IG51bWJlciwgdjI6IG51bWJlcn0+LCBlZGdlOiB7djE6IG51bWJlciwgdjI6IG51bWJlcn0pOiBudW1iZXIgPT4ge1xyXG4gICAgICAgIGlmKGVkZ2UgPT0gbnVsbCB8fCBlZGdlLnYxID09IG51bGwgfHwgZWRnZS52MiA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IobGV0IGluZGV4ID0gMDsgaW5kZXggPCBlZGdlcy5sZW5ndGg7IGluZGV4ICsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlID0gZWRnZXNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgaWYoKGUudjEgPT09IGVkZ2UudjEgJiYgZS52MiA9PT0gZWRnZS52MikgfHwgKGUudjEgPT09IGVkZ2UudjIgJiYgZS52MiA9PT0gZWRnZS52MSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgUG9pbnRcclxue1xyXG4gICAgcHVibGljIHg6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgeTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZXF1YWxzID0gKHA6IFBvaW50KTogYm9vbGVhbiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHAgIT0gbnVsbCAmJiBwLnggPT09IHRoaXMueCAmJiBwLnkgPT09IHRoaXMueTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcgPSAoKSA6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGBQb2ludCgke3RoaXMueH0sJHt0aGlzLnl9KWA7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtjdHh9IGZyb20gXCIuLi9nbG9iLnRzXCJcclxuaW1wb3J0IHtJU2hhcGV9IGZyb20gXCIuL0lTaGFwZVwiXHJcblxyXG5leHBvcnQgY2xhc3MgUmVjdGFuZ2xlIGltcGxlbWVudHMgSVNoYXBlXHJcbntcclxuICAgIHB1YmxpYyB4OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHk6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgbGluZVdpZHRoOiBudW1iZXIgPSA1O1xyXG4gICAgcHVibGljIHdpZHRoOiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGhlaWdodDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBjb2xvcjogc3RyaW5nID0gXCJibHVlXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBjb2xvcjogc3RyaW5nID0gXCJyZWRcIiwgbGluZV93aWR0aDogbnVtYmVyID0gMilcclxuICAgIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmxpbmVXaWR0aCA9IGxpbmVfd2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHRoaXMubGluZVdpZHRoO1xyXG4gICAgICAgIGN0eC5yZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbnRhaW5zKHg6IG51bWJlciwgeTogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoeCA+PSB0aGlzLnggJiYgeCA8PSB0aGlzLnggKyB0aGlzLndpZHRoICYmIHkgPj0gdGhpcy55ICYmIHkgPD0gdGhpcy55ICsgdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7Y3R4fSBmcm9tIFwiLi4vZ2xvYi50c1wiXHJcbmltcG9ydCB7SVNoYXBlfSBmcm9tIFwiLi9JU2hhcGVcIlxyXG5pbXBvcnQge1BvaW50fSBmcm9tIFwiLi9Qb2ludFwiXHJcblxyXG5leHBvcnQgY2xhc3MgVHJpYW5nbGVcclxue1xyXG4gICAgcHVibGljIHBvaW50MTogUG9pbnQ7XHJcbiAgICBwdWJsaWMgcG9pbnQyOiBQb2ludDtcclxuICAgIHB1YmxpYyBwb2ludDM6IFBvaW50O1xyXG4gICAgcHJpdmF0ZSBhcmVhOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHNpZ246IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih4MTogbnVtYmVyLCB5MTogbnVtYmVyLCB4MjogbnVtYmVyLCB5MjogbnVtYmVyLCB4MzogbnVtYmVyLCB5MzogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucG9pbnQxID0gbmV3IFBvaW50KHgxLCB5MSk7XHJcbiAgICAgICAgdGhpcy5wb2ludDIgPSBuZXcgUG9pbnQoeDIsIHkyKTtcclxuICAgICAgICB0aGlzLnBvaW50MyA9IG5ldyBQb2ludCh4MywgeTMpO1xyXG4gICAgICAgIHRoaXMuYXJlYSA9IDEvMiAqICgtdGhpcy5wb2ludDIueSAqIHRoaXMucG9pbnQzLnggKyB0aGlzLnBvaW50MS55ICogKC10aGlzLnBvaW50Mi54ICsgdGhpcy5wb2ludDMueCkgKyB0aGlzLnBvaW50MS54ICogKHRoaXMucG9pbnQyLnkgLSB0aGlzLnBvaW50My55KSArIHRoaXMucG9pbnQyLnggKiB0aGlzLnBvaW50My55KTtcclxuICAgICAgICB0aGlzLnNpZ24gPSB0aGlzLmFyZWEgPCAwID8gLTEgOiAxO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3ID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZWRcIjtcclxuICAgICAgICBjdHgubGluZVdpZHRoID0gNTtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLnBvaW50MS54LCB0aGlzLnBvaW50MS55KTtcclxuICAgICAgICBjdHgubGluZVRvKHRoaXMucG9pbnQyLngsIHRoaXMucG9pbnQyLnkpO1xyXG4gICAgICAgIGN0eC5saW5lVG8odGhpcy5wb2ludDMueCwgdGhpcy5wb2ludDMueSk7XHJcbiAgICAgICAgY3R4LmxpbmVUbyh0aGlzLnBvaW50MS54LCB0aGlzLnBvaW50MS55KTtcclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZXR1cm5zIHRydWUgaWZmIHRoZSBwb2ludCBwIGlzIGEgdmVydGV4IG9mIHRoZSB0cmlhbmdsZVxyXG4gICAgcHVibGljIGlzVmVydGV4ID0gKHA6IFBvaW50KTogYm9vbGVhbiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9pbnQxLmVxdWFscyhwKSB8fCB0aGlzLnBvaW50Mi5lcXVhbHMocCkgfHwgdGhpcy5wb2ludDMuZXF1YWxzKHApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGh0dHA6Ly9qc2ZpZGRsZS5uZXQvUGVycm9BWlVML3pkYVk4LzEvXHJcbiAgICBwdWJsaWMgY29udGFpbnMgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuID0+IHtcclxuICAgICAgICB2YXIgcyA9ICh0aGlzLnBvaW50MS55ICogdGhpcy5wb2ludDMueCAtIHRoaXMucG9pbnQxLnggKiB0aGlzLnBvaW50My55ICsgKHRoaXMucG9pbnQzLnkgLSB0aGlzLnBvaW50MS55KSAqIHggKyAodGhpcy5wb2ludDEueCAtIHRoaXMucG9pbnQzLngpICogeSkgKiB0aGlzLnNpZ247XHJcbiAgICAgICAgdmFyIHQgPSAodGhpcy5wb2ludDEueCAqIHRoaXMucG9pbnQyLnkgLSB0aGlzLnBvaW50MS55ICogdGhpcy5wb2ludDIueCArICh0aGlzLnBvaW50MS55IC0gdGhpcy5wb2ludDIueSkgKiB4ICsgKHRoaXMucG9pbnQyLnggLSB0aGlzLnBvaW50MS54KSAqIHkpICogdGhpcy5zaWduO1xyXG4gICAgICAgIHJldHVybiAocyA+IDAgJiYgdCA+IDAgJiYgKHMgKyB0KSA8IDIgKiB0aGlzLmFyZWEgKiB0aGlzLnNpZ24pIHx8ICh0aGlzLmlzVmVydGV4KG5ldyBQb2ludCh4LCB5KSkpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7SXRlbX0gZnJvbSBcIi4uL2l0ZW1zL0l0ZW1cIlxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEludGVyYWN0aW9uXHJcbntcclxuICAgIC8vIGl0ZW0gY2FuIGJlIG51bGxcclxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBpdGVtOiBJdGVtKSB7fVxyXG5cclxuICAgIC8vIGludGVyYWN0IHdpdGggdGhlIG9iamVjdFxyXG4gICAgcHVibGljIGFic3RyYWN0IGludGVyYWN0KGl0ZW06IEl0ZW0pOiAge3RleHQ6IHN0cmluZywgaXRlbXM6IEFycmF5PEl0ZW0+fTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0SXRlbSgpOiBJdGVtXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0pTT05Mb2FkZXJ9IGZyb20gXCIuLi9yZXNvdXJjZXMvSlNPTkxvYWRlclwiXHJcbmltcG9ydCB7SW1hZ2VMb2FkZXJ9IGZyb20gXCIuLi9yZXNvdXJjZXMvSW1hZ2VMb2FkZXJcIlxyXG5pbXBvcnQge1RleHR1cmVBdGxhc30gZnJvbSBcIi4uL3Nwcml0ZXMvVGV4dHVyZUF0bGFzXCJcclxuaW1wb3J0IHtTcHJpdGV9IGZyb20gXCIuLi9zcHJpdGVzL1Nwcml0ZVwiXHJcbmltcG9ydCB7U3RhdGljU3ByaXRlfSBmcm9tIFwiLi4vc3ByaXRlcy9TdGF0aWNTcHJpdGVcIlxyXG5pbXBvcnQge0FuaW1hdGVkU3ByaXRlfSBmcm9tIFwiLi4vc3ByaXRlcy9BbmltYXRlZFNwcml0ZVwiXHJcbmltcG9ydCB7SW50ZXJhY3RhYmxlU3ByaXRlfSBmcm9tIFwiLi4vc3ByaXRlcy9JbnRlcmFjdGFibGVTcHJpdGVcIlxyXG5pbXBvcnQge05QQ1Nwcml0ZX0gZnJvbSBcIi4uL3Nwcml0ZXMvTlBDU3ByaXRlXCJcclxuaW1wb3J0IHtTcHJpdGVBbmltYXRpb259IGZyb20gXCIuLi9zcHJpdGVzL1Nwcml0ZUFuaW1hdGlvblwiXHJcbmltcG9ydCB7TmF2TWVzaH0gZnJvbSBcIi4uL2NvbGxpc2lvbi9OYXZNZXNoXCJcclxuaW1wb3J0IHtUcmlhbmdsZX0gZnJvbSBcIi4uL2NvbGxpc2lvbi9UcmlhbmdsZVwiXHJcbmltcG9ydCB7SW50ZXJhY3Rpb259ICBmcm9tIFwiLi9JbnRlcmFjdGlvblwiXHJcbmltcG9ydCB7UmVjZWl2ZUl0ZW1JbnRlcmFjdGlvbn0gZnJvbSBcIi4vUmVjZWl2ZUl0ZW1JbnRlcmFjdGlvblwiXHJcbmltcG9ydCB7SXRlbX0gZnJvbSBcIi4uL2l0ZW1zL0l0ZW1cIlxyXG5pbXBvcnQge0NpcmNsZX0gZnJvbSBcIi4uL2NvbGxpc2lvbi9DaXJjbGVcIlxyXG5pbXBvcnQge1JlY3RhbmdsZX0gZnJvbSBcIi4uL2NvbGxpc2lvbi9SZWN0YW5nbGVcIlxyXG5pbXBvcnQge0NvbnZlcnNhdGlvbn0gZnJvbSBcIi4uL2NoYXQvQ29udmVyc2F0aW9uXCJcclxuaW1wb3J0IHtEaWFsb2d9IGZyb20gXCIuLi9jaGF0L0RpYWxvZ1wiXHJcbmltcG9ydCB7Q29udGludWVEaWFsb2d9IGZyb20gXCIuLi9jaGF0L0NvbnRpbnVlRGlhbG9nXCJcclxuaW1wb3J0IHtPcHRpb25EaWFsb2d9IGZyb20gXCIuLi9jaGF0L09wdGlvbkRpYWxvZ1wiXHJcbmltcG9ydCB7UmVjZWl2ZUl0ZW1EaWFsb2d9IGZyb20gXCIuLi9jaGF0L1JlY2VpdmVJdGVtRGlhbG9nXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBMZXZlbFxyXG57XHJcbiAgICBzdGF0aWMgbG9hZExldmVsKHBhdGg6IHN0cmluZywgaXRlbXM6IGFueSk6IFByb21pc2U8YW55PlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbGV2ZWxEYXRhUHJvbWlzZSA9IEpTT05Mb2FkZXIubG9hZEpTT05GaWxlKHBhdGgpLnRoZW4oKGxldmVsRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIHRoZSB0ZXh0dXJlIGF0bGFzXHJcbiAgICAgICAgICAgICAgICBsZXQgYXRsYXMgPSBuZXcgVGV4dHVyZUF0bGFzKGxldmVsRGF0YS50ZXh0dXJlX2F0bGFzKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRleHR1cmVBdGxhc1Byb21pc2UgPSBhdGxhcy5sb2FkKCkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3I6IHRleHR1cmUgYXRsYXMgY291bGQgbm90IGJlIGxvYWRlZFwiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBhbGxQcm9taXNlcyA9IFt0ZXh0dXJlQXRsYXNQcm9taXNlXTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgdGhlIHNwcml0ZXNcclxuICAgICAgICAgICAgICAgIGxldCBzdGF0aWNTcHJpdGVzID0gbmV3IEFycmF5PFN0YXRpY1Nwcml0ZT4oKTtcclxuICAgICAgICAgICAgICAgIGxldCBpbnRlcmFjdGFibGVTcHJpdGVzID0gbmV3IEFycmF5PEludGVyYWN0YWJsZVNwcml0ZT4oKTtcclxuICAgICAgICAgICAgICAgIGxldCBucGNTcHJpdGVzID0gbmV3IEFycmF5PE5QQ1Nwcml0ZT4oKTtcclxuICAgICAgICAgICAgICAgIGZvcihjb25zdCBvYmogb2YgbGV2ZWxEYXRhLnNwcml0ZXMpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYob2JqLnR5cGUgPT0gXCJpbnRlcmFjdGFibGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW50ZXJhY3Rpb25zID0gbmV3IEFycmF5PEludGVyYWN0aW9uPigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IoY29uc3QgaW50ZXIgb2Ygb2JqLmludGVyYWN0aW9ucykgICAgLy8gY3JlYXRlIGFuIGFycmF5IG9mIGludGVyYWN0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpbnRlci50eXBlID09IFwicmVjZWl2ZV9pdGVtXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVjZWl2ZUl0ZW1zID0gbmV3IEFycmF5PEl0ZW0+KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGNvbnN0IGl0bSBvZiBpbnRlci5pdGVtc19yZWNlaXZlZCkgICAvLyBjcmVhdGUgYW4gYXJyYXkgb2YgcmVjZWl2ZSBpdGVtc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZUl0ZW1zLnB1c2goaXRlbXNbaXRtXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVyYWN0aW9ucy5wdXNoKG5ldyBSZWNlaXZlSXRlbUludGVyYWN0aW9uKGludGVyLml0ZW0gPyBpdGVtc1tpbnRlci5pdGVtXSA6IG51bGwsIGludGVyLnN1Y2Nlc3NfdGV4dCwgaW50ZXIuZmFpbF90ZXh0LCByZWNlaXZlSXRlbXMpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludGVyYWN0YWJsZVNwcml0ZXMucHVzaChuZXcgSW50ZXJhY3RhYmxlU3ByaXRlKG9iai54LCBvYmoueSwgb2JqLnNjYWxlLCBvYmoub3JpZ2luX2hvcml6b250YWwsIG9iai5vcmlnaW5fdmVydGljYWwsIGF0bGFzLCBvYmouaW1hZ2VfbmFtZSwgb2JqLmV4YW1pbmVfdGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ2lyY2xlKG9iai54LCBvYmoueSwgb2JqLmludGVyYWN0aW9uX3JhZGl1cyksIG5ldyBSZWN0YW5nbGUob2JqLngtb2JqLmNsaWNrX3pvbmVfd2lkdGgvMiwgb2JqLnktb2JqLmNsaWNrX3pvbmVfaGVpZ2h0LzIsIG9iai5jbGlja196b25lX3dpZHRoLCBvYmouY2xpY2tfem9uZV9oZWlnaHQpLCBpbnRlcmFjdGlvbnMpKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYob2JqLnR5cGUgPT0gXCJucGNcIikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbG9hZCB0aGUgYW5pbWF0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXRsYXMgPSBuZXcgVGV4dHVyZUF0bGFzKG9iai5hdGxhcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbmltYXRpb25zOiBBcnJheTxTcHJpdGVBbmltYXRpb24+ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0bGFzTG9hZGVkUHJvbWlzZSA9IGF0bGFzLmxvYWQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgc2VxdWVuY2VOYW1lIGluIG9iai5hbmltYXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VxID0gb2JqLmFuaW1hdGlvbnNbc2VxdWVuY2VOYW1lXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbmltID0gbmV3IFNwcml0ZUFuaW1hdGlvbihzZXEubnVtX2ZyYW1lcywgYXRsYXMsIHNlcXVlbmNlTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9ucy5wdXNoKGFuaW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5wY1Nwcml0ZXMucHVzaChuZXcgTlBDU3ByaXRlKG9iai54LCBvYmoueSwgb2JqLnNjYWxlLCBvYmoub3JpZ2luX2hvcml6b250YWwsIG9iai5vcmlnaW5fdmVydGljYWwsIGFuaW1hdGlvbnMsIG9iai5leGFtaW5lX3RleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDaXJjbGUob2JqLngsIG9iai55LCBvYmouaW50ZXJhY3Rpb25fcmFkaXVzKSwgbmV3IFJlY3RhbmdsZShvYmoueC1vYmouY2xpY2tfem9uZV93aWR0aC8yLCBvYmoueS1vYmouY2xpY2tfem9uZV9oZWlnaHQvMiwgb2JqLmNsaWNrX3pvbmVfd2lkdGgsIG9iai5jbGlja196b25lX2hlaWdodCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExldmVsLmJ1aWxkQ29udmVyc2F0aW9uKG9iaikpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yOiB1bmFibGUgdG8gbG9hZCBzcHJpdGUgdGV4dHVyZSBhdGxhcycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsUHJvbWlzZXMucHVzaChhdGxhc0xvYWRlZFByb21pc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1Nwcml0ZXMucHVzaChuZXcgU3RhdGljU3ByaXRlKG9iai54LCBvYmoueSwgb2JqLnNjYWxlLCBvYmoub3JpZ2luX2hvcml6b250YWwsIG9iai5vcmlnaW5fdmVydGljYWwsIGF0bGFzLCBvYmouaW1hZ2VfbmFtZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgdGhlIG5hdm1lc2hcclxuICAgICAgICAgICAgICAgIGxldCB0cmlzID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IHRyaSBvZiBsZXZlbERhdGEubmF2bWVzaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyaXMucHVzaChuZXcgVHJpYW5nbGUodHJpLngxLCB0cmkueTEsIHRyaS54MiwgdHJpLnkyLCB0cmkueDMsIHRyaS55MykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IG5hdm1lc2ggPSBuZXcgTmF2TWVzaCh0cmlzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChhbGxQcm9taXNlcykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGNvbnN0IHNwcml0ZSBvZiBzdGF0aWNTcHJpdGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZS5yZWZyZXNoSW1hZ2UoKTsgIC8vIHRleHR1cmUgYXRsYXMgcHJvYmFibHkgaGFkbid0IGxvYWRlZCB3aGVuIHNwcml0ZSB3YXMgaW5pdGlhbGlzZWQgc28gcmVmcmVzaCBpbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGNvbnN0IHNwcml0ZSBvZiBpbnRlcmFjdGFibGVTcHJpdGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZS5yZWZyZXNoSW1hZ2UoKTsgIC8vIHRleHR1cmUgYXRsYXMgcHJvYmFibHkgaGFkbid0IGxvYWRlZCB3aGVuIHNwcml0ZSB3YXMgaW5pdGlhbGlzZWQgc28gcmVmcmVzaCBpbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7J3RleHR1cmVBdGxhcyc6IGF0bGFzLCAnc2NlbmVTY2FsZSc6IGxldmVsRGF0YS5zY2VuZV9zY2FsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwbGF5ZXJTdGFydFgnOiBsZXZlbERhdGEucGxheWVyX3N0YXJ0X3gsICdwbGF5ZXJTdGFydFknOiBsZXZlbERhdGEucGxheWVyX3N0YXJ0X3ksICdwbGF5ZXJTdGFydHMnOiBsZXZlbERhdGEucGxheWVyX3N0YXJ0cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkZXB0aFNjYWxlWSc6IGxldmVsRGF0YS5kZXB0aF9zY2FsZV95LCAnbmF2bWVzaCc6IG5hdm1lc2gsICdzdGF0aWNTcHJpdGVzJzogc3RhdGljU3ByaXRlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpbnRlcmFjdGFibGVTcHJpdGVzJzogaW50ZXJhY3RhYmxlU3ByaXRlcywgJ25wY1Nwcml0ZXMnOiBucGNTcHJpdGVzfSk7XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3I6IGZhaWxlZCB0byBsb2FkIGxldmVsXCIpO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG51bGwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBidWlsZENvbnZlcnNhdGlvbihzcHJpdGVPYmo6IGFueSk6IENvbnZlcnNhdGlvblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7SW50ZXJhY3Rpb259IGZyb20gXCIuL0ludGVyYWN0aW9uXCJcclxuaW1wb3J0IHtJdGVtfSBmcm9tIFwiLi4vaXRlbXMvSXRlbVwiXHJcblxyXG5leHBvcnQgY2xhc3MgUmVjZWl2ZUl0ZW1JbnRlcmFjdGlvbiBleHRlbmRzIEludGVyYWN0aW9uXHJcbntcclxuICAgIC8vIGl0ZW0gY2FuIGJlIG51bGxcclxuICAgIGNvbnN0cnVjdG9yKGl0ZW06IEl0ZW0sIHByb3RlY3RlZCBzdWNjZXNzVGV4dDogc3RyaW5nLCBwcm90ZWN0ZWQgZmFpbFRleHQ6IHN0cmluZywgcHJvdGVjdGVkIGl0ZW1zUmVjZWl2ZWQ6IEFycmF5PEl0ZW0+KVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGludGVyYWN0IHdpdGggdGhlIG9iamVjdFxyXG4gICAgLy8gcmV0dXJucyBhIGxpc3Qgb2YgaXRlbXMgcmVjZWl2ZWQgZnJvbSB0aGUgaW50ZXJhY3Rpb25cclxuICAgIHB1YmxpYyBpbnRlcmFjdChpdGVtOiBJdGVtKToge3RleHQ6IHN0cmluZywgaXRlbXM6IEFycmF5PEl0ZW0+fVxyXG4gICAge1xyXG4gICAgICAgIGlmKGl0ZW0gPT0gdGhpcy5pdGVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHt0ZXh0OiB0aGlzLnN1Y2Nlc3NUZXh0LCBpdGVtczogdGhpcy5pdGVtc1JlY2VpdmVkfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7dGV4dDogdGhpcy5mYWlsVGV4dCwgaXRlbXM6IG51bGx9O1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBsZXQgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuZXhwb3J0IGxldCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0Q2FudmFzQW5kQ29udGV4dCgpXHJcbntcclxuICAgIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb249J2Rlc3RpbmF0aW9uLW92ZXInO1xyXG4gICAgY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IHRydWU7ICAgLy8gZW5hYmxlIGFudGktYWxpYXNpbmcgb2YgaW1hZ2VzXHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIElucHV0TWFuYWdlclxyXG57XHJcbiAgICBwcml2YXRlIG1vdXNlRG93bkNhbGxiYWNrczogQXJyYXk8KGU6IE1vdXNlRXZlbnQpID0+IHZvaWQ+ID0gQXJyYXk8KCkgPT4gdm9pZD4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLm1vdXNlRG93bik7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIGV2ZW50ID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkpOyAgLy8gZGlzYWJsZSByaWdodCBjbGljayBjb250ZXh0IG1lbnVcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW91c2VEb3duID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIC8vIG5vdGlmeSBhbGwgY2FsbGJhY2tzXHJcbiAgICAgICAgZm9yKGNvbnN0IGNhbGxiYWNrIG9mIHRoaXMubW91c2VEb3duQ2FsbGJhY2tzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRNb3VzZURvd25DYWxsYmFjayhjYWxsYmFjazogKGU6IE1vdXNlRXZlbnQpID0+IHZvaWQpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5tb3VzZURvd25DYWxsYmFja3MucHVzaChjYWxsYmFjayk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtJdGVtfSBmcm9tIFwiLi9JdGVtXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnZlbnRvcnlcclxue1xyXG4gICAgcHJpdmF0ZSBpdGVtcyA9IG5ldyBBcnJheTxJdGVtPig5KTsgLy8gTUFYX05VTV9JVEVNUyA9IDlcclxuXHJcbiAgICBwdWJsaWMgYWRkSXRlbShpdGVtOiBJdGVtKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIGlmKGl0ZW0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAvLyBhZGQgdGhlIGl0ZW0gdG8gdGhlIGZpcnN0IGF2YWlsYWJsZSBzbG90XHJcbiAgICAgICAgICAgIGZvcihsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpbmRleCArKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5pdGVtc1tpbmRleF0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNbaW5kZXhdID0gaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZUl0ZW0oaXRlbTogSXRlbSk6IEl0ZW1cclxuICAgIHtcclxuICAgICAgICBmb3IobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLml0ZW1zLmxlbmd0aDsgaW5kZXggKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZih0aGlzLml0ZW1zW2luZGV4XSA9PT0gaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZW1vdmVkIFwiICsgaXRlbS5nZXROYW1lKCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtc1tpbmRleF0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXNbaW5kZXhdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVJdGVtQnlJbmRleChpbmRleDogbnVtYmVyKTogSXRlbVxyXG4gICAge1xyXG4gICAgICAgIGlmKGluZGV4ICE9IG51bGwgJiYgaW5kZXggPCB0aGlzLml0ZW1zLmxlbmd0aClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW1zW2luZGV4XTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtc1tpbmRleF0gPSBudWxsO1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1vdmVJdGVtKGl0ZW06IEl0ZW0sIGluZGV4OiBudW1iZXIpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYodGhpcy5pdGVtc1tpbmRleF0gPT0gbnVsbCkgeyAvLyBpZiBuZXcgaXRlbXNsb3QgaXMgZnJlZVxyXG4gICAgICAgICAgICBsZXQgeCA9IHRoaXMucmVtb3ZlSXRlbShpdGVtKTtcclxuICAgICAgICAgICAgaWYoeCAhPSBudWxsKSB7IC8vIGNoZWNrIHRoZSBwbGF5ZXIgYWN0dWFsbHkgaGFkIHRoZSBpdGVtXHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW2luZGV4XSA9IGl0ZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsZWFyKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBmb3IobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLml0ZW1zLmxlbmd0aDsgaW5kZXggKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1zW2luZGV4XSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJdGVtcygpOiBBcnJheTxJdGVtPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBJdGVtXHJcbntcclxuICAgIHByb3RlY3RlZCBjb21iaW5hdGlvbnM6IEFycmF5PHtvdGhlcjogSXRlbSwgb3V0OiBBcnJheTxJdGVtPn0+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBuYW1lOiBzdHJpbmcsIHByb3RlY3RlZCBleGFtaW5lVGV4dDogc3RyaW5nLCBwcm90ZWN0ZWQgaW1ncGF0aDogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY29tYmluYXRpb25zID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbWJpbmUob3RoZXI6IEl0ZW0pOiBBcnJheTxJdGVtPlxyXG4gICAge1xyXG4gICAgICAgIGZvcihjb25zdCBjbWIgb2YgdGhpcy5jb21iaW5hdGlvbnMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBpZiB0aGUgaXRlbSBpcyBjb21iaW5hYmxlLCByZXR1cm4gdGhlIGFycmF5IG9mIGl0ZW1zIGNyZWF0ZWRcclxuICAgICAgICAgICAgaWYob3RoZXIgPT09IGNtYi5vdGhlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNtYi5vdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRDb21iaW5hdGlvbihvdGhlcjogSXRlbSwgb3V0OiBBcnJheTxJdGVtPik6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZihvdGhlciAhPSBudWxsICYmIG91dCAhPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jb21iaW5hdGlvbnMucHVzaCh7b3RoZXI6IG90aGVyLCBvdXQ6IG91dH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TmFtZSgpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRFeGFtaW5lVGV4dCgpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5leGFtaW5lVGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SW1hZ2VQYXRoKCk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmltZ3BhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBgSXRlbSgke3RoaXMubmFtZX0pYDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge2NhbnZhcywgY3R4LCBpbml0Q2FudmFzQW5kQ29udGV4dH0gZnJvbSBcIi4vZ2xvYlwiXHJcbmltcG9ydCB7TmF2TWVzaH0gZnJvbSBcIi4vY29sbGlzaW9uL05hdk1lc2hcIlxyXG5pbXBvcnQge1RyaWFuZ2xlfSBmcm9tIFwiLi9jb2xsaXNpb24vVHJpYW5nbGVcIlxyXG5pbXBvcnQge0lTaGFwZX0gZnJvbSBcIi4vY29sbGlzaW9uL0lTaGFwZVwiXHJcbmltcG9ydCB7SW5wdXRNYW5hZ2VyfSBmcm9tIFwiLi9pbnB1dC9JbnB1dE1hbmFnZXJcIlxyXG5pbXBvcnQge0ltYWdlTG9hZGVyfSBmcm9tIFwiLi9yZXNvdXJjZXMvSW1hZ2VMb2FkZXJcIlxyXG5pbXBvcnQge0pTT05Mb2FkZXJ9IGZyb20gXCIuL3Jlc291cmNlcy9KU09OTG9hZGVyXCJcclxuaW1wb3J0IHtMZXZlbH0gZnJvbSBcIi4vZ2FtZS9MZXZlbFwiXHJcbmltcG9ydCB7U3RhdGljU3ByaXRlfSBmcm9tIFwiLi9zcHJpdGVzL1N0YXRpY1Nwcml0ZVwiXHJcbmltcG9ydCB7QW5pbWF0ZWRTcHJpdGV9IGZyb20gXCIuL3Nwcml0ZXMvQW5pbWF0ZWRTcHJpdGVcIlxyXG5pbXBvcnQge0ludGVyYWN0YWJsZVNwcml0ZX0gZnJvbSBcIi4vc3ByaXRlcy9JbnRlcmFjdGFibGVTcHJpdGVcIlxyXG5pbXBvcnQge05hdlNwcml0ZX0gZnJvbSBcIi4vc3ByaXRlcy9OYXZTcHJpdGVcIlxyXG5pbXBvcnQge1Nwcml0ZUFuaW1hdGlvbn0gZnJvbSBcIi4vc3ByaXRlcy9TcHJpdGVBbmltYXRpb25cIlxyXG5pbXBvcnQge1RleHR1cmVBdGxhc30gZnJvbSBcIi4vc3ByaXRlcy9UZXh0dXJlQXRsYXNcIlxyXG5pbXBvcnQge1BsYXllclNwcml0ZX0gZnJvbSBcIi4vc3ByaXRlcy9QbGF5ZXJTcHJpdGVcIlxyXG5pbXBvcnQge05QQ1Nwcml0ZX0gZnJvbSBcIi4vc3ByaXRlcy9OUENTcHJpdGVcIlxyXG5pbXBvcnQge0l0ZW19IGZyb20gXCIuL2l0ZW1zL0l0ZW1cIlxyXG5pbXBvcnQge0ludmVudG9yeX0gZnJvbSBcIi4vaXRlbXMvSW52ZW50b3J5XCJcclxuXHJcbmxldCBpbnB1dE1hbmFnZXIgPSBuZXcgSW5wdXRNYW5hZ2VyKCk7XHJcbmxldCBpbWc6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbmxldCBzY2VuZVNjYWxlOiBudW1iZXI7XHJcbmxldCBsZXZlbFNjYWxlOiBudW1iZXI7XHJcbmxldCBkZXB0aFNjYWxlWTogbnVtYmVyO1xyXG5sZXQgc3RhdGljU3ByaXRlcyA9IG5ldyBBcnJheTxTdGF0aWNTcHJpdGU+KCk7XHJcbmxldCBpbnRlcmFjdGFibGVTcHJpdGVzID0gbmV3IEFycmF5PEludGVyYWN0YWJsZVNwcml0ZT4oKTtcclxubGV0IG5wY1Nwcml0ZXMgPSBuZXcgQXJyYXk8TlBDU3ByaXRlPigpO1xyXG5sZXQgcGxheWVyU3ByaXRlO1xyXG5sZXQgbmF2bWVzaDtcclxuXHJcbmxldCBpdGVtcyA9IHt9OyAgICAgICAgIC8vIGRhdGFiYXNlIG9mIGl0ZW1zXHJcbmxldCBpdGVtc2xvdGJ0bnMgPSBbXTsgIC8vIGFycmF5IG9mIGl0ZW1zbG90IGh0bWwgYnV0dG9uc1xyXG5sZXQgaXRlbWJ0bnMgPSBbXTsgICAgICAvLyBhcnJheSBvZiBpdGVtIGh0bWwgYnV0dG9uc1xyXG5sZXQgaW52ZW50ID0gbmV3IEludmVudG9yeSgpOyAvLyB0aGUgcGxheWVyJ3MgaW52ZW50b3J5XHJcbmxldCBzZWxlY3RlZEl0ZW07ICAgICAgIC8vIHVzZXIgY2FuIHNlbGVjdCBhbiBpdGVtIGZyb20gaW52ZW50b3J5IGJ5IGxlZnQgY2xpY2tpbmdcclxubGV0IHNlbGVjdGVkSXRlbUJ0bjtcclxuXHJcbmxldCBmYldpZHRoO1xyXG5sZXQgZmJIZWlnaHQ7XHJcblxyXG5sZXQgbGFzdFRpbWU7XHJcblxyXG5mdW5jdGlvbiBnYW1lTG9vcCgpIC8vIFRPRE8gLSBzcGxpdCBkcmF3IGludG8gdXBkYXRlIGFuZCBkcmF3IGZ1bmN0aW9uc1xyXG57XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBmYldpZHRoLCBmYkhlaWdodCk7XHJcblxyXG4gICAgLy8gc2V0IG9yaWdpbiB0byB0aGUgY2FudmFzJ3MgY2VudHJlXHJcbiAgICBjdHguc2F2ZSgpO1xyXG4gICAgY3R4LnRyYW5zbGF0ZShmYldpZHRoLzIsIGZiSGVpZ2h0LzIpO1xyXG4gICAgY3R4LnNjYWxlKHNjZW5lU2NhbGUsIHNjZW5lU2NhbGUpO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgIGNvbnN0IGRlbHRhVGltZSA9IGN1cnJlbnRUaW1lIC0gbGFzdFRpbWU7XHJcblxyXG4gICAgLy8gZHJhdyB0aGUgc2NlbmUgc3BlY2lmaWMgc3ByaXRlc1xyXG4gICAgZm9yKGNvbnN0IHNwcml0ZSBvZiBzdGF0aWNTcHJpdGVzKVxyXG4gICAge1xyXG4gICAgICAgIHNwcml0ZS5kcmF3KGN1cnJlbnRUaW1lLCBkZWx0YVRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGRyYXcgdGhlIHNwcml0ZXMgd2hpY2ggdGhlIHBsYXllciBjYW4gaW50ZXJhY3Qgd2l0aFxyXG4gICAgZm9yKGNvbnN0IHNwcml0ZSBvZiBpbnRlcmFjdGFibGVTcHJpdGVzKVxyXG4gICAge1xyXG4gICAgICAgIHNwcml0ZS5kcmF3KGN1cnJlbnRUaW1lLCBkZWx0YVRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGRyYXcgdGhlIE5QQyBzcHJpdGVzXHJcbiAgICBmb3IoY29uc3Qgc3ByaXRlIG9mIG5wY1Nwcml0ZXMpXHJcbiAgICB7XHJcbiAgICAgICAgc3ByaXRlLmRyYXcoY3VycmVudFRpbWUsIGRlbHRhVGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZHJhdyB0aGUgcGxheWVyIHNwcml0ZVxyXG4gICAgcGxheWVyU3ByaXRlLmRyYXcoY3VycmVudFRpbWUsIGRlbHRhVGltZSk7XHJcblxyXG4gICAgLy8gREVCVUcgLSBkcmF3IHRoZSBjb2xsaXNpb24gYm94ZXNcclxuICAgIG5hdm1lc2guZHJhdygpO1xyXG5cclxuICAgIC8vIHJlc3RvcmUgY2FudmFzIHRvIG9yaWdpbmFsIHNldHRpbmdzXHJcbiAgICBjdHgucmVzdG9yZSgpO1xyXG5cclxuICAgIGxhc3RUaW1lID0gY3VycmVudFRpbWU7XHJcbn1cclxuXHJcbmlucHV0TWFuYWdlci5hZGRNb3VzZURvd25DYWxsYmFjaygoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgIGxldCB4ID0gKGV2ZW50LmxheWVyWCAtIGNhbnZhcy5vZmZzZXRMZWZ0IC0gZmJXaWR0aC8yKSAvIHNjZW5lU2NhbGU7XHJcbiAgICBsZXQgeSA9IChldmVudC5sYXllclkgLSBjYW52YXMub2Zmc2V0VG9wIC0gZmJIZWlnaHQvMikgLyBzY2VuZVNjYWxlO1xyXG4gICAgY29uc29sZS5sb2coXCJtb3VzZSBkb3duIGF0IChcIiArIHggKyBcIiwgXCIgKyB5ICsgXCIpXCIpO1xyXG5cclxuICAgIGxldCBpbnRlcmFjdGVkV2l0aFNwcml0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGZvcihjb25zdCBzcHJpdGUgb2YgaW50ZXJhY3RhYmxlU3ByaXRlcylcclxuICAgIHtcclxuICAgICAgICBpZihldmVudC5idXR0b24gPT09IDApIHsgIC8vIGxlZnQgbW91c2UgYnV0dG9uIHByZXNzXHJcbiAgICAgICAgICAgIGlmKHNwcml0ZS5pbkludGVyYWN0aW9uWm9uZShwbGF5ZXJTcHJpdGUueCwgcGxheWVyU3ByaXRlLnkpICYmIHNwcml0ZS5pbkNsaWNrWm9uZSh4LCB5KSkge1xyXG4gICAgICAgICAgICAgICAgLy8gaW50ZXJhY3Qgd2l0aCB0aGUgc3ByaXRlXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvYmogPSBzcHJpdGUuaW50ZXJhY3Qoc2VsZWN0ZWRJdGVtKTtcclxuICAgICAgICAgICAgICAgIGlmKG9iaiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyU3ByaXRlLm9wZW5TcGVlY2hCdWJibGUob2JqLnRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcihjb25zdCBpdG0gb2Ygb2JqLml0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludmVudC5hZGRJdGVtKGl0bSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hBbGxJdGVtc0Rpc3BsYXllZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyU3ByaXRlLm9wZW5TcGVlY2hCdWJibGUoXCJUaGF0J3MgYSBydWJiaXNoIGlkZWEhXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW50ZXJhY3RlZFdpdGhTcHJpdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYoZXZlbnQuYnV0dG9uID09PSAyKSB7IC8vIHJpZ2h0IG1vdXNlIGJ1dHRvbiBwcmVzc1xyXG4gICAgICAgICAgICBpZihzcHJpdGUuaW5DbGlja1pvbmUoeCwgeSkpIHtcclxuICAgICAgICAgICAgICAgIC8vIGV4YW1pbmUgdGhlIGludGVyYWN0YWJsZSBzcHJpdGVcclxuICAgICAgICAgICAgICAgIHBsYXllclNwcml0ZS5vcGVuU3BlZWNoQnViYmxlKHNwcml0ZS5nZXRFeGFtaW5lVGV4dCgpKTtcclxuICAgICAgICAgICAgICAgIGludGVyYWN0ZWRXaXRoU3ByaXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmKCFpbnRlcmFjdGVkV2l0aFNwcml0ZSkge1xyXG4gICAgICAgIGlmKGV2ZW50LmJ1dHRvbiA9PT0gMCkgIC8vIGxlZnQgbW91c2UgYnV0dG9uIHByZXNzXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgd2F5cG9pbnRzID0gbmF2bWVzaC5nZXRXYXlwb2ludHMocGxheWVyU3ByaXRlLngsIHBsYXllclNwcml0ZS55LCB4LCB5KTtcclxuICAgICAgICAgICAgcGxheWVyU3ByaXRlLnNldFdheXBvaW50cyh3YXlwb2ludHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5mdW5jdGlvbiBsb2FkUGxheWVyU3ByaXRlKCk6IFByb21pc2U8QW5pbWF0ZWRTcHJpdGU+XHJcbntcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxBbmltYXRlZFNwcml0ZT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGxldCBhdGxhcyA9IG5ldyBUZXh0dXJlQXRsYXMoXCJyZXMvYXRsYXNlcy9hbmltYXRlZC5wbmdcIik7XHJcbiAgICAgICAgbGV0IHBsYXllclNwcml0ZTtcclxuICAgICAgICBjb25zdCBhdGxhc0xvYWRlZFByb21pc2UgPSBhdGxhcy5sb2FkKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IFRFU1RfQU5JTUFUSU9OID0gbmV3IFNwcml0ZUFuaW1hdGlvbigyLCBhdGxhcywgXCJhbmltYXRlZFwiKTtcclxuICAgICAgICAgICAgcGxheWVyU3ByaXRlID0gbmV3IFBsYXllclNwcml0ZSgxMDAsIDIwMCwgMS4yNSwgXCJjZW50cmVcIiwgXCJ0b3BcIiwgW1RFU1RfQU5JTUFUSU9OXSk7XHJcbiAgICAgICAgICAgIHBsYXllclNwcml0ZS5zZXRDdXJyZW50QW5pbWF0aW9uKDApO1xyXG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yOiB1bmFibGUgdG8gbG9hZCBwbGF5ZXIgc3ByaXRlIHRleHR1cmUgYXRsYXMnKTtcclxuICAgICAgICAgICAgcmVqZWN0KG51bGwpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgc3BlZWNoQnViYmxlSW1hZ2U7XHJcbiAgICAgICAgY29uc3Qgc3BlZWNoQnViYmxlTG9hZGVkUHJvbWlzZSA9IEltYWdlTG9hZGVyLmxvYWRJbWFnZShcInJlcy9pbWFnZXMvc3BlZWNoX2J1YmJsZS5wbmdcIikudGhlbigoaW1nKSA9PiB7XHJcbiAgICAgICAgICAgIHNwZWVjaEJ1YmJsZUltYWdlID0gaW1nO1xyXG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvcjogc3BlZWNoIGJ1YmJsZSBpbWFnZSBjb3VsZCBub3QgYmUgbG9hZGVkXCIpO1xyXG4gICAgICAgICAgICByZWplY3QobnVsbCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFByb21pc2UuYWxsKFthdGxhc0xvYWRlZFByb21pc2UsIHNwZWVjaEJ1YmJsZUxvYWRlZFByb21pc2VdKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgcGxheWVyU3ByaXRlLnNldFNwZWVjaEJ1YmJsZUltYWdlKHNwZWVjaEJ1YmJsZUltYWdlKTtcclxuICAgICAgICAgICAgcmVzb2x2ZShwbGF5ZXJTcHJpdGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIHByb2dyYW0gZW50cnkgcG9pbnRcclxud2luZG93Lm9ubG9hZCA9ICgpID0+XHJcbntcclxuICAgIGluaXRDYW52YXNBbmRDb250ZXh0KCk7XHJcblxyXG4gICAgLy8gc2V0IHRoZSBjYW52YXMgc2l6ZVxyXG4gICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiAwLjk1O1xyXG4gICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuOTU7XHJcbiAgICBmYldpZHRoID0gY2FudmFzLndpZHRoO1xyXG4gICAgZmJIZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xyXG5cclxuICAgIC8vIGxldmVsIHNldHVwIGRhdGFcclxuICAgIGxldCBwbGF5ZXJTdGFydFggPSAwO1xyXG4gICAgbGV0IHBsYXllclN0YXJ0WSA9IDA7XHJcblxyXG4gICAgY29uc3QgbG9hZFBsYXllclNwcml0ZVByb21pc2UgPSBsb2FkUGxheWVyU3ByaXRlKCkudGhlbigoc3ByaXRlKSA9PiB7XHJcbiAgICAgICAgcGxheWVyU3ByaXRlID0gc3ByaXRlO1xyXG4gICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBsb2FkSXRlbXNQcm9taXNlID0gSlNPTkxvYWRlci5sb2FkSlNPTkZpbGUoXCJyZXMvaXRlbXMvaXRlbXMuanNvblwiKS50aGVuKChvYmopID0+IHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKG9iai5pdGVtcylcclxuICAgICAgICBmb3IoY29uc3QgaWQgaW4gb2JqLml0ZW1zKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgaXRtID0gb2JqLml0ZW1zW2lkXTtcclxuICAgICAgICAgICAgaXRlbXNbaWRdID0gbmV3IEl0ZW0oaXRtLm5hbWUsIGl0bS5leGFtaW5lX3RleHQsIGl0bS5pbWFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihjb25zdCBpZCBpbiBvYmouY29tYmluYXRpb25zKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgY29tYmluYXRpb24gPSBvYmouY29tYmluYXRpb25zW2lkXTtcclxuICAgICAgICAgICAgY29uc3QgaXRlbTEgPSBpdGVtc1tjb21iaW5hdGlvbi5pdGVtMV07XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0yID0gaXRlbXNbY29tYmluYXRpb24uaXRlbTJdO1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtc091dCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IoY29uc3QgaWRPdXQgb2YgY29tYmluYXRpb24uaXRlbXNfb3V0KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpdGVtc091dC5wdXNoKGl0ZW1zW2lkT3V0XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoaXRlbTEgIT0gbnVsbCAmJiBpdGVtMiAhPSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpdGVtMS5hZGRDb21iaW5hdGlvbihpdGVtMiwgaXRlbXNPdXQpO1xyXG4gICAgICAgICAgICAgICAgaXRlbTIuYWRkQ29tYmluYXRpb24oaXRlbTEsIGl0ZW1zT3V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsb2FkUGxheWVySW52ZW50b3J5KFwiYWNrXCIpO1xyXG4gICAgICAgIGluaXRHVUlDb250cm9sbGVycygpO1xyXG4gICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3I6IGl0ZW1zIGNvdWxkIG5vdCBiZSBsb2FkZWRcIik7XHJcbiAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gTGV2ZWwubG9hZExldmVsKFwicmVzL2xldmVscy9sZXZlbDEuanNvblwiLCBpdGVtcyk7XHJcbiAgICB9KS50aGVuKChsZXZlbERhdGEpID0+IHtcclxuICAgICAgICBpbWcgPSBsZXZlbERhdGEuYmFja2dyb3VuZEltZztcclxuICAgICAgICBzdGF0aWNTcHJpdGVzID0gbGV2ZWxEYXRhLnN0YXRpY1Nwcml0ZXM7XHJcbiAgICAgICAgaW50ZXJhY3RhYmxlU3ByaXRlcyA9IGxldmVsRGF0YS5pbnRlcmFjdGFibGVTcHJpdGVzO1xyXG4gICAgICAgIG5wY1Nwcml0ZXMgPSBsZXZlbERhdGEubnBjU3ByaXRlcztcclxuICAgICAgICBsZXZlbFNjYWxlID0gbGV2ZWxEYXRhLnNjZW5lU2NhbGUgPyBsZXZlbERhdGEuc2NlbmVTY2FsZSA6IDEuMDtcclxuICAgICAgICBzY2VuZVNjYWxlID0gbGV2ZWxTY2FsZSAqIGNhbnZhcy5oZWlnaHQvODgwOyAgLy8gc2NhbGUgYmFzZWQgb24gdGhlIGNhbnZhcyBzaXplIHNvIGdhbWUgZml0cyBvbiBzY3JlZW5cclxuICAgICAgICBkZXB0aFNjYWxlWSA9IGxldmVsRGF0YS5kZXB0aFNjYWxlWTtcclxuXHJcbiAgICAgICAgcGxheWVyU3RhcnRYID0gbGV2ZWxEYXRhLnBsYXllclN0YXJ0WDtcclxuICAgICAgICBwbGF5ZXJTdGFydFkgPSBsZXZlbERhdGEucGxheWVyU3RhcnRZO1xyXG5cclxuICAgICAgICBuYXZtZXNoID0gbGV2ZWxEYXRhLm5hdm1lc2g7XHJcbiAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvcjogbGV2ZWwgY291bGQgbm90IGJlIGxvYWRlZFwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIFByb21pc2UuYWxsKFtsb2FkUGxheWVyU3ByaXRlUHJvbWlzZSwgbG9hZEl0ZW1zUHJvbWlzZV0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHBsYXllclNwcml0ZS54ID0gcGxheWVyU3RhcnRYO1xyXG4gICAgICAgIHBsYXllclNwcml0ZS55ID0gcGxheWVyU3RhcnRZO1xyXG4gICAgICAgIHBsYXllclNwcml0ZS5zZXRTdGFydFBvcyhwbGF5ZXJTdGFydFgsIHBsYXllclN0YXJ0WSk7XHJcbiAgICAgICAgcGxheWVyU3ByaXRlLnNldERlcHRoU2NhbGUoZGVwdGhTY2FsZVkpO1xyXG4gICAgICAgIGxhc3RUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBnYW1lTG9vcCgpO1xyXG4gICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3I6IGdhbWUgY291bGQgbm90IGJlIGxvYWRlZFwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIG9wZW5DaGF0R1VJKCk7XHJcbn1cclxuXHJcbi8vIG9uIHdpbmRvdyByZXNpemUgY2hhbmdlIHRoZSBzY2FsZVxyXG53aW5kb3cub25yZXNpemUgPSAoKSA9PiB7XHJcbiAgICAvLyBzZXQgdGhlIGNhbnZhcyBzaXplXHJcbiAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIDAuOTU7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICogMC45NTtcclxuICAgIGZiV2lkdGggPSBjYW52YXMud2lkdGg7XHJcbiAgICBmYkhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XHJcbiAgICBzY2VuZVNjYWxlID0gbGV2ZWxTY2FsZSAqIGNhbnZhcy5oZWlnaHQvODgwOyAgLy8gc2NhbGUgYmFzZWQgb24gdGhlIGNhbnZhcyBzaXplIHNvIGdhbWUgZml0cyBvbiBzY3JlZW5cclxuICAgIGNvbnNvbGUubG9nKHNjZW5lU2NhbGUpO1xyXG59XHJcblxyXG4vLyBsb2FkIHRoZSBwbGF5ZXIncyBpbnZlbnRvcnlcclxuZnVuY3Rpb24gbG9hZFBsYXllckludmVudG9yeShwYXRoOiBzdHJpbmcpIHtcclxuICAgIC8vIFRPRE8gLSBsb2FkIGZyb20gZmlsZVxyXG4gICAgLy9pbnZlbnQuYWRkSXRlbShpdGVtc1tcIjAuMC4xLTAwMVwiXSk7XHJcbiAgICAvL2ludmVudC5hZGRJdGVtKGl0ZW1zW1wiMC4wLjEtMDAyXCJdKTtcclxuICAgIGludmVudC5hZGRJdGVtKGl0ZW1zW1wiMC4wLjEtMDAyXCJdKTtcclxuICAgIC8vaW52ZW50LmFkZEl0ZW0oaXRlbXNbXCIwLjAuMS0wMDNcIl0pO1xyXG59XHJcblxyXG4vLyBjaGF0IGd1aVxyXG5mdW5jdGlvbiBvcGVuQ2hhdEdVSSgpIHtcclxuICAgIGNvbnN0IGh0bWwgPSBgXHJcbiAgICA8ZGl2IGlkPVwiY2hhdHBhbmVsXCI+XHJcbiAgICAgICAgPGltZyBjbGFzcz1cInBsYXllcmNoYXRoZWFkXCIgc3JjPVwicmVzL2ltYWdlcy9wbGF5ZXJfaGVhZC5wbmdcIj48L2ltZz5cclxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjaGF0bXNnXCI+RG8gSSBrbm93IHlvdT88L2xhYmVsPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJjaGF0b3B0aW9uXCI+Tm8sIHdlIGhhdmVuJ3QgbWV0PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNoYXRvcHRpb25cIj5ZZWFoLCB5b3UgaGF2ZSBteSB3cmVuY2g8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2hhdG9wdGlvblwiPkJhY2s8L2J1dHRvbj5cclxuICAgIDwvZGl2PmA7XHJcblxyXG4gICAgbGV0IGNoYXRwYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhdHBhbmVsX3BhcmVudFwiKTtcclxuICAgIGlmKGNoYXRwYW5lbCAhPSBudWxsKSB7XHJcbiAgICAgICAgLy8gcmVtb3ZlIHRoZSBjaGF0IHBhbmVsIGlmIGl0IGFscmVhZHkgZXhpc3RzXHJcbiAgICAgICAgY2hhdHBhbmVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hhdHBhbmVsKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGF0cGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2hhdHBhbmVsLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICBjaGF0cGFuZWwuaWQgPSBcImNoYXRwYW5lbF9wYXJlbnRcIjtcclxuICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGNoYXRwYW5lbCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnZlbnRcIikpO1xyXG59XHJcblxyXG4vLyBndWkgY29udHJvbFxyXG5mdW5jdGlvbiBpbml0R1VJQ29udHJvbGxlcnMoKSB7XHJcbiAgICAvLyBnZXQgYWxsIG9mIHRoZSBpdGVtIHNsb3QgaHRtbCBidXR0b25zXHJcbiAgICBpdGVtc2xvdGJ0bnMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zbG90MVwiKSk7XHJcbiAgICBpdGVtc2xvdGJ0bnMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zbG90MlwiKSk7XHJcbiAgICBpdGVtc2xvdGJ0bnMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zbG90M1wiKSk7XHJcbiAgICBpdGVtc2xvdGJ0bnMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zbG90NFwiKSk7XHJcbiAgICBpdGVtc2xvdGJ0bnMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zbG90NVwiKSk7XHJcbiAgICBpdGVtc2xvdGJ0bnMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zbG90NlwiKSk7XHJcbiAgICBpdGVtc2xvdGJ0bnMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zbG90N1wiKSk7XHJcbiAgICBpdGVtc2xvdGJ0bnMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zbG90OFwiKSk7XHJcbiAgICBpdGVtc2xvdGJ0bnMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zbG90OVwiKSk7XHJcblxyXG4gICAgLy8gYWRkIGEgYnV0dG9uIGZvciBlYWNoIGl0ZW0gaW4gdGhlIHBsYXllcidzIGludmVudG9yeVxyXG4gICAgZm9yKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaW52ZW50LmdldEl0ZW1zKCkubGVuZ3RoOyBpbmRleCArKykge1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBpbnZlbnQuZ2V0SXRlbXMoKVtpbmRleF07XHJcbiAgICAgICAgaWYoaXRlbSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIC8vIGFkZCBhIGJ1dHRvbiBmb3IgZWFjaCBpdGVtIGluIHRoZSBwbGF5ZXIncyBpbnZlbnRvcnlcclxuICAgICAgICAgICAgYWRkTmV3SXRlbUJ1dHRvbihpbmRleCwgaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvcihsZXQgaW5kZXggPSAwOyBpbmRleCA8IGl0ZW1zbG90YnRucy5sZW5ndGg7IGluZGV4ICsrKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zbG90YnRuID0gaXRlbXNsb3RidG5zW2luZGV4XTtcclxuICAgICAgICBpdGVtc2xvdGJ0bi5vbmNsaWNrID0gKGV2dDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBvbkl0ZW1TbG90Q2xpY2soaXRlbXNsb3RidG4sIGluZGV4LCBldnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkTmV3SXRlbUJ1dHRvbihpdGVtc2xvdEluZGV4OiBudW1iZXIsIGl0ZW06IEl0ZW0pXHJcbntcclxuICAgIC8vIGFkZCBhIGJ1dHRvbiBmb3IgdGhlIGl0ZW1cclxuICAgIGxldCBpdGVtYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGl0ZW1idG4uY2xhc3NMaXN0LmFkZChcIml0ZW1cIik7XHJcbiAgICBpdGVtYnRuLnN0eWxlLmNzc1RleHQgPSBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7aXRlbS5nZXRJbWFnZVBhdGgoKX0pO2A7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnZlbnRcIikuaW5zZXJ0QmVmb3JlKGl0ZW1idG4sIGl0ZW1zbG90YnRuc1tpdGVtc2xvdEluZGV4XSk7XHJcblxyXG4gICAgLy8gYWRkIGEgbW91c2UgY2xpY2sgY2FsbGJhY2sgdG8gdGhlIG5ldyBlbGVtZW50XHJcbiAgICBpdGVtYnRuLm9ubW91c2Vkb3duID0gKGV2dDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgIG9uSXRlbUNsaWNrKGl0ZW1idG4sIGl0ZW0sIGV2dCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZnJlc2hBbGxJdGVtc0Rpc3BsYXllZCgpXHJcbntcclxuICAgIC8vIGZpcnN0LCByZW1vdmUgYWxsIGl0ZW0gYnV0dG9ucyBmcm9tIHRoZSBkb21cclxuICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIml0ZW1cIik7XHJcbiAgICBmb3IobGV0IGluZGV4ID0gMDsgaW5kZXggPCBlbGVtcy5sZW5ndGg7IGluZGV4ICsrKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gZWxlbXNbaW5kZXhdO1xyXG4gICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhZGQgYSBidXR0b24gZm9yIGVhY2ggaXRlbSBpbiB0aGUgcGxheWVyJ3MgaW52ZW50b3J5XHJcbiAgICBmb3IobGV0IGluZGV4ID0gMDsgaW5kZXggPCBpbnZlbnQuZ2V0SXRlbXMoKS5sZW5ndGg7IGluZGV4ICsrKSB7XHJcbiAgICAgICAgY29uc3QgaXRlbSA9IGludmVudC5nZXRJdGVtcygpW2luZGV4XTtcclxuICAgICAgICBpZihpdGVtICE9IG51bGwpIHtcclxuICAgICAgICAgICAgLy8gYWRkIGEgYnV0dG9uIGZvciBlYWNoIGl0ZW0gaW4gdGhlIHBsYXllcidzIGludmVudG9yeVxyXG4gICAgICAgICAgICBhZGROZXdJdGVtQnV0dG9uKGluZGV4LCBpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZnJlc2hJdGVtRGlzcGxheWVkKGl0ZW1idG46IEhUTUxCdXR0b25FbGVtZW50LCBpdGVtOiBJdGVtKVxyXG57XHJcbiAgICBpZihpdGVtICE9IG51bGwpIHtcclxuICAgICAgICAvLyBjaGFuZ2UgdGhlIGltYWdlIGRpc3BsYXllZCBvbiB0aGUgaXRlbSBidXR0b25cclxuICAgICAgICBpdGVtYnRuLnN0eWxlLmNzc1RleHQgPSBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7aXRlbS5nZXRJbWFnZVBhdGgoKX0pO2A7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIHJlbW92ZSB0aGUgaXRlbSBidXR0b24gZnJvbSB0aGUgZG9tXHJcbiAgICAgICAgaXRlbWJ0bi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGl0ZW1idG4pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBvbkl0ZW1TbG90Q2xpY2soaXRlbXNsb3RidG46IEhUTUxCdXR0b25FbGVtZW50LCBpdGVtc2xvdEluZGV4OiBudW1iZXIsIGV2dDogTW91c2VFdmVudClcclxue1xyXG4gICAgLy8gbW92ZSBzZWxlY3RlZCBpdGVtIHRvIHRoaXMgc2xvdFxyXG4gICAgaWYoc2VsZWN0ZWRJdGVtICE9IG51bGwgJiYgc2VsZWN0ZWRJdGVtQnRuICE9IG51bGwpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gcmVtb3ZlIGZyb20gcHJldmlvdXMgaXRlbXNsb3QgYW5kIGFkZCB0byBuZXcgaXRlbXNsb3RcclxuICAgICAgICBzZWxlY3RlZEl0ZW1CdG4uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkaXRlbVwiKTtcclxuICAgICAgICByZWZyZXNoSXRlbURpc3BsYXllZChzZWxlY3RlZEl0ZW1CdG4sIG51bGwpO1xyXG4gICAgICAgIGFkZE5ld0l0ZW1CdXR0b24oaXRlbXNsb3RJbmRleCwgc2VsZWN0ZWRJdGVtKTtcclxuICAgICAgICBpbnZlbnQubW92ZUl0ZW0oc2VsZWN0ZWRJdGVtLCBpdGVtc2xvdEluZGV4KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhpbnZlbnQuZ2V0SXRlbXMoKSk7XHJcbiAgICAgICAgc2VsZWN0ZWRJdGVtID0gbnVsbDtcclxuICAgICAgICBzZWxlY3RlZEl0ZW1CdG4gPSBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBvbkl0ZW1DbGljayhpdGVtYnRuOiBIVE1MQnV0dG9uRWxlbWVudCwgaXRlbTogSXRlbSwgZXZ0OiBNb3VzZUV2ZW50KVxyXG57XHJcbiAgICBpZihldnQuYnV0dG9uID09PSAwKSB7ICAvLyBsZWZ0IGNsaWNrXHJcbiAgICAgICAgLy8gY29tYmluZSAyIGl0ZW1zLCAoY2FuJ3QgY29tYmluZSBpdGVtIHdpdGggaXRzZWxmKVxyXG4gICAgICAgIGlmKHNlbGVjdGVkSXRlbSAhPSBudWxsICYmIHNlbGVjdGVkSXRlbUJ0biAhPSBudWxsICYmIGl0ZW0gIT09IHNlbGVjdGVkSXRlbSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IG91dEl0ZW1zID0gc2VsZWN0ZWRJdGVtLmNvbWJpbmUoaXRlbSk7XHJcbiAgICAgICAgICAgIGlmKG91dEl0ZW1zICE9IG51bGwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlZnJlc2hJdGVtRGlzcGxheWVkKHNlbGVjdGVkSXRlbUJ0biwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICByZWZyZXNoSXRlbURpc3BsYXllZChpdGVtYnRuLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIGludmVudC5yZW1vdmVJdGVtKHNlbGVjdGVkSXRlbSk7XHJcbiAgICAgICAgICAgICAgICBpbnZlbnQucmVtb3ZlSXRlbShpdGVtKTtcclxuICAgICAgICAgICAgICAgIGZvcihjb25zdCBvdXRJdGVtIG9mIG91dEl0ZW1zKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGludmVudC5hZGRJdGVtKG91dEl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbUJ0biA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbnZlbnQuZ2V0SXRlbXMoKSk7XHJcbiAgICAgICAgICAgICAgICByZWZyZXNoQWxsSXRlbXNEaXNwbGF5ZWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRpdGVtXCIpO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbUJ0biA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc2VsZWN0IGFuIGl0ZW1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihpdGVtID09PSBzZWxlY3RlZEl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRpdGVtXCIpO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbUJ0biA9IG51bGw7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW0gPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtQnRuID0gaXRlbWJ0bjtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbUJ0bi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRpdGVtXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmKGV2dC5idXR0b24gPT09IDIpIHsgICAvLyByaWdodCBjbGlja1xyXG4gICAgICAgIHBsYXllclNwcml0ZS5vcGVuU3BlZWNoQnViYmxlKGl0ZW0uZ2V0RXhhbWluZVRleHQoKSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy9kZWNsYXJlIFByb21pc2UgYW55O1xyXG5cclxuZXhwb3J0IGNsYXNzIEltYWdlTG9hZGVyXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZEltYWdlKHBhdGg6IHN0cmluZyk6IFByb21pc2U8SFRNTEltYWdlRWxlbWVudD5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8SFRNTEltYWdlRWxlbWVudD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgaW1nLnNyYyA9IHBhdGg7XHJcbiAgICAgICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGltZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW1nLm9uZXJyb3IgPSAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgSlNPTkxvYWRlclxyXG57XHJcbiAgICBzdGF0aWMgbG9hZEpTT05GaWxlKHBhdGg6IHN0cmluZyk6IFByb21pc2U8YW55PlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoeGhyLnJlYWR5U3RhdGUgPT09IFhNTEh0dHBSZXF1ZXN0LkRPTkUgJiYgeGhyLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG9iaik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoeGhyLnJlYWR5U3RhdGUgPT09IFhNTEh0dHBSZXF1ZXN0LkRPTkUgJiYgeGhyLnN0YXR1cyAhPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coeGhyLnN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coeGhyLnN0YXR1c1RleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChudWxsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhwYXRoKTtcclxuICAgICAgICAgICAgeGhyLm9wZW4oXCJHRVRcIiwgcGF0aCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtTcHJpdGV9IGZyb20gXCIuL1Nwcml0ZVwiXHJcbmltcG9ydCB7U3ByaXRlQW5pbWF0aW9ufSBmcm9tIFwiLi9TcHJpdGVBbmltYXRpb25cIlxyXG5cclxuZXhwb3J0IGNsYXNzIEFuaW1hdGVkU3ByaXRlIGV4dGVuZHMgU3ByaXRlXHJcbntcclxuICAgIHByb3RlY3RlZCBzcHJpdGVBbmltYXRpb25zOiBBcnJheTxTcHJpdGVBbmltYXRpb24+ID0gW107XHJcbiAgICBwcm90ZWN0ZWQgY3VycmVudEFuaW1hdGlvbiA9IC0xO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgc2NhbGU6IG51bWJlciwgb3JpZ2luSG9yaXpvbnRhbDogc3RyaW5nLCBvcmlnaW5WZXJ0aWNhbDogc3RyaW5nLCBhbmltczogQXJyYXk8U3ByaXRlQW5pbWF0aW9uPikge1xyXG4gICAgICAgIHN1cGVyKHgsIHksIHNjYWxlLCBvcmlnaW5Ib3Jpem9udGFsLCBvcmlnaW5WZXJ0aWNhbCk7XHJcbiAgICAgICAgaWYoYW5pbXMgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZUFuaW1hdGlvbnMgPSBhbmltcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcoY3VycmVudFRpbWU6IG51bWJlciwgZGVsdGFUaW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZih0aGlzLmN1cnJlbnRBbmltYXRpb24gPj0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBhbmltID0gdGhpcy5zcHJpdGVBbmltYXRpb25zW3RoaXMuY3VycmVudEFuaW1hdGlvbl07XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaE9yaWdpbihhbmltLmdldEN1cnJlbnRGcmFtZSgpLncsIGFuaW0uZ2V0Q3VycmVudEZyYW1lKCkuaCk7XHJcbiAgICAgICAgICAgIGFuaW0uZHJhdyhjdXJyZW50VGltZSwgdGhpcy5vcmlnaW5YLCB0aGlzLm9yaWdpblksIHRoaXMuc2NhbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0Q3VycmVudEFuaW1hdGlvbiA9IChuZXdBbmltYXRpb25JbmRleDogbnVtYmVyKTogdm9pZCA9PiB7XHJcbiAgICAgICAgaWYobmV3QW5pbWF0aW9uSW5kZXggPCB0aGlzLnNwcml0ZUFuaW1hdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbiA9IG5ld0FuaW1hdGlvbkluZGV4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkU3ByaXRlQW5pbWF0aW9uID0gKGFuaW0pOiB2b2lkID0+IHtcclxuICAgICAgICBpZihhbmltICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5zcHJpdGVBbmltYXRpb25zLnB1c2goYW5pbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRTcHJpdGVBbmltYXRpb25zID0gKGFuaW1zOiBBcnJheTxTcHJpdGVBbmltYXRpb24+KTogdm9pZCA9PiB7XHJcbiAgICAgICAgaWYoYW5pbXMgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZUFuaW1hdGlvbnMgPSBhbmltcztcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uID0gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRQb3MoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtjdHh9IGZyb20gXCIuLi9nbG9iLnRzXCJcclxuaW1wb3J0IHtTcHJpdGVBbmltYXRpb259IGZyb20gXCIuL1Nwcml0ZUFuaW1hdGlvblwiXHJcbmltcG9ydCB7U3RhdGljU3ByaXRlfSBmcm9tIFwiLi9TdGF0aWNTcHJpdGVcIlxyXG5pbXBvcnQge0ludGVyYWN0aW9ufSBmcm9tIFwiLi4vZ2FtZS9JbnRlcmFjdGlvblwiXHJcbmltcG9ydCB7VGV4dHVyZUF0bGFzfSBmcm9tIFwiLi9UZXh0dXJlQXRsYXNcIlxyXG5pbXBvcnQge0l0ZW19IGZyb20gXCIuLi9pdGVtcy9JdGVtXCJcclxuaW1wb3J0IHtDaXJjbGV9IGZyb20gXCIuLi9jb2xsaXNpb24vQ2lyY2xlXCJcclxuaW1wb3J0IHtSZWN0YW5nbGV9IGZyb20gXCIuLi9jb2xsaXNpb24vUmVjdGFuZ2xlXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnRlcmFjdGFibGVTcHJpdGUgZXh0ZW5kcyBTdGF0aWNTcHJpdGVcclxue1xyXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHNjYWxlOiBudW1iZXIsIG9yaWdpbkhvcml6b250YWw6IHN0cmluZywgb3JpZ2luVmVydGljYWw6IHN0cmluZywgYXRsYXM6IFRleHR1cmVBdGxhcywgaW1hZ2VOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBwcm90ZWN0ZWQgZXhhbWluZVRleHQ6IHN0cmluZywgcHJvdGVjdGVkIGludGVyYWN0aW9uWm9uZTogQ2lyY2xlLCBwcm90ZWN0ZWQgY2xpY2tab25lOiBSZWN0YW5nbGUsIHByb3RlY3RlZCBpbnRlcmFjdGlvbnM6IEFycmF5PEludGVyYWN0aW9uPilcclxuICAgIHtcclxuICAgICAgICBzdXBlcih4LCB5LCBzY2FsZSwgb3JpZ2luSG9yaXpvbnRhbCwgb3JpZ2luVmVydGljYWwsIGF0bGFzLCBpbWFnZU5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3KGN1cnJlbnRUaW1lOiBudW1iZXIsIGRlbHRhVGltZTogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyLmRyYXcoY3VycmVudFRpbWUsIGRlbHRhVGltZSk7XHJcblxyXG4gICAgICAgIC8vIERFQlVHIC0gZHJhdyB0aGUgY2lyY2xlIGFuZCByZWN0YW5nbGVcclxuICAgICAgICB0aGlzLmNsaWNrWm9uZS5kcmF3KCk7XHJcbiAgICAgICAgdGhpcy5pbnRlcmFjdGlvblpvbmUuZHJhdygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbkludGVyYWN0aW9uWm9uZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcmFjdGlvblpvbmUuY29udGFpbnMoeCwgeSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluQ2xpY2tab25lKHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNsaWNrWm9uZS5jb250YWlucyh4LCB5KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpbnRlcmFjdCB3aXRoIHRoZSBzcHJpdGVcclxuICAgIC8vIGl0ZW0gY2FuIGJlIG51bGxcclxuICAgIHB1YmxpYyBpbnRlcmFjdChpdGVtOiBJdGVtKToge3RleHQ6IHN0cmluZywgaXRlbXM6IEFycmF5PEl0ZW0+fVxyXG4gICAge1xyXG4gICAgICAgIGZvcihjb25zdCBpbnRlciBvZiB0aGlzLmludGVyYWN0aW9ucylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIGlmIHRoZSBpdGVtcyBtYXRjaCwgdGhlbiBpbnRlcmFjdCB3aXRoIHRoZSBvYmplY3RcclxuICAgICAgICAgICAgaWYoaW50ZXIuZ2V0SXRlbSgpID09IGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGxldCBvYmogPSBpbnRlci5pbnRlcmFjdChpdGVtKTtcclxuICAgICAgICAgICAgICAgIGlmKG9iaiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBpbnRlcmFjdGlvbiBpZiBpdCBoYXMgYmVlbiBmdWxmaWxsZWRcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmludGVyYWN0aW9ucy5zcGxpY2UodGhpcy5pbnRlcmFjdGlvbnMuaW5kZXhPZihpbnRlciksIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEV4YW1pbmVUZXh0KCk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmV4YW1pbmVUZXh0O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7Y3R4fSBmcm9tIFwiLi4vZ2xvYi50c1wiXHJcbmltcG9ydCB7TmF2U3ByaXRlfSBmcm9tIFwiLi9OYXZTcHJpdGVcIlxyXG5pbXBvcnQge1BvaW50fSBmcm9tIFwiLi4vY29sbGlzaW9uL1BvaW50XCJcclxuaW1wb3J0IHtBbmltYXRlZFNwcml0ZX0gZnJvbSBcIi4vQW5pbWF0ZWRTcHJpdGVcIlxyXG5pbXBvcnQge1Nwcml0ZUFuaW1hdGlvbn0gZnJvbSBcIi4vU3ByaXRlQW5pbWF0aW9uXCJcclxuaW1wb3J0IHtDb252ZXJzYXRpb259IGZyb20gXCIuLi9jaGF0L0NvbnZlcnNhdGlvblwiXHJcbmltcG9ydCB7Q2lyY2xlfSBmcm9tIFwiLi4vY29sbGlzaW9uL0NpcmNsZVwiXHJcbmltcG9ydCB7UmVjdGFuZ2xlfSBmcm9tIFwiLi4vY29sbGlzaW9uL1JlY3RhbmdsZVwiXHJcblxyXG5leHBvcnQgY2xhc3MgTlBDU3ByaXRlIGV4dGVuZHMgTmF2U3ByaXRlXHJcbntcclxuICAgIHByaXZhdGUgc3BlZWNoQnViYmxlT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBzcGVlY2hCdWJibGVTaG93bkF0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHNwZWVjaEJ1YmJsZVRleHQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgdGV4dFdpZHRoOiBudW1iZXI7ICAvLyB3aWR0aCBvZiB0aGUgdGV4dCBpbiBwaXhlbHNcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgQkFTRV9GT05UX1NJWkUgPSA3NTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHNjYWxlOiBudW1iZXIsIG9yaWdpbkhvcml6b250YWw6IHN0cmluZywgb3JpZ2luVmVydGljYWw6IHN0cmluZywgYW5pbXM6IEFycmF5PFNwcml0ZUFuaW1hdGlvbj4sXHJcbiAgICAgICAgICAgICAgICBwcm90ZWN0ZWQgZXhhbWluZVRleHQ6IHN0cmluZywgcHJvdGVjdGVkIGludGVyYWN0aW9uWm9uZTogQ2lyY2xlLCBwcm90ZWN0ZWQgY2xpY2tab25lOiBSZWN0YW5nbGUsIHByb3RlY3RlZCBjb252ZXJzYXRpb246IENvbnZlcnNhdGlvbiwgbW92ZVNwZWVkOiBudW1iZXIgPSAwLjUpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoeCwgeSwgc2NhbGUsIG9yaWdpbkhvcml6b250YWwsIG9yaWdpblZlcnRpY2FsLCBhbmltcywgbW92ZVNwZWVkKTtcclxuICAgICAgICB0aGlzLnNldEN1cnJlbnRBbmltYXRpb24oMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcoY3VycmVudFRpbWU6IG51bWJlciwgZGVsdGFUaW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5kcmF3KGN1cnJlbnRUaW1lLCBkZWx0YVRpbWUpO1xyXG5cclxuICAgICAgICBpZih0aGlzLnNwZWVjaEJ1YmJsZU9wZW4pIHtcclxuICAgICAgICAgICAgLy8gZHJhdyB0aGUgc3BlZWNoIGJ1YmJsZVxyXG4gICAgICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgICAgICBjdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy5vcmlnaW5ZKTtcclxuICAgICAgICAgICAgY3R4LnNjYWxlKHRoaXMuc2NhbGUsIHRoaXMuc2NhbGUpO1xyXG4gICAgICAgICAgICBjdHguc2hhZG93Q29sb3IgPSBcIiM1NTU1NTVcIjtcclxuICAgICAgICAgICAgY3R4LnNoYWRvd0JsdXIgPSA1O1xyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjMUFGRjgwXCI7ICAgLy8gZ3JlZW46ICMxQUZGODAsIGFtYmVyOiAjRkZCNjQyLCBibHVlOiAjMkVDRkZGXHJcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLnNwZWVjaEJ1YmJsZVRleHQsIC10aGlzLnRleHRXaWR0aC8yLCAwKTtcclxuICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHNwZWVjaCBidWJibGUgbGFzdHMgMS8yIHNlY29uZCBmb3IgZWFjaCB3b3JkXHJcbiAgICAgICAgICAgIGlmKGN1cnJlbnRUaW1lIC0gdGhpcy5zcGVlY2hCdWJibGVTaG93bkF0ID49IHRoaXMuc3BlZWNoQnViYmxlVGV4dC5zcGxpdChcIiBcIikubGVuZ3RoICogNTAwICsgNTAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVjaEJ1YmJsZU9wZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gREVCVUcgLSBkcmF3IHRoZSBjaXJjbGUgYW5kIHJlY3RhbmdsZVxyXG4gICAgICAgIHRoaXMuY2xpY2tab25lLmRyYXcoKTtcclxuICAgICAgICB0aGlzLmludGVyYWN0aW9uWm9uZS5kcmF3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9wZW5TcGVlY2hCdWJibGUodGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYodGV4dCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWNoQnViYmxlT3BlbiA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWNoQnViYmxlVGV4dCA9IHRleHQ7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWNoQnViYmxlU2hvd25BdCA9IERhdGUubm93KCk7XHJcblxyXG4gICAgICAgICAgICBjdHguZm9udCA9IGAke3RoaXMuQkFTRV9GT05UX1NJWkV9cHggQm9va21hbmA7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dFdpZHRoID0gY3R4Lm1lYXN1cmVUZXh0KHRleHQpLndpZHRoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5JbnRlcmFjdGlvblpvbmUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJhY3Rpb25ab25lLmNvbnRhaW5zKHgsIHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbkNsaWNrWm9uZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jbGlja1pvbmUuY29udGFpbnMoeCwgeSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEV4YW1pbmVUZXh0KCk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmV4YW1pbmVUZXh0O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7QW5pbWF0ZWRTcHJpdGV9IGZyb20gXCIuL0FuaW1hdGVkU3ByaXRlXCJcclxuaW1wb3J0IHtTcHJpdGVBbmltYXRpb259IGZyb20gXCIuL1Nwcml0ZUFuaW1hdGlvblwiXHJcbmltcG9ydCB7UG9pbnR9IGZyb20gXCIuLi9jb2xsaXNpb24vUG9pbnRcIlxyXG5cclxuZXhwb3J0IGNsYXNzIE5hdlNwcml0ZSBleHRlbmRzIEFuaW1hdGVkU3ByaXRlXHJcbntcclxuICAgIHByaXZhdGUgd2F5cG9pbnRzOiBBcnJheTxQb2ludD47XHJcbiAgICBwcml2YXRlIG5leHRXYXlwb2ludDogUG9pbnQ7XHJcbiAgICBwcml2YXRlIG1vdmVTcGVlZDogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgZGVwdGhTY2FsZVk6IG51bWJlcjtcclxuICAgIHByaXZhdGUgc3RhcnRYOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHN0YXJ0WTogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgc2NhbGU6IG51bWJlciwgb3JpZ2luSG9yaXpvbnRhbDogc3RyaW5nLCBvcmlnaW5WZXJ0aWNhbDogc3RyaW5nLCBhbmltczogQXJyYXk8U3ByaXRlQW5pbWF0aW9uPiwgbW92ZVNwZWVkOiBudW1iZXIgPSAwLjUpIHtcclxuICAgICAgICBzdXBlcih4LCB5LCBzY2FsZSwgb3JpZ2luSG9yaXpvbnRhbCwgb3JpZ2luVmVydGljYWwsIGFuaW1zKTtcclxuICAgICAgICB0aGlzLm1vdmVTcGVlZCA9IG1vdmVTcGVlZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdyhjdXJyZW50VGltZTogbnVtYmVyLCBkZWx0YVRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIC8vIG1vdmUgdG93YXJkcyB0aGUgbmV4dCB3YXlwb2ludFxyXG4gICAgICAgIGlmKHRoaXMubmV4dFdheXBvaW50ICE9IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbihNYXRoLmFicyh0aGlzLm5leHRXYXlwb2ludC55IC0gdGhpcy55KSAvIE1hdGguYWJzKHRoaXMubmV4dFdheXBvaW50LnggLSB0aGlzLngpKTtcclxuICAgICAgICAgICAgY29uc3QgbW92ZVNwZWVkWCA9IHRoaXMubW92ZVNwZWVkICogZGVsdGFUaW1lICogTWF0aC5jb3MoYW5nbGUpICogdGhpcy5zY2FsZTtcclxuICAgICAgICAgICAgY29uc3QgbW92ZVNwZWVkWSA9IHRoaXMubW92ZVNwZWVkICogZGVsdGFUaW1lICogTWF0aC5zaW4oYW5nbGUpICogdGhpcy5zY2FsZTtcclxuXHJcbiAgICAgICAgICAgIC8vIGlmIHRoZSBzcHJpdGUgaGFzIHJlYWNoZWQgdGhlIHdheXBvaW50IChvciB0aGVyZWFib3V0cykgdGhlbiBnZXQgdGhlIG5leHQgd2F5cG9pbnRcclxuICAgICAgICAgICAgaWYodGhpcy54ID49IHRoaXMubmV4dFdheXBvaW50LnggLSA1ICYmIHRoaXMueCA8PSB0aGlzLm5leHRXYXlwb2ludC54ICsgNSAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy55ID49IHRoaXMubmV4dFdheXBvaW50LnkgLSA1ICYmIHRoaXMueSA8PSB0aGlzLm5leHRXYXlwb2ludC55ICsgNSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImFycml2ZWRcIiwgdGhpcy54LCB0aGlzLnkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy54ID0gdGhpcy5uZXh0V2F5cG9pbnQueDtcclxuICAgICAgICAgICAgICAgIHRoaXMueSA9IHRoaXMubmV4dFdheXBvaW50Lnk7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLndheXBvaW50cyAhPSBudWxsICYmIHRoaXMud2F5cG9pbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHRXYXlwb2ludCA9IHRoaXMud2F5cG9pbnRzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHRXYXlwb2ludCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIG1vdmUgdG93YXJkcyB0aGUgbmV4dCB3YXlwb2ludFxyXG4gICAgICAgICAgICBpZih0aGlzLm5leHRXYXlwb2ludCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnggPCB0aGlzLm5leHRXYXlwb2ludC54IC0gNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCArPSBtb3ZlU3BlZWRYO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMueCA+IHRoaXMubmV4dFdheXBvaW50LnggKyA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54IC09IG1vdmVTcGVlZFg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy55IDwgdGhpcy5uZXh0V2F5cG9pbnQueSAtIDUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnkgKz0gbW92ZVNwZWVkWTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLnkgPiB0aGlzLm5leHRXYXlwb2ludC55ICsgNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueSAtPSBtb3ZlU3BlZWRZO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHNjYWxlIHRoZSBwbGF5ZXIgYmFzZWQgb24gdGhlIGRlcHRoIG9mIHRoZSBtb3VzZSBwb3NpdGlvblxyXG4gICAgICAgIHRoaXMuc2NhbGUgPSB0aGlzLmJhc2VTY2FsZSAqIHRoaXMuZGVwdGhTY2FsZVkgKiogKHRoaXMuc3RhcnRZIC0gdGhpcy55KTtcclxuXHJcbiAgICAgICAgc3VwZXIuZHJhdyhjdXJyZW50VGltZSwgZGVsdGFUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0V2F5cG9pbnRzKHdheXBvaW50czogQXJyYXk8UG9pbnQ+KSB7XHJcbiAgICAgICAgdGhpcy53YXlwb2ludHMgPSB3YXlwb2ludHM7XHJcbiAgICAgICAgdGhpcy5uZXh0V2F5cG9pbnQgPSBudWxsO1xyXG4gICAgICAgIGlmKHRoaXMud2F5cG9pbnRzICE9IG51bGwgJiYgdGhpcy53YXlwb2ludHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLndheXBvaW50cyk7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dFdheXBvaW50ID0gdGhpcy53YXlwb2ludHMucG9wKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibmV4dDogXCIgKyB0aGlzLm5leHRXYXlwb2ludC54ICsgXCIsIFwiICsgdGhpcy5uZXh0V2F5cG9pbnQueSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldERlcHRoU2NhbGUoZGVwdGhTY2FsZVk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZGVwdGhTY2FsZVkgPSBkZXB0aFNjYWxlWTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0U3RhcnRQb3MoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0WCA9IHg7XHJcbiAgICAgICAgdGhpcy5zdGFydFkgPSB5O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7Y3R4fSBmcm9tIFwiLi4vZ2xvYi50c1wiXHJcbmltcG9ydCB7TmF2U3ByaXRlfSBmcm9tIFwiLi9OYXZTcHJpdGVcIlxyXG5pbXBvcnQge1BvaW50fSBmcm9tIFwiLi4vY29sbGlzaW9uL1BvaW50XCJcclxuaW1wb3J0IHtBbmltYXRlZFNwcml0ZX0gZnJvbSBcIi4vQW5pbWF0ZWRTcHJpdGVcIlxyXG5pbXBvcnQge1Nwcml0ZUFuaW1hdGlvbn0gZnJvbSBcIi4vU3ByaXRlQW5pbWF0aW9uXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJTcHJpdGUgZXh0ZW5kcyBOYXZTcHJpdGVcclxue1xyXG4gICAgcHJpdmF0ZSBzcGVlY2hCdWJibGVJbWFnZTogSFRNTEltYWdlRWxlbWVudDtcclxuICAgIHByaXZhdGUgc3BlZWNoQnViYmxlT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBzcGVlY2hCdWJibGVTaG93bkF0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHNwZWVjaEJ1YmJsZVRleHQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgdGV4dFdpZHRoOiBudW1iZXI7ICAvLyB3aWR0aCBvZiB0aGUgdGV4dCBpbiBwaXhlbHNcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgQkFTRV9GT05UX1NJWkUgPSA3NTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHNjYWxlOiBudW1iZXIsIG9yaWdpbkhvcml6b250YWw6IHN0cmluZywgb3JpZ2luVmVydGljYWw6IHN0cmluZywgYW5pbXM6IEFycmF5PFNwcml0ZUFuaW1hdGlvbj4sIG1vdmVTcGVlZDogbnVtYmVyID0gMC41KVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKHgsIHksIHNjYWxlLCBvcmlnaW5Ib3Jpem9udGFsLCBvcmlnaW5WZXJ0aWNhbCwgYW5pbXMsIG1vdmVTcGVlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcoY3VycmVudFRpbWU6IG51bWJlciwgZGVsdGFUaW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5kcmF3KGN1cnJlbnRUaW1lLCBkZWx0YVRpbWUpO1xyXG5cclxuICAgICAgICBpZih0aGlzLnNwZWVjaEJ1YmJsZU9wZW4pIHtcclxuICAgICAgICAgICAgLy8gZHJhdyB0aGUgc3BlZWNoIGJ1YmJsZVxyXG4gICAgICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgICAgICBjdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy5vcmlnaW5ZKTtcclxuICAgICAgICAgICAgLy9jdHguZHJhd0ltYWdlKHRoaXMuc3BlZWNoQnViYmxlSW1hZ2UsIC10aGlzLnNwZWVjaEJ1YmJsZUltYWdlLndpZHRoLzIgKiB0aGlzLnNjYWxlLCAtdGhpcy5zcGVlY2hCdWJibGVJbWFnZS5oZWlnaHQvMiAqIHRoaXMuc2NhbGUsIHRoaXMuc3BlZWNoQnViYmxlSW1hZ2Uud2lkdGggKiB0aGlzLnNjYWxlLCB0aGlzLnNwZWVjaEJ1YmJsZUltYWdlLmhlaWdodCAqIHRoaXMuc2NhbGUpO1xyXG4gICAgICAgICAgICBjdHguc2NhbGUodGhpcy5zY2FsZSwgdGhpcy5zY2FsZSk7XHJcbiAgICAgICAgICAgIGN0eC5zaGFkb3dDb2xvciA9IFwiIzU1NTU1NVwiO1xyXG4gICAgICAgICAgICBjdHguc2hhZG93Qmx1ciA9IDU7XHJcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiMxQUZGODBcIjsgICAvLyBncmVlbjogIzFBRkY4MCwgYW1iZXI6ICNGRkI2NDIsIGJsdWU6ICMyRUNGRkZcclxuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMuc3BlZWNoQnViYmxlVGV4dCwgLXRoaXMudGV4dFdpZHRoLzIsIDApO1xyXG4gICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gc3BlZWNoIGJ1YmJsZSBsYXN0cyAxLzIgc2Vjb25kIGZvciBlYWNoIHdvcmRcclxuICAgICAgICAgICAgaWYoY3VycmVudFRpbWUgLSB0aGlzLnNwZWVjaEJ1YmJsZVNob3duQXQgPj0gdGhpcy5zcGVlY2hCdWJibGVUZXh0LnNwbGl0KFwiIFwiKS5sZW5ndGggKiA1MDAgKyA1MDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWNoQnViYmxlT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvcGVuU3BlZWNoQnViYmxlKHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgIGlmKHRleHQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVjaEJ1YmJsZU9wZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVjaEJ1YmJsZVRleHQgPSB0ZXh0O1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVjaEJ1YmJsZVNob3duQXQgPSBEYXRlLm5vdygpO1xyXG5cclxuICAgICAgICAgICAgY3R4LmZvbnQgPSBgJHt0aGlzLkJBU0VfRk9OVF9TSVpFfXB4IEJvb2ttYW5gO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRXaWR0aCA9IGN0eC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aDtcclxuXHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIGRpdiBjb250YWluaW5nIHRoZSB0ZXh0IHNvIHRoZSBwaXhlbCB3aWR0aCBvZiB0ZXh0IGNhbiBiZSBjYWxjdWxhdGVkXHJcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzExODI0MS9jYWxjdWxhdGUtdGV4dC13aWR0aC13aXRoLWphdmFzY3JpcHRcclxuICAgICAgICAgICAgLypsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgZGl2LnN0eWxlLmNzc1RleHQgPSBgcG9zaXRpb246IGFic29sdXRlOyB2aXNpYmlsaXR5OiBoaWRkZW47IGhlaWdodDogYXV0bzsgd2lkdGg6IGF1dG87IHdoaXRlLXNwYWNlOiBub3dyYXA7IGZvbnQtc2l6ZTogJHt0aGlzLkJBU0VfRk9OVF9TSVpFfWA7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGRpdiwgbnVsbCk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dFdpZHRoID0gZGl2LmNsaWVudFdpZHRoICsgMTsqL1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRleHQgd2lkdGhcIiwgdGhpcy50ZXh0V2lkdGgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0U3BlZWNoQnViYmxlSW1hZ2UoaW1nKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc3BlZWNoQnViYmxlSW1hZ2UgPSBpbWc7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNwcml0ZVxyXG57XHJcbiAgICBwcm90ZWN0ZWQgYmFzZVNjYWxlOiBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgb3JpZ2luWDogbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIG9yaWdpblk6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgeDogbnVtYmVyLCBwcm90ZWN0ZWQgeTogbnVtYmVyLCBwcm90ZWN0ZWQgc2NhbGU6IG51bWJlciwgcHJvdGVjdGVkIG9yaWdpbkhvcml6b250YWw6IHN0cmluZywgcHJvdGVjdGVkIG9yaWdpblZlcnRpY2FsOiBzdHJpbmcsIHByb3RlY3RlZCBkZXB0aDogbnVtYmVyID0gMClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmJhc2VTY2FsZSA9IHRoaXMuc2NhbGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHJlZnJlc2hPcmlnaW4od2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIHBvc2l0aW9uIGF0IHdoaWNoIHRvIGRyYXcgdGhlIHNwcml0ZVxyXG4gICAgICAgIGlmKHRoaXMub3JpZ2luSG9yaXpvbnRhbCA9PSBcInJpZ2h0XCIpIHtcclxuICAgICAgICAgICAgdGhpcy5vcmlnaW5YID0gdGhpcy54IC0gd2lkdGggKiB0aGlzLnNjYWxlO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLm9yaWdpbkhvcml6b250YWwgPT0gXCJsZWZ0XCIpIHtcclxuICAgICAgICAgICAgdGhpcy5vcmlnaW5YID0gdGhpcy54O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub3JpZ2luWCA9IHRoaXMueCAtIHdpZHRoLzIgKiB0aGlzLnNjYWxlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBwb3NpdGlvbiBhdCB3aGljaCB0byBkcmF3IHRoZSBzcHJpdGVcclxuICAgICAgICBpZih0aGlzLm9yaWdpblZlcnRpY2FsID09IFwidG9wXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5vcmlnaW5ZID0gdGhpcy55IC0gaGVpZ2h0KiB0aGlzLnNjYWxlO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLm9yaWdpblZlcnRpY2FsID09IFwiYm90dG9tXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5vcmlnaW5ZID0gdGhpcy55O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub3JpZ2luWSA9IHRoaXMueSAtIGhlaWdodC8yICogdGhpcy5zY2FsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBkcmF3KGN1cnJlbnRUaW1lOiBudW1iZXIsIGRlbHRhVGltZTogbnVtYmVyKTogdm9pZDtcclxufVxyXG4iLCJpbXBvcnQge2N0eH0gZnJvbSBcIi4uL2dsb2IudHNcIlxyXG5pbXBvcnQge1RleHR1cmVBdGxhc30gZnJvbSAnLi9UZXh0dXJlQXRsYXMnXHJcbmltcG9ydCB7VGV4dHVyZUF0bGFzRnJhbWV9IGZyb20gXCIuL1RleHR1cmVBdGxhc0ZyYW1lXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJpdGVBbmltYXRpb25cclxue1xyXG4gICAgLy8gaHR0cDovL3d3dy50eXBlc2NyaXB0Z2FtZXMuY29tL0FuaW1hdGVkU3ByaXRlcy5odG1sXHJcbiAgICBwcm90ZWN0ZWQgY3VycmVudEZyYW1lID0gMDtcclxuICAgIHByaXZhdGUgbGFzdFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIG51bUZyYW1lczogbnVtYmVyLCBwcm90ZWN0ZWQgYXRsYXM6IFRleHR1cmVBdGxhcywgcHJvdGVjdGVkIHNlcXVlbmNlTmFtZTogc3RyaW5nKSB7fVxyXG5cclxuICAgIHB1YmxpYyBkcmF3ID0gKGN1cnJlbnRUaW1lOiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyLCBzY2FsZTogbnVtYmVyKTogdm9pZCA9PiB7XHJcbiAgICAgICAgbGV0IGZyYW1lID0gdGhpcy5nZXRDdXJyZW50RnJhbWUoKTtcclxuICAgICAgICBpZihmcmFtZS5mcmFtZUR1cmF0aW9uIDw9IGN1cnJlbnRUaW1lIC0gdGhpcy5sYXN0VGltZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEZyYW1lKys7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuY3VycmVudEZyYW1lID49IHRoaXMubnVtRnJhbWVzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRGcmFtZSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sYXN0VGltZSA9IGN1cnJlbnRUaW1lO1xyXG4gICAgICAgICAgICBmcmFtZSA9IHRoaXMuZ2V0Q3VycmVudEZyYW1lKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzcHJpdGVzIGFyZSBkcmF3biBmcm9tIHRoZWlyIGNlbnRyZS14LCBib3R0b20teSwgaS5lLiBmZWV0IHBvc2l0aW9uXHJcbiAgICAgICAgLy9sZXQgdG9wTGVmdFggPSB4IC0gZnJhbWUudy8yICogc2NhbGU7XHJcbiAgICAgICAgLy9sZXQgdG9wTGVmdFkgPSB5IC0gZnJhbWUuaCAqIHNjYWxlO1xyXG5cclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC50cmFuc2xhdGUoeCwgeSk7XHJcbiAgICAgICAgY3R4LnJlY3QoZnJhbWUueCwgZnJhbWUueSwgZnJhbWUudywgZnJhbWUuaCk7XHJcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmF0bGFzLmltYWdlLFxyXG4gICAgICAgICAgICBmcmFtZS54LCBmcmFtZS55LFxyXG4gICAgICAgICAgICBmcmFtZS53LCBmcmFtZS5oLFxyXG4gICAgICAgICAgICBmcmFtZS5vZmZzZXR4LCBmcmFtZS5vZmZzZXR5LFxyXG4gICAgICAgICAgICBmcmFtZS53ICogc2NhbGUsIGZyYW1lLmggKiBzY2FsZSk7XHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q3VycmVudEZyYW1lID0gKCk6IFRleHR1cmVBdGxhc0ZyYW1lID0+IHtcclxuICAgICAgICBpZih0aGlzLmN1cnJlbnRGcmFtZSA+IDkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hdGxhcy5mcmFtZXNbdGhpcy5zZXF1ZW5jZU5hbWUgKyBcIl9cIiArIHRoaXMuY3VycmVudEZyYW1lLnRvU3RyaW5nKCldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5hdGxhcy5mcmFtZXNbdGhpcy5zZXF1ZW5jZU5hbWUgKyBcIl9cIiArIFwiMFwiICsgdGhpcy5jdXJyZW50RnJhbWUudG9TdHJpbmcoKV07XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtjdHh9IGZyb20gXCIuLi9nbG9iLnRzXCJcclxuaW1wb3J0IHtTcHJpdGV9IGZyb20gXCIuL1Nwcml0ZVwiXHJcbmltcG9ydCB7VGV4dHVyZUF0bGFzfSBmcm9tIFwiLi9UZXh0dXJlQXRsYXNcIlxyXG5pbXBvcnQge1RleHR1cmVBdGxhc0ZyYW1lfSBmcm9tIFwiLi9UZXh0dXJlQXRsYXNGcmFtZVwiXHJcblxyXG5leHBvcnQgY2xhc3MgU3RhdGljU3ByaXRlIGV4dGVuZHMgU3ByaXRlXHJcbntcclxuICAgIHByb3RlY3RlZCBpbWFnZTogVGV4dHVyZUF0bGFzRnJhbWU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHNjYWxlOiBudW1iZXIsIG9yaWdpbkhvcml6b250YWw6IHN0cmluZywgb3JpZ2luVmVydGljYWw6IHN0cmluZywgcHJvdGVjdGVkIGF0bGFzOiBUZXh0dXJlQXRsYXMsIHByb3RlY3RlZCBpbWFnZU5hbWU6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICBzdXBlcih4LCB5LCBzY2FsZSwgb3JpZ2luSG9yaXpvbnRhbCwgb3JpZ2luVmVydGljYWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZWZyZXNoSW1hZ2UoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSB0aGlzLmF0bGFzLmZyYW1lc1t0aGlzLmltYWdlTmFtZV07IC8vIGdldCB0aGUgaW1hZ2UgZnJvbSB0aGUgYXRsYXNcclxuICAgICAgICB0aGlzLnJlZnJlc2hPcmlnaW4odGhpcy5pbWFnZS53LCB0aGlzLmltYWdlLmgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3KGN1cnJlbnRUaW1lOiBudW1iZXIsIGRlbHRhVGltZTogbnVtYmVyKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLm9yaWdpblgsIHRoaXMub3JpZ2luWSk7XHJcbiAgICAgICAgY3R4LnJlY3QodGhpcy5pbWFnZS54LCB0aGlzLmltYWdlLnksIHRoaXMuaW1hZ2UudywgdGhpcy5pbWFnZS5oKTtcclxuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuYXRsYXMuaW1hZ2UsXHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UueCwgdGhpcy5pbWFnZS55LFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlLncsIHRoaXMuaW1hZ2UuaCxcclxuICAgICAgICAgICAgdGhpcy5pbWFnZS5vZmZzZXR4LCB0aGlzLmltYWdlLm9mZnNldHksXHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UudyAqIHRoaXMuc2NhbGUsIHRoaXMuaW1hZ2UuaCAqIHRoaXMuc2NhbGUpO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtKU09OTG9hZGVyfSBmcm9tICcuLi9yZXNvdXJjZXMvSlNPTkxvYWRlcidcclxuaW1wb3J0IHtJbWFnZUxvYWRlcn0gZnJvbSAnLi4vcmVzb3VyY2VzL0ltYWdlTG9hZGVyJ1xyXG5pbXBvcnQge1RleHR1cmVBdGxhc0ZyYW1lfSBmcm9tICcuL1RleHR1cmVBdGxhc0ZyYW1lJ1xyXG5cclxuZXhwb3J0IGNsYXNzIFRleHR1cmVBdGxhc1xyXG57XHJcbiAgICAvLyBodHRwOi8vd3d3LnR5cGVzY3JpcHRnYW1lcy5jb20vVGV4dHVyZUF0bGFzLmh0bWxcclxuICAgIHB1YmxpYyBmcmFtZXM6IHsgW2luZGV4OiBzdHJpbmddOiBUZXh0dXJlQXRsYXNGcmFtZSB9ID0ge307XHJcbiAgICBwdWJsaWMgdGFMb2FkQ29tcGxldGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBpbWFnZTogSFRNTEltYWdlRWxlbWVudCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgcHVibGljIGF0bGFzTmFtZTogc3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgaW1hZ2VGaWxlTmFtZTogc3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUganNvbkZpbGVOYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGF0bGFzTmFtZTogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuYXRsYXNOYW1lID0gYXRsYXNOYW1lO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VGaWxlTmFtZSA9IGF0bGFzTmFtZTtcclxuICAgICAgICB0aGlzLmpzb25GaWxlTmFtZSA9IGF0bGFzTmFtZS5yZXBsYWNlKFwiLnBuZ1wiLCBcIlwiKSArIFwiLmpzb25cIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZCgpOiBQcm9taXNlPGFueT5cclxuICAgIHtcclxuICAgICAgICBjb25zdCBpbWdQcm9taXNlID0gSW1hZ2VMb2FkZXIubG9hZEltYWdlKHRoaXMuaW1hZ2VGaWxlTmFtZSkudGhlbigoaW1nKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UgPSBpbWc7XHJcbiAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3I6IHVuYWJsZSB0byBsb2FkICcgKyB0aGlzLmltYWdlRmlsZU5hbWUpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IGpzb25Qcm9taXNlID0gSlNPTkxvYWRlci5sb2FkSlNPTkZpbGUodGhpcy5qc29uRmlsZU5hbWUpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVGcmFtZXMoZGF0YSk7XHJcbiAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3I6IHVuYWJsZSB0byBsb2FkICcgKyB0aGlzLmpzb25GaWxlTmFtZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbaW1nUHJvbWlzZSwganNvblByb21pc2VdKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5hdGxhc05hbWUgKyAnIGxvYWRlZCBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcjogJyArIHRoaXMuYXRsYXNOYW1lICsgJyBmYWlsZWQgdG8gbG9hZCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlRnJhbWVzKGRhdGE6IGFueSlcclxuICAgIHtcclxuICAgICAgICBmb3IoY29uc3QgbmFtZSBpbiBkYXRhLmZyYW1lcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwcml0ZURhdGEgPSBkYXRhLmZyYW1lc1tuYW1lXTtcclxuICAgICAgICAgICAgbGV0IGZyYW1lID0gbmV3IFRleHR1cmVBdGxhc0ZyYW1lKHNwcml0ZURhdGEuZnJhbWUueCwgc3ByaXRlRGF0YS5mcmFtZS55LCBzcHJpdGVEYXRhLmZyYW1lLncsIHNwcml0ZURhdGEuZnJhbWUuaCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlRGF0YS5zcHJpdGVTb3VyY2VTaXplLngsIHNwcml0ZURhdGEuc3ByaXRlU291cmNlU2l6ZS55LCBzcHJpdGVEYXRhLmZyYW1lRHVyYXRpb24pO1xyXG4gICAgICAgICAgICB0aGlzLmZyYW1lc1tuYW1lXSA9IGZyYW1lO1xyXG4gICAgICAgIH1cclxuLy8gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuZnJhbWVzKSk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFRleHR1cmVBdGxhc0ZyYW1lXHJcbntcclxuICAgIC8vIGh0dHA6Ly93d3cudHlwZXNjcmlwdGdhbWVzLmNvbS9BbmltYXRlZFNwcml0ZXMuaHRtbFxyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgdzogbnVtYmVyO1xyXG4gICAgaDogbnVtYmVyO1xyXG5cclxuICAgIG9mZnNldHg6IG51bWJlcjsgICAgLy8gaW1hZ2Ugd2lsbCBiZSBvZmZzZXQgYnkgdGhlc2UgdmFsdWVzIHNvIGZyYW1lcyBsaW5lIHVwIGluIGFuaW1hdGlvblxyXG4gICAgb2Zmc2V0eTogbnVtYmVyO1xyXG5cclxuICAgIGZyYW1lRHVyYXRpb246IG51bWJlcjsgIC8vIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoaXMgZnJhbWUgbGFzdHNcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCB3OiBudW1iZXIgPSAxLCBoOiBudW1iZXIgPSAxLCBvZmZzZXR4OiBudW1iZXIgPSAwLCBvZmZzZXR5OiBudW1iZXIgPSAwLCBmcmFtZUR1cmF0aW9uOiBudW1iZXIgPSAxMDApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMudyA9IHc7XHJcbiAgICAgICAgdGhpcy5oID0gaDtcclxuICAgICAgICB0aGlzLm9mZnNldHggPSBvZmZzZXR4O1xyXG4gICAgICAgIHRoaXMub2Zmc2V0eSA9IG9mZnNldHk7XHJcbiAgICAgICAgdGhpcy5mcmFtZUR1cmF0aW9uID0gZnJhbWVEdXJhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0KHg6IG51bWJlciwgeTogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9