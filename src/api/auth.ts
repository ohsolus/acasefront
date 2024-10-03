import { User } from "@/types/UserAuth";

const testUser: User = {
  id: null,
  email: "admin@gmail.com",
  password: "654321",
  role: "viewer",
};

export async function getUser() {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const authToken = generateAuthToken();

  return [200, { authToken, user: testUser }] as const;
}

export async function login() {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const authToken = generateAuthToken();

  return [200, { authToken, user: testUser }] as const;
}

function generateAuthToken() {
  return Math.random().toString(36).substring(2);
}
