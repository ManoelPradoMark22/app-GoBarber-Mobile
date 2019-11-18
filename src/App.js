import React from 'react';
import { useSelector } from 'react-redux';

import createRouter from './routes';

export default function App() {
  /* se tiver alguma alteração em signed... */
  const signed = useSelector(state => state.auth.signed);

  /* ...recria as rotas */
  const Routes = createRouter(signed);

  return <Routes />;
}
