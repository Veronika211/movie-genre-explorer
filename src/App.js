import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import MovieListPage from "./pages/MovieListPage";
import ErrorBoundaryFallback from "./components/ErrorBoundaryFallback";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
              <LandingPage />
            </ErrorBoundary>
          }
        />
        <Route path={`/genre/:id`} element={<MovieListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
