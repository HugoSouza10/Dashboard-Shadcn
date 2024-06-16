
import { 
  MenuIcon,
 } from "lucide-react"
import {
    Sheet, 
    SheetContent,
    SheetHeader,
    SheetTrigger 
} from "@/components/ui/sheet";
import { ItemMenu } from "./item-menu";
import { menuConfig, MenuItem } from './menuConfig';
export const SideMenu = () => {
    return (
        <Sheet>
                <SheetTrigger asChild >
                    <MenuIcon className="cursor-pointer"/>
                </SheetTrigger>
                <SheetContent side = 'left'>
                <SheetHeader>
                    <div className="mb-5">Dr.Carla</div>
                </SheetHeader>
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