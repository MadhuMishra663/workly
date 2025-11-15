// const middleware = new Middleware();

// export const api = express.Router();
// api.use(middleware.jwtDecoder);

// api.use("/sign-in", new AdminRouter().router);
import * as express from "express";
import { AuthRouter } from "./auth";
import { AuthMiddleware } from "../middleware/auth";
const middleware = new AuthMiddleware();

export const api = express.Router();
api.use(middleware.jwtDecoder);

api.use("/auth", new AuthRouter().router);
