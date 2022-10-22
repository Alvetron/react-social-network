import logo from '../../images/logo.png';
import './Header.css';

const Header  = ({auth, loginHandler, logoutHandler}) => {
    return (
        <header className={`flex justify-between items-center px-5 bg-white rounded-md header`}>
            <img src={logo} alt=""  width="60"/>
            {
                !auth.isAuth ?
                <button className='px-4 rounded-2xl border-2 border-black' onClick={loginHandler}>Login</button> :
                <div className='flex items-center'>
                    <p className='p-2'>{auth.login}</p>
                    <button className='px-4 rounded-2xl border-2 border-black' onClick={logoutHandler} >Logout</button>
                </div>
            }
        </header>
    )

}

export default Header;