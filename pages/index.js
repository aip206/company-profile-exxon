import Head from 'next/head';
import React from 'react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Industries Website Template by Colorlib</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <link href="/static/img/favicon.png" rel="icon" />
        <link href="/static/img/apple-touch-icon.png" rel="apple-touch-icon" />

        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Montserrat:300,400,500,700" rel="stylesheet" />

        <link href="/static/lib/bootstrap/css/bootstrap.min.css" rel="stylesheet" />

        <link href="/static/lib/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
        <link href="/static/lib/animate/animate.min.css" rel="stylesheet" />
        <link href="/static/lib/ionicons/css/ionicons.min.css" rel="stylesheet" />
        <link href="/static/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
        <link href="/static/lib/lightbox/css/lightbox.min.css" rel="stylesheet" />

        <link href="/static/css/style.css" rel="stylesheet" />
      </Head>

      <div>
        <header id="header">
          <div className="container-fluid">

            <div id="logo" className="pull-left">
              <h1><a href="#intro" className="scrollto">BizPage</a></h1>
            </div>

            <nav id="nav-menu-container">
              <ul className="nav-menu">
                <li className="menu-active"><a href="#intro">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#team">Team</a></li>
                <li className="menu-has-children"><a href="">Drop Down</a>
                  <ul>
                    <li><a href="#">Drop Down 1</a></li>
                    <li><a href="#">Drop Down 3</a></li>
                    <li><a href="#">Drop Down 4</a></li>
                    <li><a href="#">Drop Down 5</a></li>
                  </ul>
                </li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <section id="intro">
          <div className="intro-container">
            <div id="introCarousel" className="carousel  slide carousel-fade" data-ride="carousel">

              <ol className="carousel-indicators"></ol>

              <div className="carousel-inner" role="listbox">

                <div className="carousel-item active">
                  <div className="carousel-background"><img src="/static/img/intro-carousel/1.jpg" alt="" /></div>
                  <div className="carousel-container">
                    <div className="carousel-content">
                      <h2>We are professional</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <a href="#featured-services" className="btn-get-started scrollto">Get Started</a>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="carousel-background"><img src="/static/img/intro-carousel/2.jpg" alt="" /></div>
                  <div className="carousel-container">
                    <div className="carousel-content">
                      <h2>At vero eos et accusamus</h2>
                      <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut.</p>
                      <a href="#featured-services" className="btn-get-started scrollto">Get Started</a>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="carousel-background"><img src="/static/img/intro-carousel/3.jpg" alt="" /></div>
                  <div className="carousel-container">
                    <div className="carousel-content">
                      <h2>Temporibus autem quibusdam</h2>
                      <p>Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt omnis iste natus error sit voluptatem accusantium.</p>
                      <a href="#featured-services" className="btn-get-started scrollto">Get Started</a>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="carousel-background"><img src="/static/img/intro-carousel/4.jpg" alt="" /></div>
                  <div className="carousel-container">
                    <div className="carousel-content">
                      <h2>Nam libero tempore</h2>
                      <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum.</p>
                      <a href="#featured-services" className="btn-get-started scrollto">Get Started</a>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="carousel-background"><img src="/static/img/intro-carousel/5.jpg" alt="" /></div>
                  <div className="carousel-container">
                    <div className="carousel-content">
                      <h2>Magnam aliquam quaerat</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <a href="#featured-services" className="btn-get-started scrollto">Get Started</a>
                    </div>
                  </div>
                </div>

              </div>

              <a className="carousel-control-prev" href="#introCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon ion-chevron-left" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>

              <a className="carousel-control-next" href="#introCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon ion-chevron-right" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>

            </div>
          </div>
        </section>

        <main id="main">
          <section id="featured-services">
            <div className="container">
              <div className="row">

                <div className="col-lg-4 box">
                  <i className="ion-ios-bookmarks-outline"></i>
                  <h4 className="title"><a href="">Lorem Ipsum Delino</a></h4>
                  <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </div>

                <div className="col-lg-4 box box-bg">
                  <i className="ion-ios-stopwatch-outline"></i>
                  <h4 className="title"><a href="">Dolor Sitema</a></h4>
                  <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                </div>

                <div className="col-lg-4 box">
                  <i className="ion-ios-heart-outline"></i>
                  <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
                  <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                </div>

              </div>
            </div>
          </section>
          <section id="about">
            <div className="container">

              <header className="section-header">
                <h3>About Us</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </header>

              <div className="row about-cols">

                <div className="col-md-4 wow fadeInUp">
                  <div className="about-col">
                    <div className="img">
                      <img src="img/about-mission.jpg" alt="" className="img-fluid" />
                      <div className="icon"><i className="ion-ios-speedometer-outline"></i></div>
                    </div>
                    <h2 className="title"><a href="#">Our Mission</a></h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
                  </div>
                </div>

                <div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="about-col">
                    <div className="img">
                      <img src="img/about-plan.jpg" alt="" className="img-fluid" />
                      <div className="icon"><i className="ion-ios-list-outline"></i></div>
                    </div>
                    <h2 className="title"><a href="#">Our Plan</a></h2>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
                  </div>
                </div>

                <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
                  <div className="about-col">
                    <div className="img">
                      <img src="img/about-vision.jpg" alt="" className="img-fluid" />
                      <div className="icon"><i className="ion-ios-eye-outline"></i></div>
                    </div>
                    <h2 className="title"><a href="#">Our Vision</a></h2>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
              </p>
                  </div>
                </div>

              </div>

            </div>
          </section>

          <section id="services">
            <div className="container">

              <header className="section-header wow fadeInUp">
                <h3>Services</h3>
                <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus, ad pro quaestio laboramus. Ei ubique vivendum pro. At ius nisl accusam lorenta zanos paradigno tridexa panatarel.</p>
              </header>

              <div className="row">

                <div className="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
                  <div className="icon"><i className="ion-ios-analytics-outline"></i></div>
                  <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                  <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </div>
                <div className="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
                  <div className="icon"><i className="ion-ios-bookmarks-outline"></i></div>
                  <h4 className="title"><a href="">Dolor Sitema</a></h4>
                  <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                </div>
                <div className="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
                  <div className="icon"><i className="ion-ios-paper-outline"></i></div>
                  <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
                  <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                </div>
                <div className="col-lg-4 col-md-6 box wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
                  <div className="icon"><i className="ion-ios-speedometer-outline"></i></div>
                  <h4 className="title"><a href="">Magni Dolores</a></h4>
                  <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
                <div className="col-lg-4 col-md-6 box wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
                  <div className="icon"><i className="ion-ios-barcode-outline"></i></div>
                  <h4 className="title"><a href="">Nemo Enim</a></h4>
                  <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                </div>
                <div className="col-lg-4 col-md-6 box wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
                  <div className="icon"><i className="ion-ios-people-outline"></i></div>
                  <h4 className="title"><a href="">Eiusmod Tempor</a></h4>
                  <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                </div>

              </div>

            </div>
          </section>
          <section id="call-to-action" className="wow fadeIn">
            <div className="container text-center">
              <h3>Call To Action</h3>
              <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <a className="cta-btn" href="#">Call To Action</a>
            </div>
          </section>
          <section id="portfolio" className="section-bg" >
            <div className="container">

              <header className="section-header">
                <h3 className="section-title">Our Portfolio</h3>
              </header>

              <div className="row">
                <div className="col-lg-12">
                  <ul id="portfolio-flters">
                    <li data-filter="*" className="filter-active">All</li>
                    <li data-filter=".filter-app">App</li>
                    <li data-filter=".filter-card">Card</li>
                    <li data-filter=".filter-web">Web</li>
                  </ul>
                </div>
              </div>

              <div className="row portfolio-container">

                <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp">
                  <div className="portfolio-wrap">
                    <figure>
                      <img src="/static/img/portfolio/app1.jpg" className="img-fluid" alt="" />
                      <a href="/static/img/portfolio/app1.jpg" data-lightbox="portfolio" data-title="App 1" className="link-preview" title="Preview"><i className="ion ion-eye"></i></a>
                      <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                    </figure>

                    <div className="portfolio-info">
                      <h4><a href="#">App 1</a></h4>
                      <p>App</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.1s">
                  <div className="portfolio-wrap">
                    <figure>
                      <img src="/static/img/portfolio/web3.jpg" className="img-fluid" alt="" />
                      <a href="/static/img/portfolio/web3.jpg" className="link-preview" data-lightbox="portfolio" data-title="Web 3" title="Preview"><i className="ion ion-eye"></i></a>
                      <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                    </figure>

                    <div className="portfolio-info">
                      <h4><a href="#">Web 3</a></h4>
                      <p>Web</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" data-wow-delay="0.2s">
                  <div className="portfolio-wrap">
                    <figure>
                      <img src="/static/img/portfolio/app2.jpg" className="img-fluid" alt="" />
                      <a href="/static/img/portfolio/app2.jpg" className="link-preview" data-lightbox="portfolio" data-title="App 2" title="Preview"><i className="ion ion-eye"></i></a>
                      <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                    </figure>

                    <div className="portfolio-info">
                      <h4><a href="#">App 2</a></h4>
                      <p>App</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
                  <div className="portfolio-wrap">
                    <figure>
                      <img src="/static/img/portfolio/card2.jpg" className="img-fluid" alt="" />
                      <a href="/static/img/portfolio/card2.jpg" className="link-preview" data-lightbox="portfolio" data-title="Card 2" title="Preview"><i className="ion ion-eye"></i></a>
                      <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                    </figure>

                    <div className="portfolio-info">
                      <h4><a href="#">Card 2</a></h4>
                      <p>Card</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.1s">
                  <div className="portfolio-wrap">
                    <figure>
                      <img src="/static/img/portfolio/web2.jpg" className="img-fluid" alt="" />
                      <a href="/static/img/portfolio/web2.jpg" className="link-preview" data-lightbox="portfolio" data-title="Web 2" title="Preview"><i className="ion ion-eye"></i></a>
                      <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                    </figure>

                    <div className="portfolio-info">
                      <h4><a href="#">Web 2</a></h4>
                      <p>Web</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" data-wow-delay="0.2s">
                  <div className="portfolio-wrap">
                    <figure>
                      <img src="/static/img/portfolio/app3.jpg" className="img-fluid" alt="" />
                      <a href="/static/img/portfolio/app3.jpg" className="link-preview" data-lightbox="portfolio" data-title="App 3" title="Preview"><i className="ion ion-eye"></i></a>
                      <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                    </figure>

                    <div className="portfolio-info">
                      <h4><a href="#">App 3</a></h4>
                      <p>App</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
                  <div className="portfolio-wrap">
                    <figure>
                      <img src="/static/img/portfolio/card1.jpg" className="img-fluid" alt="" />
                      <a href="/static/img/portfolio/card1.jpg" className="link-preview" data-lightbox="portfolio" data-title="Card 1" title="Preview"><i className="ion ion-eye"></i></a>
                      <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                    </figure>

                    <div className="portfolio-info">
                      <h4><a href="#">Card 1</a></h4>
                      <p>Card</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp" data-wow-delay="0.1s">
                  <div className="portfolio-wrap">
                    <figure>
                      <img src="/static/img/portfolio/card3.jpg" className="img-fluid" alt="" />
                      <a href="/static/img/portfolio/card3.jpg" className="link-preview" data-lightbox="portfolio" data-title="Card 3" title="Preview"><i className="ion ion-eye"></i></a>
                      <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                    </figure>

                    <div className="portfolio-info">
                      <h4><a href="#">Card 3</a></h4>
                      <p>Card</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.2s">
                  <div className="portfolio-wrap">
                    <figure>
                      <img src="/static/img/portfolio/web1.jpg" className="img-fluid" alt="" />
                      <a href="/static/img/portfolio/web1.jpg" className="link-preview" data-lightbox="portfolio" data-title="Web 1" title="Preview"><i className="ion ion-eye"></i></a>
                      <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                    </figure>

                    <div className="portfolio-info">
                      <h4><a href="#">Web 1</a></h4>
                      <p>Web</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>
        </main>
        <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 col-md-6 footer-info">
            <h3>BizPage</h3>
            <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="ion-ios-arrow-right"></i> <a href="#">Home</a></li>
              <li><i class="ion-ios-arrow-right"></i> <a href="#">About us</a></li>
              <li><i class="ion-ios-arrow-right"></i> <a href="#">Services</a></li>
              <li><i class="ion-ios-arrow-right"></i> <a href="#">Terms of service</a></li>
              <li><i class="ion-ios-arrow-right"></i> <a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-contact">
            <h4>Contact Us</h4>
            <p>
            </p>

            <div class="social-links">
              <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
              <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
              <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
              <a href="#" class="google-plus"><i class="fa fa-google-plus"></i></a>
              <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
            </div>

          </div>

            </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong>BizPage</strong>. All Rights Reserved
      </div>
      <div class="credits">
     
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer>


        <script src="/static/lib/jquery/jquery.min.js"></script>
        <script src="/static/lib/jquery/jquery-migrate.min.js"></script>
        <script src="/static/lib/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="/static/lib/easing/easing.min.js"></script>
        <script src="/static/lib/superfish/hoverIntent.js"></script>
        <script src="/static/lib/superfish/superfish.min.js"></script>
        <script src="/static/lib/wow/wow.min.js"></script>
        <script src="/static/lib/waypoints/waypoints.min.js"></script>
        <script src="/static/lib/counterup/counterup.min.js"></script>
        <script src="/static/lib/owlcarousel/owl.carousel.min.js"></script>
        <script src="/static/lib/isotope/isotope.pkgd.min.js"></script>
        <script src="/static/lib/lightbox/js/lightbox.min.js"></script>
        <script src="/static/lib/touchSwipe/jquery.touchSwipe.min.js"></script>
        <script src="/static/contactform/contactform.js"></script>

        <script src="/static/js/main.js"></script>
      </div>

    </div>

  )
}
