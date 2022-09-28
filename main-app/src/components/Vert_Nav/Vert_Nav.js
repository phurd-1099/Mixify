import React,{useState} from 'react'
import {FaBars, FaTimes,FaHome,FaSearch,FaPlay} from 'react-icons/fa'
import {CgMusicSpeaker} from 'react-icons/cg'
import './Vert_Nav.css'

function Vert_Nav() {
    const [expanded, setExpanded] = useState(false);
    const handleClick = () =>{
        setExpanded(!expanded);
    }
  return (
    <div className={expanded ? 'expanded' : 'nav-bar'}>
        <ul className='icons'>
            <li className='nav' onClick={handleClick}>
                {expanded ? <FaTimes size ={64} style={{color:'#fff'}} />:<FaBars size ={64} style={{color:'#fff'}} />}
                {expanded ? <h1>Close</h1> : ""}
            </li>
            <li>
                <FaHome size = {64} style = {{color:'#fff'}}/>
                {expanded ? <h1>Home</h1>:''}
            </li>
            <li>
                <FaSearch size = {64} style = {{color:'#fff'}}/>
                {expanded ? <h1>Search</h1>:''}
            </li>
            <li>
                <CgMusicSpeaker size = {64} style = {{color:'#fff'}}/>
                {expanded ? <h1>Mixify</h1>:''}
            </li>
            <li>
                <FaPlay size = {64} style = {{color:'#fff'}}/>
                {expanded ? <h1>Play</h1>:''}
            </li>
            
        </ul>

    </div>
  )
}

export default Vert_Nav