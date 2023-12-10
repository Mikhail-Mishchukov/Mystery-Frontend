import { Header } from 'UI/Layout';
import { Outlet } from 'react-router-dom';

export function BasePage() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}
