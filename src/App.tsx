import { ThemeToggle } from "./components/theme-toggle";
 {/*import { Button } from "./components/ui/button";*/}
import { ThemeProvider } from "@/components/theme-provider"
import { Theme } from "@/components/Theme"


const Page = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <ThemeToggle/>
        <Theme>
          <div>Testando área dinâmica</div>
        </Theme>
      </div>
    </ThemeProvider>
  )
}

export default Page;