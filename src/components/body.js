import React, { Component } from 'react'
import Teclado from '../assets/img/com-6490_x1_1_1.jpg'
import '../components/body.css'

 class body extends Component {
    render() {
        return (
            <>
            <div className="m-5">
            <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="card">
                            <img className="card-img-top imgTec ml-5 " src={Teclado} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title"><strong>Teclado</strong></h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="../pages/carrito.js" className="btn btn-primary">Agregar al carrito</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="card ">
                            <img className="card-img-top imgTec ml-5 " src={Teclado} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title"><strong>Teclado</strong></h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="../pages/carrito.js" className="btn btn-primary">Agregar al carrito</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="card">
                            <img className="card-img-top imgTec ml-5 " src={Teclado} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title"><strong>Teclado</strong></h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="../pages/carrito.js" className="btn btn-primary">Agregar al carrito</a>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
                
            </>
        )
    }
}

export default body