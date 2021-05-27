import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useState, useEffect } from 'react';

export const TopNews = () => {
    const [content, setContent] = useState([]);
    const getData = async () => {
        try {
            const res = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=9ecd732cbfa94c4193ea1db647070b44');
            const data = await res.json();
            setContent(data.articles);

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (<>
        {content.length > 0 ?
            <div className="top-headlines">
                <h1>Top Headlines</h1>
                <Carousel>
                    {content.map(article => <div onClick={() => window.open(article.url)} key={article.title}>
                        <img src={article.urlToImage} alt={article.description} />
                        <h4 style={{ marginBottom: "3rem", paddingTop: "0.5rem" }}>{article.title}</h4>
                        {/* <p className="legend">{article.description}</p> */}
                    </div>)}
                </Carousel>
            </div>
            : "loading"}
    </>);
}