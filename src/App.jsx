import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all"
import {About} from "./landingSections/About.jsx";
import {Services} from "./landingSections/Services.jsx";
import {Portfolio} from "./landingSections/Portfolio.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
        <div>
            <About />
            <Services />
            <Portfolio />
        </div>
    )
}
export default App
