import React from 'react';
import { Link } from "gatsby"
import Header from "../components/header"
import SEO from "../components/seo";
import Layout from "../components/layout";
import Splash from "../images/gatsby-astronaut.png";
export default () => (
    <Layout>
    <SEO title="Contact" />    
    <img src={Splash} alt="" />   
    <div style={{ color: `teal` }}>
    <p>Send us a message!</p>
    </div>
    </Layout>
)