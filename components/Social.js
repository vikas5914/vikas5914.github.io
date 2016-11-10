import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import { ShareButtons } from 'react-share';

const { FacebookShareButton , TwitterShareButton , GooglePlusShareButton } = ShareButtons;


class Social extends React.Component {


  render () {
    const { post } = this.props
    return (
      <footer className="post-footer clearfix">
      <div className="share">
        <a className="icon-twitter">
          <TwitterShareButton url={`${config.blogUrl}${prefixLink(post.path)}`} title={post.title} via={'KapadiyaVikas'}>
            <i className="fa fa-twitter"></i>
            <span className="hidden">Twitter</span>
          </TwitterShareButton>
        </a>
        <a className="icon-facebook">
          <FacebookShareButton url={`${config.blogUrl}${prefixLink(post.path)}`}>
          <i className="fa fa-facebook"></i>
          <span className="hidden">Facebook</span>
          </FacebookShareButton>
        </a>
        <a className="icon-google-plus">
          <GooglePlusShareButton url={`${config.blogUrl}${prefixLink(post.path)}`}>
          <i className="fa fa-google-plus"></i>
          <span className="hidden">Facebook</span>
          </GooglePlusShareButton>
        </a>
      </div>
    </footer>
    )
  }
}

Social.propTypes = {
  route: React.PropTypes.object
}

Social.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Social