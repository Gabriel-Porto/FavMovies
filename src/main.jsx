import React from "react"
import ReactDOM from "react-dom/client"

import GlobalStyles from "./styles/global"
import { ThemeProvider } from "styled-components"
import theme from "./styles/theme"

import { SignIn } from "./pages/SignIn"
import { Header } from "./components/Header"


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <SignIn />
    </ThemeProvider>
  </React.StrictMode>
)
