import { Route, Routes, BrowserRouter } from "react-router-dom";
import AppLayout from "@pages/layout/AppLayout";
import HotTopic from "@/components/hot-topics/HotTopics";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HotTopic />} />
          <Route path="/test" element={<h1>Test</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
