import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import store, {ActionsTypes, RootStateType, StoreType} from "./redux/state";

type PropsType = {
    state: RootStateType
    dispatch: (action: ActionsTypes) => void
}

const App: React.FC<PropsType> = (props: PropsType) => {
   // const state = props.state.getState()

    return (
          <div className='app-wrapper'>
              <Header />
              <Navbar />

              <div className='app-wrapper-content'>
                  <Route path='/dialogs'
                         render={() => <Dialogs
                             state={props.state.dialogsPage}
                         />}/>

                  <Route path='/profile'
                         render={() =>
                             <Profile
                                 profilePage={props.state.profilePage}
                                 dispatch = {props.dispatch}
                                 newPostText={props.state.profilePage.newPostText}
                             />
                         }/>
              </div>
          </div>)
}

export default App;
