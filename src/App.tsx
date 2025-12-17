import { useState, useEffect, createContext, useReducer, useContext } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router';
// import Home from './pages/Home';
// import Profile from './pages/Profile';
// import Login from './pages/Login';

// import UserProfile from './pages/UserProfile';
// import SubscribersUsersPosts from './pages/SubscribersUsersPosts';
import { reducer, initialState, type UserContextType } from './reducers/mainReducer';
// // realms page
// import Redutos from './pages/Redutos'
// import Wallet from './pages/Wallet';
// import RedutoView from './pages/Redutos/Reduto';

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { UsuariosPage } from './pages/usuario';
import { ClientesPage } from './pages/cliente';
import { DashboardPage } from './pages/dashboard';
import { PropostasPage } from './pages/proposta';
import { NegociosPage } from './pages/negocios';
import { ConfiguracoesPage } from './pages/configuracao';
import { AplicacoesPage } from './pages/aplicacao';
import { QuotationsPage } from './pages/quotation';
import { JournalPage } from './pages/journal';
import { DatabasePage } from './pages/database';

export const UserContext = createContext<UserContextType | null>(null);


const Routing = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userData, setUserData] = useState();
  //const { state, dispatch } = useContext(UserContext);

  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem('session'))
  //   if (user) {
  //     dispatch({
  //       type: 'USER',
  //       payload: user
  //     });
  //     // Navegação opcional após login
  //     navigate('/');
  //   } else {
  //     console.log("Verificando se há loop. ")
  //     //navigate('/login');
  //     const publicPaths = ['/login'];
  //     if (!publicPaths.includes(location.pathname)) {
  //       navigate('/login');
  //     }
  //   }
  // }, [dispatch, navigate, location]);

  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardPage />} />
      {/* <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} /> */}
      <Route path="/clientes" element={<ClientesPage />} />
      <Route path="/usuarios" element={<UsuariosPage />} />
      <Route path="/propostas" element={<PropostasPage />} />
      <Route path="/negocios" element={<NegociosPage />} />
      <Route path="/aplicacoes" element={<AplicacoesPage />} />
      <Route path="/cotacoes" element={<QuotationsPage />} />
      <Route path="/journal" element={<JournalPage />} />
      <Route path="/bancodedados" element={<DatabasePage />} />
      <Route path="/configuracoes" element={<ConfiguracoesPage />} />


    </Routes>
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const queryClient = new QueryClient()


  return (
    <QueryClientProvider client={queryClient}>
      <UserContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </UserContext.Provider>
    </QueryClientProvider>
  );
}

export default App;