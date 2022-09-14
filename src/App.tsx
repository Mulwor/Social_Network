import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {PropsTypeForAPP} from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App: React.FC<PropsTypeForAPP> = (props: PropsTypeForAPP) => {
    // debugger
    return (
          <div className='app-wrapper'>
              <Header />
              <Navbar />

              <div className='app-wrapper-content'>
                  <Route path='/dialogs'
                         render={() =>
                             <DialogsContainer
                                 state = {props.state.dialogsPage}
                                 store = {props.store}
                             />
                         }/>

                  <Route path='/profile'
                         render={ ()  =>
                             <Profile store = {props.store}/> }/>
              </div>
          </div>)
}

export default App;
