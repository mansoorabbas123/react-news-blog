import { useContext } from 'react';
import { SideBar } from './sidebar';
import { useParams } from "react-router-dom";
import { MyContext } from '../App';

export const Content = () => {
    const context = useContext(MyContext);
    const { category } = useParams();
    const selectedCatrgory = category;

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

                                            <div className="card m-3" key={article.id} style={{ "width": "18rem" }}>
                                                <div className="card-body">
                                                    <h5 className="card-title">{article.name}</h5>

                                                    <p className="card-text">{article.description}</p>
                                                    <a href={article.url} className="card-link">Open</a>
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