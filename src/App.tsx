import { Route, Routes, BrowserRouter } from "react-router-dom";
import AppLayout from "@pages/layout/AppLayout";
import Home from "@pages/Home";
import CreatePost from "@pages/CreatePost";
import Profile from "@pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/new-post" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
