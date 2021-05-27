import { TopNews } from './top-news';
import { SideBar } from './sidebar';
import { MyContext } from '../App';
import { useContext } from 'react';

function Home() {
    const context = useContext(MyContext);
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="content">
                            <div className="row">
                                <div className="col-md-8">
                                    <TopNews content={context} />
                                </div>
                                <div className="col-md-4">
                                    <SideBar />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    );
}

export default Home;