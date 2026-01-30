import { ThemeProvider as NextThemesProvider } from "next-themes";

// 스타일 관련 로직이 없으므로 깔끔하게 Provider만 반환
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
