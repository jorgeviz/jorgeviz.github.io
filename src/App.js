import React from 'react';
import ReactDOM from 'react-dom';
import Preloader from './components/preloader';
import NavBar from './components/navbar';
import IntroSection from './components/intro';
import AboutSection from './components/about';
import ProjectsSection from './components/projects';
import Footer from './components/footer';

class PortfolioBody extends React.Component {

    render(){
        return (
        <div>
            <Preloader></Preloader>
            <NavBar></NavBar>
            <IntroSection></IntroSection>
            <AboutSection></AboutSection>
            <ProjectsSection></ProjectsSection>
            <Footer></Footer>
        </div>
        );
    }
}

export default PortfolioBody;