import "./App.css";
import Body from "./components/Body";
import { Provider } from "react-redux";
import movieStore from "./utils/Redux/movieStore";

function App() {
  return (
    <Provider store={movieStore}>
      <Body />
    </Provider>
  );
}

export default App;
