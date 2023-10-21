import { Route, Routes, BrowserRouter } from "react-router-dom";
import AppLayout from "@pages/layout/AppLayout";
import Home from "@pages/Home";
import CreatePost from "@pages/CreatePost";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/new-post" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
