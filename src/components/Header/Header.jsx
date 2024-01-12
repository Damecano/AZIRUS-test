import './Header.css'
import logo from '../../Assets/Brand logo.png'
import searchIcon from '../../Assets/search.png'


const Header = () => {


  return (
    <header>
        <div className="brand">
            <img src={logo} alt="" />
            <span>AZURUS</span>
        </div>
        <div className="links">
            <ul>
                <li><a href="#">PRODUCT</a></li>
                <li><a href="#">SOFTWARE</a></li>
                <li><a href="#">INNOVATION</a></li>
                <li><a href="#">COMMUNITY</a></li>
            </ul>
        </div>
        <div className="searchbar">
            <input type="text" placeholder='Search...'/>
           <div> <img src={searchIcon} alt="" /></div>
        </div>
    </header>
   )
}

export default Header
