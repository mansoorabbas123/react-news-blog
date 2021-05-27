import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export const TopNews = ({ content }) => {
    return (<>
        {content.length > 0 ?
            <div className="top-headlines">
                <h1>Top Headlines</h1>
                <Carousel>
                    {content.map(article => <div onClick={() => console.log("clicked")} key={article.title}>
                        <img src={article.urlToImage} alt={article.description} />
                        <h4 style={{ marginBottom: "3rem", paddingTop: "0.5rem" }}>{article.title}</h4>
                        {/* <p className="legend">{article.description}</p> */}
                    </div>)}
                </Carousel>
            </div>
            : "loading"}
    </>);
}