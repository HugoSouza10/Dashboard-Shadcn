
import * as Icons from "lucide-react"; // Importe todos os ícones disponíveis


type LucideIconName = 
"Menu" | "Flame" | 
"Command" | "Coffee" | 
"Code" | "Cloud" | 
"MonitorPlay";

type Props = {
    title: string;
    icon: LucideIconName; // Chave do tipo de ícone disponível em "lucide-react"
    active?: boolean; // Propriedade opcional para indicar se o item está ativo
}

export const ItemMenu = ({title, icon, active}: Props) => {
    const IconComponent = Icons[icon]; // Selecione o componente de ícone dinamicamente
    return(
    <div className={`flex items-center cursor-pointer p-2 mt-5 rounded-sm ${active ? 'bg-blue-500' : ''}`}>
        {IconComponent && <IconComponent className="mr-2 h-4 w-4" />} {/* Renderize o ícone se fornecido */}
        <span>{title}</span>
    </div>
    )
}