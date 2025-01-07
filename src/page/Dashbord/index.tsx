import { GraficosDashbord } from "@/components/Graficos";
import { Theme } from "@/components/Theme";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Ear, Zap } from "lucide-react";

export const Dashboard = () => {
  return (
    <div>
        {/*<ThemeToggle/>*/}
        <Theme>
          <div className="container p-5">
            <p className="text-xs mb-2 text-primary font-semibold">Dashboard</p>
            <h1 className="mb-5 text-slate-900 font-semibold">Dashboard</h1>
            <div className="Dashboard-card grid md:grid-cols-2 gap-5">
              <Card className="flex items-center">
                  <CardHeader className="flex justify-center items-center bg-green-50 w-[36px] h-[36px] rounded-[12px] ml-10 p-0">
                    <Ear className="text-primary"/>
                  </CardHeader>
                  <CardContent className="pt-3">
                    <CardTitle className="text-lg font-semibold">Aparelhos Auditivos</CardTitle>
                    <CardDescription className="text-slate-500 text-2xl font-bold">200</CardDescription>
                  </CardContent>
              </Card>
              <Card className="flex items-center">
                  <CardHeader className="flex justify-center items-center bg-green-50 w-[36px] h-[36px] rounded-[12px] ml-10 p-0">
                    <Zap className="text-primary"/>
                  </CardHeader>
                  <CardContent className="pt-3">
                    <CardTitle className="text-lg font-semibold">Pilhas</CardTitle>
                    <CardDescription className="text-slate-500 text-2xl font-bold">20</CardDescription>
                  </CardContent>
              </Card>
              <Card className="flex items-center xl:col-span-1 md:col-span-2">
                  <CardHeader className="flex justify-center items-center bg-green-50 w-[36px] h-[36px] rounded-[12px] ml-10 p-0">
                    <DollarSign className="text-primary"/>
                  </CardHeader>
                  <CardContent className="pt-3 row-span-2">
                    <CardTitle className="text-lg font-semibold">Vendas totais</CardTitle>
                    <CardDescription className="text-slate-500 text-2xl font-bold">R$: 50,000</CardDescription>
                  </CardContent>
              </Card>
              <Card className="flex items-center xl:col-span-1 md:col-span-2">
                  <CardHeader className="flex justify-center items-center bg-green-50 w-[36px] h-[36px] rounded-[12px] ml-10 p-0">
                    <DollarSign className="text-primary"/>
                  </CardHeader>
                  <CardContent className="pt-3 row-span-2">
                    <CardTitle className="text-lg font-semibold">Receita hoje</CardTitle>
                    <CardDescription className="text-slate-500 text-2xl font-bold">R$: 5000</CardDescription>
                  </CardContent>
              </Card>
              <GraficosDashbord/>
            </div>
          </div>
        </Theme>
      </div>
  )
    
}