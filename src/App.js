import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import ProductLayout from './components/ProductLayout';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <SubHeader />
      <ProductLayout />
      <Footer />
    </div>
  );
};

export default App;
