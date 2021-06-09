import React, { Component } from 'react'
import Header from '../components/header'
import Body from '../components/body'
import Footer from '../components/footer'
import Logo from '../assets/img/React.png'
import '../components/home.css'

 class carrito extends Component {
    render() {
        return (
            <>
                 <Header/>
                  <div className="col-12 d-flex justify-content-center">
                     <img className="logo" src={Logo} alt="" />
                  </div>
                <Footer/>
            </>
        )
    }
}

export default carrito