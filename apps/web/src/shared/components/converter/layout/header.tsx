import { Button } from "@ng2react/ui/components/ui/button";
import { ThemeToggle } from "@/shared/components/actions/theme-toggle";

export function Header() {
  return (
    <header className={headerStyles.container}>
      <div className={headerStyles.leftSection}>
        <span className="text-sm font-medium">Current Session</span>
      </div>
      <div className={headerStyles.rightSection}>
        <ThemeToggle />
        <Button size="sm">Login</Button>
      </div>
    </header>
  );
}

const headerStyles = {
  container:
    "sticky top-0 z-10 flex h-14 w-full items-center justify-between border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60",
  leftSection: "flex items-center gap-2",
  rightSection: "flex items-center gap-2",
};
