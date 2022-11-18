import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { Maintheme as theme } from "./style/MainTheme";
import MainPage from "./pages/MainPage";
import { Container } from "@mui/material";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container>
          <MainPage />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
