import { ThemeProvider } from "@/components/theme-provider"
import { Router } from "./Routes/routes";

const Page = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router/>
    </ThemeProvider>
  )
}

export default Page;