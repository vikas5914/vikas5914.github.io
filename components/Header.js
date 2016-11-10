import React from 'react'
import { Link } from 'react-router'
import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'

const Header = props => (
  <header className="site-header">
  <div className="container">
    <div className="site-title-wrapper">
      <Link className="site-logo js-ajax-link" title={ config.blogTitle } to={prefixLink('/')} >
        <div className="site-avatar"></div>
      </Link>
    </div>

    <ul className="site-nav">
      <li className="site-nav-item">
        <a className="js-ajax-link" title="GitHub" href={ config.github_url } target="_blank">
          <i className="fa fa-github-square"></i>
        </a>
      </li>

      <li className="site-nav-item">
        <a className="js-ajax-link" title="Twitter" href={ config.twitter_url } target="_blank">
          <i className="fa fa-twitter-square"></i>
        </a>
      </li>

      <li className="site-nav-item">
        <a className="js-ajax-link" title="Instagram" href={ config.instagram_url } target="_blank">
          <i className="fa fa-instagram"></i>
        </a>
      </li>
    </ul>
  </div>
</header>
)

export default Header