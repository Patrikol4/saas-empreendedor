import { Database, Upload, Download, FileText } from "lucide-react";

  // Página de Banco de Dados
  export const DatabasePage = () => (
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