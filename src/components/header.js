import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import headerStyles from './header.module.scss'
import logo from "../images/logo-stran-fill.svg";

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <div className={headerStyles.headerSubCtn + ' container'}>
    <img className={headerStyles.logo} src={logo} alt="Logo"  />

      <ul className={headerStyles.list}>
        <li><Link
          activeStyle={{ color: "#FFCF00" }}
          to="/" >Home</Link></li>
        <li><Link
          activeStyle={{ color: "#FFCF00" }}
          to="/page-2/" >page 2</Link></li>
        <li><Link
          activeStyle={{ color: "#FFCF00" }}
          to="/about/">about</Link></li>
        <li><Link
          activeStyle={{ color: "#FFCF00" }}
          to="/contact/" >contact</Link></li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
