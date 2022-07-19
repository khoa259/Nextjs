import Link from 'next/link'
import React from 'react'
import { MenuList } from './data-menu'
import style from './header.module.scss'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className={style.menu}>
      <ul>
        {MenuList.map((menu, index) => (
          <li key={index}>
            <Link href={menu.path}>
              <a className={style.menu_item}>{menu.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Header