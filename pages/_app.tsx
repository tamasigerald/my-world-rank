import 'reset.css';
import '../styles/fonts.css'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';



import { ThemeProvider, lightTheme, darkTheme } from '../styles/theme';
import { GlobalStyles } from '../styles/globalStyles';

import { useDarkMode } from '../hooks/useDarkMode';
import { Header } from '../components/Header';
import { SearchContext } from '../contexts/SearchContext';
import { SearchBar } from '../components/SearchBar';
import { ScrollButton } from '../components/ScrollButton';

function MyApp({ Component, pageProps }) {
  const { theme, themeToggler } = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const [ searchValue, setSearchValue ]: any = useState('');
  const [ showSeach, setShowSearch ]: any = useState(true);

  const router = useRouter();
  const route = router.pathname;

  const checkRoute = () => {
    if (route === '/') {
      setShowSearch(true);
    }
    else if (route !== '/currency') {
      setShowSearch(false);
    }
    else {
      setShowSearch(true);
    }

    router.events.on('routeChangeComplete', () => {
      setSearchValue('');
      window.scroll({ top: 0 });
    });
  }

  const handleScrollBtn = () => {

  }

  useEffect(checkRoute);

  return (
    <ThemeProvider theme={themeMode}>
      <SearchContext.Provider value={{ searchValue, setSearchValue, showSeach }}  >
        <GlobalStyles />
        <Header {...pageProps} theme={theme} themeToggler={(val) => themeToggler(val)}/>
        {showSeach && <SearchBar {...pageProps} theme={theme} setSearchValue={setSearchValue} showSearch={showSeach} />}
        <Component {...pageProps} theme={theme} searchValue={searchValue} />
        <ScrollButton {...pageProps} theme={theme} />
      </SearchContext.Provider>
    </ThemeProvider>
  )
}

export default MyApp



