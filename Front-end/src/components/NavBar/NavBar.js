import React,{useState} from 'react'
import {Link, redirect, useNavigate} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import {CgMusicSpeaker} from 'react-icons/cg'

import './NavBar.css'

function NavBar(){
    const navigate = useNavigate();
    const logo = <h1>Mixify<CgMusicSpeaker /></h1>;
    const[click,setClick]= useState(false);
    const handleClick = () =>{
        setClick(!click);
    }

    const goToSpotify=() =>{
        window.location.replace(`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}&response_type=${RESPONSE_TYPE}`)

    }
    const CLIENT_ID = 'cb6f99a4daba4839a2f21fe3ec883a3d';
    const REDIRECT_URI = "http://localhost:3000/login"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
    const SCOPES = 'playlist-modify-public';
    const test = "test"
    
    

  return (
    <div className='header'> 
        <Link to='/'>{logo}</Link>
        <ul className={click ? 'nav-menu active':'nav-menu' }>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/info'>Info</Link>
            </li>
        
            <li>
                <Link onClick={goToSpotify}>Login</Link> 
            </li>
            <li>
                <Link to='/login'>Sign Up</Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {click ? <FaTimes size ={20} style={{color:'#fff'}} /> :    <FaBars size ={20} style={{color:'#fff'}}/>}
        </div>
    </div>
  )
}

export default NavBar