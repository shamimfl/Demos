import React from 'react';
import './Header.css';
import logo from './../../img/logo.svg';

const Header = () => {
  return (
      <div id='nav' className='sticky-lg-top top-0 header'>
        <nav id='navbar' class="navbar navbar-expand-lg ">
          <div class="container">
            <a class="navbar-brand" href="#"><img src={logo} alt="" /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                <li class="nav-item navlink">
                  <a class="nav-link fw-bold text-black" aria-current="page" href="#">Demos</a>
                </li>
                <li class="nav-item navlink">
                  <a class="nav-link fw-bold text-black" href="#">Shop</a>
                </li>
                <li class="nav-item navlink">
                  <a class="nav-link fw-bold text-black" href="#">Blog</a>
                </li>

              </ul>
              <button className="purchase-btn"> Purchase Now $24</button>
            </div>
          </div>
        </nav>
      </div>
  );
};

export default Header;