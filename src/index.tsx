import { render, h, createContext } from 'preact';
import { Example } from './example';

export const AppContext = createContext<number>(0);

function App() {
    return (
        <AppContext.Provider value={5}>
            <Example />
        </AppContext.Provider>
    );
}

render((
    <App />
), document.body);
