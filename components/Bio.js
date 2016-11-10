import React from 'react'
import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'

const Bio = props => (
  <p className="blog-description site-bio" dangerouslySetInnerHTML={{__html: config.authorBio}} />
)

export default Bio
