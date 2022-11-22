import React from 'react'
import { useHistory } from 'react-router-dom'

function Error() {
    let history= useHistory();
  let GoBack=()=>
  {
      history.push('/');
}

    return (
        <div>
            <h3>Oops!! 404 Error page not found.</h3>
            <button onClick={GoBack}>Go Back</button>

        </div>
    )
}

export default Error
