import { useState } from 'react';
//import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { Clock, FileText, Plus, Edit, Trash2, Calendar } from 'lucide-react';
//import type { Icon, Title, Value, Color } from './interfaces/Pages';


export const JournalPage = () => {
    const [entradas] = useState([
        {
            id: 1,
            data: '09/10/2025',
            hora: '08:30',
            tipo: 'Reflexão',
            titulo: 'Início de um novo dia produtivo',
            conteudo: 'Hoje acordei com muita energia e disposição. Vou focar em finalizar o projeto da Tech Solutions e fazer follow-up com os clientes prospectados da semana passada. Meta: 5 ligações e 3 reuniões agendadas.',
            humor: '😊',
            tags: ['trabalho', 'metas', 'motivação']
        },
        {
            id: 2,
            data: '09/10/2025',
            hora: '14:15',
            tipo: 'Aprendizado',
            titulo: 'Nova estratégia de vendas aprendida',
            conteudo: 'Participei de um webinar sobre técnicas de cold calling. Aprendi sobre a importância de fazer perguntas abertas e ouvir mais do que falar. Vou aplicar isso nas próximas ligações.',
            humor: '🎯',
            tags: ['vendas', 'aprendizado', 'desenvolvimento']
        },
        {
            id: 3,
            data: '08/10/2025',
            hora: '19:45',
            tipo: 'Gratidão',
            titulo: 'Fechamento importante',
            conteudo: 'Consegui fechar o contrato com a Empresa ABC! Foram 3 semanas de negociação, mas valeu a pena. Grato pela persistência e pela confiança do cliente. Comemoração com a equipe amanhã!',
            humor: '🎉',
            tags: ['sucesso', 'gratidão', 'vendas']
        },
        {
            id: 4,
            data: '07/10/2025',
            hora: '09:00',
            tipo: 'Meta',
            titulo: 'Planejamento semanal',
            conteudo: 'Semana será intensa. Preciso: 1) Fechar proposta da StartUp XYZ, 2) Preparar apresentação para novo cliente, 3) Revisar pipeline de vendas, 4) Treinar novo membro da equipe.',
            humor: '💪',
            tags: ['planejamento', 'metas', 'organização']
        },
        {
            id: 5,
            data: '06/10/2025',
            hora: '16:30',
            tipo: 'Reflexão',
            titulo: 'Desafio superado',
            conteudo: 'Cliente estava insatisfeito com o prazo de entrega. Consegui negociar uma solução que funcionou para ambos os lados. Aprendi que comunicação transparente é fundamental.',
            humor: '😌',
            tags: ['desafio', 'aprendizado', 'cliente']
        },
        {
            id: 6,
            data: '05/10/2025',
            hora: '20:00',
            tipo: 'Pessoal',
            titulo: 'Equilíbrio vida-trabalho',
            conteudo: 'Passei a tarde com a família no parque. É importante desconectar e recarregar as energias. Voltei mais motivado e com ideias novas para a semana.',
            humor: '🌟',
            tags: ['familia', 'equilibrio', 'bem-estar']
        }
    ]);

    const [filtroTipo, setFiltroTipo] = useState('Todos');
    const tipos = ['Todos', 'Reflexão', 'Aprendizado', 'Gratidão', 'Meta', 'Pessoal'];

    const entradasFiltradas = filtroTipo === 'Todos'
        ? entradas
        : entradas.filter(e => e.tipo === filtroTipo);

    const getTipoColor = (tipo: any) => {
        const cores = Object.keys({
            'Reflexão': 'bg-blue-100 text-blue-800 border-blue-300',
            'Aprendizado': 'bg-purple-100 text-purple-800 border-purple-300',
            'Gratidão': 'bg-green-100 text-green-800 border-green-300',
            'Meta': 'bg-orange-100 text-orange-800 border-orange-300',
            'Pessoal': 'bg-pink-100 text-pink-800 border-pink-300'
        });
        return cores[tipo] || 'bg-gray-100 text-gray-800 border-gray-300';
    };

    const contadorTipos = {
        total: entradas.length,
        reflexao: entradas.filter(e => e.tipo === 'Reflexão').length,
        aprendizado: entradas.filter(e => e.tipo === 'Aprendizado').length,
        gratidao: entradas.filter(e => e.tipo === 'Gratidão').length,
        meta: entradas.filter(e => e.tipo === 'Meta').length,
        pessoal: entradas.filter(e => e.tipo === 'Pessoal').length
    };

    return (
        <>
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">Journal Pessoal</h1>
                <p className="text-gray-600">Registre suas reflexões, aprendizados e conquistas</p>
            </div>

            {/* Cards de Estatísticas */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
                <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-gray-500">
                    <p className="text-sm text-gray-600 mb-1">Total</p>
                    <p className="text-3xl font-bold text-gray-800">{contadorTipos.total}</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-500">
                    <p className="text-sm text-gray-600 mb-1">Reflexões</p>
                    <p className="text-3xl font-bold text-blue-600">{contadorTipos.reflexao}</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-purple-500">
                    <p className="text-sm text-gray-600 mb-1">Aprendizados</p>
                    <p className="text-3xl font-bold text-purple-600">{contadorTipos.aprendizado}</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-500">
                    <p className="text-sm text-gray-600 mb-1">Gratidões</p>
                    <p className="text-3xl font-bold text-green-600">{contadorTipos.gratidao}</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-orange-500">
                    <p className="text-sm text-gray-600 mb-1">Metas</p>
                    <p className="text-3xl font-bold text-orange-600">{contadorTipos.meta}</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-pink-500">
                    <p className="text-sm text-gray-600 mb-1">Pessoais</p>
                    <p className="text-3xl font-bold text-pink-600">{contadorTipos.pessoal}</p>
                </div>
            </div>

            {/* Controles */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex flex-wrap gap-4 items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                        {tipos.map((tipo) => (
                            <button
                                key={tipo}
                                onClick={() => setFiltroTipo(tipo)}
                                className={`px-4 py-2 rounded-lg font-medium transition-all ${filtroTipo === tipo
                                        ? 'bg-blue-600 text-white shadow-md'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {tipo}
                            </button>
                        ))}
                    </div>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors shadow-md">
                        <Plus className="w-5 h-5" />
                        Nova Entrada
                    </button>
                </div>
            </div>

            {/* Timeline de Entradas */}
            <div className="space-y-6">
                {entradasFiltradas.map((entrada) => (
                    <div key={entrada.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden">
                        <div className="p-6">
                            {/* Cabeçalho */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="text-4xl">{entrada.humor}</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800">{entrada.titulo}</h3>
                                        <div className="flex items-center gap-3 mt-1">
                                            <span className="text-sm text-gray-500 flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {entrada.data}
                                            </span>
                                            <span className="text-sm text-gray-500 flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                {entrada.hora}
                                            </span>
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getTipoColor(entrada.tipo)}`}>
                                                {entrada.tipo}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <button className="text-blue-600 hover:text-blue-800 p-2 hover:bg-blue-50 rounded-lg transition-colors">
                                        <Edit className="w-5 h-5" />
                                    </button>
                                    <button className="text-red-600 hover:text-red-800 p-2 hover:bg-red-50 rounded-lg transition-colors">
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Conteúdo */}
                            <p className="text-gray-700 leading-relaxed mb-4">{entrada.conteudo}</p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 pt-4 border-t">
                                {entrada.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors cursor-pointer"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mensagem quando não há entradas */}
            {entradasFiltradas.length === 0 && (
                <div className="bg-white rounded-lg shadow-md p-12 text-center">
                    <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">Nenhuma entrada encontrada</h3>
                    <p className="text-gray-500 mb-6">Tente selecionar outro filtro ou crie uma nova entrada</p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg inline-flex items-center gap-2 transition-colors">
                        <Plus className="w-5 h-5" />
                        Criar Primeira Entrada
                    </button>
                </div>
            )}

            {/* Dica do dia */}
            <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow-md p-6 border-l-4 border-blue-500">
                <div className="flex items-start gap-4">
                    <div className="text-3xl">💡</div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Dica de Journaling</h3>
                        <p className="text-gray-700">
                            Escrever no journal pela manhã ajuda a organizar seus pensamentos e definir intenções para o dia.
                            À noite, use para refletir sobre suas conquistas e aprendizados.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
