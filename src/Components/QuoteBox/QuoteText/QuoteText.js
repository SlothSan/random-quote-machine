import './QuoteText.css'

const QuoteText = (props) => {
    return (
            <p id={"text"} className={"quote-text"}>
                {props.quoteText}
            </p>
        )
}

export default QuoteText