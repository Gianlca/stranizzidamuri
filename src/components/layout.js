/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import CookieConsent from "react-cookie-consent"

import Header from "./header"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <CookieConsent style={{ fontSize: "10px" }} buttonText="Ho capito">
          Su questo sito utilizziamo cookie tecnici e, previo tuo consenso,
          cookie di profilazione, nostri e di terze parti, per proporti
          pubblicità in linea con le tue preferenze. Se vuoi saperne di più o
          prestare il consenso solo ad alcuni utilizzi clicca qui. Cliccando in
          un punto qualsiasi dello schermo, effettuando un'azione di scroll o
          chiudendo questo banner, invece, presti il consenso all'uso di tutti i
          cookie
        </CookieConsent>
        <Header siteTitle={data.site.siteMetadata.title} children={children} />
        <div>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Casa vacanze Stranizzi d'amuri 
            {` `}
            {/* <a href="https://www.gatsbyjs.org">Gatsby</a> */}
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
