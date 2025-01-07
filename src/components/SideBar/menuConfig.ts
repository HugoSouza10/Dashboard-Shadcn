
export type LucideIconName =
"Menu" | "Flame" | 
"Command" | "Coffee" | 
"Code" | "Cloud" | 
"MonitorPlay";

export type MenuItem = {
    title: string;
    icon: LucideIconName; // Chave do tipo de ícone disponível em "lucide-react"
    active?: boolean; // Propriedade opcional para indicar se o item está ativo
    path: string; // Adicione a propriedade 'path'
}

// 
export const menuConfig: MenuItem[] = [
    {
        title: "Dashbord",
        icon: "Flame",
        path: "/",
        active: true,
      },
      {
        title: "Aparelhos auditivos",
        icon: "Command",
        path: "/aparelhosAuditivos",
        active: false,
      },
      {
        title: "Pilhas",
        icon: "Coffee",
        path: "/teste2",
      },

      {
        title: "Agendar consulta",
        icon: "Code",
        path: "/teste3",
      },

      {
        title: "Pacientes",
        icon: "Cloud",
        path: "/teste3",
      },
]