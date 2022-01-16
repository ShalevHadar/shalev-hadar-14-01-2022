import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FavoritesPage } from "./favorites-page/favorites-page";
import { Homepage } from "./home-page/home-page";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
