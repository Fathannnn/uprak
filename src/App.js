// import React from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Content from "./components/Content";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Hero />
//       <Content />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Navbar />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
}

export default App;