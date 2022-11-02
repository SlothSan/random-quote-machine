import './QuoteAuthor.css'

const QuoteAuthor = (props) => {
    return (
        <p id={"author"} className={"quote-author"}>
            {props.quoteAuthor}
        </p>
    )
}

export default QuoteAuthor