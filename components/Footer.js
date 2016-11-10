import React from 'react'
import { Link } from 'react-router'
import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'

const Footer = props =>(
  <footer className="footer">
  <div className="container">
    <div className="site-title-wrapper">
      <h1 className="site-title">
        <Link className="js-ajax-link" title={config.blogTitle} to={prefixLink('/')}>
          {config.blogTitle}
        </Link>
      </h1>
      <a className="button-square button-jump-top js-jump-top" href="#"><i className="fa fa-angle-up"></i></a>
    </div>

    <p className="footer-copyright">
      &copy; 2016 <Link to={prefixLink('/')}>Kapadita.net</Link> / 
      <a href="#">RSS</a>
      <br/>
      <small>Built with Gatsby on GitHub Pages</small>
    </p>
  </div>
</footer>
)

export default Footer