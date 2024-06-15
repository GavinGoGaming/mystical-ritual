'use client';
import Image from "next/image";
import { Button, CssVarsProvider, Input, ThemeProvider } from "@mui/joy";
import { useState, ReactNode, useMemo } from "react";
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
  return <i className={`fa-regular fa-${icon}`} style={{marginRight:'4px'}}></i>
}

export default function Home() {

  const [indexlb, setIndexlb] = useState(-1);
  const [dbgEditColors, showDebugEditColors] = useState(false);

  function closeMenu() {
    document.querySelector('.menu')?.classList.remove('open');
  }
  function Card({ image, title, clickOpenLightbox=false, id=-1 }: { image: string, title: string, clickOpenLightbox?: boolean, id?: number }) {
    // Image with 30px border radius with text under. Dead simple. Will have 3 in container.
    return (
      <div onClick={clickOpenLightbox?()=>{setIndexlb(id);}:undefined} className="card card-col">
        {clickOpenLightbox ? <>
            <div className="c-col img" style={{backgroundImage:`url("${image}")`}}>

            </div>
        </> : <img alt={title} src={image} width={250} height={180} className="img" />}
        {title ? <span>{title}</span> : undefined}
      </div>
    )
  }

  useState(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('debugging-mode');
    if (myParam === 'true') {
      showDebugEditColors(true);
    }
  }, []);

  return (
    <>
    <CssVarsProvider defaultMode="light">
      <div className="debugging" style={{display:`${dbgEditColors?'block':'none'}`,zIndex:'100',fontFamily:'Inter, Helvetica, Arial',background:"#222",color:"white",position:'absolute',width:'320px',height:'200px',top:'10px',left:'10px',border:'1px solid white',borderRadius:'15px'}}>
        <div style={{width:'100%',height:'100%',position:'relative',padding:'10px'}}>
          <div style={{display:'flex'}}>
            <span style={{fontSize:'12px',color:'white'}}>background: </span>
            <Input type={'color'} defaultValue={`#EBE1CD`} component={'span'} onChange={(e)=>{document.documentElement.style.setProperty('--bg',e.target.value)}} />
          </div>
          <div style={{display:'flex'}}>
            <span style={{fontSize:'12px',color:'white'}}>foreground (body): </span>
            <Input type={'color'} defaultValue={`#000`} component={'span'} onChange={(e)=>{document.documentElement.style.setProperty('color',e.target.value)}} />
          </div>
          <div style={{display:'flex'}}>
            <span style={{fontSize:'12px',color:'white'}}>foreground (spans): </span>
            <Input type={'color'} defaultValue={`#402718`} component={'span'} onChange={(e)=>{document.documentElement.style.setProperty('--brown',e.target.value)}} />
          </div>
          <p style={{position:'absolute',bottom:'2px',left:'8px',fontSize:'12px'}}>gavin's put-anywhere-color-debug-tool - ver. 1.0 (2022)</p>
        </div>
      </div>


      <div className="menu-button" onClick={()=>{document.querySelector('.menu')?.classList.toggle('open')}}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className="menu">
        <div className="menu-items">
          <Link href="#home" onClick={closeMenu}><Icon icon="home"/> Home</Link>
          <Link href="#details" onClick={closeMenu}><Icon icon="memo-pad"/> Details</Link>
          <Link href="#parking" onClick={closeMenu}><Icon icon="car"/> Parking</Link>
          <Link href="#hotels" onClick={closeMenu}><Icon icon="hotel"/> Accomodations</Link>
          <Link href="#registry" onClick={closeMenu}><Icon icon="honey-pot"/> Registry</Link>
          <Link href="#photos" onClick={closeMenu}><Icon icon="camera-polaroid"/> Photo Gallery</Link>
        </div>
      </div>
      <div className="split">
        <div className="split-left">
          <div className="image"></div>
        </div>
        <div className="split-right">
          <Centered id="home">
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
            <Link href="#details" style={{cursor:'pointer',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textDecoration:'none'}}>
              <span style={{fontSize:'16px'}}>See More</span>
              <i className="fa-solid fa-caret-down"></i>
            </Link>
          </Centered>
          <SmallCentered id="details">
            <h2>Wedding Details</h2>
            <Gap />
            <span style={{ textAlign: 'center' }}>Join us for a joyous celebration on</span>
            <span style={{ textAlign: 'center' }}><b>Saturday, October 12th, 2024</b>, starting at 4:15 PM.</span>
            <span style={{ textAlign: 'center' }}>Cocktail attire at the Marrakesh House - 6310 Tompkins Way. </span>
            <span style={{ textAlign: 'center' }}>Dinner and dancing will follow.</span>
            <span style={{ textAlign: 'center' }}>Please RSVP by September 12th to secure your spot.</span>
            <Gap height={40}/>
          </SmallCentered>
          <SmallCentered id="parking">
            <h2>Parking Info</h2>
            <Gap />
            <span style={{ textAlign: 'center' }}>This section is TBD and has no current content.</span>
            <Gap height={40}/>
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
          <SmallCentered id="photos">
            <h2>Photo Gallery</h2>
            <Gap />
            <div className="buttons b-cards">
              {photosOne.map((photo, index) => <Card clickOpenLightbox={true} key={index} id={index} title={``} image={photo} />)}
            </div>
            <Gap />
            <div className="buttons b-cards">
              {photosTwo.map((photo, index) => <Card clickOpenLightbox={true} key={index+3} id={index+3} title={``} image={photo} />)}
            </div>
            <Gap /> 
            <div className="buttons b-cards">
              {photosThree.map((photo, index) => <Card clickOpenLightbox={true} key={index+6} id={index+6} title={``} image={photo} />)}
            </div>
            <Gap />
            <div className="buttons b-cards">
              {photosFour.map((photo, index) => <Card clickOpenLightbox={true} key={index+9} id={index+9} title={``} image={photo} />)}
            </div>
            <Gap />
            <div className="buttons b-cards">
              {photosFive.map((photo, index) => <Card clickOpenLightbox={true} key={index+12} id={index+12} title={``} image={photo} />)}
            </div>
            <Gap />
            <div className="buttons b-cards">
              {photosSix.map((photo, index) => <Card clickOpenLightbox={true} key={index+15} id={index+15} title={``} image={photo} />)}
            </div>
            <Gap />
            <div className="buttons b-cards">
              {photosSeven.map((photo, index) => <Card clickOpenLightbox={true} key={index+18} id={index+18} title={``} image={photo} />)}
            </div>
            <Gap />
            <div className="buttons b-cards">
              {photosEight.map((photo, index) => <Card clickOpenLightbox={true} key={index+21} id={index+21} title={``} image={photo} />)}
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
