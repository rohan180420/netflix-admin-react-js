import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import React from 'react';
import "./Featured.scss";

export default function Featured({ type }) {
    return (
        <div className='featured'>
        {type && (
            <div className='category'>
            <span>{type === 'movie' ? "Movies" : "Series"}</span>
            <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Advanture</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-Fi</option>
            <option value="thriller">Thriler</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
            </select>
            </div>
        )}
        <img 
        width="100%"
        src="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg" />
        <div className='info'>
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/86f59bed-a212-4942-a2f2-a49f76c1cede/dd85atb-8fda9066-a0be-4def-8bd8-5128af3a5e50.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg2ZjU5YmVkLWEyMTItNDk0Mi1hMmYyLWE0OWY3NmMxY2VkZVwvZGQ4NWF0Yi04ZmRhOTA2Ni1hMGJlLTRkZWYtOGJkOC01MTI4YWYzYTVlNTAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.uaTDhkB_SYn2GN0N6zpG_eweBptjAEq4_oscfaklcaU" />
        <span className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
        
        <div className='buttons'>
        <button className='play'>
        <PlayArrow />
        <span>Play</span>
        </button>
        <button className='more'>
        <InfoOutlined />
        <span>Info</span>
        </button>
        </div>
        </div>
        </div>
        
    )
}

