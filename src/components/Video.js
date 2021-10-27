import React from 'react'
import ReactPlayer from 'react-player'

const Video = ({el}) => {
    return (
        <div>
            <ReactPlayer url={el.url} />
            <h2> {el.title} </h2>
            <p> {el.views} </p>
        </div>
    )
}

export default Video
