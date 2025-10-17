import { Layout } from "./components/layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Page } from "./components/Page/Page";
import { ActiveSectionProvider } from "./contexts/ActiveSection/ActiveSectionProvider";
import { ThemeProvider } from "./contexts/Theme/ThemeProvider";

function App() {
  return (
    <ActiveSectionProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Page />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ActiveSectionProvider>
  );
}

export default App;
