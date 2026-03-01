import { useRouter } from "next/router";
import Navbar from "../navbar";


const disableNavbar = ["/auth/login", "/auth/register"];

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell = (props: AppShellProps) => {

  const { children } = props;
  const { pathname } = useRouter();

  const showNavbar = !disableNavbar.includes(pathname);
  return (
    <main>
      {showNavbar && <Navbar />}
      {children}
      <br />
      <footer>
        <p>© {new Date().getFullYear()} Belajar Next.js</p>
      </footer>
    </main>
  );
};

export default AppShell;
