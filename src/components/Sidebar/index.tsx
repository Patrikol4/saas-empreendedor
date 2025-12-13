import { X, Menu, UserCircle, ChevronDown, LogOut, ChartArea, CheckCircle, Database, FileText, LayoutDashboard, Settings, Users } from "lucide-react"
import { useState } from "react";

export const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
      const [currentPage, setCurrentPage] = useState('');

        const menuItems = [
          { icon: LayoutDashboard, label: 'Dashboard', page: 'dashboard' },
          { icon: Users, label: 'Clientes', page: 'clientes' },
          { icon: Users, label: 'Usuários', page: 'usuarios' },
          { icon: FileText, label: 'Propostas', page: 'propostas' },
          { icon: CheckCircle, label: 'Negócios', page: 'negocios' },
          { icon: CheckCircle, label: 'Aplicações', page: 'aplicacoes' },
          { icon: ChartArea, label: 'Cotações Cripto', page: 'quotations' },
          { icon: FileText, label: 'Journal', page: 'journal' },
          { icon: Database, label: 'Banco de Dados', page: 'database' },
          { icon: Settings, label: 'Configurações', page: 'configuracoes' },
          { icon: Database, label: 'IA', page: 'ialocalpage' },
        ];
    
    <>
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-gradient-to-b from-blue-900 to-blue-800 text-white transition-all duration-300 flex flex-col`}>
            <div className="p-4 flex items-center justify-between border-b border-blue-700">
                {sidebarOpen && <h1 className="text-xl font-bold">Souza Tech Dashboard</h1>}
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="p-2 hover:bg-blue-700 rounded-lg transition-colors"
                >
                    {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            <nav className="flex-1 p-4">
                <ul className="space-y-2">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <button
                                onClick={() => setCurrentPage(item.page)}
                                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${currentPage === item.page
                                    ? 'bg-blue-700 text-white'
                                    : 'hover:bg-blue-700/50 text-blue-100'
                                    }`}
                            >
                                <item.icon className="w-5 h-5 flex-shrink-0" />
                                {sidebarOpen && <span className="font-medium">{item.label}</span>}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="p-4 border-t border-blue-700">
                <div className={`flex items-center gap-3 p-3 hover:bg-blue-700/50 rounded-lg cursor-pointer transition-colors ${!sidebarOpen && 'justify-center'}`}>
                    <UserCircle className="w-8 h-8 flex-shrink-0" />
                    {sidebarOpen && (
                        <div className="flex-1">
                            <p className="font-medium text-sm">João Silva</p>
                            <p className="text-xs text-blue-200">Gerente de Vendas</p>
                        </div>
                    )}
                    {sidebarOpen && <ChevronDown className="w-4 h-4" />}
                </div>
                {sidebarOpen && (
                    <button className="w-full flex items-center gap-3 p-3 mt-2 hover:bg-red-600/80 rounded-lg transition-colors text-red-100">
                        <LogOut className="w-5 h-5" />
                        <span className="font-medium">Sair</span>
                    </button>
                )}
            </div>
        </aside>
    </>
}