import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { serviceOptions, ProcessStep } from '../data/serviceOptions';
import { motion } from 'framer-motion';
import { FileText, Clock, CheckCircle, AlertCircle, XCircle, DollarSign, Calendar, Shield } from 'lucide-react';

const ServiceDetailPage: React.FC = () => {
  const { serviceType } = useParams<{ serviceType: string }>();
  const service = serviceOptions.find(s => s.id === serviceType);

  if (!service) {
    return (
      <div className="pt-32 pb-16">
        <div className="container-custom">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-2xl mx-auto text-center">
            <h1 className="text-2xl font-semibold text-red-700 mb-4">Service Not Found</h1>
            <p className="text-gray-600 mb-6">
              The service you're looking for doesn't exist or may have been moved.
            </p>
            <Link to="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const totalWeeks = service.process.reduce((total, step) => {
    if (step.leadTime) {
      const weeks = step.leadTime.includes('week') ? 
        parseInt(step.leadTime.split('-')[1] || step.leadTime.split(' ')[0]) : 0;
      return total + weeks;
    }
    return total;
  }, 0);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 to-secondary-800 text-white pt-32 pb-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {service.name}
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              {service.description}
            </p>
            <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-gray-100">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <DollarSign className="w-6 h-6 text-primary-600 mr-2" />
                <h3 className="text-lg font-semibold">Upfront Cost</h3>
              </div>
              <p className="text-2xl font-bold text-primary-700">{service.upfrontCost}</p>
            </div>

            {service.paybackPeriod && (
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <Calendar className="w-6 h-6 text-primary-600 mr-2" />
                  <h3 className="text-lg font-semibold">Payback Period</h3>
                </div>
                <p className="text-2xl font-bold text-primary-700">{service.paybackPeriod}</p>
              </div>
            )}

            {service.termLength && (
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <Calendar className="w-6 h-6 text-primary-600 mr-2" />
                  <h3 className="text-lg font-semibold">Term Length</h3>
                </div>
                <p className="text-2xl font-bold text-primary-700">{service.termLength}</p>
              </div>
            )}

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <Shield className="w-6 h-6 text-primary-600 mr-2" />
                <h3 className="text-lg font-semibold">Tax Benefits</h3>
              </div>
              <div className="flex items-center">
                {service.taxBenefits ? (
                  <>
                    <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                    <span className="text-green-700 font-medium">Included</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-6 h-6 text-red-500 mr-2" />
                    <span className="text-red-700 font-medium">Not Available</span>
                  </>
                )}
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <Shield className="w-6 h-6 text-primary-600 mr-2" />
                <h3 className="text-lg font-semibold">O&M Included</h3>
              </div>
              <div className="flex items-center">
                {service.maintenanceIncluded ? (
                  <>
                    <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                    <span className="text-green-700 font-medium">Yes</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-6 h-6 text-red-500 mr-2" />
                    <span className="text-red-700 font-medium">Separate</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Benefits</h2>
            <p className="text-lg text-gray-600">
              Here's why our {service.name.toLowerCase()} solution might be the right choice for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="card flex"
              >
                <div className="mr-4 text-primary-500">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <p className="text-gray-700">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bill Reduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold mb-4">Electricity Bill Reduction</h2>
            <p className="text-lg text-gray-600">
              With our {service.name.toLowerCase()} option, you can expect to see a significant reduction in your monthly electricity costs.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto">
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="font-medium">Expected Bill Reduction:</span>
                <span className="font-bold text-primary-700">
                  {service.reduction.min === service.reduction.max 
                    ? `${service.reduction.min}%` 
                    : `${service.reduction.min}% - ${service.reduction.max}%`}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div 
                  className="bg-primary-600 h-4 rounded-full relative"
                  style={{ width: `${service.reduction.max}%` }}
                >
                  {service.reduction.min !== service.reduction.max && (
                    <div className="absolute left-0 top-0 bottom-0 border-r-2 border-white border-dashed"
                      style={{ left: `${service.reduction.min}%` }}></div>
                  )}
                </div>
              </div>
              <div className="flex justify-between mt-1 text-sm text-gray-500">
                <span>0%</span>
                <span>25%</span>
                <span>50%</span>
                <span>75%</span>
                <span>100%</span>
              </div>
            </div>

            <div className="bg-primary-50 p-4 rounded-lg border border-primary-100">
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5" />
                <p className="text-sm text-gray-700">
                  Actual savings may vary based on your energy consumption, system size, local utility rates, and available sunshine in your area. Our team will provide a personalized estimate during your consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold mb-4">The Installation Process</h2>
            <p className="text-lg text-gray-600">
              Here's what to expect when you choose our {service.name.toLowerCase()} option. Total installation time: 14-18 weeks.
            </p>
          </div>

          <div className="relative">
            {/* Timeline connector */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform -translate-x-1/2"></div>
            
            {service.process.map((step: ProcessStep, index: number) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={`md:w-1/2 flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} relative`}>
                  <div className="bg-white rounded-lg shadow-md p-6 max-w-md relative z-10">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-3">{step.description}</p>
                    {step.leadTime && (
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>Lead time: {step.leadTime}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="md:w-8 md:h-8 bg-primary-500 rounded-full z-10 my-4 md:my-0 flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                
                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Requirements */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold mb-4">Required Documentation</h2>
            <p className="text-lg text-gray-600">
              To get started with our {service.name.toLowerCase()} option, you'll need to provide the following documents:
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto">
            <ul className="space-y-4">
              {service.documentation.map((doc, index) => (
                <li key={index} className="flex items-start">
                  <FileText className="w-5 h-5 text-primary-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">{doc}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 bg-accent-50 rounded-lg border border-accent-100">
              <p className="text-sm text-gray-700">
                Don't worry if you don't have all these documents ready. Our team will guide you through the process and help you gather what's needed at each stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Contract */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold mb-4">Sample Contract</h2>
            <p className="text-lg text-gray-600">
              Below is a simplified overview of what a typical {service.name.toLowerCase()} contract includes. Our actual contracts are customized to your specific situation.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8 max-w-3xl mx-auto">
            <div className="mb-6 text-center">
              <h3 className="text-xl font-bold mb-1">SAMPLE {service.name.toUpperCase()} AGREEMENT</h3>
              <p className="text-sm text-gray-500">For illustrative purposes only</p>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">1. Parties</h4>
                <p className="text-sm text-gray-600">
                  This Agreement is entered into between H&D Solar Solutions ("Provider") and the property owner ("Customer").
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">2. System Details</h4>
                <p className="text-sm text-gray-600">
                  Provider agrees to {
                    service.id === 'buyout' 
                      ? 'sell and install' 
                      : service.id === 'lease'
                        ? 'lease and install'
                        : service.id === 'ppa'
                          ? 'install and maintain'
                          : 'provide'
                  } a solar PV system ("System") at Customer's property.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">3. Term</h4>
                <p className="text-sm text-gray-600">
                  {service.id === 'buyout' 
                    ? 'The sales agreement is effective upon signing and payment terms are outlined in Section 4.'
                    : service.termLength 
                      ? `The ${service.id} term is ${service.termLength} from the date of system activation.`
                      : 'The agreement term will be specified based on the selected service option.'
                  }
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">4. Payment</h4>
                <p className="text-sm text-gray-600">
                  {service.id === 'buyout' 
                    ? 'Customer agrees to pay the total system price according to the payment schedule.'
                    : service.id === 'lease'
                      ? 'Customer agrees to make monthly lease payments as specified in Schedule A.'
                      : service.id === 'ppa'
                        ? 'Customer agrees to purchase all electricity generated by the System at rates specified in Schedule A with annual escalation up to 2%.'
                        : 'Payment terms will be specified based on the selected service option.'
                  }
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">5. System Ownership</h4>
                <p className="text-sm text-gray-600">
                  {service.id === 'buyout' 
                    ? 'Customer shall own the System upon final payment.'
                    : 'Provider shall retain ownership of the System for the duration of the Agreement.'
                  }
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">6. Maintenance & Warranties</h4>
                <p className="text-sm text-gray-600">
                  {service.maintenanceIncluded
                    ? 'Provider shall maintain the System and ensure its proper functioning throughout the term of the Agreement.'
                    : 'System includes manufacturer warranties as detailed in Schedule B. Extended service plans available separately.'
                  }
                </p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-primary-50 rounded-lg border border-primary-100">
              <p className="text-sm text-gray-700">
                This is a simplified sample only. Actual contracts are comprehensive legal documents that our team will review with you in detail before signing.
              </p>
            </div>

            <div className="mt-6 text-center">
              <Link to="/contact" className="btn btn-primary">
                Request Sample Contract
              </Link>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us today for a free consultation and detailed quote for your {service.name.toLowerCase()} solar solution.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-gray-100">
                Request a Quote
              </Link>
              <Link to="/services" className="btn bg-transparent border border-white hover:bg-white/10">
                Explore Other Options
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailPage;