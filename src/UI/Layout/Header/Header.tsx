import { Link } from 'react-router-dom';
import { Icon } from 'UI/Icon';
import { Logo } from './Components/Logo';
import classes from './Header.module.scss';

export function Header() {
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
                <Link to="/login" className={classes.actionLinksContainer}>
                    <Icon type="logout" size="big" color="primary" />
                </Link>
            </nav>
        </header>
    );
}
// Add border to header
// Set up private and public route
