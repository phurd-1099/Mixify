import React, {useState} from 'react'
import axios from 'axios'
import NavBar from '../../components/NavBar/NavBar';
import {Link} from 'react-router-dom';
import BackgroundVideo from "../../assets/Turntable - 8437.mp4";
import './Login.css'

function Login(props){
    const [id, setId] = useState("");
    const newToken = window.location.hash
    .substring(1)
    .split('&')[0]
    .split('=')[1];
    console.log(newToken);
    props.updateToken(newToken);
    axios.get(
        "https://api.spotify.com/v1/me",
        {
            headers:{
                Authorization: "Bearer " + props.currentToken,
            }
        }
    ).then((response) => {
        console.log(response)
        console.log(response.data.id)
        setId(response.data.id);
        console.log(id)
    });
    //Add a check here to see if user is in system
    const isUser = true;
    
    
    
    return ( 
        <div>
            <NavBar />
            <div className='login'>
                <video autoPlay loop muted id="video">
                    <source src={BackgroundVideo} type="video/mp4" />
                </video>
                <div className='content'>
                    <h1>Welcome</h1>
                    <h2>{id}</h2>
                <p>{isUser ? "You currently have a Mixify Account" : "You do not currently have an account please click below to make an account"}</p>
                <Link className='btn' to = {isUser ? "/home" : "/signup"}>{isUser ? "Continue":"Join Now"}</Link>
                </div>
            </div>
        </div>
    )
}

export default Login