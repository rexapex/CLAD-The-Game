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

/***/ "./src/chat/ContinueDialog.ts":
/*!************************************!*\
  !*** ./src/chat/ContinueDialog.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Dialog_1 = __webpack_require__(/*! ./Dialog */ "./src/chat/Dialog.ts");
class ContinueDialog extends Dialog_1.Dialog {
    constructor(text, speaker, nextDialog) {
        super(text, speaker);
        this.nextDialog = nextDialog;
    }
    createGUIElement(div) {
        return new Promise((resolve, reject) => {
            // add the dialog text
            let txt = document.createElement("label");
            txt.classList.add("chatmsg");
            txt.innerHTML = this.text;
            // add a button to advance to the next dialog
            let btn = document.createElement("button");
            btn.classList.add("chatbtn");
            btn.innerHTML = "Continue";
            // add all new elements to div
            div.appendChild(txt);
            div.appendChild(btn);
            // add a callback for the continue button
            btn.onclick = (evnt) => {
                resolve(this.nextDialog);
            };
        });
    }
}
exports.ContinueDialog = ContinueDialog;


/***/ }),

/***/ "./src/chat/Conversation.ts":
/*!**********************************!*\
  !*** ./src/chat/Conversation.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// conversation between the player and an NPC
class Conversation {
    constructor(firstDialog) {
        this.firstDialog = firstDialog;
    }
    getFirstDialog() {
        return this.firstDialog;
    }
}
exports.Conversation = Conversation;


/***/ }),

/***/ "./src/chat/Dialog.ts":
/*!****************************!*\
  !*** ./src/chat/Dialog.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Dialog {
    constructor(text, speaker) {
        this.text = text;
        this.speaker = speaker;
    }
    getText() {
        return this.text;
    }
    getSpeaker() {
        return this.speaker;
    }
}
exports.Dialog = Dialog;


/***/ }),

/***/ "./src/chat/OptionDialog.ts":
/*!**********************************!*\
  !*** ./src/chat/OptionDialog.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Dialog_1 = __webpack_require__(/*! ./Dialog */ "./src/chat/Dialog.ts");
class OptionDialog extends Dialog_1.Dialog {
    constructor(text, speaker, options) {
        super(text, speaker);
        this.options = options;
    }
    createGUIElement(div) {
        return new Promise((resolve, reject) => {
            // add the dialog text
            let txt = document.createElement("label");
            txt.classList.add("chatmsg");
            txt.innerHTML = this.text;
            // add text element to div
            div.appendChild(txt);
            // add a button for each dialog option
            for (let option in this.options) {
                let btn = document.createElement("button");
                btn.classList.add("chatbtn");
                btn.innerHTML = option;
                div.appendChild(btn);
                // add a callback for the option button
                btn.onclick = (evnt) => {
                    resolve(this.options[option]);
                };
            }
        });
    }
}
exports.OptionDialog = OptionDialog;


