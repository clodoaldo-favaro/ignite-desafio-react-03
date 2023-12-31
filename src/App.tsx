import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { UserProfileProvider } from './contexts/UserProfileContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <UserProfileProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </UserProfileProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
