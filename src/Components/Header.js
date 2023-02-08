import React from "react";
import { Image } from "react-bootstrap";
function Header(){
 return ( 
    <section className="navbar-dark bg-dark header"> 
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <nav className="navbar navbar-expand-lg">
                        <img src="https://picsum.photos/200/300?random=1" width={140} height={70} alt="logo" />
                        {/* <Image src="https://picsum.photos/200/300?random=1" width={140} height={70} /> */}
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item ">
                                    <a className="nav-link " href="#about">About</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link " href="#destinations">Destinations</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link " href="#places">Places</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link " href="#tourist">Tourists Detail</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </section>


  );
}


export default Header;