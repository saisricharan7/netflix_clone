import React from 'react'
import './Featured.css';
import title_img from '../images/Guardians-of-The-Galaxy-Logo-PNG.png'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Featured = ({type}) => {
  return (
    <div className='featured'>
        {type && (
            <div className='featured-category'>
                <span>{type==="movie"?"Movies":"Series"}</span>
                <select name='genre' id='genre'>
                    <option >Genre</option> 
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>   
                 </select>
            </div>
        )}
        <div className='gradient-overlay'>
            <img  className='featured-poster' src="https://r4.wallpaperflare.com/wallpaper/841/922/372/guardians-of-the-galaxy-vol-2-star-lord-gamora-rocket-raccoon-wallpaper-8dd548fde0784a3c4980bd25b94f3c7b.jpg" alt=''></img>
        </div>
        <div className='info'>
            <img src={title_img} alt=''></img>
            <span className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Iusto assumenda amet reprehenderit hic veniam expedita inventore architecto vel, 
            tempore exercitationem voluptate excepturi et est voluptatibus, aliquam quibusdam incidunt optio possimus.
            </span>
            <div className="featured-buttons">
                <button className="featured-play">
                    <PlayArrowIcon/>
                    <span>Play</span>
                </button>
                <button className="featured-more">
                    <InfoOutlinedIcon/>
                    <span>info</span>
                </button>
            </div>
        </div>
        </div>
  )
}

export default Featured