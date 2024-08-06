import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="flex justify-between items-center p-4 bg-gray-100 border-t border-gray-300">
            <div className="flex items-center">
                <img src="similater long logo.png" alt="Company Logo" className="h-10 mr-2" /><br></br>
                <p className="text-gray-700">© 2024 Similater (Pvt) Ltd. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-4">
                <img src="/path/to/amex.png" alt="AMEX" className="h-8" />
                <img src="/path/to/apple-pay.png" alt="Apple Pay" className="h-8" />
                <img src="/path/to/stripe.png" alt="Stripe" className="h-8" />
                <img src="/path/to/google-pay.png" alt="Google Pay" className="h-8" />
                <img src="/path/to/mastercard.png" alt="MasterCard" className="h-8" />
                <img src="/path/to/visa.png" alt="Visa" className="h-8" />
            </div>
            <div className="text-gray-700">
                Neque porro quisquam est qui dolorem ipsum
            </div>
        </footer>
    );
}

export default Footer;

