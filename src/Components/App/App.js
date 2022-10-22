import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import HeaderContainer from "../Header/HeaderContainer";
import Nav from "../Nav/Nav";

// import FindFriendsContainer from "../Friends/FriendsContainer";
import MessagesContainer from "../Messages/MessagesContainer";
import ProfileContainer from "../Profile/ProfileContainer";

// const MessagesContainer = React.lazy(() => import('../Messages/MessagesContainer'));

import Login from "../Login/Login";
import Loader from '../Loader/Loader';

import './App.css';
import { connect } from 'react-redux';
import { setInitialization } from '../../redux/reducers/appReducer';
import React, { Suspense, useEffect } from 'react';
import Preloader from '../Preloader/Preloader';
import { authMe } from '../../redux/reducers/authReducer';

const FindFriendsContainer = React.lazy(() => import('../Friends/FriendsContainer'));

function App({authMe, setInitialization, initialized}){
    useEffect(() => {
        authMe()
        .then(() => {
            setInitialization();
        })
    })

    if(!initialized) {
        return <Preloader/>
    }
    return (
        <>
            <div className='app-wrapper'>
                <Router>
                    <HeaderContainer/>
                    <Nav/>
                    <main className='app-content'>
                        <Routes>
                            <Route path='profile' element={<ProfileContainer/>}>
                                <Route path=':userid' element={<ProfileContainer/>} />
                            </Route>
                            <Route path='messages' element={<MessagesContainer/>}/>
                            <Route path='users' element={<div><Suspense fallback={<div>Loading...</div>}><FindFriendsContainer/></Suspense></div>}/>
                            {/* <Route path='users' element={<FindFriendsContainer/>}/> */}
                            <Route path='login' element={<Login/>}/>
                        </Routes>
                    </main>
                </Router>
            </div>
        </>
    );
}

const mapStateToProps = state => ({
    initialized: state.app.initialized,
});

const mapDispatchToProps = ({
    setInitialization,
    authMe,
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
