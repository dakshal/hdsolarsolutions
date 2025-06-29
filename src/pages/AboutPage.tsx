import React from 'react';
import { motion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { territories } from '../data/territoryData';
import { MapPin, Sun, Award, Users, Clock, Target, Lightbulb, Shield, Globe } from 'lucide-react';

const AboutPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const territoryParam = searchParams.get('territory');
  
  // Map coordinates for each territory
  const mapCoordinates = {
    pennsylvania: { top: '45%', left: '45%' },
    virginia: { top: '80%', left: '38%' },
    maryland: { top: '62%', left: '52%' },
    dc: { top: '67%', left: '48%' },
    newjersey: { top: '58%', left: '68%' },
    delaware: { top: '65%', left: '61%' }
  };
  
  // Combine territory data with map coordinates
  const mapTerritoryData = territories.map(territory => ({
    ...territory,
    top: mapCoordinates[territory.id].top,
    left: mapCoordinates[territory.id].left
  }));

  const selectedTerritory = territoryParam
    ? territories.find(t => t.id === territoryParam)
    : null;

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
              About H&D Solar Solutions
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              A solar developer specializing in innovative financing solutions for residential, commercial, and non-profit organizations across the United States.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                H&D Solar Solutions is a solar developer with a special focus on innovative solar financing. We believe that no project is too small, and we're equipped to handle projects of all sizes - from residential installations to large-scale commercial projects up to 2MW.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We specialize in providing comprehensive solar solutions for non-profit organizations, using innovative financing solutions including cash purchases, Power Purchase Agreements (PPAs), and solar leasing solutions.
              </p>
              <p className="text-lg text-gray-600">
                Our comprehensive approach means we design, engineer, construct, own, and operate solar systems throughout their entire lifespan, ensuring optimal performance and maximum value for our clients.
              </p>
            </motion.div>
           
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-xl"
            >
              <img
                src="https://t4.ftcdn.net/jpg/06/13/33/21/360_F_613332177_rdl36d2CnlqC1tqGQE3CizEJdu9G2Ltj.jpg"
                alt="H&D solar solutions mission and values"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do at H&D Solar Solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-md p-6 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-6">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously develop innovative financing solutions and cutting-edge solar technologies to meet our clients' evolving needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl shadow-md p-6 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                Every solution is tailored to our clients' specific needs, whether they're homeowners, businesses, or non-profit organizations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-md p-6 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-6">
                <Sun className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to creating a cleaner, more sustainable world through renewable energy solutions that reduce carbon footprints.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl shadow-md p-6 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-6">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Comprehensive Service</h3>
              <p className="text-gray-600">
                From initial design through long-term operation, we provide end-to-end service throughout the entire system lifespan.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Territory */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Service Territory</h2>
            <div className="bg-primary-50 p-6 rounded-lg border border-primary-100 mb-8">
              <div className="flex items-center justify-center mb-4">
                <Globe className="w-8 h-8 text-primary-600 mr-3" />
                <h3 className="text-xl font-semibold text-primary-700">We are open to doing projects anywhere in the U.S.</h3>
              </div>
              <p className="text-lg text-gray-700">
                Our primary focus is in these 6 states: Maryland, New Jersey, Pennsylvania, Washington DC, Delaware, and Virginia.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-100 rounded-xl p-6 h-[400px] md:h-[500px] relative overflow-hidden"
            >
              <div className="absolute inset-0">
                <img
                  src="https://hdsolarsolutions.imgix.net/mid-atlantic-states.png"
                  alt="Map of the United States showing service territories"
                  className="w-full h-full object-cover"
                />
              </div>
              {mapTerritoryData.map((territory) => (
                <Link
                  key={territory.id}
                  to={`/about?territory=${territory.id}`}
                  className={`absolute flex items-center justify-center bg-blue-600 text-white rounded-full border-2 border-white shadow-lg transition-all duration-300 ease-in-out hover:bg-blue-700 hover:w-auto hover:px-2 group ${
                    territory.id === selectedTerritory?.id ? 'w-auto px-2 bg-blue-700' : 'w-8 h-8'
                  }`}
                  style={{
                    top: territory.top,
                    left: territory.left,
                    transform: 'translate(-50%, -50%)',
                  }}
                  title={territory.name}
                >
                  <MapPin className="w-4 h-4 min-w-4" />
                  <span className={`ml-1 whitespace-nowrap overflow-hidden transition-all duration-300 ${
                    territory.id === selectedTerritory?.id ? 'max-w-40' : 'max-w-0 group-hover:max-w-40'
                  }`}>
                    {territory.name}
                  </span>
                </Link>
              ))}
            </motion.div>
           
            <div>
              {selectedTerritory ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl shadow-md p-6"
                >
                  <h3 className="text-2xl font-semibold mb-4 flex items-center">
                    <MapPin className="w-6 h-6 text-primary-600 mr-2" />
                    {selectedTerritory.name}
                  </h3>
                 
                  <p className="text-gray-600 mb-6">
                    {selectedTerritory.description}
                  </p>
                 
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Local Incentives:</h4>
                    <ul className="space-y-2">
                      {selectedTerritory.incentives.map((incentive, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary-600 mr-2 text-xl leading-none">•</span>
                          <span className="text-gray-600">{incentive}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                 
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Average Payback Periods:</h4>
                   
                    <div className="mb-4">
                      <h5 className="text-sm font-medium mb-2">Residential Systems</h5>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-gray-50 p-3 rounded text-center">
                          <div className="text-sm text-gray-500">5kW</div>
                          <div className="font-medium">{selectedTerritory.paybackPeriod.residential.small} years</div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded text-center">
                          <div className="text-sm text-gray-500">8kW</div>
                          <div className="font-medium">{selectedTerritory.paybackPeriod.residential.medium} years</div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded text-center">
                          <div className="text-sm text-gray-500">10kW</div>
                          <div className="font-medium">{selectedTerritory.paybackPeriod.residential.large} years</div>
                        </div>
                      </div>
                    </div>
                   
                    <div>
                      <h5 className="text-sm font-medium mb-2">Commercial Systems</h5>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-gray-50 p-3 rounded text-center">
                          <div className="text-sm text-gray-500">50kW</div>
                          <div className="font-medium">{selectedTerritory.paybackPeriod.commercial.small} years</div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded text-center">
                          <div className="text-sm text-gray-500">100kW</div>
                          <div className="font-medium">{selectedTerritory.paybackPeriod.commercial.medium} years</div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded text-center">
                          <div className="text-sm text-gray-500">250kW</div>
                          <div className="font-medium">{selectedTerritory.paybackPeriod.commercial.large} years</div>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                  <div className="text-center">
                    <Link
                      to="/contact"
                      state={{ state: selectedTerritory.name }}
                      className="btn btn-primary"
                    >
                      Get a Quote in {selectedTerritory.name}
                    </Link>
                  </div>
                </motion.div>
              ) : (
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-4">Our Primary Focus Areas</h3>
                  <p className="text-gray-600 mb-6">
                    While we operate nationwide, we have concentrated expertise in six key states across the Mid-Atlantic region.
                  </p>
                 
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                    {territories.map((territory) => (
                      <Link
                        key={territory.id}
                        to={`/about?territory=${territory.id}`}
                        className="bg-gray-50 hover:bg-gray-100 transition-colors p-4 rounded-lg text-center"
                      >
                        <MapPin className="w-5 h-5 text-primary-600 mx-auto mb-2" />
                        <span className="font-medium">{territory.name}</span>
                      </Link>
                    ))}
                  </div>
                 
                  <p className="text-gray-600 text-sm text-center">
                    Click on a state to view detailed information about our services and incentives in that area.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 text-center">Our Journey</h2>
            <p className="text-lg text-gray-600 text-center">
              From our founding to becoming a leading solar developer with innovative financing solutions.
            </p>
          </div>
          <div className="relative">
            {/* Timeline connector */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform -translate-x-1/2"></div>
           
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center mb-12"
            >
              <div className="md:w-1/2 flex justify-end relative">
                <div className="bg-white rounded-lg shadow-md p-6 max-w-md relative z-10">
                  <div className="font-bold text-primary-600 mb-2">2024</div>
                  <h3 className="text-xl font-semibold mb-2">Company Founded</h3>
                  <p className="text-gray-600">
                    H&D Solar Solutions was founded with a mission to make innovative solar financing accessible to residential, commercial, and non-profit organizations.
                  </p>
                </div>
              </div>
             
              <div className="md:w-8 md:h-8 bg-primary-500 rounded-full z-10 my-4 md:my-0 flex items-center justify-center text-white">
                <Clock className="w-4 h-4" />
              </div>
             
              <div className="md:w-1/2"></div>
            </motion.div>
           
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col md:flex-row-reverse items-center mb-12"
            >
              <div className="md:w-1/2 flex justify-start relative">
                <div className="bg-white rounded-lg shadow-md p-6 max-w-md relative z-10">
                  <div className="font-bold text-primary-600 mb-2">2024</div>
                  <h3 className="text-xl font-semibold mb-2">Specialized Non-Profit Focus</h3>
                  <p className="text-gray-600">
                    Developed specialized financing solutions for non-profit organizations, recognizing their unique needs and constraints.
                  </p>
                </div>
              </div>
             
              <div className="md:w-8 md:h-8 bg-primary-500 rounded-full z-10 my-4 md:my-0 flex items-center justify-center text-white">
                <Target className="w-4 h-4" />
              </div>
             
              <div className="md:w-1/2"></div>
            </motion.div>
           
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col md:flex-row items-center mb-12"
            >
              <div className="md:w-1/2 flex justify-end relative">
                <div className="bg-white rounded-lg shadow-md p-6 max-w-md relative z-10">
                  <div className="font-bold text-primary-600 mb-2">2024</div>
                  <h3 className="text-xl font-semibold mb-2">Nationwide Expansion</h3>
                  <p className="text-gray-600">
                    Expanded operations to serve clients anywhere in the U.S., while maintaining primary focus in six Mid-Atlantic states.
                  </p>
                </div>
              </div>
             
              <div className="md:w-8 md:h-8 bg-primary-500 rounded-full z-10 my-4 md:my-0 flex items-center justify-center text-white">
                <Globe className="w-4 h-4" />
              </div>
             
              <div className="md:w-1/2"></div>
            </motion.div>
           
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col md:flex-row-reverse items-center"
            >
              <div className="md:w-1/2 flex justify-start relative">
                <div className="bg-white rounded-lg shadow-md p-6 max-w-md relative z-10">
                  <div className="font-bold text-primary-600 mb-2">Today</div>
                  <h3 className="text-xl font-semibold mb-2">Comprehensive Solar Developer</h3>
                  <p className="text-gray-600">
                    Now operating as a full-service solar developer, designing, engineering, constructing, owning, and operating systems up to 2MW throughout their entire lifespan.
                  </p>
                </div>
              </div>
             
              <div className="md:w-8 md:h-8 bg-primary-500 rounded-full z-10 my-4 md:my-0 flex items-center justify-center text-white">
                <Award className="w-4 h-4" />
              </div>
             
              <div className="md:w-1/2"></div>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Partner with Us?</h2>
            <p className="text-xl mb-8 opacity-90">
              Whether you're a homeowner, business, or non-profit organization, we have innovative financing solutions to meet your solar energy needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-gray-100">
                Get a Free Consultation
              </Link>
              <Link to="/services" className="btn bg-transparent border border-white hover:bg-white/10">
                Explore Our Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;