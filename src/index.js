import React,{Suspense,lazy,useEffect} from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router , Switch ,Route } from 'react-router-dom'

/* import './index.css'; */

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.slim';
import 'bootstrap/dist/js/bootstrap';
import 'popper.js/dist/popper';

const Post = lazy(()=>import('./pages/post'));
const Home = lazy(()=>import('./pages/home'));
const User = lazy(()=>import('./pages/user'));
const Register = lazy(()=>import('./components/register'));



ReactDOM.render(
  <React.StrictMode>   
        <Router>
            <Suspense  fallback={<p>Cargando</p>}>
  
                <Switch>
                    <Route path='/home/:home?' render={props => <Home {...props}/>}/>
                    <Route path='/user/:user?' render={props => < User {...props}/>}/>
                    <Route path='/register/:register?' render={props => < Register {...props}/>}/>
                    <Route path='/post/:post?' render={props => < Post {...props}/>}/>
                </Switch>
            </Suspense>
        </Router>
   </React.StrictMode>,
   document.getElementById('root')


);

serviceWorker.unregister();

