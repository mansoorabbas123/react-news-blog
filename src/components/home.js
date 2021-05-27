import { TopNews } from './top-news';
import { SideBar } from './sidebar';

function Home() {
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
            </div>
        </>


    );
}

export default Home;