import { Link } from 'react-router-dom';
import { Icon } from 'UI/Icon';
import { UserData } from 'Root/Store/AppSettings/Entities';
import { useAppDispatch } from 'Root/Store/Store';
import { setUserData } from 'Store/AppSettings/AppSettingsSlice';
import { Logo } from './Components/Logo';
import classes from './Header.module.scss';

type HeaderProps = UserData;

export function Header({ isAuthorized, username }: HeaderProps) {
    const dispatch = useAppDispatch();

    const login = () => {
        dispatch(setUserData({ isAuthorized: true, username: 'Mikhail' }));
    };

    const logout = () => {
        dispatch(setUserData({ isAuthorized: false, username: '' }));
    };
    return (
        <header>
            <nav className={classes.navBar}>
                <Link to="/" className={classes.logoLink}>
                    <Logo />
                </Link>
                <div className={classes.linksContainer}>
                    <Link className={classes.logoLink} to="/">
                        Home
                    </Link>
                    <Link className={classes.logoLink} to="/aboutDeveloper">
                        <div>About developer</div>
                    </Link>
                </div>

                {isAuthorized ? (
                    <Link
                        to="/login"
                        onClick={logout}
                        className={classes.actionLinksContainer}
                    >
                        {isAuthorized ? username : ''}
                        <Icon type="logout" size="big" color="primary" />
                    </Link>
                ) : (
                    // <Link to="/login" className={classes.actionLinksContainer}>
                    <button onClick={login} type="button">
                        Login
                    </button>
                    // </Link>
                )}
            </nav>
        </header>
    );
}
