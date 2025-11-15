import { Request } from "express";
import { IUser } from "../../models/users";

export interface AuthenticatedRequest extends Request {
  user?: IUser;
}
