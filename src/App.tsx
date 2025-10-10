import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { Clock, ChartArea,  Users, FileText, Database, CheckCircle, DollarSign, TrendingUp, LayoutDashboard, UserCircle, Settings, LogOut, Menu, X, ChevronDown, Search, Plus, Edit, Trash2, Eye, Filter, Download, Upload, Mail, Phone, MapPin, Calendar, Save, User, Building2, ShoppingBag, CreditCard, PieChart } from 'lucide-react';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState('dashboard');
  
  // Dados de exemplo - em produção, viriam de uma API
  const [metricsData] = useState({
    clientesProspectados: 145,
    propostasEnviadas: 89,
    clientesSalvos: 234,
    negociosFechados: 67,
    receitaTotal: 458750.00
  });

  const [monthlyData] = useState([
    { mes: 'Jan', prospectados: 32, propostas: 18, fechados: 12, receita: 65000 },
    { mes: 'Fev', prospectados: 45, propostas: 25, fechados: 15, receita: 72500 },
    { mes: 'Mar', prospectados: 38, propostas: 22, fechados: 14, receita: 68000 },
    { mes: 'Abr', prospectados: 52, propostas: 31, fechados: 19, receita: 89500 },
    { mes: 'Mai', prospectados: 48, propostas: 28, fechados: 21, receita: 95250 },
    { mes: 'Jun', prospectados: 30, propostas: 15, fechados: 8, receita: 68500 }
  ]);

  const [clientes] = useState([
    { id: 1, nome: 'Tech Solutions Ltda', email: 'contato@techsolutions.com', telefone: '(11) 98765-4321', status: 'Ativo', dataContato: '2024-10-01' },
    { id: 2, nome: 'Inovação Digital', email: 'vendas@inovacaodigital.com', telefone: '(21) 97654-3210', status: 'Prospectado', dataContato: '2024-10-03' },
    { id: 3, nome: 'Empresa ABC', email: 'abc@empresa.com', telefone: '(11) 96543-2109', status: 'Ativo', dataContato: '2024-09-28' },
    { id: 4, nome: 'StartUp XYZ', email: 'contato@startupxyz.com', telefone: '(48) 95432-1098', status: 'Inativo', dataContato: '2024-09-15' },
  ]);

  const [propostas] = useState([
    { id: 1, cliente: 'Tech Solutions Ltda', valor: 45000, status: 'Enviada', data: '2024-10-01', validade: '2024-10-31' },
    { id: 2, cliente: 'Inovação Digital', valor: 32000, status: 'Em Análise', data: '2024-10-03', validade: '2024-11-03' },
    { id: 3, cliente: 'Empresa ABC', valor: 78000, status: 'Aprovada', data: '2024-09-28', validade: '2024-10-28' },
    { id: 4, cliente: 'StartUp XYZ', valor: 15000, status: 'Rejeitada', data: '2024-09-15', validade: '2024-10-15' },
  ]);

  const [negocios] = useState([
    { id: 1, cliente: 'Tech Solutions Ltda', valor: 45000, status: 'Fechado', dataFechamento: '2024-10-05', vendedor: 'João Silva' },
    { id: 2, cliente: 'Empresa ABC', valor: 78000, status: 'Fechado', dataFechamento: '2024-10-02', vendedor: 'Maria Santos' },
    { id: 3, cliente: 'Inovação Digital', valor: 32000, status: 'Em Negociação', dataFechamento: '-', vendedor: 'Pedro Costa' },
    { id: 4, cliente: 'Mega Corp', valor: 125000, status: 'Fechado', dataFechamento: '2024-09-20', vendedor: 'Ana Lima' },
  ]);

  const funnelData = [
    { name: 'Prospectados', value: metricsData.clientesProspectados },
    { name: 'Propostas', value: metricsData.propostasEnviadas },
    { name: 'Fechados', value: metricsData.negociosFechados }
  ];

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

  const MetricCard = ({ icon: Icon, title, value, color, prefix = '' }) => (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm font-medium mb-1">{title}</p>
          <p className={`text-3xl font-bold ${color}`}>
            {prefix}{typeof value === 'number' && prefix === 'R$ ' 
              ? value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
              : value}
          </p>
        </div>
        <div className={`${color} bg-opacity-10 p-4 rounded-full`}>
          <Icon className={`w-8 h-8 ${color}`} />
        </div>
      </div>
    </div>
  );

  const taxaConversao = ((metricsData.negociosFechados / metricsData.clientesProspectados) * 100).toFixed(1);
  const ticketMedio = (metricsData.receitaTotal / metricsData.negociosFechados).toFixed(2);

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', page: 'dashboard' },
    { icon: Users, label: 'Clientes', page: 'clientes' },
    { icon: Users, label: 'Usuários', page: 'usuarios'},
    { icon: FileText, label: 'Propostas', page: 'propostas' },
    { icon: CheckCircle, label: 'Negócios', page: 'negocios' },
    { icon: ChartArea, label: 'Cotações Cripto', page: 'quotations'},
    { icon: Database, label: 'Banco de Dados', page: 'database' },
    { icon: Settings, label: 'Configurações', page: 'configuracoes' },
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Ativo': 'bg-green-100 text-green-800',
      'Inativo': 'bg-red-100 text-red-800',
      'Prospectado': 'bg-blue-100 text-blue-800',
      'Enviada': 'bg-yellow-100 text-yellow-800',
      'Em Análise': 'bg-purple-100 text-purple-800',
      'Aprovada': 'bg-green-100 text-green-800',
      'Rejeitada': 'bg-red-100 text-red-800',
      'Fechado': 'bg-green-100 text-green-800',
      'Em Negociação': 'bg-orange-100 text-orange-800',
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  // Página de Dashboard
  const DashboardPage = () => (
    <>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Dashboard de Vendas</h1>
        <p className="text-gray-600">Visão geral do desempenho comercial</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        <MetricCard icon={Users} title="Clientes Prospectados" value={metricsData.clientesProspectados} color="text-blue-600" />
        <MetricCard icon={FileText} title="Propostas Enviadas" value={metricsData.propostasEnviadas} color="text-green-600" />
        <MetricCard icon={Database} title="Clientes no BD" value={metricsData.clientesSalvos} color="text-purple-600" />
        <MetricCard icon={CheckCircle} title="Negócios Fechados" value={metricsData.negociosFechados} color="text-orange-600" />
        <MetricCard icon={DollarSign} title="Receita Total" value={metricsData.receitaTotal} color="text-emerald-600" prefix="R$ " />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <TrendingUp className="w-6 h-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-800">Taxa de Conversão</h3>
          </div>
          <p className="text-4xl font-bold text-blue-600">{taxaConversao}%</p>
          <p className="text-gray-500 text-sm mt-2">Prospectados → Fechados</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <DollarSign className="w-6 h-6 text-green-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-800">Ticket Médio</h3>
          </div>
          <p className="text-4xl font-bold text-green-600">
            R$ {parseFloat(ticketMedio).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </p>
          <p className="text-gray-500 text-sm mt-2">Por negócio fechado</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Evolução Mensal - Quantidade</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="prospectados" stroke="#3b82f6" name="Prospectados" strokeWidth={2} />
              <Line type="monotone" dataKey="propostas" stroke="#10b981" name="Propostas" strokeWidth={2} />
              <Line type="monotone" dataKey="fechados" stroke="#f59e0b" name="Fechados" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Receita Mensal (R$)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip formatter={(value) => `R$ ${value.toLocaleString('pt-BR')}`} />
              <Legend />
              <Bar dataKey="receita" fill="#10b981" name="Receita" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Funil de Vendas</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={funnelData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Bar dataKey="value" fill="#3b82f6">
              {funnelData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );

// Página de Cotações Cripto
  const QuotationsPage = () => {
    const [cryptoData] = useState([
      { 
        id: 'BTC', 
        name: 'Bitcoin', 
        price: 328450.75, 
        change24h: 2.45, 
        marketCap: '6.4T',
        volume24h: '89.5B',
        icon: '₿'
      },
      { 
        id: 'ETH', 
        name: 'Ethereum', 
        price: 13250.30, 
        change24h: -1.20, 
        marketCap: '1.6T',
        volume24h: '45.2B',
        icon: 'Ξ'
      },
      { 
        id: 'BNB', 
        name: 'Binance Coin', 
        price: 1850.90, 
        change24h: 3.75, 
        marketCap: '285B',
        volume24h: '12.8B',
        icon: 'B'
      },
      { 
        id: 'SOL', 
        name: 'Solana', 
        price: 789.45, 
        change24h: 5.20, 
        marketCap: '342B',
        volume24h: '8.9B',
        icon: 'S'
      }
    ]);

    const [aportesMensais] = useState([
      { mes: 'Abr/25', valor: 1500, btc: 0.00457, eth: 0.113 },
      { mes: 'Mai/25', valor: 2000, btc: 0.00609, eth: 0.151 },
      { mes: 'Jun/25', valor: 1800, btc: 0.00548, eth: 0.136 },
      { mes: 'Jul/25', valor: 2500, btc: 0.00761, eth: 0.189 },
      { mes: 'Ago/25', valor: 2200, btc: 0.00670, eth: 0.166 },
      { mes: 'Set/25', valor: 1900, btc: 0.00579, eth: 0.143 }
    ]);

    const [aportesDiarios] = useState([
      { dia: '01/10', valor: 100, cripto: 'BTC' },
      { dia: '02/10', valor: 150, cripto: 'ETH' },
      { dia: '03/10', valor: 100, cripto: 'BTC' },
      { dia: '04/10', valor: 80, cripto: 'SOL' },
      { dia: '05/10', valor: 120, cripto: 'BNB' },
      { dia: '06/10', valor: 100, cripto: 'BTC' },
      { dia: '07/10', valor: 200, cripto: 'ETH' }
    ]);

    const [noticias] = useState([
      {
        titulo: 'Bitcoin atinge nova máxima histórica',
        fonte: 'CoinDesk',
        data: 'Há 2 horas',
        resumo: 'BTC supera R$ 330 mil pela primeira vez na história brasileira'
      },
      {
        titulo: 'Ethereum prepara grande atualização',
        fonte: 'CryptoNews',
        data: 'Há 5 horas',
        resumo: 'Nova versão promete reduzir taxas em até 70%'
      },
      {
        titulo: 'Regulação avança no Brasil',
        fonte: 'Portal do Bitcoin',
        data: 'Há 8 horas',
        resumo: 'Banco Central anuncia novas diretrizes para exchanges'
      },
      {
        titulo: 'Solana bate recorde de transações',
        fonte: 'BeInCrypto',
        data: 'Há 12 horas',
        resumo: 'Rede processa 65 mil transações por segundo'
      }
    ]);

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
                <Tooltip formatter={(value) => `R$ ${value.toLocaleString('pt-BR')}`} />
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

  //};
//

  // Página de Clientes
  const ClientesPage = () => (
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

const UsuariosPage = () => {
  const [modalAberto, setModalAberto] = useState(false);
  const [clienteSelecionado, setClienteSelecionado] = useState(null);

  const [usuarios] = useState([
    {
      id: 1,
      nome: "João Silva",
      email: "joao.silva@empresa.com",
      telefone: "(11) 98765-4321",
      tipo: "Cliente da Plataforma",
      empresaVinculada: null,
      plano: "Premium",
      status: "Ativo",
      dataCadastro: "15/01/2025",
      mensalidade: "R$ 299,00"
    },
    {
      id: 2,
      nome: "Maria Santos",
      email: "maria.santos@comercio.com",
      telefone: "(11) 97654-3210",
      tipo: "Cliente da Plataforma",
      empresaVinculada: null,
      plano: "Básico",
      status: "Ativo",
      dataCadastro: "20/01/2025",
      mensalidade: "R$ 149,00"
    },
    {
      id: 3,
      nome: "Carlos Oliveira",
      email: "carlos@email.com",
      telefone: "(11) 96543-2109",
      whatsapp: "(11) 96543-2109",
      tipo: "Cliente de Terceiro",
      empresaVinculada: "Tech Solutions Ltda",
      plano: "-",
      status: "Ativo",
      dataCadastro: "22/01/2025",
      mensalidade: "-",
      dadosDetalhados: {
        endereco: "Rua das Flores, 123 - Centro, São Paulo - SP",
        preferenciasGasto: [
          { categoria: "Marmitas", cnae: "5611-2/01", percentual: 45 },
          { categoria: "Salgados", cnae: "5611-2/03", percentual: 30 },
          { categoria: "Bebidas", cnae: "5611-2/02", percentual: 25 }
        ],
        totalGasto: 2850.00,
        periodoMaisGasto: {
          meses: ["Janeiro", "Março"],
          dias: ["Segunda-feira", "Quinta-feira"]
        },
        formasPagamento: [
          { tipo: "PIX", percentual: 60, vezes: 24 },
          { tipo: "Cartão", percentual: 30, vezes: 12 },
          { tipo: "Dinheiro", percentual: 10, vezes: 4 }
        ],
        horariosPico: ["12:00 - 13:00", "18:30 - 19:30"],
        historicoCompras: [
          { data: "05/02/2025", valor: 45.00, items: "2x Marmita" },
          { data: "02/02/2025", valor: 35.00, items: "Salgados + Refrigerante" },
          { data: "29/01/2025", valor: 50.00, items: "3x Marmita" }
        ]
      }
    },
    {
      id: 4,
      nome: "Ana Costa",
      email: "ana.costa@startup.com",
      telefone: "(21) 95432-1098",
      tipo: "Cliente da Plataforma",
      empresaVinculada: null,
      plano: "Enterprise",
      status: "Ativo",
      dataCadastro: "10/01/2025",
      mensalidade: "R$ 599,00"
    },
    {
      id: 5,
      nome: "Pedro Almeida",
      email: "pedro.almeida@email.com",
      telefone: "(11) 94321-0987",
      whatsapp: "(11) 94321-0987",
      tipo: "Cliente de Terceiro",
      empresaVinculada: "Tech Solutions Ltda",
      plano: "-",
      status: "Ativo",
      dataCadastro: "25/01/2025",
      mensalidade: "-",
      dadosDetalhados: {
        endereco: "Av. Paulista, 1000 - Bela Vista, São Paulo - SP",
        preferenciasGasto: [
          { categoria: "Doces", cnae: "5611-2/04", percentual: 55 },
          { categoria: "Café", cnae: "5611-2/02", percentual: 35 },
          { categoria: "Salgados", cnae: "5611-2/03", percentual: 10 }
        ],
        totalGasto: 1620.00,
        periodoMaisGasto: {
          meses: ["Fevereiro"],
          dias: ["Terça-feira", "Sexta-feira"]
        },
        formasPagamento: [
          { tipo: "Cartão", percentual: 70, vezes: 28 },
          { tipo: "PIX", percentual: 25, vezes: 10 },
          { tipo: "Dinheiro", percentual: 5, vezes: 2 }
        ],
        horariosPico: ["09:00 - 10:00", "15:00 - 16:00"],
        historicoCompras: [
          { data: "06/02/2025", valor: 28.00, items: "Doces variados" },
          { data: "04/02/2025", valor: 15.00, items: "Café + Croissant" },
          { data: "01/02/2025", valor: 32.00, items: "Torta + Café" }
        ]
      }
    },
    {
      id: 6,
      nome: "Juliana Ferreira",
      email: "juliana@email.com",
      telefone: "(31) 93210-9876",
      tipo: "Cliente de Terceiro",
      empresaVinculada: "Comercial ABC",
      plano: "-",
      status: "Inativo",
      dataCadastro: "18/01/2025",
      mensalidade: "-",
      dadosDetalhados: {
        endereco: "Rua Bahia, 456 - Funcionários, Belo Horizonte - MG",
        preferenciasGasto: [
          { categoria: "Marmitas", cnae: "5611-2/01", percentual: 80 },
          { categoria: "Bebidas", cnae: "5611-2/02", percentual: 20 }
        ],
        totalGasto: 890.00,
        periodoMaisGasto: {
          meses: ["Janeiro"],
          dias: ["Quarta-feira"]
        },
        formasPagamento: [
          { tipo: "Dinheiro", percentual: 60, vezes: 15 },
          { tipo: "PIX", percentual: 40, vezes: 10 }
        ],
        horariosPico: ["12:30 - 13:30"],
        historicoCompras: [
          { data: "15/01/2025", valor: 40.00, items: "Marmita Executiva" },
          { data: "12/01/2025", valor: 45.00, items: "Marmita + Suco" }
        ]
      }
    },
    {
      id: 7,
      nome: "Roberto Lima",
      email: "roberto.lima@tech.com",
      telefone: "(11) 92109-8765",
      tipo: "Cliente da Plataforma",
      empresaVinculada: null,
      plano: "Premium",
      status: "Pendente",
      dataCadastro: "28/01/2025",
      mensalidade: "R$ 299,00"
    },
    {
      id: 8,
      nome: "Fernanda Souza",
      email: "fernanda.souza@email.com",
      telefone: "(21) 91098-7654",
      whatsapp: "(21) 91098-7654",
      tipo: "Cliente de Terceiro",
      empresaVinculada: "Comercial ABC",
      plano: "-",
      status: "Ativo",
      dataCadastro: "12/01/2025",
      mensalidade: "-",
      dadosDetalhados: {
        endereco: "Rua do Catete, 789 - Catete, Rio de Janeiro - RJ",
        preferenciasGasto: [
          { categoria: "Lanches", cnae: "5611-2/03", percentual: 40 },
          { categoria: "Sucos Naturais", cnae: "5611-2/02", percentual: 35 },
          { categoria: "Sobremesas", cnae: "5611-2/04", percentual: 25 }
        ],
        totalGasto: 3420.00,
        periodoMaisGasto: {
          meses: ["Janeiro", "Fevereiro"],
          dias: ["Segunda-feira", "Quarta-feira", "Sexta-feira"]
        },
        formasPagamento: [
          { tipo: "PIX", percentual: 50, vezes: 35 },
          { tipo: "Cartão", percentual: 45, vezes: 31 },
          { tipo: "Dinheiro", percentual: 5, vezes: 4 }
        ],
        horariosPico: ["11:00 - 12:00", "16:00 - 17:00"],
        historicoCompras: [
          { data: "07/02/2025", valor: 52.00, items: "Lanches + Sucos" },
          { data: "05/02/2025", valor: 38.00, items: "Hambúrguer + Refrigerante" },
          { data: "03/02/2025", valor: 45.00, items: "Combo Lanche" }
        ]
      }
    }
  ]);

  const abrirModal = (usuario) => {
    if (usuario.tipo === "Cliente de Terceiro" && usuario.dadosDetalhados) {
      setClienteSelecionado(usuario);
      setModalAberto(true);
    }
  };

  const fecharModal = () => {
    setModalAberto(false);
    setClienteSelecionado(null);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Ativo':
        return 'bg-green-100 text-green-800';
      case 'Inativo':
        return 'bg-red-100 text-red-800';
      case 'Pendente':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTipoColor = (tipo) => {
    return tipo === 'Cliente da Plataforma' 
      ? 'bg-blue-100 text-blue-800 border border-blue-200' 
      : 'bg-purple-100 text-purple-800 border border-purple-200';
  };

  const getTipoIcon = (tipo) => {
    return tipo === 'Cliente da Plataforma' ? User : Building2;
  };

  return (
    <>
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Usuários</h1>
          <p className="text-gray-600">Gerencie clientes da plataforma e clientes de terceiros</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
          <Plus className="w-5 h-5" />
          Novo Usuário
        </button>
      </div>

      {/* Cards de Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Clientes da Plataforma</p>
              <p className="text-3xl font-bold text-gray-800 mt-2">
                {usuarios.filter(u => u.tipo === 'Cliente da Plataforma').length}
              </p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <User className="w-8 h-8 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Clientes de Terceiros</p>
              <p className="text-3xl font-bold text-gray-800 mt-2">
                {usuarios.filter(u => u.tipo === 'Cliente de Terceiro').length}
              </p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <Building2 className="w-8 h-8 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Receita Mensal</p>
              <p className="text-3xl font-bold text-gray-800 mt-2">
                R$ {usuarios
                  .filter(u => u.tipo === 'Cliente da Plataforma' && u.status === 'Ativo')
                  .reduce((acc, u) => acc + parseFloat(u.mensalidade.replace('R$ ', '').replace(',', '.')), 0)
                  .toFixed(2)
                  .replace('.', ',')}
              </p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <span className="text-2xl font-bold text-green-600">R$</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex gap-4 mb-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar usuários..."
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Empresa/Plano</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mensalidade</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {usuarios.map((usuario) => {
                const IconComponent = getTipoIcon(usuario.tipo);
                return (
                  <tr key={usuario.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{usuario.nome}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">{usuario.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">{usuario.telefone}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 w-fit ${getTipoColor(usuario.tipo)}`}>
                        <IconComponent className="w-3 h-3" />
                        {usuario.tipo}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                      {usuario.empresaVinculada ? (
                        <div className="flex items-center gap-1">
                          <Building2 className="w-4 h-4 text-purple-600" />
                          <span className="text-sm">{usuario.empresaVinculada}</span>
                        </div>
                      ) : (
                        <span className="font-medium text-blue-600">{usuario.plano}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(usuario.status)}`}>
                        {usuario.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`font-semibold ${usuario.mensalidade !== '-' ? 'text-green-600' : 'text-gray-400'}`}>
                        {usuario.mensalidade}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex gap-2">
                        <button 
                          onClick={() => abrirModal(usuario)}
                          className={`${usuario.tipo === 'Cliente de Terceiro' ? 'text-blue-600 hover:text-blue-800' : 'text-gray-400 cursor-not-allowed'}`}
                          disabled={usuario.tipo !== 'Cliente de Terceiro'}
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                        <button className="text-green-600 hover:text-green-800">
                          <Edit className="w-5 h-5" />
                        </button>
                        <button className="text-red-600 hover:text-red-800">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal de Detalhes do Cliente */}
      {modalAberto && clienteSelecionado && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            {/* Cabeçalho do Modal */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6 rounded-t-lg sticky top-0 z-10">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{clienteSelecionado.nome}</h2>
                  <p className="text-purple-100 text-sm">Cliente de Terceiro - {clienteSelecionado.empresaVinculada}</p>
                </div>
                <button 
                  onClick={fecharModal}
                  className="text-white hover:bg-purple-800 rounded-full p-2 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Conteúdo do Modal */}
            <div className="p-6 space-y-6">
              
              {/* Informações de Contato */}
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-purple-600" />
                  Informações de Contato
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {clienteSelecionado.whatsapp && (
                    <div className="flex items-center gap-3 bg-white p-3 rounded-lg">
                      <Phone className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="text-xs text-gray-500">WhatsApp</p>
                        <p className="font-medium text-gray-800">{clienteSelecionado.whatsapp}</p>
                      </div>
                    </div>
                  )}
                  {clienteSelecionado.email && (
                    <div className="flex items-center gap-3 bg-white p-3 rounded-lg">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="text-xs text-gray-500">E-mail</p>
                        <p className="font-medium text-gray-800">{clienteSelecionado.email}</p>
                      </div>
                    </div>
                  )}
                  <div className="flex items-center gap-3 bg-white p-3 rounded-lg md:col-span-2">
                    <MapPin className="w-5 h-5 text-red-600" />
                    <div>
                      <p className="text-xs text-gray-500">Endereço</p>
                      <p className="font-medium text-gray-800">{clienteSelecionado.dadosDetalhados.endereco}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resumo Financeiro */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-5 border border-green-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-green-600" />
                  Resumo Financeiro
                </h3>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-2">Total Gasto Acumulado</p>
                  <p className="text-4xl font-bold text-green-600">
                    R$ {clienteSelecionado.dadosDetalhados.totalGasto.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </p>
                </div>
              </div>

              {/* Preferências de Gasto */}
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-purple-600" />
                  Preferências de Gasto
                </h3>
                <div className="space-y-3">
                  {clienteSelecionado.dadosDetalhados.preferenciasGasto.map((pref, index) => (
                    <div key={index} className="bg-white rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <p className="font-semibold text-gray-800">{pref.categoria}</p>
                          <p className="text-xs text-gray-500">CNAE: {pref.cnae}</p>
                        </div>
                        <span className="text-lg font-bold text-purple-600">{pref.percentual}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-purple-600 h-2 rounded-full transition-all"
                          style={{ width: `${pref.percentual}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Formas de Pagamento */}
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-purple-600" />
                  Formas de Pagamento Mais Usadas
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {clienteSelecionado.dadosDetalhados.formasPagamento.map((forma, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 border-2 border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-semibold text-gray-800">{forma.tipo}</p>
                        <span className="text-2xl font-bold text-purple-600">{forma.percentual}%</span>
                      </div>
                      <p className="text-sm text-gray-600">{forma.vezes} transações</p>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                        <div 
                          className="bg-purple-600 h-1.5 rounded-full"
                          style={{ width: `${forma.percentual}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Períodos de Maior Gasto */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-purple-600" />
                    Meses de Maior Gasto
                  </h3>
                  <div className="space-y-2">
                    {clienteSelecionado.dadosDetalhados.periodoMaisGasto.meses.map((mes, index) => (
                      <div key={index} className="bg-white px-4 py-3 rounded-lg border-l-4 border-purple-600">
                        <p className="font-medium text-gray-800">{mes}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-purple-600" />
                    Dias da Semana
                  </h3>
                  <div className="space-y-2">
                    {clienteSelecionado.dadosDetalhados.periodoMaisGasto.dias.map((dia, index) => (
                      <div key={index} className="bg-white px-4 py-3 rounded-lg border-l-4 border-purple-600">
                        <p className="font-medium text-gray-800">{dia}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Horários de Pico */}
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-purple-600" />
                  Horários de Maior Atividade
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {clienteSelecionado.dadosDetalhados.horariosPico.map((horario, index) => (
                    <div key={index} className="bg-white px-4 py-3 rounded-lg flex items-center gap-3">
                      <Clock className="w-5 h-5 text-purple-600" />
                      <p className="font-medium text-gray-800">{horario}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Histórico de Compras Recentes */}
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <PieChart className="w-5 h-5 text-purple-600" />
                  Últimas Compras
                </h3>
                <div className="space-y-3">
                  {clienteSelecionado.dadosDetalhados.historicoCompras.map((compra, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 border-l-4 border-purple-600 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <p className="text-sm text-gray-500 mb-1">{compra.data}</p>
                          <p className="font-medium text-gray-800">{compra.items}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-green-600">
                            R$ {compra.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Rodapé do Modal */}
            <div className="bg-gray-100 p-4 rounded-b-lg flex justify-end gap-3">
              <button
                onClick={fecharModal}
                className="px-6 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg transition-colors font-medium"
              >
                Fechar
              </button>
              <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-medium flex items-center gap-2">
                <Edit className="w-4 h-4" />
                Editar Cliente
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};



  // Página de Propostas
  const PropostasPage = () => (
    <>
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Propostas</h1>
          <p className="text-gray-600">Gerencie suas propostas comerciais</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
          <Plus className="w-5 h-5" />
          Nova Proposta
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-500 text-sm mb-1">Total Enviadas</p>
          <p className="text-3xl font-bold text-blue-600">89</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-500 text-sm mb-1">Em Análise</p>
          <p className="text-3xl font-bold text-purple-600">34</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-500 text-sm mb-1">Aprovadas</p>
          <p className="text-3xl font-bold text-green-600">42</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-500 text-sm mb-1">Rejeitadas</p>
          <p className="text-3xl font-bold text-red-600">13</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex gap-4 mb-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar propostas..."
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data Envio</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Validade</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {propostas.map((proposta) => (
                <tr key={proposta.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900">#{proposta.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{proposta.cliente}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">R$ {proposta.valor.toLocaleString('pt-BR')}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(proposta.status)}`}>
                      {proposta.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{proposta.data}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{proposta.validade}</td>
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

  // Página de Negócios
  const NegociosPage = () => (
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

  // Página de Banco de Dados
  const DatabasePage = () => (
    <>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Banco de Dados</h1>
        <p className="text-gray-600">Gerencie e sincronize seus dados</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <Database className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Total de Registros</h3>
          <p className="text-3xl font-bold text-blue-600 mb-2">234</p>
          <p className="text-sm text-gray-500">Clientes cadastrados</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <Upload className="w-12 h-12 text-green-600 mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Última Sincronização</h3>
          <p className="text-xl font-bold text-green-600 mb-2">Há 2 horas</p>
          <p className="text-sm text-gray-500">Todos os dados atualizados</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <Download className="w-12 h-12 text-purple-600 mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Backup Automático</h3>
          <p className="text-xl font-bold text-purple-600 mb-2">Ativo</p>
          <p className="text-sm text-gray-500">Último backup: Hoje às 03:00</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Importar Dados</h3>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors cursor-pointer">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-2">Arraste arquivos aqui ou clique para selecionar</p>
            <p className="text-sm text-gray-400">Formatos suportados: CSV, XLSX, JSON</p>
          </div>
          <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
            Importar Arquivo
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Exportar Dados</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-blue-600" />
                <div className="text-left">
                  <p className="font-medium text-gray-800">Exportar como CSV</p>
                  <p className="text-sm text-gray-500">Compatível com Excel</p>
                </div>
              </div>
              <Download className="w-5 h-5 text-gray-400" />
            </button>
            <button className="w-full flex items-center justify-between p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <Database className="w-6 h-6 text-green-600" />
                <div className="text-left">
                  <p className="font-medium text-gray-800">Exportar como JSON</p>
                  <p className="text-sm text-gray-500">Para integrações API</p>
                </div>
              </div>
              <Download className="w-5 h-5 text-gray-400" />
            </button>
            <button className="w-full flex items-center justify-between p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-purple-600" />
                <div className="text-left">
                  <p className="font-medium text-gray-800">Backup Completo</p>
                  <p className="text-sm text-gray-500">Todos os dados do sistema</p>
                </div>
              </div>
              <Download className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Histórico de Operações</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 border-l-4 border-green-500 bg-green-50 rounded">
            <div className="flex items-center gap-3">
              <Upload className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-medium text-gray-800">Importação realizada</p>
                <p className="text-sm text-gray-500">45 novos registros adicionados</p>
              </div>
            </div>
            <span className="text-sm text-gray-500">Hoje, 14:30</span>
          </div>
          <div className="flex items-center justify-between p-4 border-l-4 border-blue-500 bg-blue-50 rounded">
            <div className="flex items-center gap-3">
              <Download className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-medium text-gray-800">Exportação concluída</p>
                <p className="text-sm text-gray-500">234 registros exportados em CSV</p>
              </div>
            </div>
            <span className="text-sm text-gray-500">Ontem, 16:45</span>
          </div>
          <div className="flex items-center justify-between p-4 border-l-4 border-purple-500 bg-purple-50 rounded">
            <div className="flex items-center gap-3">
              <Database className="w-5 h-5 text-purple-600" />
              <div>
                <p className="font-medium text-gray-800">Backup automático</p>
                <p className="text-sm text-gray-500">Sistema completo salvo</p>
              </div>
            </div>
            <span className="text-sm text-gray-500">Hoje, 03:00</span>
          </div>
        </div>
      </div>
    </>
  );

  // Página de Configurações
  const ConfiguracoesPage = () => (
    <>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Configurações</h1>
        <p className="text-gray-600">Personalize suas preferências do sistema</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Configurações de Perfil */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <UserCircle className="w-5 h-5" />
              Informações do Perfil
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                  <input
                    type="text"
                    defaultValue="João Silva"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Cargo</label>
                  <input
                    type="text"
                    defaultValue="Gerente de Vendas"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <div className="relative">
                  <Mail className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                  <input
                    type="email"
                    defaultValue="joao.silva@empresa.com"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                <div className="relative">
                  <Phone className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                  <input
                    type="tel"
                    defaultValue="(11) 98765-4321"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Configurações de Notificações */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Notificações</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <p className="font-medium text-gray-800">Notificações por Email</p>
                  <p className="text-sm text-gray-500">Receba atualizações por email</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <p className="font-medium text-gray-800">Alertas de Propostas</p>
                  <p className="text-sm text-gray-500">Notificar sobre novas propostas</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <p className="font-medium text-gray-800">Relatórios Semanais</p>
                  <p className="text-sm text-gray-500">Resumo semanal de vendas</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Configurações de Segurança */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Segurança</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Senha Atual</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nova Senha</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Confirmar Nova Senha</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
                Alterar Senha
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar de Configurações */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Preferências</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tema</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Claro</option>
                  <option>Escuro</option>
                  <option>Automático</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Idioma</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Português (BR)</option>
                  <option>English</option>
                  <option>Español</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Fuso Horário</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Brasília (GMT-3)</option>
                  <option>São Paulo (GMT-3)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Sobre o Sistema</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Versão:</span>
                <span className="font-medium text-gray-800">2.1.0</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Última Atualização:</span>
                <span className="font-medium text-gray-800">06/10/2025</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Licença:</span>
                <span className="font-medium text-gray-800">Empresarial</span>
              </div>
            </div>
          </div>

          <button className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
            <Save className="w-5 h-5" />
            Salvar Todas as Configurações
          </button>
        </div>
      </div>
    </>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardPage />;
      case 'clientes':
        return <ClientesPage />;
      case 'usuarios':
        return <UsuariosPage />
      case 'propostas':
        return <PropostasPage />;
      case 'negocios':
        return <NegociosPage />;
      case 'quotations':
        return <QuotationsPage />;
      case 'database':
        return <DatabasePage />;
      case 'configuracoes':
        return <ConfiguracoesPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
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
                  className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                    currentPage === item.page
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

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          {renderPage()}
        </div>
      </div>
    </div>
  );
};

export default App