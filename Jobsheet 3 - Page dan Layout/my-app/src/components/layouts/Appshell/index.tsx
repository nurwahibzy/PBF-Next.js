import Navbar from "../navbar";

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  return (
    <main>
      <Navbar />
      {children}
      <br />
      <footer>
        <p>© {new Date().getFullYear()} Belajar Next.js</p>
      </footer>
    </main>
  );
};

export default AppShell;
