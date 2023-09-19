import React,{useRef, useState}from 'react';
import './list.css';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Listitem from '../listitem/Listitem';

const List = () => {
    const [slideNumber,setSlideNumber]= useState(0);
    const listRef= useRef()
    const handleClick=(direction)=>{
        let distance=listRef.current.getBoundingClientRect().x-50;
        
        if(direction==='left' && slideNumber>0){
            setSlideNumber(slideNumber-1);
            listRef.current.style.transform=`translateX(${230+ distance}px)`;
        }else if(direction ==='right' && slideNumber<5){
            setSlideNumber(slideNumber+1)
            console.log(distance)
            listRef.current.style.transform=`translateX(${-230+distance}px)`
        }
    }
  return (
    <div className='list'>
        <span className="listTitle">Continue to watch</span>
        <div className="wrapper">
            <ArrowBackIosOutlinedIcon className='sliderArrow left' onClick={()=>handleClick('left')} style={{display:slideNumber>0?"inline":"none"}}/>
                <div className="list-container" ref={listRef}>
                    <Listitem index={0}/>
                    <Listitem index={1}/>
                    <Listitem index={2}/>
                    <Listitem index={3}/>
                    <Listitem index={4}/>
                    <Listitem index={5}/>
                    <Listitem index={6}/>
                    <Listitem index={7}/>
                    <Listitem index={8}/>
                    <Listitem index={9}/>
                    <Listitem index={10}/>
                </div>
            <ArrowForwardIosOutlinedIcon className='sliderArrow right' onClick={()=>handleClick('right')}/>
        </div>
    </div>
  )
}

export default List