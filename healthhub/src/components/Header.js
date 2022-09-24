import '../styles/components/Header.css'
import MenuList from './MenuList';
import SearchUser2 from './SearchUser2';

function Header({ Tab, username, userData }) {

    return (
        <div className="Header">
            <div className='header_top'>
                <SearchUser2/>
            </div>
            <div className='header_bottom'>
                <div className='header_MenuList'>
                    <MenuList Tab={Tab} username={username} userData={userData} />
                </div>
            </div>
        </div>
    );
}

export default Header;