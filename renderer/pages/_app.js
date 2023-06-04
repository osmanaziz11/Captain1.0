import LeftBar from '../components/Navbar/LeftBar';
import TopBar from '../components/Navbar/TopBar';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import store from '../redux/store';
import '../style/index.css';
import SplashScreen from '../components/splash';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Custom function to determine the layout based on the page
  if (router.pathname === '/splash') {
    return <Component {...pageProps} />;
  } else {
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
}

export default MyApp;
