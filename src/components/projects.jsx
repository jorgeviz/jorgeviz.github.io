import React from 'react';

export default class ProjectsSection extends React.Component {
    render() {
        // /* Projects section  */
        return (
            <section id="projects" className="home-section text-center bg-gray">
            <div className="heading-about">
                <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2">
                    <div className="wow bounceInDown" data-wow-delay="0.4s">
                        <div className="section-heading">
                        <h2>Projects</h2>
                        {/*<i class="fa fa-2x fa-angle-down"></i>*/}
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                <div className="col-lg-2 col-lg-offset-5">
                    <hr className="marginbot-10" />
                </div>
                </div>
                <div className="row" style={{marginTop: '30px'}}>
                <div className="col-md-4">
                    <div className="wow fadeInLeft" data-wow-delay="0.2s">
                    <div className="service-box">
                        <div className="service-icon">
                        <a href="https://www.kickstarter.com/projects/tuibo/tuibo-the-first-smart-garment-for-cyclists">
                            <img src="img/icons/tuibo.png" alt="Tuibo" width="180px;" />
                        </a>
                        </div>
                        <div className="service-desc">
                        <h5><a href="https://www.kickstarter.com/projects/tuibo/tuibo-the-first-smart-garment-for-cyclists" style={{color: '#666'}}>Tuibo</a></h5>
                        <p>Smart wearable device for cyclists: a Bluetooth® controlled vest, capable to show turning signals,
                            braking light, headlight and a horn.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="wow fadeInUp" data-wow-delay="0.2s">
                    <div className="service-box">
                        <div className="service-icon">
                        <a href="https://github.com/jorgeviz/otto">
                            <img src="img/icons/otto.png" alt="Otto" width="100px;" />
                        </a>
                        </div>
                        <div className="service-desc">
                        <h5> <a href="https://github.com/jorgeviz/otto" style={{color: '#666'}}>Otto &amp; OttoML </a></h5>
                        <p>Automatic Crypto-currency trader, able to perform transactions upon trading rules. The ML
                            version tries to weight and validate behaviours from several predictive algorithms to maximize
                            profit. (In dev.)
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="wow fadeInUp" data-wow-delay="0.2s">
                    <div className="service-box">
                        <div className="service-icon">
                        <a href="https://github.com/jorgeviz/flaspark">
                            <img src="img/icons/flaspark.png" alt="Flaspark" width="100px;" />
                        </a>
                        </div>
                        <div className="service-desc">
                        <h5><a href="https://github.com/jorgeviz/flaspark" style={{color: '#666'}}>Flaspark </a></h5>
                        <p>A light weight implementation to perform batch and on demand asynchronous jobs using Flask as Web
                            framework
                            and PySpark as the analytical engine. (In dev.)
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
        );
    }
}