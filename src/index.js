import React,{Suspense,lazy} from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router , Switch ,Route } from 'react-router-dom'

/* import './index.css'; */

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.slim';
import 'bootstrap/dist/js/bootstrap';
import 'popper.js/dist/popper';

const Productos = lazy(()=>import('./pages/productos'));
const Carrito = lazy(()=>import('./pages/carrito'))


ReactDOM.render(
  <React.StrictMode>
        <Router>
            <Suspense  fallback={<p>Cargando</p>}>
                <Switch>
                    <Route path='/productos/:productos?' render={props => <Productos {...props}/>}/>
                    <Route path='/carrito/:cars?' render={props => <Carrito {...props}/>}/>
                </Switch>
            </Suspense>
        </Router>
   </React.StrictMode>,
   document.getElementById('root')

);

serviceWorker.unregister();
