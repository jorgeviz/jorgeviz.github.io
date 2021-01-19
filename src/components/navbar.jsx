import React from 'react';

export default class NavBar extends React.Component {
    render() {
        // /* Navigation bar  */
        return (
            <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header page-scroll">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                        <i className="fa fa-bars" />
                        </button>
                        <a className="navbar-brand" href="index.html">
                            {/* <h1>JV</h1> */}
                            <img   src="../logo192.png" className="navbar-brand-img"></img>
                        </a>
                    </div>
                    {/* Collect the nav links, forms, and other content for toggling */}
                    <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#intro">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#footer">Contact</a></li>
                        </ul>
                    </div>
                {/* /.navbar-collapse */}
                </div>
            {/* /.container */}
            </nav>
        );
    }
}