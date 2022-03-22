import './style.css';
import Logo from '../../assets/logo.png';

function Header(){
    return <div className="header">
        <img src={Logo} alt="" />
    </div> 
}

export default Header;