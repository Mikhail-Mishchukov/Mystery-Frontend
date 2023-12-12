import { useAppSelector } from 'Root/Store/Store';
import { ReactElement } from 'react';
import { Navigate, Route } from 'react-router-dom';

interface PrivateRouteProps {
    path: string;
    element: ReactElement;
}

export function PrivateRoute({ path, element }: PrivateRouteProps) {
    const { isAuthorized } = useAppSelector(
        (state) => state.appSettings.userData
    );

    if (isAuthorized) {
        return <Route path={path} element={element} />;
    }
    return <Navigate to="/login" />;
}
