import { useState } from "react";
import { cva } from "class-variance-authority";
import { PanelRight, Plus, Settings } from "lucide-react";
import { cn } from "@ui/lib/utils";

import { Button } from "@ng2react/ui/components/ui/button";
import { Logo } from "@/shared/components/logo/logo";

type SidebarProps = React.HTMLAttributes<HTMLDivElement>;

export function Sidebar({ className, ...props }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(sidebarStyles.container({ collapsed }), className)}
      {...props}
    >
      {/* 헤더 영역 */}
      <div className={sidebarStyles.logoArea}>
        <div className="flex items-center">
          <div
            className={cn(
              "relative flex items-center",
              collapsed && "group justify-center",
            )}
          >
            <Logo size={28} />
            {collapsed && (
              <Button
                variant="secondary"
                size="icon"
                className="absolute inset-0 h-7 w-7 m-auto opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => setCollapsed(false)}
              >
                <PanelRight className="h-4 w-4" />
              </Button>
            )}
          </div>
          {!collapsed && (
            <span className="font-bold text-lg ml-2">Ng2React</span>
          )}
        </div>
        {!collapsed && (
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setCollapsed(true)}
          >
            <PanelRight className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* 메뉴 영역 */}
      <div className={sidebarStyles.menuArea}>
        <Button
          variant="outline"
          size={collapsed ? "icon" : "lg"}
          className={cn(!collapsed && "w-full justify-start gap-2")}
        >
          <Plus className="h-4 w-4" />
          {!collapsed && "New Conversion"}
        </Button>
      </div>

      {/* 바닥 영역 */}
      <div className={sidebarStyles.footerArea}>
        <Button
          variant="ghost"
          size={collapsed ? "icon" : "default"}
          className={cn(!collapsed && "w-full justify-start gap-2")}
        >
          <Settings className="h-4 w-4" />
          {!collapsed && "Settings"}
        </Button>
      </div>
    </aside>
  );
}

const sidebarStyles = {
  container: cva(
    "hidden flex-col border-r bg-muted/20 md:flex transition-all duration-300",
    {
      variants: {
        collapsed: {
          false: "w-64",
          true: "w-16",
        },
      },
      defaultVariants: {
        collapsed: false,
      },
    },
  ),
  logoArea:
    "flex h-14 items-center justify-between border-b px-4 gap-3 overflow-hidden",
  menuArea: "overflow-x-hidden flex-1 overflow-auto py-4 px-3 space-y-2",
  footerArea:
    "flex items-center justify-center overflow-x-hidden mt-auto border-t p-2",
};
