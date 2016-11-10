import React from 'react'
import moment from 'moment'
import Helmet from "react-helmet"
import { fixLinks } from 'utils'
import { prefixLink } from 'gatsby-helpers'
import ReadNext from 'components/ReadNext'
import Social from 'components/Social'
import { config } from 'config'

const DisqusThread = require('components/disqus.js')

import '../static/css/normalize.css'
import 'static/css/base.css'
import 'static/css/highlight.css'
import '../static/fonts/fontawesome/style.css'


class MarkdownWrapper extends React.Component {
  componentDidMount () {
    fixLinks(this.refs.markdown, this.context.router)
  }

  render () {
    const { route } = this.props
    const post = route.page.data
    const docTitle = `${post.title} - ${config.blogTitle}`
    const imageurl = post.coverimage ? `${config.blogUrl}${prefixLink(route.page.path)}${post.coverimage}` : `${config.blogUrl}/${config.authorPic}`
    const docDesc =  post.description ? post.description : config.subTitle
    return (
      <div className="container">
      <Helmet
          title={docTitle}
          meta={[
            { name: 'description', content: docDesc },
            { property: 'og:type', content: 'website' },
            { property: 'og:title', content: docTitle },
            { property: 'og:description', content: docDesc },
            { property: 'og:image', content: imageurl },
            { property: 'og:url', content: config.blogUrl + prefixLink(route.page.path)},
            { name: 'twitter:description', content: config.description },
            { name: 'twitter:title', content: docTitle },
            { name: 'twitter:image', content: imageurl },
          ]}
          link={[
            {"rel": "canonical", "href": config.blogUrl + prefixLink(route.page.path)},
          ]}
        />
        <article className="post-container post">
          <header className="post-header">
            <h1 className="post-title">{post.title}</h1>
            <p className="post-date">Published
              <time dateTime={post.date}> 
                {moment(post.date).format("MMM d, YYYY")}
                </time>
              <strong> by {config.authorName}</strong>
            </p>
          </header>

          <div className="post-content clearfix" ref="markdown" dangerouslySetInnerHTML={{__html: post.body}} />
          <Social post={route.page}/>
          <ReadNext post={post} pages={route.pages} />
          <section className="comments">
          <hr className="large" />
          {config.disqusShortname ? <DisqusThread
                                      shortname={config.disqusShortname}
                                      url={`${config.blogUrl}${prefixLink(route.page.path)}`} /> : null}
          </section>
          
        </article>
      </div>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object
}

MarkdownWrapper.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default MarkdownWrapper
