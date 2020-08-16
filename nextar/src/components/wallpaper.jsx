import React from 'react'


function Wallpaper(props) {
    return (
        <div>
            <article className="wallpaper">
                <img src={props.src} alt={props.alt} className="wallpaper" />
            </article>
        </div>
    )
}

export default Wallpaper;