import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import 'Routes' for version 6

import "./index.scss";

import Header from "home/Header";
import Footer from "home/Footer";
import PDPContent from "./PDPContent";

const App = () => (
  <Router>
    <div className="text-3xl mx-auto max-w-6xl">
      <Header />
      <div className="my-10">
        <Routes> {/* Use 'Routes' for version 6 */}
          <Route path="/product/:id" element={<PDPContent />} /> {/* Use 'element' prop for rendering component */}
          <Route index element={<PDPContent />} /> {/* Use 'index' for the default route */}
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("app"));

//48:42