
import './App.css';

import IntroSection from './components/intro/Intro'
import ContactSection from './components/contact-section/ContactSection'
import FooterSection from './components/footer/Footer'
import Map from './components/google-Maps/Map'

function App() {
  return (
    <div className="App">
      <IntroSection />
      <ContactSection />
      <Map/>
      <FooterSection />
    </div>
  );
}

export default App;
