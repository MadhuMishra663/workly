import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import User from "../models/users";
import httpStatus from "http-status";
import { AuthenticatedRequest } from "../utils/interfaces/authenticatedRequest";
import { ESTATUS } from "../utils/enums/enums";
import { config } from "../utils/configuration/config";
import { ErrorResponse } from "../utils/helpers/apiResponse";

// Define your JWT payload structure explicitly
interface ITokenPayload extends JwtPayload {
  data: {
    _id: string;
    company: string;
    role: "employee" | "hr" | "admin";
  };
}

export class AuthMiddleware {
  private JWT_SECRET: string;

  constructor() {
    this.JWT_SECRET = config.JWT_SECRET || "default_secret";
  }

  /**
   * Decode JWT if present, attach user to req.user
   */
  public jwtDecoder = async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ) => {
    try {
      let authHeader = req.headers.authorization;
      if (!authHeader) return next();

      if (authHeader.startsWith("Bearer ")) {
        authHeader = authHeader.split(" ")[1];
      }

      const decoded = await this.verifyToken(authHeader as string);

      // Type guard
      if (!decoded || typeof decoded !== "object" || !("data" in decoded)) {
        return this.sendForbiddenAccessResponse(res);
      }

      const payload = decoded as ITokenPayload;

      const user = await User.findById(payload.data._id);
      if (!user) {
        return this.sendForbiddenAccessResponse(res);
      }

      if (user.status === ESTATUS.INACTIVE) {
        return ErrorResponse(res, httpStatus.FORBIDDEN, {
          message: "Account blocked by Admin!",
        });
      }

      req.user = user;
      next();
    } catch (error) {
      console.error("JWT Decode Error:", error);
      next();
    }
  };

  /**
   * Protect route: require authentication
   */
  public authMiddleware = (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ) => {
    if (!req.user) {
      return this.sendForbiddenAccessResponse(res);
    }
    next();
  };

  /**
   * Require HR or Admin role
   */
  public hrOrAdminMiddleware = (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ) => {
    if (!req.user || !["hr", "admin"].includes(req.user.role)) {
      return this.sendForbiddenAccessResponse(res);
    }
    next();
  };

  /**
   * Require Admin role
   */
  public adminMiddleware = (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ) => {
    if (!req.user || req.user.role !== "admin") {
      return this.sendForbiddenAccessResponse(res);
    }
    next();
  };

  /**
   * JWT Verify helper
   */
  private verifyToken(token: string): Promise<ITokenPayload> {
    return new Promise((resolve, reject) => {
      jwt.verify(token, this.JWT_SECRET, (err, decoded) => {
        if (err) {
          reject(err);
        } else if (
          decoded &&
          typeof decoded === "object" &&
          "data" in decoded
        ) {
          resolve(decoded as ITokenPayload);
        } else {
          reject(new Error("Invalid token payload"));
        }
      });
    });
  }

  /**
   * Common 401 Response
   */
  private sendForbiddenAccessResponse(res: Response) {
    return ErrorResponse(res, httpStatus.UNAUTHORIZED, {
      message: "Forbidden Access",
    });
  }
}
