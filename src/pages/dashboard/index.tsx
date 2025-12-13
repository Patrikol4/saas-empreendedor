import { useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { Users, FileText, Database, CheckCircle, DollarSign, TrendingUp } from 'lucide-react';
//import type { Icon, Title, Value, Color } from './interfaces/Pages';


const [metricsData] = useState({
    clientesProspectados: 0,
    propostasEnviadas: 0,
    clientesSalvos: 0,
    negociosFechados: 0,
    receitaTotal: 0,
});

const [monthlyData] = useState([
    { mes: 'Jan', prospectados: 32, propostas: 18, fechados: 12, receita: 65000 },
    { mes: 'Fev', prospectados: 45, propostas: 25, fechados: 15, receita: 72500 },
    { mes: 'Mar', prospectados: 38, propostas: 22, fechados: 14, receita: 68000 },
    { mes: 'Abr', prospectados: 52, propostas: 31, fechados: 19, receita: 89500 },
    { mes: 'Mai', prospectados: 48, propostas: 28, fechados: 21, receita: 95250 },
    { mes: 'Jun', prospectados: 30, propostas: 15, fechados: 8, receita: 68500 }
]);


const taxaConversao = ((metricsData.negociosFechados / metricsData.clientesProspectados) * 100).toFixed(1);
const ticketMedio = (metricsData.receitaTotal / metricsData.negociosFechados).toFixed(2);


const funnelData = [
    { name: 'Prospectados', value: metricsData.clientesProspectados },
    { name: 'Propostas', value: metricsData.propostasEnviadas },
    { name: 'Fechados', value: metricsData.negociosFechados }
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];


const MetricCard = ({ icon: Icon, title, value, color, prefix = '' }: {icon: any, title: string, value: any, color: any, prefix: any}) => (
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

export const DashboardPage = () => (

    <>
        <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Dashboard de Vendas</h1>
            <p className="text-gray-600">Visão geral do desempenho comercial</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            <MetricCard icon={Users} title="Clientes Prospectados" value={metricsData.clientesProspectados} color="text-blue-600" prefix=''/>
            <MetricCard icon={FileText} title="Propostas Enviadas" value={metricsData.propostasEnviadas} color="text-green-600" prefix=''/>
            <MetricCard icon={Database} title="Clientes no BD" value={metricsData.clientesSalvos} color="text-purple-600" prefix=''/>
            <MetricCard icon={CheckCircle} title="Negócios Fechados" value={metricsData.negociosFechados} color="text-orange-600" prefix=''/>
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
                        {funnelData.map((_entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    </>
);