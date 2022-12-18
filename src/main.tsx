import { Box, ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Companies from "./pages/companies/index";
import Company from "./pages/companies/[id]";
import Main from "./pages/index";
import Login from "./pages/login";
import Projects from "./pages/projects";
import Project from "./pages/projects/[id]";
import Tasks from "./pages/tasks";
import Universities from "./pages/universities";
import UserPage from "./pages/users/[id]";
import { setupStore } from "./redux/store";
import theme from "./theme";

const store = setupStore();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Navbar />
          <Box padding={4}>
            <Box marginX={"auto"} width="1200px">
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/companies" element={<Companies />} />
                <Route path="/companies/:id" element={<Company />} />
                <Route path="/universities" element={<Universities />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:id" element={<Project />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/users/:id" element={<UserPage />} />
              </Routes>
            </Box>
          </Box>
          <Footer />
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);