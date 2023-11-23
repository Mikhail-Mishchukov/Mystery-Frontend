import { store } from 'Store/store';
import { Provider } from 'react-redux';

function App() {
    return (
        <Provider store={store}>
            <div>Hello World</div>
        </Provider>
    );
}

export default App;
