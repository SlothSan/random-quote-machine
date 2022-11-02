import './QuoteBox.css'
import {useState} from "react";
import QuoteText from "./QuoteText/QuoteText";

const QuoteBox = () => {

    const [quoteText, setQuoteText] = useState('');
    const [quoteAuthor, setQuoteAuthor] = useState('');


    return (
        <div id={"quote-box"} className={"quote-box"}>
            <QuoteText />
        </div>
    )
}

export default QuoteBox;