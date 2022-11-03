import './QuoteBox.css'
import {useEffect, useState} from "react";
import QuoteText from "./QuoteText/QuoteText";
import QuoteAuthor from "./QuoteAuthor/QuoteAuthor";
import NewQuote from "./NewQuote/NewQuote";
import TweetQuote from "./TweetQuote/TweetQuote";

const QuoteBox = (props) => {

    const [quoteText, setQuoteText] = useState('');
    const [quoteAuthor, setQuoteAuthor] = useState('');
    const [getNewQuote, setGetNewQuote] =useState(false);

    const getRandomPastelColor = () => {
        let hue = Math.floor(Math.random() * 360);
        return 'hsl(' + hue + ', 50%, 50%)';
    }

    const getQuoteFromApi = async () => {
        let url = 'https://api.api-ninjas.com/v1/quotes?category=inspirational'
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
        getQuoteFromApi().then(r => props.setPastelColor(getRandomPastelColor()))

    }, [])

    useEffect(() => {
        getQuoteFromApi().then(r => props.setPastelColor(getRandomPastelColor()))
    }, [getNewQuote])

    return (
        <div id={"quote-box"} className={"quote-box"}>
            <QuoteText pastelColor={props.pastelColor} quoteText={quoteText} />
            <QuoteAuthor pastelColor={props.pastelColor} quoteAuthor={quoteAuthor} />
            <div className={"button-container"}>
                <TweetQuote  pastelColor={props.pastelColor} quoteText={quoteText} quoteAuthor={quoteAuthor} />
                <NewQuote pastelColor={props.pastelColor} getNewQuote={getNewQuote} setGetNewQuote={setGetNewQuote}/>
            </div>
        </div>
    )
}

export default QuoteBox;