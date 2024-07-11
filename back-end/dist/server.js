"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = 3000;
app.use(body_parser_1.default.json());
app.get("/", (req, res) => {
    res.send("Hello, world!");
});
app.post("/data", (req, res) => {
    res.json(req.body);
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
