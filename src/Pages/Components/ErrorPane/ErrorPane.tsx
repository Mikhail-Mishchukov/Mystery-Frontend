import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import classes from './ErrorPane.module.scss';

export function ErrorPane() {
    const error = useRouteError() as Error;
    let errorMessage: string;

    if (isRouteErrorResponse(error)) {
        errorMessage = error.message || error.statusText;
    } else if (error instanceof Error) {
        errorMessage = error.message;
    } else if (typeof error === 'string') {
        errorMessage = error;
    } else {
        errorMessage = 'Unknown error';
    }
    return (
        <div className={classes.errorPage}>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>{errorMessage}</p>
        </div>
    );
}
