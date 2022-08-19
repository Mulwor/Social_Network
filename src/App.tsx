import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import state from "./redux/state";
import {addPost} from "./redux/state";

type MessageType = {
    message: string,
    addPostCallback: (message: string) => void
}

function App(props: any) {
    return (
          <div className='app-wrapper'>
              <Header />
              <Navbar />

              <div className='app-wrapper-content'>
                  <Route path='/dialogs'
                         render={() => <Dialogs state={props.state.dialogsPage}
                             addPostCallback={addPostCallback}/>
                  }/>

                  <Route path='/profile'
                         render={() =>
                             <Profile
                                 state={props.state.profilePage}
                                 addPost = {props.addPost}/>
                         }/>
              </div>
          </div>)
}

export default App;
