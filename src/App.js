import './App.css';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Calculator from './components/calculator/Calculator';
import LoanInfo from './components/loan-Info/LoanInfo';
import LoanData from './components/loan-data/LoanData';
import LoanDocx from './components/loan-docx/LoanDocx';
import ApplyProcess from './components/apply-process/ApplyProcess';
import VerificationProcess from './components/verification-process/VerificationProcess';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
     <Navbar />
     <Banner />
     <Calculator />
     <LoanInfo />
     <LoanData />
     <LoanDocx />
     <ApplyProcess />
     <VerificationProcess />
     <Footer />
    </div>
  );
}

export default App;
