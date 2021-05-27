import { MyContext } from '../App';
import { useContext } from 'react'
import { Link } from 'react-router-dom';

export const SideBar = () => {
    const { categories } = useContext(MyContext);
    console.log(categories);
    return (
        <div className="sidebar">
            <h4>Category</h4>
            <ul>
                {categories.map(c =>
                    <Link to={`/${c}`}>
                        <li key={c}>{c}</li>
                    </Link>)}
            </ul>
        </div>
    );
}