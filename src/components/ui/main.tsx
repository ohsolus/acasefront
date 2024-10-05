import { cn } from "@/lib/utils";
import NavBar from "./navbar";

export function Main({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <main className={cn("flex-1", className)}>
      {" "}
      <NavBar />
      {children ?? null}
    </main>
  );
}
