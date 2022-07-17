import Link from 'next/link'
import React from 'react'
import style from './header.module.scss'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className={style.menu}>
        <ul>
            <li><Link href="/"><a className={style.menu_item}>Home</a></Link></li>
            <li><Link href="/products"><a className={style.menu_item}>Product</a></Link></li>
            <li><Link href="/about"><a className={style.menu_item}>About</a></Link></li>
            <li><Link href="/signin"><a className={style.menu_item}>Log-in</a></Link></li>
        </ul>
    </div>
  )
}

export default Header