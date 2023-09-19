import React from 'react';
import { useState,useEffect } from 'react';
import "./Home.css";
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
const Home = ({type}) => {
  const [lists,getLists]=useState([]);
  const [genre,setgenre]=useState(null);

  useEffect(()=>{
    const getRandomLists= async ()=>{
      try{
        const res= await axios.get(`lists${type?"?type="+type:""}${genre?"&genre="+genre:""}`)
      }catch(err){

      }
    }
  },[type,genre])
  return (
    <div className='home-container'>
      <Navbar/>
      {/* <img src='https://media.istockphoto.com/id/1385658360/photo/beautiful-hills-and-mountains-colored-of-shades-of-blue-extending-up-to-the-horizon-at.webp?b=1&s=612x612&w=0&k=20&c=v9JdcEAyrGTfZofod27vTbdbPnv3UefVow6tjS74hMM='></img> */}
      <Featured type={type}/>
      <List/>
    </div>
  )
}

export default Home