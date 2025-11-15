"use client";
import { useState } from "react";
import Header from "./components/header/header";
import AboutSection from "./components/about/about";
import Footer from "./components/footer/footer";
import Modal from "./components/common/modal/modal";
import LoginForm from "./components/loginForm/loginForm";
import SignupForm from "./components/signupForm/signupForm";

export default function HomePage() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white text-gray-800">
      <Header
        onLogin={() => setShowLogin(true)}
        onSignup={() => setShowSignup(true)}
      />
      <main className="flex-grow">
        <AboutSection />
      </main>
      <Footer />
      {showLogin && (
        <Modal title="Login" onClose={() => setShowLogin(false)}>
          <LoginForm />
        </Modal>
      )}
      {showSignup && (
        <Modal title="Sign Up" onClose={() => setShowSignup(false)}>
          <SignupForm />
        </Modal>
      )}
    </div>
  );
}
