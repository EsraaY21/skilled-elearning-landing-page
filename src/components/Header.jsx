import React from "react";
import LogoDark from "../assets/logo-dark.svg";

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
    </header>
  );
}

// Maximize skill, minimize budget

// Our modern courses across a range of in-demand skills will give you the
// knowledge you need to live the life you want.

// Get Started

//
