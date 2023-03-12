import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import React, { useState } from "react";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  const pageSize = 9;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <LoadingBar color="#f11946" height={3} progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                apiKey={apiKey}
                key="general"
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                apiKey={apiKey}
                key=" business"
                country="in"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                apiKey={apiKey}
                key="entertainment"
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                apiKey={apiKey}
                key="general"
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                apiKey={apiKey}
                key="health"
                country="in"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                apiKey={apiKey}
                key="science"
                country="in"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                apiKey={apiKey}
                key="sports"
                country="in"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                apiKey={apiKey}
                country="in"
                key="technology"
                category="technology"
              />
            }
          />

          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                apiKey={apiKey}
                country="in"
                key="sports"
                category="sports"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
