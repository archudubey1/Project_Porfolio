import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { database } from "./FirebaseConfig";
import { useNavigate } from "react-router-dom";

function ForgotPassword(){
    const history = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const emalVal = e.target.email.value;
        sendPasswordResetEmail(database,emalVal).then(data=>{
            alert("Check your gmail")
            history("/")
        }).catch(err=>{
            alert(err.code)
        })
    }
    return(
        <div className="App">
       <section>
        <div className="container pt-4">

        
            <h1>Forgot Password</h1>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input className="form-control" placeholder="Plese enter your email" name="email" /><br/><br/>
                <button className="btn button-sub">Reset</button>
            </form>
            </div>
       </section>
        </div>
    )
}
export default ForgotPassword;