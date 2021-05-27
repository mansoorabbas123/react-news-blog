import { useState, useEffect, useContext } from 'react';
import { TopNews } from './top-news';
import { SideBar } from './sidebar';
import { useParams } from "react-router-dom";
import { MyContext } from '../App';
import './style.css';


export const Content = () => {
    const context = useContext(MyContext);
    const { category } = useParams();
    // let url = `https://newsapi.org/v2/sources?technology&country=us&apiKey=9ecd732cbfa94c4193ea1db647070b44`;
    // console.log(url)
    // const [content, setContent] = useState([]);
    // const getData = async () => {
    //     try {
    //         const res = await fetch(url);
    //         const data = await res.json();
    //         const sources = data.sources;
    //         const categories = data.sources.map(c => c.category);
    //         console.log([...new Set(categories)]);
    //         setContent(sources);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }
    // useEffect(() => {
    //     getData();
    // }, []);
    const selectedCatrgory = category;
    // console.log(context.filter(article => article.category === selectedCatrgory));
    // console.log(context);

    return (
        <>
            {   context.content.length > 0 ?
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <div className="content">
                                <div className="row">
                                    <div className="col-md-8">


                                        {context.content.filter(article => article.category === selectedCatrgory).map(article =>

                                            <div class="card m-3" style={{ width: "18rem;" }}>
                                                <div class="card-body">
                                                    <h5 class="card-title">{article.name}</h5>

                                                    <p class="card-text">{article.description}</p>
                                                    <a href={article.url} class="card-link">Open</a>

                                                </div>
                                            </div>
                                        )}



                                    </div>
                                    <div className="col-md-4">
                                        <SideBar />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : "loading"}
        </>
    );
}