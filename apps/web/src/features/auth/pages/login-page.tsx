import clsx from "clsx";
import { useNavigate } from "react-router-dom";

import NaverIcon from "@/assets/company-logo/naver.svg";
import KakaoIcon from "@/assets/company-logo/kakao.svg";
import GoogleIcon from "@/assets/company-logo/google.svg";
import GithubIcon from "@/assets/company-logo/github.svg";

import { Logo } from "@/shared/components/logo/logo";
import { Button } from "@ng2react/ui/components/ui/button";
import { ThemeToggle } from "@/shared/components/actions/theme-toggle";

export default function LoginPage() {
  const navigate = useNavigate();

  // todo
  // 임시 페이지 이동 로직 구현
  function moveToConverterPage() {
    navigate("/");
  }

  return (
    <div className={styles.container}>
      <div className={styles.toggleContainer}>
        <ThemeToggle />
      </div>
      <div className={styles.header}>
        <div className={styles.logoBox}>
          <Logo size={80} />
        </div>
        <h1 className={styles.title}>Ng2React</h1>
        <p className={styles.desc}>
          Convert Angular components to React with AI
        </p>
      </div>
      <div className={styles.card}>
        <h2 className={styles.signHeader}>Sign in to continue</h2>
        <Button
          className="w-full"
          variant="gray"
          size="lg"
          full="full"
          onClick={moveToConverterPage}
        >
          <img src={GoogleIcon} alt="Google login" className={styles.icon} />
          Continue with Google
        </Button>
        <Button
          variant="panel"
          size="lg"
          full="full"
          onClick={moveToConverterPage}
        >
          <img src={GithubIcon} alt="Github login" className={styles.icon} />
          Continue with Github
        </Button>
        <Button
          variant="panel"
          size="lg"
          full="full"
          className={clsx("bg-[#03A94D]", "hover:bg-[#038f42]", "text-white")}
          onClick={moveToConverterPage}
        >
          <img src={NaverIcon} alt="Naver login" className={styles.iconSmall} />
          Continue with Naver
        </Button>
        <Button
          variant="panel"
          size="lg"
          full="full"
          className={clsx(
            "bg-[#FEE500]",
            "hover:bg-[#e4cd01]",
            "text-[rgba(0,0,0,0.85)]",
          )}
          onClick={moveToConverterPage}
        >
          <img
            src={KakaoIcon}
            alt="Kakao login"
            className={clsx(styles.icon, "mt-[0.125rem]")}
          />
          Continue with Kakao
        </Button>
      </div>
    </div>
  );
}

const styles = {
  container:
    "relative flex flex-col h-screen w-full items-center justify-center bg-background",
  toggleContainer: "absolute top-6 right-6",
  header: "mb-8 text-center",
  logoBox: "inline-flex p-1 mb-5 border-[2px] rounded-3xl",
  title: "mb-1 text-2xl font-bold",
  desc: "text-muted-foreground font-light",
  card: "w-full max-w-sm space-y-4 rounded-lg border bg-card p-6 shadow-sm",
  signHeader: "text-center text-lg font-semibold",
  icon: "w-6 h-6",
  iconSmall: "w-[1.125rem] h-[1.125rem]",
};
