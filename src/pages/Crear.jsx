import React from 'react'

export default function Crear() {
    return (
        <>
            <div className="container mt-5 bg-light">
                <h2 className="text-center my-3 pt-5">Crear pelicula</h2>
                <form className="w-50 mx-auto mt-0 p-5">
                    <div className="form-group">                
                        <input type="email" className="form-control my-3" id="exampleInputEmail1" aria-describedby="emailHelp"></input>                        
                        <input type="email" className="form-control my-4" id="exampleInputEmail1" aria-describedby="emailHelp"></input>                        
                        <input type="number" className="form-control my-3" id="exampleInputEmail1" aria-describedby="emailHelp"></input>  
                        <div className="input-group mb-3 mt-4">                           
                            <div className="custom-file">
                                <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"></input>
                                <label className="custom-file-label" for="inputGroupFile01">Choose file</label>
                            </div>
                        </div>                      
                    </div>                
                    <button type="submit" className="btn btn-primary d-block w-100 px-3 py-4">Submit</button>
                </form>
            </div>              
        </>
    )
}
