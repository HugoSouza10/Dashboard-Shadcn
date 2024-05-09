
import { 
  MenuIcon,
 } from "lucide-react"
import {
    Sheet, 
    SheetContent,
    SheetTrigger 
} from "@/components/ui/sheet";
import { ItemMenu } from "./item-menu";
import { menuConfig, MenuItem } from './menuConfig';
export const SideMenu = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <MenuIcon className="cursor-pointer"/>
                </SheetTrigger>
                <SheetContent className="w-96" side = 'left'>
                    <div>Logo</div>
                    {menuConfig.map((item: MenuItem, index: number) => (
                        <ItemMenu 
                            key={index} 
                            title={item.title} 
                            icon={item.icon} 
                            active={item.active} 
                            path={item.path}
                            onClick={item.onClick} 
                        />
                    ))}
                </SheetContent>
        </Sheet>
    )
}