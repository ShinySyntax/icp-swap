import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
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
      <App />
    </IdentityKitProvider>
  </React.StrictMode>
);
