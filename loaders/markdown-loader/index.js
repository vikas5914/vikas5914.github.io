import frontMatter from 'front-matter' 
import markdownIt from 'markdown-it'
import hljs from 'highlight.js'

const highlight = function (str, lang) {
  if ((lang !== null) && hljs.getLanguage(lang)) {
    try {
      return hljs.highlight(lang, str).value
    } catch (_error) {
      console.error(_error)
    }
  }
  try {
    return hljs.highlightAuto(str).value
  } catch (_error) {
    console.error(_error)
  }
  return ''
}

const md = markdownIt({
  html: true,
  linkify: true,
  typographer: true,
  breaks:true, 
  highlight,
})
  .use(require('markdown-it-implicit-figures'), {
    figcaption: true
  })
  .use(require('markdown-it-link-attributes'), {
    target: '_blank',
    rel: 'noopener noreferrer'
  })
  .use(require('markdown-it-attrs'));
  
md.linkify.tlds('onion', true);
md.linkify.add('git:', 'http:');
md.linkify.add('ftp:', null);
md.set({ fuzzyIP: true });

export default function (content) {
  this.cacheable()
  const meta = frontMatter(content)
  const body = md.render(meta.body)
  const result = Object.assign({}, meta.attributes, {
    body,
  })
  this.value = result
  return `module.exports = ${JSON.stringify(result)}`
}