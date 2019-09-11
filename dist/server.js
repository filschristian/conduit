"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const utils_1 = require("./utils");
const middleware_1 = __importDefault(require("./middleware"));
const services_1 = __importDefault(require("./services"));
const errorHandlers_1 = __importDefault(require("./middleware/errorHandlers"));
const config_1 = require("./config");
process.on("uncaughtException", e => {
    console.log(e);
    process.exit(1);
});
process.on("unhandledRejection", e => {
    console.log(e);
    process.exit(1);
});
const router = express_1.default();
//Apply all middlewares
utils_1.applyMiddleware(middleware_1.default, router);
//Apply all routes
utils_1.applyRoutes(services_1.default, router);
//Apply error handlers
utils_1.applyMiddleware(errorHandlers_1.default, router);
const server = http_1.default.createServer(router);
server.listen(config_1.port, () => console.log(`Server is running on PORT:${config_1.port}...`));
//# sourceMappingURL=server.js.map