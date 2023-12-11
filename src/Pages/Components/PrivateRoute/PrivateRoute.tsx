import { ReactElement } from 'react';
import { Navigate, Route } from 'react-router-dom';

interface PrivateRouteProps {
    path: string;
    element: ReactElement;
}

export function PrivateRoute({ path, element }: PrivateRouteProps) {
    if (isAuthenticated) {
        return <Route path={path} element={element} />;
    }
    return <Navigate to="/login" />;
}
