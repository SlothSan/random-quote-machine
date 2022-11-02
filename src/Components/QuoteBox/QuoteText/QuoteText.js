import './QuoteText.css'

const QuoteText = (props) => {
    return (
            <p id={"text"} className={"quote-text"} style={{color: props.pastelColor}}>
                {props.quoteText}
            </p>
        )
}

export default QuoteText