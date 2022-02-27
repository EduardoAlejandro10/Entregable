import React from 'react';
import QuoteBox from './QuoteBox';


const Button = (changeQuote) => {
   
    return (
        <div className='ButtonNext'>
            <button onClick={changeQuote}>next</button>
        </div>
    );
};

export default Button;