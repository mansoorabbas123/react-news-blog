import { useState, useEffect } from 'react';
import { TopNews } from './top-news';
import { SideBar } from './sidebar';

function Home() {
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
    return (

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
    );
}

export default Home;