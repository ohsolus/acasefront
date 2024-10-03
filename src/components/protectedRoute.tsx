import { User } from "@/types/UserAuth";
import { PropsWithChildren } from "react";
import { useAuth } from "./authProvider";

type ProtectedRouteProps = PropsWithChildren & {
  allowedRoles?: User["role"][];
};

export default function ProtectedRoute({
  allowedRoles,
  children,
}: ProtectedRouteProps) {
  const { currentUser } = useAuth();

  if (currentUser === undefined) {
    return <div>Loading...</div>;
  }

  if (
    currentUser === null ||
    (allowedRoles && !allowedRoles.includes(currentUser.role))
  ) {
    return <div>Permission denied</div>;
  }

  return children;
}
