
import * as Icons from "lucide-react"; // Importe todos os ícones disponíveis
import { Separator } from "@/components/ui/separator"
import { MenuItem } from './menuConfig';
import { useNavigate } from "react-router-dom"; // Importa o hook useNavigate

export const ItemMenu = ({title, icon, active, path }: MenuItem) => {
    const navigate = useNavigate(); // Inicializa o hook
    const handleClick = () => {
       navigate(path); // Redireciona para o caminho especificado
       console.log(path)
    };
    const IconComponent = Icons[icon]; // Selecione o componente de ícone dinamicamente
    return(
    <>
        <div onClick={handleClick} className={`flex items-center cursor-pointer p-2 rounded-sm ${active ? 'bg-primary text-white' : ''}`}>
            {IconComponent && <IconComponent className="mr-2 h-4 w-4" />} {/* Renderize o ícone se fornecido */}
            <span>{title}</span>
        </div>
        <Separator/>
    </>
    
    )
}