import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CreditCard, Clock, DollarSign, Lightbulb, Home, Building2, Heart, Battery, CheckCircle, XCircle } from 'lucide-react';
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
              Explore our comprehensive range of solar solutions designed to meet your specific needs, whether you're a homeowner, business owner, or non-profit organization.
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
            {serviceOptions.slice(0, 3).map((option) => (
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
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-500">Upfront Cost</div>
                      <div className="font-medium">{option.upfrontCost}</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-500">Bill Reduction</div>
                      <div className="font-medium">
                        {option.reduction.min === option.reduction.max 
                          ? `${option.reduction.min}%` 
                          : `${option.reduction.min}-${option.reduction.max}%`}
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-600 mr-2">Tax Benefits:</span>
                      {option.taxBenefits ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-500" />
                      )}
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-600 mr-2">O&M Included:</span>
                      {option.maintenanceIncluded ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-500" />
                      )}
                    </div>
                  </div>

                  {option.paybackPeriod && (
                    <div className="bg-primary-50 p-3 rounded-lg mb-4">
                      <div className="text-sm text-gray-600">Payback Period: <span className="font-medium">{option.paybackPeriod}</span></div>
                    </div>
                  )}

                  {option.termLength && (
                    <div className="bg-accent-50 p-3 rounded-lg mb-4">
                      <div className="text-sm text-gray-600">Term Length: <span className="font-medium">{option.termLength}</span></div>
                    </div>
                  )}
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <CreditCard className="w-5 h-5 text-primary-600 mr-2" />
                    <span className="font-medium">Key Benefits</span>
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
                    Total installation time: 14-18 weeks with {option.process.length} key steps.
                  </p>
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
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Solar Solutions By Market</h2>
            <p className="text-lg text-gray-600">
              We offer tailored solar solutions for different market segments, each with unique requirements and system size ranges.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {marketSegments.map((segment) => (
              <motion.div 
                key={segment.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="card hover:shadow-lg transition-all border-t-4 border-primary-500"
              >
                <div className="flex items-center mb-4">
                  <segment.icon className="w-8 h-8 text-primary-600 mr-3" />
                  <h3 className="text-2xl font-semibold">{segment.name}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{segment.summary}</p>
                
                <div className="mb-6">
                  <div className="bg-primary-50 p-4 rounded-lg border border-primary-100 mb-4">
                    <div className="text-center">
                      <div className="text-sm text-gray-600">System Size Range</div>
                      <div className="text-lg font-semibold text-primary-700">
                        {segment.systemLimits.min} - {segment.systemLimits.max}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <CreditCard className="w-5 h-5 text-primary-600 mr-2" />
                    <span className="font-medium">Features</span>
                  </div>
                  <ul className="pl-7 space-y-2 text-gray-600">
                    {segment.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="list-disc">{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <Lightbulb className="w-5 h-5 text-primary-600 mr-2" />
                    <span className="font-medium">Key Offerings</span>
                  </div>
                  <div className="space-y-2">
                    {segment.details.keyOfferings.slice(0, 2).map((offering, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-4 h-4 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <div>
                          <span className="text-gray-600 text-sm">{offering.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Link to={`/services/markets/${segment.id}`} className="btn btn-primary w-full text-center">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Services</h2>
            <p className="text-lg text-gray-600">
              Enhance your solar investment with these complementary services and partnership opportunities.
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
                  EV charger and backup power solutions that seamlessly integrate with your solar system for maximum energy independence.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>EV car charging solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Backup power during outages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Smart energy management systems</span>
                  </li>
                </ul>
                <Link to="/services/options/battery" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
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
                <h3 className="text-xl font-semibold mb-2">EPC Collaborations</h3>
                <p className="text-gray-600 mb-4">
                  We finance solar purchase, PPA, and solar leasing for existing EPC companies, helping maximize tax benefits and project success.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Solar purchase financing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>PPA and leasing solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Tax credit optimization</span>
                  </li>
                </ul>
                <Link to="/services/options/collaborations" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                  Learn More <span className="ml-1">→</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* System Examples Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">System Examples</h2>
            <p className="text-lg text-gray-600">
              See detailed examples of our solar solutions with real-world system specifications and financial projections.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 text-center">Residential System Example: 10kW System</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-sm text-gray-500">System Size</div>
                <div className="text-xl font-semibold">10kW</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-sm text-gray-500">System Cost</div>
                <div className="text-xl font-semibold">$35,000</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-sm text-gray-500">Annual Generation</div>
                <div className="text-xl font-semibold">12,000 kWh</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-sm text-gray-500">Annual Savings</div>
                <div className="text-xl font-semibold">$2,500</div>
              </div>
            </div>

            <h4 className="text-xl font-semibold mb-6">Financing Options for 10kW System:</h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h5 className="text-lg font-semibold mb-4 text-primary-600">Purchase (Buy Out)</h5>
                <ul className="space-y-2 text-sm">
                  <li><strong>System Cost:</strong> $35,000</li>
                  <li><strong>Solar ITC:</strong> $10,500</li>
                  <li><strong>Net Investment:</strong> $24,500</li>
                  <li><strong>Annual Saving:</strong> $2,500</li>
                  <li><strong>O&M Cost:</strong> Self maintained</li>
                  <li><strong>Payback Period:</strong> Up to 10 years</li>
                </ul>
                <Link to="/services/options/buyout" className="btn btn-primary w-full mt-4">
                  View Details
                </Link>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h5 className="text-lg font-semibold mb-4 text-primary-600">Leasing</h5>
                <ul className="space-y-2 text-sm">
                  <li><strong>System Cost:</strong> $0</li>
                  <li><strong>Annual Saving:</strong> 25% discount ($600/year)</li>
                  <li><strong>Total Savings:</strong> $15,000 (system life)</li>
                  <li><strong>O&M Cost:</strong> $0 (included)</li>
                  <li><strong>Term:</strong> upto 25 years</li>
                </ul>
                <Link to="/services/options/lease" className="btn btn-primary w-full mt-4">
                  View Details
                </Link>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h5 className="text-lg font-semibold mb-4 text-primary-600">PPA</h5>
                <ul className="space-y-2 text-sm">
                  <li><strong>System Cost:</strong> $0</li>
                  <li><strong>Annual Saving:</strong> 25% discount ($600/year)</li>
                  <li><strong>Total Savings:</strong> $15,000 (system life)</li>
                  <li><strong>O&M Cost:</strong> $0 (included)</li>
                  <li><strong>Term:</strong> upto 25 years</li>
                </ul>
                <Link to="/services/options/ppa" className="btn btn-primary w-full mt-4">
                  View Details
                </Link>
              </div>
            </div>
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
              Contact us today for a free consultation and custom quote tailored to your specific needs and financing preferences.
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