import React from 'react';

export default class IntroSection extends React.Component {
    render() {
        // /* Intro Section  */
        return (
            <section id="intro" className="intro">
                <div className="slogan">
                    <h2>
                        {/* <span style="font-size: 28px;"> I'm </span>*/}
                        <span className="text_color">Jorge VIZCAYNO</span>
                    </h2>
                    <h4>AI ENTHUSIAST, DATA SCIENTIST, WEB DEV AND ROBOTICS PRACTITIONER.</h4>
                </div>
            </section>
        );
    }
}