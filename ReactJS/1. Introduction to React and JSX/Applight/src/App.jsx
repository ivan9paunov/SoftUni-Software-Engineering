import About from './components/About.jsx';
import ContactUs from './components/ContactUs.jsx';
import DownloadApp from './components/DownloadApp.jsx';
import FAQ from './components/FAQ.jsx';
import Features from './components/Features.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Navigation from './components/Navigation.jsx';
import OurTeam from './components/OurTeam.jsx';
import Testimonials from './components/Testimonials.jsx';
import VideoPresentation from './components/VideoPresentation.jsx';

function App() {
    return (
        <>
            <Navigation />

            <Header />

            <About />

            <VideoPresentation />

            <Features />

            <OurTeam />

            <Testimonials />

            <FAQ />

            <ContactUs />

            <DownloadApp />

            <Footer />
        </>
    );
}

export default App;
