import { useEffect, useMemo, useState } from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';

import './App.scss';

import Layout from './components/Layout/Layout';
import BrowserStorageService from './services/browserStorage.service';
import SplashPage from './pages/SplashPage';

function App() {
  const isUserFirstTimeStorageKey = 'isUserFirstTime';
  const browserStorageService = useMemo(() => new BrowserStorageService(), []);

  const [isUserFirstTime, setIsUserFirstTime] = useState<boolean>(true);

  useEffect(() => {
    const storedValue = browserStorageService.getLocalStorage<boolean>(
      isUserFirstTimeStorageKey,
    );

    if (storedValue === null) {
      browserStorageService.setLocalStorage(isUserFirstTimeStorageKey, true);
      setIsUserFirstTime(true);
    } else {
      setIsUserFirstTime(storedValue);
    }
  }, [browserStorageService]);

  const handleAccess = () => {
    setIsUserFirstTime(false);
    browserStorageService.setLocalStorage(isUserFirstTimeStorageKey, false);
  };

  return (
    <>
      {isUserFirstTime ? (
        <SplashPage handleAccess={handleAccess} />
      ) : (
        <HashRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<h1>Home</h1>} />
            </Route>
          </Routes>
        </HashRouter>
      )}
    </>
  );
}

export default App;
