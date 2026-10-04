import type { Request, Response, NextFunction } from "express";

type AsyncControlller = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<void>;

const catchAsync = (fn: AsyncControlller) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

export default catchAsync;
