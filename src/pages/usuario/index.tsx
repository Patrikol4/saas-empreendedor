import { User, Building2, Plus, Search, Filter, Download, Eye, Edit, Trash2, X, Phone, Mail, MapPin, DollarSign, ShoppingBag, CreditCard, Calendar, TrendingUp, Clock } from "lucide-react";
import {useState} from "react"
import { PieChart } from "recharts";

export const UsuariosPage = () => {
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

  const abrirModal = (usuario: React.SetStateAction<null> | { id: number; nome: string; email: string; telefone: string; tipo: string; empresaVinculada: null; plano: string; status: string; dataCadastro: string; mensalidade: string; whatsapp?: undefined; dadosDetalhados?: undefined; } | { id: number; nome: string; email: string; telefone: string; whatsapp: string; tipo: string; empresaVinculada: string; plano: string; status: string; dataCadastro: string; mensalidade: string; dadosDetalhados: { endereco: string; preferenciasGasto: { categoria: string; cnae: string; percentual: number; }[]; totalGasto: number; periodoMaisGasto: { meses: string[]; dias: string[]; }; formasPagamento: { tipo: string; percentual: number; vezes: number; }[]; horariosPico: string[]; historicoCompras: { data: string; valor: number; items: string; }[]; }; } | { id: number; nome: string; email: string; telefone: string; tipo: string; empresaVinculada: string; plano: string; status: string; dataCadastro: string; mensalidade: string; dadosDetalhados: { endereco: string; preferenciasGasto: { categoria: string; cnae: string; percentual: number; }[]; totalGasto: number; periodoMaisGasto: { meses: string[]; dias: string[]; }; formasPagamento: { tipo: string; percentual: number; vezes: number; }[]; horariosPico: string[]; historicoCompras: { data: string; valor: number; items: string; }[]; }; whatsapp?: undefined; }) => {
    if (usuario?.tipo === "Cliente de Terceiro" && usuario?.dadosDetalhados) {
      setClienteSelecionado(usuario);
      setModalAberto(true);
    }
  };

  const fecharModal = () => {
    setModalAberto(false);
    setClienteSelecionado(null);
  };

  const getStatusColor = (status: any) => {
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

  const getTipoColor = (tipo: any) => {
    return tipo === 'Cliente da Plataforma' 
      ? 'bg-blue-100 text-blue-800 border border-blue-200' 
      : 'bg-purple-100 text-purple-800 border border-purple-200';
  };

  const getTipoIcon = (tipo: any) => {
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
                  <h2 className="text-2xl font-bold mb-2">{clienteSelecionado['nome']}</h2>
                  <p className="text-purple-100 text-sm">Cliente de Terceiro - {clienteSelecionado['empresaVinculada']}</p>
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
                  {clienteSelecionado['whatsapp'] && (
                    <div className="flex items-center gap-3 bg-white p-3 rounded-lg">
                      <Phone className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="text-xs text-gray-500">WhatsApp</p>
                        <p className="font-medium text-gray-800">{clienteSelecionado['whatsapp']}</p>
                      </div>
                    </div>
                  )}
                  {clienteSelecionado['email'] && (
                    <div className="flex items-center gap-3 bg-white p-3 rounded-lg">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="text-xs text-gray-500">E-mail</p>
                        <p className="font-medium text-gray-800">{clienteSelecionado['email']}</p>
                      </div>
                    </div>
                  )}
                  <div className="flex items-center gap-3 bg-white p-3 rounded-lg md:col-span-2">
                    <MapPin className="w-5 h-5 text-red-600" />
                    <div>
                      <p className="text-xs text-gray-500">Endereço</p>
                      <p className="font-medium text-gray-800">{clienteSelecionado['dadosDetalhados']['endereco']}</p>
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
                  {clienteSelecionado.dadosDetalhados.preferenciasGasto.map((pref: { categoria: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; cnae: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; percentual: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }, index: React.Key | null | undefined) => (
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
                  {clienteSelecionado.dadosDetalhados.formasPagamento.map((forma: { tipo: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; percentual: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; vezes: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }, index: React.Key | null | undefined) => (
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
                    {clienteSelecionado.dadosDetalhados.periodoMaisGasto.meses.map((mes: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, index: React.Key | null | undefined) => (
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
                    {clienteSelecionado.dadosDetalhados.periodoMaisGasto.dias.map((dia: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, index: React.Key | null | undefined) => (
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
                  {clienteSelecionado.dadosDetalhados.horariosPico.map((horario: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, index: React.Key | null | undefined) => (
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
                  {clienteSelecionado.dadosDetalhados.historicoCompras.map((compra: { data: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; items: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; valor: { toLocaleString: (arg0: string, arg1: { minimumFractionDigits: number; }) => string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }; }, index: React.Key | null | undefined) => (
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
