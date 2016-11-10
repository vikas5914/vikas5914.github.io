import Feed from 'feed';
import { processFile as parseMd } from 'md-yaml-json';
import { parse as parseToml } from 'toml';
import { load as parseHtml } from 'cheerio';
import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import moment from 'moment';

const isBlogPost = path => path && path.indexOf('/') >= 0 && path !== '/';

const config = parseToml(readFileSync(`${resolve(__dirname, 'config.toml')}`).toString());

const author = {
  name: config.authorName,
  email: config.email,
  link: `${config.blogUrl}/about`
};

export default function generateFeed(pages) {
  const now = moment(new Date());

  // Instantiate new Feed
  const feed = new Feed({
    title: config.blogTitle,
    description: config.description,
    id: `${config.blogUrl}/`,
    link: config.blogUrl,
    copyright: `All rights reserved  ${now.format('YYYY')}, Siddharth Jain`,
    updated: now.toJSON(),
    author
  });

  writeFileSync(`${resolve(__dirname, 'public/atom.xml')}`, feed.render('atom-1.0'));
}