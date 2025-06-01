import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects, Project } from '../data/projectsData';
import { Sun, Zap, Ruler, DollarSign } from 'lucide-react';

const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'residential' | 'commercial' | 'government'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
              Our Projects
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Explore our portfolio of successful solar installations across residential, commercial, and government sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Controls */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'all' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Projects
            </button>
            <button 
              onClick={() => setFilter('residential')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'residential' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Residential
            </button>
            <button 
              onClick={() => setFilter('commercial')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'commercial' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Commercial
            </button>
            <button 
              onClick={() => setFilter('government')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'government' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Government
            </button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-56 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      project.category === 'residential' 
                        ? 'bg-blue-100 text-blue-700' 
                        : project.category === 'commercial'
                          ? 'bg-purple-100 text-purple-700'
                          : 'bg-green-100 text-green-700'
                    }`}>
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
                    <span className="text-sm text-gray-500">{project.location}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Sun className="w-4 h-4 mr-1 text-primary-600" />
                      <span>{project.systemSize}</span>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="w-4 h-4 mr-1 text-primary-600" />
                      <span>{project.savings}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  <button 
                    className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
                  >
                    View Details <span className="ml-1">→</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="bg-white rounded-lg p-8 text-center max-w-md mx-auto">
              <h3 className="text-xl font-semibold mb-2">No Projects Found</h3>
              <p className="text-gray-600">
                We don't have any {filter} projects in our portfolio at the moment. Please check back later or try a different filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md z-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="h-64 md:h-80 overflow-hidden">
                <img 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap justify-between items-center mb-4">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-0">{selectedProject.title}</h2>
                  <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                    selectedProject.category === 'residential' 
                      ? 'bg-blue-100 text-blue-700' 
                      : selectedProject.category === 'commercial'
                        ? 'bg-purple-100 text-purple-700'
                        : 'bg-green-100 text-green-700'
                  }`}>
                    {selectedProject.category.charAt(0).toUpperCase() + selectedProject.category.slice(1)}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6">{selectedProject.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-3 flex items-center">
                      <Sun className="w-5 h-5 text-primary-600 mr-2" />
                      System Details
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">System Size:</span>
                        <span className="font-medium">{selectedProject.systemSize}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Location:</span>
                        <span className="font-medium">{selectedProject.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-3 flex items-center">
                      <DollarSign className="w-5 h-5 text-primary-600 mr-2" />
                      Financial Benefits
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Annual Savings:</span>
                        <span className="font-medium">{selectedProject.savings}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Payback Period:</span>
                        <span className="font-medium">5-7 years</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 className="font-semibold mb-3 flex items-center">
                  <Zap className="w-5 h-5 text-primary-600 mr-2" />
                  Key Features
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 mb-8">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary-600 mr-2 text-lg leading-none">•</span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex justify-center">
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="btn btn-primary"
                  >
                    Close Details
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

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
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Solar Project?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us today to learn how we can create a custom solar solution for your home, business, or institution.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/contact" className="btn bg-white text-primary-700 hover:bg-gray-100">
                Get a Free Quote
              </a>
              <a href="/services" className="btn bg-transparent border border-white hover:bg-white/10">
                Explore Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;