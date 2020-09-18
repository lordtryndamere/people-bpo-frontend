import React, { Component } from 'react'
import cars from '../assets/img/cart-148964_1280.png'
import  '../components/header.css'

 class header extends Component {
    render() {
        return (
            <>
                        <div className="col-12 row">
                            <div className="col-7">
                                <h3>logo</h3>
                            </div>
                            <div className="col-5 row">
                                <div className="col-10  d-flex justify-content-end">
                                    <ul className="mt-3">
                                        <li className=""><a href="../pages/productos.js">Inicio</a></li>
                                    </ul>
                                </div>
                                <div className="col-2 ">
                                    <img className="cars" href="../pages/carrito.js" src={cars} alt=""/>
                                </div>
                            </div>
                        </div>
            </>
        )
    }
}

export default header