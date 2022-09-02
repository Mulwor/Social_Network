import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import store, {RootStateType} from './redux/store'
import store from "./redux/redux-store"
import {BrowserRouter} from "react-router-dom";
import {ActionsTypes, RootStateType} from "./redux/store";



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
store.subscribe( () => renderTree);