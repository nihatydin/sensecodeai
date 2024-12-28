import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import RouterConfig from "./components/config/RouterConfig";
//import PageContainer from "./components/container/PageContainer";

function App() {
  return (
    <>
      {/* <PageContainer> */}
      <Navbar />
      <RouterConfig />
      <Footer />
      {/* </PageContainer> */}
    </>
  );
}

export default App;
