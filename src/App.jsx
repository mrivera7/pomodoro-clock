/* eslint-disable react/prop-types */
import React from 'react';

import { CountdownTimer } from './components';

function App(props) {
  // eslint-disable-next-line no-console
  console.log(props);
  return (
    <>
      <CountdownTimer />
    </>
  );
}

export default App;
