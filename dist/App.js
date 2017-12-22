"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class App {
    constructor() {
        this.express = express();
        this.createRoutes();
    }
    createRoutes() {
        const router = express.Router();
        router.get('/', (req, res) => {
            res.json({
                message: 'New Message!'
            });
        });
        router.get('/dash', (req, res) => {
            res.send('<h1>TESTEEEE<h1>');
        });
        this.express.use('/', router);
    }
}
exports.default = new App().express;
