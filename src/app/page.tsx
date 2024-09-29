'use client';
import Image from "next/image";
import { Button, CssVarsProvider, Input, ThemeProvider } from "@mui/joy";
import { useState, ReactNode, useMemo, useEffect } from "react";
import Link from "next/link";
import { CoordinateRegion, Marker, Map } from "mapkit-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Arrays of 3 photos each (or 2), total 24
const photosOne = [
  '/CW/photo1.JPG',
  '/CW/photo2.JPG',
  '/CW/photo3.JPG',
];
const photosTwo = [
  '/CW/photo4.JPG',
  '/CW/photo5.JPG',
  '/CW/photo6.JPG',
];
const photosThree = [
  '/CW/photo7.JPG',
  '/CW/photo8.JPG',
  '/CW/photo9.JPG',
];
const photosFour = [
  '/CW/photo10.JPG',
  '/CW/photo11.JPG',
  '/CW/photo12.JPG',
];
const photosFive = [
  '/CW/photo13.JPG',
  '/CW/photo14.JPG',
  '/CW/photo15.JPG',
];
const photosSix = [
  '/CW/photo16.JPG',
  '/CW/photo17.JPG',
  '/CW/photo18.JPG',
];
const photosSeven = [
  '/CW/photo19.JPG',
  '/CW/photo20.JPG',
  '/CW/photo21.JPG',
];
const photosEight = [
  '/CW/photo22.JPG',
  '/CW/photo23.JPG',
  '/CW/photo24.JPG',
];

function Gap({ height = 20 }: { height?: number }) {
  return <div className="gap" style={{ height: height }} />;
}
function Centered({ children, id }: { children: ReactNode, id?: string }) {
  return <div className="section" id={id} style={{ display: "flex", justifyContent: "center", flexDirection: 'column', alignItems: "center", minHeight: '100%' }}>{children}</div>;
}
function SmallCentered({ children, id }: { children: ReactNode, id?: string }) {
  return <div className="section" id={id} style={{ display: "flex", justifyContent: "center", flexDirection: 'column', alignItems: "center", paddingTop: '10%', paddingBottom: '10%', margin: '5%' }}>{children}</div>;
}

function MapElement() {
  return (
    <div className="map">
      <iframe frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=6310+Tompkins+Way,+Culver+City,+CA+90232&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
    </div>
  );
}
function Icon({ icon }: { icon: string }) {
  return <i className={`fa-light fa-${icon}`} style={{ marginRight: '4px' }}></i>
}

