import { useEffect, useState } from 'react';

type ThemeType = 'light' | 'dark';

interface ReturnProps {
  theme: ThemeType,
  themeToggler: (val: ThemeType) => void
}

export function useDarkMode(): ReturnProps {
  const [theme, setTheme] = useState<ThemeType>('light');
  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    setMode(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as ThemeType;
    localTheme ? setTheme(localTheme) : setMode('light');
  }, []);

  return { theme, themeToggler };
}