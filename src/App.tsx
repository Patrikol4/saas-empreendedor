import { useEffect, createContext, useReducer, useContext } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router';
// React - Query 
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
// Reducer 
import { reducer, initialState } from './reducers/mainReducer';
// Páginas
// import { UsuariosPage } from './pages/usuario';
// import { ClientesPage } from './pages/cliente';
// import { DashboardPage } from './pages/dashboard';
// import { PropostasPage } from './pages/proposta';
// import { NegociosPage } from './pages/negocios';
// import { ConfiguracoesPage } from './pages/configuracao';
// import { AplicacoesPage } from './pages/aplicacao';
// import { QuotationsPage } from './pages/quotation';
// import { JournalPage } from './pages/journal';
// import { DatabasePage } from './pages/database';
import Routers, { Context } from './routes';


const queryClient = new QueryClient()



function App() {
  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <QueryClientProvider client={queryClient}>
      <Context.Provider value={{ state, dispatch }}>
      
          <Routers />
   
      </Context.Provider>
    </QueryClientProvider>
  );
}

export default App;