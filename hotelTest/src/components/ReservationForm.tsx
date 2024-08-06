import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ReservationFormProps {
  onSubmit: (formData: any) => void; // Replace any with your desired form data type
}

const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  const [moveInDate, setMoveInDate] = useState<Date | undefined>(undefined);
  const [moveOutDate, setMoveOutDate] = useState<Date | undefined>(undefined);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries()); // Convert FormData to object

    // Add the move-in and move-out dates to the data object
    if (moveInDate) data.moveInDate = moveInDate.toISOString();
    if (moveOutDate) data.moveOutDate = moveOutDate.toISOString();

    try {
      const response = await fetch('https://skill-test.similater.website/api/v1/booking/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      toast.success('Booking successful!');
      onSubmit(result);
    } catch (error) {
      toast.error('Booking failed. Please try again.');
    }
  };

  return (
    <div className="container mx-auto mt-8 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
      <ToastContainer />
      <div className="md:w-2/3 p-4 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Lorem ipsum dolor</h2>
        <div className="flex space-x-4 mb-4 text-gray-600">
          <div className="flex items-center space-x-2">
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7m-7-7v10"></path>
            </svg>
            <span>2 Bedrooms</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v12m6-6H6"></path>
            </svg>
            <span>2 Bathrooms</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-12 0v1z"></path>
            </svg>
            <span>5 Guests</span>
          </div>
        </div>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at rutrum sapien, a volutpat massa.
          Maecenas congue luctus dui quis rhoncus. Praesent feugiat nulla quis libero tristique tempor.
          Vivamus efficitur rhoncus neque id lacinia. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </p>
        <h3 className="text-xl font-bold mb-2 text-gray-800">Designed for Quality</h3>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>In quis urna pretium, pretium mi sit amet, pellentesque enim.</li>
          <li>Sed sagittis nulla non congue lacinia.</li>
          <li>Etiam ac velit ac elit consequat pulvinar.</li>
          <li>Vivamus non sapien id purus ultricies cursus eu eu felis.</li>
        </ul>
      </div>
      <div className="md:w-1/3 p-4 bg-white rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Make a reservation</h2>
          <div className="grid grid-cols-2 gap-4">
            <DatePicker
              selected={moveInDate}
              onChange={(date) => setMoveInDate(date as Date | undefined)}
              selectsStart
              startDate={moveInDate}
              endDate={moveOutDate}
              placeholderText="Move-in"
              className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
            />
            <DatePicker
              selected={moveOutDate}
              onChange={(date) => setMoveOutDate(date as Date | undefined)}
              selectsEnd
              startDate={moveInDate}
              endDate={moveOutDate}
              placeholderText="Move-out"
              className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
            />
            <input type="text" name="first-name" placeholder="First Name" className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <input type="text" name="last-name" placeholder="Last Name" className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <input type="email" name="email" placeholder="Email Address" className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <input type="tel" name="phone" placeholder="Mobile Number" className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div className="text-center mt-6">
            <button type="submit" className="bg-black text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300">Book Now</button>
          </div>
        </form>
        <div className="spacer" style={{ height: '100px' }} /> 
      </div>
      
    </div>
  );
};

export default ReservationForm;
