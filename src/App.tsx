import { store } from 'Store/Store';
import 'UI/Styles/Reset.scss';
import 'UI/Styles/GlobalStyles.scss';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { MainPage } from './Pages/MainPage/MainPage';
import { ErrorPane } from './Pages/Components/ErrorPane/ErrorPane';
import { BasePage } from './Pages/BasePage/BasePage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <BasePage />,
        errorElement: <ErrorPane />,
        children: [
            {
                path: '/',
                element: <MainPage />,
            },
        ],
    },
]);

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );
}

export default App;
