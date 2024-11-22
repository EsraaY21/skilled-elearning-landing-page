import LogoLight from "../assets/logo-light.svg";

export default function Footer() {
  return (
    <footer className="section bg-blue-900">
      <div className="container">
        <div className="d-flex">
          <img src={LogoLight} className="logo" alt="Logo" />
          <a href="#" className="btn text-7 gradient-2 btn_overlay">
            Get Started
          </a>
        </div>
      </div>
    </footer>
  );
}
