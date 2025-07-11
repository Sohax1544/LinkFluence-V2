
import Header from './components/Header';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import Process from './components/Process';
import EmailCapture from './components/EmailCapture';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <Hero />
      <ValueProposition />
      <Process />
      <EmailCapture />
      <Footer />
      <AdminPanel />
    </div>
  );
}

export default App;