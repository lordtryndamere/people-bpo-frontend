import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import axios  from 'axios';
import Swal from 'sweetalert2'
import './post.css'
const BaseURL = 'https://us-central1-node-js-functions.cloudfunctions.net/app'
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
    const enviarDatos =async (data) => {
        console.log(data);
        let dataToJson = {email:data.email, password:data.password}

        try {
            let requestToLogin = await axios.post(BaseURL+"/api/users/create",dataToJson)
            if(requestToLogin.status == 200){
     
                Swal.fire({
                    title: 'User loggind succesufully',
                    text: requestToLogin.data.message,
                    icon: 'success',
                    confirmButtonText: 'Ok',
                    timer:2000
                  })


                  setTimeout(() => {
                    Swal.fire({
                        title: 'Correo de verificacion',
                        text: "Se ah enviado un correo de verificacion, por favor revisa tu bandeja de entrada",
                        icon: 'info',
                        confirmButtonText: 'Ok',
                        timerProgressBar:true,
                        timer:3000
                      })
    
                  }, 2800);
                  
            }else{
                Swal.fire({
                    title: 'Error!',
                    text: 'Do you want to continue',
                    icon: 'warning',
                    confirmButtonText: 'Ok',
                    timer:2000
                  })
            }            
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'Ok',
                timer:2000
              })
        }   
        }

    

    return (
        <Fragment>
            <form onSubmit={handleSubmit(enviarDatos)}>
                <div className="col-12 p-5 mt-5 d-flex justify-content-center">
                    <div className="col-6 inter ">
                        <div className="form-group ">
                            <h2 className="mb-3"> <strong>Iniciar seción/Registrarse</strong></h2>
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
                    
                    </div>
                </div>
            </form>
        </Fragment>
    )
}



export default User