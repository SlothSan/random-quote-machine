import './QuoteText.css'

const QuoteText = (props) => {
    return (
            <p id={"text"} className={"quote-text"} style={{color: props.pastelColor}}>
                <span className={"quote-mark"}>"</span>
                {props.quoteText}
                <span className={"quote-mark"}>"</span>
            </p>
        )
}

export default QuoteText