import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {PropsTypeForAPP} from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users from "./components/Users/Users";


const App: React.FC<PropsTypeForAPP> = () => {
    // debugger
    return (
          <div className='app-wrapper'>
              <Header />
              <Navbar />

              <div className='app-wrapper-content'>
                  <Route path='/dialogs'
                         render={() =>  <DialogsContainer />
                   }/>

                  <Route path='/profile'
                         render={ ()  => <Profile />
                  }/>

                  <Route path='/users'
                         render={ () => <UsersContainer />
                  }/>
              </div>

          </div>)
}

export default App;
