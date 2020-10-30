import React from 'react'
// import Link from '../components/IntlLink'
import {Link} from 'gatsby'

const navBarData = {
  linkItems: {
    en: [
      {
        name: 'TiDB',
        href: '/products/tidb',
      },
      {
        name: 'TiDB Cloud',
        href: '/products/tidbcloud',
      },
      {
        name: 'Case Studies',
        href: '/case-studies',
      },
      {
        name: 'Docs',
        href: 'https://docs.pingcap.com/tidb/stable',
        outbound: true,
      },
      {
        name: 'Blog',
        href: '/blog',
      },
      {
        name: 'Community',
        href: '/community',
      },
      {
        name: 'About',
        href: '/about',
      },
    ],
    zh: [
      {
        name: '文档',
        href: 'https://docs.pingcap.com/zh/tidb/stable',
        outbound: true,
      },
      {
        name: '案例',
        href: '/case-studies',
      },
      {
        name: '社区',
        href: '/community',
      },
      {
        name: '博客',
        href: '/blog',
      },
      {
        name: '问答',
        href: 'https://asktug.com',
        outbound: true,
      },
      {
        name: 'University',
        href: 'https://university.pingcap.com',
        outbound: true,
      },
      {
        name: '关于',
        href: '/about',
      },
    ],
  },
  contactUs: {
    en: {
      name: 'CONTACT US',
      href: '/contact-us',
    },
    zh: {
      name: '联系我们',
      href: '/contact-us',
    },
  },
  downloadTiDB: {
    en: {
      name: 'GET TiDB',
      href: '/download',
    },
    zh: {
      name: '下载试用',
      href: '/download',
    },
  },
}

// to hide promotion, uncomment:
// const promotionText = null
const promotionText = (
  <>
    Join the TiDB Community Slack channel{' '}
    <Link
      to="https://slack.tidb.io/invite?team=tidb-community&channel=everyone&ref=pingcap"
      type="outBoundLink"
    >
      &nbsp;HERE&nbsp;
    </Link>{' '}
    to interact with the community!
  </>
)

export { navBarData, promotionText }
