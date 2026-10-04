// temel hata sınıfı
// message / hata kodu gibi bilgileri alıcak
// diğer bütün hata sınıfları sınıftan türüyecek
export class BaseError extends Error {
  statusCode;
  errorCode;

  constructor(message: string, statusCode: number, errorCode: string) {
    super(message);

    this.statusCode = statusCode;
    this.errorCode = errorCode;

    Error.captureStackTrace(this, this.constructor);
  }
}

// HTTP Hatası
export class BadRequest extends BaseError {
  constructor(message = "Geçersiz istek ") {
    super(message, 400, "BAD_REQUEST");
  }
}

// Kimlik Doğrulama Hatası
// ben senin kim olduğunu bilmiyorum durumu
export class Unauthorized extends BaseError {
  constructor(message = "Yetkisiz Erişim ") {
    super(message, 401, "UNAUTHORIZED");
  }
}

// Kimlik doğrulandı ama yetkin yok
export class Forbidden extends BaseError {
  constructor(message = "Bu işlem için yetkiniz yok") {
    super(message, 403, "FORBIDDEN");
  }
}

// Bulunamadı Hatası
export class Not_Found extends BaseError {
  constructor(message = "Kaynak bulunamadı.") {
    super(message, 404, "NOT_FOUND");
  }
}

// Alias for consistency: allow importing `NotFound`
export { Not_Found as NotFound };
