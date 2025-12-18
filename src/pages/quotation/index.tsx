import { DollarSign, TrendingUp, Calendar, Plus, FileText, Clock, Eye, Edit } from "lucide-react";
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts";
import { aportesDiarios, aportesMensais, cryptoData, noticias } from "../../utils/db";

  export const QuotationsPage = () => {

    const totalAportado = aportesMensais.reduce((acc, item) => acc + item.valor, 0);
    const mediaAporteMensal = (totalAportado / aportesMensais.length).toFixed(2);
    const aporteOutubro = aportesDiarios.reduce((acc, item) => acc + item.valor, 0);

    return (
      <>
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Cotações Cripto</h1>
          <p className="text-gray-600">Acompanhe o mercado de criptomoedas em tempo real</p>
        </div>

        {/* Cards de Cotações */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {cryptoData.map((crypto) => (
            <div key={crypto.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-blue-500">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">{crypto.icon}</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{crypto.id}</p>
                    <p className="font-semibold text-gray-800">{crypto.name}</p>
                  </div>
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-2">
                R$ {crypto.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </p>
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-sm font-semibold ${crypto.change24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {crypto.change24h >= 0 ? '↑' : '↓'} {Math.abs(crypto.change24h)}%
                </span>
                <span className="text-xs text-gray-500">24h</span>
              </div>
              <div className="border-t pt-3 space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">Cap. Mercado:</span>
                  <span className="font-medium text-gray-700">{crypto.marketCap}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">Volume 24h:</span>
                  <span className="font-medium text-gray-700">{crypto.volume24h}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Resumo de Aportes */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-green-600" />
              Resumo de Aportes
            </h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Total Aportado</p>
                <p className="text-3xl font-bold text-green-600">
                  R$ {totalAportado.toLocaleString('pt-BR')}
                </p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Média Mensal</p>
                <p className="text-2xl font-bold text-blue-600">
                  R$ {parseFloat(mediaAporteMensal).toLocaleString('pt-BR')}
                </p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Outubro/25</p>
                <p className="text-2xl font-bold text-purple-600">
                  R$ {aporteOutubro.toLocaleString('pt-BR')}
                </p>
              </div>
            </div>
          </div>

          {/* Aportes Mensais */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              Aportes Mensais
            </h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={aportesMensais}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip formatter={(value: any) => `R$ ${value?.toLocaleString('pt-BR')}`} />
                <Legend />
                <Bar dataKey="valor" fill="#3b82f6" name="Valor (R$)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Aportes Diários */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-purple-600" />
              Aportes Diários - Outubro
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {aportesDiarios.map((aporte, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{aporte.dia}</p>
                      <p className="text-sm text-gray-500">{aporte.cripto}</p>
                    </div>
                  </div>
                  <p className="text-lg font-bold text-green-600">
                    R$ {aporte.valor.toLocaleString('pt-BR')}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t">
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
                <Plus className="w-5 h-5" />
                Registrar Novo Aporte
              </button>
            </div>
          </div>

          {/* Notícias */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-orange-600" />
              Notícias Recentes
            </h3>
            <div className="space-y-4 max-h-80 overflow-y-auto">
              {noticias.map((noticia, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-gray-800 flex-1">{noticia.titulo}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{noticia.resumo}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <FileText className="w-3 h-3" />
                      {noticia.fonte}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {noticia.data}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabela Detalhada de Aportes Mensais */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Detalhamento de Aportes Mensais</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mês</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor (R$)</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">BTC Adquirido</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ETH Adquirido</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {aportesMensais.map((aporte, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{aporte.mes}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-green-600 font-semibold">
                      R$ {aporte.valor.toLocaleString('pt-BR')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">₿ {aporte.btc}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">Ξ {aporte.eth}</td>
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
  };
