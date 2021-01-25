import React from 'react';
import './App.css';
import {BarreDeNavigation} from './components/BarreDeNavigation';
import {BarreDeRecherche} from "./components/BarreDeRecherche";

export const App = () => {
    return (
        <div className="page-wrapper">
            <BarreDeNavigation mode="mobile"/>
            <BarreDeNavigation mode="normal"/>
            <div className="page-container">
                <header className="header-desktop">
                    <div className="section__content section__content--p30">
                        <div className="container-fluid">
                            <div className="header-wrap">
                                <BarreDeRecherche/>
                                <div className="header-button">
                                    <div className="noti-wrap">
                                        <div className="noti__item js-item-menu">
                                            <i className="zmdi zmdi-notifications"></i>
                                            <span className="quantity">3</span>
                                            <div className="notifi-dropdown js-dropdown">
                                                <div className="notifi__title">
                                                    <p>You have 3 Notifications</p>
                                                </div>
                                                <div className="notifi__item">
                                                    <div className="bg-c1 img-cir img-40">
                                                        <i className="zmdi zmdi-email-open"></i>
                                                    </div>
                                                    <div className="content">
                                                        <p>You got a email notification</p>
                                                        <span className="date">April 12, 2018 06:50</span>
                                                    </div>
                                                </div>
                                                <div className="notifi__item">
                                                    <div className="bg-c2 img-cir img-40">
                                                        <i className="zmdi zmdi-account-box"></i>
                                                    </div>
                                                    <div className="content">
                                                        <p>Your account has been blocked</p>
                                                        <span className="date">April 12, 2018 06:50</span>
                                                    </div>
                                                </div>
                                                <div className="notifi__item">
                                                    <div className="bg-c3 img-cir img-40">
                                                        <i className="zmdi zmdi-file-text"></i>
                                                    </div>
                                                    <div className="content">
                                                        <p>You got a new file</p>
                                                        <span className="date">April 12, 2018 06:50</span>
                                                    </div>
                                                </div>
                                                <div className="notifi__footer">
                                                    <span>All notifications</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="account-wrap">
                                        <div className="account-item clearfix js-item-menu">
                                            <div className="image">
                                                <img src="images/icon/avatar-01.jpg" alt="John Doe" />
                                            </div>
                                            <div className="content">
                                                <span className="js-acc-btn">Aline Dubois</span>
                                            </div>
                                            <div className="account-dropdown js-dropdown">
                                                <div className="info clearfix">
                                                    <div className="image">
                                                        <img src="images/icon/avatar-01.jpg" alt="John Doe" />
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="name">
                                                            <span>Aline Dubois</span>
                                                        </h5>
                                                        <span className="email">juillet.aline@gmail.com</span>
                                                    </div>
                                                </div>
                                                <div className="account-dropdown__body">
                                                    <div className="account-dropdown__item">
                                                        <span>
                                                            <i className="zmdi zmdi-account"></i>Account</span>
                                                    </div>
                                                    <div className="account-dropdown__item">
                                                        <span>
                                                            <i className="zmdi zmdi-settings"></i>Setting</span>
                                                    </div>
                                                    <div className="account-dropdown__item">
                                                        <span>
                                                            <i className="zmdi zmdi-money-box"></i>Billing</span>
                                                    </div>
                                                </div>
                                                <div className="account-dropdown__footer">
                                                    <span>
                                                        <i className="zmdi zmdi-power"></i>Logout</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="main-content">

                </div>

            </div>

        </div>
    );
}