import React from "react"
import Img from "gatsby-image";
import Carousel from 'react-bootstrap/Carousel';
import Layout from "../components/layout";
import SEO from "../components/seo";
import '../global.scss';
import Bus from '../images/bus.svg'
import Parks from '../images/parking.svg'
import Wifi from '../images/wifi.svg'
import Pets from '../images/guide-dog.svg'
import Monuments from '../images/monument.svg'
import Route from '../images/route.svg'
import Menu from '../images/menu.svg'
const IndexPage = (props) => (
  
  <Layout>
    <SEO title="Home" />
    <div className="splash">
        <div className="row-overlay"></div>
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
    {/* <section className="section">
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
    </section>     */}
    <section  style={{ background: `#eeeef0`}} className="section">
        <div className="container">
        <div className="row" style={{ alignItems: `center`}}>
        <div className="col-md-12">
          <div className="clearfix">
            <div className="text-center central-container">
                <h3 className="title title-heading">Caratteristiche principali</h3>
            {/* <div className="addon-content">This template framework has predefined features and options that you can use for faster template development.It is extremely simple and ready to use just after the installation.</div> */}
            </div>
            </div>
            </div>  
        <div className="col-md-4 text-center item" >
        <span className="img-container ">  
          <img src={Parks} alt="Parks" />
        </span>
        <h3>Parcheggio</h3>
        Possibilità di parcheggio in strada
    </div>
        <div className="col-md-4 text-center item">
        <span className="img-container">    
          <img src={Wifi} alt="Wifi" />
        </span>
        <h3> Internet</h3>
        Gratis! Internet WiFi disponibile gratuitamente in tutta la struttura.</div>
        <div className="col-md-4 text-center item">
        <span className="img-container">      
          <img src={Pets} alt="Pets" />
        </span>
        <h3>Pets</h3>
        Animali ammessi. Potrebbe essere richiesto un supplemento</div>
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
    <section  style={{ background: `rgba(255, 207, 0,0.6)`}} className="section">
    <div className="text-center central-container">
        <h3 className="title-heading text-center">A pochi passi da noi </h3>
    </div>
    <div className="container">
      <div className="row text-center">
        <div className="col-md-4 item">
          <div className="addon-content text-center">
            <span className="img-container">
              <img src={Monuments} alt="Monuments" />
            </span>
            <div className="media-content">
                <h4 className="addon-title feature-box-title">Monumenti e Attrazioni</h4>
            </div>
          </div>
        </div>
        <div className="col-md-4 item">
          <div className="addon-content text-center">
            <span className="img-container">
            <img src={Menu} alt="Menu" />
            </span>
            <div className="media-content">
                <h4 className="addon-title feature-box-title">Ristoranti e Negozi alimentari</h4>
            </div>
          </div>
        </div>
        <div className="col-md-4 item">
          <div className="addon-content text-center">
            <span className="img-container">
              <img src={Route} alt="Route" />
            </span>
            <div className="media-content">
                <h4 className="addon-title feature-box-title">Aeroporti e Stazioni</h4>
            </div>
          </div>
        </div>            
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
    imageFiveth: file(relativePath: { eq: "bus.svg" }) {
      childImageSharp {
        fluid(maxWidth: 665 ) {
          ...GatsbyImageSharpFluid
        }
      }
    }       
  }
`