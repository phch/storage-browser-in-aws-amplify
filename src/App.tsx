// import { useEffect, useState } from "react";
// import type { Schema } from "../amplify/data/resource";
// import { generateClient } from "aws-amplify/data";

// const client = generateClient<Schema>();

import * as React from 'react';

import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import outputs from '@/amplify_outputs.json';
import '@cloudscape-design/global-styles/index.css';

Amplify.configure(outputs);

function App() {
  return (
    <Authenticator.Provider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Authenticator.Provider>
  );
}

export default App;
