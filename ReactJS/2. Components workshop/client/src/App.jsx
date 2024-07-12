import Footer from './components/footer/Footer.jsx';
import Header from './components/header/Header.jsx';
import UserSection from './components/user-section/UserSection.jsx';
import './styles.css';

function App() {
    return (
        <>
            <Header />

            <main className="main">
                <UserSection />
            </main>
            <Footer />
        </>
    );
}

export default App;
