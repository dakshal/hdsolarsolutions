import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CreditCard, Clock, DollarSign, Lightbulb, Home, Building2, Landmark, Battery } from 'lucide-react';
import { serviceOptions } from '../data/serviceOptions';
import { marketSegments } from '../data/marketSegments';


const ServicesPage: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 to-secondary-800 text-white pt-32 pb-16">
        <div className="container-custom">
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
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Financing Options</h2>
            <p className="text-lg text-gray-600">
              We offer flexible financing options to make solar accessible for everyone. Choose the option that best fits your financial goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceOptions.map((option) => (
              <motion.div 
                key={option.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="card hover:shadow-lg transition-all border-t-4 border-primary-500"
              >
                <h3 className="text-2xl font-semibold mb-4">{option.name}</h3>
                <p className="text-gray-600 mb-6">{option.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <CreditCard className="w-5 h-5 text-primary-600 mr-2" />
                    <span className="font-medium">Financial Benefits</span>
                  </div>
                  <ul className="pl-7 space-y-2 text-gray-600">
                    {option.benefits.slice(0, 3).map((benefit, index) => (
                      <li key={index} className="list-disc">{benefit}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <Clock className="w-5 h-5 text-primary-600 mr-2" />
                    <span className="font-medium">Timeline</span>
                  </div>
                  <p className="text-gray-600">
                    Typical installation completes in {option.process.length} steps over {option.id === 'buyout' ? '4-8' : '3-6'} weeks.
                  </p>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <DollarSign className="w-5 h-5 text-primary-600 mr-2" />
                    <span className="font-medium">Bill Reduction</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-3 mr-3">
                      <div 
                        className="bg-primary-500 h-3 rounded-full" 
                        style={{ width: `${option.reduction.max}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium whitespace-nowrap">
                      {option.reduction.min}-{option.reduction.max}%
                    </span>
                  </div>
                </div>
                
                <Link to={`/services/options/${option.id}`} className="btn btn-primary w-full text-center">
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Segments */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Solar Solutions By Market</h2>
            <p className="text-lg text-gray-600">
              We offer tailored solar solutions for different market segments, each with unique requirements and benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {marketSegments.map((option) => (
              <motion.div 
                key={option.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="card hover:shadow-lg transition-all border-t-4 border-primary-500"
              >
                <h3 className="text-2xl font-semibold mb-4">A solution for {option.name}</h3>
                <p className="text-gray-600 mb-6">{option.summary}</p>
                
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <CreditCard className="w-5 h-5 text-primary-600 mr-2" />
                    <span className="font-medium">Features</span>
                  </div>
                  <ul className="pl-7 space-y-2 text-gray-600">
                    {option.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="list-disc">{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <Clock className="w-5 h-5 text-primary-600 mr-2" />
                    <span className="font-medium">Key Offerings</span>
                  </div>
                  <div className="space-y-6">
                      {option.details.keyOfferings.map((offering, index) => (
                          <div key={index} className="flex items-start">
                              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                                  <Lightbulb className="w-5 h-5"/>
                              </div>
                              <div>
                                  <h4 className="font-small font-semibold">{offering.name}</h4>
                                  <p className="text-gray-600">{offering.description}</p>
                              </div>
                          </div>
                      ))}
                  </div>
                </div>
                <Link to={`/services/markets/${option.id}`} className="btn btn-primary w-full text-center">
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complementary Services</h2>
            <p className="text-lg text-gray-600">
              Enhance your solar investment with these additional services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card flex items-start p-6"
            >
              <div className="bg-primary-50 p-3 rounded-full mr-4">
                <Battery className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Battery Backup Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Ensure energy security with battery backup systems that can power your home during outages and charge your electric vehicle.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Available in various capacities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Seamless integration with solar systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Smart energy management systems</span>
                  </li>
                </ul>
                <Link to="/contact" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                  Learn More <span className="ml-1">→</span>
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card flex items-start p-6"
            >
              <div className="bg-primary-50 p-3 rounded-full mr-4">
                <DollarSign className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Tax Credit Services</h3>
                <p className="text-gray-600 mb-4">
                  Maximize your financial benefits with our tax credit services, helping you navigate federal and state incentives.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Federal ITC guidance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>State incentive program assistance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Tax liability reduction strategies</span>
                  </li>
                </ul>
                <Link to="/tax-credits" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                  Learn More <span className="ml-1">→</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-primary-700 to-secondary-700 text-white">
        <div className="container-custom text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Solar Journey?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us today for a free consultation and custom quote tailored to your specific needs.
            </p>
            <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-gray-100">
              Get a Free Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;