
import * as Icons from "lucide-react"; // Importe todos os ícones disponíveis
import { Separator } from "@/components/ui/separator"
import { MenuItem } from './menuConfig';

export const ItemMenu = ({title, icon, active, onClick }: MenuItem) => {
    const handleClick = () => {
        if (onClick) {
            onClick(); // Chama a função onClick se ela estiver definida
        }
    };
    const IconComponent = Icons[icon]; // Selecione o componente de ícone dinamicamente
    return(
    <>
        <div onClick={handleClick} className={`flex items-center cursor-pointer p-2 rounded-sm ${active ? 'bg-blue-500' : ''}`}>
            {IconComponent && <IconComponent className="mr-2 h-4 w-4" />} {/* Renderize o ícone se fornecido */}
            <span>{title}</span>
        </div>
        <Separator/>
    </>
    
    )
}