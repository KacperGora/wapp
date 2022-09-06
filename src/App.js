import "./App.css";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Routers from "./routes/Routers";
import { Provider } from "react-redux";
import store from "./store/store";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Routers>
          <div className="app"/>
        </Routers>
      </HashRouter>
    </Provider>
  );
}

export default App;
