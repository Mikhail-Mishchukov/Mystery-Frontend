import { Link } from 'react-router-dom';
import { Icon } from 'UI/Icon';
import { Logo } from './Components/Logo';
import classes from './Header.module.scss';

export function Header() {
    return (
        <header className={classes.header}>
            <Link to="/">
                <Logo />
            </Link>
            <Link to="/">Home</Link>
            <Link to="/aboutDeveloper">
                <div>About developer</div>
            </Link>
            <Link to="/">
                <Icon type="logout" size="big" />
            </Link>
        </header>
    );
}
