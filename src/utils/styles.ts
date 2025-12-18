import { Building2, User } from "lucide-react";

export const getStatusColor = (status: any) => {

    const colors = Object.keys({
        'Ativo': 'bg-green-100 text-green-800',
        'Inativo': 'bg-red-100 text-red-800',
        'Prospectado': 'bg-blue-100 text-blue-800',
        'Enviada': 'bg-yellow-100 text-yellow-800',
        'Em Analise': 'bg-purple-100 text-purple-800',
        'Aprovada': 'bg-green-100 text-green-800',
        'Rejeitada': 'bg-red-100 text-red-800',
        'Fechado': 'bg-green-100 text-green-800',
        'Em Negociacao': 'bg-orange-100 text-orange-800',
    });
    return colors[status] || 'bg-gray-100 text-gray-800';
};

export  const getTipoColor = (tipo: any) => {
    return tipo === 'Cliente da Plataforma' 
      ? 'bg-blue-100 text-blue-800 border border-blue-200' 
      : 'bg-purple-100 text-purple-800 border border-purple-200';
  };

export  const getTipoIcon = (tipo: any) => {
    return tipo === 'Cliente da Plataforma' ? User : Building2;
  };
