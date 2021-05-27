import Navbar from './components/navbar';
import { Content } from './components/content'
import Home from './components/home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export const Routes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
                {/* <Route path='/:category' component={Content} /> */}
            </Switch>

        </BrowserRouter>
    );
}