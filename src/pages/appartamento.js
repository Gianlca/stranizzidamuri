import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Apartment from "../images/apartment.jpg";
import apartmentStyles from './apartment.scss'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="page-title">
      <div className="container">
        <h1 className="page-title-heading">L'appartamento</h1>
      </div>
    </div>
    {/* <img src={Apartment} alt="" />   
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p> */}
    {/* <Link to="/">Go back to the homepage</Link> */}
  </Layout>
)

export default SecondPage
