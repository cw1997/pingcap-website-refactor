import React from 'react'

import {footerColumns} from '../data/footer'

import './Footer.sass'

export default function(props) {
  // const intl = useIntl();
  // const {locale} = intl;
  const locale = 'en';
  console.log(footerColumns[locale])

  const className = 'Footer';
  const classNameContainer = `${className}-container`;
  const classNameContainerMain = `${classNameContainer}-main`;
  const classNameContainerMainLeft = `${classNameContainerMain}-left`;
  const classNameContainerMainLeftColumn = `${classNameContainerMainLeft}-column`;
  const classNameContainerMainLeftColumnTitle = `${classNameContainerMainLeftColumn}-title`;
  const classNameContainerMainLeftColumnItem = `${classNameContainerMainLeftColumn}-item`;
  const classNameContainerMainRight = `${classNameContainerMain}-right`;
  const classNameContainerMainRightLogo = `${classNameContainerMainRight}-logo`;

  const classNameContainerCopyright = `${classNameContainer}-copyright`;
  const classNameContainerCopyrightText = `${classNameContainerCopyright}-text`;
  const classNameContainerCopyrightSwitchLanguage = `${classNameContainerCopyright}-switch-language`;
  return (
    <footer className={className}>
      <div className={classNameContainer}>
        <div className={classNameContainerMain}>
          <div className={classNameContainerMainLeft}>
            {footerColumns[locale].map((col) => (
              <div className={classNameContainerMainLeftColumn}>
                <div className={classNameContainerMainLeftColumnTitle}>
                  {col.name}
                </div>
                {col.items.map(item => (
                  <div className={classNameContainerMainLeftColumnItem}>
                    <a href={item.link}>{item.name}</a>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className={classNameContainerMainRight}>
            classNameContainerMainRight
          </div>
        </div>
        <div className={classNameContainerCopyright}>
          <div className={classNameContainerCopyrightText}>
            ©2020 PingCAP. All Rights Reserved.
          </div>
          <div className={classNameContainerCopyrightSwitchLanguage}>
            Language
          </div>
        </div>
      </div>
    </footer>
  )
}
