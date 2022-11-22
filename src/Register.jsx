import React from 'react'
import { useState } from 'react'

function Register() {


    let [val,setVal]= useState(
        {
            username:"",
            mail:"",
            phone:"",
            password:""
        }
    )
  let [submitval,setSubmitVal]=useState([])
    let updateVal=(event)=>
    {
        let name=event.target.name;
        let value=event.target.value;
        setVal({...val,[name]:value})
    }

  let submitForm=(event)=>
  {
     event.preventDefault();

     let allVal={...val,id:new Date().getTime().toString()}
     setSubmitVal([...submitval,allVal])

     setVal({username:"",mail:"",phone:"",password:""})

  }

    return (
        <div>
            <div className="register_div">
                <form onSubmit={submitForm} >
                    <div className="input_div">
                        <label htmlFor="input">
                            <input type="text" placeholder="Enter your username" name="username" value={val.username}  onChange={updateVal} />
                        </label>
                    </div>
                    <div className="mail_div">
                        <label htmlFor="mail">
                            <input type="email" placeholder="Enter your mail-id" name="mail" value={val.mail} onChange={updateVal} />
                        </label>
                    </div>
                    <div className="phone_div">
                        <label htmlFor="phone">
                            <input type="number" placeholder="Enter your phone number" name="phone" value={val.phone} onChange={updateVal}/>
                        </label>
                    </div>
                    <div className="password_div">
                        <label htmlFor="password">
                            <input type="password" placeholder="Enter your password" name="password" value={val.password} onChange={updateVal}/>
                        </label>
                    </div>
                    <button>Register Here</button>
                </form>
                <div>
                    {submitval.map((list)=>
                    {
                         return(
                             alert(`${list.username} you have successfully registered!`)
                         )
                    })}

                </div>
                <div>
                <p>Login to your account<a href="/login">Login</a></p>
                <p>Already a registered user? <a href="/login">Click here to login</a></p>
                   
                </div>
            </div>
        </div>
    )
}

export default Register

