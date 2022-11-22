import React from 'react'
import { useState } from 'react'
// import {useHistory} from 'react-router-dom';
function Form() {
    // let history= useHistory();
    let [mail,setMail]= useState('');
    let [pass,setPass]= useState('');
    let [user,setUser]= useState('');
    let [newval,setNewVal]=useState([]);


  let updateMail=(event)=>
  {
     setMail(event.target.value)
  }

  let updatePassword=(event)=>
  {
    event.preventDefault();
     setPass(event.target.value)
  }
  let updateUser=(event)=>
  {
    event.preventDefault();
     setUser(event.target.value)
  }

  let AddUser=(event)=>
  {
      event.preventDefault();
    let newEntry={
        email:mail,
        password:pass,
        username:user,
    };
    setNewVal([...newval,newEntry]);
}

    return (
        <div>
            <div className="form_div">
                <form onSubmit={AddUser}>
                <div className="input_div">
                        <label htmlFor="username">Username
                            <input type="text" name="username" id="username" placeholder="Enter your username" value={user} onChange={updateUser} required="This is an important field"/>
                        </label>
                        </div>
                    <div className="input_div">
                        <label htmlFor="email">Email id
                            <input type="email" name="email" id="email" placeholder="Enter your mail id" value={mail} onChange={updateMail} />
                        </label>
                    </div>
                    <div className="mail_div">
                        <label htmlFor="password">Password
                            <input type="password" name="password" id="password" placeholder="Enter your password" value={pass} onChange={updatePassword} />
                        </label>
                    </div>
                   
                    <button>Login</button>
                </form>
                <div>
                    {newval.map((list)=>
                    {
                         return (
                            alert(`Welcome back ${list.username}`)
                         )
                    })}
                    <a href="/home">Visit Home</a>
                </div>
            </div>
        </div>
    )
}

export default Form
