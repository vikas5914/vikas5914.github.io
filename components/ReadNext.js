import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { prune, include as includes } from 'underscore.string'
import find from 'lodash/find'
import intersect from 'just-intersect'
import { getTags } from 'utils'
import Summary from 'components/Summary'


class ReadNext extends React.Component {
  render () {
    const { pages, post } = this.props
    let { readNext } = post
    let nextPost

    if (readNext) {
      nextPost = find(pages, (page) => includes(page.path, readNext))
    }else {
      readNext = pages
        .filter(p => p.data.tags && p.data.body !== post.body)
        .map(p => {
          if (post.tags) {
            const t = getTags(p)
            p.diff = intersect(post.tags, t).length
          }
          return p
        })
        .sort((a, b) => a.diff - b.diff)
        .slice(-5)
        .sort((a, b) => Math.random() * -0.5)
        .pop()
      if (readNext) {
        readNext = readNext.path
        nextPost = find(pages, (page) => includes(page.path, readNext))
      }
    }

    if (!nextPost) {
      return React.createElement('noscript', null)
    } else {
      nextPost = find(pages, (page) => includes(page.path, readNext.slice(1, -1))
      )

      return (
      <div>
        <hr className="large" />
        <h6>READ THIS NEXT:</h6>
        <h3><Link to={{  pathname: prefixLink(nextPost.path)}} > {nextPost.data.title} </Link></h3>
        <Summary body={nextPost.data.body} />
      </div>
      )
    }
  }
}

ReadNext.propTypes = {
  post: React.PropTypes.object.isRequired,
  pages: React.PropTypes.array
}

export default ReadNext
