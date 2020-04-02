import React from "react"
import video1 from '../assets/sample_movie.mp4'; 
import video2 from '../assets/snake_final.mp4'; 
import video3 from '../assets/playlist.mp4';


//a switch case to load any video depending on its name 
function getVideo(props){
    console.log(props)
    switch(props.name) {
        case 'snake':
          return video2
        case 'playlist':
          return video3
        default:
            return video1
    }
}

//Loads a video @params: height, width, name, header
function Video(props){
    const vid = getVideo(props)
    return (
    <div > 
        <h3 style={{'marginBottom': '12px', 'textAlign': 'center', 'fontSize': '18px'}}>
            {props.header} 
        </h3>
        <video className="video" width={props.width} height={props.height} controls muted autoPlay loop>
            <source src={vid} type={"video/mp4"} />   
            Your browser does not support mp4.
        </video>
    </div>
    )
} export default Video

