
import React from 'react';
import { Phone, Mail, Copyright, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white mt-12">
      {/* Contact Section */}
      <div className="px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Dr. T. Peddanna Section */}
            <div className="flex items-start space-x-4">
              <div className="p-2">
                <img 
                  src="/lovable-uploads/4ccc7f7c-5669-4a9c-9fea-01fea4519188.png" 
                  alt="Government Degree College Logo"
                  className="h-20 w-20 object-contain rounded-full border-2 border-gray-600"
                />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-white mb-1">Dr. T. Peddanna</h3>
                <p className="text-gray-300 text-sm mb-2">Principal (FAC)</p>
                <div className="space-y-1 text-gray-300 text-sm">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-blue-400" />
                    <span>prl-gdc-mrtd-ce@telangana.gov.in</span>
                  </div>
                </div>
              </div>
            </div>

                        {/* A. Naveen Section */}
            <div className="flex items-start space-x-4">
              <div className="p-2">
                <img 
                 src="/lovable-uploads/naveen.png"
                  alt="Government Degree College Logo"
                  className="h-20 w-20 object-contain rounded-full border-2 border-gray-600"
                />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-white mb-1">A. Naveen</h3>
                <p className="text-gray-300 text-sm mb-2">TSKC</p>
                <div className="space-y-1 text-gray-300 text-sm">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-blue-400" />
                    <span>+91 9494719306</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-blue-400" />
                    <span>algotnaveen@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>

      <hr className="border-gray-700" />

      {/* Copyright Section */}
      <div className="px-4 py-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 text-gray-300">
            <Copyright className="h-4 w-4" />
            <span className="text-sm">
              {new Date().getFullYear()} Government Degree College, Morthad. All rights reserved.
            </span>
          </div>
        </div>
      </div>

      <hr className="border-gray-700" />

      {/* Mission Section */}
      <div className="px-4 py-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 text-gray-300">
            <Heart className="h-4 w-4 text-red-500" />
            <span className="text-sm">
              Empowering students with quality education and creating future professionals
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