export default function Home() {

  const [indexlb, setIndexlb] = useState(-1);
  const [dbgEditColors, showDebugEditColors] = useState(false);

  function closeMenu() {
    document.querySelector('.menu')?.classList.remove('open');
  }
  function CardVanilla({ image, title }: { image: string, title: string }) {
    return (
      <div className="card">
        <img className="img" alt={title} src={image} width="250" height="180" />
        <span>{title}</span>
      </div>
    )
  }
  function Card({ image, title, clickOpenLightbox = false, id = -1 }: { image: string, title: string, clickOpenLightbox?: boolean, id?: number }) {
    // Image with 30px border radius with text under. Dead simple. Will have 3 in container.
    return (
      <div onClick={clickOpenLightbox ? () => { setIndexlb(id); } : undefined} className="card card-col">
        {clickOpenLightbox ? <>
          <div className="c-col img" style={{ backgroundImage: `url("${image}")` }}>

          </div>
        </> : <img alt={title} src={image} width={250} height={180} className="img" />}
        {title ? <span>{title}</span> : undefined}
      </div>
    )
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('debugging-mode');
    if (myParam === 'true') {
      showDebugEditColors(true);
    }
  }, []);

  return (
    <>
      <CssVarsProvider defaultMode="light">
        <div className="debugging" style={{ display: `${dbgEditColors ? 'block' : 'none'}`, zIndex: '100', fontFamily: 'Inter, Helvetica, Arial', background: "#222", color: "white", position: 'absolute', width: '320px', height: '200px', top: '10px', left: '10px', border: '1px solid white', borderRadius: '15px' }}>
          <div style={{ width: '100%', height: '100%', position: 'relative', padding: '10px' }}>
            <div style={{ display: 'flex' }}>
              <span style={{ fontSize: '12px', color: 'white' }}>background: </span>
              <Input type={'color'} defaultValue={`#EBE1CD`} component={'span'} onChange={(e) => { document.documentElement.style.setProperty('--bg', e.target.value) }} />
            </div>
            <div style={{ display: 'flex' }}>
              <span style={{ fontSize: '12px', color: 'white' }}>foreground (body): </span>
              <Input type={'color'} defaultValue={`#000`} component={'span'} onChange={(e) => { document.documentElement.style.setProperty('color', e.target.value) }} />
            </div>
            <div style={{ display: 'flex' }}>
              <span style={{ fontSize: '12px', color: 'white' }}>foreground (spans): </span>
              <Input type={'color'} defaultValue={`#402718`} component={'span'} onChange={(e) => { document.documentElement.style.setProperty('--brown', e.target.value) }} />
            </div>
            <p style={{ position: 'absolute', bottom: '2px', left: '8px', fontSize: '12px' }}>gavin's put-anywhere-color-debug-tool - ver. 1.0 (2022)</p>
          </div>
        </div>


        <div className="menu-button" onClick={() => { document.querySelector('.menu')?.classList.toggle('open') }}>
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className="menu">
          <div className="menu-items">
            <Link href="#home" onClick={closeMenu}><Icon icon="home" /> Home</Link>
            <Link href="#details" onClick={closeMenu}><Icon icon="memo-pad" /> Details</Link>
            <Link href="#schedule" onClick={closeMenu}><Icon icon="clock" /> Schedule</Link>
            <Link href="#travel" onClick={closeMenu}><Icon icon="plane" /> Travel</Link>
            <Link href="#faq" onClick={closeMenu}><Icon icon="comment-question" /> FAQ</Link>
            <Link href="#registry" onClick={closeMenu}><Icon icon="honey-pot" /> Registry</Link>
            <Link href="#photos" onClick={closeMenu}><Icon icon="camera-polaroid" /> Photo Gallery</Link>
          </div>
        </div>
        <div className="split">
          <div className="split-left">
            <div className="image"></div>
          </div>
          <div className="split-right">
            <Centered id="home">
              <img src="/cornerpattern.png" style={{ position: 'absolute', top: -20, right: -20, width: '50%' }} alt="" />
              <img src="/cornerpattern.png" style={{ position: 'absolute', top: -20, left: -20, width: '50%', transform: 'scaleX(-1)' }} alt="" />
              <span>The honor of your presence is</span>
              <span>requested at the wedding of</span>
              <Gap />
              <h2>Wendy Kanako Tahara</h2>
              <h2>and</h2>
              <h2>Christopher Ward Paine</h2>
              <Gap />
              <span>Saturday, the 12th of october. 2024</span>
              <span>4:15 in the afternoon</span>
              <Gap height={40} />
              <div className="buttons">
                <Link className="click" href="https://partiful.com/e/NYxs98omjqmQ20578CzN" target="_blank" style={{ width: '200px' }}>
                  RSVP Here
                </Link>
              </div>
              <Gap height={30} />
              <Link href="#details" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                <span style={{ fontSize: '16px' }}>See More</span>
                <i className="fa-solid fa-caret-down"></i>
              </Link>
            </Centered>
            <SmallCentered id="details">
              <h2>Wedding Details</h2>
              <Gap />
              <span style={{ textAlign: 'center' }}>Join us for a joyous celebration on</span>
              <span style={{ textAlign: 'center' }}><b>Saturday, October 12th, 2024</b>, starting at 4:15 PM.</span>
              <span style={{ textAlign: 'center' }}>Cocktail attire at the Marrakesh House</span>
              <span style={{ textAlign: 'center' }}>6310 Tompkins Way</span>
              <span style={{ textAlign: 'center' }}>Culver City, CA</span><br />
              <span style={{ textAlign: 'center' }}>Dinner and dancing will follow.</span>
              <span style={{ textAlign: 'center' }}>Please RSVP by September 12th to secure your spot.</span>
              <Gap height={40} />
            </SmallCentered>
            <SmallCentered id="schedule">
              <h2>Schedule</h2>
              <Gap />
              <span style={{ textAlign: 'center' }}>Arrivals begin at 3PM</span>
              <span style={{ textAlign: 'center' }}>Ceremony 4:15ish</span>
              <span style={{ textAlign: 'center' }}>Cocktails, buffet dinner and reception til 9PM</span>
              <Gap height={40} />
            </SmallCentered>
            <SmallCentered id="travel">
              <h2>Travel</h2>
              <Gap />
              <div className="buttons">
                <CardVanilla title="Culver Hotel" image="/culver.jpg" />
                <CardVanilla title="Pali Hotel" image="/pali.jpg" />
              </div>
              <Gap />
              <span style={{ textAlign: 'center' }}>
                We recommend flying into<br /><span style={{ textAlign: 'center' }}>Los Angeles International Airport (LAX).</span>
              </span>
              <br />
              <span style={{ textAlign: 'center' }}>
                For those of you coming in from out of town, we recommend staying at
                The Culver Hotel, located about a mile away from our house. The hotel offered our guests a 15% off group discount code (CAT15) when they make reservations online.
                The Culver celebrates its 100th year this September and is located adjacent to a new walking plaza “The Culver Steps" with coffee and bagel shops, cafes, restaurants, and a grocery store in the midst of downtown Culver City.
                <a href="https://www.culverhotel.com/">https://www.culverhotel.com/</a>
              </span>
              <br />
              <span style={{ textAlign: 'center',width:'100%' }}>
                An additional option is The <a href="https://www.palisociety.com/hotels/culver-city" target="_blank">Pali Hotel</a>, which is located a few steps away from The Culver Hotel. You can book a room at the Pali Hotel using our wedding rate code (MYSTICALRITUAL) by using the button below.

                <div className="buttons" style={{width:'100%', justifyContent:"center"}}>
                  <Link className="click" href="https://be.synxis.com/?Hotel=4253&Chain=10634&config=DIRECTRATE&arrive=2024-10-11&depart=2024-10-13&adult=2&child=0&promo=MYSTICALRITUAL" target="_blank">
                    Book Now
                  </Link>
                </div>
              </span>
              <br />
              <span style={{ textAlign: 'center' }}>
                There are many other Airbnbs and hotels options located close by as well.
              </span>
            </SmallCentered>
            <SmallCentered id="registry">
              <h2>Wedding Registry</h2>
              <Gap />
              <span style={{ textAlign: 'center' }}>If you feel so inspired, please use the link below to contribute to one of two charities we love  or a family honeymoon we plan take in 2025 to Japan. Thank you!</span>
              <Gap />
              <div className="buttons">
                <Card title="Friends of the Earth (US)" image="https://hitchd-cdn2.imgix.net/uploads/P9GT3utnu3yYo2iLGeru.jpg?crop=entropy&fit=crop&w=250&h=180" />
                <Card title="Jhamtse Gatsal Children's Community" image="https://hitchd-cdn2.imgix.net/uploads/cJusLrJdRkccvWJYkJXk.webp?crop=entropy&fit=crop&w=250&h=180" />
                <Card title="Japan Honeymoon in 2025" image="https://hitchd-cdn2.imgix.net/uploads/B45zMxoRPVgldQ2zSgff.webp?crop=entropy&fit=crop&w=250&h=180" />
              </div>
              <Gap />
              <Link className="click" href="https://www.hitchd.com/wendyandchris" target="_blank">
                Give Here
              </Link>
            </SmallCentered>
            <SmallCentered id="faq">
              <h2>F A Q</h2>
              <Gap />
              <span style={{ textAlign: 'center' }}><b>When is the RSVP deadline?</b></span>
              <span style={{ textAlign: 'center' }}>Please RSVP online by September 12th so we have an accurate headcount.</span>
              <br />

              <span style={{ textAlign: 'center' }}><b>Can I bring a date or children?</b></span>
              <span style={{ textAlign: 'center' }}>We love everyone but have limited space availability. Please check with us.</span>
              <br />

              <span style={{ textAlign: 'center' }}><b>How should I get there?</b></span>
              <span style={{ textAlign: 'center' }}>Rideshare to our home (the venue) is highly recommended - please be sure to arrive between 2:45-3:30pm.  We have arranged a shuttle for those parking on Jefferson Boulevard (about 500 yards down the hill from our house). The shuttle will run from 2:45-11pm from the roundabout at the entrance to Baldwin Hills Scenic Overlook State Park. This is just at start of Hetzler Road off of Jefferson Blvd and it will make return trips to the house. Please, no parking at the house, on Tompkins Way, or on Hetzler Road.</span>
              <br />

              <span style={{ textAlign: 'center' }}><b>What will the weather be like?</b></span>
              <span style={{ textAlign: 'center' }}>Temperature-wise, late October tends to be warm and pleasant in Los Angeles, averaging in the 70s in the daytime, and dipping to 60 at night. That being said, if you plan on staying for the after-party into late night, please bring a coat! We recommend checking the weather forecast in Culver City in the days before the event.</span>
              <br />

              <span style={{ textAlign: 'center' }}><b>What should I wear?</b></span>
              <span style={{ textAlign: 'center' }}>Cocktail attire is ideal. Festive and fun, fancy or simple. Feel free to be creative. We want you to be comfortable.</span>
              <br />

              <span style={{ textAlign: 'center' }}><b>What's the venue like?</b></span>
              <span style={{ textAlign: 'center' }}>Marrakesh House is an eco-friendly remodel of a mid-century modern home showcasing art and renewable energy on a hillside in Culver City. It is also a home for our four year old son Everett, chickens and plants.</span>
              <br />

              <span style={{ textAlign: 'center' }}><b>Is the wedding indoors or outdoors?</b></span>
              <span style={{ textAlign: 'center' }}>Most of the wedding will take place outdoors on our grounds. Portions of the interior of the house will open at 9pm for those of you staying for Club Fez. (Please RSVP separately for this at ClubFez.com)</span>
              <br />

              <span style={{ textAlign: 'center' }}><b>If I'm coming in from out of town, where should I stay?</b></span>
              <span style={{ textAlign: 'center' }}>Please see the travel section of this website for more information.</span>
              <br />

              <span style={{ textAlign: 'center' }}><b>Photos</b></span>
              <span style={{ textAlign: 'center' }}>Yes they are welcome, but please no photos during the ceremony as we'd prefer everyone to be very present during that time. There will be plenty of chances to take photos before and after!</span>
              <br />

              <span style={{ textAlign: 'center' }}><b>What kind of shoes should/shouldn't I wear?</b></span>
              <span style={{ textAlign: 'center' }}>Shoes with delicate heels strongly not recommended due to uneven slate floors and decomposed granite in our yard.<br/>Flats are best; wedges or platforms may be ok. Please wear something comfortable so your feet will be happy for the event, especially if you may be walking up & down Hetzler Road to & from the venue.</span>
              <br />

              <span style={{ textAlign: 'center' }}><b>Is there a smoking area?</b></span>
              <span style={{ textAlign: 'center' }}>If you choose to smoke cigarettes, please only do so on the cul de sac on the street in front of our house. A little blue covered ashtray will be available on the pillar by our mailbox.</span>
              <br />

              <span style={{ textAlign: 'center' }}><b>What time will the reception end?</b></span>
              <span style={{ textAlign: 'center' }}>9pm.</span>
              <br />

              <span style={{ textAlign: 'center' }}><b>Is there a gifts registry?</b></span>
              <span style={{ textAlign: 'center' }}>Yes! It's on this site. We have a few donation options listed.</span>
              <br />

              <span style={{ textAlign: 'center' }}><b>Will the wedding or reception be live streamed?</b></span>
              <span style={{ textAlign: 'center' }}>No.</span>
              <br />

              <span style={{ textAlign: 'center' }}><b>What is Club-Fez "Mystical Ritual"?</b></span>
              <span style={{ textAlign: 'center' }}>Club Fez is the name we use for special parties at Marrakesh House. In this case for an after-party immediately after our reception designed for more of our local friends since space is limited at the wedding.</span>
              <span style={{ textAlign: 'center' }}>Club Fez will start as some guests depart and others arrive in the 9 o'clock hour. If you wish to attend, please RSVP separately at <a href="http://clubfez.com/">clubfez.com</a> (also by September 12th) so we can get an accurate headcount. Club Fez is 21 and over only.</span>
              <br />

              <span style={{ textAlign: 'center' }}><b>Ceremony Note</b></span>
              <span style={{ textAlign: 'center' }}>For our brief ceremony we hope everyone will help us create a quiet sacred space.  It will happen in our home’s courtyard with mostly standing room and only few seats for those who really need it (please let us know in advance). We’ll also have overflow space (with seating) in nearby area.</span>
              <span style={{ textAlign: 'center' }}>Please no photographs or videos for this part of the wedding so everyone can be very present and enjoy the moment with us. (We will have a professional photographer.)</span>
              <br />

              <span style={{ textAlign: 'center' }}><b>Whom should I contact with questions?</b></span>
              <span style={{ textAlign: 'center' }}>Please email us at <a href="mailto:chris@papercutfilms.com">chris@papercutfilms.com</a> or <a href="mailto:wktahara@gmail.com">wktahara@gmail.com</a>.</span>
              <br />

              <Gap height={40} />
            </SmallCentered>
            <SmallCentered id="photos">
              <h2>Photo Gallery</h2>
              <Gap />
              <div className="buttons b-cards">
                {photosOne.map((photo, index) => <Card clickOpenLightbox={true} key={index} id={index} title={``} image={photo} />)}
              </div>
              <Gap />
              <div className="buttons b-cards">
                {photosTwo.map((photo, index) => <Card clickOpenLightbox={true} key={index + 3} id={index + 3} title={``} image={photo} />)}
              </div>
              <Gap />
              <div className="buttons b-cards">
                {photosThree.map((photo, index) => <Card clickOpenLightbox={true} key={index + 6} id={index + 6} title={``} image={photo} />)}
              </div>
              <Gap />
              <div className="buttons b-cards">
                {photosFour.map((photo, index) => <Card clickOpenLightbox={true} key={index + 9} id={index + 9} title={``} image={photo} />)}
              </div>
              <Gap />
              <div className="buttons b-cards">
                {photosFive.map((photo, index) => <Card clickOpenLightbox={true} key={index + 12} id={index + 12} title={``} image={photo} />)}
              </div>
              <Gap />
              <div className="buttons b-cards">
                {photosSix.map((photo, index) => <Card clickOpenLightbox={true} key={index + 15} id={index + 15} title={``} image={photo} />)}
              </div>
              <Gap />
              <div className="buttons b-cards">
                {photosSeven.map((photo, index) => <Card clickOpenLightbox={true} key={index + 18} id={index + 18} title={``} image={photo} />)}
              </div>
              <Gap />
              <div className="buttons b-cards">
                {photosEight.map((photo, index) => <Card clickOpenLightbox={true} key={index + 21} id={index + 21} title={``} image={photo} />)}
              </div>
              <Gap />
            </SmallCentered>
          </div>
        </div>
      </CssVarsProvider>
      <Lightbox
        open={indexlb >= 0}
        close={() => setIndexlb(-1)}
        index={indexlb}
        slides={photosOne.concat(photosTwo).concat(photosThree).concat(photosFour).concat(photosFive).concat(photosSix).concat(photosSeven).concat(photosEight).map((photo, index) => ({ src: photo, caption: `Photo ${index + 1}` }))}
      />
    </>
  );
}
