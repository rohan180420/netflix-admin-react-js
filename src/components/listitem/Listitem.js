import React,{useState} from 'react';
import "./Listitem.scss";
import { PlayArrow, ThumbUpAltOutlined, Add, ThumbDownAltOutlined } from '@material-ui/icons';

export default function Listitem({index}) {
    const [isHovered, setIsHovered] = useState(false);
    const trailer = "https://movietrailers.apple.com/movies/sony_pictures/spider-man-no-way-home/spider-man-no-way-home-trailer-2_h1080p.mov"
    return (
        <div className='listItem'
        style={{left: isHovered && index * 225 -50 + index * 2.5}}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <img src="https://images.thedirect.com/media/article_full/spider-man-no-way-home-poster-doc-ock.jpg?imgeng=cmpr_75/" />
        {isHovered && (   
            <div>   
        <video src={trailer} autoPlay={true} loop />
        <div className='itemInfo'>
       <div className='icons'>
       <PlayArrow className="icon"/>
       <Add className="icon"/>
       <ThumbUpAltOutlined className="icon"/>
       <ThumbDownAltOutlined className="icon"/>
       </div>
       <div className='itemInfoTop'>
       <span>1 hour 20 mins</span>
       <span className='limit'>+7</span>
       <span>2021</span>
       </div>
       <div className='desc'>
       lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium 
       hic rem eveniet error possimus, neque ex doloribus.
       </div>
       <div className='genre'>Action</div>
       </div></div>
       )}
            </div>
    )
}
