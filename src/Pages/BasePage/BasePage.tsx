import { Header } from 'UI/Layout';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from 'Root/Store/Store';
import classes from './BasePage.module.scss';

export function BasePage() {
    const userData = useAppSelector((state) => state.appSettings.userData);
    return (
        <>
            <Header
                username={userData.username}
                isAuthorized={userData.isAuthorized}
            />
            <div className={classes.pageContentContainer}>
                <Outlet />
            </div>
        </>
    );
}
