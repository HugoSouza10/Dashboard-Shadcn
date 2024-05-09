
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
    onClick: () => void;
}

// 
export const menuConfig: MenuItem[] = [
    {
        title: "Fogo",
        icon: "Flame",
        path: "/",
        active: true,
        onClick: () => console.log("Opção 1 clicada")
      },
      {
        title: "Command",
        icon: "Command",
        path: "/otherpage",
        onClick: () => console.log("Opção 2 clicada")
      },
      {
        title: "Coffee",
        icon: "Coffee",
        path: "/otherpage",
        onClick: () => console.log("Opção 2 clicada")
      },

      {
        title: "Code",
        icon: "Code",
        path: "/otherpage",
        onClick: () => console.log("Opção 2 clicada")
      },

      {
        title: "Cloud",
        icon: "Cloud",
        path: "/otherpage",
        onClick: () => console.log("Opção 2 clicada")
      },

      {
        title: "MonitorPlay",
        icon: "MonitorPlay",
        path: "/otherpage",
        onClick: () => console.log("Opção 2 clicada")
      },
]