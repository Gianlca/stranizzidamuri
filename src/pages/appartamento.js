import React, { Component } from "react"

import Img from "gatsby-image"
import OwlCarousel from "react-owl-carousel"
import "owl.carousel/dist/assets/owl.carousel.css"
import "owl.carousel/dist/assets/owl.theme.default.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import apartmentStyles from "./apartment.scss"

class SecondPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { mounted: false }
  }
  componentDidMount() {
    this.setState({ mounted: true })
  }
  render() {
    return (
      <Layout>
        <SEO title="Appartamento" />
        {/* <div className="page-title">
        <div className="container">
          <h1 className="page-title-heading">L'appartamento</h1>
        </div>
      </div>  */}

        {this.state.mounted ? (
          <OwlCarousel
            className="owl-theme"
            margin={5}
            center={true}
            items={2}
            loop={true}
            nav
            autoplay
            autoplayTimeout={6000}
            autoplaySpeed={2000}
            dotsSpeed={2000}
            navSpeed={2000}
            autoplayHoverPause
            animateIn
            animateOut
            responsiveClass
            responsive={{
              0: {
                items: 1,
              },
              600: {
                items: 3,
              },
              1000: {
                items: 2,
                nav: false,
              },
            }}
          >
            <div className="item">
              <Img fluid={this.props.data.imageOne.childImageSharp.fluid} />
              <div className="caption">
                <h3>Fantastic living room</h3>
              </div>
            </div>
            <div className="item">
              <Img fluid={this.props.data.imageTwo.childImageSharp.fluid} />
              <div className="caption">
                <h3>Well furnished</h3>
              </div>
            </div>
            <div className="item">
              <Img fluid={this.props.data.imageThree.childImageSharp.fluid} />
              <div className="caption">
                <h3>Nice kicthen</h3>
              </div>
            </div>
            <div className="item">
              <Img fluid={this.props.data.imageFourth.childImageSharp.fluid} />
              <div className="caption">
                <h3>Equiped bathroom</h3>
              </div>
            </div>
            <div className="item">
              <Img fluid={this.props.data.imageFiveth.childImageSharp.fluid} />
              <div className="caption">
                <h3>Lovely bedroom</h3>
              </div>
            </div>
          </OwlCarousel>
        ) : null}
        <h1 className="main_title_in">L'appartamento</h1>
        <div className="container add_bottom_60">
          <div className="row">
            <div className="col-md-8">
              <div id="single_room_feat">
                <ul>
                  <li>
                    <i className="icon_set_1_icon-7"></i>Wifi
                  </li>
                  <li>
                    <i className="icon_set_2_icon-116"></i>TV a schermo piatto
                  </li>
                  <li>
                    <i className="icon_set_2_icon-104"></i>Letto matrimoniale
                  </li>
                  <li>
                    <i className="icon_set_2_icon-118"></i>Doccia
                  </li>
                  <li>
                    <i className="icon_set_2_icon-106"></i>Cassaforte
                  </li>
                </ul>
              </div>
              <div className="row">
                <div className="col-md-9">
                  <p>
                    Confortevole appartamento, si trova al Capo, antico e noto
                    quartiere del centro storico di Palermo. L'adiacente mercato
                    "il Capo", con un labirinto di vie, è ricco di umanità, di
                    colori e di tradizioni , dove lo street food è assolutamente
                    da provare, da gustare: sfincionelli, pane ca meusa, pane e
                    panelle, olive condite ... La posizione della casa vacanza è
                    ottimale per raggiungere a piedi i principali monumenti
                    della città: la Cattedrale, il Teatro Massimo, il Palazzo
                    dei Normanni, la Chiesa della Martorana, Piazza Pretoria, …
                    L'appartamento, ha i soffitti con travi a vista, è al
                    secondo piano di una palazzina appena ristrutturata, in una
                    via tranquilla e popolare. La casa è composta da un
                    soggiorno con angolo cottura e divano letto per due persone,
                    da una stanza da letto indipendente con letto matrimoniale e
                    da un bagno privato.
                  </p>
                  <h4>Caratteristiche</h4>
                  <p>
                    A disposizione degli ospiti vi sono impianto hifi, tv a
                    schermo piatto, wifi, cucina attrezzata: forno, piano di
                    cottura ad induzione, frigorifero, microonde, tostiera,
                    bollitore, moka, pentole e stoviglie, bagno con bidet e
                    doccia, phone, prodotti per la pulizia personale,
                    asciugamani e lenzuola.
                  </p>
                  <div className="row">
                    <div className="col-md-4 col-sm-4">
                      <ul className="list_ok">
                        <li>Macchina caffè</li>
                        <li>Wifi</li>
                        <li>Forno</li>
                        <li>Microonde</li>
                      </ul>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <ul className="list_ok">
                        <li>Frigorifero</li>
                        <li>Asciugacapelli</li>
                        <li>Accappatoio</li>
                        <li>Prodotti da bagno</li>
                      </ul>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <ul className="list_ok">
                        <li>DVD</li>
                        <li>Aria condizionata</li>
                        <li>Tv</li>
                        <li>Freezer</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4" id="sidebar">
              <h3>Invia una richiesta</h3>
              <div class="box_style_1">
                <div id="message-booking">
                  <form
                    name="Contact Form"
                    method="POST"
                    netlify-honeypot="bot-field"
                    data-netlify="true"
                  >
                    <p style={{ display: `none` }}>
                      <label>
                        Don’t fill this out if you're human:{" "}
                        <input name="bot-field" />
                      </label>
                    </p>
                    <input
                      type="hidden"
                      name="form-name"
                      value="Contact Form"
                    />
                    <div className="form-group">
                      <label htmlFor="InputName">Il tuo Nome</label>
                      <input
                        type="text"
                        name="name"
                        id="InputName"
                        className="form-control"
                        placeholder="Inserisci il tuo nome"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="InputEmail">La tua Email</label>
                      <input
                        type="email"
                        name="email"
                        id="InputEmail"
                        className="form-control"
                        placeholder="Inserisci la tua email"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlTextarea1">
                        Messaggio:
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        name="message"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary btnSend">
                      Invia
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default SecondPage

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "NiceLiving.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "ArtDesign.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThree: file(relativePath: { eq: "NiceKitchen.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFourth: file(relativePath: { eq: "EquipedBath.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFiveth: file(relativePath: { eq: "FantasticBedRoom.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
