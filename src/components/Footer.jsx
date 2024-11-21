import LogoLight from "../assets/logo-light.svg";

export default function Footer() {
  return (
    <footer className="section">
      <div className="container">
        <div className="d-flex">
          <img src={LogoLight} className="logo" alt="Logo" />
          <a href="#" className="btn text-7 gradient-2">
            Get Started
          </a>
        </div>
      </div>
    </footer>
  );
}
