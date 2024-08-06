
import React from 'react';
import './tailwind.css'; 
import Navbar from './components/NavBar';
import { DefaultGallery } from './components/HomePage';
import ReservationForm from './components/ReservationForm';
import Footer from './components/Footer';


const App: React.FC = () => {
  const handleReservationSubmit = (formData: any) => {
    
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="App">
      <Navbar />
      <DefaultGallery />
      <ReservationForm onSubmit={handleReservationSubmit} />
      <br></br>
      <Footer/>
      
    </div>
  );
};

export default App;
