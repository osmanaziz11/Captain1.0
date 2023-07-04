import LeftBar from '../components/Navbar/LeftBar';
import TopBar from '../components/Navbar/TopBar';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from '../redux/store';
import '../style/index.css';
import Login from './Login';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  if (router.pathname === '/splash') {
    return (
      <Provider store={store}>
        <Component {...pageProps} />;
      </Provider>
    );
  } else {
    return (
      <>
        <Provider store={store}>
          {router.pathname === '/Login' ? (
            <Login />
          ) : (
            <div className="app w-screen relative h-screen ">
              <LeftBar />
              <div className="content h-screen absolute right-0 bg-[#181818]">
                <TopBar />
                <div className="pages">
                  <Component {...pageProps} />
                </div>
              </div>
              <Footer />
            </div>
          )}
        </Provider>
      </>
    );
  }
}
export default MyApp;
