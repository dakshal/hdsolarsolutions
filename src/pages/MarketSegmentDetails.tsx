import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { marketSegments } from '../data/marketSegments';
import { motion } from 'framer-motion';
import { CheckCircle, Lightbulb, AlertCircle, TrendingUp, ShieldCheck, Calculator, DollarSign, Zap, Clock } from 'lucide-react';

const MarketSegmentDetailPage: React.FC = () => {
  const { segmentId } = useParams<{ segmentId: string }>();
  const segment = marketSegments.find(s => s.id === segmentId);

  if (!segment) {
    return (
      <div className="pt-32 pb-16">
        <div className="container-custom">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-2xl mx-auto text-center">
            <h1 className="text-2xl font-semibold text-red-700 mb-4">Market Segment Not Found</h1>
            <p className="text-gray-600 mb-6">
              The market segment you're looking for doesn't exist or may have been moved.
            </p>
            <Link to="/services" className="btn btn-primary">
              Explore Our Solutions
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

  // System examples based on segment
  const getSystemExample = () => {
    switch (segment.id) {
      case 'residential':
        return {
          size: '10kW',
          cost: 35000,
          annualGeneration: 12000,
          annualSavings: 2500,
          federalITC: 10500,
          netCost: 24500,
          paybackPeriod: '6-8 years',
          description: 'Perfect for a typical family home with moderate to high electricity usage.'
        };
      case 'commercial':
        return {
          size: '100kW',
          cost: 350000,
          annualGeneration: 120000,
          annualSavings: 18000,
          federalITC: 105000,
          netCost: 245000,
          paybackPeriod: '4-6 years',
          description: 'Ideal for medium-sized businesses, retail stores, or small manufacturing facilities.'
        };
      case 'nonprofit':
        return {
          size: '350kW',
          cost: 1225000,
          annualGeneration: 420000,
          annualSavings: 63000,
          federalITC: 367500,
          netCost: 857500,
          paybackPeriod: '5-8 years',
          description: 'Suitable for large non-profit organizations, hospitals, schools, or community centers.'
        };
      default:
        return null;
    }
  };

  const systemExample = getSystemExample();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 to-secondary-800 text-white pt-32 pb-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Solar Solutions for the {segment.name} Sector
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              {segment.summary}
            </p>
            <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-gray-100">
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Features & Benefits</h2>
            <p className="text-lg text-gray-600">
              Our solutions for the {segment.name.toLowerCase()} market are designed with your specific needs in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {segment.features.map((feature, index) => (
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
                  <TrendingUp className="w-6 h-6" />
                </div>
                <p className="text-gray-700">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* System Example Section */}
      {systemExample && (
        <section className="section bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl font-bold mb-4">{segment.name} System Example</h2>
              <p className="text-lg text-gray-600">
                Here's a detailed cost breakdown for a typical {segment.name.toLowerCase()} solar installation.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-2">{systemExample.size} Solar System</h3>
                <p className="text-gray-600">{systemExample.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-500">System Size</div>
                  <div className="text-xl font-semibold">{systemExample.size}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-500">System Cost</div>
                  <div className="text-xl font-semibold">{formatCurrency(systemExample.cost)}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-500">Annual Generation</div>
                  <div className="text-xl font-semibold">{systemExample.annualGeneration.toLocaleString()} kWh</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-500">Annual Savings</div>
                  <div className="text-xl font-semibold">{formatCurrency(systemExample.annualSavings)}</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold mb-4 text-primary-600 flex items-center">
                    <DollarSign className="w-5 h-5 mr-2" />
                    Purchase (Buy Out)
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>System Cost:</strong> {formatCurrency(systemExample.cost)}</li>
                    <li><strong>Federal ITC (30%):</strong> {formatCurrency(systemExample.federalITC)}</li>
                    <li><strong>Net Investment:</strong> {formatCurrency(systemExample.netCost)}</li>
                    <li><strong>Annual Savings:</strong> {formatCurrency(systemExample.annualSavings)}</li>
                    <li><strong>Payback Period:</strong> {systemExample.paybackPeriod}</li>
                    <li><strong>25-Year Savings:</strong> {formatCurrency(systemExample.annualSavings * 25 - systemExample.netCost)}</li>
                  </ul>
                  <Link to="/services/options/buyout" className="btn btn-primary w-full mt-4">
                    View Details
                  </Link>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold mb-4 text-primary-600 flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    Leasing
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Upfront Cost:</strong> $0</li>
                    <li><strong>Monthly Payment:</strong> {formatCurrency(Math.round(systemExample.cost * 0.008))}</li>
                    <li><strong>Annual Savings:</strong> {formatCurrency(Math.round(systemExample.annualSavings * 0.25))}</li>
                    <li><strong>O&M Cost:</strong> $0 (included)</li>
                    <li><strong>Term:</strong> upto 25 years</li>
                    <li><strong>Total Savings:</strong> {formatCurrency(Math.round(systemExample.annualSavings * 0.25 * 25))}</li>
                  </ul>
                  <Link to="/services/options/lease" className="btn btn-primary w-full mt-4">
                    View Details
                  </Link>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold mb-4 text-primary-600 flex items-center">
                    <Zap className="w-5 h-5 mr-2" />
                    PPA
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Upfront Cost:</strong> $0</li>
                    <li><strong>Rate per kWh:</strong> $0.08-0.10</li>
                    <li><strong>Annual Savings:</strong> {formatCurrency(Math.round(systemExample.annualSavings * 0.25))}</li>
                    <li><strong>O&M Cost:</strong> $0 (included)</li>
                    <li><strong>Term:</strong> upto 25 years</li>
                    <li><strong>Total Savings:</strong> {formatCurrency(Math.round(systemExample.annualSavings * 0.25 * 25))}</li>
                  </ul>
                  <Link to="/services/options/ppa" className="btn btn-primary w-full mt-4">
                    View Details
                  </Link>
                </div>
              </div>

              <div className="bg-primary-50 p-4 rounded-lg border border-primary-100">
                <p className="text-sm text-gray-700 text-center">
                  <strong>Note:</strong> These are estimated costs based on average market rates. Actual costs may vary based on site conditions, local incentives, and specific equipment choices. Contact us for a personalized quote.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* In-Depth Look Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src={segment.details.imageUrl} alt={`${segment.name} solar solutions`} className="rounded-lg shadow-xl w-full h-auto object-cover" />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-4">{segment.details.title}</h2>
              <p className="text-lg text-gray-600 mb-8">
                {segment.details.description}
              </p>
              <div className="bg-primary-50 p-4 rounded-lg border border-primary-100">
                <div className="flex items-start">
                  <ShieldCheck className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">
                    We partner with you to deliver a comprehensive energy strategy that aligns with your financial goals and sustainability targets.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Offerings Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mb-12 mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Our Core Offerings for {segment.name}</h2>
            <p className="text-lg text-gray-600">
              From initial analysis to long-term support, we provide end-to-end services to ensure your project's success.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {segment.details.keyOfferings.map((offering, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary-500"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-4 mt-1">
                        <Lightbulb className="w-5 h-5"/>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-1">{offering.name}</h3>
                        <p className="text-gray-600">{offering.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Calculator CTA */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl p-8 text-white text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 text-white mb-6">
                <Calculator className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Get Your Personalized Solar Estimate</h2>
              <p className="text-xl mb-8 opacity-90">
                Use our interactive calculator to get an instant, detailed cost breakdown for your {segment.name.toLowerCase()} solar project.
              </p>
              <Link to="/calculator" className="btn bg-white text-primary-700 hover:bg-gray-100">
                Try Our Solar Calculator
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
            <h2 className="text-3xl font-bold mb-6">Ready to Power Your Future?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how a solar solution can benefit your {segment.name.toLowerCase()} needs. Contact us for a free, no-obligation analysis and quote.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-gray-100">
                Get Your Free Analysis
              </Link>
              <Link to="/services" className="btn bg-transparent border border-white hover:bg-white/10">
                Explore All Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default MarketSegmentDetailPage;