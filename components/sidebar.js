import ActiveLink from "./activeLink.js"
import Link from "next/link"

import "../styles/sidebar.scss"

export default () => (
  <div className="sidebar">
    <aside className='menu'>
      <div className="logo">
        <Link route="/">
          <img src="../static/logo.svg"/>
        </Link>
      </div>
      <p className='menu-label'>Functions</p>
      <ul className='menu-list'>
        <li>
          <ActiveLink activeClassName='is-active' route="/dino">
            <a>Dino</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink activeClassName='is-active' route="/jd">
            <a>J&amp;D</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink activeClassName='is-active' route="/shop">
            <a>Shop</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink activeClassName='is-active' route="/busses">
            <a>Bus Times</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink activeClassName='is-active' route="/groups">
            <a>Group Allocate</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink activeClassName='is-active' route="/coffee">
            <a>Coffee Night</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink activeClassName='is-active' route="/notify">
            <a>Big Notify!</a>
          </ActiveLink>
        </li>
      </ul>
      <p className='menu-label'>Administration</p>
      <ul className='menu-list'>
        <li>
          <ActiveLink activeClassName='is-active' route="/residents">
            <a>Residents</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink activeClassName='is-active' route="/users">
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
          <ActiveLink activeClassName='is-active' route="/docs">
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
