import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import Helmet from "react-helmet"
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'
import include from 'underscore.string/include'
import Bio from 'components/Bio'
import Summary from 'components/Summary'
import moment from 'moment'

const docTitle = `${config.blogTitle} by ${config.authorName}`
const imageurl = `${config.blogUrl}/${config.authorPic}`

class BlogIndex extends React.Component {

  render () {
    const pageLinks = []
    // Sort pages.
    const sortedPages = sortBy(this.props.route.pages, (page) => access(page, 'data.date')
    ).reverse()
    sortedPages.forEach((page) => {
      if (access(page, 'file.ext') === 'md' && !include(page.path, '/404')) {
        const title = access(page, 'data.title') || page.path
        pageLinks.push(
          <li key={page.path} className="post-stub post">
            <Link className="js-ajax-link" to={prefixLink(page.path)}>
              <h4 className="post-stub-title">{title}</h4>
              <time className="post-stub-date" dateTime={page.data.date}>
              {moment(page.data.date).format("MMM d, YYYY")}
              </time>
            </Link>
          </li>
        )
      }
    })
    return ( 
      <div id="ajax-container">
      <Helmet
          title={docTitle}
          meta={[
            { name: 'description', content: config.subTitle },
            { property: 'og:type', content: 'website' },
            { property: 'og:title', content: docTitle },
            { property: 'og:description', content: config.authorBio },
            { property: 'og:image', content: imageurl },
            { property: 'og:url', content: config.blogUrl },
            { name: 'twitter:description', content: config.authorBio },
            { name: 'twitter:title', content: docTitle },
            { name: 'twitter:image', content: imageurl }

          ]}
          link={[
            {"rel": "canonical", "href": config.blogUrl},
          ]}
        />
        <div className="container" >
          <h1 className="page-title">{config.blogTitle}</h1>
          <Bio />
          <ol className="post-list">
            {pageLinks}
          </ol>
        </div>
      </div>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object
}

export default BlogIndex
