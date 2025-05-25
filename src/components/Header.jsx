import { Navbar } from "./Navbar";

export function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Vireotech</h1>
        <Navbar />
      </div>
    </header>
  );
}
