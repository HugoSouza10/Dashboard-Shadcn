import { ThemeToggle } from "./components/theme-toggle";
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
            <div className="Dashboard-card grid md:grid-cols-3 gap-5 md:gap-8">
            <Card className="hover:bg-blue-500 h-fit">
              <CardHeader>
                <CardTitle className="text-2xl">Aparelhos vendidos</CardTitle>
                <CardDescription className="text-xl">200</CardDescription>
              </CardHeader>
              <CardContent>
                 <div className="text-2xl font-bold">SubTotal:</div>
                 <div>R$: 20.000</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-md">Estoque de aparelhos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">100</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-md">Estoque de pilhas</CardTitle>
              </CardHeader>
              <CardContent>
              <div className="text-2xl font-bold">20</div>
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