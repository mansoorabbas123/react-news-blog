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
                {categories.map(category =>
                    <Link to={`/${category}`}>
                        <li key={category}>{category}</li>
                    </Link>)}
            </ul>
        </div>
    );
}