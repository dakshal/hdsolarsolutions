import React from 'react';
import { motion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { territories } from '../data/territoryData';
import { MapPin, Sun, Award, Users, Clock, Target } from 'lucide-react';

// Map coordinates for each territory
const mapCoordinates = {
  pa: { top: '25%', left: '40%' },
  va: { top: '75%', left: '35%' },
  md: { top: '50%', left: '45%' },
  dc: { top: '65%', left: '48%' },
  nj: { top: '35%', left: '80%' },
  de: { top: '58%', left: '70%' }
};

// Combine territory data with map coordinates
const mapTerritoryData = territories.map(territory => ({
  ...territory,
  top: mapCoordinates[territory.id].top,
  left: mapCoordinates[territory.id].left
}));

const AboutPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const territoryParam = searchParams.get('territory');
  
  const selectedTerritory = territoryParam 
    ? mapTerritoryData.find(t => t.id === territoryParam) 
    : null;

  const handleTerritoryClick = (e: React.MouseEvent, territoryId: string) => {
    e.preventDefault();
    setSearchParams({ territory: territoryId });
  };

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
              About SolarEnergy
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Leading the renewable energy revolution with innovative solar solutions since 2024.
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
                At SolarEnergy, we're committed to accelerating the transition to sustainable energy through innovative solar solutions that make renewable power accessible to all.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2024, we've grown from a small residential installer to a comprehensive solar provider serving residential, commercial, and government clients across seven states.
              </p>
              <p className="text-lg text-gray-600">
                Our team of certified professionals is dedicated to excellence in design, installation, and customer service, ensuring that every solar project delivers maximum value and performance.
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
                src="https://images.pexels.com/photos/9875321/pexels-photo-9875321.jpeg" 
                alt="SolarEnergy team installing solar panels" 
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
              The principles that guide everything we do at SolarEnergy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-md p-6 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-6">
                <Sun className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to creating a cleaner, more sustainable world through renewable energy solutions that reduce carbon footprints and preserve natural resources.
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
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our business, from system design and installation to customer service and ongoing support.
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
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-gray-600">
                We're dedicated to empowering the communities we serve through energy independence, education, and creating local jobs in the renewable energy sector.
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
            <p className="text-lg text-gray-600">
              We currently serve customers in six states across the United States, with plans for continued expansion.
            </p>
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
                  src="https://www.worldatlas.com/r/w960-q80/upload/60/76/ca/mid-atlantic-states.png"
                  alt="Map of the Mid-Atlantic states: PA, NJ, DE, MD, VA, and DC"
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Mapping over territories to place pins */}
              {mapTerritoryData.map((territory) => (
                <a
                  key={territory.id}
                  href="#"
                  onClick={(e) => handleTerritoryClick(e, territory.id)}
                  className={`absolute flex items-center justify-center bg-blue-600 text-white rounded-full border-2 border-white shadow-lg transition-all duration-300 ease-in-out hover:bg-blue-700 hover:w-auto hover:px-2 group ${
                    territory.id === selectedTerritory?.id ? 'w-auto px-2 bg-blue-700' : 'w-8 h-8'
                  }`}
                  style={{
                    top: territory.top,
                    left: territory.left,
                    transform: 'translate(-50%, -50%)', // Center the pin on the coordinates
                  }}
                  title={territory.name}
                >
                  <MapPin className="w-4 h-4 min-w-4" />
                   <span className={`ml-1 whitespace-nowrap overflow-hidden transition-all duration-300 ${
                       territory.id === selectedTerritory?.id ? 'max-w-40' : 'max-w-0 group-hover:max-w-40'
                     }`}>
                     {territory.name}
                   </span>
                </a>
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
                  <h3 className="text-xl font-semibold mb-4">Our Service Areas</h3>
                  <p className="text-gray-600 mb-6">
                    We currently operate in seven states, providing comprehensive solar solutions to residential, commercial, and government customers.
                  </p>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                    {mapTerritoryData.map((territory) => (
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
              From our humble beginnings to becoming a leading solar provider.
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
                    H&D Solar Solutions was founded with a mission to make solar energy accessible to homeowners across Pennsylvania, Maryland, New Jersey, Virginia and Washington DC.
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
                  <h3 className="text-xl font-semibold mb-2">Expansion to Commercial</h3>
                  <p className="text-gray-600">
                    After establishing a strong presence in residential solar, we expanded our services to include commercial installations.
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
                  <h3 className="text-xl font-semibold mb-2">Multi-State Operations</h3>
                  <p className="text-gray-600">
                    Expanded operations to Pennsylvania, Maryland and Virginia, establishing a regional presence in the east coast.
                  </p>
                </div>
              </div>
              
              <div className="md:w-8 md:h-8 bg-primary-500 rounded-full z-10 my-4 md:my-0 flex items-center justify-center text-white">
                <MapPin className="w-4 h-4" />
              </div>
              
              <div className="md:w-1/2"></div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col md:flex-row-reverse items-center mb-12"
            >
              <div className="md:w-1/2 flex justify-start relative">
                <div className="bg-white rounded-lg shadow-md p-6 max-w-md relative z-10">
                  <div className="font-bold text-primary-600 mb-2">2025</div>
                  <h3 className="text-xl font-semibold mb-2">Government Contracts</h3>
                  <p className="text-gray-600">
                    Secured our first government contracts, providing solar solutions for municipal buildings and school districts.
                  </p>
                </div>
              </div>
              
              <div className="md:w-8 md:h-8 bg-primary-500 rounded-full z-10 my-4 md:my-0 flex items-center justify-center text-white">
                <Users className="w-4 h-4" />
              </div>
              
              <div className="md:w-1/2"></div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col md:flex-row items-center"
            >
              <div className="md:w-1/2 flex justify-end relative">
                <div className="bg-white rounded-lg shadow-md p-6 max-w-md relative z-10">
                  <div className="font-bold text-primary-600 mb-2">Today</div>
                  <h3 className="text-xl font-semibold mb-2">A National Leader</h3>
                  <p className="text-gray-600">
                    Now operating in five states with over 10 installations, we continue to lead the way in solar innovation and customer satisfaction.
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
            <h2 className="text-3xl font-bold mb-6">Join the Solar Revolution</h2>
            <p className="text-xl mb-8 opacity-90">
              Ready to reduce your energy costs and environmental impact? Contact us today to learn more about our solar solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-gray-100">
                Get a Free Quote
              </Link>
              <Link to="/services" className="btn bg-transparent border border-white hover:bg-white/10">
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;