import { Link, StaticQuery  } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import headerStyles from './header.module.scss'
import logo from "../images/logo-stranizza.svg";
import cx from "classnames";

class Header extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        collapsed: true,
        titlePage:''
      };
    }

    componentDidMount() {
      this.setState({
        titlePage: this.props.children[0].props.title
      });
      window.addEventListener('scroll',() => {
        let checkScroll = window.scrollY;
        if (checkScroll == 0) {
          this.setState({
            collapsed: true,
            titlePage: this.props.children[0].props.title
          });
        } else {
          this.setState({
            collapsed: false,
          });         
        }       
      })
    }

  render() {
      const classScroll = this.state.collapsed ? headerStyles.header :  cx(headerStyles.header, headerStyles.scrolled);
      const home = this.state.titlePage === 'Home' ? headerStyles.home : headerStyles.header
      return (
                
        <header className={classScroll + ' ' + home}>      
        <Navbar className={headerStyles.headerSubCtn} expand="lg" className="container"> 
        <Navbar.Brand>
            <Link to="/"><img className={headerStyles.logo} src={logo} alt="Logo"  /></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  className={headerStyles.toggler + ' navbar-toggler'}/>

        <Navbar.Collapse id="basic-navbar-nav" className="collapse navbar-collapse" >   
        <Nav className={headerStyles.list + ' navbar-nav ml-auto'}>          
              <li><Link activeStyle={{ color: "#FFCF00" }} to="/">Home</Link></li>
              <li><Link activeStyle={{ color: "#FFCF00" }} to="/appartamento">appartamento</Link></li>
              <li><Link
                activeStyle={{ color: "#FFCF00" }}
                to="/contact/">contatti</Link></li>
            </Nav>
            </Navbar.Collapse> 
          </Navbar>
      </header>        
    )
  }
}

// const Header = ({ siteTitle }) => (
//   <header className={headerStyles.header}>
//     <div className={headerStyles.headerSubCtn + ' container'}>
//     <Link
//           activeStyle={{ color: "#FFCF00" }}
//           to="/" ><img className={headerStyles.logo} src={logo} alt="Logo"  /></Link>

//       <ul className={headerStyles.list}>
//         <li><Link
//           activeStyle={{ color: "#FFCF00" }}
//           to="/" >Home</Link></li>
//         <li><Link
//           activeStyle={{ color: "#FFCF00" }}
//           to="/appartamento/" >appartamento</Link></li>
//         {/* <li><Link
//           activeStyle={{ color: "#FFCF00" }}
//           to="/about/">about</Link></li> */}
//         <li><Link
//           activeStyle={{ color: "#FFCF00" }}
//           to="/contact/" >contact</Link></li>
//       </ul>
//     </div>
//   </header>
// )

Header.propTypes = {
  siteTitle: PropTypes.string,
  
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
