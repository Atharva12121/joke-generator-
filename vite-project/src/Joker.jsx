import axios from 'axios';

import { useEffect, useState } from "react";
export default function Joker(){
    let [joke,setJoke]=useState({});
    const url="https://official-joke-api.appspot.com/random_joke";
    const getNewJoke=async ()=>{

        // let response=await fetch(url);
        // let jsonResponse=await response.json();

        let response = await axios.get(url);
        let jsonResponse = response.data;
        console.log(jsonResponse);
        setJoke({
            setup: jsonResponse.setup,
            punchline: jsonResponse.punchline,
        });
    }
        useEffect( ()=>{
            async function getFirstJoke() {
                
            
            let response = await axios.get(url);
        let jsonResponse = response.data;
        console.log(jsonResponse);
        setJoke({
            setup: jsonResponse.setup,
            punchline: jsonResponse.punchline,
        });
    }
    getFirstJoke();
        },[]);
    
    return(
        <div>
        <h3>Joker!</h3>
       
        <h2>{joke.setup}</h2>
        <h2>{joke.punchline}</h2>
        <button onClick={getNewJoke}>new joke</button>
        </div>
    );
}