import { Plus, Search, Filter, Eye, Edit } from 'lucide-react';
import {useState} from 'react'
import { getStatusColor } from '../../utils/styles';

  const [negocios] = useState([
    { id: 1, cliente: 'Tech Solutions Ltda', valor: 45000, status: 'Fechado', dataFechamento: '2024-10-05', vendedor: 'João Silva' },
    { id: 2, cliente: 'Empresa ABC', valor: 78000, status: 'Fechado', dataFechamento: '2024-10-02', vendedor: 'Maria Santos' },
    { id: 3, cliente: 'Inovação Digital', valor: 32000, status: 'Em Negociação', dataFechamento: '-', vendedor: 'Pedro Costa' },
    { id: 4, cliente: 'Mega Corp', valor: 125000, status: 'Fechado', dataFechamento: '2024-09-20', vendedor: 'Ana Lima' },
  ]);


export const NegociosPage = () => (
    <>
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Negócios</h1>
          <p className="text-gray-600">Acompanhe seus negócios fechados</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
          <Plus className="w-5 h-5" />
          Novo Negócio
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-500 text-sm mb-1">Total Fechados</p>
          <p className="text-3xl font-bold text-green-600">67</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-500 text-sm mb-1">Em Negociação</p>
          <p className="text-3xl font-bold text-orange-600">12</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-500 text-sm mb-1">Receita Total</p>
          <p className="text-3xl font-bold text-blue-600">R$ 458.750</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex gap-4 mb-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar negócios..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Filtrar
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data Fechamento</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vendedor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {negocios.map((negocio) => (
                <tr key={negocio.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900">#{negocio.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{negocio.cliente}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">R$ {negocio.valor.toLocaleString('pt-BR')}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(negocio.status)}`}>
                      {negocio.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{negocio.dataFechamento}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{negocio.vendedor}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex gap-2">
                      <button className="text-blue-600 hover:text-blue-800"><Eye className="w-5 h-5" /></button>
                      <button className="text-green-600 hover:text-green-800"><Edit className="w-5 h-5" /></button>
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
