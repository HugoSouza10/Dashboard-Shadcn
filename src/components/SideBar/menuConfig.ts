
type LucideIconName =
"Menu" | "Flame" | 
"Command" | "Coffee" | 
"Code" | "Cloud" | 
"MonitorPlay";

type MenuItem = {
    title: string;
    icon: LucideIconName; // Chave do tipo de ícone disponível em "lucide-react"
    active?: boolean; // Propriedade opcional para indicar se o item está ativo
    path: string; // Adicione a propriedade 'path'
    onClick?: () => void;
}

// 
export const menuConfig: MenuItem[] = [
    {
        title: "Opção 1",
        icon: "Menu",
        path: "/",
        active: true,
        onClick: () => console.log("Opção 1 clicada")
      },
      {
        title: "Opção 2",
        icon: "Flame",
        path: "/otherpage",
        onClick: () => console.log("Opção 2 clicada")
      },
]