import React from 'react';

export default class AboutSection extends React.Component {
    render() {
        // /* About section  */
        return (
            <section id="about" className="home-section text-center">
            <div className="heading-about">
                <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2">
                    <div className="wow bounceInDown" data-wow-delay="0.4s">
                        <div className="section-heading">
                        <h2>About</h2>
                        {/*<i class="fa fa-2x fa-angle-down"></i>*/}
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="container" style={{width: '80%'}}>
                <div className="row">
                <div className="col-lg-2 col-lg-offset-5">
                    <hr className="marginbot-10" />
                </div>
                </div>
                <div className="row">
                <div className="col-md-5">
                    <div className="wow bounceInUp" data-wow-delay="0.2s">
                    <div className="team boxed-grey">
                        <div className="inner">
                        {/*<h5>Jorge Vizcayno</h5>*/}
                        {/*<p class="subtitle"></p>*/}
                        <div className="avatar" align="center"><img src="img/javg-profile.jpg" alt="" className="img-responsive img-circle" /></div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-1" />
                <div className="col-md-5" style={{textAlign:'justify'}}>
                    <p style={{paddingTop: '20px'}}>
                    Jorge is currently a graduate student at the <a href="https://usc.edu"> University of Southern California </a>
                    with a focus in Machine Learning, and a research assistant at the <a href="http://clvrai.com">CLVR Lab </a>
                     under Professor Joseph Lim. <br /><br />
                    He worked as the Head of Technology at <a href="https://byprice.com">ByPrice</a>, mainly concentrated on
                    scaling system architecture for
                    internationalization to yield a data-driven strategy across multiple cloud platforms (GCP and AWS). Before that, he worked as a mixed Data Scientist
                    / Web developer creating data-intensive solutions for users and costumers. <br /><br />
                    He graduated from the Faculty of Engineering at  <a href="http://www.ingenieria.unam.mx/">UNAM</a> in Mexico,
                    where he obtained
                    a B.Sc. in Mechatronics Engineering. There, his thesis <a href="http://www.ptolomeo.unam.mx:8080/xmlui/bitstream/handle/132.248.52.100/10967/Tesis_JAVG_v3.pdf?sequence=1">
                        Genetic algorithm for bipedal gait patterns optimization</a> aimed to combine exploratory and search
                    algorithms to find
                    a solution of a high order dynamic system.<br /><br />
                    Before joining ByPrice he co-founded <a href="https://www.kickstarter.com/projects/tuibo/tuibo-the-first-smart-garment-for-cyclists">
                        Tuibo</a> a tech company working to develop smart wearable devices for cyclists, and as an
                    undergraduate research assistant at
                    the <a href="http://best.berkeley.edu/best-research/best-berkeley-emergent-space-tensegrities-robotics/best-robotics-the-ultra-spine-quadruped/">
                        BEST Lab</a> in UC Berkeley.
                    </p>
                </div>
                <div className="col-md-1" />
                </div>
            </div>
            </section> 
        );
    }
}