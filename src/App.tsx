import { Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Download from "./pages/downloads/Download";
import Documentation from "./pages/documentation/Documentation";
import Example from "./pages/example/Example";
import NotFound from "./pages/404/404";
import Windows from "./pages/downloads/Windows";
import MacOS from "./pages/downloads/MacOS";
import Linux from "./pages/downloads/Linux";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<About />} />
        <Route path="download" element={<Download />}>
          <Route index element={<Windows />} />
          <Route path="macos" element={<MacOS />} />
          <Route path="linux" element={<Linux />} />
        </Route>
        <Route path="documentation" element={<Documentation />} />
        <Route path="examples" element={<Example />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
