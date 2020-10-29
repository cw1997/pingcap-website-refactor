import React from 'react'
import { useIntl } from 'react-intl'
import { Link, useStaticQuery, graphql } from 'gatsby'

import { navBarData, promotionText } from '../data/navbar'
import './NavBar.sass'

export default function() {
  const imageData = useStaticQuery(
    graphql`
      query {
        BrandSVG: file(relativePath: { eq: "pingcap-logo.svg" }) {
          publicURL
        }
        GitHubSVG: file(relativePath: { eq: "github-icon-on-nav.svg" }) {
          publicURL
        }
      }
    `
  )
  // const intl = useIntl();
  // const {locale} = intl;
  const locale = 'en';

  const className = 'NavBar';
  const classNameContainer = `${className}-container`;
  const classNameContainerLeft = `${classNameContainer}-left`;
  const classNameContainerLeftLogo = `${classNameContainerLeft}-logo`;
  const classNameContainerLeftLink = `${classNameContainerLeft}-link`;
  const classNameContainerLeftLinkItem = `${classNameContainerLeftLink}-item`;
  const classNameContainerRight = `${classNameContainer}-right`;
  const classNameContainerRightButton = `${classNameContainerRight}-button`;
  const classNameContainerRightContact = `${classNameContainerRightButton}-contact`;
  const classNameContainerRightGet = `${classNameContainerRightButton}-get`;
  return (
    <nav className={`${className}`}>
      <div className={`${classNameContainer}`}>

        <div className={`${classNameContainerLeft}`}>
          <div className={`${classNameContainerLeftLogo}`}>
            <Link to={'/'}>
              <img src={imageData.BrandSVG.publicURL} alt=""/>
            </Link>
          </div>
          <ul className={`${classNameContainerLeftLink}`}>
            {navBarData.linkItems[locale].map((item, index) => (
              <li className={`${classNameContainerLeftLinkItem}`}>
                <Link to={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${classNameContainerRight}`}>
          <Link to={navBarData.contactUs[locale].href} className={`${classNameContainerRightContact}`}>
            {navBarData.contactUs[locale].name}
          </Link>
          <Link to={navBarData.downloadTiDB[locale].href} className={`${classNameContainerRightGet}`}>
            {navBarData.downloadTiDB[locale].name}
          </Link>
        </div>
      </div>
    </nav>
  )
}
