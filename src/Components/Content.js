import React from "react";

function Content() {
    return (
        <div>
            <section className="">
                <div className="carousel slide" id="carouselExampleSlidesOnly" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img class="d-block w-100" src="Images/banner-1.jpg" alt="First slide" style={{ height: "auto" }} />
                        </div>
                        <div className="carousel-item">
                            <img class="d-block w-100" src="Images/banner-2.jpg" alt="First slide" style={{ height: "auto" }} />
                        </div>
                        <div className="carousel-item">
                            <img class="d-block w-100" src="Images/banner-1.jpg" alt="First slide" style={{ height: "auto" }} />
                        </div>
                    </div>

                </div>
            </section>
            <section className="bgbg-light" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <h3 className="text-center mt-4 text-secondary">Know about us</h3>
                        </div>
                    </div>
                    <div className="row">
                        <p className="mt-4 mb-5">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                            like Aldus PageMaker including versions of Lorem Ipsum
                        </p>
                    </div>
                </div>
            </section>

            <section className="">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <h3 className="text-center mt-4 text-secondary">Favourite Destinations</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div class="col-sm-4 mb-5">
                            <div class="card mt-4">
                                <img class="card-img-top" src="Images/ig-3.jpg" alt="" />
                                <div class="card-body">
                                    <h4 class="card-title text-secondary">Japan</h4>
                                    <p class="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                                </div>
                                <div class="card-footer">
                                    <a href="#" class="btn btn-primary">Find Out More!</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 mb-5">
                            <div class="card mt-4">
                                <img class="card-img-top" src="Images/t-2.jpg" alt="" />
                                <div class="card-body">
                                    <h4 class="card-title text-secondary">Tokyo</h4>
                                    <p class="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                                </div>
                                <div class="card-footer">
                                    <a href="#" class="btn btn-primary">Find Out More!</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 mb-5">
                            <div class="card mt-4">
                                <img class="card-img-top" src="Images/t-1.jpg" alt="" />
                                <div class="card-body">
                                    <h4 class="card-title text-secondary">India</h4>
                                    <p class="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                                </div>
                                <div class="card-footer">
                                    <a href="#" class="btn btn-primary">Find Out More!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    )

}

export default Content;