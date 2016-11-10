import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import Footer from 'components/Footer'
import Header from 'components/Header'

class Template extends React.Component {
  render () {
    const { location, children } = this.props

    return (
    <div>
      <div id="wrapper">
      <Header />
      {children}
      </div>
      <Footer />
    </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object,
  route: React.PropTypes.object
}

export default Template
