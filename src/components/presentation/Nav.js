import React, { Component } from 'react';

export default (props) => {

    return (
    <div>
          <div className="menu-trigger z-depth-2"> 
              <div id="menu-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
          </div>
          
            <nav id="menu" className="menu">
              <div className="menu-navigation">
                  <ul className="full-menu collapsible">

                  <li><a href="iTunes.html" className="no-child">iTunes</a></li>
                  <li><a href="BBC.html" className="no-child">BBC</a></li>
                  <li><a href="Youtube.html" className="no-child">Youtube</a></li>
                  </ul>
              </div>
        </nav>
    </div>
    );
}