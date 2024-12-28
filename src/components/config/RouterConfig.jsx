import {Routes, Route} from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/about/About";
import Contact from "../../pages/contact/Contact";
import Activities from "../../pages/activities/Activities";

function RouterConfig() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about/" element={<About />} />
        <Route path="activities/" element={<Activities />} />
        <Route path="contact/" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default RouterConfig;
