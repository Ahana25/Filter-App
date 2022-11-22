import React from 'react'

function Image(props) {
    let img_src=`https://source.unsplash.com/600x200/?${props.val}`
    return (
        <div>
            <div className="img_div">
                <img src={img_src} alt="Random Images generated as per search box" />
            </div>
        </div>
    )
}

export default Image
