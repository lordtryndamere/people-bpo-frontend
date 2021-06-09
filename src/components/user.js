import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'

import './post.css'

function User() {

    const [datos, setDatos] = useState({
        email: '',
        password: ''
    })
    const { register,  handleSubmit,formState: { errors } } = useForm();
    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }
    const enviarDatos = (data) => {
        console.log(data);
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit(enviarDatos)}>
                <div className="col-12 p-5 mt-5 d-flex justify-content-center">
                    <div className="col-6 inter ">
                        <div className="form-group ">
                            <h2 className="mb-3"> <strong>Iniciar seción</strong></h2>
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" onChange={handleInputChange} name="email" aria-describedby="emailHelp"
                                 {...register('email', { required: true,pattern:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })}
                            />
             
                          {errors.email?.type === 'required' &&   <span className="text-danger text-small d-block mb-2">  Email requerido  </span>}
                          {errors.email?.type === 'pattern' &&   <span className="text-danger text-small d-block mb-2">  Email invalido </span>}
                        </div>
                        <div class="form-group mb-5">
                            <label for="exampleInputPassword1">Password</label>
                        
                        <input type="password" name="password" class="form-control" onChange={handleInputChange} id="exampleInputPassword1"
                             {...register('password', { required: true,minLength:6 })}
                         />
                 
                            {errors.password &&   <span className="text-danger text-small d-block mb-2">  Contraseña requerida   </span>}
                        </div>

                        <div className="col-12 mb-5 d-flex justify-content-center">
                            <button type="submit" class="btn btn-dark">Submit</button>
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                            <Link to="/register">Registrate</Link>
                        </div>
                    </div>
                </div>
            </form>
        </Fragment>
    )
}



export default User