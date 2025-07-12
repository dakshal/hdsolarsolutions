import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SolarCalculator from '../components/calculator/SolarCalculator';
import { Calculator, Lightbulb, TrendingUp, Shield } from 'lucide-react';

const CalculatorPage: React.FC = () => {
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
              Solar Cost Calculator
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Get an instant, personalized estimate for your solar installation with our interactive calculator. See detailed cost breakdowns, incentives, and savings projections.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SolarCalculator />
        </div>
      </section>

      {/* How It Works */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold mb-4">How Our Calculator Works</h2>
            <p className="text-lg text-gray-600">
              Our solar calculator uses industry-standard formulas and real-time data to provide accurate estimates based on your specific inputs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="card text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-6">
                <Calculator className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Input Your Details</h3>
              <p className="text-gray-600">
                Enter your location, energy usage, roof type, and preferences to get a customized estimate.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="card text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-6">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-Time Calculation</h3>
              <p className="text-gray-600">
                Our calculator instantly processes your information using current market rates and incentive programs.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.4 }}
              className="card text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-6">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Detailed Results</h3>
              <p className="text-gray-600">
                Get comprehensive cost breakdowns, savings projections, and payback period calculations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold mb-4">What's Included in Your Estimate</h2>
            <p className="text-lg text-gray-600">
              Our calculator provides a comprehensive breakdown of all costs and savings associated with your solar installation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card"
            >
              <h3 className="text-xl font-semibold mb-4">Cost Components</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span><strong>Equipment:</strong> Solar panels, inverters, mounting hardware, and wiring (~$3,500/kW)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span><strong>Labor:</strong> Professional installation and electrical work</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span><strong>Permitting:</strong> Local permits and utility interconnection fees</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span><strong>Design & Engineering:</strong> Site assessment and system design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span><strong>Additional Features:</strong> Battery backup, EV chargers, roof upgrades</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card"
            >
              <h3 className="text-xl font-semibold mb-4">Incentives & Savings</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>Federal Tax Credit:</strong> 30% of total system cost (ITC)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>State Incentives:</strong> Rebates, SRECs, and tax exemptions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>SREC Income:</strong> SREC income generated per MWh/year</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>Annual Savings:</strong> Reduced electricity bills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>Payback Period:</strong> Time to recover your investment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>25-Year Savings:</strong> Total lifetime financial benefit</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Accuracy Notice */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="bg-primary-50 rounded-xl p-8 border border-primary-200 max-w-4xl mx-auto">
            <div className="flex items-start">
              <Shield className="w-8 h-8 text-primary-600 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary-700">About Our Estimates</h3>
                <p className="text-gray-700 mb-4">
                  Our calculator provides estimates based on industry averages, current market rates, and available incentive programs. While we strive for accuracy, actual costs and savings may vary based on:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Specific site conditions and roof characteristics</li>
                  <li>• Local utility rates and net metering policies</li>
                  <li>• Equipment selection and installation complexity</li>
                  <li>• Changes in incentive programs and tax policies</li>
                  <li>• Individual energy usage patterns</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  For the most accurate quote, we recommend scheduling a free consultation with our solar experts who can assess your specific situation.
                </p>
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
            <h2 className="text-3xl font-bold mb-6">Ready for a Detailed Quote?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get a personalized assessment from our solar experts. We'll provide a detailed proposal based on your specific needs and site conditions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-gray-100">
                Schedule Free Consultation
              </Link>
              <Link to="/services" className="btn bg-transparent border border-white hover:bg-white/10">
                Explore Financing Options
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CalculatorPage;