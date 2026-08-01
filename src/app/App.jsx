import { LanguageProvider } from './providers/LanguageContext'
import { Home } from "../pages/home"

const App = () => {
  return (
    <LanguageProvider>
      <Home />
    </LanguageProvider>
  )
}

export default App