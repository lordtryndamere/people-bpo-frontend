import React from 'react'
import {Link} from 'react-router-dom';
import swal from 'sweetalert'
import  './post.css'

 function post() {
    return (
        <>
             <form onSubmit={handleSubmit}>
                <div className="col-12 p-3  mt-5 d-flex justify-content-center">
                    <div className="col-6 inter ">
                        <div className="form-group ">
                            <h2 className="mb-3"> <strong>Registro</strong></h2>
                            <label for="exampleInputEmail1">NAME</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>

                        <div class="form-group ">
                            <label for="exampleInputPassword1">Last Name</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" />
                        </div>
                        
                        <div class="form-group ">
                            <label for="exampleInputPassword1">User Name</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" />
                        </div>

                        <div class="form-group">
                            <label for="exampleInputPassword1">Email</label>
                            <input type="email" class="form-control" id="exampleInputPassword1" />
                        </div>

                        <div class="form-group ">
                            <label for="exampleInputPassword1">password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                      
                        <div className="col-12 d-flex justify-content-center">
                            <button onClick={()=>{pop()}} type="submit" class="btn btn-warning">Registrar</button>
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                            <Link to="/user">   Inisiar seccion</Link>  
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
function handleSubmit(event) {
    
    event.preventDefault();
  }

function pop() {
    swal({
        title: "Registrado!",
        text: "Usted se ha registrado correctamente!",
        icon: "success",
      });
}

export default post