/***/ }),

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
const Conversation_1 = __webpack_require__(/*! ../chat/Conversation */ "./src/chat/Conversation.ts");
const ContinueDialog_1 = __webpack_require__(/*! ../chat/ContinueDialog */ "./src/chat/ContinueDialog.ts");
const OptionDialog_1 = __webpack_require__(/*! ../chat/OptionDialog */ "./src/chat/OptionDialog.ts");
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
                            let npc = new NPCSprite_1.NPCSprite(obj.x, obj.y, obj.scale, obj.origin_horizontal, obj.origin_vertical, animations, obj.examine_text, new Audio(obj.examine_audio), new Circle_1.Circle(obj.x, obj.y, obj.interaction_radius), new Rectangle_1.Rectangle(obj.x - obj.click_zone_width / 2, obj.y - obj.click_zone_height / 2, obj.click_zone_width, obj.click_zone_height), Level.buildConversation(obj));
                            npc.setStartPos(obj.x, obj.y);
                            npc.setDepthScale(levelData.depth_scale_y);
                            npcSprites.push(npc);
                            console.log("npc atlas loaded");
                        }).catch(() => {
                            console.log('error: unable to load NPC sprite');
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
                    console.log("scene files loaded");
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
        if (spriteObj.conversation != null) {
            if (spriteObj.conversation.first_dialog != null) {
                return new Conversation_1.Conversation(Level.buildDialog(spriteObj.conversation.first_dialog));
            }
        }
        return null;
    }
    static buildDialog(dialog) {
        if (dialog.type == "continue") {
            let nextDialog;
            if (dialog.next_dialog != null) {
                nextDialog = Level.buildDialog(dialog.next_dialog);
            }
            return new ContinueDialog_1.ContinueDialog(dialog.text, dialog.speaker, nextDialog);
        }
        else if (dialog.type == "option") {
            let options = {};
            // create a dialog object for each option
            for (let optName in dialog.options) {
                options[optName] = Level.buildDialog(dialog.options[optName]);
            }
            return new OptionDialog_1.OptionDialog(dialog.text, dialog.speaker, options);
        }
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
    // check for clicks on interactable (static) sprites
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
    // check for clicks on NPC sprites
    for (const sprite of npcSprites) {
        if (event.button === 0) {
            if (sprite.inInteractionZone(playerSprite.x, playerSprite.y) && sprite.inClickZone(x, y)) {
                openChatGUI(sprite.getConversation());
                interactedWithSprite = true;
            }
        }
        else if (event.button === 2) {
            if (sprite.inClickZone(x, y)) {
                // examine the NPC sprite
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
    if (conversation != null) {
        let chatpanel = document.getElementById("chatpanel");
        if (chatpanel != null) {
            // remove the chat panel if it already exists
            chatpanel.parentNode.removeChild(chatpanel);
        }
        chatpanel = document.createElement("div");
        chatpanel.id = "chatpanel";
        document.body.insertBefore(chatpanel, document.getElementById("invent"));
        // create a GUI for the dialog
        let d = conversation.getFirstDialog();
        createDialogGUI(chatpanel, d);
        // add a button for exiting the conversation
        let exitbtn = document.createElement("button");
        exitbtn.classList.add("chatbtn");
        exitbtn.innerHTML = "Exit Conversation";
        chatpanel.appendChild(exitbtn);
        exitbtn.onclick = () => {
            // exit the conversation
            chatpanel.parentNode.removeChild(chatpanel);
        };
    }
}
function createDialogGUI(chatpanel, d) {
    if (d != null) {
        chatpanel.innerHTML = ""; // clear the div of previous contents
        // add the speaker image based on whether player or npc is speaking
        let speakerimg = document.createElement("img");
        speakerimg.src = "res/images/player_head.png";
        speakerimg.classList.add(d.getSpeaker() == "player" ? "playerchathead" : "npcchathead");
        chatpanel.appendChild(speakerimg);
        // add labels and buttons for this dialog
        d.createGUIElement(chatpanel).then((nextDialog) => {
            if (nextDialog != null) {
                // advance to next dialog
                createDialogGUI(chatpanel, nextDialog);
            }
            else {
                // next dialog is null, therefore, exit conversation
                chatpanel.parentNode.removeChild(chatpanel);
            }
        });
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
    constructor(x, y, scale, originHorizontal, originVertical, anims, examineText, examineAudio, interactionZone, clickZone, conversation, moveSpeed = 0.5) {
        super(x, y, scale, originHorizontal, originVertical, anims, moveSpeed);
        this.examineText = examineText;
        this.examineAudio = examineAudio;
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
    getConversation() {
        return this.conversation;
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
    getExamineAudio() {
        return this.examineAudio;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXQvQ29udGludWVEaWFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXQvQ29udmVyc2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jaGF0L0RpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhdC9PcHRpb25EaWFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbGxpc2lvbi9DaXJjbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbGxpc2lvbi9OYXZNZXNoLnRzIiwid2VicGFjazovLy8uL3NyYy9jb2xsaXNpb24vUG9pbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbGxpc2lvbi9SZWN0YW5nbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbGxpc2lvbi9UcmlhbmdsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9JbnRlcmFjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9MZXZlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9SZWNlaXZlSXRlbUludGVyYWN0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9nbG9iLnRzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dC9JbnB1dE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2l0ZW1zL0ludmVudG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaXRlbXMvSXRlbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVzb3VyY2VzL0ltYWdlTG9hZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvSlNPTkxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlcy9BbmltYXRlZFNwcml0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlcy9JbnRlcmFjdGFibGVTcHJpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZXMvTlBDU3ByaXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGVzL05hdlNwcml0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlcy9QbGF5ZXJTcHJpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZXMvU3ByaXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGVzL1Nwcml0ZUFuaW1hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlcy9TdGF0aWNTcHJpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZXMvVGV4dHVyZUF0bGFzLnRzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGVzL1RleHR1cmVBdGxhc0ZyYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuRUEsNkVBQStCO0FBRS9CLG9CQUE0QixTQUFRLGVBQU07SUFFdEMsWUFBWSxJQUFZLEVBQUUsT0FBZSxFQUFZLFVBQWtCO1FBRW5FLEtBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFGNEIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtJQUd2RSxDQUFDO0lBRU0sZ0JBQWdCLENBQUMsR0FBbUI7UUFFdkMsTUFBTSxDQUFDLElBQUks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R0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7WUFFbkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ1QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQ2xGLENBQUMsR0FBRyxDQUFFLElBQUksR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFFbEYsRUFBRSxFQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FDeEMsQ0FBQztnQkFDRyw4R0FBOEc7Z0JBQzlHLE1BQU0sR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLE1BQU0sR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFD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TUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ2hLLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNoSyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLGFBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZHLENBQUM7UUE5QkcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGFBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGFBQUss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QztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztJQUN2QyxDQUFDO0lBRU0sR0FBRyxDQUFDLENBQVMsRUFBRSxDQUFTO1FBRTNCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDO0NBQ0o7QUE3QkQsOENBNkJDIiwiZmlsZSI6ImJ1aWxkL2NsYWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi50c1wiKTtcbiIsImltcG9ydCB7RGlhbG9nfSBmcm9tIFwiLi9EaWFsb2dcIlxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRpbnVlRGlhbG9nIGV4dGVuZHMgRGlhbG9nXHJcbntcclxuICAgIGNvbnN0cnVjdG9yKHRleHQ6IHN0cmluZywgc3BlYWtlcjogc3RyaW5nLCBwcm90ZWN0ZWQgbmV4dERpYWxvZzogRGlhbG9nKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKHRleHQsIHNwZWFrZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGVHVUlFbGVtZW50KGRpdjogSFRNTERpdkVsZW1lbnQpOiBQcm9taXNlPERpYWxvZz5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGFkZCB0aGUgZGlhbG9nIHRleHRcclxuICAgICAgICAgICAgbGV0IHR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICAgICAgdHh0LmNsYXNzTGlzdC5hZGQoXCJjaGF0bXNnXCIpO1xyXG4gICAgICAgICAgICB0eHQuaW5uZXJIVE1MID0gdGhpcy50ZXh0O1xyXG5cclxuICAgICAgICAgICAgLy8gYWRkIGEgYnV0dG9uIHRvIGFkdmFuY2UgdG8gdGhlIG5leHQgZGlhbG9nXHJcbiAgICAgICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcImNoYXRidG5cIik7XHJcbiAgICAgICAgICAgIGJ0bi5pbm5lckhUTUwgPSBcIkNvbnRpbnVlXCI7XHJcblxyXG4gICAgICAgICAgICAvLyBhZGQgYWxsIG5ldyBlbGVtZW50cyB0byBkaXZcclxuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKHR4dCk7XHJcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChidG4pO1xyXG5cclxuICAgICAgICAgICAgLy8gYWRkIGEgY2FsbGJhY2sgZm9yIHRoZSBjb250aW51ZSBidXR0b25cclxuICAgICAgICAgICAgYnRuLm9uY2xpY2sgPSAoZXZudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLm5leHREaWFsb2cpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7RGlhbG9nfSBmcm9tIFwiLi9EaWFsb2dcIlxyXG5cclxuLy8gY29udmVyc2F0aW9uIGJldHdlZW4gdGhlIHBsYXllciBhbmQgYW4gTlBDXHJcbmV4cG9ydCBjbGFzcyBDb252ZXJzYXRpb25cclxue1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmaXJzdERpYWxvZzogRGlhbG9nKSB7fVxyXG5cclxuICAgIHB1YmxpYyBnZXRGaXJzdERpYWxvZygpOiBEaWFsb2cge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpcnN0RGlhbG9nO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEaWFsb2dcclxue1xyXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIHRleHQ6IHN0cmluZywgcHJvdGVjdGVkIHNwZWFrZXI6IHN0cmluZykge31cclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgY3JlYXRlR1VJRWxlbWVudChkaXY6IEhUTUxEaXZFbGVtZW50KTogUHJvbWlzZTxEaWFsb2c+XHJcblxyXG4gICAgcHVibGljIGdldFRleHQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRTcGVha2VyKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BlYWtlcjtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0RpYWxvZ30gZnJvbSBcIi4vRGlhbG9nXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBPcHRpb25EaWFsb2cgZXh0ZW5kcyBEaWFsb2dcclxue1xyXG4gICAgY29uc3RydWN0b3IodGV4dDogc3RyaW5nLCBzcGVha2VyOiBzdHJpbmcsIHByb3RlY3RlZCBvcHRpb25zOiB7dGV4dDogc3RyaW5nLCBkaWFsb2c6IERpYWxvZ30pXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIodGV4dCwgc3BlYWtlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZUdVSUVsZW1lbnQoZGl2OiBIVE1MRGl2RWxlbWVudCk6IFByb21pc2U8RGlhbG9nPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgLy8gYWRkIHRoZSBkaWFsb2cgdGV4dFxyXG4gICAgICAgICAgICBsZXQgdHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgICAgICB0eHQuY2xhc3NMaXN0LmFkZChcImNoYXRtc2dcIik7XHJcbiAgICAgICAgICAgIHR4dC5pbm5lckhUTUwgPSB0aGlzLnRleHQ7XHJcblxyXG4gICAgICAgICAgICAvLyBhZGQgdGV4dCBlbGVtZW50IHRvIGRpdlxyXG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodHh0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIGFkZCBhIGJ1dHRvbiBmb3IgZWFjaCBkaWFsb2cgb3B0aW9uXHJcbiAgICAgICAgICAgIGZvcihsZXQgb3B0aW9uIGluIHRoaXMub3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcImNoYXRidG5cIik7XHJcbiAgICAgICAgICAgICAgICBidG4uaW5uZXJIVE1MID0gb3B0aW9uO1xyXG4gICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGJ0bik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gYWRkIGEgY2FsbGJhY2sgZm9yIHRoZSBvcHRpb24gYnV0dG9uXHJcbiAgICAgICAgICAgICAgICBidG4ub25jbGljayA9IChldm50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLm9wdGlvbnNbb3B0aW9uXSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtjdHh9IGZyb20gXCIuLi9nbG9iLnRzXCJcclxuaW1wb3J0IHtJU2hhcGV9IGZyb20gXCIuL0lTaGFwZVwiXHJcblxyXG5leHBvcnQgY2xhc3MgQ2lyY2xlIGltcGxlbWVudHMgSVNoYXBlXHJcbntcclxuICAgIHB1YmxpYyB4OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHk6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgcmFkaXVzOiBudW1iZXIgPSAxMDtcclxuICAgIHB1YmxpYyBsaW5lV2lkdGg6IG51bWJlciA9IDI7XHJcbiAgICBwdWJsaWMgY29sb3I6IHN0cmluZyA9IFwicmVkXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBjb2xvcjogc3RyaW5nID0gXCJyZWRcIiwgbGluZV93aWR0aDogbnVtYmVyID0gMilcclxuICAgIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMubGluZVdpZHRoID0gbGluZV93aWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdygpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvcjtcclxuICAgICAgICBjdHgubGluZVdpZHRoID0gdGhpcy5saW5lV2lkdGg7XHJcbiAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29udGFpbnMoeDogbnVtYmVyLCB5OiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICgoeSAtIHRoaXMueSkgKiogMiArICh4IC0gdGhpcy54KSAqKiAyKSA8PSB0aGlzLnJhZGl1cyAqKiAyO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7VHJpYW5nbGV9IGZyb20gXCIuL1RyaWFuZ2xlXCJcclxuaW1wb3J0IHtQb2ludH0gZnJvbSBcIi4vUG9pbnRcIlxyXG5cclxuLy8gbmF2bWVzaCBwYXRoZmluZGluZzogaHR0cHM6Ly9tZWRpdW0uY29tL0Btc2NhbnNpYW4vYS13aXRoLW5hdmlnYXRpb24tbWVzaGVzLTI0NmZkOWU3MjQyNFxyXG5leHBvcnQgY2xhc3MgTmF2TWVzaFxyXG57XHJcbiAgICAvLyB2YWxpZCByZWdpb25zIG9mIHRoZSBuYXZtZXNoXHJcbiAgICBwcml2YXRlIHRyaXM6IEFycmF5PFRyaWFuZ2xlPjtcclxuXHJcbiAgICAvLyBUT0RPIC0gbmV3IHN5c3RlbSBvZiB0cmlhbmdsZSByZXByZXNlbnRhdGlvblxyXG4gICAgcHJpdmF0ZSB2ZXJ0aWNlczogQXJyYXk8UG9pbnQ+O1xyXG4gICAgcHJpdmF0ZSBlZGdlczogQXJyYXk8e3YxOiBudW1iZXIsIHYyOiBudW1iZXJ9PjsgICAgICAgICAvLyB2MSBhbmQgdjIgYXJlIGluZGljZXMgaW50byB2ZXJ0aWNlcyBsaXN0XHJcbiAgICBwcml2YXRlIG91dGVyRWRnZXM6IEFycmF5PHt2MTogbnVtYmVyLCB2MjogbnVtYmVyfT47ICAgIC8vIGVkZ2VzIHdoaWNoIG9ubHkgYXBwZWFyIGluIDEgdHJpXHJcblxyXG4gICAgY29uc3RydWN0b3IodHJpczogQXJyYXk8VHJpYW5nbGU+KSB7XHJcbiAgICAgICAgdGhpcy50cmlzID0gdHJpcyA/IHRyaXMgOiBbXTtcclxuICAgICAgICB0aGlzLnZlcnRpY2VzID0gW107XHJcbiAgICAgICAgdGhpcy5lZGdlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMub3V0ZXJFZGdlcyA9IFtdO1xyXG5cclxuICAgICAgICAvLyBpbml0aWFsaXNlIHZlcnRpY2VzIGFuZCBlZGdlcyBsaXN0XHJcbiAgICAgICAgZm9yKGNvbnN0IHRyaSBvZiB0cmlzKSB7XHJcbiAgICAgICAgICAgIGxldCBwMUluZGV4ID0gdGhpcy5pbmRleE9mVmVydGV4KHRoaXMudmVydGljZXMsIHRyaS5wb2ludDEpO1xyXG4gICAgICAgICAgICBsZXQgcDJJbmRleCA9IHRoaXMuaW5kZXhPZlZlcnRleCh0aGlzLnZlcnRpY2VzLCB0cmkucG9pbnQyKTtcclxuICAgICAgICAgICAgbGV0IHAzSW5kZXggPSB0aGlzLmluZGV4T2ZWZXJ0ZXgodGhpcy52ZXJ0aWNlcywgdHJpLnBvaW50Myk7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiB2ZXJ0ZXggaXMgbm90IGluIHRoZSBsaXN0LCBhZGQgaXQgdG8gdGhlIGxpc3RcclxuICAgICAgICAgICAgaWYocDFJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmVydGljZXMucHVzaCh0cmkucG9pbnQxKTtcclxuICAgICAgICAgICAgICAgIHAxSW5kZXggPSB0aGlzLmluZGV4T2ZWZXJ0ZXgodGhpcy52ZXJ0aWNlcywgdHJpLnBvaW50MSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gaWYgdmVydGV4IGlzIG5vdCBpbiB0aGUgbGlzdCwgYWRkIGl0IHRvIHRoZSBsaXN0XHJcbiAgICAgICAgICAgIGlmKHAySW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2godHJpLnBvaW50Mik7XHJcbiAgICAgICAgICAgICAgICBwMkluZGV4ID0gdGhpcy5pbmRleE9mVmVydGV4KHRoaXMudmVydGljZXMsIHRyaS5wb2ludDIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGlmIHZlcnRleCBpcyBub3QgaW4gdGhlIGxpc3QsIGFkZCBpdCB0byB0aGUgbGlzdFxyXG4gICAgICAgICAgICBpZihwM0luZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHRyaS5wb2ludDMpO1xyXG4gICAgICAgICAgICAgICAgcDNJbmRleCA9IHRoaXMuaW5kZXhPZlZlcnRleCh0aGlzLnZlcnRpY2VzLCB0cmkucG9pbnQzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gYWRkIGFsbCAzIGVkZ2VzIG9mIHRoZSB0cmkgdG8gdGhlIGVkZ2VzIGxpc3RcclxuICAgICAgICAgICAgY29uc3QgZWRnZTEgPSB7djE6IHAxSW5kZXgsIHYyOiBwMkluZGV4fTtcclxuICAgICAgICAgICAgY29uc3QgZWRnZTIgPSB7djE6IHAySW5kZXgsIHYyOiBwM0luZGV4fTtcclxuICAgICAgICAgICAgY29uc3QgZWRnZTMgPSB7djE6IHAzSW5kZXgsIHYyOiBwMUluZGV4fTtcclxuXHJcbiAgICAgICAgICAgIC8vIGFkZCB0aGUgZWRnZXMgaWYgdGhleSBhcmUgbm90IGFscmVhZHkgaW4gdGhlIGxpc3RcclxuICAgICAgICAgICAgaWYodGhpcy5pbmRleE9mRWRnZSh0aGlzLmVkZ2VzLCBlZGdlMSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVkZ2VzLnB1c2goZWRnZTEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdXRlckVkZ2VzLnB1c2goZWRnZTEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdXRlckVkZ2VzLnNwbGljZSh0aGlzLmluZGV4T2ZFZGdlKHRoaXMub3V0ZXJFZGdlcywgZWRnZTEpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5pbmRleE9mRWRnZSh0aGlzLmVkZ2VzLCBlZGdlMikgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVkZ2VzLnB1c2goZWRnZTIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdXRlckVkZ2VzLnB1c2goZWRnZTIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdXRlckVkZ2VzLnNwbGljZSh0aGlzLmluZGV4T2ZFZGdlKHRoaXMub3V0ZXJFZGdlcywgZWRnZTIpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5pbmRleE9mRWRnZSh0aGlzLmVkZ2VzLCBlZGdlMykgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVkZ2VzLnB1c2goZWRnZTMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdXRlckVkZ2VzLnB1c2goZWRnZTMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdXRlckVkZ2VzLnNwbGljZSh0aGlzLmluZGV4T2ZFZGdlKHRoaXMub3V0ZXJFZGdlcywgZWRnZTMpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMudmVydGljZXMpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5lZGdlcyk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLm91dGVyRWRnZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRXYXlwb2ludHMgPSAoY3VycmVudFg6IG51bWJlciwgY3VycmVudFk6IG51bWJlciwgdGFyZ2V0WDogbnVtYmVyLCB0YXJnZXRZOiBudW1iZXIpOiBBcnJheTxQb2ludD4gPT4ge1xyXG4gICAgICAgIGZvcihsZXQgdHJpIG9mIHRoaXMudHJpcykge1xyXG4gICAgICAgICAgICAvLyBhbGxvdyBmcmVlIG1vdmVtZW50IHdpdGhpbiBhIHRyaWFuZ2xlXHJcbiAgICAgICAgICAgIGlmKHRyaS5jb250YWlucyh0YXJnZXRYLCB0YXJnZXRZKSAmJiB0cmkuY29udGFpbnMoY3VycmVudFgsIGN1cnJlbnRZKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtuZXcgUG9pbnQodGFyZ2V0WCwgdGFyZ2V0WSldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgdHJpIG9mIHRoaXMudHJpcykge1xyXG4gICAgICAgICAgICAvLyBpZiBib3RoIHBvaW50cyBmYWxsIHVuZGVyIGRpZmZlcmVudCB0cmlhbmdsZXMsIGZpbmQgdGhlIGEgd2F5cG9pbnQgdG8gcmVhY2ggdGhlIG5leHQgdHJpXHJcbiAgICAgICAgICAgIGlmKHRyaS5jb250YWlucyh0YXJnZXRYLCB0YXJnZXRZKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy9yZXR1cm4gbmV3IFBvaW50KHRhcmdldFgsIHRhcmdldFkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqID0gdGhpcy5maW5kUGF0aChuZXcgUG9pbnQoY3VycmVudFgsIGN1cnJlbnRZKSwgbmV3IFBvaW50KHRhcmdldFgsIHRhcmdldFkpKTtcclxuICAgICAgICAgICAgICAgIGlmKG9iaiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJvdXRlOiBBcnJheTxQb2ludD4gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZS5wdXNoKG5ldyBQb2ludCh0YXJnZXRYLCB0YXJnZXRZKSk7ICAgIC8vIGdvIGZyb20gbGFzdCBwb2ludCB0byB0aGUgZW5kIHBvaW50XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZFJvdXRlKG9iai5jYW1lRnJvbSwgb2JqLmVuZFZlcnRleCwgcm91dGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVkdWNlUm91dGUocm91dGUpOyAgICAvLyByZW1vdmUgcmVkdW5kYW50IG5vZGVzIGZyb20gdGhlIHBhdGhcclxuICAgICAgICAgICAgICAgICAgICBpZihyb3V0ZS5sZW5ndGggPiAwKSAgICAgICAgLy8gbGFzdCB3YXlwb2ludCB3aWxsIGJlIHN0YXJ0IC0+IGdldCByaWQgb2YgaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyb3V0ZTogXCIgKyByb3V0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmVtb3ZlIHVuZWNlc3Nhcnkgd2F5cG9pbnRzIGZyb20gdGhlIHJvdXRlLCBpLmUuIGlmIHRoZWlyIGlzIGEgc3RyYWlnaHQgcGF0aCBmcm9tIGEgdG8gYywgcmVtb3ZlIGJcclxuICAgIHByaXZhdGUgcmVkdWNlUm91dGUgPSAocm91dGU6IEFycmF5PFBvaW50PikgPT4ge1xyXG4gICAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgLy8gbG9vcCB1bnRpbCBubyBtb3JlIHJlZHVjdGlvbnMgY2FuIGJlIG1hZGVcclxuICAgICAgICB3aGlsZShpbmRleCA8IHJvdXRlLmxlbmd0aCAtIDIpIHtcclxuICAgICAgICAgICAgY29uc3QgYSA9IHJvdXRlW2luZGV4XVxyXG4gICAgICAgICAgICBjb25zdCBjID0gcm91dGVbaW5kZXggKyAyXVxyXG5cclxuICAgICAgICAgICAgLy8gdGhlcmUgaXMgYSB2YWxpZCBzdHJhaWdodCBwYXRoIGJldHdlZW4gYSBhbmQgYyBpZiB0aGUgcGF0aCBkb2VzIG5vdCBpbnRlcnNlY3QgYW4gb3V0ZXIgZWRnZVxyXG4gICAgICAgICAgICBsZXQgaW50ZXJzZWN0c091dGVyRWRnZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmb3IoY29uc3Qgb3V0ZXJFZGdlIG9mIHRoaXMub3V0ZXJFZGdlcylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5kb0xpbmVTZWdtZW50c0ludGVyc2VjdCh0aGlzLnZlcnRpY2VzW291dGVyRWRnZS52MV0sIHRoaXMudmVydGljZXNbb3V0ZXJFZGdlLnYyXSwgYSwgYykpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGEudG9TdHJpbmcoKSwgYy50b1N0cmluZygpLCBcImludGVyc2VjdHNcIiwgdGhpcy52ZXJ0aWNlc1tvdXRlckVkZ2UudjFdLnRvU3RyaW5nKCksIHRoaXMudmVydGljZXNbb3V0ZXJFZGdlLnYyXS50b1N0cmluZygpKVxyXG4gICAgICAgICAgICAgICAgICAgIGludGVyc2VjdHNPdXRlckVkZ2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBpZiB0aGUgcGF0aCBkb2VzIG5vdCBpbnRlcnNlY3QgYW4gb3V0ZXIgZWRnZSwgcmVtb3ZlIHdheXBvaW50IGJcclxuICAgICAgICAgICAgaWYoIWludGVyc2VjdHNPdXRlckVkZ2UpIHtcclxuICAgICAgICAgICAgICAgIHJvdXRlLnNwbGljZShpbmRleCsxLCAxKTtcclxuICAgICAgICAgICAgICAgIC8vIGRvbid0IG5lZWQgdG8gaW5jcmVtZW50IGluZGV4IHNpbmNlIGFycmF5IGxlbmd0aCBoYXMgYmVlbiByZWR1Y2VkXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBtb3ZlIG9udG8gbmV4dCBwYWlyIG9mIHdheXBvaW50c1xyXG4gICAgICAgICAgICAgICAgaW5kZXggKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBidWlsZFJvdXRlID0gKGNhbWVGcm9tOiB7fSwgdmVydGV4OiBQb2ludCwgcm91dGU6IEFycmF5PFBvaW50PikgPT4ge1xyXG4gICAgICAgIHJvdXRlLnB1c2godmVydGV4KTsgLy8gcm91dGUgaXMgcmVhZCBpbiByZXZlcnNlIG9yZGVyXHJcbiAgICAgICAgaWYoY2FtZUZyb21bdmVydGV4LnRvU3RyaW5nKCldICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5idWlsZFJvdXRlKGNhbWVGcm9tLCBjYW1lRnJvbVt2ZXJ0ZXgudG9TdHJpbmcoKV0ubm9kZSwgcm91dGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB1c2UgdGhlIEEqIGFsZ29yaXRobSB0byBmaW5kIGEgc2hvcnRlc3QgcGF0aCB0aHJvdWdoIHRoZSBuYXZtZXNoXHJcbiAgICBwcml2YXRlIGZpbmRQYXRoID0gKHN0YXJ0OiBQb2ludCwgZW5kOiBQb2ludCk6IHtjYW1lRnJvbToge30sIGVuZFZlcnRleDogUG9pbnR9ID0+IHtcclxuICAgICAgICBsZXQgb3BlbiA9IFt7bm9kZTogc3RhcnQsIHByaW9yaXR5OiAwfV07ICAgIC8vIGxvd2VzdCBwcmlvcml0eSA9IDBcclxuICAgICAgICBsZXQgY2xvc2VkID0gW107XHJcblxyXG4gICAgICAgIC8vIGZpbmQgdGhlIHRyaWFuZ2xlIGNvbnRhaW5pbmcgdGhlIHN0YXJ0IHBvaW50XHJcbiAgICAgICAgbGV0IHN0YXJ0VHJpO1xyXG4gICAgICAgIGZvcihjb25zdCB0cmkgb2YgdGhpcy50cmlzKSB7XHJcbiAgICAgICAgICAgIGlmKHRyaS5jb250YWlucyhzdGFydC54LCBzdGFydC55KSkge1xyXG4gICAgICAgICAgICAgICAgc3RhcnRUcmkgPSB0cmk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihzdGFydFRyaSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZmluZCB0aGUgdHJpYW5nbGUgY29udGFpbmluZyB0aGUgZW5kIHBvaW50XHJcbiAgICAgICAgbGV0IGVuZFRyaTtcclxuICAgICAgICBmb3IoY29uc3QgdHJpIG9mIHRoaXMudHJpcykge1xyXG4gICAgICAgICAgICBpZih0cmkuY29udGFpbnMoZW5kLngsIGVuZC55KSkge1xyXG4gICAgICAgICAgICAgICAgZW5kVHJpID0gdHJpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZW5kVHJpID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBnW2ldIGlzIHRoZSBjb3N0IHRvIGdldCB0byBpIGZyb20gdGhlIHN0YXJ0IHZlcnRleFxyXG4gICAgICAgIGxldCBnID0ge307XHJcbiAgICAgICAgbGV0IGNhbWVGcm9tID0ge307XHJcbiAgICAgICAgZ1tzdGFydC50b1N0cmluZygpXSA9IDA7XHJcbiAgICAgICAgY2FtZUZyb21bc3RhcnQudG9TdHJpbmcoKV0gPSBudWxsO1xyXG5cclxuICAgICAgICAvLyBleGVjdXRlIEEqIGFsZ29yaXRobVxyXG4gICAgICAgIC8vIHBzZXVkb2NvZGU6IGh0dHA6Ly90aGVvcnkuc3RhbmZvcmQuZWR1L35hbWl0cC9HYW1lUHJvZ3JhbW1pbmcvSW1wbGVtZW50YXRpb25Ob3Rlcy5odG1sXHJcbiAgICAgICAgd2hpbGUob3Blbi5sZW5ndGggPiAwICYmICFlbmRUcmkuaXNWZXJ0ZXgob3BlblswXS5ub2RlKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50ID0gb3Blbi5zaGlmdCgpOyAgLy8gcmVtb3ZlIGZpcnN0IGl0ZW0gZnJvbSBvcGVuIChpdGVtIHdpdGggbG93ZXN0IHByaW9yaXR5KVxyXG4gICAgICAgICAgICBjbG9zZWQucHVzaChjdXJyZW50KTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImN1cnJlbnQgdmVydGV4OiBcIiArIGN1cnJlbnQubm9kZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgZm9yKGNvbnN0IG5laWdoYm91ciBvZiB0aGlzLmdldE5laWdoYm91cnMoY3VycmVudC5ub2RlKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvc3QgPSBnW2N1cnJlbnQubm9kZS50b1N0cmluZygpXSArIHRoaXMuZ2V0RWRnZUNvc3QoY3VycmVudC5ub2RlLCBuZWlnaGJvdXIpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIm5laWdoYm91cjogXCIgKyBuZWlnaGJvdXIudG9TdHJpbmcoKSArIFwiLCBjb3N0OiBcIiArIGNvc3QpO1xyXG4gICAgICAgICAgICAgICAgLy8gbmVpZ2hib3VyIGluIG9wZW5cclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5kZXhPZlByaW9yaXR5Tm9kZShvcGVuLCBuZWlnaGJvdXIpICE9PSAtMSAmJiBjb3N0IDwgZ1tuZWlnaGJvdXIudG9TdHJpbmcoKV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGVuLnNwbGljZSh0aGlzLmluZGV4T2ZQcmlvcml0eU5vZGUob3BlbiwgbmVpZ2hib3VyKSwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBuZWlnaGJvdXIgaW4gY2xvc2VkXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluZGV4T2ZQcmlvcml0eU5vZGUoY2xvc2VkLCBuZWlnaGJvdXIpICE9PSAtMSAmJiBjb3N0IDwgZ1tuZWlnaGJvdXIudG9TdHJpbmcoKV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjbG9zZWQuc3BsaWNlKHRoaXMuaW5kZXhPZlByaW9yaXR5Tm9kZShjbG9zZWQsIG5laWdoYm91ciksIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gbmVpZ2hib3VyIG5laXRoZXIgaW4gb3BlbiBub3IgY2xvc2VkXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluZGV4T2ZQcmlvcml0eU5vZGUob3BlbiwgbmVpZ2hib3VyKSA9PT0gLTEgJiYgdGhpcy5pbmRleE9mUHJpb3JpdHlOb2RlKGNsb3NlZCwgbmVpZ2hib3VyKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBnW25laWdoYm91ci50b1N0cmluZygpXSA9IGNvc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZUZyb21bbmVpZ2hib3VyLnRvU3RyaW5nKCldID0gY3VycmVudDtcclxuICAgICAgICAgICAgICAgICAgICBvcGVuLnB1c2goe25vZGU6IG5laWdoYm91ciwgcHJpb3JpdHk6IGNvc3R9KTsgLy8gVE9ETyAtIHByaW9yaXR5ID0gY29zdCArIGgobmVpZ2hib3VyKVxyXG4gICAgICAgICAgICAgICAgICAgIG9wZW4uc29ydCgoYSwgYikgPT4geyAgIC8vIHNvcnQgb3BlbiBxdWV1ZSBieSBwcmlvcml0eVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5wcmlvcml0eSAtIGIucHJpb3JpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vY29uc29sZS5sb2cob3Blbi5sZW5ndGggPiAwID8gXCJlbmQ6IFwiICsgb3BlblswXS5ub2RlLnRvU3RyaW5nKCkgOiBcIm5vIHBhdGhcIik7XHJcbiAgICAgICAgcmV0dXJuIG9wZW4ubGVuZ3RoID4gMCA/IHtjYW1lRnJvbTogY2FtZUZyb20sIGVuZFZlcnRleDogb3BlblswXS5ub2RlfSA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgZm9yKGxldCB0cmkgb2YgdGhpcy50cmlzKSB7XHJcbiAgICAgICAgICAgIHRyaS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHJldHVybnMgdGhlIGNvc3Qgb2YgdHJhdmVyc2luZyBhbiBlZGdlIGJldHdlZW4gcDEgYW5kIHAyXHJcbiAgICBwcml2YXRlIGdldEVkZ2VDb3N0ID0gKHAxOiBQb2ludCwgcDI6IFBvaW50KTogbnVtYmVyID0+IHtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KChwMS54IC0gcDIueCkgKiogMiArIChwMS55IC0gcDIueSkgKiogMik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmV0dXJuIGEgbGlzdCBvZiB2ZXJ0Y2llcyB3aGljaCBhcmUgYWRqYWNlbnQgdG8gdGhlIHZlcnRleCBwXHJcbiAgICBwcml2YXRlIGdldE5laWdoYm91cnMgPSAocDogUG9pbnQpOiBBcnJheTxQb2ludD4gPT4ge1xyXG4gICAgICAgIGxldCBuZWlnaGJvdXJzOiBBcnJheTxQb2ludD4gPSBbXTtcclxuICAgICAgICBmb3IoY29uc3QgZWRnZSBvZiB0aGlzLmVkZ2VzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYodGhpcy52ZXJ0aWNlc1tlZGdlLnYxXS5lcXVhbHMocCkpIHtcclxuICAgICAgICAgICAgICAgIG5laWdoYm91cnMucHVzaCh0aGlzLnZlcnRpY2VzW2VkZ2UudjJdKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMudmVydGljZXNbZWRnZS52Ml0uZXF1YWxzKHApKSB7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvdXJzLnB1c2godGhpcy52ZXJ0aWNlc1tlZGdlLnYxXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmIHRoZSB2ZXJ0ZXggaXMgbm90IGEgdmVydGV4IG9mIGEgdHJpYW5nbGUsIGNoZWNrIGlmIGl0IGlzIHdpdGhpbiBhIHRyaWFuZ2xlXHJcbiAgICAgICAgaWYobmVpZ2hib3Vycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgZm9yKGNvbnN0IHRyaSBvZiB0aGlzLnRyaXMpIHtcclxuICAgICAgICAgICAgICAgIGlmKHRyaS5jb250YWlucyhwLngsIHAueSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZWlnaGJvdXJzLnB1c2godHJpLnBvaW50MSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3Vycy5wdXNoKHRyaS5wb2ludDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5laWdoYm91cnMucHVzaCh0cmkucG9pbnQzKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmVpZ2hib3VycztcclxuICAgIH1cclxuXHJcbiAgICAvLyBhbnN3ZXIgMiBmcm9tOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81NjMxOTgvaG93LWRvLXlvdS1kZXRlY3Qtd2hlcmUtdHdvLWxpbmUtc2VnbWVudHMtaW50ZXJzZWN0XHJcbiAgICBwcml2YXRlIGRvTGluZVNlZ21lbnRzSW50ZXJzZWN0ID0gKGUxdjE6IFBvaW50LCBlMXYyOiBQb2ludCwgZTJ2MTogUG9pbnQsIGUydjI6IFBvaW50KTogYm9vbGVhbiA9PiB7XHJcbiAgICAgICAgY29uc3QgcDBfeCA9IGUxdjEueDtcclxuICAgICAgICBjb25zdCBwMF95ID0gZTF2MS55O1xyXG4gICAgICAgIGNvbnN0IHAxX3ggPSBlMXYyLng7XHJcbiAgICAgICAgY29uc3QgcDFfeSA9IGUxdjIueTtcclxuICAgICAgICBjb25zdCBwMl94ID0gZTJ2MS54O1xyXG4gICAgICAgIGNvbnN0IHAyX3kgPSBlMnYxLnk7XHJcbiAgICAgICAgY29uc3QgcDNfeCA9IGUydjIueDtcclxuICAgICAgICBjb25zdCBwM195ID0gZTJ2Mi55O1xyXG5cclxuICAgICAgICBsZXQgczFfeCwgczFfeSwgczJfeCwgczJfeTtcclxuICAgICAgICBzMV94ID0gcDFfeCAtIHAwX3g7XHJcbiAgICAgICAgczFfeSA9IHAxX3kgLSBwMF95O1xyXG4gICAgICAgIHMyX3ggPSBwM194IC0gcDJfeDtcclxuICAgICAgICBzMl95ID0gcDNfeSAtIHAyX3k7XHJcblxyXG4gICAgICAgIGxldCBzLCB0O1xyXG4gICAgICAgIHMgPSAoLXMxX3kgKiAocDBfeCAtIHAyX3gpICsgczFfeCAqIChwMF95IC0gcDJfeSkpIC8gKC1zMl94ICogczFfeSArIHMxX3ggKiBzMl95KTtcclxuICAgICAgICB0ID0gKCBzMl94ICogKHAwX3kgLSBwMl95KSAtIHMyX3kgKiAocDBfeCAtIHAyX3gpKSAvICgtczJfeCAqIHMxX3kgKyBzMV94ICogczJfeSk7XHJcblxyXG4gICAgICAgIGlmKHMgPj0gMCAmJiBzIDw9IDEgJiYgdCA+PSAwICYmIHQgPD0gMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiBmYWxzZSBpZiB0aGUgaW50ZXJzZWN0aW9uIHBvaW50IGlzIHRoZSB2ZXJ0ZXggcG9zaXRpb24gc2luY2UgaXQgYnJlYWtzIHRoZSByb3V0ZSByZWR1Y3Rpb24gYWxnb3JpdGhtXHJcbiAgICAgICAgICAgIGNvbnN0IGlfeCA9IChwMF94ICsgKHQgKiBzMV94KSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlfeSA9IChwMF95ICsgKHQgKiBzMV95KSk7XHJcbiAgICAgICAgICAgIHJldHVybiAhKGlfeCA9PT0gZTF2MS54ICYmIGlfeSA9PT0gZTF2MS55KSAmJiAhKGlfeCA9PT0gZTF2Mi54ICYmIGlfeSA9PT0gZTF2Mi55KSAmJiAhKGlfeCA9PT0gZTJ2MS54ICYmIGlfeSA9PT0gZTJ2MS55KSAmJiAhKGlfeCA9PT0gZTJ2Mi54ICYmIGlfeSA9PT0gZTJ2Mi55KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJubyBjb2xsaXNpb25cIik7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBubyBjb2xsaXNpb25cclxuICAgIH1cclxuXHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjcm9zc1Byb2R1Y3QgPSAocG9pbnQxOiBQb2ludCwgcG9pbnQyOiBQb2ludCkgPT4ge1xyXG4gICAgXHRyZXR1cm4gcG9pbnQxLnggKiBwb2ludDIueSAtIHBvaW50MS55ICogcG9pbnQyLng7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbmRleE9mUHJpb3JpdHlOb2RlID0gKHZlcnRpY2VzOiBBcnJheTx7bm9kZTogUG9pbnQsIHByaW9yaXR5OiBudW1iZXJ9PiwgcDogUG9pbnQpID0+IHtcclxuICAgICAgICBpZihwID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaW5kZXggPSAwOyBpbmRleCA8IHZlcnRpY2VzLmxlbmd0aDsgaW5kZXggKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZlcnRleCA9IHZlcnRpY2VzW2luZGV4XS5ub2RlO1xyXG4gICAgICAgICAgICAgICAgaWYodmVydGV4LnggPT09IHAueCAmJiB2ZXJ0ZXgueSA9PT0gcC55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbmRleE9mVmVydGV4ID0gKHZlcnRpY2VzOiBBcnJheTxQb2ludD4sIHA6IFBvaW50KTogbnVtYmVyID0+IHtcclxuICAgICAgICBpZihwID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaW5kZXggPSAwOyBpbmRleCA8IHZlcnRpY2VzLmxlbmd0aDsgaW5kZXggKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZlcnRleCA9IHZlcnRpY2VzW2luZGV4XTtcclxuICAgICAgICAgICAgICAgIGlmKHZlcnRleC54ID09PSBwLnggJiYgdmVydGV4LnkgPT09IHAueSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpbmRleDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5kZXhPZkVkZ2UgPSAoZWRnZXM6IEFycmF5PHt2MTogbnVtYmVyLCB2MjogbnVtYmVyfT4sIGVkZ2U6IHt2MTogbnVtYmVyLCB2MjogbnVtYmVyfSk6IG51bWJlciA9PiB7XHJcbiAgICAgICAgaWYoZWRnZSA9PSBudWxsIHx8IGVkZ2UudjEgPT0gbnVsbCB8fCBlZGdlLnYyID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaW5kZXggPSAwOyBpbmRleCA8IGVkZ2VzLmxlbmd0aDsgaW5kZXggKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGUgPSBlZGdlc1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICBpZigoZS52MSA9PT0gZWRnZS52MSAmJiBlLnYyID09PSBlZGdlLnYyKSB8fCAoZS52MSA9PT0gZWRnZS52MiAmJiBlLnYyID09PSBlZGdlLnYxKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpbmRleDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBQb2ludFxyXG57XHJcbiAgICBwdWJsaWMgeDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyB5OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlcXVhbHMgPSAocDogUG9pbnQpOiBib29sZWFuID0+IHtcclxuICAgICAgICByZXR1cm4gcCAhPSBudWxsICYmIHAueCA9PT0gdGhpcy54ICYmIHAueSA9PT0gdGhpcy55O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZyA9ICgpIDogc3RyaW5nID0+IHtcclxuICAgICAgICByZXR1cm4gYFBvaW50KCR7dGhpcy54fSwke3RoaXMueX0pYDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge2N0eH0gZnJvbSBcIi4uL2dsb2IudHNcIlxyXG5pbXBvcnQge0lTaGFwZX0gZnJvbSBcIi4vSVNoYXBlXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBSZWN0YW5nbGUgaW1wbGVtZW50cyBJU2hhcGVcclxue1xyXG4gICAgcHVibGljIHg6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgeTogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBsaW5lV2lkdGg6IG51bWJlciA9IDU7XHJcbiAgICBwdWJsaWMgd2lkdGg6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgaGVpZ2h0OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGNvbG9yOiBzdHJpbmcgPSBcImJsdWVcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGNvbG9yOiBzdHJpbmcgPSBcInJlZFwiLCBsaW5lX3dpZHRoOiBudW1iZXIgPSAyKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMubGluZVdpZHRoID0gbGluZV93aWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdygpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvcjtcclxuICAgICAgICBjdHgubGluZVdpZHRoID0gdGhpcy5saW5lV2lkdGg7XHJcbiAgICAgICAgY3R4LnJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29udGFpbnMoeDogbnVtYmVyLCB5OiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICh4ID49IHRoaXMueCAmJiB4IDw9IHRoaXMueCArIHRoaXMud2lkdGggJiYgeSA+PSB0aGlzLnkgJiYgeSA8PSB0aGlzLnkgKyB0aGlzLmhlaWdodCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtjdHh9IGZyb20gXCIuLi9nbG9iLnRzXCJcclxuaW1wb3J0IHtJU2hhcGV9IGZyb20gXCIuL0lTaGFwZVwiXHJcbmltcG9ydCB7UG9pbnR9IGZyb20gXCIuL1BvaW50XCJcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmlhbmdsZVxyXG57XHJcbiAgICBwdWJsaWMgcG9pbnQxOiBQb2ludDtcclxuICAgIHB1YmxpYyBwb2ludDI6IFBvaW50O1xyXG4gICAgcHVibGljIHBvaW50MzogUG9pbnQ7XHJcbiAgICBwcml2YXRlIGFyZWE6IG51bWJlcjtcclxuICAgIHByaXZhdGUgc2lnbjogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHgxOiBudW1iZXIsIHkxOiBudW1iZXIsIHgyOiBudW1iZXIsIHkyOiBudW1iZXIsIHgzOiBudW1iZXIsIHkzOiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5wb2ludDEgPSBuZXcgUG9pbnQoeDEsIHkxKTtcclxuICAgICAgICB0aGlzLnBvaW50MiA9IG5ldyBQb2ludCh4MiwgeTIpO1xyXG4gICAgICAgIHRoaXMucG9pbnQzID0gbmV3IFBvaW50KHgzLCB5Myk7XHJcbiAgICAgICAgdGhpcy5hcmVhID0gMS8yICogKC10aGlzLnBvaW50Mi55ICogdGhpcy5wb2ludDMueCArIHRoaXMucG9pbnQxLnkgKiAoLXRoaXMucG9pbnQyLnggKyB0aGlzLnBvaW50My54KSArIHRoaXMucG9pbnQxLnggKiAodGhpcy5wb2ludDIueSAtIHRoaXMucG9pbnQzLnkpICsgdGhpcy5wb2ludDIueCAqIHRoaXMucG9pbnQzLnkpO1xyXG4gICAgICAgIHRoaXMuc2lnbiA9IHRoaXMuYXJlYSA8IDAgPyAtMSA6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJlZFwiO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSA1O1xyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHgubW92ZVRvKHRoaXMucG9pbnQxLngsIHRoaXMucG9pbnQxLnkpO1xyXG4gICAgICAgIGN0eC5saW5lVG8odGhpcy5wb2ludDIueCwgdGhpcy5wb2ludDIueSk7XHJcbiAgICAgICAgY3R4LmxpbmVUbyh0aGlzLnBvaW50My54LCB0aGlzLnBvaW50My55KTtcclxuICAgICAgICBjdHgubGluZVRvKHRoaXMucG9pbnQxLngsIHRoaXMucG9pbnQxLnkpO1xyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJldHVybnMgdHJ1ZSBpZmYgdGhlIHBvaW50IHAgaXMgYSB2ZXJ0ZXggb2YgdGhlIHRyaWFuZ2xlXHJcbiAgICBwdWJsaWMgaXNWZXJ0ZXggPSAocDogUG9pbnQpOiBib29sZWFuID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb2ludDEuZXF1YWxzKHApIHx8IHRoaXMucG9pbnQyLmVxdWFscyhwKSB8fCB0aGlzLnBvaW50My5lcXVhbHMocCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaHR0cDovL2pzZmlkZGxlLm5ldC9QZXJyb0FaVUwvemRhWTgvMS9cclxuICAgIHB1YmxpYyBjb250YWlucyA9ICh4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW4gPT4ge1xyXG4gICAgICAgIHZhciBzID0gKHRoaXMucG9pbnQxLnkgKiB0aGlzLnBvaW50My54IC0gdGhpcy5wb2ludDEueCAqIHRoaXMucG9pbnQzLnkgKyAodGhpcy5wb2ludDMueSAtIHRoaXMucG9pbnQxLnkpICogeCArICh0aGlzLnBvaW50MS54IC0gdGhpcy5wb2ludDMueCkgKiB5KSAqIHRoaXMuc2lnbjtcclxuICAgICAgICB2YXIgdCA9ICh0aGlzLnBvaW50MS54ICogdGhpcy5wb2ludDIueSAtIHRoaXMucG9pbnQxLnkgKiB0aGlzLnBvaW50Mi54ICsgKHRoaXMucG9pbnQxLnkgLSB0aGlzLnBvaW50Mi55KSAqIHggKyAodGhpcy5wb2ludDIueCAtIHRoaXMucG9pbnQxLngpICogeSkgKiB0aGlzLnNpZ247XHJcbiAgICAgICAgcmV0dXJuIChzID4gMCAmJiB0ID4gMCAmJiAocyArIHQpIDwgMiAqIHRoaXMuYXJlYSAqIHRoaXMuc2lnbikgfHwgKHRoaXMuaXNWZXJ0ZXgobmV3IFBvaW50KHgsIHkpKSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtJdGVtfSBmcm9tIFwiLi4vaXRlbXMvSXRlbVwiXHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSW50ZXJhY3Rpb25cclxue1xyXG4gICAgLy8gaXRlbSBjYW4gYmUgbnVsbFxyXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGl0ZW06IEl0ZW0pIHt9XHJcblxyXG4gICAgLy8gaW50ZXJhY3Qgd2l0aCB0aGUgb2JqZWN0XHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgaW50ZXJhY3QoaXRlbTogSXRlbSk6ICB7dGV4dDogc3RyaW5nLCBhdWRpbzogSFRNTEF1ZGlvRWxlbWVudCwgaXRlbXM6IEFycmF5PEl0ZW0+fTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0SXRlbSgpOiBJdGVtXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0pTT05Mb2FkZXJ9IGZyb20gXCIuLi9yZXNvdXJjZXMvSlNPTkxvYWRlclwiXHJcbmltcG9ydCB7SW1hZ2VMb2FkZXJ9IGZyb20gXCIuLi9yZXNvdXJjZXMvSW1hZ2VMb2FkZXJcIlxyXG5pbXBvcnQge1RleHR1cmVBdGxhc30gZnJvbSBcIi4uL3Nwcml0ZXMvVGV4dHVyZUF0bGFzXCJcclxuaW1wb3J0IHtTcHJpdGV9IGZyb20gXCIuLi9zcHJpdGVzL1Nwcml0ZVwiXHJcbmltcG9ydCB7U3RhdGljU3ByaXRlfSBmcm9tIFwiLi4vc3ByaXRlcy9TdGF0aWNTcHJpdGVcIlxyXG5pbXBvcnQge0FuaW1hdGVkU3ByaXRlfSBmcm9tIFwiLi4vc3ByaXRlcy9BbmltYXRlZFNwcml0ZVwiXHJcbmltcG9ydCB7SW50ZXJhY3RhYmxlU3ByaXRlfSBmcm9tIFwiLi4vc3ByaXRlcy9JbnRlcmFjdGFibGVTcHJpdGVcIlxyXG5pbXBvcnQge05QQ1Nwcml0ZX0gZnJvbSBcIi4uL3Nwcml0ZXMvTlBDU3ByaXRlXCJcclxuaW1wb3J0IHtTcHJpdGVBbmltYXRpb259IGZyb20gXCIuLi9zcHJpdGVzL1Nwcml0ZUFuaW1hdGlvblwiXHJcbmltcG9ydCB7TmF2TWVzaH0gZnJvbSBcIi4uL2NvbGxpc2lvbi9OYXZNZXNoXCJcclxuaW1wb3J0IHtUcmlhbmdsZX0gZnJvbSBcIi4uL2NvbGxpc2lvbi9UcmlhbmdsZVwiXHJcbmltcG9ydCB7SW50ZXJhY3Rpb259ICBmcm9tIFwiLi9JbnRlcmFjdGlvblwiXHJcbmltcG9ydCB7UmVjZWl2ZUl0ZW1JbnRlcmFjdGlvbn0gZnJvbSBcIi4vUmVjZWl2ZUl0ZW1JbnRlcmFjdGlvblwiXHJcbmltcG9ydCB7SXRlbX0gZnJvbSBcIi4uL2l0ZW1zL0l0ZW1cIlxyXG5pbXBvcnQge0NpcmNsZX0gZnJvbSBcIi4uL2NvbGxpc2lvbi9DaXJjbGVcIlxyXG5pbXBvcnQge1JlY3RhbmdsZX0gZnJvbSBcIi4uL2NvbGxpc2lvbi9SZWN0YW5nbGVcIlxyXG5pbXBvcnQge0NvbnZlcnNhdGlvbn0gZnJvbSBcIi4uL2NoYXQvQ29udmVyc2F0aW9uXCJcclxuaW1wb3J0IHtEaWFsb2d9IGZyb20gXCIuLi9jaGF0L0RpYWxvZ1wiXHJcbmltcG9ydCB7Q29udGludWVEaWFsb2d9IGZyb20gXCIuLi9jaGF0L0NvbnRpbnVlRGlhbG9nXCJcclxuaW1wb3J0IHtPcHRpb25EaWFsb2d9IGZyb20gXCIuLi9jaGF0L09wdGlvbkRpYWxvZ1wiXHJcbmltcG9ydCB7UmVjZWl2ZUl0ZW1EaWFsb2d9IGZyb20gXCIuLi9jaGF0L1JlY2VpdmVJdGVtRGlhbG9nXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBMZXZlbFxyXG57XHJcbiAgICBzdGF0aWMgbG9hZExldmVsKHBhdGg6IHN0cmluZywgaXRlbXM6IGFueSk6IFByb21pc2U8YW55PlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbGV2ZWxEYXRhUHJvbWlzZSA9IEpTT05Mb2FkZXIubG9hZEpTT05GaWxlKHBhdGgpLnRoZW4oKGxldmVsRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIHRoZSB0ZXh0dXJlIGF0bGFzXHJcbiAgICAgICAgICAgICAgICBsZXQgYXRsYXMgPSBuZXcgVGV4dHVyZUF0bGFzKGxldmVsRGF0YS50ZXh0dXJlX2F0bGFzKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRleHR1cmVBdGxhc1Byb21pc2UgPSBhdGxhcy5sb2FkKCkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3I6IHRleHR1cmUgYXRsYXMgY291bGQgbm90IGJlIGxvYWRlZFwiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBhbGxQcm9taXNlcyA9IFt0ZXh0dXJlQXRsYXNQcm9taXNlXTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgdGhlIHNwcml0ZXNcclxuICAgICAgICAgICAgICAgIGxldCBzdGF0aWNTcHJpdGVzID0gbmV3IEFycmF5PFN0YXRpY1Nwcml0ZT4oKTtcclxuICAgICAgICAgICAgICAgIGxldCBpbnRlcmFjdGFibGVTcHJpdGVzID0gbmV3IEFycmF5PEludGVyYWN0YWJsZVNwcml0ZT4oKTtcclxuICAgICAgICAgICAgICAgIGxldCBucGNTcHJpdGVzID0gbmV3IEFycmF5PE5QQ1Nwcml0ZT4oKTtcclxuICAgICAgICAgICAgICAgIGZvcihjb25zdCBvYmogb2YgbGV2ZWxEYXRhLnNwcml0ZXMpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYob2JqLnR5cGUgPT0gXCJpbnRlcmFjdGFibGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW50ZXJhY3Rpb25zID0gbmV3IEFycmF5PEludGVyYWN0aW9uPigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IoY29uc3QgaW50ZXIgb2Ygb2JqLmludGVyYWN0aW9ucykgICAgLy8gY3JlYXRlIGFuIGFycmF5IG9mIGludGVyYWN0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpbnRlci50eXBlID09IFwicmVjZWl2ZV9pdGVtXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVjZWl2ZUl0ZW1zID0gbmV3IEFycmF5PEl0ZW0+KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGNvbnN0IGl0bSBvZiBpbnRlci5pdGVtc19yZWNlaXZlZCkgICAvLyBjcmVhdGUgYW4gYXJyYXkgb2YgcmVjZWl2ZSBpdGVtc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZUl0ZW1zLnB1c2goaXRlbXNbaXRtXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVyYWN0aW9ucy5wdXNoKG5ldyBSZWNlaXZlSXRlbUludGVyYWN0aW9uKGludGVyLml0ZW0gPyBpdGVtc1tpbnRlci5pdGVtXSA6IG51bGwsIGludGVyLnN1Y2Nlc3NfdGV4dCwgaW50ZXIuZmFpbF90ZXh0LCBuZXcgQXVkaW8oaW50ZXIuc3VjY2Vzc19hdWRpbyksIG5ldyBBdWRpbyhpbnRlci5mYWlsX2F1ZGlvKSwgcmVjZWl2ZUl0ZW1zKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJhY3RhYmxlU3ByaXRlcy5wdXNoKG5ldyBJbnRlcmFjdGFibGVTcHJpdGUob2JqLngsIG9iai55LCBvYmouc2NhbGUsIG9iai5vcmlnaW5faG9yaXpvbnRhbCwgb2JqLm9yaWdpbl92ZXJ0aWNhbCwgYXRsYXMsIG9iai5pbWFnZV9uYW1lLCBvYmouZXhhbWluZV90ZXh0LCBuZXcgQXVkaW8ob2JqLmV4YW1pbmVfYXVkaW8pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDaXJjbGUob2JqLngsIG9iai55LCBvYmouaW50ZXJhY3Rpb25fcmFkaXVzKSwgbmV3IFJlY3RhbmdsZShvYmoueC1vYmouY2xpY2tfem9uZV93aWR0aC8yLCBvYmoueS1vYmouY2xpY2tfem9uZV9oZWlnaHQvMiwgb2JqLmNsaWNrX3pvbmVfd2lkdGgsIG9iai5jbGlja196b25lX2hlaWdodCksIGludGVyYWN0aW9ucykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihvYmoudHlwZSA9PSBcIm5wY1wiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsb2FkIHRoZSBhbmltYXRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhdGxhcyA9IG5ldyBUZXh0dXJlQXRsYXMob2JqLmF0bGFzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFuaW1hdGlvbnM6IEFycmF5PFNwcml0ZUFuaW1hdGlvbj4gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXRsYXNMb2FkZWRQcm9taXNlID0gYXRsYXMubG9hZCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBzZXF1ZW5jZU5hbWUgaW4gb2JqLmFuaW1hdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZXEgPSBvYmouYW5pbWF0aW9uc1tzZXF1ZW5jZU5hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuaW0gPSBuZXcgU3ByaXRlQW5pbWF0aW9uKHNlcS5udW1fZnJhbWVzLCBhdGxhcywgc2VxdWVuY2VOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25zLnB1c2goYW5pbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5wYyA9IG5ldyBOUENTcHJpdGUob2JqLngsIG9iai55LCBvYmouc2NhbGUsIG9iai5vcmlnaW5faG9yaXpvbnRhbCwgb2JqLm9yaWdpbl92ZXJ0aWNhbCwgYW5pbWF0aW9ucywgb2JqLmV4YW1pbmVfdGV4dCwgbmV3IEF1ZGlvKG9iai5leGFtaW5lX2F1ZGlvKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENpcmNsZShvYmoueCwgb2JqLnksIG9iai5pbnRlcmFjdGlvbl9yYWRpdXMpLCBuZXcgUmVjdGFuZ2xlKG9iai54LW9iai5jbGlja196b25lX3dpZHRoLzIsIG9iai55LW9iai5jbGlja196b25lX2hlaWdodC8yLCBvYmouY2xpY2tfem9uZV93aWR0aCwgb2JqLmNsaWNrX3pvbmVfaGVpZ2h0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGV2ZWwuYnVpbGRDb252ZXJzYXRpb24ob2JqKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBucGMuc2V0U3RhcnRQb3Mob2JqLngsIG9iai55KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5wYy5zZXREZXB0aFNjYWxlKGxldmVsRGF0YS5kZXB0aF9zY2FsZV95KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5wY1Nwcml0ZXMucHVzaChucGMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJucGMgYXRsYXMgbG9hZGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3I6IHVuYWJsZSB0byBsb2FkIE5QQyBzcHJpdGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFByb21pc2VzLnB1c2goYXRsYXNMb2FkZWRQcm9taXNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTcHJpdGVzLnB1c2gobmV3IFN0YXRpY1Nwcml0ZShvYmoueCwgb2JqLnksIG9iai5zY2FsZSwgb2JqLm9yaWdpbl9ob3Jpem9udGFsLCBvYmoub3JpZ2luX3ZlcnRpY2FsLCBhdGxhcywgb2JqLmltYWdlX25hbWUpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIHRoZSBuYXZtZXNoXHJcbiAgICAgICAgICAgICAgICBsZXQgdHJpcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCB0cmkgb2YgbGV2ZWxEYXRhLm5hdm1lc2gpIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmlzLnB1c2gobmV3IFRyaWFuZ2xlKHRyaS54MSwgdHJpLnkxLCB0cmkueDIsIHRyaS55MiwgdHJpLngzLCB0cmkueTMpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBuYXZtZXNoID0gbmV3IE5hdk1lc2godHJpcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoYWxsUHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2NlbmUgZmlsZXMgbG9hZGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcihjb25zdCBzcHJpdGUgb2Ygc3RhdGljU3ByaXRlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGUucmVmcmVzaEltYWdlKCk7ICAvLyB0ZXh0dXJlIGF0bGFzIHByb2JhYmx5IGhhZG4ndCBsb2FkZWQgd2hlbiBzcHJpdGUgd2FzIGluaXRpYWxpc2VkIHNvIHJlZnJlc2ggaW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvcihjb25zdCBzcHJpdGUgb2YgaW50ZXJhY3RhYmxlU3ByaXRlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGUucmVmcmVzaEltYWdlKCk7ICAvLyB0ZXh0dXJlIGF0bGFzIHByb2JhYmx5IGhhZG4ndCBsb2FkZWQgd2hlbiBzcHJpdGUgd2FzIGluaXRpYWxpc2VkIHNvIHJlZnJlc2ggaW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeyd0ZXh0dXJlQXRsYXMnOiBhdGxhcywgJ3NjZW5lU2NhbGUnOiBsZXZlbERhdGEuc2NlbmVfc2NhbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAncGxheWVyU3RhcnRYJzogbGV2ZWxEYXRhLnBsYXllcl9zdGFydF94LCAncGxheWVyU3RhcnRZJzogbGV2ZWxEYXRhLnBsYXllcl9zdGFydF95LCAncGxheWVyU3RhcnRzJzogbGV2ZWxEYXRhLnBsYXllcl9zdGFydHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGVwdGhTY2FsZVknOiBsZXZlbERhdGEuZGVwdGhfc2NhbGVfeSwgJ25hdm1lc2gnOiBuYXZtZXNoLCAnc3RhdGljU3ByaXRlcyc6IHN0YXRpY1Nwcml0ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaW50ZXJhY3RhYmxlU3ByaXRlcyc6IGludGVyYWN0YWJsZVNwcml0ZXMsICducGNTcHJpdGVzJzogbnBjU3ByaXRlc30pO1xyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChudWxsKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yOiBmYWlsZWQgdG8gbG9hZCBsZXZlbFwiKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdChudWxsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYnVpbGRDb252ZXJzYXRpb24oc3ByaXRlT2JqOiBhbnkpOiBDb252ZXJzYXRpb25cclxuICAgIHtcclxuICAgICAgICBpZihzcHJpdGVPYmouY29udmVyc2F0aW9uICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaWYoc3ByaXRlT2JqLmNvbnZlcnNhdGlvbi5maXJzdF9kaWFsb2cgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb252ZXJzYXRpb24oTGV2ZWwuYnVpbGREaWFsb2coc3ByaXRlT2JqLmNvbnZlcnNhdGlvbi5maXJzdF9kaWFsb2cpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYnVpbGREaWFsb2coZGlhbG9nOiBhbnkpOiBEaWFsb2dcclxuICAgIHtcclxuICAgICAgICBpZihkaWFsb2cudHlwZSA9PSBcImNvbnRpbnVlXCIpIHtcclxuICAgICAgICAgICAgbGV0IG5leHREaWFsb2c6IERpYWxvZztcclxuICAgICAgICAgICAgaWYoZGlhbG9nLm5leHRfZGlhbG9nICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIG5leHREaWFsb2cgPSBMZXZlbC5idWlsZERpYWxvZyhkaWFsb2cubmV4dF9kaWFsb2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29udGludWVEaWFsb2coZGlhbG9nLnRleHQsIGRpYWxvZy5zcGVha2VyLCBuZXh0RGlhbG9nKTtcclxuICAgICAgICB9IGVsc2UgaWYoZGlhbG9nLnR5cGUgPT0gXCJvcHRpb25cIikge1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9ucyA9IHt9O1xyXG5cclxuICAgICAgICAgICAgLy8gY3JlYXRlIGEgZGlhbG9nIG9iamVjdCBmb3IgZWFjaCBvcHRpb25cclxuICAgICAgICAgICAgZm9yKGxldCBvcHROYW1lIGluIGRpYWxvZy5vcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zW29wdE5hbWVdID0gTGV2ZWwuYnVpbGREaWFsb2coZGlhbG9nLm9wdGlvbnNbb3B0TmFtZV0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE9wdGlvbkRpYWxvZyhkaWFsb2cudGV4dCwgZGlhbG9nLnNwZWFrZXIsIG9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHtJbnRlcmFjdGlvbn0gZnJvbSBcIi4vSW50ZXJhY3Rpb25cIlxyXG5pbXBvcnQge0l0ZW19IGZyb20gXCIuLi9pdGVtcy9JdGVtXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBSZWNlaXZlSXRlbUludGVyYWN0aW9uIGV4dGVuZHMgSW50ZXJhY3Rpb25cclxue1xyXG4gICAgLy8gaXRlbSBjYW4gYmUgbnVsbFxyXG4gICAgY29uc3RydWN0b3IoaXRlbTogSXRlbSwgcHJvdGVjdGVkIHN1Y2Nlc3NUZXh0OiBzdHJpbmcsIHByb3RlY3RlZCBmYWlsVGV4dDogc3RyaW5nLFxyXG4gICAgICAgICAgICBwcm90ZWN0ZWQgc3VjY2Vzc0F1ZGlvOiBIVE1MQXVkaW9FbGVtZW50LCBwcm90ZWN0ZWQgZmFpbEF1ZGlvOiBIVE1MQXVkaW9FbGVtZW50LCBwcm90ZWN0ZWQgaXRlbXNSZWNlaXZlZDogQXJyYXk8SXRlbT4pXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaW50ZXJhY3Qgd2l0aCB0aGUgb2JqZWN0XHJcbiAgICAvLyByZXR1cm5zIGEgbGlzdCBvZiBpdGVtcyByZWNlaXZlZCBmcm9tIHRoZSBpbnRlcmFjdGlvblxyXG4gICAgcHVibGljIGludGVyYWN0KGl0ZW06IEl0ZW0pOiB7dGV4dDogc3RyaW5nLCBhdWRpbzogSFRNTEF1ZGlvRWxlbWVudCwgaXRlbXM6IEFycmF5PEl0ZW0+fVxyXG4gICAge1xyXG4gICAgICAgIGlmKGl0ZW0gPT0gdGhpcy5pdGVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHt0ZXh0OiB0aGlzLnN1Y2Nlc3NUZXh0LCBhdWRpbzogdGhpcy5zdWNjZXNzQXVkaW8sIGl0ZW1zOiB0aGlzLml0ZW1zUmVjZWl2ZWR9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHt0ZXh0OiB0aGlzLmZhaWxUZXh0LCBhdWRpbzogdGhpcy5mYWlsQXVkaW8sIGl0ZW1zOiBudWxsfTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgbGV0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbmV4cG9ydCBsZXQgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdENhbnZhc0FuZENvbnRleHQoKVxyXG57XHJcbiAgICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uPSdkZXN0aW5hdGlvbi1vdmVyJztcclxuICAgIGN0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSB0cnVlOyAgIC8vIGVuYWJsZSBhbnRpLWFsaWFzaW5nIG9mIGltYWdlc1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBJbnB1dE1hbmFnZXJcclxue1xyXG4gICAgcHJpdmF0ZSBtb3VzZURvd25DYWxsYmFja3M6IEFycmF5PChlOiBNb3VzZUV2ZW50KSA9PiB2b2lkPiA9IEFycmF5PCgpID0+IHZvaWQ+KCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5tb3VzZURvd24pO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCBldmVudCA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpKTsgIC8vIGRpc2FibGUgcmlnaHQgY2xpY2sgY29udGV4dCBtZW51XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1vdXNlRG93biA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAvLyBub3RpZnkgYWxsIGNhbGxiYWNrc1xyXG4gICAgICAgIGZvcihjb25zdCBjYWxsYmFjayBvZiB0aGlzLm1vdXNlRG93bkNhbGxiYWNrcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkTW91c2VEb3duQ2FsbGJhY2soY2FsbGJhY2s6IChlOiBNb3VzZUV2ZW50KSA9PiB2b2lkKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubW91c2VEb3duQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7SXRlbX0gZnJvbSBcIi4vSXRlbVwiXHJcblxyXG5leHBvcnQgY2xhc3MgSW52ZW50b3J5XHJcbntcclxuICAgIHByaXZhdGUgaXRlbXMgPSBuZXcgQXJyYXk8SXRlbT4oOSk7IC8vIE1BWF9OVU1fSVRFTVMgPSA5XHJcblxyXG4gICAgcHVibGljIGFkZEl0ZW0oaXRlbTogSXRlbSk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBpZihpdGVtICE9IG51bGwpIHtcclxuICAgICAgICAgICAgLy8gYWRkIHRoZSBpdGVtIHRvIHRoZSBmaXJzdCBhdmFpbGFibGUgc2xvdFxyXG4gICAgICAgICAgICBmb3IobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLml0ZW1zLmxlbmd0aDsgaW5kZXggKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuaXRlbXNbaW5kZXhdID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW2luZGV4XSA9IGl0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVJdGVtKGl0ZW06IEl0ZW0pOiBJdGVtXHJcbiAgICB7XHJcbiAgICAgICAgZm9yKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5pdGVtcy5sZW5ndGg7IGluZGV4ICsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYodGhpcy5pdGVtc1tpbmRleF0gPT09IGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVtb3ZlZCBcIiArIGl0ZW0uZ2V0TmFtZSgpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNbaW5kZXhdID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZW1zW2luZGV4XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlSXRlbUJ5SW5kZXgoaW5kZXg6IG51bWJlcik6IEl0ZW1cclxuICAgIHtcclxuICAgICAgICBpZihpbmRleCAhPSBudWxsICYmIGluZGV4IDwgdGhpcy5pdGVtcy5sZW5ndGgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtc1tpbmRleF07XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXNbaW5kZXhdID0gbnVsbDtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb3ZlSXRlbShpdGVtOiBJdGVtLCBpbmRleDogbnVtYmVyKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmKHRoaXMuaXRlbXNbaW5kZXhdID09IG51bGwpIHsgLy8gaWYgbmV3IGl0ZW1zbG90IGlzIGZyZWVcclxuICAgICAgICAgICAgbGV0IHggPSB0aGlzLnJlbW92ZUl0ZW0oaXRlbSk7XHJcbiAgICAgICAgICAgIGlmKHggIT0gbnVsbCkgeyAvLyBjaGVjayB0aGUgcGxheWVyIGFjdHVhbGx5IGhhZCB0aGUgaXRlbVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtc1tpbmRleF0gPSBpdGVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhcigpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgZm9yKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5pdGVtcy5sZW5ndGg7IGluZGV4ICsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtc1tpbmRleF0gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SXRlbXMoKTogQXJyYXk8SXRlbT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcztcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgSXRlbVxyXG57XHJcbiAgICBwcm90ZWN0ZWQgY29tYmluYXRpb25zOiBBcnJheTx7b3RoZXI6IEl0ZW0sIG91dDogQXJyYXk8SXRlbT59PjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgbmFtZTogc3RyaW5nLCBwcm90ZWN0ZWQgZXhhbWluZVRleHQ6IHN0cmluZywgcHJvdGVjdGVkIGV4YW1pbmVBdWRpbzogSFRNTEF1ZGlvRWxlbWVudCwgcHJvdGVjdGVkIGltZ3BhdGg6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNvbWJpbmF0aW9ucyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb21iaW5lKG90aGVyOiBJdGVtKTogQXJyYXk8SXRlbT5cclxuICAgIHtcclxuICAgICAgICBmb3IoY29uc3QgY21iIG9mIHRoaXMuY29tYmluYXRpb25zKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gaWYgdGhlIGl0ZW0gaXMgY29tYmluYWJsZSwgcmV0dXJuIHRoZSBhcnJheSBvZiBpdGVtcyBjcmVhdGVkXHJcbiAgICAgICAgICAgIGlmKG90aGVyID09PSBjbWIub3RoZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjbWIub3V0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkQ29tYmluYXRpb24ob3RoZXI6IEl0ZW0sIG91dDogQXJyYXk8SXRlbT4pOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYob3RoZXIgIT0gbnVsbCAmJiBvdXQgIT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tYmluYXRpb25zLnB1c2goe290aGVyOiBvdGhlciwgb3V0OiBvdXR9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE5hbWUoKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RXhhbWluZVRleHQoKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhhbWluZVRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEV4YW1pbmVBdWRpbygpOiBIVE1MQXVkaW9FbGVtZW50XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhhbWluZUF1ZGlvO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJbWFnZVBhdGgoKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1ncGF0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIGBJdGVtKCR7dGhpcy5uYW1lfSlgO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7Y2FudmFzLCBjdHgsIGluaXRDYW52YXNBbmRDb250ZXh0fSBmcm9tIFwiLi9nbG9iXCJcclxuaW1wb3J0IHtOYXZNZXNofSBmcm9tIFwiLi9jb2xsaXNpb24vTmF2TWVzaFwiXHJcbmltcG9ydCB7VHJpYW5nbGV9IGZyb20gXCIuL2NvbGxpc2lvbi9UcmlhbmdsZVwiXHJcbmltcG9ydCB7SVNoYXBlfSBmcm9tIFwiLi9jb2xsaXNpb24vSVNoYXBlXCJcclxuaW1wb3J0IHtJbnB1dE1hbmFnZXJ9IGZyb20gXCIuL2lucHV0L0lucHV0TWFuYWdlclwiXHJcbmltcG9ydCB7SW1hZ2VMb2FkZXJ9IGZyb20gXCIuL3Jlc291cmNlcy9JbWFnZUxvYWRlclwiXHJcbmltcG9ydCB7SlNPTkxvYWRlcn0gZnJvbSBcIi4vcmVzb3VyY2VzL0pTT05Mb2FkZXJcIlxyXG5pbXBvcnQge0xldmVsfSBmcm9tIFwiLi9nYW1lL0xldmVsXCJcclxuaW1wb3J0IHtTdGF0aWNTcHJpdGV9IGZyb20gXCIuL3Nwcml0ZXMvU3RhdGljU3ByaXRlXCJcclxuaW1wb3J0IHtBbmltYXRlZFNwcml0ZX0gZnJvbSBcIi4vc3ByaXRlcy9BbmltYXRlZFNwcml0ZVwiXHJcbmltcG9ydCB7SW50ZXJhY3RhYmxlU3ByaXRlfSBmcm9tIFwiLi9zcHJpdGVzL0ludGVyYWN0YWJsZVNwcml0ZVwiXHJcbmltcG9ydCB7TmF2U3ByaXRlfSBmcm9tIFwiLi9zcHJpdGVzL05hdlNwcml0ZVwiXHJcbmltcG9ydCB7U3ByaXRlQW5pbWF0aW9ufSBmcm9tIFwiLi9zcHJpdGVzL1Nwcml0ZUFuaW1hdGlvblwiXHJcbmltcG9ydCB7VGV4dHVyZUF0bGFzfSBmcm9tIFwiLi9zcHJpdGVzL1RleHR1cmVBdGxhc1wiXHJcbmltcG9ydCB7UGxheWVyU3ByaXRlfSBmcm9tIFwiLi9zcHJpdGVzL1BsYXllclNwcml0ZVwiXHJcbmltcG9ydCB7TlBDU3ByaXRlfSBmcm9tIFwiLi9zcHJpdGVzL05QQ1Nwcml0ZVwiXHJcbmltcG9ydCB7SXRlbX0gZnJvbSBcIi4vaXRlbXMvSXRlbVwiXHJcbmltcG9ydCB7SW52ZW50b3J5fSBmcm9tIFwiLi9pdGVtcy9JbnZlbnRvcnlcIlxyXG5pbXBvcnQge0NvbnZlcnNhdGlvbn0gZnJvbSBcIi4vY2hhdC9Db252ZXJzYXRpb25cIlxyXG5pbXBvcnQge0RpYWxvZ30gZnJvbSBcIi4vY2hhdC9EaWFsb2dcIlxyXG5pbXBvcnQge0NvbnRpbnVlRGlhbG9nfSBmcm9tIFwiLi9jaGF0L0NvbnRpbnVlRGlhbG9nXCJcclxuaW1wb3J0IHtPcHRpb25EaWFsb2d9IGZyb20gXCIuL2NoYXQvT3B0aW9uRGlhbG9nXCJcclxuXHJcbmxldCBpbnB1dE1hbmFnZXIgPSBuZXcgSW5wdXRNYW5hZ2VyKCk7XHJcbmxldCBpbWc6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbmxldCBzY2VuZVNjYWxlOiBudW1iZXI7XHJcbmxldCBsZXZlbFNjYWxlOiBudW1iZXI7XHJcbmxldCBkZXB0aFNjYWxlWTogbnVtYmVyO1xyXG5sZXQgc3RhdGljU3ByaXRlcyA9IG5ldyBBcnJheTxTdGF0aWNTcHJpdGU+KCk7XHJcbmxldCBpbnRlcmFjdGFibGVTcHJpdGVzID0gbmV3IEFycmF5PEludGVyYWN0YWJsZVNwcml0ZT4oKTtcclxubGV0IG5wY1Nwcml0ZXMgPSBuZXcgQXJyYXk8TlBDU3ByaXRlPigpO1xyXG5sZXQgcGxheWVyU3ByaXRlO1xyXG5sZXQgbmF2bWVzaDtcclxuXHJcbmxldCBpdGVtcyA9IHt9OyAgICAgICAgIC8vIGRhdGFiYXNlIG9mIGl0ZW1zXHJcbmxldCBpdGVtc2xvdGJ0bnMgPSBbXTsgIC8vIGFycmF5IG9mIGl0ZW1zbG90IGh0bWwgYnV0dG9uc1xyXG5sZXQgaXRlbWJ0bnMgPSBbXTsgICAgICAvLyBhcnJheSBvZiBpdGVtIGh0bWwgYnV0dG9uc1xyXG5sZXQgaW52ZW50ID0gbmV3IEludmVudG9yeSgpOyAvLyB0aGUgcGxheWVyJ3MgaW52ZW50b3J5XHJcbmxldCBzZWxlY3RlZEl0ZW07ICAgICAgIC8vIHVzZXIgY2FuIHNlbGVjdCBhbiBpdGVtIGZyb20gaW52ZW50b3J5IGJ5IGxlZnQgY2xpY2tpbmdcclxubGV0IHNlbGVjdGVkSXRlbUJ0bjtcclxuXHJcbmxldCBmYldpZHRoO1xyXG5sZXQgZmJIZWlnaHQ7XHJcblxyXG5sZXQgbGFzdFRpbWU7XHJcblxyXG5mdW5jdGlvbiBnYW1lTG9vcCgpIC8vIFRPRE8gLSBzcGxpdCBkcmF3IGludG8gdXBkYXRlIGFuZCBkcmF3IGZ1bmN0aW9uc1xyXG57XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBmYldpZHRoLCBmYkhlaWdodCk7XHJcblxyXG4gICAgLy8gc2V0IG9yaWdpbiB0byB0aGUgY2FudmFzJ3MgY2VudHJlXHJcbiAgICBjdHguc2F2ZSgpO1xyXG4gICAgY3R4LnRyYW5zbGF0ZShmYldpZHRoLzIsIGZiSGVpZ2h0LzIpO1xyXG4gICAgY3R4LnNjYWxlKHNjZW5lU2NhbGUsIHNjZW5lU2NhbGUpO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgIGNvbnN0IGRlbHRhVGltZSA9IGN1cnJlbnRUaW1lIC0gbGFzdFRpbWU7XHJcblxyXG4gICAgLy8gZHJhdyB0aGUgc2NlbmUgc3BlY2lmaWMgc3ByaXRlc1xyXG4gICAgZm9yKGNvbnN0IHNwcml0ZSBvZiBzdGF0aWNTcHJpdGVzKVxyXG4gICAge1xyXG4gICAgICAgIHNwcml0ZS5kcmF3KGN1cnJlbnRUaW1lLCBkZWx0YVRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGRyYXcgdGhlIHNwcml0ZXMgd2hpY2ggdGhlIHBsYXllciBjYW4gaW50ZXJhY3Qgd2l0aFxyXG4gICAgZm9yKGNvbnN0IHNwcml0ZSBvZiBpbnRlcmFjdGFibGVTcHJpdGVzKVxyXG4gICAge1xyXG4gICAgICAgIHNwcml0ZS5kcmF3KGN1cnJlbnRUaW1lLCBkZWx0YVRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGRyYXcgdGhlIE5QQyBzcHJpdGVzXHJcbiAgICBmb3IoY29uc3Qgc3ByaXRlIG9mIG5wY1Nwcml0ZXMpXHJcbiAgICB7XHJcbiAgICAgICAgc3ByaXRlLmRyYXcoY3VycmVudFRpbWUsIGRlbHRhVGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZHJhdyB0aGUgcGxheWVyIHNwcml0ZVxyXG4gICAgcGxheWVyU3ByaXRlLmRyYXcoY3VycmVudFRpbWUsIGRlbHRhVGltZSk7XHJcblxyXG4gICAgLy8gREVCVUcgLSBkcmF3IHRoZSBjb2xsaXNpb24gYm94ZXNcclxuICAgIG5hdm1lc2guZHJhdygpO1xyXG5cclxuICAgIC8vIHJlc3RvcmUgY2FudmFzIHRvIG9yaWdpbmFsIHNldHRpbmdzXHJcbiAgICBjdHgucmVzdG9yZSgpO1xyXG5cclxuICAgIGxhc3RUaW1lID0gY3VycmVudFRpbWU7XHJcbn1cclxuXHJcbmlucHV0TWFuYWdlci5hZGRNb3VzZURvd25DYWxsYmFjaygoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgIGxldCB4ID0gKGV2ZW50LmxheWVyWCAtIGNhbnZhcy5vZmZzZXRMZWZ0IC0gZmJXaWR0aC8yKSAvIHNjZW5lU2NhbGU7XHJcbiAgICBsZXQgeSA9IChldmVudC5sYXllclkgLSBjYW52YXMub2Zmc2V0VG9wIC0gZmJIZWlnaHQvMikgLyBzY2VuZVNjYWxlO1xyXG4gICAgY29uc29sZS5sb2coXCJtb3VzZSBkb3duIGF0IChcIiArIHggKyBcIiwgXCIgKyB5ICsgXCIpXCIpO1xyXG5cclxuICAgIGxldCBpbnRlcmFjdGVkV2l0aFNwcml0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8vIGNoZWNrIGZvciBjbGlja3Mgb24gaW50ZXJhY3RhYmxlIChzdGF0aWMpIHNwcml0ZXNcclxuICAgIGZvcihjb25zdCBzcHJpdGUgb2YgaW50ZXJhY3RhYmxlU3ByaXRlcylcclxuICAgIHtcclxuICAgICAgICBpZihldmVudC5idXR0b24gPT09IDApIHsgIC8vIGxlZnQgbW91c2UgYnV0dG9uIHByZXNzXHJcbiAgICAgICAgICAgIGlmKHNwcml0ZS5pbkludGVyYWN0aW9uWm9uZShwbGF5ZXJTcHJpdGUueCwgcGxheWVyU3ByaXRlLnkpICYmIHNwcml0ZS5pbkNsaWNrWm9uZSh4LCB5KSkge1xyXG4gICAgICAgICAgICAgICAgLy8gaW50ZXJhY3Qgd2l0aCB0aGUgc3ByaXRlXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvYmogPSBzcHJpdGUuaW50ZXJhY3Qoc2VsZWN0ZWRJdGVtKTtcclxuICAgICAgICAgICAgICAgIGlmKG9iaiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyU3ByaXRlLm9wZW5TcGVlY2hCdWJibGUob2JqLnRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcihjb25zdCBpdG0gb2Ygb2JqLml0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludmVudC5hZGRJdGVtKGl0bSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hBbGxJdGVtc0Rpc3BsYXllZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZihvYmouYXVkaW8gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmouYXVkaW8ucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyU3ByaXRlLm9wZW5TcGVlY2hCdWJibGUoXCJUaGF0J3MgYSBydWJiaXNoIGlkZWEhXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW50ZXJhY3RlZFdpdGhTcHJpdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYoZXZlbnQuYnV0dG9uID09PSAyKSB7IC8vIHJpZ2h0IG1vdXNlIGJ1dHRvbiBwcmVzc1xyXG4gICAgICAgICAgICBpZihzcHJpdGUuaW5DbGlja1pvbmUoeCwgeSkpIHtcclxuICAgICAgICAgICAgICAgIC8vIGV4YW1pbmUgdGhlIGludGVyYWN0YWJsZSBzcHJpdGVcclxuICAgICAgICAgICAgICAgIHBsYXllclNwcml0ZS5vcGVuU3BlZWNoQnViYmxlKHNwcml0ZS5nZXRFeGFtaW5lVGV4dCgpKTtcclxuICAgICAgICAgICAgICAgIGlmKHNwcml0ZS5nZXRFeGFtaW5lQXVkaW8oKSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlLmdldEV4YW1pbmVBdWRpbygpLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGludGVyYWN0ZWRXaXRoU3ByaXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNoZWNrIGZvciBjbGlja3Mgb24gTlBDIHNwcml0ZXNcclxuICAgIGZvcihjb25zdCBzcHJpdGUgb2YgbnBjU3ByaXRlcylcclxuICAgIHtcclxuICAgICAgICBpZihldmVudC5idXR0b24gPT09IDApIHsgICAgLy8gbGVmdCBtb3VzZSBidXR0b24gcHJlc3NcclxuICAgICAgICAgICAgaWYoc3ByaXRlLmluSW50ZXJhY3Rpb25ab25lKHBsYXllclNwcml0ZS54LCBwbGF5ZXJTcHJpdGUueSkgJiYgc3ByaXRlLmluQ2xpY2tab25lKHgsIHkpKSB7XHJcbiAgICAgICAgICAgICAgICBvcGVuQ2hhdEdVSShzcHJpdGUuZ2V0Q29udmVyc2F0aW9uKCkpO1xyXG4gICAgICAgICAgICAgICAgaW50ZXJhY3RlZFdpdGhTcHJpdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmKGV2ZW50LmJ1dHRvbiA9PT0gMikgeyAvLyByaWdodCBtb3VzZSBidXR0b24gcHJlc3NcclxuICAgICAgICAgICAgaWYoc3ByaXRlLmluQ2xpY2tab25lKHgsIHkpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBleGFtaW5lIHRoZSBOUEMgc3ByaXRlXHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJTcHJpdGUub3BlblNwZWVjaEJ1YmJsZShzcHJpdGUuZ2V0RXhhbWluZVRleHQoKSk7XHJcbiAgICAgICAgICAgICAgICBpZihzcHJpdGUuZ2V0RXhhbWluZUF1ZGlvKCkgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZS5nZXRFeGFtaW5lQXVkaW8oKS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbnRlcmFjdGVkV2l0aFNwcml0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZighaW50ZXJhY3RlZFdpdGhTcHJpdGUpIHtcclxuICAgICAgICBpZihldmVudC5idXR0b24gPT09IDApICAvLyBsZWZ0IG1vdXNlIGJ1dHRvbiBwcmVzc1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHdheXBvaW50cyA9IG5hdm1lc2guZ2V0V2F5cG9pbnRzKHBsYXllclNwcml0ZS54LCBwbGF5ZXJTcHJpdGUueSwgeCwgeSk7XHJcbiAgICAgICAgICAgIHBsYXllclNwcml0ZS5zZXRXYXlwb2ludHMod2F5cG9pbnRzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gbG9hZFBsYXllclNwcml0ZSgpOiBQcm9taXNlPEFuaW1hdGVkU3ByaXRlPlxyXG57XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8QW5pbWF0ZWRTcHJpdGU+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBsZXQgYXRsYXMgPSBuZXcgVGV4dHVyZUF0bGFzKFwicmVzL2F0bGFzZXMvYW5pbWF0ZWQucG5nXCIpO1xyXG4gICAgICAgIGxldCBwbGF5ZXJTcHJpdGU7XHJcbiAgICAgICAgY29uc3QgYXRsYXNMb2FkZWRQcm9taXNlID0gYXRsYXMubG9hZCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBURVNUX0FOSU1BVElPTiA9IG5ldyBTcHJpdGVBbmltYXRpb24oMiwgYXRsYXMsIFwiYW5pbWF0ZWRcIik7XHJcbiAgICAgICAgICAgIHBsYXllclNwcml0ZSA9IG5ldyBQbGF5ZXJTcHJpdGUoMTAwLCAyMDAsIDEuMjUsIFwiY2VudHJlXCIsIFwidG9wXCIsIFtURVNUX0FOSU1BVElPTl0pO1xyXG4gICAgICAgICAgICBwbGF5ZXJTcHJpdGUuc2V0Q3VycmVudEFuaW1hdGlvbigwKTtcclxuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcjogdW5hYmxlIHRvIGxvYWQgcGxheWVyIHNwcml0ZSB0ZXh0dXJlIGF0bGFzJyk7XHJcbiAgICAgICAgICAgIHJlamVjdChudWxsKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IHNwZWVjaEJ1YmJsZUltYWdlO1xyXG4gICAgICAgIGNvbnN0IHNwZWVjaEJ1YmJsZUxvYWRlZFByb21pc2UgPSBJbWFnZUxvYWRlci5sb2FkSW1hZ2UoXCJyZXMvaW1hZ2VzL3NwZWVjaF9idWJibGUucG5nXCIpLnRoZW4oKGltZykgPT4ge1xyXG4gICAgICAgICAgICBzcGVlY2hCdWJibGVJbWFnZSA9IGltZztcclxuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3I6IHNwZWVjaCBidWJibGUgaW1hZ2UgY291bGQgbm90IGJlIGxvYWRlZFwiKTtcclxuICAgICAgICAgICAgcmVqZWN0KG51bGwpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBQcm9taXNlLmFsbChbYXRsYXNMb2FkZWRQcm9taXNlLCBzcGVlY2hCdWJibGVMb2FkZWRQcm9taXNlXSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHBsYXllclNwcml0ZS5zZXRTcGVlY2hCdWJibGVJbWFnZShzcGVlY2hCdWJibGVJbWFnZSk7XHJcbiAgICAgICAgICAgIHJlc29sdmUocGxheWVyU3ByaXRlKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBwcm9ncmFtIGVudHJ5IHBvaW50XHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PlxyXG57XHJcbiAgICBpbml0Q2FudmFzQW5kQ29udGV4dCgpO1xyXG5cclxuICAgIC8vIHNldCB0aGUgY2FudmFzIHNpemVcclxuICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogMC45NTtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjk1O1xyXG4gICAgZmJXaWR0aCA9IGNhbnZhcy53aWR0aDtcclxuICAgIGZiSGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcclxuXHJcbiAgICAvLyBsZXZlbCBzZXR1cCBkYXRhXHJcbiAgICBsZXQgcGxheWVyU3RhcnRYID0gMDtcclxuICAgIGxldCBwbGF5ZXJTdGFydFkgPSAwO1xyXG5cclxuICAgIGNvbnN0IGxvYWRQbGF5ZXJTcHJpdGVQcm9taXNlID0gbG9hZFBsYXllclNwcml0ZSgpLnRoZW4oKHNwcml0ZSkgPT4ge1xyXG4gICAgICAgIHBsYXllclNwcml0ZSA9IHNwcml0ZTtcclxuICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgbG9hZEl0ZW1zUHJvbWlzZSA9IEpTT05Mb2FkZXIubG9hZEpTT05GaWxlKFwicmVzL2l0ZW1zL2l0ZW1zLmpzb25cIikudGhlbigob2JqKSA9PiB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhvYmouaXRlbXMpXHJcbiAgICAgICAgZm9yKGNvbnN0IGlkIGluIG9iai5pdGVtcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0bSA9IG9iai5pdGVtc1tpZF07XHJcbiAgICAgICAgICAgIGl0ZW1zW2lkXSA9IG5ldyBJdGVtKGl0bS5uYW1lLCBpdG0uZXhhbWluZV90ZXh0LCBuZXcgQXVkaW8oaXRtLmV4YW1pbmVfYXVkaW8pLCBpdG0uaW1hZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IoY29uc3QgaWQgaW4gb2JqLmNvbWJpbmF0aW9ucylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbWJpbmF0aW9uID0gb2JqLmNvbWJpbmF0aW9uc1tpZF07XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0xID0gaXRlbXNbY29tYmluYXRpb24uaXRlbTFdO1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtMiA9IGl0ZW1zW2NvbWJpbmF0aW9uLml0ZW0yXTtcclxuICAgICAgICAgICAgY29uc3QgaXRlbXNPdXQgPSBbXTtcclxuICAgICAgICAgICAgZm9yKGNvbnN0IGlkT3V0IG9mIGNvbWJpbmF0aW9uLml0ZW1zX291dClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaXRlbXNPdXQucHVzaChpdGVtc1tpZE91dF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGl0ZW0xICE9IG51bGwgJiYgaXRlbTIgIT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaXRlbTEuYWRkQ29tYmluYXRpb24oaXRlbTIsIGl0ZW1zT3V0KTtcclxuICAgICAgICAgICAgICAgIGl0ZW0yLmFkZENvbWJpbmF0aW9uKGl0ZW0xLCBpdGVtc091dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbG9hZFBsYXllckludmVudG9yeShcImFja1wiKTtcclxuICAgICAgICBpbml0R1VJQ29udHJvbGxlcnMoKTtcclxuICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yOiBpdGVtcyBjb3VsZCBub3QgYmUgbG9hZGVkXCIpO1xyXG4gICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIExldmVsLmxvYWRMZXZlbChcInJlcy9sZXZlbHMvbGV2ZWwxLmpzb25cIiwgaXRlbXMpO1xyXG4gICAgfSkudGhlbigobGV2ZWxEYXRhKSA9PiB7XHJcbiAgICAgICAgaW1nID0gbGV2ZWxEYXRhLmJhY2tncm91bmRJbWc7XHJcbiAgICAgICAgc3RhdGljU3ByaXRlcyA9IGxldmVsRGF0YS5zdGF0aWNTcHJpdGVzO1xyXG4gICAgICAgIGludGVyYWN0YWJsZVNwcml0ZXMgPSBsZXZlbERhdGEuaW50ZXJhY3RhYmxlU3ByaXRlcztcclxuICAgICAgICBucGNTcHJpdGVzID0gbGV2ZWxEYXRhLm5wY1Nwcml0ZXM7XHJcbiAgICAgICAgbGV2ZWxTY2FsZSA9IGxldmVsRGF0YS5zY2VuZVNjYWxlID8gbGV2ZWxEYXRhLnNjZW5lU2NhbGUgOiAxLjA7XHJcbiAgICAgICAgc2NlbmVTY2FsZSA9IGxldmVsU2NhbGUgKiBjYW52YXMuaGVpZ2h0Lzg4MDsgIC8vIHNjYWxlIGJhc2VkIG9uIHRoZSBjYW52YXMgc2l6ZSBzbyBnYW1lIGZpdHMgb24gc2NyZWVuXHJcbiAgICAgICAgZGVwdGhTY2FsZVkgPSBsZXZlbERhdGEuZGVwdGhTY2FsZVk7XHJcblxyXG4gICAgICAgIHBsYXllclN0YXJ0WCA9IGxldmVsRGF0YS5wbGF5ZXJTdGFydFg7XHJcbiAgICAgICAgcGxheWVyU3RhcnRZID0gbGV2ZWxEYXRhLnBsYXllclN0YXJ0WTtcclxuXHJcbiAgICAgICAgbmF2bWVzaCA9IGxldmVsRGF0YS5uYXZtZXNoO1xyXG4gICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3I6IGxldmVsIGNvdWxkIG5vdCBiZSBsb2FkZWRcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBQcm9taXNlLmFsbChbbG9hZFBsYXllclNwcml0ZVByb21pc2UsIGxvYWRJdGVtc1Byb21pc2VdKS50aGVuKCgpID0+IHtcclxuICAgICAgICBwbGF5ZXJTcHJpdGUueCA9IHBsYXllclN0YXJ0WDtcclxuICAgICAgICBwbGF5ZXJTcHJpdGUueSA9IHBsYXllclN0YXJ0WTtcclxuICAgICAgICBwbGF5ZXJTcHJpdGUuc2V0U3RhcnRQb3MocGxheWVyU3RhcnRYLCBwbGF5ZXJTdGFydFkpO1xyXG4gICAgICAgIHBsYXllclNwcml0ZS5zZXREZXB0aFNjYWxlKGRlcHRoU2NhbGVZKTtcclxuICAgICAgICBsYXN0VGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgZ2FtZUxvb3AoKTtcclxuICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yOiBnYW1lIGNvdWxkIG5vdCBiZSBsb2FkZWRcIik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gb24gd2luZG93IHJlc2l6ZSBjaGFuZ2UgdGhlIHNjYWxlXHJcbndpbmRvdy5vbnJlc2l6ZSA9ICgpID0+IHtcclxuICAgIC8vIHNldCB0aGUgY2FudmFzIHNpemVcclxuICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogMC45NTtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjk1O1xyXG4gICAgZmJXaWR0aCA9IGNhbnZhcy53aWR0aDtcclxuICAgIGZiSGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcclxuICAgIHNjZW5lU2NhbGUgPSBsZXZlbFNjYWxlICogY2FudmFzLmhlaWdodC84ODA7ICAvLyBzY2FsZSBiYXNlZCBvbiB0aGUgY2FudmFzIHNpemUgc28gZ2FtZSBmaXRzIG9uIHNjcmVlblxyXG4gICAgY29uc29sZS5sb2coc2NlbmVTY2FsZSk7XHJcbn1cclxuXHJcbi8vIGxvYWQgdGhlIHBsYXllcidzIGludmVudG9yeVxyXG5mdW5jdGlvbiBsb2FkUGxheWVySW52ZW50b3J5KHBhdGg6IHN0cmluZykge1xyXG4gICAgLy8gVE9ETyAtIGxvYWQgZnJvbSBmaWxlXHJcbiAgICAvL2ludmVudC5hZGRJdGVtKGl0ZW1zW1wiMC4wLjEtMDAxXCJdKTtcclxuICAgIC8vaW52ZW50LmFkZEl0ZW0oaXRlbXNbXCIwLjAuMS0wMDJcIl0pO1xyXG4gICAgaW52ZW50LmFkZEl0ZW0oaXRlbXNbXCIwLjAuMS0wMDJcIl0pO1xyXG4gICAgLy9pbnZlbnQuYWRkSXRlbShpdGVtc1tcIjAuMC4xLTAwM1wiXSk7XHJcbn1cclxuXHJcbi8vIGNoYXQgZ3VpXHJcbmZ1bmN0aW9uIG9wZW5DaGF0R1VJKGNvbnZlcnNhdGlvbjogQ29udmVyc2F0aW9uKSB7XHJcbiAgICBpZihjb252ZXJzYXRpb24gIT0gbnVsbCkge1xyXG4gICAgICAgIGxldCBjaGF0cGFuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXRwYW5lbFwiKTtcclxuICAgICAgICBpZihjaGF0cGFuZWwgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAvLyByZW1vdmUgdGhlIGNoYXQgcGFuZWwgaWYgaXQgYWxyZWFkeSBleGlzdHNcclxuICAgICAgICAgICAgY2hhdHBhbmVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hhdHBhbmVsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNoYXRwYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY2hhdHBhbmVsLmlkID0gXCJjaGF0cGFuZWxcIjtcclxuICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShjaGF0cGFuZWwsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW52ZW50XCIpKTtcclxuXHJcbiAgICAgICAgLy8gY3JlYXRlIGEgR1VJIGZvciB0aGUgZGlhbG9nXHJcbiAgICAgICAgbGV0IGQgPSBjb252ZXJzYXRpb24uZ2V0Rmlyc3REaWFsb2coKTtcclxuICAgICAgICBjcmVhdGVEaWFsb2dHVUkoY2hhdHBhbmVsIGFzIEhUTUxEaXZFbGVtZW50LCBkKTtcclxuXHJcbiAgICAgICAgLy8gYWRkIGEgYnV0dG9uIGZvciBleGl0aW5nIHRoZSBjb252ZXJzYXRpb25cclxuICAgICAgICBsZXQgZXhpdGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgZXhpdGJ0bi5jbGFzc0xpc3QuYWRkKFwiY2hhdGJ0blwiKTtcclxuICAgICAgICBleGl0YnRuLmlubmVySFRNTCA9IFwiRXhpdCBDb252ZXJzYXRpb25cIjtcclxuICAgICAgICBjaGF0cGFuZWwuYXBwZW5kQ2hpbGQoZXhpdGJ0bik7XHJcbiAgICAgICAgZXhpdGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBleGl0IHRoZSBjb252ZXJzYXRpb25cclxuICAgICAgICAgICAgY2hhdHBhbmVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hhdHBhbmVsKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEaWFsb2dHVUkoY2hhdHBhbmVsOiBIVE1MRGl2RWxlbWVudCwgZDogRGlhbG9nKSB7XHJcbiAgICBpZihkICE9IG51bGwpIHtcclxuICAgICAgICBjaGF0cGFuZWwuaW5uZXJIVE1MID0gXCJcIjsgICAvLyBjbGVhciB0aGUgZGl2IG9mIHByZXZpb3VzIGNvbnRlbnRzXHJcbiAgICAgICAgLy8gYWRkIHRoZSBzcGVha2VyIGltYWdlIGJhc2VkIG9uIHdoZXRoZXIgcGxheWVyIG9yIG5wYyBpcyBzcGVha2luZ1xyXG4gICAgICAgIGxldCBzcGVha2VyaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBzcGVha2VyaW1nLnNyYyA9IFwicmVzL2ltYWdlcy9wbGF5ZXJfaGVhZC5wbmdcIjtcclxuICAgICAgICBzcGVha2VyaW1nLmNsYXNzTGlzdC5hZGQoZC5nZXRTcGVha2VyKCkgPT0gXCJwbGF5ZXJcIiA/IFwicGxheWVyY2hhdGhlYWRcIiA6IFwibnBjY2hhdGhlYWRcIik7XHJcbiAgICAgICAgY2hhdHBhbmVsLmFwcGVuZENoaWxkKHNwZWFrZXJpbWcpO1xyXG5cclxuICAgICAgICAvLyBhZGQgbGFiZWxzIGFuZCBidXR0b25zIGZvciB0aGlzIGRpYWxvZ1xyXG4gICAgICAgIGQuY3JlYXRlR1VJRWxlbWVudChjaGF0cGFuZWwpLnRoZW4oKG5leHREaWFsb2c6IERpYWxvZykgPT4ge1xyXG4gICAgICAgICAgICBpZihuZXh0RGlhbG9nICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIC8vIGFkdmFuY2UgdG8gbmV4dCBkaWFsb2dcclxuICAgICAgICAgICAgICAgIGNyZWF0ZURpYWxvZ0dVSShjaGF0cGFuZWwsIG5leHREaWFsb2cpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gbmV4dCBkaWFsb2cgaXMgbnVsbCwgdGhlcmVmb3JlLCBleGl0IGNvbnZlcnNhdGlvblxyXG4gICAgICAgICAgICAgICAgY2hhdHBhbmVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hhdHBhbmVsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBndWkgY29udHJvbFxyXG5mdW5jdGlvbiBpbml0R1VJQ29udHJvbGxlcnMoKSB7XHJcbiAgICAvLyBnZXQgYWxsIG9mIHRoZSBpdGVtIHNsb3QgaHRtbCBidXR0b25zXHJcbiAgICBpdGVtc2xvdGJ0bnMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zbG90MVwiKSk7XHJcbiAgICBpdGVtc2xvdGJ0bnMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zbG90MlwiKSk7XHJcbiAgICBpdGVtc2xvdGJ0bnMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zbG90M1wiKSk7XHJcbiAgICBpdGVtc2xvdGJ0bnMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zbG90NFwiKSk7XHJcbiAgICBpdGVtc2xvdGJ0bnMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zbG90NVwiKSk7XHJcbiAgICBpdGVtc2xvdGJ0bnMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zbG90NlwiKSk7XHJcbiAgICBpdGVtc2xvdGJ0bnMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zbG90N1wiKSk7XHJcbiAgICBpdGVtc2xvdGJ0bnMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zbG90OFwiKSk7XHJcbiAgICBpdGVtc2xvdGJ0bnMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zbG90OVwiKSk7XHJcblxyXG4gICAgLy8gYWRkIGEgYnV0dG9uIGZvciBlYWNoIGl0ZW0gaW4gdGhlIHBsYXllcidzIGludmVudG9yeVxyXG4gICAgZm9yKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaW52ZW50LmdldEl0ZW1zKCkubGVuZ3RoOyBpbmRleCArKykge1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBpbnZlbnQuZ2V0SXRlbXMoKVtpbmRleF07XHJcbiAgICAgICAgaWYoaXRlbSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIC8vIGFkZCBhIGJ1dHRvbiBmb3IgZWFjaCBpdGVtIGluIHRoZSBwbGF5ZXIncyBpbnZlbnRvcnlcclxuICAgICAgICAgICAgYWRkTmV3SXRlbUJ1dHRvbihpbmRleCwgaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvcihsZXQgaW5kZXggPSAwOyBpbmRleCA8IGl0ZW1zbG90YnRucy5sZW5ndGg7IGluZGV4ICsrKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zbG90YnRuID0gaXRlbXNsb3RidG5zW2luZGV4XTtcclxuICAgICAgICBpdGVtc2xvdGJ0bi5vbmNsaWNrID0gKGV2dDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBvbkl0ZW1TbG90Q2xpY2soaXRlbXNsb3RidG4sIGluZGV4LCBldnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkTmV3SXRlbUJ1dHRvbihpdGVtc2xvdEluZGV4OiBudW1iZXIsIGl0ZW06IEl0ZW0pXHJcbntcclxuICAgIC8vIGFkZCBhIGJ1dHRvbiBmb3IgdGhlIGl0ZW1cclxuICAgIGxldCBpdGVtYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGl0ZW1idG4uY2xhc3NMaXN0LmFkZChcIml0ZW1cIik7XHJcbiAgICBpdGVtYnRuLnN0eWxlLmNzc1RleHQgPSBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7aXRlbS5nZXRJbWFnZVBhdGgoKX0pO2A7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnZlbnRcIikuaW5zZXJ0QmVmb3JlKGl0ZW1idG4sIGl0ZW1zbG90YnRuc1tpdGVtc2xvdEluZGV4XSk7XHJcblxyXG4gICAgLy8gYWRkIGEgbW91c2UgY2xpY2sgY2FsbGJhY2sgdG8gdGhlIG5ldyBlbGVtZW50XHJcbiAgICBpdGVtYnRuLm9ubW91c2Vkb3duID0gKGV2dDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgIG9uSXRlbUNsaWNrKGl0ZW1idG4sIGl0ZW0sIGV2dCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZnJlc2hBbGxJdGVtc0Rpc3BsYXllZCgpXHJcbntcclxuICAgIC8vIGZpcnN0LCByZW1vdmUgYWxsIGl0ZW0gYnV0dG9ucyBmcm9tIHRoZSBkb21cclxuICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIml0ZW1cIik7XHJcbiAgICBmb3IobGV0IGluZGV4ID0gMDsgaW5kZXggPCBlbGVtcy5sZW5ndGg7IGluZGV4ICsrKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gZWxlbXNbaW5kZXhdO1xyXG4gICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhZGQgYSBidXR0b24gZm9yIGVhY2ggaXRlbSBpbiB0aGUgcGxheWVyJ3MgaW52ZW50b3J5XHJcbiAgICBmb3IobGV0IGluZGV4ID0gMDsgaW5kZXggPCBpbnZlbnQuZ2V0SXRlbXMoKS5sZW5ndGg7IGluZGV4ICsrKSB7XHJcbiAgICAgICAgY29uc3QgaXRlbSA9IGludmVudC5nZXRJdGVtcygpW2luZGV4XTtcclxuICAgICAgICBpZihpdGVtICE9IG51bGwpIHtcclxuICAgICAgICAgICAgLy8gYWRkIGEgYnV0dG9uIGZvciBlYWNoIGl0ZW0gaW4gdGhlIHBsYXllcidzIGludmVudG9yeVxyXG4gICAgICAgICAgICBhZGROZXdJdGVtQnV0dG9uKGluZGV4LCBpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZnJlc2hJdGVtRGlzcGxheWVkKGl0ZW1idG46IEhUTUxCdXR0b25FbGVtZW50LCBpdGVtOiBJdGVtKVxyXG57XHJcbiAgICBpZihpdGVtICE9IG51bGwpIHtcclxuICAgICAgICAvLyBjaGFuZ2UgdGhlIGltYWdlIGRpc3BsYXllZCBvbiB0aGUgaXRlbSBidXR0b25cclxuICAgICAgICBpdGVtYnRuLnN0eWxlLmNzc1RleHQgPSBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7aXRlbS5nZXRJbWFnZVBhdGgoKX0pO2A7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIHJlbW92ZSB0aGUgaXRlbSBidXR0b24gZnJvbSB0aGUgZG9tXHJcbiAgICAgICAgaXRlbWJ0bi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGl0ZW1idG4pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBvbkl0ZW1TbG90Q2xpY2soaXRlbXNsb3RidG46IEhUTUxCdXR0b25FbGVtZW50LCBpdGVtc2xvdEluZGV4OiBudW1iZXIsIGV2dDogTW91c2VFdmVudClcclxue1xyXG4gICAgLy8gbW92ZSBzZWxlY3RlZCBpdGVtIHRvIHRoaXMgc2xvdFxyXG4gICAgaWYoc2VsZWN0ZWRJdGVtICE9IG51bGwgJiYgc2VsZWN0ZWRJdGVtQnRuICE9IG51bGwpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gcmVtb3ZlIGZyb20gcHJldmlvdXMgaXRlbXNsb3QgYW5kIGFkZCB0byBuZXcgaXRlbXNsb3RcclxuICAgICAgICBzZWxlY3RlZEl0ZW1CdG4uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkaXRlbVwiKTtcclxuICAgICAgICByZWZyZXNoSXRlbURpc3BsYXllZChzZWxlY3RlZEl0ZW1CdG4sIG51bGwpO1xyXG4gICAgICAgIGFkZE5ld0l0ZW1CdXR0b24oaXRlbXNsb3RJbmRleCwgc2VsZWN0ZWRJdGVtKTtcclxuICAgICAgICBpbnZlbnQubW92ZUl0ZW0oc2VsZWN0ZWRJdGVtLCBpdGVtc2xvdEluZGV4KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhpbnZlbnQuZ2V0SXRlbXMoKSk7XHJcbiAgICAgICAgc2VsZWN0ZWRJdGVtID0gbnVsbDtcclxuICAgICAgICBzZWxlY3RlZEl0ZW1CdG4gPSBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBvbkl0ZW1DbGljayhpdGVtYnRuOiBIVE1MQnV0dG9uRWxlbWVudCwgaXRlbTogSXRlbSwgZXZ0OiBNb3VzZUV2ZW50KVxyXG57XHJcbiAgICBpZihldnQuYnV0dG9uID09PSAwKSB7ICAvLyBsZWZ0IGNsaWNrXHJcbiAgICAgICAgLy8gY29tYmluZSAyIGl0ZW1zLCAoY2FuJ3QgY29tYmluZSBpdGVtIHdpdGggaXRzZWxmKVxyXG4gICAgICAgIGlmKHNlbGVjdGVkSXRlbSAhPSBudWxsICYmIHNlbGVjdGVkSXRlbUJ0biAhPSBudWxsICYmIGl0ZW0gIT09IHNlbGVjdGVkSXRlbSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IG91dEl0ZW1zID0gc2VsZWN0ZWRJdGVtLmNvbWJpbmUoaXRlbSk7XHJcbiAgICAgICAgICAgIGlmKG91dEl0ZW1zICE9IG51bGwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlZnJlc2hJdGVtRGlzcGxheWVkKHNlbGVjdGVkSXRlbUJ0biwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICByZWZyZXNoSXRlbURpc3BsYXllZChpdGVtYnRuLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIGludmVudC5yZW1vdmVJdGVtKHNlbGVjdGVkSXRlbSk7XHJcbiAgICAgICAgICAgICAgICBpbnZlbnQucmVtb3ZlSXRlbShpdGVtKTtcclxuICAgICAgICAgICAgICAgIGZvcihjb25zdCBvdXRJdGVtIG9mIG91dEl0ZW1zKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGludmVudC5hZGRJdGVtKG91dEl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbUJ0biA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbnZlbnQuZ2V0SXRlbXMoKSk7XHJcbiAgICAgICAgICAgICAgICByZWZyZXNoQWxsSXRlbXNEaXNwbGF5ZWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRpdGVtXCIpO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbUJ0biA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc2VsZWN0IGFuIGl0ZW1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihpdGVtID09PSBzZWxlY3RlZEl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRpdGVtXCIpO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbUJ0biA9IG51bGw7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW0gPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtQnRuID0gaXRlbWJ0bjtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbUJ0bi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRpdGVtXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmKGV2dC5idXR0b24gPT09IDIpIHsgICAvLyByaWdodCBjbGlja1xyXG4gICAgICAgIHBsYXllclNwcml0ZS5vcGVuU3BlZWNoQnViYmxlKGl0ZW0uZ2V0RXhhbWluZVRleHQoKSk7XHJcbiAgICAgICAgaWYoaXRlbS5nZXRFeGFtaW5lQXVkaW8oKSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uZ2V0RXhhbWluZUF1ZGlvKCkucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvL2RlY2xhcmUgUHJvbWlzZSBhbnk7XHJcblxyXG5leHBvcnQgY2xhc3MgSW1hZ2VMb2FkZXJcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBsb2FkSW1hZ2UocGF0aDogc3RyaW5nKTogUHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50PlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICBpbWcuc3JjID0gcGF0aDtcclxuICAgICAgICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoaW1nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbWcub25lcnJvciA9IChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBKU09OTG9hZGVyXHJcbntcclxuICAgIHN0YXRpYyBsb2FkSlNPTkZpbGUocGF0aDogc3RyaW5nKTogUHJvbWlzZTxhbnk+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZih4aHIucmVhZHlTdGF0ZSA9PT0gWE1MSHR0cFJlcXVlc3QuRE9ORSAmJiB4aHIuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvYmogPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUob2JqKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih4aHIucmVhZHlTdGF0ZSA9PT0gWE1MSHR0cFJlcXVlc3QuRE9ORSAmJiB4aHIuc3RhdHVzICE9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh4aHIuc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh4aHIuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHBhdGgpO1xyXG4gICAgICAgICAgICB4aHIub3BlbihcIkdFVFwiLCBwYXRoLCB0cnVlKTtcclxuICAgICAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge1Nwcml0ZX0gZnJvbSBcIi4vU3ByaXRlXCJcclxuaW1wb3J0IHtTcHJpdGVBbmltYXRpb259IGZyb20gXCIuL1Nwcml0ZUFuaW1hdGlvblwiXHJcblxyXG5leHBvcnQgY2xhc3MgQW5pbWF0ZWRTcHJpdGUgZXh0ZW5kcyBTcHJpdGVcclxue1xyXG4gICAgcHJvdGVjdGVkIHNwcml0ZUFuaW1hdGlvbnM6IEFycmF5PFNwcml0ZUFuaW1hdGlvbj4gPSBbXTtcclxuICAgIHByb3RlY3RlZCBjdXJyZW50QW5pbWF0aW9uID0gLTE7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBzY2FsZTogbnVtYmVyLCBvcmlnaW5Ib3Jpem9udGFsOiBzdHJpbmcsIG9yaWdpblZlcnRpY2FsOiBzdHJpbmcsIGFuaW1zOiBBcnJheTxTcHJpdGVBbmltYXRpb24+KSB7XHJcbiAgICAgICAgc3VwZXIoeCwgeSwgc2NhbGUsIG9yaWdpbkhvcml6b250YWwsIG9yaWdpblZlcnRpY2FsKTtcclxuICAgICAgICBpZihhbmltcyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlQW5pbWF0aW9ucyA9IGFuaW1zO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdyhjdXJyZW50VGltZTogbnVtYmVyLCBkZWx0YVRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmKHRoaXMuY3VycmVudEFuaW1hdGlvbiA+PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFuaW0gPSB0aGlzLnNwcml0ZUFuaW1hdGlvbnNbdGhpcy5jdXJyZW50QW5pbWF0aW9uXTtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoT3JpZ2luKGFuaW0uZ2V0Q3VycmVudEZyYW1lKCkudywgYW5pbS5nZXRDdXJyZW50RnJhbWUoKS5oKTtcclxuICAgICAgICAgICAgYW5pbS5kcmF3KGN1cnJlbnRUaW1lLCB0aGlzLm9yaWdpblgsIHRoaXMub3JpZ2luWSwgdGhpcy5zY2FsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRDdXJyZW50QW5pbWF0aW9uID0gKG5ld0FuaW1hdGlvbkluZGV4OiBudW1iZXIpOiB2b2lkID0+IHtcclxuICAgICAgICBpZihuZXdBbmltYXRpb25JbmRleCA8IHRoaXMuc3ByaXRlQW5pbWF0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uID0gbmV3QW5pbWF0aW9uSW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRTcHJpdGVBbmltYXRpb24gPSAoYW5pbSk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGlmKGFuaW0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZUFuaW1hdGlvbnMucHVzaChhbmltKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFNwcml0ZUFuaW1hdGlvbnMgPSAoYW5pbXM6IEFycmF5PFNwcml0ZUFuaW1hdGlvbj4pOiB2b2lkID0+IHtcclxuICAgICAgICBpZihhbmltcyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlQW5pbWF0aW9ucyA9IGFuaW1zO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24gPSAtMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFBvcyh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge2N0eH0gZnJvbSBcIi4uL2dsb2IudHNcIlxyXG5pbXBvcnQge1Nwcml0ZUFuaW1hdGlvbn0gZnJvbSBcIi4vU3ByaXRlQW5pbWF0aW9uXCJcclxuaW1wb3J0IHtTdGF0aWNTcHJpdGV9IGZyb20gXCIuL1N0YXRpY1Nwcml0ZVwiXHJcbmltcG9ydCB7SW50ZXJhY3Rpb259IGZyb20gXCIuLi9nYW1lL0ludGVyYWN0aW9uXCJcclxuaW1wb3J0IHtUZXh0dXJlQXRsYXN9IGZyb20gXCIuL1RleHR1cmVBdGxhc1wiXHJcbmltcG9ydCB7SXRlbX0gZnJvbSBcIi4uL2l0ZW1zL0l0ZW1cIlxyXG5pbXBvcnQge0NpcmNsZX0gZnJvbSBcIi4uL2NvbGxpc2lvbi9DaXJjbGVcIlxyXG5pbXBvcnQge1JlY3RhbmdsZX0gZnJvbSBcIi4uL2NvbGxpc2lvbi9SZWN0YW5nbGVcIlxyXG5cclxuZXhwb3J0IGNsYXNzIEludGVyYWN0YWJsZVNwcml0ZSBleHRlbmRzIFN0YXRpY1Nwcml0ZVxyXG57XHJcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgc2NhbGU6IG51bWJlciwgb3JpZ2luSG9yaXpvbnRhbDogc3RyaW5nLCBvcmlnaW5WZXJ0aWNhbDogc3RyaW5nLCBhdGxhczogVGV4dHVyZUF0bGFzLCBpbWFnZU5hbWU6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgIHByb3RlY3RlZCBleGFtaW5lVGV4dDogc3RyaW5nLCBwcm90ZWN0ZWQgZXhhbWluZUF1ZGlvOiBIVE1MQXVkaW9FbGVtZW50LCBwcm90ZWN0ZWQgaW50ZXJhY3Rpb25ab25lOiBDaXJjbGUsIHByb3RlY3RlZCBjbGlja1pvbmU6IFJlY3RhbmdsZSwgcHJvdGVjdGVkIGludGVyYWN0aW9uczogQXJyYXk8SW50ZXJhY3Rpb24+KVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKHgsIHksIHNjYWxlLCBvcmlnaW5Ib3Jpem9udGFsLCBvcmlnaW5WZXJ0aWNhbCwgYXRsYXMsIGltYWdlTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcoY3VycmVudFRpbWU6IG51bWJlciwgZGVsdGFUaW1lOiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIuZHJhdyhjdXJyZW50VGltZSwgZGVsdGFUaW1lKTtcclxuXHJcbiAgICAgICAgLy8gREVCVUcgLSBkcmF3IHRoZSBjaXJjbGUgYW5kIHJlY3RhbmdsZVxyXG4gICAgICAgIHRoaXMuY2xpY2tab25lLmRyYXcoKTtcclxuICAgICAgICB0aGlzLmludGVyYWN0aW9uWm9uZS5kcmF3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluSW50ZXJhY3Rpb25ab25lKHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmludGVyYWN0aW9uWm9uZS5jb250YWlucyh4LCB5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5DbGlja1pvbmUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpY2tab25lLmNvbnRhaW5zKHgsIHkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGludGVyYWN0IHdpdGggdGhlIHNwcml0ZVxyXG4gICAgLy8gaXRlbSBjYW4gYmUgbnVsbFxyXG4gICAgcHVibGljIGludGVyYWN0KGl0ZW06IEl0ZW0pOiB7dGV4dDogc3RyaW5nLCBhdWRpbzogSFRNTEF1ZGlvRWxlbWVudCwgaXRlbXM6IEFycmF5PEl0ZW0+fVxyXG4gICAge1xyXG4gICAgICAgIGZvcihjb25zdCBpbnRlciBvZiB0aGlzLmludGVyYWN0aW9ucylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIGlmIHRoZSBpdGVtcyBtYXRjaCwgdGhlbiBpbnRlcmFjdCB3aXRoIHRoZSBvYmplY3RcclxuICAgICAgICAgICAgaWYoaW50ZXIuZ2V0SXRlbSgpID09IGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGxldCBvYmogPSBpbnRlci5pbnRlcmFjdChpdGVtKTtcclxuICAgICAgICAgICAgICAgIGlmKG9iaiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBpbnRlcmFjdGlvbiBpZiBpdCBoYXMgYmVlbiBmdWxmaWxsZWRcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmludGVyYWN0aW9ucy5zcGxpY2UodGhpcy5pbnRlcmFjdGlvbnMuaW5kZXhPZihpbnRlciksIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEV4YW1pbmVUZXh0KCk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmV4YW1pbmVUZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRFeGFtaW5lQXVkaW8oKTogSFRNTEF1ZGlvRWxlbWVudFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmV4YW1pbmVBdWRpbztcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge2N0eH0gZnJvbSBcIi4uL2dsb2IudHNcIlxyXG5pbXBvcnQge05hdlNwcml0ZX0gZnJvbSBcIi4vTmF2U3ByaXRlXCJcclxuaW1wb3J0IHtQb2ludH0gZnJvbSBcIi4uL2NvbGxpc2lvbi9Qb2ludFwiXHJcbmltcG9ydCB7QW5pbWF0ZWRTcHJpdGV9IGZyb20gXCIuL0FuaW1hdGVkU3ByaXRlXCJcclxuaW1wb3J0IHtTcHJpdGVBbmltYXRpb259IGZyb20gXCIuL1Nwcml0ZUFuaW1hdGlvblwiXHJcbmltcG9ydCB7Q29udmVyc2F0aW9ufSBmcm9tIFwiLi4vY2hhdC9Db252ZXJzYXRpb25cIlxyXG5pbXBvcnQge0NpcmNsZX0gZnJvbSBcIi4uL2NvbGxpc2lvbi9DaXJjbGVcIlxyXG5pbXBvcnQge1JlY3RhbmdsZX0gZnJvbSBcIi4uL2NvbGxpc2lvbi9SZWN0YW5nbGVcIlxyXG5cclxuZXhwb3J0IGNsYXNzIE5QQ1Nwcml0ZSBleHRlbmRzIE5hdlNwcml0ZVxyXG57XHJcbiAgICBwcml2YXRlIHNwZWVjaEJ1YmJsZU9wZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgc3BlZWNoQnViYmxlU2hvd25BdDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBzcGVlY2hCdWJibGVUZXh0OiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHRleHRXaWR0aDogbnVtYmVyOyAgLy8gd2lkdGggb2YgdGhlIHRleHQgaW4gcGl4ZWxzXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IEJBU0VfRk9OVF9TSVpFID0gNzU7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBzY2FsZTogbnVtYmVyLCBvcmlnaW5Ib3Jpem9udGFsOiBzdHJpbmcsIG9yaWdpblZlcnRpY2FsOiBzdHJpbmcsIGFuaW1zOiBBcnJheTxTcHJpdGVBbmltYXRpb24+LFxyXG4gICAgICAgICAgICAgICAgcHJvdGVjdGVkIGV4YW1pbmVUZXh0OiBzdHJpbmcsIHByb3RlY3RlZCBleGFtaW5lQXVkaW86IEhUTUxBdWRpb0VsZW1lbnQsIHByb3RlY3RlZCBpbnRlcmFjdGlvblpvbmU6IENpcmNsZSwgcHJvdGVjdGVkIGNsaWNrWm9uZTogUmVjdGFuZ2xlLCBwcm90ZWN0ZWQgY29udmVyc2F0aW9uOiBDb252ZXJzYXRpb24sIG1vdmVTcGVlZDogbnVtYmVyID0gMC41KVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKHgsIHksIHNjYWxlLCBvcmlnaW5Ib3Jpem9udGFsLCBvcmlnaW5WZXJ0aWNhbCwgYW5pbXMsIG1vdmVTcGVlZCk7XHJcbiAgICAgICAgdGhpcy5zZXRDdXJyZW50QW5pbWF0aW9uKDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3KGN1cnJlbnRUaW1lOiBudW1iZXIsIGRlbHRhVGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIuZHJhdyhjdXJyZW50VGltZSwgZGVsdGFUaW1lKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5zcGVlY2hCdWJibGVPcGVuKSB7XHJcbiAgICAgICAgICAgIC8vIGRyYXcgdGhlIHNwZWVjaCBidWJibGVcclxuICAgICAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLngsIHRoaXMub3JpZ2luWSk7XHJcbiAgICAgICAgICAgIGN0eC5zY2FsZSh0aGlzLnNjYWxlLCB0aGlzLnNjYWxlKTtcclxuICAgICAgICAgICAgY3R4LnNoYWRvd0NvbG9yID0gXCIjNTU1NTU1XCI7XHJcbiAgICAgICAgICAgIGN0eC5zaGFkb3dCbHVyID0gNTtcclxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzFBRkY4MFwiOyAgIC8vIGdyZWVuOiAjMUFGRjgwLCBhbWJlcjogI0ZGQjY0MiwgYmx1ZTogIzJFQ0ZGRlxyXG4gICAgICAgICAgICBjdHguZmlsbFRleHQodGhpcy5zcGVlY2hCdWJibGVUZXh0LCAtdGhpcy50ZXh0V2lkdGgvMiwgMCk7XHJcbiAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBzcGVlY2ggYnViYmxlIGxhc3RzIDEvMiBzZWNvbmQgZm9yIGVhY2ggd29yZFxyXG4gICAgICAgICAgICBpZihjdXJyZW50VGltZSAtIHRoaXMuc3BlZWNoQnViYmxlU2hvd25BdCA+PSB0aGlzLnNwZWVjaEJ1YmJsZVRleHQuc3BsaXQoXCIgXCIpLmxlbmd0aCAqIDUwMCArIDUwMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlY2hCdWJibGVPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIERFQlVHIC0gZHJhdyB0aGUgY2lyY2xlIGFuZCByZWN0YW5nbGVcclxuICAgICAgICB0aGlzLmNsaWNrWm9uZS5kcmF3KCk7XHJcbiAgICAgICAgdGhpcy5pbnRlcmFjdGlvblpvbmUuZHJhdygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvcGVuU3BlZWNoQnViYmxlKHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgIGlmKHRleHQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVjaEJ1YmJsZU9wZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVjaEJ1YmJsZVRleHQgPSB0ZXh0O1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVjaEJ1YmJsZVNob3duQXQgPSBEYXRlLm5vdygpO1xyXG5cclxuICAgICAgICAgICAgY3R4LmZvbnQgPSBgJHt0aGlzLkJBU0VfRk9OVF9TSVpFfXB4IEJvb2ttYW5gO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRXaWR0aCA9IGN0eC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENvbnZlcnNhdGlvbigpOiBDb252ZXJzYXRpb25cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb252ZXJzYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluSW50ZXJhY3Rpb25ab25lKHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmludGVyYWN0aW9uWm9uZS5jb250YWlucyh4LCB5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5DbGlja1pvbmUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpY2tab25lLmNvbnRhaW5zKHgsIHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRFeGFtaW5lVGV4dCgpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5leGFtaW5lVGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RXhhbWluZUF1ZGlvKCk6IEhUTUxBdWRpb0VsZW1lbnRcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5leGFtaW5lQXVkaW87XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtBbmltYXRlZFNwcml0ZX0gZnJvbSBcIi4vQW5pbWF0ZWRTcHJpdGVcIlxyXG5pbXBvcnQge1Nwcml0ZUFuaW1hdGlvbn0gZnJvbSBcIi4vU3ByaXRlQW5pbWF0aW9uXCJcclxuaW1wb3J0IHtQb2ludH0gZnJvbSBcIi4uL2NvbGxpc2lvbi9Qb2ludFwiXHJcblxyXG5leHBvcnQgY2xhc3MgTmF2U3ByaXRlIGV4dGVuZHMgQW5pbWF0ZWRTcHJpdGVcclxue1xyXG4gICAgcHJpdmF0ZSB3YXlwb2ludHM6IEFycmF5PFBvaW50PjtcclxuICAgIHByaXZhdGUgbmV4dFdheXBvaW50OiBQb2ludDtcclxuICAgIHByaXZhdGUgbW92ZVNwZWVkOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBkZXB0aFNjYWxlWTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBzdGFydFg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgc3RhcnRZOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBzY2FsZTogbnVtYmVyLCBvcmlnaW5Ib3Jpem9udGFsOiBzdHJpbmcsIG9yaWdpblZlcnRpY2FsOiBzdHJpbmcsIGFuaW1zOiBBcnJheTxTcHJpdGVBbmltYXRpb24+LCBtb3ZlU3BlZWQ6IG51bWJlciA9IDAuNSkge1xyXG4gICAgICAgIHN1cGVyKHgsIHksIHNjYWxlLCBvcmlnaW5Ib3Jpem9udGFsLCBvcmlnaW5WZXJ0aWNhbCwgYW5pbXMpO1xyXG4gICAgICAgIHRoaXMubW92ZVNwZWVkID0gbW92ZVNwZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3KGN1cnJlbnRUaW1lOiBudW1iZXIsIGRlbHRhVGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgLy8gbW92ZSB0b3dhcmRzIHRoZSBuZXh0IHdheXBvaW50XHJcbiAgICAgICAgaWYodGhpcy5uZXh0V2F5cG9pbnQgIT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuKE1hdGguYWJzKHRoaXMubmV4dFdheXBvaW50LnkgLSB0aGlzLnkpIC8gTWF0aC5hYnModGhpcy5uZXh0V2F5cG9pbnQueCAtIHRoaXMueCkpO1xyXG4gICAgICAgICAgICBjb25zdCBtb3ZlU3BlZWRYID0gdGhpcy5tb3ZlU3BlZWQgKiBkZWx0YVRpbWUgKiBNYXRoLmNvcyhhbmdsZSkgKiB0aGlzLnNjYWxlO1xyXG4gICAgICAgICAgICBjb25zdCBtb3ZlU3BlZWRZID0gdGhpcy5tb3ZlU3BlZWQgKiBkZWx0YVRpbWUgKiBNYXRoLnNpbihhbmdsZSkgKiB0aGlzLnNjYWxlO1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgdGhlIHNwcml0ZSBoYXMgcmVhY2hlZCB0aGUgd2F5cG9pbnQgKG9yIHRoZXJlYWJvdXRzKSB0aGVuIGdldCB0aGUgbmV4dCB3YXlwb2ludFxyXG4gICAgICAgICAgICBpZih0aGlzLnggPj0gdGhpcy5uZXh0V2F5cG9pbnQueCAtIDUgJiYgdGhpcy54IDw9IHRoaXMubmV4dFdheXBvaW50LnggKyA1ICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLnkgPj0gdGhpcy5uZXh0V2F5cG9pbnQueSAtIDUgJiYgdGhpcy55IDw9IHRoaXMubmV4dFdheXBvaW50LnkgKyA1KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiYXJyaXZlZFwiLCB0aGlzLngsIHRoaXMueSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnggPSB0aGlzLm5leHRXYXlwb2ludC54O1xyXG4gICAgICAgICAgICAgICAgdGhpcy55ID0gdGhpcy5uZXh0V2F5cG9pbnQueTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMud2F5cG9pbnRzICE9IG51bGwgJiYgdGhpcy53YXlwb2ludHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dFdheXBvaW50ID0gdGhpcy53YXlwb2ludHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dFdheXBvaW50ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gbW92ZSB0b3dhcmRzIHRoZSBuZXh0IHdheXBvaW50XHJcbiAgICAgICAgICAgIGlmKHRoaXMubmV4dFdheXBvaW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMueCA8IHRoaXMubmV4dFdheXBvaW50LnggLSA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ICs9IG1vdmVTcGVlZFg7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGhpcy54ID4gdGhpcy5uZXh0V2F5cG9pbnQueCArIDUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnggLT0gbW92ZVNwZWVkWDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnkgPCB0aGlzLm5leHRXYXlwb2ludC55IC0gNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueSArPSBtb3ZlU3BlZWRZO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMueSA+IHRoaXMubmV4dFdheXBvaW50LnkgKyA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55IC09IG1vdmVTcGVlZFk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc2NhbGUgdGhlIHBsYXllciBiYXNlZCBvbiB0aGUgZGVwdGggb2YgdGhlIG1vdXNlIHBvc2l0aW9uXHJcbiAgICAgICAgdGhpcy5zY2FsZSA9IHRoaXMuYmFzZVNjYWxlICogdGhpcy5kZXB0aFNjYWxlWSAqKiAodGhpcy5zdGFydFkgLSB0aGlzLnkpO1xyXG5cclxuICAgICAgICBzdXBlci5kcmF3KGN1cnJlbnRUaW1lLCBkZWx0YVRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRXYXlwb2ludHMod2F5cG9pbnRzOiBBcnJheTxQb2ludD4pIHtcclxuICAgICAgICB0aGlzLndheXBvaW50cyA9IHdheXBvaW50cztcclxuICAgICAgICB0aGlzLm5leHRXYXlwb2ludCA9IG51bGw7XHJcbiAgICAgICAgaWYodGhpcy53YXlwb2ludHMgIT0gbnVsbCAmJiB0aGlzLndheXBvaW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMud2F5cG9pbnRzKTtcclxuICAgICAgICAgICAgdGhpcy5uZXh0V2F5cG9pbnQgPSB0aGlzLndheXBvaW50cy5wb3AoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJuZXh0OiBcIiArIHRoaXMubmV4dFdheXBvaW50LnggKyBcIiwgXCIgKyB0aGlzLm5leHRXYXlwb2ludC55KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0RGVwdGhTY2FsZShkZXB0aFNjYWxlWTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5kZXB0aFNjYWxlWSA9IGRlcHRoU2NhbGVZO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRTdGFydFBvcyh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc3RhcnRYID0geDtcclxuICAgICAgICB0aGlzLnN0YXJ0WSA9IHk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtjdHh9IGZyb20gXCIuLi9nbG9iLnRzXCJcclxuaW1wb3J0IHtOYXZTcHJpdGV9IGZyb20gXCIuL05hdlNwcml0ZVwiXHJcbmltcG9ydCB7UG9pbnR9IGZyb20gXCIuLi9jb2xsaXNpb24vUG9pbnRcIlxyXG5pbXBvcnQge0FuaW1hdGVkU3ByaXRlfSBmcm9tIFwiLi9BbmltYXRlZFNwcml0ZVwiXHJcbmltcG9ydCB7U3ByaXRlQW5pbWF0aW9ufSBmcm9tIFwiLi9TcHJpdGVBbmltYXRpb25cIlxyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllclNwcml0ZSBleHRlbmRzIE5hdlNwcml0ZVxyXG57XHJcbiAgICBwcml2YXRlIHNwZWVjaEJ1YmJsZUltYWdlOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBzcGVlY2hCdWJibGVPcGVuOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHNwZWVjaEJ1YmJsZVNob3duQXQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgc3BlZWNoQnViYmxlVGV4dDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSB0ZXh0V2lkdGg6IG51bWJlcjsgIC8vIHdpZHRoIG9mIHRoZSB0ZXh0IGluIHBpeGVsc1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBCQVNFX0ZPTlRfU0laRSA9IDc1O1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgc2NhbGU6IG51bWJlciwgb3JpZ2luSG9yaXpvbnRhbDogc3RyaW5nLCBvcmlnaW5WZXJ0aWNhbDogc3RyaW5nLCBhbmltczogQXJyYXk8U3ByaXRlQW5pbWF0aW9uPiwgbW92ZVNwZWVkOiBudW1iZXIgPSAwLjUpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoeCwgeSwgc2NhbGUsIG9yaWdpbkhvcml6b250YWwsIG9yaWdpblZlcnRpY2FsLCBhbmltcywgbW92ZVNwZWVkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdyhjdXJyZW50VGltZTogbnVtYmVyLCBkZWx0YVRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLmRyYXcoY3VycmVudFRpbWUsIGRlbHRhVGltZSk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuc3BlZWNoQnViYmxlT3Blbikge1xyXG4gICAgICAgICAgICAvLyBkcmF3IHRoZSBzcGVlY2ggYnViYmxlXHJcbiAgICAgICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgICAgIGN0eC50cmFuc2xhdGUodGhpcy54LCB0aGlzLm9yaWdpblkpO1xyXG4gICAgICAgICAgICAvL2N0eC5kcmF3SW1hZ2UodGhpcy5zcGVlY2hCdWJibGVJbWFnZSwgLXRoaXMuc3BlZWNoQnViYmxlSW1hZ2Uud2lkdGgvMiAqIHRoaXMuc2NhbGUsIC10aGlzLnNwZWVjaEJ1YmJsZUltYWdlLmhlaWdodC8yICogdGhpcy5zY2FsZSwgdGhpcy5zcGVlY2hCdWJibGVJbWFnZS53aWR0aCAqIHRoaXMuc2NhbGUsIHRoaXMuc3BlZWNoQnViYmxlSW1hZ2UuaGVpZ2h0ICogdGhpcy5zY2FsZSk7XHJcbiAgICAgICAgICAgIGN0eC5zY2FsZSh0aGlzLnNjYWxlLCB0aGlzLnNjYWxlKTtcclxuICAgICAgICAgICAgY3R4LnNoYWRvd0NvbG9yID0gXCIjNTU1NTU1XCI7XHJcbiAgICAgICAgICAgIGN0eC5zaGFkb3dCbHVyID0gNTtcclxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzFBRkY4MFwiOyAgIC8vIGdyZWVuOiAjMUFGRjgwLCBhbWJlcjogI0ZGQjY0MiwgYmx1ZTogIzJFQ0ZGRlxyXG4gICAgICAgICAgICBjdHguZmlsbFRleHQodGhpcy5zcGVlY2hCdWJibGVUZXh0LCAtdGhpcy50ZXh0V2lkdGgvMiwgMCk7XHJcbiAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBzcGVlY2ggYnViYmxlIGxhc3RzIDEvMiBzZWNvbmQgZm9yIGVhY2ggd29yZFxyXG4gICAgICAgICAgICBpZihjdXJyZW50VGltZSAtIHRoaXMuc3BlZWNoQnViYmxlU2hvd25BdCA+PSB0aGlzLnNwZWVjaEJ1YmJsZVRleHQuc3BsaXQoXCIgXCIpLmxlbmd0aCAqIDUwMCArIDUwMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlY2hCdWJibGVPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9wZW5TcGVlY2hCdWJibGUodGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYodGV4dCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWNoQnViYmxlT3BlbiA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWNoQnViYmxlVGV4dCA9IHRleHQ7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWNoQnViYmxlU2hvd25BdCA9IERhdGUubm93KCk7XHJcblxyXG4gICAgICAgICAgICBjdHguZm9udCA9IGAke3RoaXMuQkFTRV9GT05UX1NJWkV9cHggQm9va21hbmA7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dFdpZHRoID0gY3R4Lm1lYXN1cmVUZXh0KHRleHQpLndpZHRoO1xyXG5cclxuICAgICAgICAgICAgLy8gY3JlYXRlIGEgZGl2IGNvbnRhaW5pbmcgdGhlIHRleHQgc28gdGhlIHBpeGVsIHdpZHRoIG9mIHRleHQgY2FuIGJlIGNhbGN1bGF0ZWRcclxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTE4MjQxL2NhbGN1bGF0ZS10ZXh0LXdpZHRoLXdpdGgtamF2YXNjcmlwdFxyXG4gICAgICAgICAgICAvKmxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBkaXYuc3R5bGUuY3NzVGV4dCA9IGBwb3NpdGlvbjogYWJzb2x1dGU7IHZpc2liaWxpdHk6IGhpZGRlbjsgaGVpZ2h0OiBhdXRvOyB3aWR0aDogYXV0bzsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgZm9udC1zaXplOiAke3RoaXMuQkFTRV9GT05UX1NJWkV9YDtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoZGl2LCBudWxsKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0V2lkdGggPSBkaXYuY2xpZW50V2lkdGggKyAxOyovXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGV4dCB3aWR0aFwiLCB0aGlzLnRleHRXaWR0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRTcGVlY2hCdWJibGVJbWFnZShpbWcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zcGVlY2hCdWJibGVJbWFnZSA9IGltZztcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgYWJzdHJhY3QgY2xhc3MgU3ByaXRlXHJcbntcclxuICAgIHByb3RlY3RlZCBiYXNlU2NhbGU6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBvcmlnaW5YOiBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgb3JpZ2luWTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB4OiBudW1iZXIsIHByb3RlY3RlZCB5OiBudW1iZXIsIHByb3RlY3RlZCBzY2FsZTogbnVtYmVyLCBwcm90ZWN0ZWQgb3JpZ2luSG9yaXpvbnRhbDogc3RyaW5nLCBwcm90ZWN0ZWQgb3JpZ2luVmVydGljYWw6IHN0cmluZywgcHJvdGVjdGVkIGRlcHRoOiBudW1iZXIgPSAwKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuYmFzZVNjYWxlID0gdGhpcy5zY2FsZTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgcmVmcmVzaE9yaWdpbih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgcG9zaXRpb24gYXQgd2hpY2ggdG8gZHJhdyB0aGUgc3ByaXRlXHJcbiAgICAgICAgaWYodGhpcy5vcmlnaW5Ib3Jpem9udGFsID09IFwicmlnaHRcIikge1xyXG4gICAgICAgICAgICB0aGlzLm9yaWdpblggPSB0aGlzLnggLSB3aWR0aCAqIHRoaXMuc2NhbGU7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMub3JpZ2luSG9yaXpvbnRhbCA9PSBcImxlZnRcIikge1xyXG4gICAgICAgICAgICB0aGlzLm9yaWdpblggPSB0aGlzLng7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vcmlnaW5YID0gdGhpcy54IC0gd2lkdGgvMiAqIHRoaXMuc2NhbGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIHBvc2l0aW9uIGF0IHdoaWNoIHRvIGRyYXcgdGhlIHNwcml0ZVxyXG4gICAgICAgIGlmKHRoaXMub3JpZ2luVmVydGljYWwgPT0gXCJ0b3BcIikge1xyXG4gICAgICAgICAgICB0aGlzLm9yaWdpblkgPSB0aGlzLnkgLSBoZWlnaHQqIHRoaXMuc2NhbGU7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMub3JpZ2luVmVydGljYWwgPT0gXCJib3R0b21cIikge1xyXG4gICAgICAgICAgICB0aGlzLm9yaWdpblkgPSB0aGlzLnk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vcmlnaW5ZID0gdGhpcy55IC0gaGVpZ2h0LzIgKiB0aGlzLnNjYWxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGFic3RyYWN0IGRyYXcoY3VycmVudFRpbWU6IG51bWJlciwgZGVsdGFUaW1lOiBudW1iZXIpOiB2b2lkO1xyXG59XHJcbiIsImltcG9ydCB7Y3R4fSBmcm9tIFwiLi4vZ2xvYi50c1wiXHJcbmltcG9ydCB7VGV4dHVyZUF0bGFzfSBmcm9tICcuL1RleHR1cmVBdGxhcydcclxuaW1wb3J0IHtUZXh0dXJlQXRsYXNGcmFtZX0gZnJvbSBcIi4vVGV4dHVyZUF0bGFzRnJhbWVcIlxyXG5cclxuZXhwb3J0IGNsYXNzIFNwcml0ZUFuaW1hdGlvblxyXG57XHJcbiAgICAvLyBodHRwOi8vd3d3LnR5cGVzY3JpcHRnYW1lcy5jb20vQW5pbWF0ZWRTcHJpdGVzLmh0bWxcclxuICAgIHByb3RlY3RlZCBjdXJyZW50RnJhbWUgPSAwO1xyXG4gICAgcHJpdmF0ZSBsYXN0VGltZSA9IERhdGUubm93KCk7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgbnVtRnJhbWVzOiBudW1iZXIsIHByb3RlY3RlZCBhdGxhczogVGV4dHVyZUF0bGFzLCBwcm90ZWN0ZWQgc2VxdWVuY2VOYW1lOiBzdHJpbmcpIHt9XHJcblxyXG4gICAgcHVibGljIGRyYXcgPSAoY3VycmVudFRpbWU6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHNjYWxlOiBudW1iZXIpOiB2b2lkID0+IHtcclxuICAgICAgICBsZXQgZnJhbWUgPSB0aGlzLmdldEN1cnJlbnRGcmFtZSgpO1xyXG4gICAgICAgIGlmKGZyYW1lLmZyYW1lRHVyYXRpb24gPD0gY3VycmVudFRpbWUgLSB0aGlzLmxhc3RUaW1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RnJhbWUrKztcclxuICAgICAgICAgICAgaWYodGhpcy5jdXJyZW50RnJhbWUgPj0gdGhpcy5udW1GcmFtZXMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEZyYW1lID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxhc3RUaW1lID0gY3VycmVudFRpbWU7XHJcbiAgICAgICAgICAgIGZyYW1lID0gdGhpcy5nZXRDdXJyZW50RnJhbWUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNwcml0ZXMgYXJlIGRyYXduIGZyb20gdGhlaXIgY2VudHJlLXgsIGJvdHRvbS15LCBpLmUuIGZlZXQgcG9zaXRpb25cclxuICAgICAgICAvL2xldCB0b3BMZWZ0WCA9IHggLSBmcmFtZS53LzIgKiBzY2FsZTtcclxuICAgICAgICAvL2xldCB0b3BMZWZ0WSA9IHkgLSBmcmFtZS5oICogc2NhbGU7XHJcblxyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSh4LCB5KTtcclxuICAgICAgICBjdHgucmVjdChmcmFtZS54LCBmcmFtZS55LCBmcmFtZS53LCBmcmFtZS5oKTtcclxuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuYXRsYXMuaW1hZ2UsXHJcbiAgICAgICAgICAgIGZyYW1lLngsIGZyYW1lLnksXHJcbiAgICAgICAgICAgIGZyYW1lLncsIGZyYW1lLmgsXHJcbiAgICAgICAgICAgIGZyYW1lLm9mZnNldHgsIGZyYW1lLm9mZnNldHksXHJcbiAgICAgICAgICAgIGZyYW1lLncgKiBzY2FsZSwgZnJhbWUuaCAqIHNjYWxlKTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDdXJyZW50RnJhbWUgPSAoKTogVGV4dHVyZUF0bGFzRnJhbWUgPT4ge1xyXG4gICAgICAgIGlmKHRoaXMuY3VycmVudEZyYW1lID4gOSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmF0bGFzLmZyYW1lc1t0aGlzLnNlcXVlbmNlTmFtZSArIFwiX1wiICsgdGhpcy5jdXJyZW50RnJhbWUudG9TdHJpbmcoKV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmF0bGFzLmZyYW1lc1t0aGlzLnNlcXVlbmNlTmFtZSArIFwiX1wiICsgXCIwXCIgKyB0aGlzLmN1cnJlbnRGcmFtZS50b1N0cmluZygpXTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge2N0eH0gZnJvbSBcIi4uL2dsb2IudHNcIlxyXG5pbXBvcnQge1Nwcml0ZX0gZnJvbSBcIi4vU3ByaXRlXCJcclxuaW1wb3J0IHtUZXh0dXJlQXRsYXN9IGZyb20gXCIuL1RleHR1cmVBdGxhc1wiXHJcbmltcG9ydCB7VGV4dHVyZUF0bGFzRnJhbWV9IGZyb20gXCIuL1RleHR1cmVBdGxhc0ZyYW1lXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBTdGF0aWNTcHJpdGUgZXh0ZW5kcyBTcHJpdGVcclxue1xyXG4gICAgcHJvdGVjdGVkIGltYWdlOiBUZXh0dXJlQXRsYXNGcmFtZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgc2NhbGU6IG51bWJlciwgb3JpZ2luSG9yaXpvbnRhbDogc3RyaW5nLCBvcmlnaW5WZXJ0aWNhbDogc3RyaW5nLCBwcm90ZWN0ZWQgYXRsYXM6IFRleHR1cmVBdGxhcywgcHJvdGVjdGVkIGltYWdlTmFtZTogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKHgsIHksIHNjYWxlLCBvcmlnaW5Ib3Jpem9udGFsLCBvcmlnaW5WZXJ0aWNhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlZnJlc2hJbWFnZSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IHRoaXMuYXRsYXMuZnJhbWVzW3RoaXMuaW1hZ2VOYW1lXTsgLy8gZ2V0IHRoZSBpbWFnZSBmcm9tIHRoZSBhdGxhc1xyXG4gICAgICAgIHRoaXMucmVmcmVzaE9yaWdpbih0aGlzLmltYWdlLncsIHRoaXMuaW1hZ2UuaCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcoY3VycmVudFRpbWU6IG51bWJlciwgZGVsdGFUaW1lOiBudW1iZXIpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHgudHJhbnNsYXRlKHRoaXMub3JpZ2luWCwgdGhpcy5vcmlnaW5ZKTtcclxuICAgICAgICBjdHgucmVjdCh0aGlzLmltYWdlLngsIHRoaXMuaW1hZ2UueSwgdGhpcy5pbWFnZS53LCB0aGlzLmltYWdlLmgpO1xyXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5hdGxhcy5pbWFnZSxcclxuICAgICAgICAgICAgdGhpcy5pbWFnZS54LCB0aGlzLmltYWdlLnksXHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UudywgdGhpcy5pbWFnZS5oLFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlLm9mZnNldHgsIHRoaXMuaW1hZ2Uub2Zmc2V0eSxcclxuICAgICAgICAgICAgdGhpcy5pbWFnZS53ICogdGhpcy5zY2FsZSwgdGhpcy5pbWFnZS5oICogdGhpcy5zY2FsZSk7XHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0pTT05Mb2FkZXJ9IGZyb20gJy4uL3Jlc291cmNlcy9KU09OTG9hZGVyJ1xyXG5pbXBvcnQge0ltYWdlTG9hZGVyfSBmcm9tICcuLi9yZXNvdXJjZXMvSW1hZ2VMb2FkZXInXHJcbmltcG9ydCB7VGV4dHVyZUF0bGFzRnJhbWV9IGZyb20gJy4vVGV4dHVyZUF0bGFzRnJhbWUnXHJcblxyXG5leHBvcnQgY2xhc3MgVGV4dHVyZUF0bGFzXHJcbntcclxuICAgIC8vIGh0dHA6Ly93d3cudHlwZXNjcmlwdGdhbWVzLmNvbS9UZXh0dXJlQXRsYXMuaHRtbFxyXG4gICAgcHVibGljIGZyYW1lczogeyBbaW5kZXg6IHN0cmluZ106IFRleHR1cmVBdGxhc0ZyYW1lIH0gPSB7fTtcclxuICAgIHB1YmxpYyB0YUxvYWRDb21wbGV0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50ID0gbmV3IEltYWdlKCk7XHJcbiAgICBwdWJsaWMgYXRsYXNOYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBpbWFnZUZpbGVOYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBqc29uRmlsZU5hbWU6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYXRsYXNOYW1lOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5hdGxhc05hbWUgPSBhdGxhc05hbWU7XHJcbiAgICAgICAgdGhpcy5pbWFnZUZpbGVOYW1lID0gYXRsYXNOYW1lO1xyXG4gICAgICAgIHRoaXMuanNvbkZpbGVOYW1lID0gYXRsYXNOYW1lLnJlcGxhY2UoXCIucG5nXCIsIFwiXCIpICsgXCIuanNvblwiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkKCk6IFByb21pc2U8YW55PlxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGltZ1Byb21pc2UgPSBJbWFnZUxvYWRlci5sb2FkSW1hZ2UodGhpcy5pbWFnZUZpbGVOYW1lKS50aGVuKChpbWcpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZSA9IGltZztcclxuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcjogdW5hYmxlIHRvIGxvYWQgJyArIHRoaXMuaW1hZ2VGaWxlTmFtZSk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3QganNvblByb21pc2UgPSBKU09OTG9hZGVyLmxvYWRKU09ORmlsZSh0aGlzLmpzb25GaWxlTmFtZSkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUZyYW1lcyhkYXRhKTtcclxuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcjogdW5hYmxlIHRvIGxvYWQgJyArIHRoaXMuanNvbkZpbGVOYW1lKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtpbWdQcm9taXNlLCBqc29uUHJvbWlzZV0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmF0bGFzTmFtZSArICcgbG9hZGVkIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yOiAnICsgdGhpcy5hdGxhc05hbWUgKyAnIGZhaWxlZCB0byBsb2FkJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVGcmFtZXMoZGF0YTogYW55KVxyXG4gICAge1xyXG4gICAgICAgIGZvcihjb25zdCBuYW1lIGluIGRhdGEuZnJhbWVzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3Qgc3ByaXRlRGF0YSA9IGRhdGEuZnJhbWVzW25hbWVdO1xyXG4gICAgICAgICAgICBsZXQgZnJhbWUgPSBuZXcgVGV4dHVyZUF0bGFzRnJhbWUoc3ByaXRlRGF0YS5mcmFtZS54LCBzcHJpdGVEYXRhLmZyYW1lLnksIHNwcml0ZURhdGEuZnJhbWUudywgc3ByaXRlRGF0YS5mcmFtZS5oLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVEYXRhLnNwcml0ZVNvdXJjZVNpemUueCwgc3ByaXRlRGF0YS5zcHJpdGVTb3VyY2VTaXplLnksIHNwcml0ZURhdGEuZnJhbWVEdXJhdGlvbik7XHJcbiAgICAgICAgICAgIHRoaXMuZnJhbWVzW25hbWVdID0gZnJhbWU7XHJcbiAgICAgICAgfVxyXG4vLyAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5mcmFtZXMpKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgVGV4dHVyZUF0bGFzRnJhbWVcclxue1xyXG4gICAgLy8gaHR0cDovL3d3dy50eXBlc2NyaXB0Z2FtZXMuY29tL0FuaW1hdGVkU3ByaXRlcy5odG1sXHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcbiAgICB3OiBudW1iZXI7XHJcbiAgICBoOiBudW1iZXI7XHJcblxyXG4gICAgb2Zmc2V0eDogbnVtYmVyOyAgICAvLyBpbWFnZSB3aWxsIGJlIG9mZnNldCBieSB0aGVzZSB2YWx1ZXMgc28gZnJhbWVzIGxpbmUgdXAgaW4gYW5pbWF0aW9uXHJcbiAgICBvZmZzZXR5OiBudW1iZXI7XHJcblxyXG4gICAgZnJhbWVEdXJhdGlvbjogbnVtYmVyOyAgLy8gdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhpcyBmcmFtZSBsYXN0c1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDAsIHc6IG51bWJlciA9IDEsIGg6IG51bWJlciA9IDEsIG9mZnNldHg6IG51bWJlciA9IDAsIG9mZnNldHk6IG51bWJlciA9IDAsIGZyYW1lRHVyYXRpb246IG51bWJlciA9IDEwMClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy53ID0gdztcclxuICAgICAgICB0aGlzLmggPSBoO1xyXG4gICAgICAgIHRoaXMub2Zmc2V0eCA9IG9mZnNldHg7XHJcbiAgICAgICAgdGhpcy5vZmZzZXR5ID0gb2Zmc2V0eTtcclxuICAgICAgICB0aGlzLmZyYW1lRHVyYXRpb24gPSBmcmFtZUR1cmF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQoeDogbnVtYmVyLCB5OiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=