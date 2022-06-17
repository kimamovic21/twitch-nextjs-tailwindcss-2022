import Navbar from '../components/Navbar';
import '../styles/globals.css';
import {SessionProvider} from 'next-auth/react';

function MyApp({ session, Component, pageProps }) {
  return (
    <SessionProvider session={session}>
      <Navbar/>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp;


// 1. dodajemo Navbar komponentu
// 2. dodajemo SessionProvider element