import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useState, useEffect } from 'react';

export const TopNews = () => {
    const [content, setContent] = useState([]);
    const getData = async () => {
        try {
            const res = await fetch('https://gnews.io/api/v4/top-headlines?token=56abd2a88cedb839f0a8cbbf1e41cfae&lang=en');
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
                        <img src={article.image} alt={article.description} />
                        <h4 style={{ marginBottom: "3rem", paddingTop: "0.5rem" }}>{article.title}</h4>
                        <p className="legend">{article.description}</p>
                    </div>)}
                </Carousel>
            </div>
            : "loading"}
    </>);
}