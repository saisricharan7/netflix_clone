import React from 'react'
import "./Home.css"
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
const Home = () => {
  return (
    <div className='home-container'>
      <Navbar/>
      {/* <img src='https://media.istockphoto.com/id/1385658360/photo/beautiful-hills-and-mountains-colored-of-shades-of-blue-extending-up-to-the-horizon-at.webp?b=1&s=612x612&w=0&k=20&c=v9JdcEAyrGTfZofod27vTbdbPnv3UefVow6tjS74hMM='></img> */}
      <Featured type='movie'/>
      <List/>
    </div>
  )
}

export default Home