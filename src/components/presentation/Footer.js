import React, { Component } from 'react';

export default (props) => {

  return (
      <footer className="page-footer primary-color">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <p className="center-align grey-text text-lighten-4">Welcome to JCPlayer, the ultimate Music Podcast</p>
              <div className="center-align">
                <i className="ion-social-facebook m-10 white-text"></i>
                <i className="ion-social-twitter m-10 white-text"></i>
                <i className="ion-social-pinterest m-10 white-text"></i>
                <i className="ion-social-dribbble m-10 white-text"></i>
              </div>
            </div>
          </div>
        </div>
            <div className="line white"></div>
              <div className="footer-copyright primary-color">
                <div className="container">
                JCPlayer John Chang
                <a className="grey-text text-lighten-4 right" href="#!">JCPlayer©</a>
            </div>
          </div>
      </footer>
    );
}