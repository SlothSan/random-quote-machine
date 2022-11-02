import './NewQuote.css'

const NewQuote = (props) => {

    const newQuoteOnClick = (event) => {
        event.preventDefault()
        props.setGetNewQuote(!props.getNewQuote);
    }

    return (
        <a id={"new-quote"} className={"new-quote"} onClick={newQuoteOnClick} href={""}>
            New Quote!
        </a>
    )
}

export default NewQuote