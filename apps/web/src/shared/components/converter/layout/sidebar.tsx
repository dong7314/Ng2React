import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@ui/lib/utils";

import { Button } from "@ng2react/ui/components/ui/button";

const sidebarStyles = {
  container: cva(
    "hidden flex-col border-r bg-muted/20 md:flex transition-all duration-300",
    {
      variants: {
        width: {
          default: "w-64",
          collapsed: "w-16",
        },
      },
      defaultVariants: {
        width: "default",
      },
    },
  ),
  logoArea: "flex h-14 items-center border-b px-4 font-bold text-lg",
  menuArea: "flex-1 overflow-auto py-4 px-3 space-y-2",
  footerArea: "mt-auto border-t p-4",
};

interface SidebarProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sidebarStyles.container> {}

export function Sidebar({ className, width, ...props }: SidebarProps) {
  return (
    <aside
      className={cn(sidebarStyles.container({ width }), className)}
      {...props}
    >
      <div className={sidebarStyles.logoArea}>Ng2React</div>
      <div className={sidebarStyles.menuArea}>
        <Button variant="outline" className="w-full justify-start gap-2">
          + New Chat
        </Button>
      </div>
      <div className={sidebarStyles.footerArea}>
        <Button variant="ghost" className="w-full justify-start">
          Settings
        </Button>
      </div>
    </aside>
  );
}
