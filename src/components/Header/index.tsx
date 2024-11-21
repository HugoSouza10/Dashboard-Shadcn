import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, 
    DropdownMenuItem, DropdownMenuLabel, 
    DropdownMenuSeparator, DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { useState } from "react";
import { SideMenu } from '../SideBar';

export const Header = () => {
    const [activeMenuItem, setActiveMenuItem] = useState<string>('');

    const handleMenuItemClick = (item: string) => {
        setActiveMenuItem(item);
        // Condição para verificar a opção selecionada
        if (activeMenuItem === 'Sair') {
          console.log('Sair clicked!'); // Deslogar
        } else if (activeMenuItem === 'Configurações') {
          console.log('Configurações clicked!'); //Ir para configurações
        }
      };
    return(
        <header className=' bg-primary h-14 flex items-center pl-5 pr-5'>
            <div className="header-left flex flex-1">
                {/*Menu lateral */}
                <SideMenu/>
                <div className="logo pl-5 text-white">Logo</div>
            </div>
            <div className="header-right flex items-center">
                <div className="user-name pr-5 text-white">Hugo Souza</div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Avatar className="focus:outline-none cursor-pointer">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => handleMenuItemClick('Configurações')}>Configurações</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleMenuItemClick('Sair')}>Sair</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )

    {/*https://github.com/shadcn-ui/ui/blob/main/apps/www/components/icons.tsx */}
}