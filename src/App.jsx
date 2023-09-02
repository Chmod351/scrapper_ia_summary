import Navbar from './components/layout/Navbar.jsx';
import Demo from './components/pages/Demo.jsx';
import './App.css';
import Footer from './components/layout/Footer.jsx';
const App = () => {
  return (
    <main className="app">
      <Navbar />
      <Demo />
      <Footer />
    </main>
  );
};
export default App;
