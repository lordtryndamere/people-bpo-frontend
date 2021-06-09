import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import  './home.css'


class header extends Component {
    render() {
        return (
            <>
                <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                    <a class="navbar-brand" href="/home">MADARA</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link className="mr-2 txt" to="/home"> <strong>Home</strong> </Link>
                            <Link className="mr-2 txt" to="/user"> <strong>User</strong> </Link>
                            <Link className="mr-2 txt" to="/post"> <strong>post</strong> </Link>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

export default header