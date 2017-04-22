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

                  <li><a href="/itunes" className="no-child">itunes</a></li>
                  <li><a href="/news" className="no-child">News</a></li>
                  <li><a href="/videos" className="no-child">Videos</a></li>
                  </ul>
              </div>
        </nav>
    </div>
    );
}