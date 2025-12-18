
import { Download, Edit, Eye, Filter, Plus, Search, Trash2 } from 'lucide-react';
import { getStatusColor } from '../../utils/styles';
import { clientes } from '../../utils/db';



export const ClientesPage = () => (
    <>
        <div className="mb-8 flex justify-between items-center">
            <div>
                <h1 className="text-4xl font-bold text-gray-800 mb-2">Clientes</h1>
                <p className="text-gray-600">Gerencie sua base de clientes</p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
                <Plus className="w-5 h-5" />
                Novo Cliente
            </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex gap-4 mb-4">
                <div className="flex-1 relative">
                    <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Buscar clientes..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
                    <Filter className="w-5 h-5" />
                    Filtrar
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    Exportar
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Telefone</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data Contato</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {clientes.map((cliente) => (
                            <tr key={cliente.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{cliente.nome}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-600">{cliente.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-600">{cliente.telefone}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(cliente.status)}`}>
                                        {cliente.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-600">{cliente.dataContato}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex gap-2">
                                        <button className="text-blue-600 hover:text-blue-800"><Eye className="w-5 h-5" /></button>
                                        <button className="text-green-600 hover:text-green-800"><Edit className="w-5 h-5" /></button>
                                        <button className="text-red-600 hover:text-red-800"><Trash2 className="w-5 h-5" /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </>
);