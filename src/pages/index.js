import React from "react"
import Img from "gatsby-image"
import Carousel from 'react-bootstrap/Carousel';

import Layout from "../components/layout";
import SEO from "../components/seo";
import '../global.scss';
import ImageHome from '../images/first-image.jpg'

const IndexPage = (props) => (
  
  <Layout>
    <SEO title="Home" />
    <div className="splash">
        <div className="sppb-row-overlay"></div>
        <Carousel>
        <Carousel.Item>
        <Img fluid={props.data.imageOne.childImageSharp.fluid} />
          <Carousel.Caption>
            <h1>Casa vacanze Stranizzi d'amuri</h1>
            <p>LA TUA VACANZA A PALERMO INIZIA QUI</p>
          </Carousel.Caption>          
        </Carousel.Item>  
        <Carousel.Item>
        <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
          <Carousel.Caption>
            <h1>Casa vacanze Stranizzi d'amuri</h1>
            <p>LA TUA VACANZA A PALERMO INIZIA QUI</p>
          </Carousel.Caption>                   
        </Carousel.Item>                   
        </Carousel>
    </div>
    {/* <h1  style={{ color: `purple`, fontSize: `24px` }}>Il tuo indimenticabile soggiorno</h1>
    <h3>PRENOTALO ADESSO</h3> */}
    <section className="section">
    <div className="container">
     <div className="row" style={{ alignItems: `center`}}>
        <div className="col-md-6">
        <Img fluid={props.data.imageThree.childImageSharp.fluid} />
        </div>
        <div className="col-md-6">
        <h2>Confort nel cuore di PALERMO</h2>
          <p>La casa vacanza "Stranizzi d'amuri" è un omaggio alla sicilianità, è situata nel centro di Palermo, in un quartiere vivo e popolare: </p>
          <p>il Capo. l'appartamento è confortevole e ottimamente arredato e corredato per offrire agli ospiti una piacevole permanenza.</p>
        </div>
      </div>
      </div>
    </section>
    <section className="section">
    <div className="container">
     <div className="row" style={{ alignItems: `center`}}>
      <div className="col-md-6">
      <h2>Confort nel cuore di PALERMO</h2>
        <p>La casa vacanza "Stranizzi d'amuri" è un omaggio alla sicilianità, è situata nel centro di Palermo, in un quartiere vivo e popolare: </p>
        <p>il Capo. l'appartamento è confortevole e ottimamente arredato e corredato per offrire agli ospiti una piacevole permanenza.</p>
      </div>
      <div className="col-md-6">
      <Img fluid={props.data.imageFourth.childImageSharp.fluid} />
      </div>      
      </div>
      </div>
    </section>    
    <section  style={{ background: `#eeeef0`}} className="section">
    <div className="container">
    <div className="row" style={{ alignItems: `center`}}>
    <div className="col-md-12">
      <div className="clearfix">
        <div className="text-center ">
        <h3 className="title">Key Features</h3>
        <div className="addon-content">This template framework has predefined features and options that you can use for faster template development.It is extremely simple and ready to use just after the installation.</div></div></div></div>  
    <div className="col-md-4"><h3><i className="far fa-address-card"></i>Parcheggio</h3>
Helix Ultimate comes with visual drag & drop layout builder for faster website development.</div>
    <div className="col-md-4"><h3>Internet</h3>
Create an amazing mega menu quite easily using the new mega menu system</div>
    <div className="col-md-4"><h3>Animali</h3>
Struggling is over with the backend because you can do everything from the frontend.</div>
    </div>
    </div>
    </section> 
  
  </Layout>
 
)

export default IndexPage

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "home-splash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1075,  maxHeight: 550 ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "home-splash2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1075,  maxHeight: 550 ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThree: file(relativePath: { eq: "home1-image.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 665 ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFourth: file(relativePath: { eq: "first-image.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 665 ) {
          ...GatsbyImageSharpFluid
        }
      }
    }    
  }
`