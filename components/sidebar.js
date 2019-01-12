import ActiveLink from "./activeLink.js"
import Link from "next/link"

import "../styles/sidebar.scss"

export default () => (
  <div className="sidebar">
    <aside className='menu'>
      <div className="logo">
        <Link href="/">
          <img src="../static/logo.svg"/>
        </Link>
      </div>
      <p className='menu-label'>Functions</p>
      <ul className='menu-list'>
        <li>
          <ActiveLink activeClassName='is-active' href="/dino">
            <a>Dino</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink activeClassName='is-active' href="/jd">
            <a>J&amp;D</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink activeClassName='is-active' href="/shop">
            <a>Shop</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink activeClassName='is-active' href="/busses">
            <a>Bus Times</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink activeClassName='is-active' href="/groups">
            <a>Group Allocate</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink activeClassName='is-active' href="/coffee">
            <a>Coffee Night</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink activeClassName='is-active' href="/notify">
            <a>Big Notify!</a>
          </ActiveLink>
        </li>
      </ul>
      <p className='menu-label'>Administration</p>
      <ul className='menu-list'>
        <li>
          <ActiveLink activeClassName='is-active' href="/residents">
            <a>Residents</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink activeClassName='is-active' href="/users">
            <a>Users</a>
          </ActiveLink>
        </li>
        <li>
          <a>Statisitics</a>
        </li>
        <li>
          <a>Conversation</a>
        </li>
      </ul>
      <p className='menu-label'>About</p>
      <ul className='menu-list'>
        <li>
          <ActiveLink activeClassName='is-active' href="/docs">
            <a>Documentation</a>
          </ActiveLink>
        </li>
        <li>
          <a>Credits</a>
        </li>
      </ul>
    </aside>
  </div>
)
