import './QuoteBox.css'
import {useEffect, useState} from "react";
import QuoteText from "./QuoteText/QuoteText";
import QuoteAuthor from "./QuoteAuthor/QuoteAuthor";

const QuoteBox = () => {

    const [quoteText, setQuoteText] = useState('');
    const [quoteAuthor, setQuoteAuthor] = useState('');
    //TODO Implement the API call for quotes and set the state and pass down to components as needed.

    const getQuoteFromApi = async () => {
        let url = 'https://api.api-ninjas.com/v1/quotes?category=learning'
        let requestOptions = {
            method: 'GET',
            headers: {
                'X-Api-Key': 'NgxXwXnAZGKu4eFeI396cQ==VV0ycdY2IjSZo3g3'
            }
        }
        const quoteData = await fetch(url, requestOptions);
        const quoteDataJson = await quoteData.json();
        setQuoteText(quoteDataJson[0].quote)
        setQuoteAuthor(quoteDataJson[0].author)
    }

    useEffect(() => {
        getQuoteFromApi()
    }, [])

    return (
        <div id={"quote-box"} className={"quote-box"}>
            <QuoteText quoteText={quoteText} />
            <QuoteAuthor quoteAuthor={quoteAuthor} />
        </div>
    )
}

export default QuoteBox;