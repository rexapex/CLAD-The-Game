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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/editor.ts");
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

/***/ "./src/editor.ts":
/*!***********************!*\
  !*** ./src/editor.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glob_1 = __webpack_require__(/*! ./glob */ "./src/glob.ts");
const InputManager_1 = __webpack_require__(/*! ./input/InputManager */ "./src/input/InputManager.ts");
const JSONLoader_1 = __webpack_require__(/*! ./resources/JSONLoader */ "./src/resources/JSONLoader.ts");
const Level_1 = __webpack_require__(/*! ./game/Level */ "./src/game/Level.ts");
const StaticSprite_1 = __webpack_require__(/*! ./sprites/StaticSprite */ "./src/sprites/StaticSprite.ts");
const TextureAtlas_1 = __webpack_require__(/*! ./sprites/TextureAtlas */ "./src/sprites/TextureAtlas.ts");
const Item_1 = __webpack_require__(/*! ./items/Item */ "./src/items/Item.ts");
let inputManager = new InputManager_1.InputManager();
let img;
let sceneScale;
let levelScale;
let depthScaleY;
let staticSprites = new Array();
let interactableSprites = new Array();
let playerStartPositions = new Array();
let navmesh;
let editorTextureAtlas; // atlas of textures used by the editor
let items = {}; // database of items
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
    for (const sprite of playerStartPositions) {
        sprite.draw(currentTime, deltaTime);
    }
    // DEBUG - draw the collision boxes
    navmesh.draw();
    // restore canvas to original settings
    glob_1.ctx.restore();
    lastTime = currentTime;
}
inputManager.addMouseDownCallback((event) => {
    if (event.button === 0) {
        let x = (event.layerX - glob_1.canvas.offsetLeft - fbWidth / 2) / sceneScale;
        let y = (event.layerY - glob_1.canvas.offsetTop - fbHeight / 2) / sceneScale;
        console.log("mouse down at (" + x + ", " + y + ")");
    }
    else if (event.button === 2) {
    }
});
// program entry point
window.onload = () => {
    glob_1.initCanvasAndContext();
    // set the canvas size
    glob_1.canvas.width = window.innerWidth * 0.95;
    glob_1.canvas.height = window.innerHeight * 0.95;
    fbWidth = glob_1.canvas.width;
    fbHeight = glob_1.canvas.height;
    editorTextureAtlas = new TextureAtlas_1.TextureAtlas("res/editor/editor_atlas.png");
    editorTextureAtlas.load().catch(() => {
        console.log("error: editor texture atlas could not be loaded");
    }).then(() => {
        return JSONLoader_1.JSONLoader.loadJSONFile("res/items/items.json");
    }).then((obj) => {
        //console.log(obj.items)
        for (const id in obj.items) {
            const itm = obj.items[id];
            items[id] = new Item_1.Item(itm.name, itm.examine_text, itm.examine_audio, itm.image);
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
        navmesh = levelData.navmesh;
        for (const start of levelData.playerStarts) {
            let flag = new StaticSprite_1.StaticSprite(start.x, start.y, 1, "centre", "top", editorTextureAtlas, "flag");
            flag.refreshImage();
            playerStartPositions.push(flag);
        }
        // start the game editor
        lastTime = Date.now();
        gameLoop();
    }).catch(() => {
        console.log("error: level could not be loaded");
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
// gui control
function initGUIControllers() {
}


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbGxpc2lvbi9DaXJjbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbGxpc2lvbi9OYXZNZXNoLnRzIiwid2VicGFjazovLy8uL3NyYy9jb2xsaXNpb24vUG9pbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbGxpc2lvbi9SZWN0YW5nbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbGxpc2lvbi9UcmlhbmdsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWRpdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL0ludGVyYWN0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL0xldmVsLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1JlY2VpdmVJdGVtSW50ZXJhY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsb2IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0L0lucHV0TWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaXRlbXMvSXRlbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVzb3VyY2VzL0ltYWdlTG9hZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvSlNPTkxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlcy9BbmltYXRlZFNwcml0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlcy9JbnRlcmFjdGFibGVTcHJpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZXMvTlBDU3ByaXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGVzL05hdlNwcml0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlcy9TcHJpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZXMvU3ByaXRlQW5pbWF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGVzL1N0YXRpY1Nwcml0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlcy9UZXh0dXJlQXRsYXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZXMvVGV4dHVyZUF0bGFzRnJhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ25FQSx5RUFBOEI7QUFHOUI7SUFRSSxZQUFZLENBQVMsRUFBRSxDQUFTLEVBQUUsTUFBYyxFQUFFLFFBQWdCLEtBQUssRUFBRSxhQUFxQixDQUFDO1FBTnhGLE1BQUMsR0FBVyxDQUFDLENBQUM7UUFDZCxNQUFDLEdBQVcsQ0FBQyxDQUFDO1FBQ2QsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLFVBQUssR0FBVyxLQUFLLENBQUM7UUFJekIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO0lBQ2hDLENBQUM7SUFFTSxJQUFJO1FBRVAsYUFBRyxDQUFDLElB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QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDcEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNwQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDcEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUVwQixJQUFJLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztZQUMzQixJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztZQUVuQixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDVCxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDbEYsQ0FBQyxHQUFHLENBQUUsSUFBSSxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztZQUVsRixFQUFFLEVBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUN4QyxDQUFDO2dCQUNHLDhHQUE4RztnQkFDOUcsTUFBTSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDaEMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDaEMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BLLENBQUM7WUFFRCw4QkFBOEI7WUFDOUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLGVBQWU7UUFDakMsQ0FBQztRQUVELEVBQUU7UUFDTSxpQkFBWSxHQUFHLENBQUMsTUFBYSxFQUFFLE1BQWEsRUFBRSxFQUFFO1lBQ3ZELE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2xELENBQUM7UUFFTyx3QkFBbUIsR0FBRyxDQUFDLFFBQWdELEVBQUUsQ0FBUSxFQUFFLEVBQUU7WUFDekYsRUFBRSxFQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNYLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNkLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixHQUFHLEVBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRyxFQUFFLENBQUM7b0JBQ25ELE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ3BDLEVBQUUsRUFBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDdEMsTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFDakIsQ0FBQztnQkFDTCxDQUFDO1lBQ0wsQ0FBQztZQUVELE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNkLENBQUM7UUFFTyxrQkFBYSxHQUFHLENBQUMsUUFBc0IsRUFBRSxDQUFRLEVBQVUsRUFBRTtZQUNqRSxFQUFFLEVBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2QsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLEdBQUcsRUFBQyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFHLEVBQUUsQ0FBQztvQkFDbkQsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUMvQixFQUFFLEVBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3RDLE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBQ2pCLENBQUM7Z0JBQ0wsQ0FBQztZQUNMLENBQUM7WUFFRCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZCxDQUFDO1FBRU8sZ0JBQVcsR0FBRyxDQUFDLEtBQXNDLEVBQUUsSUFBOEIsRUFBVSxFQUFFO1lBQ3JHLEVBQUUsRUFBQyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDcEQsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2QsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLEdBQUcsRUFBQyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFHLEVBQUUsQ0FBQztvQkFDaEQsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN2QixFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNsRixNQUFNLENBQUMsS0FBSyxDQUFDO29CQUNqQixDQUFDO2dCQUNMLENBQUM7WUFDTCxDQUFDO1lBRUQsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2QsQ0FBQztRQTFURyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFFckIscUNBQXFDO1FBQ3JDLEdBQUcsRUFBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUQsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1RCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRTVELG1EQUFtRDtZQUNuRCxFQUFFLEVBQUMsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMvQixPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1RCxDQUFDO1lBQ0QsbURBQW1EO1lBQ25ELEVBQUUsRUFBQyxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQy9CLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVELENBQUM7WUFDRCxtREFBbUQ7WUFDbkQsRUFBRSxFQUFDLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDL0IsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUQsQ0FBQztZQUVELCtDQUErQztZQUMvQyxNQUFNLEtBQUssR0FBRyxFQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBQyxDQUFDO1lBQ3pDLE1BQU0sS0FBSyxHQUFHLEVBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFDLENBQUM7WUFDekMsTUFBTSxLQUFLLEdBQUcsRUFBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUMsQ0FBQztZQUV6QyxvREFBb0Q7WUFDcEQsRUFBRSxFQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoQyxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3hFLENBQUM7WUFFRCxFQUFFLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDeEUsQ0FBQztZQUVELEVBQUUsRUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEMsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN4RSxDQUFDO1FBQ0wsQ0FBQztRQUNELDZCQUE2QjtRQUM3QiwwQkFBMEI7UUFDMUIsK0JBQStCO0lBQ25DLENBQUM7Q0FrUUo7QUF0VUQsMEJBc1VDOzs7Ozs7Ozs7Ozs7Ozs7QUMxVUQ7SUFLSSxZQUFZLElBQVksQ0FBQyxFQUFFLElBQVksQ0FBQztRQUhqQyxNQUFDLEdBQVcsQ0FBQyxDQUFDO1FBQ2QsTUFBQyxHQUFXLENBQUMsQ0FBQztRQVFkLFdBQU0sR0FBRyxDQUFDLENBQVEsRUFBVyxFQUFFO1lBQ2xDLE1BQU0sQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDekQsQ0FBQztRQUVNLGFBQVEsR0FBRyxHQUFZLEVBQUU7WUFDNUIsTUFBTSxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDeEMsQ0FBQztRQVZHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDO0NBU0o7QUFsQkQsc0JBa0JDOzs7Ozs7Ozs7Ozs7Ozs7QUNsQkQseUVBQThCO0FBRzlCO0lBU0ksWUFBWSxDQUFTLEVBQUUsQ0FBUyxFQUFFLEtBQWEsRUFBRSxNQUFjLEVBQUUsUUFBZ0IsS0FBSyxFQUFFLGFBQXFCLENBQUM7UUFQdkcsTUFBQyxHQUFXLENBQUMsQ0FBQztRQUNkLE1BQUMsR0FBVyxDQUFDLENBQUM7UUFDZCxjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixVQUFLLEdBQVcsTUFBTSxDQUFDO1FBSTFCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztJQUNoQyxDQUFDO0lBRU0sSUFBSTtRQUVQLGFBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNYLGFBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNoQixhQUFHLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDN0IsYUFBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQy9CLGFBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xELGFBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNiLGFBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRU0sUUFBUSxDQUFDLENBQVMsRUFBRSxDQUFTO1FBRWhDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pHLENBQUM7Q0FDSjtBQWxDRCw4QkFrQ0M7Ozs7Ozs7Ozs7Ozs7OztBQ3JDRCx5RUFBOEI7QUFFOUIsK0VBQTZCO0FBRTdCO0lBUUksWUFBWSxFQUFVLEVBQUUsRUFBVSxFQUFFLEVBQVUsRUFBRSxFQUFVLEVBQUUsRUFBVSxFQUFFLEVBQVU7UUFTM0UsU0FBSSxHQUFHLEdBQVMsRUFBRTtZQUNyQixhQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDWCxhQUFHLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN4QixhQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztZQUNsQixhQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDaEIsYUFBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLGFBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QyxhQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekMsYUFBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLGFBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNiLGFBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNsQixDQUFDO1FBRUQsMkRBQTJEO1FBQ3BELGFBQVEsR0FBRyxDQUFDLENBQVEsRUFBVyxFQUFFO1lBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRixDQUFDO1FBRUQseUNBQXlDO1FBQ2xDLGFBQVEsR0FBRyxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQVcsRUFBRTtZQUNoRCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDaEssSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ2hLLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksYUFBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkcsQ0FBQztRQTlCRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksYUFBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksYUFBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksYUFBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hMLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFD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QUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztJQUN2QyxDQUFDO0lBRU0sR0FBRyxDQUFDLENBQVMsRUFBRSxDQUFTO1FBRTNCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDO0NBQ0o7QUE3QkQsOENBNkJDIiwiZmlsZSI6ImJ1aWxkL2VkaXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9lZGl0b3IudHNcIik7XG4iLCJpbXBvcnQge2N0eH0gZnJvbSBcIi4uL2dsb2IudHNcIlxyXG5pbXBvcnQge0lTaGFwZX0gZnJvbSBcIi4vSVNoYXBlXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBDaXJjbGUgaW1wbGVtZW50cyBJU2hhcGVcclxue1xyXG4gICAgcHVibGljIHg6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgeTogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyByYWRpdXM6IG51bWJlciA9IDEwO1xyXG4gICAgcHVibGljIGxpbmVXaWR0aDogbnVtYmVyID0gMjtcclxuICAgIHB1YmxpYyBjb2xvcjogc3RyaW5nID0gXCJyZWRcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgcmFkaXVzOiBudW1iZXIsIGNvbG9yOiBzdHJpbmcgPSBcInJlZFwiLCBsaW5lX3dpZHRoOiBudW1iZXIgPSAyKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5saW5lV2lkdGggPSBsaW5lX3dpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3KCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSB0aGlzLmxpbmVXaWR0aDtcclxuICAgICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb250YWlucyh4OiBudW1iZXIsIHk6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKCh5IC0gdGhpcy55KSAqKiAyICsgKHggLSB0aGlzLngpICoqIDIpIDw9IHRoaXMucmFkaXVzICoqIDI7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtUcmlhbmdsZX0gZnJvbSBcIi4vVHJpYW5nbGVcIlxyXG5pbXBvcnQge1BvaW50fSBmcm9tIFwiLi9Qb2ludFwiXHJcblxyXG4vLyBuYXZtZXNoIHBhdGhmaW5kaW5nOiBodHRwczovL21lZGl1bS5jb20vQG1zY2Fuc2lhbi9hLXdpdGgtbmF2aWdhdGlvbi1tZXNoZXMtMjQ2ZmQ5ZTcyNDI0XHJcbmV4cG9ydCBjbGFzcyBOYXZNZXNoXHJcbntcclxuICAgIC8vIHZhbGlkIHJlZ2lvbnMgb2YgdGhlIG5hdm1lc2hcclxuICAgIHByaXZhdGUgdHJpczogQXJyYXk8VHJpYW5nbGU+O1xyXG5cclxuICAgIC8vIFRPRE8gLSBuZXcgc3lzdGVtIG9mIHRyaWFuZ2xlIHJlcHJlc2VudGF0aW9uXHJcbiAgICBwcml2YXRlIHZlcnRpY2VzOiBBcnJheTxQb2ludD47XHJcbiAgICBwcml2YXRlIGVkZ2VzOiBBcnJheTx7djE6IG51bWJlciwgdjI6IG51bWJlcn0+OyAgICAgICAgIC8vIHYxIGFuZCB2MiBhcmUgaW5kaWNlcyBpbnRvIHZlcnRpY2VzIGxpc3RcclxuICAgIHByaXZhdGUgb3V0ZXJFZGdlczogQXJyYXk8e3YxOiBudW1iZXIsIHYyOiBudW1iZXJ9PjsgICAgLy8gZWRnZXMgd2hpY2ggb25seSBhcHBlYXIgaW4gMSB0cmlcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0cmlzOiBBcnJheTxUcmlhbmdsZT4pIHtcclxuICAgICAgICB0aGlzLnRyaXMgPSB0cmlzID8gdHJpcyA6IFtdO1xyXG4gICAgICAgIHRoaXMudmVydGljZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmVkZ2VzID0gW107XHJcbiAgICAgICAgdGhpcy5vdXRlckVkZ2VzID0gW107XHJcblxyXG4gICAgICAgIC8vIGluaXRpYWxpc2UgdmVydGljZXMgYW5kIGVkZ2VzIGxpc3RcclxuICAgICAgICBmb3IoY29uc3QgdHJpIG9mIHRyaXMpIHtcclxuICAgICAgICAgICAgbGV0IHAxSW5kZXggPSB0aGlzLmluZGV4T2ZWZXJ0ZXgodGhpcy52ZXJ0aWNlcywgdHJpLnBvaW50MSk7XHJcbiAgICAgICAgICAgIGxldCBwMkluZGV4ID0gdGhpcy5pbmRleE9mVmVydGV4KHRoaXMudmVydGljZXMsIHRyaS5wb2ludDIpO1xyXG4gICAgICAgICAgICBsZXQgcDNJbmRleCA9IHRoaXMuaW5kZXhPZlZlcnRleCh0aGlzLnZlcnRpY2VzLCB0cmkucG9pbnQzKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGlmIHZlcnRleCBpcyBub3QgaW4gdGhlIGxpc3QsIGFkZCBpdCB0byB0aGUgbGlzdFxyXG4gICAgICAgICAgICBpZihwMUluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHRyaS5wb2ludDEpO1xyXG4gICAgICAgICAgICAgICAgcDFJbmRleCA9IHRoaXMuaW5kZXhPZlZlcnRleCh0aGlzLnZlcnRpY2VzLCB0cmkucG9pbnQxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBpZiB2ZXJ0ZXggaXMgbm90IGluIHRoZSBsaXN0LCBhZGQgaXQgdG8gdGhlIGxpc3RcclxuICAgICAgICAgICAgaWYocDJJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmVydGljZXMucHVzaCh0cmkucG9pbnQyKTtcclxuICAgICAgICAgICAgICAgIHAySW5kZXggPSB0aGlzLmluZGV4T2ZWZXJ0ZXgodGhpcy52ZXJ0aWNlcywgdHJpLnBvaW50Mik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gaWYgdmVydGV4IGlzIG5vdCBpbiB0aGUgbGlzdCwgYWRkIGl0IHRvIHRoZSBsaXN0XHJcbiAgICAgICAgICAgIGlmKHAzSW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2godHJpLnBvaW50Myk7XHJcbiAgICAgICAgICAgICAgICBwM0luZGV4ID0gdGhpcy5pbmRleE9mVmVydGV4KHRoaXMudmVydGljZXMsIHRyaS5wb2ludDMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBhZGQgYWxsIDMgZWRnZXMgb2YgdGhlIHRyaSB0byB0aGUgZWRnZXMgbGlzdFxyXG4gICAgICAgICAgICBjb25zdCBlZGdlMSA9IHt2MTogcDFJbmRleCwgdjI6IHAySW5kZXh9O1xyXG4gICAgICAgICAgICBjb25zdCBlZGdlMiA9IHt2MTogcDJJbmRleCwgdjI6IHAzSW5kZXh9O1xyXG4gICAgICAgICAgICBjb25zdCBlZGdlMyA9IHt2MTogcDNJbmRleCwgdjI6IHAxSW5kZXh9O1xyXG5cclxuICAgICAgICAgICAgLy8gYWRkIHRoZSBlZGdlcyBpZiB0aGV5IGFyZSBub3QgYWxyZWFkeSBpbiB0aGUgbGlzdFxyXG4gICAgICAgICAgICBpZih0aGlzLmluZGV4T2ZFZGdlKHRoaXMuZWRnZXMsIGVkZ2UxKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWRnZXMucHVzaChlZGdlMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm91dGVyRWRnZXMucHVzaChlZGdlMSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm91dGVyRWRnZXMuc3BsaWNlKHRoaXMuaW5kZXhPZkVkZ2UodGhpcy5vdXRlckVkZ2VzLCBlZGdlMSksIDEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLmluZGV4T2ZFZGdlKHRoaXMuZWRnZXMsIGVkZ2UyKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWRnZXMucHVzaChlZGdlMik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm91dGVyRWRnZXMucHVzaChlZGdlMik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm91dGVyRWRnZXMuc3BsaWNlKHRoaXMuaW5kZXhPZkVkZ2UodGhpcy5vdXRlckVkZ2VzLCBlZGdlMiksIDEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLmluZGV4T2ZFZGdlKHRoaXMuZWRnZXMsIGVkZ2UzKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWRnZXMucHVzaChlZGdlMyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm91dGVyRWRnZXMucHVzaChlZGdlMyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm91dGVyRWRnZXMuc3BsaWNlKHRoaXMuaW5kZXhPZkVkZ2UodGhpcy5vdXRlckVkZ2VzLCBlZGdlMyksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy52ZXJ0aWNlcyk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmVkZ2VzKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMub3V0ZXJFZGdlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFdheXBvaW50cyA9IChjdXJyZW50WDogbnVtYmVyLCBjdXJyZW50WTogbnVtYmVyLCB0YXJnZXRYOiBudW1iZXIsIHRhcmdldFk6IG51bWJlcik6IEFycmF5PFBvaW50PiA9PiB7XHJcbiAgICAgICAgZm9yKGxldCB0cmkgb2YgdGhpcy50cmlzKSB7XHJcbiAgICAgICAgICAgIC8vIGFsbG93IGZyZWUgbW92ZW1lbnQgd2l0aGluIGEgdHJpYW5nbGVcclxuICAgICAgICAgICAgaWYodHJpLmNvbnRhaW5zKHRhcmdldFgsIHRhcmdldFkpICYmIHRyaS5jb250YWlucyhjdXJyZW50WCwgY3VycmVudFkpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW25ldyBQb2ludCh0YXJnZXRYLCB0YXJnZXRZKV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCB0cmkgb2YgdGhpcy50cmlzKSB7XHJcbiAgICAgICAgICAgIC8vIGlmIGJvdGggcG9pbnRzIGZhbGwgdW5kZXIgZGlmZmVyZW50IHRyaWFuZ2xlcywgZmluZCB0aGUgYSB3YXlwb2ludCB0byByZWFjaCB0aGUgbmV4dCB0cmlcclxuICAgICAgICAgICAgaWYodHJpLmNvbnRhaW5zKHRhcmdldFgsIHRhcmdldFkpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvL3JldHVybiBuZXcgUG9pbnQodGFyZ2V0WCwgdGFyZ2V0WSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvYmogPSB0aGlzLmZpbmRQYXRoKG5ldyBQb2ludChjdXJyZW50WCwgY3VycmVudFkpLCBuZXcgUG9pbnQodGFyZ2V0WCwgdGFyZ2V0WSkpO1xyXG4gICAgICAgICAgICAgICAgaWYob2JqICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcm91dGU6IEFycmF5PFBvaW50PiA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlLnB1c2gobmV3IFBvaW50KHRhcmdldFgsIHRhcmdldFkpKTsgICAgLy8gZ28gZnJvbSBsYXN0IHBvaW50IHRvIHRoZSBlbmQgcG9pbnRcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkUm91dGUob2JqLmNhbWVGcm9tLCBvYmouZW5kVmVydGV4LCByb3V0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWR1Y2VSb3V0ZShyb3V0ZSk7ICAgIC8vIHJlbW92ZSByZWR1bmRhbnQgbm9kZXMgZnJvbSB0aGUgcGF0aFxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJvdXRlLmxlbmd0aCA+IDApICAgICAgICAvLyBsYXN0IHdheXBvaW50IHdpbGwgYmUgc3RhcnQgLT4gZ2V0IHJpZCBvZiBpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZS5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJvdXRlOiBcIiArIHJvdXRlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm91dGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZW1vdmUgdW5lY2Vzc2FyeSB3YXlwb2ludHMgZnJvbSB0aGUgcm91dGUsIGkuZS4gaWYgdGhlaXIgaXMgYSBzdHJhaWdodCBwYXRoIGZyb20gYSB0byBjLCByZW1vdmUgYlxyXG4gICAgcHJpdmF0ZSByZWR1Y2VSb3V0ZSA9IChyb3V0ZTogQXJyYXk8UG9pbnQ+KSA9PiB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICAvLyBsb29wIHVudGlsIG5vIG1vcmUgcmVkdWN0aW9ucyBjYW4gYmUgbWFkZVxyXG4gICAgICAgIHdoaWxlKGluZGV4IDwgcm91dGUubGVuZ3RoIC0gMikge1xyXG4gICAgICAgICAgICBjb25zdCBhID0gcm91dGVbaW5kZXhdXHJcbiAgICAgICAgICAgIGNvbnN0IGMgPSByb3V0ZVtpbmRleCArIDJdXHJcblxyXG4gICAgICAgICAgICAvLyB0aGVyZSBpcyBhIHZhbGlkIHN0cmFpZ2h0IHBhdGggYmV0d2VlbiBhIGFuZCBjIGlmIHRoZSBwYXRoIGRvZXMgbm90IGludGVyc2VjdCBhbiBvdXRlciBlZGdlXHJcbiAgICAgICAgICAgIGxldCBpbnRlcnNlY3RzT3V0ZXJFZGdlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZvcihjb25zdCBvdXRlckVkZ2Ugb2YgdGhpcy5vdXRlckVkZ2VzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmRvTGluZVNlZ21lbnRzSW50ZXJzZWN0KHRoaXMudmVydGljZXNbb3V0ZXJFZGdlLnYxXSwgdGhpcy52ZXJ0aWNlc1tvdXRlckVkZ2UudjJdLCBhLCBjKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coYS50b1N0cmluZygpLCBjLnRvU3RyaW5nKCksIFwiaW50ZXJzZWN0c1wiLCB0aGlzLnZlcnRpY2VzW291dGVyRWRnZS52MV0udG9TdHJpbmcoKSwgdGhpcy52ZXJ0aWNlc1tvdXRlckVkZ2UudjJdLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJzZWN0c091dGVyRWRnZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGlmIHRoZSBwYXRoIGRvZXMgbm90IGludGVyc2VjdCBhbiBvdXRlciBlZGdlLCByZW1vdmUgd2F5cG9pbnQgYlxyXG4gICAgICAgICAgICBpZighaW50ZXJzZWN0c091dGVyRWRnZSkge1xyXG4gICAgICAgICAgICAgICAgcm91dGUuc3BsaWNlKGluZGV4KzEsIDEpO1xyXG4gICAgICAgICAgICAgICAgLy8gZG9uJ3QgbmVlZCB0byBpbmNyZW1lbnQgaW5kZXggc2luY2UgYXJyYXkgbGVuZ3RoIGhhcyBiZWVuIHJlZHVjZWRcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIG1vdmUgb250byBuZXh0IHBhaXIgb2Ygd2F5cG9pbnRzXHJcbiAgICAgICAgICAgICAgICBpbmRleCArKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJ1aWxkUm91dGUgPSAoY2FtZUZyb206IHt9LCB2ZXJ0ZXg6IFBvaW50LCByb3V0ZTogQXJyYXk8UG9pbnQ+KSA9PiB7XHJcbiAgICAgICAgcm91dGUucHVzaCh2ZXJ0ZXgpOyAvLyByb3V0ZSBpcyByZWFkIGluIHJldmVyc2Ugb3JkZXJcclxuICAgICAgICBpZihjYW1lRnJvbVt2ZXJ0ZXgudG9TdHJpbmcoKV0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmJ1aWxkUm91dGUoY2FtZUZyb20sIGNhbWVGcm9tW3ZlcnRleC50b1N0cmluZygpXS5ub2RlLCByb3V0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVzZSB0aGUgQSogYWxnb3JpdGhtIHRvIGZpbmQgYSBzaG9ydGVzdCBwYXRoIHRocm91Z2ggdGhlIG5hdm1lc2hcclxuICAgIHByaXZhdGUgZmluZFBhdGggPSAoc3RhcnQ6IFBvaW50LCBlbmQ6IFBvaW50KToge2NhbWVGcm9tOiB7fSwgZW5kVmVydGV4OiBQb2ludH0gPT4ge1xyXG4gICAgICAgIGxldCBvcGVuID0gW3tub2RlOiBzdGFydCwgcHJpb3JpdHk6IDB9XTsgICAgLy8gbG93ZXN0IHByaW9yaXR5ID0gMFxyXG4gICAgICAgIGxldCBjbG9zZWQgPSBbXTtcclxuXHJcbiAgICAgICAgLy8gZmluZCB0aGUgdHJpYW5nbGUgY29udGFpbmluZyB0aGUgc3RhcnQgcG9pbnRcclxuICAgICAgICBsZXQgc3RhcnRUcmk7XHJcbiAgICAgICAgZm9yKGNvbnN0IHRyaSBvZiB0aGlzLnRyaXMpIHtcclxuICAgICAgICAgICAgaWYodHJpLmNvbnRhaW5zKHN0YXJ0LngsIHN0YXJ0LnkpKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydFRyaSA9IHRyaTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHN0YXJ0VHJpID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBmaW5kIHRoZSB0cmlhbmdsZSBjb250YWluaW5nIHRoZSBlbmQgcG9pbnRcclxuICAgICAgICBsZXQgZW5kVHJpO1xyXG4gICAgICAgIGZvcihjb25zdCB0cmkgb2YgdGhpcy50cmlzKSB7XHJcbiAgICAgICAgICAgIGlmKHRyaS5jb250YWlucyhlbmQueCwgZW5kLnkpKSB7XHJcbiAgICAgICAgICAgICAgICBlbmRUcmkgPSB0cmk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihlbmRUcmkgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGdbaV0gaXMgdGhlIGNvc3QgdG8gZ2V0IHRvIGkgZnJvbSB0aGUgc3RhcnQgdmVydGV4XHJcbiAgICAgICAgbGV0IGcgPSB7fTtcclxuICAgICAgICBsZXQgY2FtZUZyb20gPSB7fTtcclxuICAgICAgICBnW3N0YXJ0LnRvU3RyaW5nKCldID0gMDtcclxuICAgICAgICBjYW1lRnJvbVtzdGFydC50b1N0cmluZygpXSA9IG51bGw7XHJcblxyXG4gICAgICAgIC8vIGV4ZWN1dGUgQSogYWxnb3JpdGhtXHJcbiAgICAgICAgLy8gcHNldWRvY29kZTogaHR0cDovL3RoZW9yeS5zdGFuZm9yZC5lZHUvfmFtaXRwL0dhbWVQcm9ncmFtbWluZy9JbXBsZW1lbnRhdGlvbk5vdGVzLmh0bWxcclxuICAgICAgICB3aGlsZShvcGVuLmxlbmd0aCA+IDAgJiYgIWVuZFRyaS5pc1ZlcnRleChvcGVuWzBdLm5vZGUpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBvcGVuLnNoaWZ0KCk7ICAvLyByZW1vdmUgZmlyc3QgaXRlbSBmcm9tIG9wZW4gKGl0ZW0gd2l0aCBsb3dlc3QgcHJpb3JpdHkpXHJcbiAgICAgICAgICAgIGNsb3NlZC5wdXNoKGN1cnJlbnQpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiY3VycmVudCB2ZXJ0ZXg6IFwiICsgY3VycmVudC5ub2RlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBmb3IoY29uc3QgbmVpZ2hib3VyIG9mIHRoaXMuZ2V0TmVpZ2hib3VycyhjdXJyZW50Lm5vZGUpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29zdCA9IGdbY3VycmVudC5ub2RlLnRvU3RyaW5nKCldICsgdGhpcy5nZXRFZGdlQ29zdChjdXJyZW50Lm5vZGUsIG5laWdoYm91cik7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwibmVpZ2hib3VyOiBcIiArIG5laWdoYm91ci50b1N0cmluZygpICsgXCIsIGNvc3Q6IFwiICsgY29zdCk7XHJcbiAgICAgICAgICAgICAgICAvLyBuZWlnaGJvdXIgaW4gb3BlblxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmRleE9mUHJpb3JpdHlOb2RlKG9wZW4sIG5laWdoYm91cikgIT09IC0xICYmIGNvc3QgPCBnW25laWdoYm91ci50b1N0cmluZygpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wZW4uc3BsaWNlKHRoaXMuaW5kZXhPZlByaW9yaXR5Tm9kZShvcGVuLCBuZWlnaGJvdXIpLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIG5laWdoYm91ciBpbiBjbG9zZWRcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5kZXhPZlByaW9yaXR5Tm9kZShjbG9zZWQsIG5laWdoYm91cikgIT09IC0xICYmIGNvc3QgPCBnW25laWdoYm91ci50b1N0cmluZygpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlZC5zcGxpY2UodGhpcy5pbmRleE9mUHJpb3JpdHlOb2RlKGNsb3NlZCwgbmVpZ2hib3VyKSwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBuZWlnaGJvdXIgbmVpdGhlciBpbiBvcGVuIG5vciBjbG9zZWRcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5kZXhPZlByaW9yaXR5Tm9kZShvcGVuLCBuZWlnaGJvdXIpID09PSAtMSAmJiB0aGlzLmluZGV4T2ZQcmlvcml0eU5vZGUoY2xvc2VkLCBuZWlnaGJvdXIpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdbbmVpZ2hib3VyLnRvU3RyaW5nKCldID0gY29zdDtcclxuICAgICAgICAgICAgICAgICAgICBjYW1lRnJvbVtuZWlnaGJvdXIudG9TdHJpbmcoKV0gPSBjdXJyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIG9wZW4ucHVzaCh7bm9kZTogbmVpZ2hib3VyLCBwcmlvcml0eTogY29zdH0pOyAvLyBUT0RPIC0gcHJpb3JpdHkgPSBjb3N0ICsgaChuZWlnaGJvdXIpXHJcbiAgICAgICAgICAgICAgICAgICAgb3Blbi5zb3J0KChhLCBiKSA9PiB7ICAgLy8gc29ydCBvcGVuIHF1ZXVlIGJ5IHByaW9yaXR5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhLnByaW9yaXR5IC0gYi5wcmlvcml0eTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhvcGVuLmxlbmd0aCA+IDAgPyBcImVuZDogXCIgKyBvcGVuWzBdLm5vZGUudG9TdHJpbmcoKSA6IFwibm8gcGF0aFwiKTtcclxuICAgICAgICByZXR1cm4gb3Blbi5sZW5ndGggPiAwID8ge2NhbWVGcm9tOiBjYW1lRnJvbSwgZW5kVmVydGV4OiBvcGVuWzBdLm5vZGV9IDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdyA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICBmb3IobGV0IHRyaSBvZiB0aGlzLnRyaXMpIHtcclxuICAgICAgICAgICAgdHJpLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmV0dXJucyB0aGUgY29zdCBvZiB0cmF2ZXJzaW5nIGFuIGVkZ2UgYmV0d2VlbiBwMSBhbmQgcDJcclxuICAgIHByaXZhdGUgZ2V0RWRnZUNvc3QgPSAocDE6IFBvaW50LCBwMjogUG9pbnQpOiBudW1iZXIgPT4ge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoKHAxLnggLSBwMi54KSAqKiAyICsgKHAxLnkgLSBwMi55KSAqKiAyKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZXR1cm4gYSBsaXN0IG9mIHZlcnRjaWVzIHdoaWNoIGFyZSBhZGphY2VudCB0byB0aGUgdmVydGV4IHBcclxuICAgIHByaXZhdGUgZ2V0TmVpZ2hib3VycyA9IChwOiBQb2ludCk6IEFycmF5PFBvaW50PiA9PiB7XHJcbiAgICAgICAgbGV0IG5laWdoYm91cnM6IEFycmF5PFBvaW50PiA9IFtdO1xyXG4gICAgICAgIGZvcihjb25zdCBlZGdlIG9mIHRoaXMuZWRnZXMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZih0aGlzLnZlcnRpY2VzW2VkZ2UudjFdLmVxdWFscyhwKSkge1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3Vycy5wdXNoKHRoaXMudmVydGljZXNbZWRnZS52Ml0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYodGhpcy52ZXJ0aWNlc1tlZGdlLnYyXS5lcXVhbHMocCkpIHtcclxuICAgICAgICAgICAgICAgIG5laWdoYm91cnMucHVzaCh0aGlzLnZlcnRpY2VzW2VkZ2UudjFdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYgdGhlIHZlcnRleCBpcyBub3QgYSB2ZXJ0ZXggb2YgYSB0cmlhbmdsZSwgY2hlY2sgaWYgaXQgaXMgd2l0aGluIGEgdHJpYW5nbGVcclxuICAgICAgICBpZihuZWlnaGJvdXJzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBmb3IoY29uc3QgdHJpIG9mIHRoaXMudHJpcykge1xyXG4gICAgICAgICAgICAgICAgaWYodHJpLmNvbnRhaW5zKHAueCwgcC55KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5laWdoYm91cnMucHVzaCh0cmkucG9pbnQxKTtcclxuICAgICAgICAgICAgICAgICAgICBuZWlnaGJvdXJzLnB1c2godHJpLnBvaW50Mik7XHJcbiAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3Vycy5wdXNoKHRyaS5wb2ludDMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZWlnaGJvdXJzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFuc3dlciAyIGZyb206IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU2MzE5OC9ob3ctZG8teW91LWRldGVjdC13aGVyZS10d28tbGluZS1zZWdtZW50cy1pbnRlcnNlY3RcclxuICAgIHByaXZhdGUgZG9MaW5lU2VnbWVudHNJbnRlcnNlY3QgPSAoZTF2MTogUG9pbnQsIGUxdjI6IFBvaW50LCBlMnYxOiBQb2ludCwgZTJ2MjogUG9pbnQpOiBib29sZWFuID0+IHtcclxuICAgICAgICBjb25zdCBwMF94ID0gZTF2MS54O1xyXG4gICAgICAgIGNvbnN0IHAwX3kgPSBlMXYxLnk7XHJcbiAgICAgICAgY29uc3QgcDFfeCA9IGUxdjIueDtcclxuICAgICAgICBjb25zdCBwMV95ID0gZTF2Mi55O1xyXG4gICAgICAgIGNvbnN0IHAyX3ggPSBlMnYxLng7XHJcbiAgICAgICAgY29uc3QgcDJfeSA9IGUydjEueTtcclxuICAgICAgICBjb25zdCBwM194ID0gZTJ2Mi54O1xyXG4gICAgICAgIGNvbnN0IHAzX3kgPSBlMnYyLnk7XHJcblxyXG4gICAgICAgIGxldCBzMV94LCBzMV95LCBzMl94LCBzMl95O1xyXG4gICAgICAgIHMxX3ggPSBwMV94IC0gcDBfeDtcclxuICAgICAgICBzMV95ID0gcDFfeSAtIHAwX3k7XHJcbiAgICAgICAgczJfeCA9IHAzX3ggLSBwMl94O1xyXG4gICAgICAgIHMyX3kgPSBwM195IC0gcDJfeTtcclxuXHJcbiAgICAgICAgbGV0IHMsIHQ7XHJcbiAgICAgICAgcyA9ICgtczFfeSAqIChwMF94IC0gcDJfeCkgKyBzMV94ICogKHAwX3kgLSBwMl95KSkgLyAoLXMyX3ggKiBzMV95ICsgczFfeCAqIHMyX3kpO1xyXG4gICAgICAgIHQgPSAoIHMyX3ggKiAocDBfeSAtIHAyX3kpIC0gczJfeSAqIChwMF94IC0gcDJfeCkpIC8gKC1zMl94ICogczFfeSArIHMxX3ggKiBzMl95KTtcclxuXHJcbiAgICAgICAgaWYocyA+PSAwICYmIHMgPD0gMSAmJiB0ID49IDAgJiYgdCA8PSAxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIGZhbHNlIGlmIHRoZSBpbnRlcnNlY3Rpb24gcG9pbnQgaXMgdGhlIHZlcnRleCBwb3NpdGlvbiBzaW5jZSBpdCBicmVha3MgdGhlIHJvdXRlIHJlZHVjdGlvbiBhbGdvcml0aG1cclxuICAgICAgICAgICAgY29uc3QgaV94ID0gKHAwX3ggKyAodCAqIHMxX3gpKTtcclxuICAgICAgICAgICAgY29uc3QgaV95ID0gKHAwX3kgKyAodCAqIHMxX3kpKTtcclxuICAgICAgICAgICAgcmV0dXJuICEoaV94ID09PSBlMXYxLnggJiYgaV95ID09PSBlMXYxLnkpICYmICEoaV94ID09PSBlMXYyLnggJiYgaV95ID09PSBlMXYyLnkpICYmICEoaV94ID09PSBlMnYxLnggJiYgaV95ID09PSBlMnYxLnkpICYmICEoaV94ID09PSBlMnYyLnggJiYgaV95ID09PSBlMnYyLnkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIm5vIGNvbGxpc2lvblwiKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7IC8vIG5vIGNvbGxpc2lvblxyXG4gICAgfVxyXG5cclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNyb3NzUHJvZHVjdCA9IChwb2ludDE6IFBvaW50LCBwb2ludDI6IFBvaW50KSA9PiB7XHJcbiAgICBcdHJldHVybiBwb2ludDEueCAqIHBvaW50Mi55IC0gcG9pbnQxLnkgKiBwb2ludDIueDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluZGV4T2ZQcmlvcml0eU5vZGUgPSAodmVydGljZXM6IEFycmF5PHtub2RlOiBQb2ludCwgcHJpb3JpdHk6IG51bWJlcn0+LCBwOiBQb2ludCkgPT4ge1xyXG4gICAgICAgIGlmKHAgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdmVydGljZXMubGVuZ3RoOyBpbmRleCArKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmVydGV4ID0gdmVydGljZXNbaW5kZXhdLm5vZGU7XHJcbiAgICAgICAgICAgICAgICBpZih2ZXJ0ZXgueCA9PT0gcC54ICYmIHZlcnRleC55ID09PSBwLnkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluZGV4T2ZWZXJ0ZXggPSAodmVydGljZXM6IEFycmF5PFBvaW50PiwgcDogUG9pbnQpOiBudW1iZXIgPT4ge1xyXG4gICAgICAgIGlmKHAgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdmVydGljZXMubGVuZ3RoOyBpbmRleCArKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmVydGV4ID0gdmVydGljZXNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgaWYodmVydGV4LnggPT09IHAueCAmJiB2ZXJ0ZXgueSA9PT0gcC55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbmRleE9mRWRnZSA9IChlZGdlczogQXJyYXk8e3YxOiBudW1iZXIsIHYyOiBudW1iZXJ9PiwgZWRnZToge3YxOiBudW1iZXIsIHYyOiBudW1iZXJ9KTogbnVtYmVyID0+IHtcclxuICAgICAgICBpZihlZGdlID09IG51bGwgfHwgZWRnZS52MSA9PSBudWxsIHx8IGVkZ2UudjIgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZWRnZXMubGVuZ3RoOyBpbmRleCArKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZSA9IGVkZ2VzW2luZGV4XTtcclxuICAgICAgICAgICAgICAgIGlmKChlLnYxID09PSBlZGdlLnYxICYmIGUudjIgPT09IGVkZ2UudjIpIHx8IChlLnYxID09PSBlZGdlLnYyICYmIGUudjIgPT09IGVkZ2UudjEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFBvaW50XHJcbntcclxuICAgIHB1YmxpYyB4OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHk6IG51bWJlciA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVxdWFscyA9IChwOiBQb2ludCk6IGJvb2xlYW4gPT4ge1xyXG4gICAgICAgIHJldHVybiBwICE9IG51bGwgJiYgcC54ID09PSB0aGlzLnggJiYgcC55ID09PSB0aGlzLnk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nID0gKCkgOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIHJldHVybiBgUG9pbnQoJHt0aGlzLnh9LCR7dGhpcy55fSlgO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7Y3R4fSBmcm9tIFwiLi4vZ2xvYi50c1wiXHJcbmltcG9ydCB7SVNoYXBlfSBmcm9tIFwiLi9JU2hhcGVcIlxyXG5cclxuZXhwb3J0IGNsYXNzIFJlY3RhbmdsZSBpbXBsZW1lbnRzIElTaGFwZVxyXG57XHJcbiAgICBwdWJsaWMgeDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyB5OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGxpbmVXaWR0aDogbnVtYmVyID0gNTtcclxuICAgIHB1YmxpYyB3aWR0aDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBoZWlnaHQ6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgY29sb3I6IHN0cmluZyA9IFwiYmx1ZVwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgY29sb3I6IHN0cmluZyA9IFwicmVkXCIsIGxpbmVfd2lkdGg6IG51bWJlciA9IDIpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5saW5lV2lkdGggPSBsaW5lX3dpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3KCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSB0aGlzLmxpbmVXaWR0aDtcclxuICAgICAgICBjdHgucmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb250YWlucyh4OiBudW1iZXIsIHk6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKHggPj0gdGhpcy54ICYmIHggPD0gdGhpcy54ICsgdGhpcy53aWR0aCAmJiB5ID49IHRoaXMueSAmJiB5IDw9IHRoaXMueSArIHRoaXMuaGVpZ2h0KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge2N0eH0gZnJvbSBcIi4uL2dsb2IudHNcIlxyXG5pbXBvcnQge0lTaGFwZX0gZnJvbSBcIi4vSVNoYXBlXCJcclxuaW1wb3J0IHtQb2ludH0gZnJvbSBcIi4vUG9pbnRcIlxyXG5cclxuZXhwb3J0IGNsYXNzIFRyaWFuZ2xlXHJcbntcclxuICAgIHB1YmxpYyBwb2ludDE6IFBvaW50O1xyXG4gICAgcHVibGljIHBvaW50MjogUG9pbnQ7XHJcbiAgICBwdWJsaWMgcG9pbnQzOiBQb2ludDtcclxuICAgIHByaXZhdGUgYXJlYTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBzaWduOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoeDE6IG51bWJlciwgeTE6IG51bWJlciwgeDI6IG51bWJlciwgeTI6IG51bWJlciwgeDM6IG51bWJlciwgeTM6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLnBvaW50MSA9IG5ldyBQb2ludCh4MSwgeTEpO1xyXG4gICAgICAgIHRoaXMucG9pbnQyID0gbmV3IFBvaW50KHgyLCB5Mik7XHJcbiAgICAgICAgdGhpcy5wb2ludDMgPSBuZXcgUG9pbnQoeDMsIHkzKTtcclxuICAgICAgICB0aGlzLmFyZWEgPSAxLzIgKiAoLXRoaXMucG9pbnQyLnkgKiB0aGlzLnBvaW50My54ICsgdGhpcy5wb2ludDEueSAqICgtdGhpcy5wb2ludDIueCArIHRoaXMucG9pbnQzLngpICsgdGhpcy5wb2ludDEueCAqICh0aGlzLnBvaW50Mi55IC0gdGhpcy5wb2ludDMueSkgKyB0aGlzLnBvaW50Mi54ICogdGhpcy5wb2ludDMueSk7XHJcbiAgICAgICAgdGhpcy5zaWduID0gdGhpcy5hcmVhIDwgMCA/IC0xIDogMTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdyA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmVkXCI7XHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDU7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5tb3ZlVG8odGhpcy5wb2ludDEueCwgdGhpcy5wb2ludDEueSk7XHJcbiAgICAgICAgY3R4LmxpbmVUbyh0aGlzLnBvaW50Mi54LCB0aGlzLnBvaW50Mi55KTtcclxuICAgICAgICBjdHgubGluZVRvKHRoaXMucG9pbnQzLngsIHRoaXMucG9pbnQzLnkpO1xyXG4gICAgICAgIGN0eC5saW5lVG8odGhpcy5wb2ludDEueCwgdGhpcy5wb2ludDEueSk7XHJcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmV0dXJucyB0cnVlIGlmZiB0aGUgcG9pbnQgcCBpcyBhIHZlcnRleCBvZiB0aGUgdHJpYW5nbGVcclxuICAgIHB1YmxpYyBpc1ZlcnRleCA9IChwOiBQb2ludCk6IGJvb2xlYW4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvaW50MS5lcXVhbHMocCkgfHwgdGhpcy5wb2ludDIuZXF1YWxzKHApIHx8IHRoaXMucG9pbnQzLmVxdWFscyhwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBodHRwOi8vanNmaWRkbGUubmV0L1BlcnJvQVpVTC96ZGFZOC8xL1xyXG4gICAgcHVibGljIGNvbnRhaW5zID0gKHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhbiA9PiB7XHJcbiAgICAgICAgdmFyIHMgPSAodGhpcy5wb2ludDEueSAqIHRoaXMucG9pbnQzLnggLSB0aGlzLnBvaW50MS54ICogdGhpcy5wb2ludDMueSArICh0aGlzLnBvaW50My55IC0gdGhpcy5wb2ludDEueSkgKiB4ICsgKHRoaXMucG9pbnQxLnggLSB0aGlzLnBvaW50My54KSAqIHkpICogdGhpcy5zaWduO1xyXG4gICAgICAgIHZhciB0ID0gKHRoaXMucG9pbnQxLnggKiB0aGlzLnBvaW50Mi55IC0gdGhpcy5wb2ludDEueSAqIHRoaXMucG9pbnQyLnggKyAodGhpcy5wb2ludDEueSAtIHRoaXMucG9pbnQyLnkpICogeCArICh0aGlzLnBvaW50Mi54IC0gdGhpcy5wb2ludDEueCkgKiB5KSAqIHRoaXMuc2lnbjtcclxuICAgICAgICByZXR1cm4gKHMgPiAwICYmIHQgPiAwICYmIChzICsgdCkgPCAyICogdGhpcy5hcmVhICogdGhpcy5zaWduKSB8fCAodGhpcy5pc1ZlcnRleChuZXcgUG9pbnQoeCwgeSkpKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge2NhbnZhcywgY3R4LCBpbml0Q2FudmFzQW5kQ29udGV4dH0gZnJvbSBcIi4vZ2xvYlwiXHJcbmltcG9ydCB7TmF2TWVzaH0gZnJvbSBcIi4vY29sbGlzaW9uL05hdk1lc2hcIlxyXG5pbXBvcnQge1RyaWFuZ2xlfSBmcm9tIFwiLi9jb2xsaXNpb24vVHJpYW5nbGVcIlxyXG5pbXBvcnQge0lTaGFwZX0gZnJvbSBcIi4vY29sbGlzaW9uL0lTaGFwZVwiXHJcbmltcG9ydCB7SW5wdXRNYW5hZ2VyfSBmcm9tIFwiLi9pbnB1dC9JbnB1dE1hbmFnZXJcIlxyXG5pbXBvcnQge0ltYWdlTG9hZGVyfSBmcm9tIFwiLi9yZXNvdXJjZXMvSW1hZ2VMb2FkZXJcIlxyXG5pbXBvcnQge0pTT05Mb2FkZXJ9IGZyb20gXCIuL3Jlc291cmNlcy9KU09OTG9hZGVyXCJcclxuaW1wb3J0IHtMZXZlbH0gZnJvbSBcIi4vZ2FtZS9MZXZlbFwiXHJcbmltcG9ydCB7U3RhdGljU3ByaXRlfSBmcm9tIFwiLi9zcHJpdGVzL1N0YXRpY1Nwcml0ZVwiXHJcbmltcG9ydCB7QW5pbWF0ZWRTcHJpdGV9IGZyb20gXCIuL3Nwcml0ZXMvQW5pbWF0ZWRTcHJpdGVcIlxyXG5pbXBvcnQge0ludGVyYWN0YWJsZVNwcml0ZX0gZnJvbSBcIi4vc3ByaXRlcy9JbnRlcmFjdGFibGVTcHJpdGVcIlxyXG5pbXBvcnQge05hdlNwcml0ZX0gZnJvbSBcIi4vc3ByaXRlcy9OYXZTcHJpdGVcIlxyXG5pbXBvcnQge1Nwcml0ZUFuaW1hdGlvbn0gZnJvbSBcIi4vc3ByaXRlcy9TcHJpdGVBbmltYXRpb25cIlxyXG5pbXBvcnQge1RleHR1cmVBdGxhc30gZnJvbSBcIi4vc3ByaXRlcy9UZXh0dXJlQXRsYXNcIlxyXG5pbXBvcnQge1BsYXllclNwcml0ZX0gZnJvbSBcIi4vc3ByaXRlcy9QbGF5ZXJTcHJpdGVcIlxyXG5pbXBvcnQge0l0ZW19IGZyb20gXCIuL2l0ZW1zL0l0ZW1cIlxyXG5pbXBvcnQge0ludmVudG9yeX0gZnJvbSBcIi4vaXRlbXMvSW52ZW50b3J5XCJcclxuXHJcbmxldCBpbnB1dE1hbmFnZXIgPSBuZXcgSW5wdXRNYW5hZ2VyKCk7XHJcbmxldCBpbWc6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbmxldCBzY2VuZVNjYWxlOiBudW1iZXI7XHJcbmxldCBsZXZlbFNjYWxlOiBudW1iZXI7XHJcbmxldCBkZXB0aFNjYWxlWTogbnVtYmVyO1xyXG5sZXQgc3RhdGljU3ByaXRlcyA9IG5ldyBBcnJheTxTdGF0aWNTcHJpdGU+KCk7XHJcbmxldCBpbnRlcmFjdGFibGVTcHJpdGVzID0gbmV3IEFycmF5PEludGVyYWN0YWJsZVNwcml0ZT4oKTtcclxubGV0IHBsYXllclN0YXJ0UG9zaXRpb25zID0gbmV3IEFycmF5PFN0YXRpY1Nwcml0ZT4oKTtcclxubGV0IG5hdm1lc2g7XHJcblxyXG5sZXQgZWRpdG9yVGV4dHVyZUF0bGFzOyAgLy8gYXRsYXMgb2YgdGV4dHVyZXMgdXNlZCBieSB0aGUgZWRpdG9yXHJcblxyXG5sZXQgaXRlbXMgPSB7fTsgICAgICAgICAvLyBkYXRhYmFzZSBvZiBpdGVtc1xyXG5cclxubGV0IGZiV2lkdGg7XHJcbmxldCBmYkhlaWdodDtcclxuXHJcbmxldCBsYXN0VGltZTtcclxuXHJcbmZ1bmN0aW9uIGdhbWVMb29wKCkgLy8gVE9ETyAtIHNwbGl0IGRyYXcgaW50byB1cGRhdGUgYW5kIGRyYXcgZnVuY3Rpb25zXHJcbntcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xyXG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIGZiV2lkdGgsIGZiSGVpZ2h0KTtcclxuXHJcbiAgICAvLyBzZXQgb3JpZ2luIHRvIHRoZSBjYW52YXMncyBjZW50cmVcclxuICAgIGN0eC5zYXZlKCk7XHJcbiAgICBjdHgudHJhbnNsYXRlKGZiV2lkdGgvMiwgZmJIZWlnaHQvMik7XHJcbiAgICBjdHguc2NhbGUoc2NlbmVTY2FsZSwgc2NlbmVTY2FsZSk7XHJcblxyXG4gICAgY29uc3QgY3VycmVudFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgY29uc3QgZGVsdGFUaW1lID0gY3VycmVudFRpbWUgLSBsYXN0VGltZTtcclxuXHJcbiAgICAvLyBkcmF3IHRoZSBzY2VuZSBzcGVjaWZpYyBzcHJpdGVzXHJcbiAgICBmb3IoY29uc3Qgc3ByaXRlIG9mIHN0YXRpY1Nwcml0ZXMpXHJcbiAgICB7XHJcbiAgICAgICAgc3ByaXRlLmRyYXcoY3VycmVudFRpbWUsIGRlbHRhVGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZHJhdyB0aGUgc3ByaXRlcyB3aGljaCB0aGUgcGxheWVyIGNhbiBpbnRlcmFjdCB3aXRoXHJcbiAgICBmb3IoY29uc3Qgc3ByaXRlIG9mIGludGVyYWN0YWJsZVNwcml0ZXMpXHJcbiAgICB7XHJcbiAgICAgICAgc3ByaXRlLmRyYXcoY3VycmVudFRpbWUsIGRlbHRhVGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZHJhdyB0aGUgcGxheWVyIHNwcml0ZVxyXG4gICAgZm9yKGNvbnN0IHNwcml0ZSBvZiBwbGF5ZXJTdGFydFBvc2l0aW9ucylcclxuICAgIHtcclxuICAgICAgICBzcHJpdGUuZHJhdyhjdXJyZW50VGltZSwgZGVsdGFUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBERUJVRyAtIGRyYXcgdGhlIGNvbGxpc2lvbiBib3hlc1xyXG4gICAgbmF2bWVzaC5kcmF3KCk7XHJcblxyXG4gICAgLy8gcmVzdG9yZSBjYW52YXMgdG8gb3JpZ2luYWwgc2V0dGluZ3NcclxuICAgIGN0eC5yZXN0b3JlKCk7XHJcblxyXG4gICAgbGFzdFRpbWUgPSBjdXJyZW50VGltZTtcclxufVxyXG5cclxuaW5wdXRNYW5hZ2VyLmFkZE1vdXNlRG93bkNhbGxiYWNrKChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgaWYoZXZlbnQuYnV0dG9uID09PSAwKSAgLy8gbGVmdCBtb3VzZSBidXR0b24gcHJlc3NcclxuICAgIHtcclxuICAgICAgICBsZXQgeCA9IChldmVudC5sYXllclggLSBjYW52YXMub2Zmc2V0TGVmdCAtIGZiV2lkdGgvMikgLyBzY2VuZVNjYWxlO1xyXG4gICAgICAgIGxldCB5ID0gKGV2ZW50LmxheWVyWSAtIGNhbnZhcy5vZmZzZXRUb3AgLSBmYkhlaWdodC8yKSAvIHNjZW5lU2NhbGU7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJtb3VzZSBkb3duIGF0IChcIiArIHggKyBcIiwgXCIgKyB5ICsgXCIpXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZihldmVudC5idXR0b24gPT09IDIpIC8vIHJpZ2h0IG1vdXNlIGJ1dHRvbiBwcmVzc1xyXG4gICAge1xyXG5cclxuICAgIH1cclxufSk7XHJcblxyXG4vLyBwcm9ncmFtIGVudHJ5IHBvaW50XHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PlxyXG57XHJcbiAgICBpbml0Q2FudmFzQW5kQ29udGV4dCgpO1xyXG5cclxuICAgIC8vIHNldCB0aGUgY2FudmFzIHNpemVcclxuICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogMC45NTtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjk1O1xyXG4gICAgZmJXaWR0aCA9IGNhbnZhcy53aWR0aDtcclxuICAgIGZiSGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcclxuXHJcblxyXG4gICAgZWRpdG9yVGV4dHVyZUF0bGFzID0gbmV3IFRleHR1cmVBdGxhcyhcInJlcy9lZGl0b3IvZWRpdG9yX2F0bGFzLnBuZ1wiKTtcclxuICAgIGVkaXRvclRleHR1cmVBdGxhcy5sb2FkKCkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3I6IGVkaXRvciB0ZXh0dXJlIGF0bGFzIGNvdWxkIG5vdCBiZSBsb2FkZWRcIik7XHJcbiAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gSlNPTkxvYWRlci5sb2FkSlNPTkZpbGUoXCJyZXMvaXRlbXMvaXRlbXMuanNvblwiKTtcclxuICAgIH0pIC50aGVuKChvYmopID0+IHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKG9iai5pdGVtcylcclxuICAgICAgICBmb3IoY29uc3QgaWQgaW4gb2JqLml0ZW1zKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgaXRtID0gb2JqLml0ZW1zW2lkXTtcclxuICAgICAgICAgICAgaXRlbXNbaWRdID0gbmV3IEl0ZW0oaXRtLm5hbWUsIGl0bS5leGFtaW5lX3RleHQsIGl0bS5leGFtaW5lX2F1ZGlvLCBpdG0uaW1hZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IoY29uc3QgaWQgaW4gb2JqLmNvbWJpbmF0aW9ucylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbWJpbmF0aW9uID0gb2JqLmNvbWJpbmF0aW9uc1tpZF07XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0xID0gaXRlbXNbY29tYmluYXRpb24uaXRlbTFdO1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtMiA9IGl0ZW1zW2NvbWJpbmF0aW9uLml0ZW0yXTtcclxuICAgICAgICAgICAgY29uc3QgaXRlbXNPdXQgPSBbXTtcclxuICAgICAgICAgICAgZm9yKGNvbnN0IGlkT3V0IG9mIGNvbWJpbmF0aW9uLml0ZW1zX291dClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaXRlbXNPdXQucHVzaChpdGVtc1tpZE91dF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGl0ZW0xICE9IG51bGwgJiYgaXRlbTIgIT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaXRlbTEuYWRkQ29tYmluYXRpb24oaXRlbTIsIGl0ZW1zT3V0KTtcclxuICAgICAgICAgICAgICAgIGl0ZW0yLmFkZENvbWJpbmF0aW9uKGl0ZW0xLCBpdGVtc091dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW5pdEdVSUNvbnRyb2xsZXJzKCk7XHJcbiAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvcjogaXRlbXMgY291bGQgbm90IGJlIGxvYWRlZFwiKTtcclxuICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBMZXZlbC5sb2FkTGV2ZWwoXCJyZXMvbGV2ZWxzL2xldmVsMS5qc29uXCIsIGl0ZW1zKTtcclxuICAgIH0pLnRoZW4oKGxldmVsRGF0YSkgPT4ge1xyXG4gICAgICAgIGltZyA9IGxldmVsRGF0YS5iYWNrZ3JvdW5kSW1nO1xyXG4gICAgICAgIHN0YXRpY1Nwcml0ZXMgPSBsZXZlbERhdGEuc3RhdGljU3ByaXRlcztcclxuICAgICAgICBpbnRlcmFjdGFibGVTcHJpdGVzID0gbGV2ZWxEYXRhLmludGVyYWN0YWJsZVNwcml0ZXM7XHJcbiAgICAgICAgbGV2ZWxTY2FsZSA9IGxldmVsRGF0YS5zY2VuZVNjYWxlID8gbGV2ZWxEYXRhLnNjZW5lU2NhbGUgOiAxLjA7XHJcbiAgICAgICAgc2NlbmVTY2FsZSA9IGxldmVsU2NhbGUgKiBjYW52YXMuaGVpZ2h0Lzg4MDsgIC8vIHNjYWxlIGJhc2VkIG9uIHRoZSBjYW52YXMgc2l6ZSBzbyBnYW1lIGZpdHMgb24gc2NyZWVuXHJcbiAgICAgICAgZGVwdGhTY2FsZVkgPSBsZXZlbERhdGEuZGVwdGhTY2FsZVk7XHJcbiAgICAgICAgbmF2bWVzaCA9IGxldmVsRGF0YS5uYXZtZXNoO1xyXG5cclxuICAgICAgICBmb3IoY29uc3Qgc3RhcnQgb2YgbGV2ZWxEYXRhLnBsYXllclN0YXJ0cykge1xyXG4gICAgICAgICAgICBsZXQgZmxhZyA9IG5ldyBTdGF0aWNTcHJpdGUoc3RhcnQueCwgc3RhcnQueSwgMSwgXCJjZW50cmVcIiwgXCJ0b3BcIiwgZWRpdG9yVGV4dHVyZUF0bGFzLCBcImZsYWdcIik7XHJcbiAgICAgICAgICAgIGZsYWcucmVmcmVzaEltYWdlKCk7XHJcbiAgICAgICAgICAgIHBsYXllclN0YXJ0UG9zaXRpb25zLnB1c2goZmxhZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzdGFydCB0aGUgZ2FtZSBlZGl0b3JcclxuICAgICAgICBsYXN0VGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgZ2FtZUxvb3AoKTtcclxuICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yOiBsZXZlbCBjb3VsZCBub3QgYmUgbG9hZGVkXCIpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIG9uIHdpbmRvdyByZXNpemUgY2hhbmdlIHRoZSBzY2FsZVxyXG53aW5kb3cub25yZXNpemUgPSAoKSA9PiB7XHJcbiAgICAvLyBzZXQgdGhlIGNhbnZhcyBzaXplXHJcbiAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIDAuOTU7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICogMC45NTtcclxuICAgIGZiV2lkdGggPSBjYW52YXMud2lkdGg7XHJcbiAgICBmYkhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XHJcbiAgICBzY2VuZVNjYWxlID0gbGV2ZWxTY2FsZSAqIGNhbnZhcy5oZWlnaHQvODgwOyAgLy8gc2NhbGUgYmFzZWQgb24gdGhlIGNhbnZhcyBzaXplIHNvIGdhbWUgZml0cyBvbiBzY3JlZW5cclxuICAgIGNvbnNvbGUubG9nKHNjZW5lU2NhbGUpO1xyXG59XHJcblxyXG4vLyBndWkgY29udHJvbFxyXG5mdW5jdGlvbiBpbml0R1VJQ29udHJvbGxlcnMoKSB7XHJcblxyXG59XHJcbiIsImltcG9ydCB7SXRlbX0gZnJvbSBcIi4uL2l0ZW1zL0l0ZW1cIlxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEludGVyYWN0aW9uXHJcbntcclxuICAgIC8vIGl0ZW0gY2FuIGJlIG51bGxcclxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBpdGVtOiBJdGVtKSB7fVxyXG5cclxuICAgIC8vIGludGVyYWN0IHdpdGggdGhlIG9iamVjdFxyXG4gICAgcHVibGljIGFic3RyYWN0IGludGVyYWN0KGl0ZW06IEl0ZW0pOiAge3RleHQ6IHN0cmluZywgaXRlbXM6IEFycmF5PEl0ZW0+fTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0SXRlbSgpOiBJdGVtXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0pTT05Mb2FkZXJ9IGZyb20gXCIuLi9yZXNvdXJjZXMvSlNPTkxvYWRlclwiXHJcbmltcG9ydCB7SW1hZ2VMb2FkZXJ9IGZyb20gXCIuLi9yZXNvdXJjZXMvSW1hZ2VMb2FkZXJcIlxyXG5pbXBvcnQge1RleHR1cmVBdGxhc30gZnJvbSBcIi4uL3Nwcml0ZXMvVGV4dHVyZUF0bGFzXCJcclxuaW1wb3J0IHtTcHJpdGV9IGZyb20gXCIuLi9zcHJpdGVzL1Nwcml0ZVwiXHJcbmltcG9ydCB7U3RhdGljU3ByaXRlfSBmcm9tIFwiLi4vc3ByaXRlcy9TdGF0aWNTcHJpdGVcIlxyXG5pbXBvcnQge0FuaW1hdGVkU3ByaXRlfSBmcm9tIFwiLi4vc3ByaXRlcy9BbmltYXRlZFNwcml0ZVwiXHJcbmltcG9ydCB7SW50ZXJhY3RhYmxlU3ByaXRlfSBmcm9tIFwiLi4vc3ByaXRlcy9JbnRlcmFjdGFibGVTcHJpdGVcIlxyXG5pbXBvcnQge05QQ1Nwcml0ZX0gZnJvbSBcIi4uL3Nwcml0ZXMvTlBDU3ByaXRlXCJcclxuaW1wb3J0IHtTcHJpdGVBbmltYXRpb259IGZyb20gXCIuLi9zcHJpdGVzL1Nwcml0ZUFuaW1hdGlvblwiXHJcbmltcG9ydCB7TmF2TWVzaH0gZnJvbSBcIi4uL2NvbGxpc2lvbi9OYXZNZXNoXCJcclxuaW1wb3J0IHtUcmlhbmdsZX0gZnJvbSBcIi4uL2NvbGxpc2lvbi9UcmlhbmdsZVwiXHJcbmltcG9ydCB7SW50ZXJhY3Rpb259ICBmcm9tIFwiLi9JbnRlcmFjdGlvblwiXHJcbmltcG9ydCB7UmVjZWl2ZUl0ZW1JbnRlcmFjdGlvbn0gZnJvbSBcIi4vUmVjZWl2ZUl0ZW1JbnRlcmFjdGlvblwiXHJcbmltcG9ydCB7SXRlbX0gZnJvbSBcIi4uL2l0ZW1zL0l0ZW1cIlxyXG5pbXBvcnQge0NpcmNsZX0gZnJvbSBcIi4uL2NvbGxpc2lvbi9DaXJjbGVcIlxyXG5pbXBvcnQge1JlY3RhbmdsZX0gZnJvbSBcIi4uL2NvbGxpc2lvbi9SZWN0YW5nbGVcIlxyXG5pbXBvcnQge0NvbnZlcnNhdGlvbn0gZnJvbSBcIi4uL2NoYXQvQ29udmVyc2F0aW9uXCJcclxuaW1wb3J0IHtEaWFsb2d9IGZyb20gXCIuLi9jaGF0L0RpYWxvZ1wiXHJcbmltcG9ydCB7Q29udGludWVEaWFsb2d9IGZyb20gXCIuLi9jaGF0L0NvbnRpbnVlRGlhbG9nXCJcclxuaW1wb3J0IHtPcHRpb25EaWFsb2d9IGZyb20gXCIuLi9jaGF0L09wdGlvbkRpYWxvZ1wiXHJcbmltcG9ydCB7UmVjZWl2ZUl0ZW1EaWFsb2d9IGZyb20gXCIuLi9jaGF0L1JlY2VpdmVJdGVtRGlhbG9nXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBMZXZlbFxyXG57XHJcbiAgICBzdGF0aWMgbG9hZExldmVsKHBhdGg6IHN0cmluZywgaXRlbXM6IGFueSk6IFByb21pc2U8YW55PlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbGV2ZWxEYXRhUHJvbWlzZSA9IEpTT05Mb2FkZXIubG9hZEpTT05GaWxlKHBhdGgpLnRoZW4oKGxldmVsRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIHRoZSB0ZXh0dXJlIGF0bGFzXHJcbiAgICAgICAgICAgICAgICBsZXQgYXRsYXMgPSBuZXcgVGV4dHVyZUF0bGFzKGxldmVsRGF0YS50ZXh0dXJlX2F0bGFzKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRleHR1cmVBdGxhc1Byb21pc2UgPSBhdGxhcy5sb2FkKCkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3I6IHRleHR1cmUgYXRsYXMgY291bGQgbm90IGJlIGxvYWRlZFwiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBhbGxQcm9taXNlcyA9IFt0ZXh0dXJlQXRsYXNQcm9taXNlXTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgdGhlIHNwcml0ZXNcclxuICAgICAgICAgICAgICAgIGxldCBzdGF0aWNTcHJpdGVzID0gbmV3IEFycmF5PFN0YXRpY1Nwcml0ZT4oKTtcclxuICAgICAgICAgICAgICAgIGxldCBpbnRlcmFjdGFibGVTcHJpdGVzID0gbmV3IEFycmF5PEludGVyYWN0YWJsZVNwcml0ZT4oKTtcclxuICAgICAgICAgICAgICAgIGxldCBucGNTcHJpdGVzID0gbmV3IEFycmF5PE5QQ1Nwcml0ZT4oKTtcclxuICAgICAgICAgICAgICAgIGZvcihjb25zdCBvYmogb2YgbGV2ZWxEYXRhLnNwcml0ZXMpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYob2JqLnR5cGUgPT0gXCJpbnRlcmFjdGFibGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW50ZXJhY3Rpb25zID0gbmV3IEFycmF5PEludGVyYWN0aW9uPigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IoY29uc3QgaW50ZXIgb2Ygb2JqLmludGVyYWN0aW9ucykgICAgLy8gY3JlYXRlIGFuIGFycmF5IG9mIGludGVyYWN0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpbnRlci50eXBlID09IFwicmVjZWl2ZV9pdGVtXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVjZWl2ZUl0ZW1zID0gbmV3IEFycmF5PEl0ZW0+KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGNvbnN0IGl0bSBvZiBpbnRlci5pdGVtc19yZWNlaXZlZCkgICAvLyBjcmVhdGUgYW4gYXJyYXkgb2YgcmVjZWl2ZSBpdGVtc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZUl0ZW1zLnB1c2goaXRlbXNbaXRtXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVyYWN0aW9ucy5wdXNoKG5ldyBSZWNlaXZlSXRlbUludGVyYWN0aW9uKGludGVyLml0ZW0gPyBpdGVtc1tpbnRlci5pdGVtXSA6IG51bGwsIGludGVyLnN1Y2Nlc3NfdGV4dCwgaW50ZXIuZmFpbF90ZXh0LCBuZXcgQXVkaW8oaW50ZXIuc3VjY2Vzc19hdWRpbyksIG5ldyBBdWRpbyhpbnRlci5mYWlsX2F1ZGlvKSwgcmVjZWl2ZUl0ZW1zKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJhY3RhYmxlU3ByaXRlcy5wdXNoKG5ldyBJbnRlcmFjdGFibGVTcHJpdGUob2JqLngsIG9iai55LCBvYmouc2NhbGUsIG9iai5vcmlnaW5faG9yaXpvbnRhbCwgb2JqLm9yaWdpbl92ZXJ0aWNhbCwgYXRsYXMsIG9iai5pbWFnZV9uYW1lLCBvYmouZXhhbWluZV90ZXh0LCBuZXcgQXVkaW8ob2JqLmV4YW1pbmVfYXVkaW8pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDaXJjbGUob2JqLngsIG9iai55LCBvYmouaW50ZXJhY3Rpb25fcmFkaXVzKSwgbmV3IFJlY3RhbmdsZShvYmoueC1vYmouY2xpY2tfem9uZV93aWR0aC8yLCBvYmoueS1vYmouY2xpY2tfem9uZV9oZWlnaHQvMiwgb2JqLmNsaWNrX3pvbmVfd2lkdGgsIG9iai5jbGlja196b25lX2hlaWdodCksIGludGVyYWN0aW9ucykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihvYmoudHlwZSA9PSBcIm5wY1wiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsb2FkIHRoZSBhbmltYXRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhdGxhcyA9IG5ldyBUZXh0dXJlQXRsYXMob2JqLmF0bGFzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFuaW1hdGlvbnM6IEFycmF5PFNwcml0ZUFuaW1hdGlvbj4gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXRsYXNMb2FkZWRQcm9taXNlID0gYXRsYXMubG9hZCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBzZXF1ZW5jZU5hbWUgaW4gb2JqLmFuaW1hdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZXEgPSBvYmouYW5pbWF0aW9uc1tzZXF1ZW5jZU5hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuaW0gPSBuZXcgU3ByaXRlQW5pbWF0aW9uKHNlcS5udW1fZnJhbWVzLCBhdGxhcywgc2VxdWVuY2VOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25zLnB1c2goYW5pbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnBjU3ByaXRlcy5wdXNoKG5ldyBOUENTcHJpdGUob2JqLngsIG9iai55LCBvYmouc2NhbGUsIG9iai5vcmlnaW5faG9yaXpvbnRhbCwgb2JqLm9yaWdpbl92ZXJ0aWNhbCwgYW5pbWF0aW9ucywgb2JqLmV4YW1pbmVfdGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENpcmNsZShvYmoueCwgb2JqLnksIG9iai5pbnRlcmFjdGlvbl9yYWRpdXMpLCBuZXcgUmVjdGFuZ2xlKG9iai54LW9iai5jbGlja196b25lX3dpZHRoLzIsIG9iai55LW9iai5jbGlja196b25lX2hlaWdodC8yLCBvYmouY2xpY2tfem9uZV93aWR0aCwgb2JqLmNsaWNrX3pvbmVfaGVpZ2h0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGV2ZWwuYnVpbGRDb252ZXJzYXRpb24ob2JqKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3I6IHVuYWJsZSB0byBsb2FkIHNwcml0ZSB0ZXh0dXJlIGF0bGFzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxQcm9taXNlcy5wdXNoKGF0bGFzTG9hZGVkUHJvbWlzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3ByaXRlcy5wdXNoKG5ldyBTdGF0aWNTcHJpdGUob2JqLngsIG9iai55LCBvYmouc2NhbGUsIG9iai5vcmlnaW5faG9yaXpvbnRhbCwgb2JqLm9yaWdpbl92ZXJ0aWNhbCwgYXRsYXMsIG9iai5pbWFnZV9uYW1lKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgbmF2bWVzaFxyXG4gICAgICAgICAgICAgICAgbGV0IHRyaXMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgdHJpIG9mIGxldmVsRGF0YS5uYXZtZXNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJpcy5wdXNoKG5ldyBUcmlhbmdsZSh0cmkueDEsIHRyaS55MSwgdHJpLngyLCB0cmkueTIsIHRyaS54MywgdHJpLnkzKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgbmF2bWVzaCA9IG5ldyBOYXZNZXNoKHRyaXMpO1xyXG5cclxuICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKGFsbFByb21pc2VzKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IoY29uc3Qgc3ByaXRlIG9mIHN0YXRpY1Nwcml0ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlLnJlZnJlc2hJbWFnZSgpOyAgLy8gdGV4dHVyZSBhdGxhcyBwcm9iYWJseSBoYWRuJ3QgbG9hZGVkIHdoZW4gc3ByaXRlIHdhcyBpbml0aWFsaXNlZCBzbyByZWZyZXNoIGltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IoY29uc3Qgc3ByaXRlIG9mIGludGVyYWN0YWJsZVNwcml0ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlLnJlZnJlc2hJbWFnZSgpOyAgLy8gdGV4dHVyZSBhdGxhcyBwcm9iYWJseSBoYWRuJ3QgbG9hZGVkIHdoZW4gc3ByaXRlIHdhcyBpbml0aWFsaXNlZCBzbyByZWZyZXNoIGltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHsndGV4dHVyZUF0bGFzJzogYXRsYXMsICdzY2VuZVNjYWxlJzogbGV2ZWxEYXRhLnNjZW5lX3NjYWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3BsYXllclN0YXJ0WCc6IGxldmVsRGF0YS5wbGF5ZXJfc3RhcnRfeCwgJ3BsYXllclN0YXJ0WSc6IGxldmVsRGF0YS5wbGF5ZXJfc3RhcnRfeSwgJ3BsYXllclN0YXJ0cyc6IGxldmVsRGF0YS5wbGF5ZXJfc3RhcnRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RlcHRoU2NhbGVZJzogbGV2ZWxEYXRhLmRlcHRoX3NjYWxlX3ksICduYXZtZXNoJzogbmF2bWVzaCwgJ3N0YXRpY1Nwcml0ZXMnOiBzdGF0aWNTcHJpdGVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ludGVyYWN0YWJsZVNwcml0ZXMnOiBpbnRlcmFjdGFibGVTcHJpdGVzLCAnbnBjU3ByaXRlcyc6IG5wY1Nwcml0ZXN9KTtcclxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QobnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvcjogZmFpbGVkIHRvIGxvYWQgbGV2ZWxcIik7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobnVsbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGJ1aWxkQ29udmVyc2F0aW9uKHNwcml0ZU9iajogYW55KTogQ29udmVyc2F0aW9uXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHtJbnRlcmFjdGlvbn0gZnJvbSBcIi4vSW50ZXJhY3Rpb25cIlxyXG5pbXBvcnQge0l0ZW19IGZyb20gXCIuLi9pdGVtcy9JdGVtXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBSZWNlaXZlSXRlbUludGVyYWN0aW9uIGV4dGVuZHMgSW50ZXJhY3Rpb25cclxue1xyXG4gICAgLy8gaXRlbSBjYW4gYmUgbnVsbFxyXG4gICAgY29uc3RydWN0b3IoaXRlbTogSXRlbSwgcHJvdGVjdGVkIHN1Y2Nlc3NUZXh0OiBzdHJpbmcsIHByb3RlY3RlZCBmYWlsVGV4dDogc3RyaW5nLFxyXG4gICAgICAgICAgICBwcm90ZWN0ZWQgc3VjY2Vzc0F1ZGlvOiBIVE1MQXVkaW9FbGVtZW50LCBwcm90ZWN0ZWQgZmFpbEF1ZGlvOiBIVE1MQXVkaW9FbGVtZW50LCBwcm90ZWN0ZWQgaXRlbXNSZWNlaXZlZDogQXJyYXk8SXRlbT4pXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaW50ZXJhY3Qgd2l0aCB0aGUgb2JqZWN0XHJcbiAgICAvLyByZXR1cm5zIGEgbGlzdCBvZiBpdGVtcyByZWNlaXZlZCBmcm9tIHRoZSBpbnRlcmFjdGlvblxyXG4gICAgcHVibGljIGludGVyYWN0KGl0ZW06IEl0ZW0pOiB7dGV4dDogc3RyaW5nLCBhdWRpbzogSFRNTEF1ZGlvRWxlbWVudCwgaXRlbXM6IEFycmF5PEl0ZW0+fVxyXG4gICAge1xyXG4gICAgICAgIGlmKGl0ZW0gPT0gdGhpcy5pdGVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHt0ZXh0OiB0aGlzLnN1Y2Nlc3NUZXh0LCBhdWRpbzogdGhpcy5zdWNjZXNzQXVkaW8sIGl0ZW1zOiB0aGlzLml0ZW1zUmVjZWl2ZWR9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHt0ZXh0OiB0aGlzLmZhaWxUZXh0LCBhdWRpbzogdGhpcy5mYWlsQXVkaW8sIGl0ZW1zOiBudWxsfTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgbGV0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbmV4cG9ydCBsZXQgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdENhbnZhc0FuZENvbnRleHQoKVxyXG57XHJcbiAgICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uPSdkZXN0aW5hdGlvbi1vdmVyJztcclxuICAgIGN0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSB0cnVlOyAgIC8vIGVuYWJsZSBhbnRpLWFsaWFzaW5nIG9mIGltYWdlc1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBJbnB1dE1hbmFnZXJcclxue1xyXG4gICAgcHJpdmF0ZSBtb3VzZURvd25DYWxsYmFja3M6IEFycmF5PChlOiBNb3VzZUV2ZW50KSA9PiB2b2lkPiA9IEFycmF5PCgpID0+IHZvaWQ+KCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5tb3VzZURvd24pO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCBldmVudCA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpKTsgIC8vIGRpc2FibGUgcmlnaHQgY2xpY2sgY29udGV4dCBtZW51XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1vdXNlRG93biA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAvLyBub3RpZnkgYWxsIGNhbGxiYWNrc1xyXG4gICAgICAgIGZvcihjb25zdCBjYWxsYmFjayBvZiB0aGlzLm1vdXNlRG93bkNhbGxiYWNrcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkTW91c2VEb3duQ2FsbGJhY2soY2FsbGJhY2s6IChlOiBNb3VzZUV2ZW50KSA9PiB2b2lkKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubW91c2VEb3duQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBJdGVtXHJcbntcclxuICAgIHByb3RlY3RlZCBjb21iaW5hdGlvbnM6IEFycmF5PHtvdGhlcjogSXRlbSwgb3V0OiBBcnJheTxJdGVtPn0+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBuYW1lOiBzdHJpbmcsIHByb3RlY3RlZCBleGFtaW5lVGV4dDogc3RyaW5nLCBwcm90ZWN0ZWQgZXhhbWluZUF1ZGlvOiBIVE1MQXVkaW9FbGVtZW50LCBwcm90ZWN0ZWQgaW1ncGF0aDogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY29tYmluYXRpb25zID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbWJpbmUob3RoZXI6IEl0ZW0pOiBBcnJheTxJdGVtPlxyXG4gICAge1xyXG4gICAgICAgIGZvcihjb25zdCBjbWIgb2YgdGhpcy5jb21iaW5hdGlvbnMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBpZiB0aGUgaXRlbSBpcyBjb21iaW5hYmxlLCByZXR1cm4gdGhlIGFycmF5IG9mIGl0ZW1zIGNyZWF0ZWRcclxuICAgICAgICAgICAgaWYob3RoZXIgPT09IGNtYi5vdGhlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNtYi5vdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRDb21iaW5hdGlvbihvdGhlcjogSXRlbSwgb3V0OiBBcnJheTxJdGVtPik6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZihvdGhlciAhPSBudWxsICYmIG91dCAhPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jb21iaW5hdGlvbnMucHVzaCh7b3RoZXI6IG90aGVyLCBvdXQ6IG91dH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TmFtZSgpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRFeGFtaW5lVGV4dCgpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5leGFtaW5lVGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RXhhbWluZUF1ZGlvKCk6IEhUTUxBdWRpb0VsZW1lbnRcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5leGFtaW5lQXVkaW87XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEltYWdlUGF0aCgpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbWdwYXRoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gYEl0ZW0oJHt0aGlzLm5hbWV9KWA7XHJcbiAgICB9XHJcbn1cclxuIiwiLy9kZWNsYXJlIFByb21pc2UgYW55O1xyXG5cclxuZXhwb3J0IGNsYXNzIEltYWdlTG9hZGVyXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZEltYWdlKHBhdGg6IHN0cmluZyk6IFByb21pc2U8SFRNTEltYWdlRWxlbWVudD5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8SFRNTEltYWdlRWxlbWVudD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgaW1nLnNyYyA9IHBhdGg7XHJcbiAgICAgICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGltZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW1nLm9uZXJyb3IgPSAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgSlNPTkxvYWRlclxyXG57XHJcbiAgICBzdGF0aWMgbG9hZEpTT05GaWxlKHBhdGg6IHN0cmluZyk6IFByb21pc2U8YW55PlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoeGhyLnJlYWR5U3RhdGUgPT09IFhNTEh0dHBSZXF1ZXN0LkRPTkUgJiYgeGhyLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG9iaik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoeGhyLnJlYWR5U3RhdGUgPT09IFhNTEh0dHBSZXF1ZXN0LkRPTkUgJiYgeGhyLnN0YXR1cyAhPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coeGhyLnN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coeGhyLnN0YXR1c1RleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChudWxsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhwYXRoKTtcclxuICAgICAgICAgICAgeGhyLm9wZW4oXCJHRVRcIiwgcGF0aCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtTcHJpdGV9IGZyb20gXCIuL1Nwcml0ZVwiXHJcbmltcG9ydCB7U3ByaXRlQW5pbWF0aW9ufSBmcm9tIFwiLi9TcHJpdGVBbmltYXRpb25cIlxyXG5cclxuZXhwb3J0IGNsYXNzIEFuaW1hdGVkU3ByaXRlIGV4dGVuZHMgU3ByaXRlXHJcbntcclxuICAgIHByb3RlY3RlZCBzcHJpdGVBbmltYXRpb25zOiBBcnJheTxTcHJpdGVBbmltYXRpb24+ID0gW107XHJcbiAgICBwcm90ZWN0ZWQgY3VycmVudEFuaW1hdGlvbiA9IC0xO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgc2NhbGU6IG51bWJlciwgb3JpZ2luSG9yaXpvbnRhbDogc3RyaW5nLCBvcmlnaW5WZXJ0aWNhbDogc3RyaW5nLCBhbmltczogQXJyYXk8U3ByaXRlQW5pbWF0aW9uPikge1xyXG4gICAgICAgIHN1cGVyKHgsIHksIHNjYWxlLCBvcmlnaW5Ib3Jpem9udGFsLCBvcmlnaW5WZXJ0aWNhbCk7XHJcbiAgICAgICAgaWYoYW5pbXMgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZUFuaW1hdGlvbnMgPSBhbmltcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcoY3VycmVudFRpbWU6IG51bWJlciwgZGVsdGFUaW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZih0aGlzLmN1cnJlbnRBbmltYXRpb24gPj0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBhbmltID0gdGhpcy5zcHJpdGVBbmltYXRpb25zW3RoaXMuY3VycmVudEFuaW1hdGlvbl07XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaE9yaWdpbihhbmltLmdldEN1cnJlbnRGcmFtZSgpLncsIGFuaW0uZ2V0Q3VycmVudEZyYW1lKCkuaCk7XHJcbiAgICAgICAgICAgIGFuaW0uZHJhdyhjdXJyZW50VGltZSwgdGhpcy5vcmlnaW5YLCB0aGlzLm9yaWdpblksIHRoaXMuc2NhbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0Q3VycmVudEFuaW1hdGlvbiA9IChuZXdBbmltYXRpb25JbmRleDogbnVtYmVyKTogdm9pZCA9PiB7XHJcbiAgICAgICAgaWYobmV3QW5pbWF0aW9uSW5kZXggPCB0aGlzLnNwcml0ZUFuaW1hdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbiA9IG5ld0FuaW1hdGlvbkluZGV4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkU3ByaXRlQW5pbWF0aW9uID0gKGFuaW0pOiB2b2lkID0+IHtcclxuICAgICAgICBpZihhbmltICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5zcHJpdGVBbmltYXRpb25zLnB1c2goYW5pbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRTcHJpdGVBbmltYXRpb25zID0gKGFuaW1zOiBBcnJheTxTcHJpdGVBbmltYXRpb24+KTogdm9pZCA9PiB7XHJcbiAgICAgICAgaWYoYW5pbXMgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZUFuaW1hdGlvbnMgPSBhbmltcztcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uID0gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRQb3MoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtjdHh9IGZyb20gXCIuLi9nbG9iLnRzXCJcclxuaW1wb3J0IHtTcHJpdGVBbmltYXRpb259IGZyb20gXCIuL1Nwcml0ZUFuaW1hdGlvblwiXHJcbmltcG9ydCB7U3RhdGljU3ByaXRlfSBmcm9tIFwiLi9TdGF0aWNTcHJpdGVcIlxyXG5pbXBvcnQge0ludGVyYWN0aW9ufSBmcm9tIFwiLi4vZ2FtZS9JbnRlcmFjdGlvblwiXHJcbmltcG9ydCB7VGV4dHVyZUF0bGFzfSBmcm9tIFwiLi9UZXh0dXJlQXRsYXNcIlxyXG5pbXBvcnQge0l0ZW19IGZyb20gXCIuLi9pdGVtcy9JdGVtXCJcclxuaW1wb3J0IHtDaXJjbGV9IGZyb20gXCIuLi9jb2xsaXNpb24vQ2lyY2xlXCJcclxuaW1wb3J0IHtSZWN0YW5nbGV9IGZyb20gXCIuLi9jb2xsaXNpb24vUmVjdGFuZ2xlXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnRlcmFjdGFibGVTcHJpdGUgZXh0ZW5kcyBTdGF0aWNTcHJpdGVcclxue1xyXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHNjYWxlOiBudW1iZXIsIG9yaWdpbkhvcml6b250YWw6IHN0cmluZywgb3JpZ2luVmVydGljYWw6IHN0cmluZywgYXRsYXM6IFRleHR1cmVBdGxhcywgaW1hZ2VOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBwcm90ZWN0ZWQgZXhhbWluZVRleHQ6IHN0cmluZywgcHJvdGVjdGVkIGV4YW1pbmVBdWRpbzogSFRNTEF1ZGlvRWxlbWVudCwgcHJvdGVjdGVkIGludGVyYWN0aW9uWm9uZTogQ2lyY2xlLCBwcm90ZWN0ZWQgY2xpY2tab25lOiBSZWN0YW5nbGUsIHByb3RlY3RlZCBpbnRlcmFjdGlvbnM6IEFycmF5PEludGVyYWN0aW9uPilcclxuICAgIHtcclxuICAgICAgICBzdXBlcih4LCB5LCBzY2FsZSwgb3JpZ2luSG9yaXpvbnRhbCwgb3JpZ2luVmVydGljYWwsIGF0bGFzLCBpbWFnZU5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3KGN1cnJlbnRUaW1lOiBudW1iZXIsIGRlbHRhVGltZTogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyLmRyYXcoY3VycmVudFRpbWUsIGRlbHRhVGltZSk7XHJcblxyXG4gICAgICAgIC8vIERFQlVHIC0gZHJhdyB0aGUgY2lyY2xlIGFuZCByZWN0YW5nbGVcclxuICAgICAgICB0aGlzLmNsaWNrWm9uZS5kcmF3KCk7XHJcbiAgICAgICAgdGhpcy5pbnRlcmFjdGlvblpvbmUuZHJhdygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbkludGVyYWN0aW9uWm9uZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcmFjdGlvblpvbmUuY29udGFpbnMoeCwgeSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluQ2xpY2tab25lKHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNsaWNrWm9uZS5jb250YWlucyh4LCB5KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpbnRlcmFjdCB3aXRoIHRoZSBzcHJpdGVcclxuICAgIC8vIGl0ZW0gY2FuIGJlIG51bGxcclxuICAgIHB1YmxpYyBpbnRlcmFjdChpdGVtOiBJdGVtKToge3RleHQ6IHN0cmluZywgaXRlbXM6IEFycmF5PEl0ZW0+fVxyXG4gICAge1xyXG4gICAgICAgIGZvcihjb25zdCBpbnRlciBvZiB0aGlzLmludGVyYWN0aW9ucylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIGlmIHRoZSBpdGVtcyBtYXRjaCwgdGhlbiBpbnRlcmFjdCB3aXRoIHRoZSBvYmplY3RcclxuICAgICAgICAgICAgaWYoaW50ZXIuZ2V0SXRlbSgpID09IGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGxldCBvYmogPSBpbnRlci5pbnRlcmFjdChpdGVtKTtcclxuICAgICAgICAgICAgICAgIGlmKG9iaiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBpbnRlcmFjdGlvbiBpZiBpdCBoYXMgYmVlbiBmdWxmaWxsZWRcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmludGVyYWN0aW9ucy5zcGxpY2UodGhpcy5pbnRlcmFjdGlvbnMuaW5kZXhPZihpbnRlciksIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEV4YW1pbmVUZXh0KCk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmV4YW1pbmVUZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRFeGFtaW5lQXVkaW8oKTogSFRNTEF1ZGlvRWxlbWVudFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmV4YW1pbmVBdWRpbztcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge2N0eH0gZnJvbSBcIi4uL2dsb2IudHNcIlxyXG5pbXBvcnQge05hdlNwcml0ZX0gZnJvbSBcIi4vTmF2U3ByaXRlXCJcclxuaW1wb3J0IHtQb2ludH0gZnJvbSBcIi4uL2NvbGxpc2lvbi9Qb2ludFwiXHJcbmltcG9ydCB7QW5pbWF0ZWRTcHJpdGV9IGZyb20gXCIuL0FuaW1hdGVkU3ByaXRlXCJcclxuaW1wb3J0IHtTcHJpdGVBbmltYXRpb259IGZyb20gXCIuL1Nwcml0ZUFuaW1hdGlvblwiXHJcbmltcG9ydCB7Q29udmVyc2F0aW9ufSBmcm9tIFwiLi4vY2hhdC9Db252ZXJzYXRpb25cIlxyXG5pbXBvcnQge0NpcmNsZX0gZnJvbSBcIi4uL2NvbGxpc2lvbi9DaXJjbGVcIlxyXG5pbXBvcnQge1JlY3RhbmdsZX0gZnJvbSBcIi4uL2NvbGxpc2lvbi9SZWN0YW5nbGVcIlxyXG5cclxuZXhwb3J0IGNsYXNzIE5QQ1Nwcml0ZSBleHRlbmRzIE5hdlNwcml0ZVxyXG57XHJcbiAgICBwcml2YXRlIHNwZWVjaEJ1YmJsZU9wZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgc3BlZWNoQnViYmxlU2hvd25BdDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBzcGVlY2hCdWJibGVUZXh0OiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHRleHRXaWR0aDogbnVtYmVyOyAgLy8gd2lkdGggb2YgdGhlIHRleHQgaW4gcGl4ZWxzXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IEJBU0VfRk9OVF9TSVpFID0gNzU7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBzY2FsZTogbnVtYmVyLCBvcmlnaW5Ib3Jpem9udGFsOiBzdHJpbmcsIG9yaWdpblZlcnRpY2FsOiBzdHJpbmcsIGFuaW1zOiBBcnJheTxTcHJpdGVBbmltYXRpb24+LFxyXG4gICAgICAgICAgICAgICAgcHJvdGVjdGVkIGV4YW1pbmVUZXh0OiBzdHJpbmcsIHByb3RlY3RlZCBpbnRlcmFjdGlvblpvbmU6IENpcmNsZSwgcHJvdGVjdGVkIGNsaWNrWm9uZTogUmVjdGFuZ2xlLCBwcm90ZWN0ZWQgY29udmVyc2F0aW9uOiBDb252ZXJzYXRpb24sIG1vdmVTcGVlZDogbnVtYmVyID0gMC41KVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKHgsIHksIHNjYWxlLCBvcmlnaW5Ib3Jpem9udGFsLCBvcmlnaW5WZXJ0aWNhbCwgYW5pbXMsIG1vdmVTcGVlZCk7XHJcbiAgICAgICAgdGhpcy5zZXRDdXJyZW50QW5pbWF0aW9uKDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3KGN1cnJlbnRUaW1lOiBudW1iZXIsIGRlbHRhVGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIuZHJhdyhjdXJyZW50VGltZSwgZGVsdGFUaW1lKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5zcGVlY2hCdWJibGVPcGVuKSB7XHJcbiAgICAgICAgICAgIC8vIGRyYXcgdGhlIHNwZWVjaCBidWJibGVcclxuICAgICAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLngsIHRoaXMub3JpZ2luWSk7XHJcbiAgICAgICAgICAgIGN0eC5zY2FsZSh0aGlzLnNjYWxlLCB0aGlzLnNjYWxlKTtcclxuICAgICAgICAgICAgY3R4LnNoYWRvd0NvbG9yID0gXCIjNTU1NTU1XCI7XHJcbiAgICAgICAgICAgIGN0eC5zaGFkb3dCbHVyID0gNTtcclxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzFBRkY4MFwiOyAgIC8vIGdyZWVuOiAjMUFGRjgwLCBhbWJlcjogI0ZGQjY0MiwgYmx1ZTogIzJFQ0ZGRlxyXG4gICAgICAgICAgICBjdHguZmlsbFRleHQodGhpcy5zcGVlY2hCdWJibGVUZXh0LCAtdGhpcy50ZXh0V2lkdGgvMiwgMCk7XHJcbiAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBzcGVlY2ggYnViYmxlIGxhc3RzIDEvMiBzZWNvbmQgZm9yIGVhY2ggd29yZFxyXG4gICAgICAgICAgICBpZihjdXJyZW50VGltZSAtIHRoaXMuc3BlZWNoQnViYmxlU2hvd25BdCA+PSB0aGlzLnNwZWVjaEJ1YmJsZVRleHQuc3BsaXQoXCIgXCIpLmxlbmd0aCAqIDUwMCArIDUwMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlY2hCdWJibGVPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIERFQlVHIC0gZHJhdyB0aGUgY2lyY2xlIGFuZCByZWN0YW5nbGVcclxuICAgICAgICB0aGlzLmNsaWNrWm9uZS5kcmF3KCk7XHJcbiAgICAgICAgdGhpcy5pbnRlcmFjdGlvblpvbmUuZHJhdygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvcGVuU3BlZWNoQnViYmxlKHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgIGlmKHRleHQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVjaEJ1YmJsZU9wZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVjaEJ1YmJsZVRleHQgPSB0ZXh0O1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVjaEJ1YmJsZVNob3duQXQgPSBEYXRlLm5vdygpO1xyXG5cclxuICAgICAgICAgICAgY3R4LmZvbnQgPSBgJHt0aGlzLkJBU0VfRk9OVF9TSVpFfXB4IEJvb2ttYW5gO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRXaWR0aCA9IGN0eC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluSW50ZXJhY3Rpb25ab25lKHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmludGVyYWN0aW9uWm9uZS5jb250YWlucyh4LCB5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5DbGlja1pvbmUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpY2tab25lLmNvbnRhaW5zKHgsIHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRFeGFtaW5lVGV4dCgpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5leGFtaW5lVGV4dDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0FuaW1hdGVkU3ByaXRlfSBmcm9tIFwiLi9BbmltYXRlZFNwcml0ZVwiXHJcbmltcG9ydCB7U3ByaXRlQW5pbWF0aW9ufSBmcm9tIFwiLi9TcHJpdGVBbmltYXRpb25cIlxyXG5pbXBvcnQge1BvaW50fSBmcm9tIFwiLi4vY29sbGlzaW9uL1BvaW50XCJcclxuXHJcbmV4cG9ydCBjbGFzcyBOYXZTcHJpdGUgZXh0ZW5kcyBBbmltYXRlZFNwcml0ZVxyXG57XHJcbiAgICBwcml2YXRlIHdheXBvaW50czogQXJyYXk8UG9pbnQ+O1xyXG4gICAgcHJpdmF0ZSBuZXh0V2F5cG9pbnQ6IFBvaW50O1xyXG4gICAgcHJpdmF0ZSBtb3ZlU3BlZWQ6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIGRlcHRoU2NhbGVZOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHN0YXJ0WDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBzdGFydFk6IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHNjYWxlOiBudW1iZXIsIG9yaWdpbkhvcml6b250YWw6IHN0cmluZywgb3JpZ2luVmVydGljYWw6IHN0cmluZywgYW5pbXM6IEFycmF5PFNwcml0ZUFuaW1hdGlvbj4sIG1vdmVTcGVlZDogbnVtYmVyID0gMC41KSB7XHJcbiAgICAgICAgc3VwZXIoeCwgeSwgc2NhbGUsIG9yaWdpbkhvcml6b250YWwsIG9yaWdpblZlcnRpY2FsLCBhbmltcyk7XHJcbiAgICAgICAgdGhpcy5tb3ZlU3BlZWQgPSBtb3ZlU3BlZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcoY3VycmVudFRpbWU6IG51bWJlciwgZGVsdGFUaW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICAvLyBtb3ZlIHRvd2FyZHMgdGhlIG5leHQgd2F5cG9pbnRcclxuICAgICAgICBpZih0aGlzLm5leHRXYXlwb2ludCAhPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4oTWF0aC5hYnModGhpcy5uZXh0V2F5cG9pbnQueSAtIHRoaXMueSkgLyBNYXRoLmFicyh0aGlzLm5leHRXYXlwb2ludC54IC0gdGhpcy54KSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vdmVTcGVlZFggPSB0aGlzLm1vdmVTcGVlZCAqIGRlbHRhVGltZSAqIE1hdGguY29zKGFuZ2xlKSAqIHRoaXMuc2NhbGU7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vdmVTcGVlZFkgPSB0aGlzLm1vdmVTcGVlZCAqIGRlbHRhVGltZSAqIE1hdGguc2luKGFuZ2xlKSAqIHRoaXMuc2NhbGU7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiB0aGUgc3ByaXRlIGhhcyByZWFjaGVkIHRoZSB3YXlwb2ludCAob3IgdGhlcmVhYm91dHMpIHRoZW4gZ2V0IHRoZSBuZXh0IHdheXBvaW50XHJcbiAgICAgICAgICAgIGlmKHRoaXMueCA+PSB0aGlzLm5leHRXYXlwb2ludC54IC0gNSAmJiB0aGlzLnggPD0gdGhpcy5uZXh0V2F5cG9pbnQueCArIDUgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMueSA+PSB0aGlzLm5leHRXYXlwb2ludC55IC0gNSAmJiB0aGlzLnkgPD0gdGhpcy5uZXh0V2F5cG9pbnQueSArIDUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJhcnJpdmVkXCIsIHRoaXMueCwgdGhpcy55KTtcclxuICAgICAgICAgICAgICAgIHRoaXMueCA9IHRoaXMubmV4dFdheXBvaW50Lng7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSB0aGlzLm5leHRXYXlwb2ludC55O1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy53YXlwb2ludHMgIT0gbnVsbCAmJiB0aGlzLndheXBvaW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0V2F5cG9pbnQgPSB0aGlzLndheXBvaW50cy5wb3AoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0V2F5cG9pbnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBtb3ZlIHRvd2FyZHMgdGhlIG5leHQgd2F5cG9pbnRcclxuICAgICAgICAgICAgaWYodGhpcy5uZXh0V2F5cG9pbnQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy54IDwgdGhpcy5uZXh0V2F5cG9pbnQueCAtIDUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnggKz0gbW92ZVNwZWVkWDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLnggPiB0aGlzLm5leHRXYXlwb2ludC54ICsgNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCAtPSBtb3ZlU3BlZWRYO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKHRoaXMueSA8IHRoaXMubmV4dFdheXBvaW50LnkgLSA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ICs9IG1vdmVTcGVlZFk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGhpcy55ID4gdGhpcy5uZXh0V2F5cG9pbnQueSArIDUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnkgLT0gbW92ZVNwZWVkWTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBzY2FsZSB0aGUgcGxheWVyIGJhc2VkIG9uIHRoZSBkZXB0aCBvZiB0aGUgbW91c2UgcG9zaXRpb25cclxuICAgICAgICB0aGlzLnNjYWxlID0gdGhpcy5iYXNlU2NhbGUgKiB0aGlzLmRlcHRoU2NhbGVZICoqICh0aGlzLnN0YXJ0WSAtIHRoaXMueSk7XHJcblxyXG4gICAgICAgIHN1cGVyLmRyYXcoY3VycmVudFRpbWUsIGRlbHRhVGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFdheXBvaW50cyh3YXlwb2ludHM6IEFycmF5PFBvaW50Pikge1xyXG4gICAgICAgIHRoaXMud2F5cG9pbnRzID0gd2F5cG9pbnRzO1xyXG4gICAgICAgIHRoaXMubmV4dFdheXBvaW50ID0gbnVsbDtcclxuICAgICAgICBpZih0aGlzLndheXBvaW50cyAhPSBudWxsICYmIHRoaXMud2F5cG9pbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy53YXlwb2ludHMpO1xyXG4gICAgICAgICAgICB0aGlzLm5leHRXYXlwb2ludCA9IHRoaXMud2F5cG9pbnRzLnBvcCgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5leHQ6IFwiICsgdGhpcy5uZXh0V2F5cG9pbnQueCArIFwiLCBcIiArIHRoaXMubmV4dFdheXBvaW50LnkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXREZXB0aFNjYWxlKGRlcHRoU2NhbGVZOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmRlcHRoU2NhbGVZID0gZGVwdGhTY2FsZVk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFN0YXJ0UG9zKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydFggPSB4O1xyXG4gICAgICAgIHRoaXMuc3RhcnRZID0geTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgYWJzdHJhY3QgY2xhc3MgU3ByaXRlXHJcbntcclxuICAgIHByb3RlY3RlZCBiYXNlU2NhbGU6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBvcmlnaW5YOiBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgb3JpZ2luWTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB4OiBudW1iZXIsIHByb3RlY3RlZCB5OiBudW1iZXIsIHByb3RlY3RlZCBzY2FsZTogbnVtYmVyLCBwcm90ZWN0ZWQgb3JpZ2luSG9yaXpvbnRhbDogc3RyaW5nLCBwcm90ZWN0ZWQgb3JpZ2luVmVydGljYWw6IHN0cmluZywgcHJvdGVjdGVkIGRlcHRoOiBudW1iZXIgPSAwKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuYmFzZVNjYWxlID0gdGhpcy5zY2FsZTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgcmVmcmVzaE9yaWdpbih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgcG9zaXRpb24gYXQgd2hpY2ggdG8gZHJhdyB0aGUgc3ByaXRlXHJcbiAgICAgICAgaWYodGhpcy5vcmlnaW5Ib3Jpem9udGFsID09IFwicmlnaHRcIikge1xyXG4gICAgICAgICAgICB0aGlzLm9yaWdpblggPSB0aGlzLnggLSB3aWR0aCAqIHRoaXMuc2NhbGU7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMub3JpZ2luSG9yaXpvbnRhbCA9PSBcImxlZnRcIikge1xyXG4gICAgICAgICAgICB0aGlzLm9yaWdpblggPSB0aGlzLng7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vcmlnaW5YID0gdGhpcy54IC0gd2lkdGgvMiAqIHRoaXMuc2NhbGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIHBvc2l0aW9uIGF0IHdoaWNoIHRvIGRyYXcgdGhlIHNwcml0ZVxyXG4gICAgICAgIGlmKHRoaXMub3JpZ2luVmVydGljYWwgPT0gXCJ0b3BcIikge1xyXG4gICAgICAgICAgICB0aGlzLm9yaWdpblkgPSB0aGlzLnkgLSBoZWlnaHQqIHRoaXMuc2NhbGU7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMub3JpZ2luVmVydGljYWwgPT0gXCJib3R0b21cIikge1xyXG4gICAgICAgICAgICB0aGlzLm9yaWdpblkgPSB0aGlzLnk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vcmlnaW5ZID0gdGhpcy55IC0gaGVpZ2h0LzIgKiB0aGlzLnNjYWxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGFic3RyYWN0IGRyYXcoY3VycmVudFRpbWU6IG51bWJlciwgZGVsdGFUaW1lOiBudW1iZXIpOiB2b2lkO1xyXG59XHJcbiIsImltcG9ydCB7Y3R4fSBmcm9tIFwiLi4vZ2xvYi50c1wiXHJcbmltcG9ydCB7VGV4dHVyZUF0bGFzfSBmcm9tICcuL1RleHR1cmVBdGxhcydcclxuaW1wb3J0IHtUZXh0dXJlQXRsYXNGcmFtZX0gZnJvbSBcIi4vVGV4dHVyZUF0bGFzRnJhbWVcIlxyXG5cclxuZXhwb3J0IGNsYXNzIFNwcml0ZUFuaW1hdGlvblxyXG57XHJcbiAgICAvLyBodHRwOi8vd3d3LnR5cGVzY3JpcHRnYW1lcy5jb20vQW5pbWF0ZWRTcHJpdGVzLmh0bWxcclxuICAgIHByb3RlY3RlZCBjdXJyZW50RnJhbWUgPSAwO1xyXG4gICAgcHJpdmF0ZSBsYXN0VGltZSA9IERhdGUubm93KCk7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgbnVtRnJhbWVzOiBudW1iZXIsIHByb3RlY3RlZCBhdGxhczogVGV4dHVyZUF0bGFzLCBwcm90ZWN0ZWQgc2VxdWVuY2VOYW1lOiBzdHJpbmcpIHt9XHJcblxyXG4gICAgcHVibGljIGRyYXcgPSAoY3VycmVudFRpbWU6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHNjYWxlOiBudW1iZXIpOiB2b2lkID0+IHtcclxuICAgICAgICBsZXQgZnJhbWUgPSB0aGlzLmdldEN1cnJlbnRGcmFtZSgpO1xyXG4gICAgICAgIGlmKGZyYW1lLmZyYW1lRHVyYXRpb24gPD0gY3VycmVudFRpbWUgLSB0aGlzLmxhc3RUaW1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RnJhbWUrKztcclxuICAgICAgICAgICAgaWYodGhpcy5jdXJyZW50RnJhbWUgPj0gdGhpcy5udW1GcmFtZXMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEZyYW1lID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxhc3RUaW1lID0gY3VycmVudFRpbWU7XHJcbiAgICAgICAgICAgIGZyYW1lID0gdGhpcy5nZXRDdXJyZW50RnJhbWUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNwcml0ZXMgYXJlIGRyYXduIGZyb20gdGhlaXIgY2VudHJlLXgsIGJvdHRvbS15LCBpLmUuIGZlZXQgcG9zaXRpb25cclxuICAgICAgICAvL2xldCB0b3BMZWZ0WCA9IHggLSBmcmFtZS53LzIgKiBzY2FsZTtcclxuICAgICAgICAvL2xldCB0b3BMZWZ0WSA9IHkgLSBmcmFtZS5oICogc2NhbGU7XHJcblxyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSh4LCB5KTtcclxuICAgICAgICBjdHgucmVjdChmcmFtZS54LCBmcmFtZS55LCBmcmFtZS53LCBmcmFtZS5oKTtcclxuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuYXRsYXMuaW1hZ2UsXHJcbiAgICAgICAgICAgIGZyYW1lLngsIGZyYW1lLnksXHJcbiAgICAgICAgICAgIGZyYW1lLncsIGZyYW1lLmgsXHJcbiAgICAgICAgICAgIGZyYW1lLm9mZnNldHgsIGZyYW1lLm9mZnNldHksXHJcbiAgICAgICAgICAgIGZyYW1lLncgKiBzY2FsZSwgZnJhbWUuaCAqIHNjYWxlKTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDdXJyZW50RnJhbWUgPSAoKTogVGV4dHVyZUF0bGFzRnJhbWUgPT4ge1xyXG4gICAgICAgIGlmKHRoaXMuY3VycmVudEZyYW1lID4gOSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmF0bGFzLmZyYW1lc1t0aGlzLnNlcXVlbmNlTmFtZSArIFwiX1wiICsgdGhpcy5jdXJyZW50RnJhbWUudG9TdHJpbmcoKV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmF0bGFzLmZyYW1lc1t0aGlzLnNlcXVlbmNlTmFtZSArIFwiX1wiICsgXCIwXCIgKyB0aGlzLmN1cnJlbnRGcmFtZS50b1N0cmluZygpXTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge2N0eH0gZnJvbSBcIi4uL2dsb2IudHNcIlxyXG5pbXBvcnQge1Nwcml0ZX0gZnJvbSBcIi4vU3ByaXRlXCJcclxuaW1wb3J0IHtUZXh0dXJlQXRsYXN9IGZyb20gXCIuL1RleHR1cmVBdGxhc1wiXHJcbmltcG9ydCB7VGV4dHVyZUF0bGFzRnJhbWV9IGZyb20gXCIuL1RleHR1cmVBdGxhc0ZyYW1lXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBTdGF0aWNTcHJpdGUgZXh0ZW5kcyBTcHJpdGVcclxue1xyXG4gICAgcHJvdGVjdGVkIGltYWdlOiBUZXh0dXJlQXRsYXNGcmFtZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgc2NhbGU6IG51bWJlciwgb3JpZ2luSG9yaXpvbnRhbDogc3RyaW5nLCBvcmlnaW5WZXJ0aWNhbDogc3RyaW5nLCBwcm90ZWN0ZWQgYXRsYXM6IFRleHR1cmVBdGxhcywgcHJvdGVjdGVkIGltYWdlTmFtZTogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKHgsIHksIHNjYWxlLCBvcmlnaW5Ib3Jpem9udGFsLCBvcmlnaW5WZXJ0aWNhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlZnJlc2hJbWFnZSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IHRoaXMuYXRsYXMuZnJhbWVzW3RoaXMuaW1hZ2VOYW1lXTsgLy8gZ2V0IHRoZSBpbWFnZSBmcm9tIHRoZSBhdGxhc1xyXG4gICAgICAgIHRoaXMucmVmcmVzaE9yaWdpbih0aGlzLmltYWdlLncsIHRoaXMuaW1hZ2UuaCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcoY3VycmVudFRpbWU6IG51bWJlciwgZGVsdGFUaW1lOiBudW1iZXIpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHgudHJhbnNsYXRlKHRoaXMub3JpZ2luWCwgdGhpcy5vcmlnaW5ZKTtcclxuICAgICAgICBjdHgucmVjdCh0aGlzLmltYWdlLngsIHRoaXMuaW1hZ2UueSwgdGhpcy5pbWFnZS53LCB0aGlzLmltYWdlLmgpO1xyXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5hdGxhcy5pbWFnZSxcclxuICAgICAgICAgICAgdGhpcy5pbWFnZS54LCB0aGlzLmltYWdlLnksXHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UudywgdGhpcy5pbWFnZS5oLFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlLm9mZnNldHgsIHRoaXMuaW1hZ2Uub2Zmc2V0eSxcclxuICAgICAgICAgICAgdGhpcy5pbWFnZS53ICogdGhpcy5zY2FsZSwgdGhpcy5pbWFnZS5oICogdGhpcy5zY2FsZSk7XHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0pTT05Mb2FkZXJ9IGZyb20gJy4uL3Jlc291cmNlcy9KU09OTG9hZGVyJ1xyXG5pbXBvcnQge0ltYWdlTG9hZGVyfSBmcm9tICcuLi9yZXNvdXJjZXMvSW1hZ2VMb2FkZXInXHJcbmltcG9ydCB7VGV4dHVyZUF0bGFzRnJhbWV9IGZyb20gJy4vVGV4dHVyZUF0bGFzRnJhbWUnXHJcblxyXG5leHBvcnQgY2xhc3MgVGV4dHVyZUF0bGFzXHJcbntcclxuICAgIC8vIGh0dHA6Ly93d3cudHlwZXNjcmlwdGdhbWVzLmNvbS9UZXh0dXJlQXRsYXMuaHRtbFxyXG4gICAgcHVibGljIGZyYW1lczogeyBbaW5kZXg6IHN0cmluZ106IFRleHR1cmVBdGxhc0ZyYW1lIH0gPSB7fTtcclxuICAgIHB1YmxpYyB0YUxvYWRDb21wbGV0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50ID0gbmV3IEltYWdlKCk7XHJcbiAgICBwdWJsaWMgYXRsYXNOYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBpbWFnZUZpbGVOYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBqc29uRmlsZU5hbWU6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYXRsYXNOYW1lOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5hdGxhc05hbWUgPSBhdGxhc05hbWU7XHJcbiAgICAgICAgdGhpcy5pbWFnZUZpbGVOYW1lID0gYXRsYXNOYW1lO1xyXG4gICAgICAgIHRoaXMuanNvbkZpbGVOYW1lID0gYXRsYXNOYW1lLnJlcGxhY2UoXCIucG5nXCIsIFwiXCIpICsgXCIuanNvblwiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkKCk6IFByb21pc2U8YW55PlxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGltZ1Byb21pc2UgPSBJbWFnZUxvYWRlci5sb2FkSW1hZ2UodGhpcy5pbWFnZUZpbGVOYW1lKS50aGVuKChpbWcpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZSA9IGltZztcclxuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcjogdW5hYmxlIHRvIGxvYWQgJyArIHRoaXMuaW1hZ2VGaWxlTmFtZSk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3QganNvblByb21pc2UgPSBKU09OTG9hZGVyLmxvYWRKU09ORmlsZSh0aGlzLmpzb25GaWxlTmFtZSkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUZyYW1lcyhkYXRhKTtcclxuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcjogdW5hYmxlIHRvIGxvYWQgJyArIHRoaXMuanNvbkZpbGVOYW1lKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtpbWdQcm9taXNlLCBqc29uUHJvbWlzZV0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmF0bGFzTmFtZSArICcgbG9hZGVkIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yOiAnICsgdGhpcy5hdGxhc05hbWUgKyAnIGZhaWxlZCB0byBsb2FkJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVGcmFtZXMoZGF0YTogYW55KVxyXG4gICAge1xyXG4gICAgICAgIGZvcihjb25zdCBuYW1lIGluIGRhdGEuZnJhbWVzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3Qgc3ByaXRlRGF0YSA9IGRhdGEuZnJhbWVzW25hbWVdO1xyXG4gICAgICAgICAgICBsZXQgZnJhbWUgPSBuZXcgVGV4dHVyZUF0bGFzRnJhbWUoc3ByaXRlRGF0YS5mcmFtZS54LCBzcHJpdGVEYXRhLmZyYW1lLnksIHNwcml0ZURhdGEuZnJhbWUudywgc3ByaXRlRGF0YS5mcmFtZS5oLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVEYXRhLnNwcml0ZVNvdXJjZVNpemUueCwgc3ByaXRlRGF0YS5zcHJpdGVTb3VyY2VTaXplLnksIHNwcml0ZURhdGEuZnJhbWVEdXJhdGlvbik7XHJcbiAgICAgICAgICAgIHRoaXMuZnJhbWVzW25hbWVdID0gZnJhbWU7XHJcbiAgICAgICAgfVxyXG4vLyAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5mcmFtZXMpKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgVGV4dHVyZUF0bGFzRnJhbWVcclxue1xyXG4gICAgLy8gaHR0cDovL3d3dy50eXBlc2NyaXB0Z2FtZXMuY29tL0FuaW1hdGVkU3ByaXRlcy5odG1sXHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcbiAgICB3OiBudW1iZXI7XHJcbiAgICBoOiBudW1iZXI7XHJcblxyXG4gICAgb2Zmc2V0eDogbnVtYmVyOyAgICAvLyBpbWFnZSB3aWxsIGJlIG9mZnNldCBieSB0aGVzZSB2YWx1ZXMgc28gZnJhbWVzIGxpbmUgdXAgaW4gYW5pbWF0aW9uXHJcbiAgICBvZmZzZXR5OiBudW1iZXI7XHJcblxyXG4gICAgZnJhbWVEdXJhdGlvbjogbnVtYmVyOyAgLy8gdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhpcyBmcmFtZSBsYXN0c1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDAsIHc6IG51bWJlciA9IDEsIGg6IG51bWJlciA9IDEsIG9mZnNldHg6IG51bWJlciA9IDAsIG9mZnNldHk6IG51bWJlciA9IDAsIGZyYW1lRHVyYXRpb246IG51bWJlciA9IDEwMClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy53ID0gdztcclxuICAgICAgICB0aGlzLmggPSBoO1xyXG4gICAgICAgIHRoaXMub2Zmc2V0eCA9IG9mZnNldHg7XHJcbiAgICAgICAgdGhpcy5vZmZzZXR5ID0gb2Zmc2V0eTtcclxuICAgICAgICB0aGlzLmZyYW1lRHVyYXRpb24gPSBmcmFtZUR1cmF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQoeDogbnVtYmVyLCB5OiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=