import "./App.css";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Routers from "./routes/Routers";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Routers />
      </div>
    </Provider>
  );
}

export default App;
