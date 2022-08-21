import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {addPost, RootStateType} from "./redux/state";

type PropsType = {
    state: RootStateType
    addPost: () => void
    updateNewPostText: (value: string) => void
}

function App(props: PropsType) {
    return (
          <div className='app-wrapper'>
              <Header />
              <Navbar />

              <div className='app-wrapper-content'>
                  <Route path='/dialogs'
                         render={() => <Dialogs
                             state={props.state.dialogsPage}
                             addPost = {addPost}
                         />}/>

                  <Route path='/profile'
                         render={() =>
                             <Profile
                                 profilePage={props.state.profilePage}
                                 newPostText={props.state.profilePage.newPostText}
                                 addPost = {props.addPost}
                                 updateNewPostText={props.updateNewPostText}
                             />
                         }/>
              </div>
          </div>)
}

export default App;
