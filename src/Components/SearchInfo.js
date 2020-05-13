import React from 'react';

const SearchInfo = ({data}) => {
    if (data == null){
        return (<h1>Sorry, we couldn't find the symbol you entered...</h1>);
    }
    return (
    //<> is shorthand for <React.Fragment>
    //Allows us to return with a single parent tag cluttering up when rendered
    <>
    {Object.keys(data).map(key => (
        <p key={key}>{key}: {data[key]}</p>
    ))}
    </>
    );
}

export default SearchInfo;