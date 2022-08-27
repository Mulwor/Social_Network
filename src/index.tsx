import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {RootStateType} from './redux/state'
import {BrowserRouter} from "react-router-dom";


let renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={store.getState()}
                dispatch={store.dispatch.bind(store)}
                store={store}
            />
        </BrowserRouter>, document.getElementById('root'));
}

renderTree()

store.subscribe(renderTree);