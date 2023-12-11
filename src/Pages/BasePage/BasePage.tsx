import { Header } from 'UI/Layout';
import { Outlet } from 'react-router-dom';
import classes from './BasePage.module.scss';

export function BasePage() {
    return (
        <>
            <Header />
            <div className={classes.pageContentContainer}>
                <Outlet />
            </div>
        </>
    );
}
