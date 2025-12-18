import { useState } from "react";

export const [clientes] = useState([
    { id: 1, nome: 'Tech Solutions Ltda', email: 'contato@techsolutions.com', telefone: '(11) 98765-4321', status: 'Ativo', dataContato: '2024-10-01' },
    { id: 2, nome: 'Inovação Digital', email: 'vendas@inovacaodigital.com', telefone: '(21) 97654-3210', status: 'Prospectado', dataContato: '2024-10-03' },
    { id: 3, nome: 'Empresa ABC', email: 'abc@empresa.com', telefone: '(11) 96543-2109', status: 'Ativo', dataContato: '2024-09-28' },
    { id: 4, nome: 'StartUp XYZ', email: 'contato@startupxyz.com', telefone: '(48) 95432-1098', status: 'Inativo', dataContato: '2024-09-15' },
]);

export const [usuarios] = useState([
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

export const [negocios] = useState([
    { id: 1, cliente: 'Tech Solutions Ltda', valor: 45000, status: 'Fechado', dataFechamento: '2024-10-05', vendedor: 'João Silva' },
    { id: 2, cliente: 'Empresa ABC', valor: 78000, status: 'Fechado', dataFechamento: '2024-10-02', vendedor: 'Maria Santos' },
    { id: 3, cliente: 'Inovação Digital', valor: 32000, status: 'Em Negociação', dataFechamento: '-', vendedor: 'Pedro Costa' },
    { id: 4, cliente: 'Mega Corp', valor: 125000, status: 'Fechado', dataFechamento: '2024-09-20', vendedor: 'Ana Lima' },
]);

export const [entradas] = useState([
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

export const [propostas] = useState([
    { id: 1, cliente: 'Tech Solutions Ltda', valor: 45000, status: 'Enviada', data: '2024-10-01', validade: '2024-10-31' },
    { id: 2, cliente: 'Inovação Digital', valor: 32000, status: 'Em Análise', data: '2024-10-03', validade: '2024-11-03' },
    { id: 3, cliente: 'Empresa ABC', valor: 78000, status: 'Aprovada', data: '2024-09-28', validade: '2024-10-28' },
    { id: 4, cliente: 'StartUp XYZ', valor: 15000, status: 'Rejeitada', data: '2024-09-15', validade: '2024-10-15' },
]);

// Crypto Quotation Data
export const [cryptoData] = useState([
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

export const [aportesMensais] = useState([
      { mes: 'Abr/25', valor: 1500, btc: 0.00457, eth: 0.113 },
      { mes: 'Mai/25', valor: 2000, btc: 0.00609, eth: 0.151 },
      { mes: 'Jun/25', valor: 1800, btc: 0.00548, eth: 0.136 },
      { mes: 'Jul/25', valor: 2500, btc: 0.00761, eth: 0.189 },
      { mes: 'Ago/25', valor: 2200, btc: 0.00670, eth: 0.166 },
      { mes: 'Set/25', valor: 1900, btc: 0.00579, eth: 0.143 }
    ]);

export const [aportesDiarios] = useState([
      { dia: '01/10', valor: 100, cripto: 'BTC' },
      { dia: '02/10', valor: 150, cripto: 'ETH' },
      { dia: '03/10', valor: 100, cripto: 'BTC' },
      { dia: '04/10', valor: 80, cripto: 'SOL' },
      { dia: '05/10', valor: 120, cripto: 'BNB' },
      { dia: '06/10', valor: 100, cripto: 'BTC' },
      { dia: '07/10', valor: 200, cripto: 'ETH' }
    ]);

export  const [noticias] = useState([
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

