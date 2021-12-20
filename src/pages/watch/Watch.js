import { ArrowBackOutlined } from '@material-ui/icons';
import React from 'react';
import "./Watch.scss";

export default function Watch() {
    return (
        <div className='watch'>
           <div className='back'>
           <ArrowBackOutlined />
           Home
           </div>
           <video className='video' 
           autoplay 
           progress 
           controls src="https://movietrailers.apple.com/movies/sony_pictures/spider-man-no-way-home/spider-man-no-way-home-trailer-2_h1080p.mov" />
        </div>
    )
}
