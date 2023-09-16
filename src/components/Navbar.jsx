import {NavLink} from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
    return (
        <div className="nav">
            <span className='title'><NavLink to='/'>Shows</NavLink></span>
        </div>
    )
}
export default Navbar