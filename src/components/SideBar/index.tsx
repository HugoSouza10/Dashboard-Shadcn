
import { 
  MenuIcon,
  Flame,
  Command,
  Coffee,
  Code,
  Cloud,
  MonitorPlay,
 } from "lucide-react"
import {
    Sheet, 
    SheetContent,
    SheetTrigger 
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator"
export const SideMenu = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <MenuIcon/>
                </SheetTrigger>
                <SheetContent className="w-96" side = 'left'>
                    <div className="flex items-center cursor-pointe p-2 bg-blue-500 mt-10 rounded-sm">
                        <Flame className="mr-2 h-4 w-4" />
                        <span>Fogo</span>
                    </div>
                    <Separator/>
                    <div className="flex items-center cursor-pointer p-2">
                        <Command className="mr-2 h-4 w-4" />
                        <span>Command</span>
                    </div>
                    <Separator/>
                    <div className="flex items-center cursor-pointer p-2">
                        <Coffee className="mr-2 h-4 w-4" />
                        <span>Coffee</span>
                    </div>
                    <Separator/>
                    <div className="flex items-center cursor-pointer p-2">
                        <Code className="mr-2 h-4 w-4" />
                        <span>Code</span>
                    </div>
                    <Separator/>
                    <div className="flex items-center cursor-pointer p-2 ">
                        <Cloud className="mr-2 h-4 w-4" />
                        <span>Cloud</span>
                    </div>
                    <Separator/>
                    <div className="flex items-center cursor-pointer p-2">
                        <MonitorPlay className="mr-2 h-4 w-4" />
                        <span>MonitorPlay</span>
                    </div>
                </SheetContent>
        </Sheet>
    )
}