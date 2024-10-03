export type User = {
  id?: any | null;
  email: string;
  password: string;
  role: "admin" | "viewer";
};
