import type { Request, Response } from "express";

const register = async (req: Request, res: Response) => {
  res.json({ message: "Hesabınız oluşturuldu." });
};

const login = async (req: Request, res: Response) => {
  res.json({ message: "Oturumunuz açıldı." });
};

const logout = async (req: Request, res: Response) => {
  res.json({ message: "Oturumunuz kapandı." });
};

const profile = async (req: Request, res: Response) => {
  res.json({ message: "Profil bilgileriniz alındı." });
};

export { register, login, logout, profile };
