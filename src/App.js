// importing global styles
import GlobalStyle from "./components/GlobalStyle";
//importing pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import { Routes, Route, useLocation } from "react-router-dom";
import NotFound from "./components/NotFound";
import MovieDetail from "./pages/MovieDetail";
//animation
import { AnimatePresence } from "framer-motion";

function App() {
    const location = useLocation();
    return (
        <div className="App">
            <GlobalStyle />
            <Nav />
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<AboutUs />} />
                    <Route path="/work" element={<OurWork />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/work/:id" element={<MovieDetail />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </AnimatePresence>
        </div>
    );
}

export default App;
