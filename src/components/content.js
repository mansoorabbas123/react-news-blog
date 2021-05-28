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
                                            <div class="card m-2" key={article.id}>
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