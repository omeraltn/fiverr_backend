import { isDevelopment } from "../config/enviroment.js";
import type { ErrorResponse } from "../types/index.js";
import { BaseError } from "../utils/error.js";
import type { Request, Response, NextFunction } from "express";

const errorHandler = (
  err: BaseError | Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // bilinmeyen hata meydana geldiğinde
  if (!(err instanceof BaseError)) {
    console.log("‼️ BİLİNMEYEN HATA", err);

    err = new BaseError(
      err?.message || "Beklenmeyen bir hata oluştu",
      500,
      "INTERNAL_SERVER_ERROR",
    );
  }

  //  Gönderilicek yanıtı hazırla
  const response: ErrorResponse = {
    status: "error",
    message: err.message,
    code: (err as BaseError).errorCode,
  };

  // geliştirme modundaysa hataya stack bilgisine ekle
  if (isDevelopment) {
    response.stack = err.stack as string;
  }

  //clienta yanıt gönder
  res.status((err as BaseError).statusCode).json(response);
};

export default errorHandler;
