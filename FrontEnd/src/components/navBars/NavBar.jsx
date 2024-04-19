import { useNavigate } from "react-router-dom";
import logo from '../../assets/img/EscudoPeque.svg'
import { useUserDetails } from "../../shared/hooks";

const NavLogo = () => {
    return (
        <div className="nav-logo-container">
            <img
                className="nav-logo" width='100%'
                height='100%'
                src={logo}
                alt="Escudo Kinal" />
        </div>
    )
}


const NavButtton = ({ text, onclickHandler }) => {
    return (
        <span className="nav-button" onClick={onClickHandler}>
            {text}
        </span>
    )
}

export const NavBar = () => {
    const { isLogged, logout } = useUserDetails()

    const navigate = useNavigate()

    const handleNavigateToAuthpage = () => {
        navigate('/auth')
    }

    const handleNavigateToSettingPage = () => {
        navigate('/settings')
    }

    const handleNavigateToChannelsPage = () => {
        navigate('/channels')
    }

    const handleLogout = () => {
        logout()
    }

    return (
        <div className="nav-conteiner">
            <NavLogo />
            <div className="nav-buttons-conteioner">
                <NavButton text='Browse' onclickHandler={handleNavigateToChannelsPage} />
            </div>
            {!isLogged ? (
                <NavButtton text='Login' onclickHandler={handleNavigateToAuthpage} />
            ) : (
                <div>
                    <NavButtton text='My Account' onclickHandler={handleNavigateToSettingPage} />
                    <NavButtton text='Logout' onclickHandler={handleLogout} />
                </div>
            )
            }
        </div>
    )

}