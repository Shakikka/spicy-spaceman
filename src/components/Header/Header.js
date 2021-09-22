import arth from '../../assets/Arth.gif';
import './Header.css';

const Header = ({}) => {
    return (
        <header>
            <img className='logo' src={arth} alt='Spinning Arth logo'/>
            <h1>The Spicy Spaceman</h1>
        </header>
    )
}

export default Header;