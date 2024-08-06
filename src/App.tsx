import { useEffect, useMemo, useState } from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';

import './App.scss';

import Layout from './components/Layout/Layout';
import BrowserStorageService from './services/browserStorage.service';

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
        <div>
          <h1>Welcome to Arthur&apos;s Web Dev Handbook</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
            aperiam sed consequuntur consectetur omnis eum voluptatibus
            excepturi quaerat quae earum repellendus alias voluptate rem, dolor
            minima atque explicabo ipsa aspernatur.
          </p>

          <button type="button" onClick={handleAccess}>
            Access
          </button>
        </div>
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
