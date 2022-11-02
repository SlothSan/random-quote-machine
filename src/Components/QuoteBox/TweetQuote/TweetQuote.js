import './TweetQuote.css'

const TweetQuote = (props) => {
    let url = 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + props.quoteText + " - " + props.quoteAuthor;
    return (
        <a id={"tweet-quote"}
           className={"tweet-quote"}
           title={"Tweet this quote!"}
           target={"_blank"}
           href={url}
           style={{backgroundColor: props.pastelColor}}>

            <i className={"fa fa-twitter"}></i>
        </a>
    )
}

export default TweetQuote