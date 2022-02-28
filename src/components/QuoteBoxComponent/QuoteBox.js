import './QuoteBox.css';

const QuoteBox = ({quote}) => {
    
      return (
        <div className='quote-container'>
            <i class="fa-solid fa-quote-left"></i>
            <blockquote className='quote'>{quote.quote}</blockquote>
            <br />
            <cite className='author'>{quote.author}</cite>
        </div>
    );
};

export default QuoteBox;