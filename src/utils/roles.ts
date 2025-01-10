import { Roles } from "@/types/globals";
import { auth } from "@clerk/nextjs/server";

export const checkRole = async (role: Roles) => {
  const { sessionClaims } = await auth();
  return sessionClaims?.metadata.role === role.toUpperCase();
};

export const getRole = async () => {
  const { sessionClaims } = await auth();

  const role = sessionClaims?.metadata.role?.toLowerCase();

  return role;
};