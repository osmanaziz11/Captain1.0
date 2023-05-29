import LeftBar from '../components/Navbar/LeftBar';
import TopBar from '../components/Navbar/TopBar';
import Footer from '../components/Footer';
import { Provider, useSelector } from 'react-redux';
import store from '../redux/store';
import '../style/index.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <div className="app w-screen relative h-screen">
          <LeftBar />
          <div className="content h-screen absolute right-0 bg-[#181818]">
            <TopBar />
            <div className="pages">
              <Component {...pageProps} />
            </div>
          </div>
          <Footer />
        </div>
      </Provider>
    </>
  );
}

export default MyApp;
