import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInForm from "./pages/SignInForm";
import { AuthContextProvider } from "./components/context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import Header from './pages/Header';
import Footer from './pages/Footer';

export default function App() {
  return (
    <>
      <AuthContextProvider>
          <BrowserRouter>
          <Header />
            <Routes>
              <Route path="/signIn" element={<SignInForm />} />
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <HomePage />
                  </ProtectedRoute>
                }
              />
            </Routes>
            <Footer />
          </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}