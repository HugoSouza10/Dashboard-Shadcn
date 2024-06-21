import { ThemeToggle } from "./components/theme-toggle";
import { 
  DollarSign,
  Ear,
  Zap,
 } from "lucide-react"
 {/*import { Button } from "./components/ui/button";*/}
import { ThemeProvider } from "@/components/theme-provider"
import { Theme } from "@/components/Theme"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Page = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <ThemeToggle/>
        <Theme>
          <div className="container p-5">
            <h1 className="mb-5">Bem-vindo, Dr.Carla!</h1>
            <div className="Dashboard-card grid md:grid-cols-2 gap-5">
              <Card className="hover:bg-blue-500 flex items-center">
                  <CardHeader className="pt-3">
                    <Ear className="sm: w-7 w-h-7 md:w-10 h-10"/>
                  </CardHeader>
                  <CardContent className="pt-3">
                    <CardTitle className="text-lg font-semibold">Aparelhos vendidos</CardTitle>
                    <CardDescription className="text-xl font-bold">200</CardDescription>
                  </CardContent>
              </Card>
              <Card className="hover:bg-blue-500 flex items-center">
                  <CardHeader className="pt-3">
                    <Zap className="sm: w-7 w-h-7 md:w-10 h-10"/>
                  </CardHeader>
                  <CardContent className="pt-3">
                    <CardTitle className="text-lg font-semibold">Pilhas</CardTitle>
                    <CardDescription className="text-xl font-bold">20</CardDescription>
                  </CardContent>
              </Card>
              <Card className="hover:bg-blue-500 flex items-center xl:col-span-1 md:col-span-2">
                  <CardHeader className="pt-3">
                    <DollarSign className="sm: w-7 w-h-7 md:w-10 h-10"/>
                  </CardHeader>
                  <CardContent className="pt-3 row-span-2">
                    <CardTitle className="text-lg font-semibold">Vendas</CardTitle>
                    <CardDescription className="text-xl font-bold">R$: 50,000</CardDescription>
                  </CardContent>
              </Card>
            </div>
          </div>
        </Theme>
      </div>
    </ThemeProvider>
  )
}

export default Page;