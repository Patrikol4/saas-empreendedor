import { Send, Cpu, Settings, Clock, Lock } from "lucide-react";
import { useState } from "react";

export const IALocalPage = () => {
    const [mensagens, setMensagens] = useState([
      {
        id: 1,
        tipo: 'usuario',
        conteudo: 'Olá! Como você pode me ajudar hoje?',
        hora: '14:30'
      },
      {
        id: 2,
        tipo: 'ia',
        conteudo: 'Olá! Sou seu assistente de IA rodando localmente. Posso ajudá-lo com:\n\n• Responder perguntas gerais\n• Auxiliar na redação de textos\n• Análise de dados\n• Programação e código\n• Brainstorming de ideias',
        hora: '14:30'
      }
    ]);

    const [inputMessage, setInputMessage] = useState('');
    const [modeloAtivo, setModeloAtivo] = useState('Llama 3.2');
    const [temperatura, setTemperatura] = useState(70);

    const handleEnviar = () => {
      if (inputMessage.trim()) {
        setMensagens([...mensagens, {
          id: Date.now(),
          tipo: 'usuario',
          conteudo: inputMessage,
          hora: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
        }]);
        setInputMessage('');
      }
    };

    return (
      <div style={{ padding: '24px', backgroundColor: '#f3f4f6', minHeight: '100vh' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

          {/* Cabeçalho */}
          <div style={{ marginBottom: '32px' }}>
            <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#1f2937', marginBottom: '8px' }}>
              🤖 Assistente IA Local
            </h1>
            <p style={{ color: '#6b7280' }}>
              Interaja com modelos de IA rodando localmente no seu computador
            </p>
          </div>

          {/* Cards de Status */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '32px' }}>

            <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '24px', borderLeft: '4px solid #10b981' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <h3 style={{ fontSize: '14px', fontWeight: '500', color: '#6b7280' }}>Status do Sistema</h3>
                <span style={{ width: '12px', height: '12px', backgroundColor: '#10b981', borderRadius: '50%' }}></span>
              </div>
              <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#10b981' }}>Online</p>
            </div>

            <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '24px', borderLeft: '4px solid #3b82f6' }}>
              <h3 style={{ fontSize: '14px', fontWeight: '500', color: '#6b7280', marginBottom: '8px' }}>Modelo Ativo</h3>
              <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#3b82f6' }}>{modeloAtivo}</p>
              <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '4px' }}>3B parâmetros</p>
            </div>

            <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '24px', borderLeft: '4px solid #8b5cf6' }}>
              <h3 style={{ fontSize: '14px', fontWeight: '500', color: '#6b7280', marginBottom: '8px' }}>Uso de RAM</h3>
              <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#8b5cf6' }}>4.2 GB</p>
              <div style={{ width: '100%', backgroundColor: '#e5e7eb', borderRadius: '9999px', height: '8px', marginTop: '8px' }}>
                <div style={{ width: '52%', backgroundColor: '#8b5cf6', height: '8px', borderRadius: '9999px' }}></div>
              </div>
            </div>

            <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '24px', borderLeft: '4px solid #f97316' }}>
              <h3 style={{ fontSize: '14px', fontWeight: '500', color: '#6b7280', marginBottom: '8px' }}>Conversas Hoje</h3>
              <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#f97316' }}>12</p>
              <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '4px' }}>+3 desde ontem</p>
            </div>
          </div>

          {/* Grid Principal */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>

            {/* Área de Chat */}
            <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', height: '600px' }}>

              {/* Header Chat */}
              <div style={{ borderBottom: '1px solid #e5e7eb', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', background: 'linear-gradient(to bottom right, #3b82f6, #8b5cf6)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>
                    AI
                  </div>
                  <div>
                    <h3 style={{ fontWeight: '600', color: '#1f2937' }}>Assistente Local</h3>
                    <p style={{ fontSize: '12px', color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span style={{ width: '8px', height: '8px', backgroundColor: '#10b981', borderRadius: '50%' }}></span>
                      Disponível
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setMensagens([])}
                  style={{ padding: '8px 16px', backgroundColor: '#fef2f2', color: '#dc2626', borderRadius: '8px', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: '500' }}
                >
                  🗑️ Nova Conversa
                </button>
              </div>

              {/* Mensagens */}
              <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
                {mensagens.map((msg) => (
                  <div key={msg.id} style={{ display: 'flex', justifyContent: msg.tipo === 'usuario' ? 'flex-end' : 'flex-start', marginBottom: '16px' }}>
                    <div style={{
                      backgroundColor: msg.tipo === 'usuario' ? '#3b82f6' : '#f3f4f6',
                      color: msg.tipo === 'usuario' ? 'white' : '#1f2937',
                      borderRadius: '8px',
                      padding: '16px',
                      maxWidth: '450px'
                    }}>
                      <p style={{ whiteSpace: 'pre-line', margin: 0 }}>{msg.conteudo}</p>
                      <span style={{ fontSize: '12px', opacity: 0.7, display: 'block', marginTop: '8px' }}>
                        {msg.hora}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div style={{ borderTop: '1px solid #e5e7eb', padding: '16px' }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyUp={(e) => e.key === 'Enter' && handleEnviar()} // função depreciada atualizada
                    placeholder="Digite sua mensagem..."
                    style={{ flex: 1, padding: '12px 16px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px' }}
                  />
                  <button
                    onClick={handleEnviar}
                    style={{ padding: '12px 24px', backgroundColor: '#3b82f6', color: 'white', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '8px' }}
                  >
                    <Send size={18} />
                    Enviar
                  </button>
                </div>
                <p style={{ fontSize: '12px', color: '#6b7280', marginTop: '8px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Lock size={12} />
                  Processamento 100% local - Suas conversas não saem do seu computador
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

              {/* Modelos */}
              <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '24px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1f2937', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Cpu size={20} color="#3b82f6" />
                  Modelos Disponíveis
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {['Llama 3.2', 'Mistral 7B', 'Phi-3 Mini', 'CodeLlama'].map((modelo) => (
                    <div
                      key={modelo}
                      onClick={() => setModeloAtivo(modelo)}
                      style={{
                        padding: '12px',
                        border: modelo === modeloAtivo ? '2px solid #3b82f6' : '1px solid #e5e7eb',
                        backgroundColor: modelo === modeloAtivo ? '#eff6ff' : 'white',
                        borderRadius: '8px',
                        cursor: 'pointer'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <p style={{ fontWeight: '600', color: '#1f2937', margin: 0 }}>{modelo}</p>
                        {modelo === modeloAtivo && (
                          <span style={{ fontSize: '11px', backgroundColor: '#d1fae5', color: '#065f46', padding: '2px 8px', borderRadius: '9999px', fontWeight: '500' }}>
                            Ativo
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Configurações */}
              <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '24px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1f2937', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Settings size={20} color="#8b5cf6" />
                  Configurações
                </h3>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                    Temperatura: {temperatura}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={temperatura}
                    onChange={(e) => setTemperatura(Number(e.target.value))}
                    style={{ width: '100%' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>
                    <span>Preciso</span>
                    <span>Criativo</span>
                  </div>
                </div>
              </div>

              {/* Histórico */}
              <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '24px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1f2937', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Clock size={20} color="#f97316" />
                  Histórico
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {['Email profissional', 'Análise de dados', 'Código Python'].map((item, i) => (
                    <div key={i} style={{ padding: '12px', backgroundColor: '#f9fafb', borderRadius: '8px', cursor: 'pointer' }}>
                      <p style={{ fontSize: '14px', fontWeight: '500', color: '#1f2937', margin: 0 }}>{item}</p>
                      <p style={{ fontSize: '12px', color: '#6b7280', margin: '4px 0 0 0' }}>Hoje, 14:30</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Aviso de Privacidade */}
          <div style={{ marginTop: '32px', background: 'linear-gradient(to right, #f0fdf4, #d1fae5)', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '24px', borderLeft: '4px solid #10b981' }}>
            <div style={{ display: 'flex', gap: '16px' }}>
              <Lock size={32} color="#059669" style={{ flexShrink: 0 }} />
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1f2937', marginBottom: '8px' }}>
                  Privacidade Garantida
                </h3>
                <p style={{ color: '#374151', margin: 0, lineHeight: '1.6' }}>
                  Todos os seus dados permanecem no seu computador. Nenhuma informação é enviada para servidores externos.
                  A IA processa tudo localmente, garantindo total privacidade e segurança das suas conversas.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  };
