import React, { useState, useEffect } from 'react';
import SearchInfo from '../Components/SearchInfo';
import DataChart from '../Components/DataChart';

const HomePage = ({ match }) => {

    const name = match.params.name;
    //function for saving state: articleInfo populated by server, setArticleInfo function to change articleInfo, useState argument is initial properties of articleInfo
    const [dataBody, setDataBody] = useState(null);
    //for fetching state
    useEffect(()=> {
        //inner function to allow async call, cannot directly make useEffect async
        const fetchData = async ()=>{
            const result = await fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&outputsize=compact&apikey=7KMAPTGEVQVNFLSU', {
            method: 'get', 
            });
            const body = await result.json();
            setDataBody(body); //give json body of result to the setter
        }
        fetchData();
    }, [name]); //array of values to be watched for changes in order to run useEffect again
    if (dataBody === null){//cheap way to wait for db
        return(<h1>Loading...</h1>);
    }
    return (
        <>
        <SearchInfo data={dataBody["Meta Data"]}/>
        <DataChart/>
        </>
    );
}

export default HomePage;