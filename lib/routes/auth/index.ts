// modules/auth/router.ts
import { Router } from "express";
import { AuthRoutes } from "./routes";

export class AuthRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.post("/signup", AuthRoutes.signup);
  }
}
