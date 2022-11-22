import React from 'react';
import {NavLink} from 'react-router-dom';


function Landing() {
    return (
        <div>
<NavLink to='./login'><button>Login</button>
</NavLink>
            
              <NavLink to='/register'><button>Register</button></NavLink>
        </div>
    )
}

export default Landing
