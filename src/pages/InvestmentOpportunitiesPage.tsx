import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { DollarSign, MapPin, Calendar, TrendingUp, AlertTriangle, Building, Sun, Zap, Send, FileText } from 'lucide-react';

interface InvestmentProject {
  id: string;
  title: string;
  state: string;
  investmentAmount: number;
  availability: 'Available' | 'Under Contract' | 'Sold';
  imageUrl: string;
  systemSize: string;
  timeline: string;
  federalITC: number;
  depreciationSavings: number;
  srecIncome?: number;
  description: string;
}

const investmentProjects: InvestmentProject[] = [
  {
    id: 'commercial-austin-tx',
    title: 'Commercial Rooftop Solar - Austin, TX',
    state: 'Texas',
    investmentAmount: 500000,
    availability: 'Available',
    imageUrl: 'https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    systemSize: '500 kW',
    timeline: '9-12 months to completion',
    federalITC: 150000,
    depreciationSavings: 125000,
    srecIncome: 15000,
    description: 'Large-scale commercial rooftop installation on a manufacturing facility with excellent sun exposure and long-term PPA in place.'
  },
  {
    id: 'industrial-newark-nj',
    title: 'Industrial Solar Farm - Newark, NJ',
    state: 'New Jersey',
    investmentAmount: 750000,
    availability: 'Available',
    imageUrl: 'https://images.pexels.com/photos/9875384/pexels-photo-9875384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    systemSize: '750 kW',
    timeline: '12-15 months to completion',
    federalITC: 225000,
    depreciationSavings: 187500,
    srecIncome: 25000,
    description: 'Ground-mounted solar installation on industrial property with excellent SREC market potential in New Jersey.'
  },
  {
    id: 'commercial-baltimore-md',
    title: 'Multi-Building Commercial Complex - Baltimore, MD',
    state: 'Maryland',
    investmentAmount: 350000,
    availability: 'Under Contract',
    imageUrl: 'https://images.pexels.com/photos/9875409/pexels-photo-9875409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    systemSize: '350 kW',
    timeline: '8-10 months to completion',
    federalITC: 105000,
    depreciationSavings: 87500,
    srecIncome: 12000,
    description: 'Multi-building commercial complex with distributed solar installations across multiple rooftops.'
  },
  {
    id: 'warehouse-richmond-va',
    title: 'Warehouse Solar Installation - Richmond, VA',
    state: 'Virginia',
    investmentAmount: 425000,
    availability: 'Available',
    imageUrl: 'https://images.pexels.com/photos/9875426/pexels-photo-9875426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    systemSize: '425 kW',
    timeline: '10-12 months to completion',
    federalITC: 127500,
    depreciationSavings: 106250,
    srecIncome: 8500,
    description: 'Large warehouse facility with optimal roof conditions and strong creditworthy tenant with long-term lease.'
  },
  {
    id: 'retail-philadelphia-pa',
    title: 'Retail Shopping Center - Philadelphia, PA',
    state: 'Pennsylvania',
    investmentAmount: 600000,
    availability: 'Available',
    imageUrl: 'https://images.pexels.com/photos/9875398/pexels-photo-9875398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    systemSize: '600 kW',
    timeline: '11-14 months to completion',
    federalITC: 180000,
    depreciationSavings: 150000,
    srecIncome: 18000,
    description: 'Shopping center with multiple anchor tenants and excellent visibility for corporate sustainability messaging.'
  },
  {
    id: 'office-wilmington-de',
    title: 'Corporate Office Complex - Wilmington, DE',
    state: 'Delaware',
    investmentAmount: 300000,
    availability: 'Sold',
    imageUrl: 'https://images.pexels.com/photos/9875403/pexels-photo-9875403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    systemSize: '300 kW',
    timeline: 'Completed',
    federalITC: 90000,
    depreciationSavings: 75000,
    srecIncome: 10000,
    description: 'Modern office complex with energy-efficient design and strong corporate commitment to sustainability.'
  }
];

const InvestmentOpportunitiesPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<InvestmentProject | null>(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    projectId: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    setFormSubmitted(true);
    setContactForm({
      name: '',
      email: '',
      phone: '',
      message: '',
      projectId: ''
    });
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
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
              Current Investment Opportunities
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Below is a list of our current solar investment opportunities. These projects offer significant tax benefits and strong potential for returns. Please note that all financial figures are approximate.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Projects Grid */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {investmentProjects.map((project) => (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition-all duration-300"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      project.availability === 'Available' 
                        ? 'bg-green-100 text-green-700' 
                        : project.availability === 'Under Contract'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-red-100 text-red-700'
                    }`}>
                      {project.availability}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{project.state}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3 line-clamp-2">{project.title}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Investment Amount:</span>
                      <span className="font-medium">{formatCurrency(project.investmentAmount)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">System Size:</span>
                      <span className="font-medium">{project.systemSize}</span>
                    </div>
                  </div>
                  
                  <button 
                    className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
                    disabled={project.availability === 'Sold'}
                  >
                    {project.availability === 'Sold' ? 'Project Completed' : 'View Details'} 
                    <span className="ml-1">→</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
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
                <div className="flex flex-wrap justify-between items-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-0">{selectedProject.title}</h2>
                  <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                    selectedProject.availability === 'Available' 
                      ? 'bg-green-100 text-green-700' 
                      : selectedProject.availability === 'Under Contract'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-red-100 text-red-700'
                  }`}>
                    {selectedProject.availability}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-8">{selectedProject.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold mb-4 flex items-center">
                      <Building className="w-5 h-5 text-primary-600 mr-2" />
                      Project Details
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Solar System Size:</span>
                        <span className="font-medium">{selectedProject.systemSize}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total Investment:</span>
                        <span className="font-medium">{formatCurrency(selectedProject.investmentAmount)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Timeline:</span>
                        <span className="font-medium">{selectedProject.timeline}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Location:</span>
                        <span className="font-medium">{selectedProject.state}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <h3 className="font-semibold mb-4 flex items-center text-green-700">
                      <TrendingUp className="w-5 h-5 mr-2" />
                      Tax & Credit Summary (Approximate)
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">30% Federal ITC:</span>
                        <span className="font-medium text-green-600">{formatCurrency(selectedProject.federalITC)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Depreciation Tax Savings:</span>
                        <span className="font-medium text-green-600">{formatCurrency(selectedProject.depreciationSavings)}</span>
                      </div>
                      {selectedProject.srecIncome && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Annual SREC Income:</span>
                          <span className="font-medium text-green-600">{formatCurrency(selectedProject.srecIncome)}</span>
                        </div>
                      )}
                      <div className="border-t pt-3 flex justify-between text-lg font-semibold">
                        <span>Total Year 1 Benefits:</span>
                        <span className="text-green-600">
                          {formatCurrency(selectedProject.federalITC + selectedProject.depreciationSavings)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-8">
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" />
                    <p className="text-sm text-gray-700">
                      <strong>Disclaimer:</strong> These figures are approximations and are for illustrative purposes only. Actual returns and tax benefits may vary. We recommend consulting with a tax professional.
                    </p>
                  </div>
                </div>
                
                {selectedProject.availability !== 'Sold' && (
                  <div className="text-center">
                    <button 
                      onClick={() => {
                        setContactForm(prev => ({ ...prev, projectId: selectedProject.id }));
                        setSelectedProject(null);
                        document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="btn btn-primary mr-4"
                    >
                      Connect with Us if Interested
                    </button>
                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="btn btn-outline"
                    >
                      Close Details
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Contact Form */}
      <section id="contact-form" className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Connect with Us</h2>
              <p className="text-lg text-gray-600">
                Interested in one of our investment opportunities? Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            {formSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-green-50 border border-green-200 rounded-lg p-8 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6">
                  <Send className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-green-700 mb-4">Message Sent!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for your interest in our investment opportunities. Our team will review your inquiry and contact you within 24 hours.
                </p>
                <button 
                  onClick={() => setFormSubmitted(false)}
                  className="btn btn-primary"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-md p-8"
              >
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={contactForm.name}
                        onChange={handleContactChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={contactForm.email}
                        onChange={handleContactChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={contactForm.phone}
                      onChange={handleContactChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  
                  {contactForm.projectId && (
                    <div className="bg-primary-50 p-4 rounded-lg border border-primary-200">
                      <p className="text-sm text-primary-700">
                        <strong>Project of Interest:</strong> {investmentProjects.find(p => p.id === contactForm.projectId)?.title}
                      </p>
                    </div>
                  )}
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={contactForm.message}
                      onChange={handleContactChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Tell us about your investment goals, timeline, and any specific questions about the project..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <button type="submit" className="btn btn-primary w-full">
                      Send Message
                    </button>
                  </div>
                  
                  <p className="text-sm text-gray-500">
                    By submitting this form, you agree to our privacy policy and consent to be contacted regarding investment opportunities.
                  </p>
                </form>
              </motion.div>
            )}
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
            <h2 className="text-3xl font-bold mb-6">Ready to Invest in Solar?</h2>
            <p className="text-xl mb-8 opacity-90">
              Don't miss out on these limited investment opportunities. Contact us today to learn more about how solar can transform your tax strategy and generate passive income.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#contact-form" className="btn bg-white text-primary-700 hover:bg-gray-100">
                Get More Information
              </a>
              <Link to="/tax-credits" className="btn bg-transparent border border-white hover:bg-white/10">
                Learn About Tax Benefits
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default InvestmentOpportunitiesPage;