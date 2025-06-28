import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all"
import {About} from "./landingSections/About.jsx";
import {Services} from "./landingSections/Services.jsx";
import {Portfolio} from "./landingSections/Portfolio.jsx";
import {Header} from "./landingSections/Header.jsx";
import {Hero} from "./landingSections/Hero.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
        <div className = "min-h-screen">
            <Header />
            <main>
                <Hero />
                <About />
                <Services />
                <Portfolio />
            </main>
        </div>
    )
}
export default App
