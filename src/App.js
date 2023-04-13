import './App.scss';
import Department from './component/Department';
import Experts from './component/Experts';
import Footer from './component/Footer';
import HeroBanner from './component/HeroBanner';
import Joinus from './component/Joinus';
import Medicine from './component/Medicine';
import Navbars from './component/Navbars';
import Services from './component/Services';
import Team from './component/Team';
import ThirdSection from './component/ThirdSection';

function App() {
  return (
    <div className="container">
      <Navbars/>
    <HeroBanner/>
    <Services/>
    <ThirdSection/>
    <Experts/>
    <Department/>
    <Medicine/>
    <Team/>
    <Joinus/>
    <Footer/>
    </div>
  );
}

export default App;
