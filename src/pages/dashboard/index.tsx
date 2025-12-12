import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { Send, Settings, Cpu, Clock, Lock, ChartArea, Users, FileText, Database, CheckCircle, DollarSign, TrendingUp, LayoutDashboard, UserCircle, LogOut, Menu, X, ChevronDown, Search, Plus, Edit, Trash2, Eye, Filter, Download, Upload, Mail, Phone, MapPin, Calendar, Save, User, Building2, ShoppingBag, CreditCard, PieChart } from 'lucide-react';
//import type { Icon, Title, Value, Color } from './interfaces/Pages';


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
                        {funnelData.map((_entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    </>
);