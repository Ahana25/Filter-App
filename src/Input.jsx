import React from 'react'
import { useState } from 'react'
import Image from './Image'

function Input() {

 let [val,setval]= useState('');


 let UpdateVal=(event)=>
 {
     setval(event.target.value);
    
 }
    return (
        <div>
            <div className="outer_div">
                <label htmlFor="input">
                    <input type="text" placeholder="Search here" value={val} onChange={UpdateVal} />
                </label>
            </div>
            {val===''?'':<Image val={val}/>}
        </div>
    )
}

export default Input
