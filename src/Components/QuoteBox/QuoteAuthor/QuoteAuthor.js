import './QuoteAuthor.css'

const QuoteAuthor = (props) => {
    return (
        <p id={"author"} className={"quote-author"} style={{color: props.pastelColor}} >
            {props.quoteAuthor}
        </p>
    )
}

export default QuoteAuthor