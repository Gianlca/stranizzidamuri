import React from 'react';
import { Link } from "gatsby"
import Header from "../components/header"
import SEO from "../components/seo";
import Layout from "../components/layout";
import apartmentStyles from './apartment.scss'

export default () => (
    <Layout>
    <SEO title="Contact" />    
    <div className="page-title">
      <div className="container">
        {/* <h1 className="page-title-heading">CONTATTI</h1> */}
      </div>
    </div>
    <h1 className="main_title_in">Contatti</h1>    
    <div style={{ marginTop: `1rem`, marginBottom: `1rem` }} className="container">

    <div className="row">
      <div className="col-md-6">
        <h3>Mettiti in contatto! </h3>
        <p> Via Trappetaro 8, Monte di Pietà, 90134 Palermo, Italia</p>
        <p>Per informazioni o prenotazioni: </p>
        <p> Luigi +39 347 4400347</p>
        <p>Manuela +39 320 0246796</p>
      </div>
      <div className="col-md-6">
      <div class="box_style_1"> 
        <form name="Contact Form" method="POST" netlify-honeypot="bot-field" data-netlify="true">
          <p style={{display: `none`}}>
            <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
          </p>          
          <input type="hidden" name="form-name" value="Contact Form" />
          <div  className="form-group">
            <label htmlFor="InputName">Nome e Cognome</label>
            <input type="text" name="name" id="InputName" className="form-control"  placeholder="Inserisci il tuo nome e cognome"/>
          </div>          
          <div  className="form-group">
            <label htmlFor="InputEmail">Email</label>
            <input type="email" name="email" id="InputEmail" className="form-control"  placeholder="Inserisci la tua email"/>
          </div>
          <div  className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Messaggio</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" name="message" />
          </div>
          <button type="submit" className="btn btn-primary btnSend">Invia</button>
        </form>
        </div>
      </div>
      </div>
      
    </div>
    </Layout>
)