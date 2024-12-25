import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Deposit from './pages/Deposit';
import Borrow from './pages/Borrow';
import Provide from './pages/Provide';
import Stats from './pages/Stats';
import './index.css';
import { IdentityKitProvider } from '@nfid/identitykit/react';
import '@nfid/identitykit/react/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IdentityKitProvider
      // authType={IdentityKitAuthType.DELEGATION}
      signerClientOptions={{
        targets: ['bd3sg-teaaa-aaaaa-qaaba-cai'],
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Deposit />} />
            <Route path="borrow" element={<Borrow />} />
            <Route path="provide" element={<Provide />} />
            <Route path="stats" element={<Stats />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </IdentityKitProvider>
  </React.StrictMode>
);
