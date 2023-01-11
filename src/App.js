// importing global styles
import GlobalStyle from "./components/GlobalStyle";
//importing pages
import AboutUs from "./pages/AboutUs";

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <AboutUs />
        </div>
    );
}

export default App;
