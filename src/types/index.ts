export interface ErrorResponse {
  status: string;
  message: string;
  code: string;
  stack?: string;
}

export type UserType = {
  _id: string;
  username: string;
  email: string;
  password: string;
  country: string;
  profilePicture: string;
  isSeller?: boolean;
  phone?: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
};
