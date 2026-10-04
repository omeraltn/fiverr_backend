import type { Request, Response } from "express";

const create = async (req: Request, res: Response) => {
  res.json({ message: "Profil oluşturuldu." });
};

const getAll = async (req: Request, res: Response) => {
  res.json({ message: "Hesabınız oluşturuldu." });
};

const getOne = async (req: Request, res: Response) => {
  res.json({ message: "Oturumunuz açıldı." });
};

const deleteOne = async (req: Request, res: Response) => {
  res.json({ message: "Silindi." });
};

export { getAll, getOne, create, deleteOne };
