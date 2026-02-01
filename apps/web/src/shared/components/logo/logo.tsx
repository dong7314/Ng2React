import * as React from "react";
import { cn } from "@ui/lib/utils";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export function Logo({ className, size = 28, ...props }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Ng2React Icon"
      className={cn(
        "group transition-all duration-300",
        "text-slate-900 dark:text-slate-100",
        "hover:brightness-110 dark:hover:brightness-125",
        className,
      )}
      {...props}
    >
      <defs>
        <linearGradient id="angularGradient" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#FB7185" />
          <stop offset="100%" stopColor="#BE123C" />
        </linearGradient>

        <linearGradient id="reactGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7DD3FC" />
          <stop offset="100%" stopColor="#0369A1" />
        </linearGradient>
      </defs>

      <path
        d="M8 6L4 16L8 26"
        stroke="url(#angularGradient)"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-opacity duration-300 opacity-90 group-hover:opacity-100"
      />

      <path
        d="M24 6L28 16L24 26"
        stroke="url(#reactGradient)"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-opacity duration-300 opacity-90 group-hover:opacity-100"
      />

      <path
        d="M11 16H21M21 16L17 12M21 16L17 20"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.75}
        className="
          transition-transform duration-300 ease-out
          group-hover:translate-x-0.5
        "
      />

      <circle
        cx="16"
        cy="16"
        r="1.5"
        fill="currentColor"
        className="
          transition-all duration-300 ease-out
          opacity-80
          group-hover:opacity-100
          group-hover:translate-x-0.5
        "
      />
    </svg>
  );
}
