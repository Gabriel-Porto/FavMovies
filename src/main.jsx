import React from "react"
import ReactDOM from "react-dom/client"

import GlobalStyles from "./styles/global"
import { ThemeProvider } from "styled-components"
import theme from "./styles/theme"

//Pages Imports
import { SignUp } from "./pages/SignUp"
import { SignIn } from "./pages/SignIn"
import { Home } from "./pages/Home"
import { Profile } from "./pages/Profile"
import { MovieSearch } from "./pages/MovieSearch"


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MovieSearch />
    </ThemeProvider>
  </React.StrictMode>
)
