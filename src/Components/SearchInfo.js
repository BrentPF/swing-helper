import React from 'react';

const SearchInfo = ({data}) => {
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