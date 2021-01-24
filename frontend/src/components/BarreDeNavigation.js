import React from 'react';
import {AppMenu} from "./AppMenu";

export const BarreDeNavigation = (props) => {
  if (props.mode === 'mobile') {
    return (
        <header className="header-mobile d-block d-lg-none">
          <div className="header-mobile__bar">
              <div className="container-fluid">
                  <div className="header-mobile-inner">
                      <a className="logo" href="index.html">
                          <img src="logo.png" alt="My Meds" />
                      </a>
                      <button className="hamburger hamburger--slider" type="button">
                          <span className="hamburger-box">
                              <span className="hamburger-inner"></span>
                          </span>
                      </button>
                  </div>
              </div>
          </div>
          <nav className="navbar-mobile">
              <div className="container-fluid">
                  <AppMenu mode="mobile"/>
              </div>
          </nav>
        </header>
    );
  } else {
    return (
      <aside className="menu-sidebar d-none d-lg-block">
        <div className="logo">
            <img src="logo.png" alt="My Meds" />
        </div>
        <div className="menu-sidebar__content js-scrollbar1">
            <nav className="navbar-sidebar">
                <AppMenu/>
            </nav>
        </div>
      </aside>
    );
  }
}
