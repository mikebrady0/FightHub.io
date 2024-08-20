import Header from '../app/components/Header';
import Footer from '../app/components/Footer'; 
import Intro from '../app/components/Intro';

export default function Home() {
  return (
    <body id="main">
      <Header />
      <Intro />
      <section 
  style={{
    display: 'inline-flex',
    justifyContent: 'space-evenly',
    padding: '20px',
    width: '100%',
    flexWrap: 'wrap', 
  }}
>
  <div 
    style={{
      margin: '10px',
      width: '400px',
      height: '500px',
      textAlign: 'center',
      flex: '1 1 300px', 
    }}
    id="media-container"
  >
    <div id="media-content">
      <iframe 
        width="100%"
        height="300px"
        src="https://www.youtube.com/embed/rvDnn1kCYXY?si=xjR4xjrUKLaV8fUX" 
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
      ></iframe>
      <p style={{ margin: '10px' }}>
        The UFC 304 weigh-ins took place recently, with all fighters, except one, successfully making weight. The main event features a highly anticipated rematch between welterweight champion Leon Edwards and Belal Muhammad. The co-main event will see interim heavyweight champion Tom Aspinall face Curtis Blaydes​.
      </p>
    </div>
  </div>

  <div 
    style={{
      margin: '10px',
      width: '400px',
      height: '500px',
      textAlign: 'center',
      flex: '1 1 300px', 
    }}
    id="media-container"
  >
    <div id="media-content">
      <iframe 
        width="100%" 
        height="300px" 
        src="https://www.youtube.com/embed/Uu4ifnxJon8?si=-v8Fd-q5-c73gUdB" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
      ></iframe>
      <p style={{ margin: '10px' }}>
        The UFC 304 face-off and press conference featured intense staredowns and lively exchanges. Leon Edwards and Belal Muhammad, headlining the event, showed mutual respect but hinted at unfinished business from their previous no-contest bout. The co-main event participants, Tom Aspinall and Curtis Blaydes, were also fired up, promising an exciting showdown. The press conference highlighted the fighters' readiness and determination, setting the stage for an electrifying night at Co-op Live in Manchester.
      </p>
    </div>
  </div>

  <div 
    style={{
      margin: '10px',
      width: '400px',
      height: '500px',
      textAlign: 'center',
      flex: '1 1 300px', 
    }}
    id="media-container"
  >
    <div id="media-content">
      <iframe 
        width="100%" 
        height="300px" 
        src="https://www.youtube.com/embed/K9yDXzw9jYQ?si=dc-8uOaR4gZLczJt" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
      ></iframe>
      <p style={{ margin: '10px' }}>
        On Friday, UFC CEO Dana White announced via social media that Sean O’Malley will defend his bantamweight title against top contender Merab Dvalishvili in the main event of UFC 306. The event is scheduled for September 14 at The Sphere in Las Vegas. White has described this pay-per-view show as a unique, high-cost production, making it the most expensive in the promotion’s history.
      </p>
    </div>
  </div>
</section>
    
    <Footer />
    </body>
  );
};
