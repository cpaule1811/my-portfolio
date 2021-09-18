import Sidebar from "./sidebar";

export default function Layout({ children }) {
  return (
    <><div className="yellow-background" />
      <div className="background-blue" />
      
      <Sidebar />
      <main className="main">{children}</main>
    </>
  );
}
