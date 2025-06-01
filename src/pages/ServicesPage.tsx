// Note: This immersive contains two files.
// 1. data/serviceOptions.ts (scroll down)
// 2. ServicesPage.tsx (the main component)

// =================================================================================
// File: ServicesPage.tsx
// Description: The main React component for the "Services" page.
// It now imports all data from the separate data file.
// =================================================================================

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Clock, DollarSign, Lightbulb, Home, Building2, Landmark, Battery, ArrowLeft } from 'lucide-react';
import { serviceOptions } from '../data/serviceOptions';
import { marketSegments } from '../data/marketSegments';

// This is the detail page component
const ServiceDetailPage = ({ serviceId, onBackClick }) => {
  const service = marketSegments.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="text-center py-20">
        <p>Service not found.</p>
        <button onClick={onBackClick} className="mt-4 text-blue-600 hover:underline">Back to Services</button>
      </div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Detail Hero Section */}
      <section className="relative bg-gray-800 text-white pt-32 pb-16 h-80 flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={service.details.imageUrl} alt={service.details.title} className="w-full h-full object-cover opacity-40"/>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
           <h1 className="text-4xl md:text-5xl font-bold">{service.details.title}</h1>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
            <button onClick={onBackClick} className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 font-medium">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All Services
            </button>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-span-2">
                    <h2 className="text-3xl font-bold mb-4">A Solution for {service.name} Needs</h2>
                    <p className="text-lg text-gray-600 mb-8">{service.details.description}</p>
                    <h3 className="text-2xl font-bold mb-6">Key Offerings</h3>
                    <div className="space-y-6">
                        {service.details.keyOfferings.map((offering, index) => (
                            <div key={index} className="flex items-start">
                                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                                    <Lightbulb className="w-5 h-5"/>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold">{offering.name}</h4>
                                    <p className="text-gray-600">{offering.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 h-fit">
                    <h3 className="text-xl font-bold mb-4">Service Highlights</h3>
                    <ul className="space-y-3">
                        {service.features.map((feature, index) => (
                             <li key={index} className="flex items-start">
                                <span className="text-blue-500 mr-2 mt-1">&#10003;</span>
                                <span>{feature}</span>
                             </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
      </section>
    </motion.div>
  );
};


const ServicesPage: React.FC = () => {
  const [activeService, setActiveService] = useState(null);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 }
    }
  };

  const handleLearnMoreClick = (e, serviceId) => {
    e.preventDefault();
    setActiveService(serviceId);
    window.scrollTo(0, 0); // Scroll to top on page change
  };
  
  const handleBackClick = () => {
    setActiveService(null);
    window.scrollTo(0, 0);
  };

  // If a service is selected, show the detail page
  if (activeService) {
    return <ServiceDetailPage serviceId={activeService} onBackClick={handleBackClick} />;
  }

  // Otherwise, show the main services overview page
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-indigo-800 text-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Solar Energy Solutions
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Explore our comprehensive range of solar solutions designed to meet your specific needs, whether you're a homeowner, business owner, or government entity.
            </p>
          </div>
        </div>
      </section>

      {/* Financing Options */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Financing Options</h2>
            <p className="text-lg text-gray-600">
              We offer flexible financing options to make solar accessible for everyone. Choose the option that best fits your financial goals.
            </p>
          </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {serviceOptions.map((option, index) => (
                  <motion.div 
                    key={option.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={fadeIn}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-md p-6 flex flex-col border-t-4 border-blue-500 hover:shadow-xl transition-shadow"
                  >
                    <h3 className="text-2xl font-semibold mb-4">{option.name}</h3>
                    <p className="text-gray-600 mb-6 flex-grow">{option.description}</p>
                    {/* Add more details from serviceOptions if needed */}
                    <a href="#" className="mt-4 block text-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded">
                        Learn More
                    </a>
                  </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Market Segments */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Solar Solutions By Market</h2>
            <p className="text-lg text-gray-600">
              We offer tailored solar solutions for different market segments, each with unique requirements and benefits.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {marketSegments.map((segment) => {
                const Icon = segment.icon;
                return (
                    <motion.div
                        key={segment.id}
                        variants={fadeIn}
                        className="bg-white rounded-lg shadow-md p-8 flex flex-col text-center hover:shadow-xl transition-shadow"
                    >
                        <div className="flex-grow">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 text-blue-600 rounded-full mb-6">
                                <Icon className="w-12 h-12" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">{segment.name}</h3>
                            <p className="text-gray-600 mb-6">{segment.summary}</p>
                        </div>
                        <a href="#" onClick={(e) => handleLearnMoreClick(e, segment.id)} className="mt-auto block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                            Learn More
                        </a>
                    </motion.div>
                )
            })}
          </motion.div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complementary Services</h2>
            <p className="text-lg text-gray-600">
              Enhance your solar investment with these additional services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
             <div className="bg-gray-50 rounded-lg p-6 flex items-start">
               <div className="bg-blue-100 p-3 rounded-full mr-4">
                 <Battery className="w-6 h-6 text-blue-600" />
               </div>
               <div>
                 <h3 className="text-xl font-semibold mb-2">Battery Backup Solutions</h3>
                 <p className="text-gray-600">
                   Ensure energy security with battery backup systems that can power your home during outages.
                 </p>
               </div>
             </div>
             <div className="bg-gray-50 rounded-lg p-6 flex items-start">
               <div className="bg-blue-100 p-3 rounded-full mr-4">
                 <DollarSign className="w-6 h-6 text-blue-600" />
               </div>
               <div>
                 <h3 className="text-xl font-semibold mb-2">Tax Credit Services</h3>
                 <p className="text-gray-600">
                   Maximize your financial benefits with our tax credit services, helping you navigate federal and state incentives.
                 </p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-700 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Solar Journey?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Contact us today for a free consultation and custom quote tailored to your specific needs.
            </p>
            <a href="#" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 text-lg transition-colors">
              Get a Free Quote
            </a>
        </div>
      </section>
    </>
  );
};


function App() {
  React.useEffect(() => {
    const tailwind = document.createElement('script');
    tailwind.src = 'https://cdn.tailwindcss.com';
    document.head.appendChild(tailwind);
  }, []);
  
  return (
    <div className="bg-gray-100">
      <ServicesPage />
    </div>
  )
}


export default App;
