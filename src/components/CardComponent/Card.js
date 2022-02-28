import { useState } from 'react';
import './Card.css';
import { dataGetter, colorGenerator } from '../../utilities/generator';
import QuoteBox from '../QuoteBoxComponent/QuoteBox';
import Button from '../ButtonComponent/Button';

const Card = ({quotes}) => {
    const [quote, setQuote] = useState(dataGetter(quotes));
    const color = document.body.style.background = colorGenerator();

    const changeQuote = () => setQuote((dataGetter(quotes)));

    return (
        <div className='card' style={{color}}>
            <QuoteBox quote={quote} />
            <Button
            background={color}
            changeQuote={changeQuote}
            />
        </div>
    );
};

export default Card;
