import React from 'react'
import './Info.css'

function Info(props){

  return (
    <div className='information-container'>
        <h1>Info about Mixify</h1>
        <p>Mixify is an app developed for enhancing the user experience when using Spotify™.
            This App lets users login to there existing Spotify™ account thru Mixify and 
            access all of there playlists. The addition with mixify is that it allows for users 
            to DJ there playlist how they want. Using a resposive user interface you can look at 
            each song in a playlist and cut in and out of songs wherever you want. Then you can play
            these songs thru the app applying these changes. We also offer an easier interface to 
            create playlists allowing you to build multiple playlists at once with ease. Please enjoy
            this free app and mix up your listinng experience. 
        </p>
        <p> Current Token is:s{props.currentToken}</p>
    </div>
  )
}

export default Info