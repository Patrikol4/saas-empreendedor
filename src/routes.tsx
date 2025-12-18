import { createContext } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router';
// Páginas
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
import type { UserContextType } from "./reducers/mainReducer";

export const Context = createContext<UserContextType>({
    state: null,
    dispatch: null
})

export default function Routers() {
    return (
        <BrowserRouter>
            <Routes>
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
        </BrowserRouter>
    )
}