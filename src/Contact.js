import { useState } from "react"

export default function Contact() {
    const [contact, setContact]=useState(9);
  function inputfunction(e){
    console.log(e.target.value)
    setContact(e.target.value)
  }
    
    // contact = 10
    
    
    return (<>



    <input type={'text'} onChange={(e)=>inputfunction(e)}/>


    <h1>{contact}</h1>
    </>)
}// <form className="container mt-3">
        //     <div className="mb-3">
        //         <label  className="form-label">Email address</label>
        //         <input type="email" className="form-control"  name="email" id="exampleInputEmail1" />
               
        //     </div>
        //     <div className="mb-3">
        //         <label >Password</label>
        //         <input type="password" className="form-control" name="password" id="exampleInputPassword1" />
        //     </div>
           
        //     <button type="submit" className="btn btn-primary">Submit</button>
        // </form>