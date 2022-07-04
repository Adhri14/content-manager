import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="../">
            <h1>Content Manager</h1>
          </a>
          <span className="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-end">
            <Link href="/">
              <a className="navbar-item is-active is-size-5 has-text-weight-semibold">
                Home
              </a>
            </Link>
            <Link href="/about">
              <a className="navbar-item is-size-5 has-text-weight-semibold">
                About
              </a>
            </Link>
            <a className="navbar-item is-size-5 has-text-weight-semibold">
              Features
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
