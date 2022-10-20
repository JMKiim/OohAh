import { useState } from 'react';
import GlobalStyle from './shared/globalStyle';
import Router from './shared/router';

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <GlobalStyle isDark={isDark} />
      <Router />
    </>
  );
}

export default App;
