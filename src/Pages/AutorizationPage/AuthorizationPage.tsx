import { useAppSelector } from 'Root/Store/Store';
import { Navigate } from 'react-router-dom';

export function AuthorizationPage() {
    const isAuthorized = useAppSelector(
        (state) => state.appSettings.userData.isAuthorized
    );
    if (isAuthorized) {
        <Navigate to="/" />;
    }
    return (
        <div>
            Authorization
            <button type="button">Login</button>
        </div>
    );
}
