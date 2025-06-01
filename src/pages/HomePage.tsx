import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Home, Building2, Landmark, Battery, Zap, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { territories } from '../data/territoryData';
import { projects } from '../data/projectsData';

const HomePage: React.FC = () => {
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-secondary-900 to-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <img 
            src="https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg" 
            alt="Solar panels in a beautiful landscape" 
            className="object-cover w-full h-full"
          />
        </div>
        
        <div className="container-custom relative z-10 py-20 pt-32">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Powering a Sustainable Future with Solar Energy
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Residential, commercial, and government solar solutions tailored to your needs. Start saving today with clean, renewable energy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn bg-primary-500 hover:bg-primary-600 text-white font-medium">
                Get a Free Quote
              </Link>
              <Link to="/services" className="btn bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/30 text-white font-medium">
                Explore Our Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Solar Energy Solutions</h2>
            <p className="text-lg text-gray-600">
              Customized solar packages to fit your energy needs and financial goals.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeIn} className="card group hover:border-primary-500 hover:border hover:-translate-y-1">
              <div className="p-4 bg-primary-50 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-primary-100">
                <Home className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Residential Solutions</h3>
              <p className="text-gray-600 mb-4">
                Custom solar systems for homeowners that reduce electricity bills and increase property value.
              </p>
              <Link to="/services/markets/residential" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                Learn More <span className="ml-1">→</span>
              </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="card group hover:border-primary-500 hover:border hover:-translate-y-1">
              <div className="p-4 bg-primary-50 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-primary-100">
                <Building2 className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Commercial Solutions</h3>
              <p className="text-gray-600 mb-4">
                Scalable solar solutions for businesses looking to reduce operating costs and achieve sustainability goals.
              </p>
              <Link to="/services/markets/commercial" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                Learn More <span className="ml-1">→</span>
              </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="card group hover:border-primary-500 hover:border hover:-translate-y-1">
              <div className="p-4 bg-primary-50 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-primary-100">
                <Landmark className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Government Solutions</h3>
              <p className="text-gray-600 mb-4">
                Helping public institutions achieve energy independence and meet renewable energy mandates.
              </p>
              <Link to="/services/markets/government" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                Learn More <span className="ml-1">→</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Financing Options */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Financing Options</h2>
            <p className="text-lg text-gray-600">
              Choose the payment model that works best for your financial situation.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeIn} className="card hover:shadow-xl">
              <div className="mb-4 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-100 text-accent-600 mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold">Buy Out</h3>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Complete system ownership</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Maximum long-term savings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Increased property value</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Full tax incentive eligibility</span>
                </li>
              </ul>
              <Link to="/services/buyout" className="btn btn-primary w-full">Learn More</Link>
            </motion.div>

            <motion.div variants={fadeIn} className="card hover:shadow-xl">
              <div className="mb-4 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-100 text-accent-600 mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold">Lease</h3>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Zero upfront costs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Fixed monthly payments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Maintenance included</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>25-40% electric bill reduction</span>
                </li>
              </ul>
              <Link to="/services/lease" className="btn btn-primary w-full">Learn More</Link>
            </motion.div>

            <motion.div variants={fadeIn} className="card hover:shadow-xl">
              <div className="mb-4 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-100 text-accent-600 mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold">Power Purchase Agreement</h3>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>No upfront cost</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Pay only for power produced</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Lower rates than utility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>No maintenance responsibilities</span>
                </li>
              </ul>
              <Link to="/services/ppa" className="btn btn-primary w-full">Learn More</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-primary-700 text-white">
        <div 
          ref={statsRef}
          className="container-custom"
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg opacity-90">
              Making a difference with every solar installation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {statsInView && <CountUp end={2} suffix="+" duration={2.5} />}
              </div>
              <p className="text-lg opacity-90">Years Experience</p>
            </div>
            
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {statsInView && <CountUp end={10} suffix="+" duration={2.5} />}
              </div>
              <p className="text-lg opacity-90">Systems Installed</p>
            </div>
            
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {statsInView && <CountUp end={65} suffix="k" duration={2.5} />}
              </div>
              <p className="text-lg opacity-90">kWh Generated Annually</p>
            </div>
            
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {statsInView && <CountUp end={30} suffix="" duration={2.5} />}
              </div>
              <p className="text-lg opacity-90">Metric Tons CO₂ Offset</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Territory */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Service Territory</h2>
            <p className="text-lg text-gray-600">
              We currently serve customers in these states with plans for continued expansion.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {territories.map((territory) => (
              <div key={territory.id} className="card hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-2">{territory.name}</h3>
                <p className="text-gray-600 mb-4">{territory.description}</p>
                <div className="mb-4">
                  <div className="flex items-center mb-1">
                    <span className="text-sm font-medium">Average Payback: </span>
                    <span className="ml-auto text-sm font-semibold text-primary-700">
                      {territory.paybackPeriod.residential.medium} years
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary-500 h-2 rounded-full" 
                      style={{ width: `${(territory.paybackPeriod.residential.medium / 10) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <Link to={`/about?territory=${territory.id}`} className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                  View Details <span className="ml-1">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600">
              See how we've helped our customers achieve energy independence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -8 }}
                className="card overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold px-2 py-1 bg-primary-100 text-primary-700 rounded-full">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
                    <span className="text-sm text-gray-500">{project.location}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span>System: {project.systemSize}</span>
                    <span>Savings: {project.savings}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description.substring(0, 100)}...</p>
                  <Link to="/projects" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                    View Project <span className="ml-1">→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/projects" className="btn btn-outline">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Services</h2>
            <p className="text-lg text-gray-600">
              Beyond standard solar installations, we offer complementary services for maximum benefit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card flex"
            >
              <div className="mr-4">
                <Battery className="w-10 h-10 text-primary-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Battery Backup Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Integrated battery systems to power your home during outages and charge your EV efficiently.
                </p>
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
              className="card flex"
            >
              <div className="mr-4">
                <BarChart3 className="w-10 h-10 text-primary-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Tax Credit Investments</h3>
                <p className="text-gray-600 mb-4">
                  Maximize tax benefits and potentially recover paid taxes through strategic solar investments.
                </p>
                <Link to="/tax-credits" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                  Learn More <span className="ml-1">→</span>
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card flex"
            >
              <div className="mr-4">
                <Zap className="w-10 h-10 text-primary-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Passive Income Opportunities</h3>
                <p className="text-gray-600 mb-4">
                  Generate passive income and reduce tax liability through solar investments and incentives.
                </p>
                <Link to="/tax-credits#passive-income" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                  Learn More <span className="ml-1">→</span>
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card flex"
            >
              <div className="mr-4">
                <Sun className="w-10 h-10 text-primary-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">EPC Collaborations</h3>
                <p className="text-gray-600 mb-4">
                  Strategic partnerships with existing solar EPC companies to maximize tax benefits and project success.
                </p>
                <Link to="/services/options/collaborations" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Harness the Power of the Sun?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us today for a free consultation and discover how much you can save with H&D Solar Solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-gray-100">
                Get a Free Quote
              </Link>
              <Link to="/sales-rep" className="btn bg-transparent border border-white hover:bg-white/10">
                Become a Sales Representative
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;