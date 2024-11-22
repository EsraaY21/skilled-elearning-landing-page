import React from "react";
import LogoDark from "../assets/logo-dark.svg";
import DesktopHero from "../assets/image-hero-desktop@2x.webp";
import TabletHero from "../assets/image-hero-tablet@2x.webp";
import MobileHero from "../assets/image-hero-mobile@2x.webp";

export default function Header() {
  return (
    <header>
      <nav className="section">
        <div className="container">
          <div className="d-flex">
            <img src={LogoDark} className="logo" alt="Logo" />
            <a href="#" className="btn text-7 bg-blue-900">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      <section className="hero_section">
        <div className="container hero">
          <div className="hero_content">
            <h1 className="text-1">Maximize skill, minimize budget</h1>
            <p className="text-5">
              Our modern courses across a range of in-demand skills will give
              you the knowledge you need to live the life you want.
            </p>
            <a href="#" className="btn text-7 gradient-1 btn_overlay">
              Get Started
            </a>
          </div>

          <picture>
            <source
              media="(min-width: 75em)"
              srcset={DesktopHero}
              width="2092"
              height="1876"
            />
            <source
              media="(min-width: 50.625em)"
              srcset={TabletHero}
              width="695"
              height="723"
            />
            <img src={MobileHero} width="870" height="818" alt="Hero Image" />
          </picture>
        </div>
      </section>
    </header>
  );
}
