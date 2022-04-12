import {
  Routes,
  Route,
} from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import UserPage from "./pages/user/UserPage";
import IndexView from './views/IndexView';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexView />} />
      <Route path="main" element={<MainPage />} />
      <Route path="user/:menu" element={<UserPage/>} />
    </Routes>
  );
}

export default App;
