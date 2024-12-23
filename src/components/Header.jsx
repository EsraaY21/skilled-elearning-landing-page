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

          <div className="hero_images">
            <img
              src={DesktopHero}
              alt="Hero Desktop"
              className="hero_image desktop"
            />
            <img
              src={TabletHero}
              alt="Hero Tablet"
              className="hero_image tablet"
            />
            <img
              src={MobileHero}
              alt="Hero Mobile"
              className="hero_image mobile"
            />
          </div>
        </div>
      </section>
    </header>
  );
}
