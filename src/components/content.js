import { useState, useEffect } from 'react';
import { TopNews } from './top-news';
import { SideBar } from './sidebar';
import { useParams } from "react-router-dom";

export const Content = () => {
    const { category } = useParams();
    let url = `https://newsapi.org/v2/sources?technology&country=us&apiKey=9ecd732cbfa94c4193ea1db647070b44`;
    console.log(url)
    const [content, setContent] = useState([]);
    const getData = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            const sources = data.sources;
            const categories = data.sources.map(c => c.category);
            console.log([...new Set(categories)]);
            setContent(sources);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            {   content.length > 0 ?
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <div className="content">
                                <div className="row">
                                    <div className="col-md-8">
                                        <TopNews content={content} />
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