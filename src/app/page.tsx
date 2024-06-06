'use client';
import Image from "next/image";
import { Button, CssVarsProvider, ThemeProvider } from "@mui/joy";
import { useState, ReactNode, useMemo } from "react";
import Link from "next/link";
import { CoordinateRegion, Marker, Map } from "mapkit-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// 9 photos of https://source.unsplash.com/random/500x360?nature
const photosOne = ["https://source.unsplash.com/random/500x360?nature", "https://source.unsplash.com/random/500x360?nature", "https://source.unsplash.com/random/500x360?nature"];
const photosTwo = ["https://source.unsplash.com/random/500x360?nature", "https://source.unsplash.com/random/500x360?nature", "https://source.unsplash.com/random/500x360?nature"];
const photosThree = ["https://source.unsplash.com/random/500x360?nature", "https://source.unsplash.com/random/500x360?nature", "https://source.unsplash.com/random/500x360?nature"];

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
  return <i className={`fa-regular fa-${icon}`} style={{marginRight:'4px'}}></i>
}

export default function Home() {

  const [lbOpen, setLbOpen] = useState(false);

  function closeMenu() {
    document.querySelector('.menu')?.classList.remove('open');
  }
  function Card({ image, title, clickOpenLightbox=false }: { image: string, title: string, clickOpenLightbox?: boolean }) {
    // Image with 30px border radius with text under. Dead simple. Will have 3 in container.
    return (
      <div className="card" onClick={clickOpenLightbox?()=>{setLbOpen(true)}:undefined}>
        <img alt={title} src={image} width="250" height="180" />
        <span>{title}</span>
      </div>
    )
  }
  return (
    <>
    <CssVarsProvider defaultMode="light">
      <div className="menu-button" onClick={()=>{document.querySelector('.menu')?.classList.toggle('open')}}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className="menu">
        <div className="menu-items">
          <Link href="#title" onClick={closeMenu}><Icon icon="home"/> Home</Link>
          <Link href="#registry" onClick={closeMenu}><Icon icon="honey-pot"/> Registry</Link>
          <Link href="#details" onClick={closeMenu}><Icon icon="memo-pad"/> Details</Link>
          <Link href="#hotels" onClick={closeMenu}><Icon icon="hotel"/> Accomodations</Link>
        </div>
      </div>
      <div className="split">
        <div className="split-left">
          <div className="image"></div>
        </div>
        <div className="split-right">
          <Centered id="title">
            <img src="/cornerpattern.png" style={{position:'absolute',top:-20,right:-20,width:'50%'}} alt="" />
            <img src="/cornerpattern.png" style={{position:'absolute',top:-20,left:-20,width:'50%',transform:'scaleX(-1)'}} alt="" />
            <span>The honor of your presence is</span>
            <span>requested at the wedding of</span>
            <Gap />
            <h2>Wendy Kanako Tahara</h2>
            <h2>and</h2>
            <h2>Christopher Ward Paine</h2>
            <Gap />
            <span>Saturday, the 12th of october. 2024</span>
            <span>4:15 in the afternoon</span>
            <Gap height={40}/>
            <div className="buttons">
              <Link className="click" href="https://partiful.com/e/NYxs98omjqmQ20578CzN" target="_blank" style={{width:'200px'}}>
                RSVP Here
              </Link>
            </div>
            <Gap height={30} />
            <Link href="#registry" style={{cursor:'pointer',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textDecoration:'none'}}>
              <span style={{fontSize:'16px'}}>See More</span>
              <i className="fa-solid fa-caret-down"></i>
            </Link>
          </Centered>
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
          <SmallCentered id="details">
            <h2>Wedding Details</h2>
            <Gap />
            <span style={{ textAlign: 'center' }}>Join us for a joyous celebration on</span>
            <span style={{ textAlign: 'center' }}><b>Saturday, October 12th, 2024</b>, starting at 4:15 PM.</span>
            <span style={{ textAlign: 'center' }}>Cocktail attire at the Marrakesh House - 6310 Tompkins Way. </span>
            <span style={{ textAlign: 'center' }}>Dinner and dancing will follow.</span>
            <span style={{ textAlign: 'center' }}>Please RSVP by September 12th to secure your spot.</span>
            <Gap height={40}/>
            <MapElement/>
          </SmallCentered>
          <SmallCentered id="hotels">
            <h2>Accomodations</h2>
            <Gap />
            <div className="buttons">
              <Card title="Culver Hotel" image="/culver.jpg" />
              <Card title="Pali Hotel" image="/pali.jpg" />
            </div>
            <Gap />
            <span style={{textAlign:"center"}}>Friends and family members are invited to stay at the Culver Hotel.  This historic landmark building celebrates it's 100th anniversary this year having once hosted co-founder Charlie Chaplin and cast members of the Wizard of Oz. Recently renovated, it now enjoys the company of The Culver Steps, a new walking plaza with dining, coffee, bagels, and grocery all in downtown Culver City.  (Use our group code “CAT15” when booking.) <Link href="https://www.culverhotel.com/" target="_blank">https://www.culverhotel.com/</Link>.</span>
            <Gap />
            <span style={{textAlign:"center"}}>Other lodging options include The Pali Hotel next door <Link href="https://www.palisociety.com/hotels/culver-city" target="_blank">https://www.palisociety.com/hotels/culver-city</Link> or any one of many hotels and Airbnb options in the area.  The wedding venus is about a mile from the the hotel.  Note that the Friday evening before the wedding, a few of us will be sharing no-host drinks at 9PM in the Velvet Lounge of the Culver Hotel bar.</span>
          </SmallCentered>
          <SmallCentered id="photos">
            <h2>Photo Gallery</h2>
            <Gap />
            <div className="buttons">
              {photosOne.map((photo, index) => <Card clickOpenLightbox={true} key={index} title={`Photo ${index + 1}`} image={photo} />)}
            </div>
            <div className="buttons">
              {photosTwo.map((photo, index) => <Card clickOpenLightbox={true} key={index} title={`Photo ${index + 4}`} image={photo} />)}
            </div>
            <div className="buttons">
              {photosThree.map((photo, index) => <Card clickOpenLightbox={true} key={index} title={`Photo ${index + 7}`} image={photo} />)}
            </div>
          </SmallCentered>
        </div>
      </div>
    </CssVarsProvider>
    <Lightbox
        open={lbOpen}
        close={() => setLbOpen(false)}
        slides={photosOne.concat(photosTwo).concat(photosThree).map((photo, index) => ({ src: photo, caption: `Photo ${index + 1}` }))}
      />
    </>
  );
}
