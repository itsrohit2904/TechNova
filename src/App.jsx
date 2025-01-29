import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AnimatePresence } from 'framer-motion';

// Layout Components
import Header from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import PageTransition from './components/layout/PageTransition';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    // <div>
    //   <h1 className='text-sky-700'>dinesh bharati</h1>
    // </div>
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-200">
          <Header />
          
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <Routes>
                <Route
                  path="/"
                  element={
                    <PageTransition>
                      <Home />
                    </PageTransition>
                  }
                />
                <Route
                  path="/services"
                  element={
                    <PageTransition>
                      <Services />
                    </PageTransition>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <PageTransition>
                      <About />
                    </PageTransition>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <PageTransition>
                      <Contact />
                    </PageTransition>
                  }
                />
                {/* 404 Route */}
                <Route
                  path="*"
                  element={
                    <PageTransition>
                      <div className="container mx-auto px-4 py-16 text-center">
                        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                          Page Not Found
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 mb-8">
                          The page you're looking for doesn't exist or has been moved.
                        </p>
                        <button
                          onClick={() => window.history.back()}
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          Go Back
                        </button>
                      </div>
                    </PageTransition>
                  }
                />
              </Routes>
            </AnimatePresence>
          </main>

          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;