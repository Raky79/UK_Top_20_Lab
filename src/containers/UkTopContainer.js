import React, {useState} from 'react';
import TopSongsList from '../components/TopSongsList';


function UkTopContainer () {
    const [songs, setSongs] = useState([]);


    const fetchSong = function () {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(response =>response.json())
        .then(data => setSongs(data))

    }



    return (
        <>
        <h1>UK Top 20!</h1>
        <TopSongsList/>
        </>
    );
}

export default UkTopContainer;