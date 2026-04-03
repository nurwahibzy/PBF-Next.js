import { useRouter } from "next/router";
import Navbar from "../navbar";
import { Roboto } from "next/font/google";

const disableNavbar = ["/auth/login", "/auth/register", "/404"];

type AppShellProps = {
  children: React.ReactNode;
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const { pathname } = useRouter();

  const showNavbar = !disableNavbar.includes(pathname);
  return (
    <main className={roboto.className}>
      {showNavbar && <Navbar />}
      {children}
      <br />
      <footer>
        <p style={{ justifyContent: "center", textAlign: "center" }}>
          © {new Date().getFullYear()} Belajar Next.js
        </p>
      </footer>
    </main>
  );
};

export default AppShell;
