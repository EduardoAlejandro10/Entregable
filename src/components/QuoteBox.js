import React, {useState} from 'react';
import quotes from '../quotes.json'

const getRandom = () => Math.floor(Math.random() * quotes.length);

const colors = [
  "#845EC2",
  "#D65DB1",
  "#FF6F91",
  "#FF9671",
  "#FFC75F",
  "#F9F871"
];
const QuoteBox = () => {
    const [Quotes, SetQuotes ] = useState(quotes[getRandom()]);

    const changeQuote = () => {
        const random = getRandom();
        setUser(quotes[random]);
      };
    }
const RandomColors = colors[Math.floor(Math.random() * 6)];

   return (
        <div className='QuoteBoxEstructure'>
        <p>{Quotes.quote}</p>
        <p>{Quotes.author}</p>
        
        </div>
    );


export default QuoteBox;