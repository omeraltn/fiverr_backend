export interface ErrorResponse {
  status: string;
  message: string;
  code: string;
  stack?: string;
}
