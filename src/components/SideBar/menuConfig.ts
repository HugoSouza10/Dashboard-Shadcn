
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
        path: "/teste1",
        onClick: () => console.log("Opção 2 clicada")
      },
      {
        title: "Coffee",
        icon: "Coffee",
        path: "/teste2",
        onClick: () => console.log("Opção 3 clicada")
      },

      {
        title: "Code",
        icon: "Code",
        path: "/teste3",
        onClick: () => console.log("Opção 4 clicada")
      },

      {
        title: "Cloud",
        icon: "Cloud",
        path: "/teste3",
        onClick: () => console.log("Opção 5 clicada")
      },

      {
        title: "MonitorPlay",
        icon: "MonitorPlay",
        path: "/teste4",
        onClick: () => console.log("Opção 6 clicada")
      },
      
]