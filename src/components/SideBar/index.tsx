
import { 
  MenuIcon,
 } from "lucide-react"
import {
    Sheet, 
    SheetContent,
    SheetTrigger 
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator"
import { ItemMenu } from "./item-menu";
export const SideMenu = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <MenuIcon className="cursor-pointer"/>
                </SheetTrigger>
                <SheetContent className="w-96" side = 'left'>
                    <div>Logo</div>
                        <ItemMenu title={'Fogo'} icon={'Flame'} active={true}/>
                        <Separator/>
                        <ItemMenu title={'Command'} icon={'Command'}/>
                        <Separator/>
                        <ItemMenu title={'Coffee'} icon={'Coffee'}/>
                        <Separator/>
                        <ItemMenu title={'Code'} icon={'Code'}/>
                        <Separator/>
                        <ItemMenu title={'Cloud'} icon={'Cloud'}/>
                        <Separator/>
                        <ItemMenu title={'MonitorPlay'} icon={'MonitorPlay'}/>
                </SheetContent>
        </Sheet>
    )
}