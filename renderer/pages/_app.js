import LeftBar from '../components/Navbar/LeftBar';
import TopBar from '../components/Navbar/TopBar';
import Footer from '../components/Footer';
import '../style/index.css';
import ItemModel from '../components/Canteen/ItemModel';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="app w-screen relative h-screen">
        {/* <ItemModel /> */}
        <LeftBar />
        <div className="content h-screen absolute right-0 bg-[#181818]">
          <TopBar />
          <div className="pages">
            <Component {...pageProps} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
