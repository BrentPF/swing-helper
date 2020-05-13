import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = ({ match }) => {

    var name = match.params.name;
    //function for saving state: articleInfo populated by server, setArticleInfo function to change articleInfo, useState argument is initial properties of articleInfo
    const [dataBody, setDataBody] = useState({inputValue:'default'});
    //for fetching state
    useEffect(()=> {
        setDataBody({inputValue:'default'})

        // Get the input field
        var input = document.getElementById("symbolInput");

        // Execute a function when the user releases a key on the keyboard
        input.addEventListener("keyup", function(event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Trigger the button element with a click
            document.getElementById("searchButton").click();
        }
        });


    }, [name]); //array of values to be watched for changes in order to run useEffect again

    const searchFunc = (event) => {
        event.preventDefault();
        if (event.target.value != null){
            if(event.target.value.match(/^[0-9a-zA-Z]+$/)){
                setDataBody({inputValue:event.target.value});
                console.log(dataBody.inputValue)
            }
        }
    };

    return (
        <>
        <form onSubmit={searchFunc}>
            <label>
                Name:
                <input type="text" id="symbolInput" onChange={searchFunc}/>
            </label>
        </form>
        <Link id="searchButton" to={`/symbol/${dataBody.inputValue}`}>SEARCH</Link>
        </>
    );
}

export default HomePage;