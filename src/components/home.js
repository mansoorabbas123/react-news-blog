import { TopNews } from './top-news';
import { SideBar } from './sidebar';
import { useContext } from 'react';
import { MyContext } from '../App';

function Home() {
    const { content } = useContext(MyContext);
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="content">
                            <div className="row">
                                <div className="col-md-8">
                                    <TopNews />
                                </div>
                                <div className="col-md-4">
                                    <SideBar />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        {content.slice(0, 5).map(article =>
                            <div class="card mt-3" key={article.id}>
                                <div class="card-header">
                                    {article.id}
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title"> {article.name}</h5>
                                    <p class="card-text">{article.description}</p>
                                    <a href={article.url} class="btn btn-primary">open</a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>


    );
}

export default Home;