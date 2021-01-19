import React from 'react';

export default class Footer extends React.Component {
    render() {
        // /* Footer  */
        return (
            <footer id="footer">
            <div className="heading-about">
                <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2">
                    <div className="wow bounceInDown" data-wow-delay="0.4s">
                        <div className="section-heading">
                        <h2>Contact</h2>
                        {/*<i class="fa fa-2x fa-angle-down"></i> */}
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
                <ul className="icons" style={{marginTop: '50px'}}>
                <li><a href="mailto:ja.vizcayno@gmail.com" className="icon fa-mail-reply" /></li>
                <li><a href="https://www.facebook.com/jorge.vizcayno" className="icon fa-facebook" /></li>
                {/* <li><a href="#" class="icon fa-twitter"></a></li> */}
                <li><a href="https://instagram.com/vizjrge/" className="icon fa-instagram" /></li>
                <li><a href="https://github.com/jorgeviz/" className="icon fa-github" /></li>
                <li><a href="https://bitbucket.org/jorgeviz/" className="icon fa-bitbucket" /></li>
                {/*<li><a href="https://plus.google.com/+JorgeVizcayno" class="icon fa-google-plus"></a></li>*/}
                <li><a href="https://medium.com/@jorgeviz">
                    <img src="img/icons/medium-logo.png" width={45} style={{paddingBottom: '20px'}} />
                    </a>
                </li>
                <li><a href="https://www.linkedin.com/in/jorgeviz" className="icon fa-linkedin" /></li>
                </ul>
                <ul className="copyright" style={{paddingTop: '150px'}}>
                <li>Copyright © 2021 Jorge Vizcayno</li>
                <div className="credits">
                    {/*
                    All the links in the footer should remain intact. 
                    You can delete the links only if you purchased the pro version.
                    Licensing information: https://bootstrapmade.com/license/
                    Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Squadfree
                    */}
                    <a href="https://bootstrapmade.com/bootstrap-one-page-templates/">Credits: Bootstrap One Page Templates</a>
                    by BootstrapMade
                </div>
                </ul>
            </div>
            </footer>
        );
    }
}