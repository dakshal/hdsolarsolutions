import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calculator, TrendingUp, Landmark, FileText, DollarSign, PiggyBank, Building, Users, AlertTriangle, Target, ExternalLink, Download } from 'lucide-react';

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

      {/* The $100k+ Tax Problem */}
      <section className="section bg-red-50 border-t-4 border-red-500">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 text-red-600 mb-6">
                <AlertTriangle className="w-10 h-10" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-700">
                Do You Pay Annual Taxes in Five or Six Figures?
              </h2>
              <h3 className="text-2xl font-semibold mb-8 text-gray-800">
                Turn Your Tax Liability into a High-Yield Passive Income Vehicle
              </h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Stop seeing taxes as a sunk cost. For individuals and businesses with an annual tax bill exceeding $100,000, solar energy represents a powerful and strategic financial tool. Instead of simply paying the IRS, you can redirect those funds into a tangible asset that generates passive income, offers substantial tax advantages, and delivers a secure return on investment. This isn't just about saving money; it's about transforming a liability into a lucrative income stream.
              </p>
              <Link to="/contact" className="btn btn-primary text-lg px-8 py-4">
                Transform Your Tax Strategy Today
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investment & Savings Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold mb-4">Investment & Savings Strategy</h2>
            <p className="text-lg text-gray-600">
              Detailed financial mechanisms that make solar a compelling investment, using a 100kW commercial solar project as our example.
            </p>
          </div>

          {/* Secure Solar Investment Strategy */}
          <div className="mb-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-green-50 rounded-xl p-8 border border-green-200"
            >
              <h3 className="text-2xl font-bold mb-6 text-green-700">A 60-70% Secure Investment from Day One</h3>
              <p className="text-lg text-gray-700 mb-8">
                Investing in a commercial solar project is one of the most financially secure decisions you can make. A combination of federal tax credits and accelerated depreciation allows you to recoup 60-70% of your initial investment almost immediately.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold mb-3 text-primary-600">30% Federal Investment Tax Credit (ITC)</h4>
                  <p className="text-gray-600">
                    The federal government offers a dollar-for-dollar tax credit equal to 30% of the total system cost. This is a direct reduction of your federal tax liability.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold mb-3 text-primary-600">Accelerated Depreciation (MACRS)</h4>
                  <p className="text-gray-600">
                    Solar energy property qualifies for the Modified Accelerated Cost Recovery System (MACRS). This allows you to deduct 85% of the project's value from your taxable income over an accelerated 5-year schedule. The immediate tax savings from this depreciation can account for an additional 30-40% of the project cost, depending on your tax bracket.
                  </p>
                </div>
              </div>

              {/* Investment Security Graphic */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-6 text-center">How Your Investment is Secured</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">30%</div>
                    <div className="text-sm text-gray-600">Federal ITC</div>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="text-3xl font-bold text-green-600 mb-2">30-40%</div>
                    <div className="text-sm text-gray-600">Depreciation Savings</div>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <div className="text-3xl font-bold text-orange-600 mb-2">30-40%</div>
                    <div className="text-sm text-gray-600">Remaining Investment</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Rapid Payback */}
          <div className="mb-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-primary-50 rounded-xl p-8 border border-primary-200"
            >
              <h3 className="text-2xl font-bold mb-6 text-primary-700">Recoup the Remaining 40% in Under 5 Years with Minimal Overhead</h3>
              <p className="text-lg text-gray-700">
                The remaining portion of your investment is typically paid back in less than five years through a combination of energy savings and passive income streams. Solar projects have minimal operating expenses, consisting mainly of routine cleaning and occasional maintenance, making them a predictable and reliable asset.
              </p>
            </motion.div>
          </div>

          {/* Passive Income Streams */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Building Passive Income Streams</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="card"
              >
                <h4 className="text-xl font-semibold mb-4 text-primary-600">Power Purchase Agreements (PPAs)</h4>
                <p className="text-gray-600 mb-4">
                  Secure a long-term contract (typically 15-25 years) with a creditworthy entity that agrees to purchase the electricity your solar system generates at a predetermined rate. This creates a steady, predictable revenue stream.
                </p>
                <a 
                  href="https://seia.org/wp-content/uploads/2024/09/SEIA-CI-PPA-v2.0.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Sample Commercial PPA from SEIA
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </motion.div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: 0.2 }}
                className="card"
              >
                <h4 className="text-xl font-semibold mb-4 text-primary-600">Solar Leases</h4>
                <p className="text-gray-600">
                  Lease your solar equipment to a property owner. You receive fixed monthly lease payments, while the lessee benefits from reduced energy costs. This offers a hands-off, consistent income.
                </p>
              </motion.div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: 0.4 }}
                className="card"
              >
                <h4 className="text-xl font-semibold mb-4 text-primary-600">Solar Renewable Energy Credits (SRECs)</h4>
                <p className="text-gray-600">
                  In certain markets, you earn one SREC for every megawatt-hour (MWh) of electricity your system produces. These credits can be sold to utilities that need to meet state-mandated renewable energy targets, providing an additional source of passive income.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Credit Overview */}
      <section className="section bg-gray-50">
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

      {/* Turn Tax Liability into High-Yield Asset */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Have a Tax Liability Over $200,000? Stop Paying. Start Investing.
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8 border border-primary-200">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                For businesses and high-net-worth individuals, a significant tax bill is a recurring liability. H&D Solar Solution offers a powerful strategy to convert this liability into a secure, income-generating asset. We specialize in developing solar projects across the Northeast (NJ, NY, MD, DC, VA, PA) that provide substantial, government-backed tax advantages and consistent long-term returns.
              </p>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The 2022 Inflation Reduction Act has extended and enhanced the federal incentives available for solar energy, making now the perfect time to invest. Our solution allows you to:
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 text-xl leading-none">•</span>
                  <span className="text-gray-700">Claim a 30% Federal Investment Tax Credit (ITC), a dollar-for-dollar reduction of your federal taxes.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 text-xl leading-none">•</span>
                  <span className="text-gray-700">Utilize Accelerated Depreciation (MACRS) to significantly lower your taxable income in the first year.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 text-xl leading-none">•</span>
                  <span className="text-gray-700">Generate Passive Income through Power Purchase Agreements (PPAs), Solar Leases, and the sale of Solar Renewable Energy Credits (SRECs).</span>
                </li>
              </ul>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-lg font-semibold text-center text-primary-700">
                  Combining the ITC and depreciation benefits can secure 60-70% of your total project cost within the first year. The remaining "at-risk" capital is often paid back in under 5 years, delivering a secure and profitable investment.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EPC Collaboration Section */}
      <section className="section bg-gray-50">
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
      <section className="section bg-white">
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