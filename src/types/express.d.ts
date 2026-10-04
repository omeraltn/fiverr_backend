// express içerisindeki request interfaceine user tipini ekle

import type { UserType } from "./index.ts";

declare global {
  namespace Express {
    interface Request {
      user: UserType;
    }
  }
}
