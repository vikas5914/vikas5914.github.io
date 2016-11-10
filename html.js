import React from 'react'
import Helmet from "react-helmet"

import { prefixLink } from 'gatsby-helpers'

const BUILD_TIME = new Date().getTime()

module.exports = React.createClass({
  displayName: 'HTML',
  propTypes: {
    body: React.PropTypes.string,
  },
  render () {
    const head = Helmet.rewind()

    const { body } = this.props
    const font = <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,400,600,700,300&subset=latin,cyrillic-ext,latin-ext,cyrillic' rel='stylesheet' type='text/css' />
    
    let css
    if (process.env.NODE_ENV === 'production') {
      css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          />
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {head.link.toComponent()}
          <meta name='robots' content='index, follow' />
          <meta name='author' content='Vikas Kapadiya' />

          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:creator' content='@KapadiyaVikas' />

          <meta property='fb:app_id' content='1206845292661168' />
          <meta property="og:locale" content="en_US" />
          <meta property='og:site_name' content="Vikas Kapadiya's Blog" />

          <link rel="shortcut icon" href="https://www.kapadiya.net/favicon.ico" />
 
          <link rel="shortcut icon" href="https://www.kapadiya.net/favicon.png" />
          
          <meta name="google-site-verification" content="2Spm6dCu5MJpUixzMOQxUBtmI1n7czwtYyZn5bnfIWA" />
          <meta name="msvalidate.01" content="D54E5C9A609CF0A37D54505CCA07D332" />
          {css}
          {font}
        </head>
        <body className="home-template">
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: body }} />
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
        </body>
      </html>
    )
  },
})
