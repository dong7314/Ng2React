import { Button } from "@ng2react/ui/components/ui/button";

const styles = {
  container: "flex h-screen w-full items-center justify-center bg-muted/40",
  card: "w-full max-w-sm space-y-4 rounded-lg border bg-card p-6 shadow-sm",
  header: "space-y-2 text-center",
  title: "text-2xl font-bold",
  desc: "text-sm text-muted-foreground",
};

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h1 className={styles.title}>Ng2React</h1>
          <p className={styles.desc}>Sign in to convert your components</p>
        </div>
        <Button className="w-full" size="lg">
          Sign In with SSO
        </Button>
      </div>
    </div>
  );
}
