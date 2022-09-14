import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import store, {RootStateType} from './redux/store'
import store from "./redux/redux-store"
import {BrowserRouter} from "react-router-dom";
// import {ActionsTypes, RootStateType} from "./redux/store";
import StoreContext, {Provider} from "./StoreContext";



let renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>, document.getElementById('root'));
}

renderTree()
store.subscribe( () => renderTree);