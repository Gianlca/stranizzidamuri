import React from 'react';
import SEO from "../components/seo";
import Layout from "../components/layout";
import Splash from "../images/gatsby-astronaut.png";
export default () => (
    <Layout>
    <SEO title="About" />
    <div style={{ color: `teal` }}>
    <img src={Splash} alt="" />   
        <h1>About Gatsby</h1>
        <p>Such wow. Very React.</p>
    </div>    
    </Layout>
)