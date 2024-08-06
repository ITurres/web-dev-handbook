import { Outlet } from 'react-router-dom';

import './Layout.scss';

function Layout() {
  return (
    <div className="layout">
      {/* <aside className="sidepanel"></aside> */}
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
