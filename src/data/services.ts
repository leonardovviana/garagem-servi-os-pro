import { CircleDotDashed, Caravan, Hammer, Table, Cog, LucideIcon } from "lucide-react";

export interface ServiceOption {
  id: string;
  label: string;
}

export interface Service {
  id: string;
  name: string;
  icon: LucideIcon;
  options: ServiceOption[];
}

export const services: Service[] = [
  {
    id: "recuperacao-roda",
    name: "RECUPERAÇÃO DE RODA",
    icon: CircleDotDashed,
    options: [
      { id: "recuperacao-completa", label: "Recuperação completa" },
      { id: "diamantacao", label: "Diamantação" },
      { id: "pintura", label: "Pintura" },
      { id: "desempeno", label: "Desempeno" },
      { id: "solda-roda", label: "Solda" },
      { id: "outros", label: "Outros" },
    ],
  },
  {
    id: "fabricacao-reboque",
    name: "FABRICAÇÃO DE REBOQUE",
    icon: Caravan,
    options: [
      { id: "reboque-1-eixo", label: "Reboque 1 Eixo (Carretinha)" },
      { id: "reboque-2-eixos", label: "Reboque 2 Eixos (Carga pesada)" },
      { id: "reboque-barco", label: "Reboque para Barco/Jet Ski" },
      { id: "reboque-moto", label: "Reboque para Moto" },
      { id: "trailer", label: "Trailer" },
      { id: "outros", label: "Outros" },
    ],
  },
  {
    id: "serralheria",
    name: "SERRALHERIA",
    icon: Hammer,
    options: [
      { id: "portoes", label: "Portões (Basculante/Correr)" },
      { id: "grades", label: "Grades de Proteção" },
      { id: "estruturas", label: "Estruturas Metálicas (Telhados)" },
      { id: "solda-geral", label: "Serviços de Solda em Geral" },
      { id: "outros", label: "Outros" },
    ],
  },
  {
    id: "estantes-aco",
    name: "ESTANTES DE AÇO",
    icon: Table,
    options: [
      { id: "uso-leve", label: "Uso leve" },
      { id: "uso-medio", label: "Uso Médio" },
      { id: "uso-pesado", label: "Uso Pesado" },
      { id: "outros", label: "Outros" },
    ],
  },
  {
    id: "torno-mecanico",
    name: "TORNO MECÂNICO",
    icon: Cog,
    options: [
      { id: "pecas-especiais", label: "Confecção de Peças Especiais" },
      { id: "retifica", label: "Retífica de Discos/Tambores" },
      { id: "roscas", label: "Abertura de Roscas" },
      { id: "outros", label: "Outros" },
      { id: "eixos", label: "Recuperação de Eixos" },
      { id: "fresagem", label: "Fresagem" },
    ],
  },
];

export const WHATSAPP_NUMBER = "5587999274678";

export function generateWhatsAppLink(serviceName: string, selectedOptions: string[]): string {
  const message = `Olá, GARAGEM SERVIÇOS! Tenho interesse em *${serviceName}*.
Gostaria de orçar os seguintes itens:
${selectedOptions.map((opt) => `- ${opt}`).join("\n")}
Aguardo retorno.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
