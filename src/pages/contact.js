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
        <h1 className="page-title-heading">CONTATTI</h1>
      </div>
    </div>
    <div style={{ marginTop: `1rem`, marginBottom: `1rem` }} className="container">
    <div className="row">
      <div className="col-md-6">
        <h3>Mettiti in contatto! </h3>
        <p> 8 Via Trappetaro, Monte di Pietà, 90134 Palermo, Italia </p>
        <p> +39 329 XXXX</p>
        <p>info@XXXX.com</p>
      </div>
      <div className="col-md-6">
        
        <form name="Contact Form" method="POST" netlify-honeypot="bot-field" data-netlify="true">
          <p style={{display: `none`}}>
            <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
          </p>          
          <input type="hidden" name="form-name" value="Contact Form" />
          <div  className="form-group">
            <label htmlFor="InputName">Your Name</label>
            <input type="text" name="name" id="InputName" className="form-control"  placeholder="Enter your name"/>
          </div>          
          <div  className="form-group">
            <label htmlFor="InputEmail">Email address</label>
            <input type="email" name="email" id="InputEmail" className="form-control"  placeholder="Enter email"/>
          </div>
          <div  className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Message:</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" name="message" />
          </div>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      </div>
      </div>
      
    </div>
    </Layout>
)