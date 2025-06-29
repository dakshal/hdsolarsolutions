import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calculator, TrendingUp, Landmark, FileText, DollarSign, PiggyBank, Building, Users, AlertTriangle, Target } from 'lucide-react';

const TaxCreditsPage: React.FC = () => {
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
              Solar Tax Credits & Investment Opportunities
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Maximize your solar investment with valuable tax credits and turn your tax liability into a powerful wealth-building opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* Tax Credit Overview */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold mb-4">Federal Investment Tax Credit (ITC)</h2>
            <p className="text-lg text-gray-600">
              The Federal Solar Investment Tax Credit is one of the most significant financial incentives for solar energy adoption in the United States, especially powerful for Solar Buy Out options.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <Calculator className="w-6 h-6 text-primary-600 mr-2" />
                  How It Works
                </h3>
                
                <p className="text-gray-600 mb-6">
                  The Federal ITC allows you to deduct 30% of the cost of installing a solar energy system from your federal taxes. This immediate tax credit applies to Solar Buy Out purchases with no cap on its value.
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold mb-3">For example:</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>System Cost:</span>
                      <span className="font-medium">$25,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Federal Tax Credit (30%):</span>
                      <span className="font-medium text-green-600">-$7,500</span>
                    </div>
                    <div className="flex justify-between border-t pt-2 mt-2">
                      <span className="font-semibold">Net System Cost:</span>
                      <span className="font-semibold">$17,500</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-primary-50 p-4 rounded-lg border border-primary-100">
                  <p className="text-sm text-gray-700">
                    <strong>Important:</strong> The ITC was recently extended through 2032 at 30%, then phases down to 26% in 2033 and 22% in 2034 before expiring in 2035.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <FileText className="w-6 h-6 text-primary-600 mr-2" />
                  Eligibility Requirements
                </h3>
                
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 text-xl leading-none">•</span>
                    <span className="text-gray-600">
                      <strong>System Ownership:</strong> You must own the solar system (Buy Out option only - not lease or PPA)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 text-xl leading-none">•</span>
                    <span className="text-gray-600">
                      <strong>Tax Liability:</strong> You must have sufficient tax liability to claim the credit
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 text-xl leading-none">•</span>
                    <span className="text-gray-600">
                      <strong>Primary or Secondary Residence:</strong> For residential systems
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 text-xl leading-none">•</span>
                    <span className="text-gray-600">
                      <strong>Original Installation:</strong> System must be new (not used)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 text-xl leading-none">•</span>
                    <span className="text-gray-600">
                      <strong>Timing:</strong> System must be placed in service during the tax year for which the credit is claimed
                    </span>
                  </li>
                </ul>
                
                <div className="bg-accent-50 p-4 rounded-lg border border-accent-100">
                  <p className="text-sm text-gray-700">
                    <strong>Pro Tip:</strong> If your tax liability is less than your available credit in a given year, you can carry the unused portion forward to the next tax year.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Passive Income Section */}
      <section id="passive-income" className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold mb-4">Solar as a Tax Reduction & Passive Income Vehicle</h2>
            <p className="text-lg text-gray-600">
              For individuals who paid $50,000 to $600,000+ in taxes, solar investments can provide powerful tax reduction strategies and potentially recover paid taxes while generating passive income.
            </p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-12 max-w-4xl mx-auto">
            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-red-600 mr-3 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-2">High-Value Tax Strategy Opportunity</h3>
                <p className="text-red-700">
                  <strong>Are you someone who paid 5 to 6 figures in taxes?</strong> Solar investment through our Buy Out option can be a powerful vehicle for tax reduction and potentially recovering paid taxes. Contact us for a personalized consultation to explore how solar can transform your tax strategy.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card flex"
            >
              <div className="mr-4">
                <TrendingUp className="w-10 h-10 text-primary-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Tax Reduction Strategy</h3>
                <p className="text-gray-600">
                  Strategic solar investments can offset high tax liabilities, especially for individuals who paid significant amounts in taxes. This approach allows you to redirect funds that would otherwise go to taxes into wealth-building assets that provide returns for 25+ years.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card flex"
            >
              <div className="mr-4">
                <PiggyBank className="w-10 h-10 text-primary-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Recover Paid Taxes</h3>
                <p className="text-gray-600">
                  Through advanced tax strategies involving solar investments, it's possible to recover a portion of taxes you've already paid, creating a powerful cash flow opportunity and potential for passive income generation.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">High-Income Tax Strategy Example</h3>
            
            <div className="mb-8">
              <div className="flex flex-col md:flex-row md:items-center mb-6">
                <div className="md:w-1/2 p-4">
                  <h4 className="font-semibold mb-3">Scenario:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Annual Income: $500,000</li>
                    <li>• Federal Tax Liability: $150,000</li>
                    <li>• State Tax Liability: $40,000</li>
                    <li>• Total Tax Burden: $190,000</li>
                  </ul>
                </div>
                <div className="md:w-1/2 p-4">
                  <h4 className="font-semibold mb-3">With Strategic Solar Investment:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Solar Investment: $300,000</li>
                    <li>• Federal ITC (30%): $90,000</li>
                    <li>• Depreciation Benefits: ~$70,000</li>
                    <li>• Total Tax Savings: ~$160,000</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                <p className="text-center text-gray-700">
                  <strong>Result:</strong> Instead of paying $190,000 in taxes, you've redirected $160,000 into an income-generating asset that provides returns for 25+ years while potentially recovering previously paid taxes.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 mb-6">
                This is a simplified example. Our tax specialists can provide a detailed analysis based on your specific financial situation.
              </p>
              <Link to="/contact" className="btn btn-primary">
                Schedule a Tax Strategy Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EPC Collaboration Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold mb-4">How Our Tax Credit Investment Can Help You</h2>
            <p className="text-lg text-gray-600">
              We finance solar purchase, PPA, and solar leasing for existing EPC companies, helping maximize tax benefits and project success through strategic partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <Building className="w-6 h-6 text-primary-600 mr-2" />
                  Benefits for EPC Partners
                </h3>
                
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 text-xl leading-none">•</span>
                    <span className="text-gray-600">
                      <strong>We Finance Solar Purchase:</strong> Complete project financing for cash purchase transactions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 text-xl leading-none">•</span>
                    <span className="text-gray-600">
                      <strong>PPA Financing:</strong> Power Purchase Agreement structures for long-term revenue streams
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 text-xl leading-none">•</span>
                    <span className="text-gray-600">
                      <strong>Solar Leasing Solutions:</strong> Comprehensive leasing programs for residential and commercial projects
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 text-xl leading-none">•</span>
                    <span className="text-gray-600">
                      <strong>Enhanced Project Economics:</strong> Improved financial returns through optimized tax incentive structures
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 text-xl leading-none">•</span>
                    <span className="text-gray-600">
                      <strong>Risk Mitigation:</strong> Shared project risk through partnership structure
                    </span>
                  </li>
                </ul>
                
                <div className="bg-primary-50 p-4 rounded-lg border border-primary-100">
                  <p className="text-sm text-gray-700">
                    Our partnerships are structured to be win-win, allowing EPC companies to focus on what they do best while we optimize the financial structure and provide comprehensive financing solutions.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <Users className="w-6 h-6 text-primary-600 mr-2" />
                  Ideal Partnership Criteria
                </h3>
                
                <p className="text-gray-600 mb-6">
                  We're looking to partner with established EPC companies that meet the following criteria:
                </p>
                
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 text-xl leading-none">•</span>
                    <span className="text-gray-600">
                      <strong>Experience:</strong> Minimum 3 years in solar installation with proven track record
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 text-xl leading-none">•</span>
                    <span className="text-gray-600">
                      <strong>Project Size:</strong> Capability to handle commercial projects 100kW and larger
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 text-xl leading-none">•</span>
                    <span className="text-gray-600">
                      <strong>Licensing:</strong> Proper state licenses and certifications
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 text-xl leading-none">•</span>
                    <span className="text-gray-600">
                      <strong>Pipeline:</strong> Existing project pipeline or strong lead generation capability
                    </span>
                  </li>
                </ul>
                
                <div className="text-center">
                  <Link to="/contact" className="btn btn-primary">
                    Explore Partnership Opportunities
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Financing Clarification Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Financing Approach</h2>
            <p className="text-lg text-gray-600">
              We provide direct financing solutions rather than traditional bank financing, offering cash purchase, PPA, and solar leasing options.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Landmark className="w-6 h-6 text-primary-600 mr-2" />
              Our Direct Financing Solutions
            </h3>
            
            <p className="text-gray-600 mb-8">
              <strong>We do not finance through traditional banks.</strong> Instead, we offer comprehensive financing structures directly:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 border border-gray-200 rounded-lg text-center">
                <div className="text-2xl font-semibold mb-2 text-primary-600">Cash Purchase</div>
                <p className="text-sm text-gray-600">Direct financing for system ownership with immediate tax benefits</p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg text-center">
                <div className="text-2xl font-semibold mb-2 text-primary-600">PPA Options</div>
                <p className="text-sm text-gray-600">Power Purchase Agreements with competitive rates and long-term savings</p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg text-center">
                <div className="text-2xl font-semibold mb-2 text-primary-600">Solar Leasing</div>
                <p className="text-sm text-gray-600">Comprehensive leasing solutions with maintenance included</p>
              </div>
            </div>
            
            <div className="bg-primary-50 p-4 rounded-lg border border-primary-100">
              <p className="text-center text-gray-700">
                Our direct financing approach allows us to provide more flexible terms and faster approval processes compared to traditional bank financing, while optimizing tax benefits for our clients.
              </p>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Tax Strategy?</h2>
            <p className="text-xl mb-8 opacity-90">
              If you paid 5 to 6 figures in taxes, contact our specialists today to explore how solar can become a powerful part of your wealth-building and tax reduction strategy.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-gray-100">
                Schedule a Tax Strategy Consultation
              </Link>
              <Link to="/services/options/collaborations" className="btn bg-transparent border border-white hover:bg-white/10">
                Explore EPC Partnerships
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TaxCreditsPage;