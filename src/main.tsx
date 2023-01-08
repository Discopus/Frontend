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
import StudentRegistration from "./pages/register/student";
import UniversityRegistration from "./pages/register/university";
import SignUp from "./pages/signup";
import Students from "./pages/students";
import Tasks from "./pages/tasks";
import Universities from "./pages/universities";
import University from "./pages/universities/[id]";
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
            <Box marginX={"auto"} width="1200px" minH="50vh">
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route
                  path="/register/student/:code"
                  element={<StudentRegistration />}
                />
                <Route
                  path="/register/university/:code"
                  element={<UniversityRegistration />}
                />
                {/* STUDENT VIEW */}
                <Route path="/student/university" element={<University />} />
                <Route path="/student/projects" element={<Projects />} />
                <Route path="/student/projects/:id" element={<Project />} />
                <Route path="/student/tasks" element={<Tasks />} />
                <Route path="/student/users/:id" element={<UserPage />} />

                <Route path="/companies" element={<Companies />} />
                <Route path="/companies/:id" element={<Company />} />
                <Route path="/universities" element={<Universities />} />
                <Route path="/universities/:id" element={<University />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:id" element={<Project />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/users/:id" element={<UserPage />} />
                <Route path="/students" element={<Students />} />
              </Routes>
            </Box>
          </Box>
          <Footer />
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
