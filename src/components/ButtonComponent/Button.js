import './Button.css';

const Button = ({background, changeQuote}) => {
    return (
        <div className='button-container'>
            <button
            className="next-quote-button"
            style={{background}}
            onClick={changeQuote}
            >
                <i className="fa-solid fa-right-long"></i>
            </button>
        </div>
    );
};

export default Button;