"use client"
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import styles from './page.module.css'
import Image from 'next/image'
import Modal from 'react-modal';
import LoginModal from '@/components/LoginModal';

export default function Home() {

  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    Modal.setAppElement('body');
  }, []);

  return (
    <main className={`${styles["bg-dark"]}`}>
      <div>
        {/*Navbar*/}
        <nav className={`w-100 navbar sticky-top ${styles["diagonal-bg"]}`}>
          <div className='container-fluid px-sm-5 py-sm-2'>
            <div className='navbar-brand d-flex flex-row align-items-center gap-3'>
              <Image
                src="/svg/bvb-logo.svg"
                alt="Logo"
                width={windowWidth < 600 ? 40 : 60}
                height={windowWidth < 600 ? 40 : 60}
              />
              <header className='text-white' style={windowWidth < 600 ? { fontSize: "14px" } : { fontSize: "20px" }}>Borussia Dortmund</header>
            </div>
            <button className={`btn  btn-dark ${windowWidth < 600 ? "btn-sm" : ""}`} onClick={() => { openModal() }}>Register</button>
          </div>
          <LoginModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
          />
        </nav>
        {/*Carousel*/}
        <div className={`d-flex flex-column align-items-center w-100 ${styles["bg-dark"]} `} data-bs-ride="carousel" style={windowWidth < 800 ? { height: "40vh" } : { height: "70vh" }} >
          <div id="carouselExampleIndicators" className="carousel slide " style={{ width: "100%", height: "100%" }}>
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner" style={{ height: "100%" }}>
              <div className="carousel-item active" style={{ width: "100%", height: "100%" }}>
                <Image
                  src="/img/main-carousel/image1.jpeg"
                  alt="carousel1"
                  sizes="100%"
                  style={{
                    width: '100%',
                    height: "100%"
                  }}
                  width={400}
                  height={200}
                  quality={100}
                />
              </div>
              <div className="carousel-item" style={{ width: "100%", height: "100%" }}>
                <Image
                  src="/img/main-carousel/image2.jpeg"
                  alt="carousel2"
                  sizes="100%"
                  style={{
                    width: '100%',
                    height: "100%"
                  }}
                  width={400}
                  height={200}
                  quality={100}
                />
              </div>
              <div className="carousel-item" style={{ width: "100%", height: "100%" }} >
                <Image
                  src="/img/main-carousel/image3.jpeg"
                  alt="carousel3"
                  sizes="100%"
                  style={{
                    width: '100%',
                    height: "100%"
                  }}
                  width={400}
                  height={200}
                  quality={100}
                />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/*BVB-News*/}
        <h2 className='text-white px-5 my-5' style={{ textAlign: 'center' }}>BVB-NEWS</h2>
        <div className={`${styles['card-container']}`}>
          <div className={`card px-2 py-3 shadow ${styles['hover-card']}`} style={{ width: "40vw", minWidth: '350px', maxWidth: '350px', minHeight: "514px" }}>
            <Image
              src={`/img/bvb-news/new1.jpeg`}
              sizes='100%'
              style={{
                width: '90%',
                height: "100%",
                minHeight: "250px"
              }}
              width={300}
              height={300}
              alt={`card-image`}
              quality={100}
            />
            <div className="card-body d-flex flex-column gap-3">
              <div className='d-flex flex-row justify-content-between'><span className={`text-warning`}>TRADITION</span><span className={`text-white`}>27.06.24</span></div>
              <h5 className={`card-title text-white ${styles['card-text']}`}>Jubiläumsspiel in Miltenberg</h5>
              <p className='text-white'>Die BVB-Traditionsmannschaft tritt am Samstag (29.06., 16 Uhr) ...</p>
            </div>
          </div>
          <div className={`card px-2 py-3 shadow ${styles['hover-card']}`} style={{ width: "40vw", minWidth: '350px', maxWidth: '350px', minHeight: "514px" }}>
            <Image
              src={`/img/bvb-news/new2.jpeg`}
              sizes='100%'
              style={{
                width: '90%',
                height: "100%",
                minHeight: "250px"
              }}
              width={300}
              height={300}
              alt={`card-image`}
              quality={100}
            />
            <div className="card-body d-flex flex-column gap-3">
              <div className='d-flex flex-row justify-content-between'><span className={`text-warning`}>U 23</span><span className={`text-white`}>27.06.24</span></div>
              <h5 className={`card-title text-white ${styles['card-text']}`}>U23 in die Vorbereitung gestartet</h5>
              <p className='text-white'>Am vergangenen Montag (24.06.) startete Borussia Dortmunds...</p>
            </div>
          </div>
          <div className={`card px-2 py-3 shadow ${styles['hover-card']}`} style={{ width: "40vw", minWidth: '350px', maxWidth: '350px', minHeight: "514px" }}>
            <Image
              src={`/img/bvb-news/new4.jpeg`}
              sizes='100%'
              style={{
                width: '90%',
                height: "100%",
                minHeight: "250px"
              }}
              width={300}
              height={300}
              alt={`card-image`}
              quality={100}
            />
            <div className="card-body d-flex flex-column gap-3">
              <div className='d-flex flex-row justify-content-between'><span className={`text-warning`}>HANDBALL</span><span className={`text-white`}>27.06.24</span></div>
              <h5 className={`card-title text-white ${styles['card-text']}`}>Saisonziele, Halle, Fans: Handball-Abteilungsleiter Rupert Thiele im Interview</h5>
              <p className='text-white'>Die Bundesliga-Saison 2024/25 startet für die Handballerinnen..</p>
            </div>
          </div>
          <div className={`card px-2 py-3 shadow ${styles['hover-card']}`} style={{ width: "40vw", minWidth: '350px', maxWidth: '350px', minHeight: "514px" }}>
            <Image
              src={`/img/bvb-news/new5.jpeg`}
              sizes='100%'
              style={{
                width: '90%',
                height: "100%",
                minHeight: "250px"
              }}
              width={300}
              height={300}
              alt={`card-image`}
              quality={100}
            />
            <div className="card-body d-flex flex-column gap-3">
              <div className='d-flex flex-row justify-content-between'><span className={`text-warning`}>PROFIS</span><span className={`text-white`}>27.06.24</span></div>
              <h5 className={`card-title text-white ${styles['card-text']}`}>BVB komplettiert neues Trainerteam</h5>
              <p className='text-white'>Fußball-Bundesligist Borussia Dortmund stellt seinen...</p>
            </div>
          </div>
          <div className={`card px-2 py-3 shadow ${styles['hover-card']}`} style={{ width: "40vw", minWidth: '350px', maxWidth: '350px', minHeight: "514px" }}>
            <Image
              src={`/img/bvb-news/new6.jpeg`}
              sizes='100%'
              style={{
                width: '90%',
                height: "100%",
                minHeight: "250px"
              }}
              width={300}
              height={300}
              alt={`card-image`}
              quality={100}
            />
            <div className="card-body d-flex flex-column gap-3">
              <div className='d-flex flex-row justify-content-between'><span className={`text-warning`}>PROFIS</span><span className={`text-white`}>27.06.24</span></div>
              <h5 className={`card-title text-white ${styles['card-text']}`}>Acht Borussen im EM-Achtelfinale</h5>
              <p className='text-white'>Die Gruppenphase der Europameisterschaft ist am...</p>
            </div>
          </div>
          <div className={`card px-2 py-3 shadow ${styles['hover-card']}`} style={{ width: "40vw", minWidth: '350px', maxWidth: '350px', minHeight: "514px" }}>
            <Image
              src={`/img/bvb-news/new7.jpeg`}
              sizes='100%'
              style={{
                width: '90%',
                height: "100%",
                minHeight: "250px"
              }}
              width={300}
              height={300}
              alt={`card-image`}
              quality={100}
            />
            <div className="card-body d-flex flex-column gap-3">
              <div className='d-flex flex-row justify-content-between'><span className={`text-warning`}>FUßBALLAKADEMIE</span><span className={`text-white`}>26.06.24</span></div>
              <h5 className={`card-title text-white ${styles['card-text']}`}>Das neue Schulangebot „Sport und Umwelt im Doppelpass“</h5>
              <p className='text-white'>In Zusammenarbeit mit dem BVB-Lerngarten und der BVB-...</p>
            </div>
          </div>
          <div className={`card px-2 py-3 shadow ${styles['hover-card']}`} style={{ width: "40vw", minWidth: '350px', maxWidth: '350px', minHeight: "514px" }}>
            <Image
              src={`/img/bvb-news/new8.jpeg`}
              sizes='100%'
              style={{
                width: '90%',
                height: "100%",
                minHeight: "250px"
              }}
              width={300}
              height={300}
              alt={`card-image`}
              quality={100}
            />
            <div className="card-body d-flex flex-column gap-3">
              <div className='d-flex flex-row justify-content-between'><span className={`text-warning`}>PROFIS</span><span className={`text-white`}>26.06.24</span></div>
              <h5 className={`card-title text-white ${styles['card-text']}`}>Asien-Tour: BVB spielt in Thailand und Japan</h5>
              <p className='text-white'>Borussia Dortmund reist im Rahmen seiner diesjährigen Asia...</p>
            </div>
          </div>
        </div>

        {/*Footer*/}
        <footer className={`d-flex flex-column justify-content-center align-items-center mt-5 py-5 gap-sm-3 pb-sm-5  ${styles["bg-grey"]}`}>

          <p className='text-white'>Folge uns auf Social Media</p>
          <div className='text-white d-flex flex-wrap justify-content-evenly align-items-center gap-2'>
            <a className='me-3' href='https://www.facebook.com/BVB?sk=app_185888224841687' target='_blank'>
              <img src="/social-media/face.svg" color='' width="32" height="32" alt='facebook' />
            </a>
            <a className='me-3' href='https://www.instagram.com/bvb09/' target='_blank'>
              <img src="/social-media/insta.svg" color='' width="32" height="32" alt='insta' />
            </a>
            <a className='me-3' href='https://www.threads.net/@bvb09' target='_blank'>
              <img src="/social-media/thread.svg" color='' width="32" height="32" alt='thread' />
            </a>
            <a className='me-3' href='https://www.tiktok.com/@bvb' target='_blank'>
              <img src="/social-media/tiktok.svg" color='' width="32" height="32" alt='tiktok' />
            </a>
            <a className='me-3' href='https://www.twitch.tv/bvb_official' target='_blank'>
              <img src="/social-media/twitch.svg" color='' width="32" height="32" alt='twitch' />
            </a>
            <a className='me-3' href='https://whatsapp.com/channel/0029Va5I8DDEVccTPByndd2z' target='_blank'>
              <img src="/social-media/wp.svg" color='' width="32" height="32" alt='wp' />
            </a>
            <a className='me-3' href='https://twitter.com/bvb' target='_blank'>
              <img src="/social-media/x.svg" color='' width="32" height="32" alt='x' />
            </a>
            <a className='me-3' href='https://www.youtube.com/@BVB' target='_blank'>
              <img src="/social-media/yt.svg" color='' width="32" height="32" alt='yt' />
            </a>
          </div>
          <div className='d-flex flex-wrap w-100 justify-content-evenly align-items-center text-white mt-2'>
            <ul className='fw-lighter list-unstyled d-flex flex-column gap-sm-2'>
              <li><strong><a>Rechtliches</a></strong></li>
              <li><a href='https://account.bvb.de/s/contact?language=de' target='_blank'>Kontakt</a></li>
              <li><a href='https://www.bvb.de/de/de/allgemein/impressum.html' target='_blank'>Impressum</a></li>
              <li><a href='https://www.bvb.de/de/de/allgemein/datenschutz.html' target='_blank'>Datenschutz</a></li>
              <li><a href='https://www.bvb.de/?cmpscreencustom' target='_blank'>Cookies</a></li>
            </ul>
            <ul className='fw-lighter list-unstyled d-flex flex-column gap-sm-2'>
              <li><strong>Business</strong></li>
              <li><a href='https://aktie.bvb.de/' target='_blank'>Aktie</a></li>
              <li><a href='https://www.bvb.de/de/de/sponsoring-hospitality.html' target='_blank'>Sponsoring & Hospitality</a></li>
              <li><a href='https://www.bvb.de/de/de/der-bvb/die-kgaa/geschaeftsfuehrung.html' target='_blank'>Geschäftsführung</a></li>
              <li><a href='https://bericht.bvb.de/' target='_blank'>Geschäftsbericht</a></li>
            </ul>
            <ul className='fw-lighter list-unstyled d-flex flex-column gap-sm-2'>
              <li><strong>Verein</strong></li>
              <li><a href='https://www.bvb.de/de/de/fans/fanarbeit/fan-und-foerderabteilung.html' target='_blank'>Fan- und Förderabteilung</a></li>
              <li><a href='https://www.bvb.de/de/de/der-bvb/der-verein/mitgliedschaft.html' target='_blank'>Mitgliedschaft</a></li>
              <li><a href='https://www.bvb.de/de/de/mannschaften.html' target='_blank'>Mannschaften</a></li>
              <li><a href='https://karriere.bvb.de/' target='_blank'>Karriere</a></li>
            </ul>
            <ul className='fw-lighter list-unstyled d-flex flex-column gap-sm-2'>
              <li><strong>Online-Shops</strong></li>
              <li><a href='https://www.ticket-onlineshop.com/ols/bvb/de/home/channel/shop/index/' target='_blank'>Ticketshop</a></li>
              <li><a href='https://shop.bvb.de/' target='_blank'>Fanshop</a></li>
              <li><a href='https://shop.bvb.de/maenner/trikots/' target='_blank'>Trikots</a></li>
              <li><a href='https://www.ticket-onlineshop.com/ols/bvbstadion/' target='_blank'>Stadiontouren</a></li>
            </ul>
            <ul className='fw-lighter list-unstyled d-flex flex-column gap-sm-2'>
              <li><strong>Informationen</strong></li>
              <li><a href='https://newsletter.bvb.de/anmeldung' target='_blank'>Newsletter</a></li>
              <li><a href='https://www.bvb.de/de/de/allgemein/nutzungsbedingungen.html' target='_blank'>Nutzungsbedingungen</a></li>
              <li><a href='https://www.bvb.de/de/de/allgemein/barrierefreiheitserklaerung.html' target='_blank'>Barrierefreiheitserklärung</a></li>
              <li><a href='https://www.bvb.de/de/de/signal-iduna-park/stadionbesuch/barrierefreiheit.html' target='_blank'>Barrierefreiheit</a></li>
            </ul>
          </div>
        </footer>
      </div>
    </main>
  )
}
