import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Award, DollarSign, Clock, CheckCircle2, Target, Zap, FileText, Send } from 'lucide-react';

const SalesRepPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    experience: '',
    resume: null,
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    setFormSubmitted(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
      experience: '',
      resume: null,
      message: ''
    });
  };

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
      <section className="bg-gradient-to-br from-primary-800 to-secondary-800 text-white pt-32 pb-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Become an Independent Sales Representative for H&D Solar Solution
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Join a leading team in the commercial solar sector and earn significant commissions by helping businesses and investors achieve their financial goals. We provide the support and framework for your success.
            </p>
          </div>
        </div>
      </section>

      {/* Key Principle Section */}
      <section className="section bg-primary-50">
        <div className="container-custom">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-primary-500">
              <div className="flex items-center justify-center mb-6">
                <Target className="w-12 h-12 text-primary-600 mr-4" />
                <h2 className="text-3xl font-bold text-primary-700">Our Core Principle</h2>
              </div>
              <p className="text-xl text-gray-700 mb-4">
                <strong>"The more you involve yourself, the more you get paid."</strong>
              </p>
              <p className="text-lg text-gray-600">
                This opportunity is designed for motivated individuals looking for <strong>extra income</strong> through flexible, performance-based compensation in the rapidly growing solar industry.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Commission Structure */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold mb-4">Lucrative, Performance-Based Commissions</h2>
            <p className="text-lg text-gray-600">
              Our commission structure is designed to reward your efforts and expertise.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-md overflow-hidden max-w-4xl mx-auto mb-12"
          >
            <div className="bg-primary-600 text-white p-6">
              <h3 className="text-2xl font-semibold text-center">Commission Structure</h3>
              <p className="text-center mt-2 opacity-90">Commissions start at 5% and can increase to 10%</p>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600 mb-2">5-10%</div>
                  <div className="text-sm text-gray-600">Commission Range</div>
                  <div className="text-xs text-gray-500 mt-1">Based on project size & complexity</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600 mb-2">One-Time</div>
                  <div className="text-sm text-gray-600">Referral Fee</div>
                  <div className="text-xs text-gray-500 mt-1">Per project completion</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600 mb-2">18 Weeks</div>
                  <div className="text-sm text-gray-600">Payment Timeline</div>
                  <div className="text-xs text-gray-500 mt-1">Upon project installation</div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border border-green-200 mb-6">
                <h4 className="font-semibold mb-3 text-green-700">Example Scenario (100kW Project):</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600">Total Project Cost: <span className="font-medium">$250,000</span></div>
                    <div className="text-sm text-gray-600">Commission @ 5%: <span className="font-medium text-green-600">$12,500</span></div>
                    <div className="text-sm text-gray-600">Commission @ 10%: <span className="font-medium text-green-600">$25,000</span></div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Quarterly Projects (4/year): <span className="font-medium">$50,000 - $100,000</span></div>
                    <div className="text-sm text-gray-600">Annual Potential: <span className="font-medium text-green-600">$50,000 - $100,000+</span></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold mb-2">Additional Extra Income Opportunities:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Quarterly bonuses for exceeding targets</li>
                  <li>• Referral bonuses for recruiting new sales representatives</li>
                  <li>• Special promotions for selling specific product packages</li>
                  <li>• Annual retreats and recognition for top performers</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 12-Month Income Example */}
          <div className="bg-primary-50 rounded-xl p-8 border border-primary-200 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 text-center text-primary-700">12-Month Income Potential</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-white">
                    <th className="py-3 px-4 text-left font-semibold">Quarter</th>
                    <th className="py-3 px-4 text-center font-semibold">Project Size</th>
                    <th className="py-3 px-4 text-center font-semibold">Commission Rate</th>
                    <th className="py-3 px-4 text-center font-semibold">Earnings</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="py-3 px-4">Q1</td>
                    <td className="py-3 px-4 text-center">50kW ($125,000)</td>
                    <td className="py-3 px-4 text-center">5%</td>
                    <td className="py-3 px-4 text-center font-medium">$6,250</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4">Q2</td>
                    <td className="py-3 px-4 text-center">100kW ($250,000)</td>
                    <td className="py-3 px-4 text-center">7%</td>
                    <td className="py-3 px-4 text-center font-medium">$17,500</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3 px-4">Q3</td>
                    <td className="py-3 px-4 text-center">150kW ($375,000)</td>
                    <td className="py-3 px-4 text-center">8%</td>
                    <td className="py-3 px-4 text-center font-medium">$30,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4">Q4</td>
                    <td className="py-3 px-4 text-center">200kW ($500,000)</td>
                    <td className="py-3 px-4 text-center">10%</td>
                    <td className="py-3 px-4 text-center font-medium">$50,000</td>
                  </tr>
                  <tr className="bg-primary-100 font-semibold">
                    <td className="py-3 px-4">Total</td>
                    <td className="py-3 px-4 text-center">500kW ($1,250,000)</td>
                    <td className="py-3 px-4 text-center">-</td>
                    <td className="py-3 px-4 text-center">$103,750</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold mb-4">Your Path to Becoming a Sales Rep</h2>
            <p className="text-lg text-gray-600">
              To join our network of independent sales representatives, you must complete the following steps. Please have your documents handy for faster processing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="card text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Submit Information</h3>
              <p className="text-gray-600 text-sm">Fill out our online contact form with your details</p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="card text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Provide Documents</h3>
              <p className="text-gray-600 text-sm">Valid ID and completed W-4 form required</p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.4 }}
              className="card text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Sign Agreements</h3>
              <p className="text-gray-600 text-sm">NDA to protect proprietary information and client data</p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.6 }}
              className="card text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 mb-4">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Start Earning</h3>
              <p className="text-gray-600 text-sm">Begin generating leads and earning commissions</p>
            </motion.div>
          </div>

          <div className="text-center">
            <a href="#application-form" className="btn btn-primary text-lg px-8 py-4">
              Contact Us to Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Ideal Candidate Profile */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold mb-4">Profile of Our Ideal Sales Representative</h2>
            <p className="text-lg text-gray-600">
              We're looking for motivated individuals with the following qualities and experience who want to earn extra income.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-xl shadow-md p-8 h-full">
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <Users className="w-6 h-6 text-primary-600 mr-2" />
                  Required Qualities
                </h3>
                
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 mr-3 mt-0.5" />
                    <span className="text-gray-600">
                      <strong>Self-Motivated:</strong> Ability to work independently and stay driven without direct supervision - essential for earning extra income
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 mr-3 mt-0.5" />
                    <span className="text-gray-600">
                      <strong>Excellent Communication:</strong> Strong interpersonal skills and ability to explain complex concepts simply
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 mr-3 mt-0.5" />
                    <span className="text-gray-600">
                      <strong>Networking Skills:</strong> Ability to build and maintain a network of potential customers for consistent extra income
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 mr-3 mt-0.5" />
                    <span className="text-gray-600">
                      <strong>Tech-Savvy:</strong> Comfort with using digital tools, CRM systems, and presentation software
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 mr-3 mt-0.5" />
                    <span className="text-gray-600">
                      <strong>Integrity:</strong> Commitment to ethical sales practices and customer satisfaction
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-xl shadow-md p-8 h-full">
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <Award className="w-6 h-6 text-primary-600 mr-2" />
                  Preferred Experience
                </h3>
                
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 mr-3 mt-0.5" />
                    <span className="text-gray-600">
                      <strong>Sales Background:</strong> Previous experience in sales, particularly in home improvement, energy, or B2C products
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 mr-3 mt-0.5" />
                    <span className="text-gray-600">
                      <strong>Industry Knowledge:</strong> Familiarity with renewable energy, solar technology, or sustainability (training provided)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 mr-3 mt-0.5" />
                    <span className="text-gray-600">
                      <strong>Local Market Knowledge:</strong> Understanding of the local community and existing network of contacts
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 mr-3 mt-0.5" />
                    <span className="text-gray-600">
                      <strong>Educational Background:</strong> Degree in business, marketing, or engineering is a plus but not required
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 mr-3 mt-0.5" />
                    <span className="text-gray-600">
                      <strong>Entrepreneurial Spirit:</strong> Experience running your own business or working in a commission-based role for extra income
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold mb-4">Apply for Extra Income Opportunity</h2>
            <p className="text-lg text-gray-600">
              Ready to start earning extra income as a solar sales representative? Complete the application form below.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
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
                <h3 className="text-2xl font-bold text-green-700 mb-4">Application Received!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for your interest in our extra income opportunity. We'll review your application and contact you within 2-3 business days to discuss next steps.
                </p>
                <button 
                  onClick={() => setFormSubmitted(false)}
                  className="btn btn-primary"
                >
                  Submit Another Application
                </button>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-md p-8"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
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
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                        Location (City, State) *
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                      Sales Experience *
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select your experience level</option>
                      <option value="none">No sales experience</option>
                      <option value="1-2">1-2 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5+">5+ years</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                      Resume/CV (PDF, DOC, DOCX)
                    </label>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Why are you interested in this extra income opportunity? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Tell us about your motivation for earning extra income and how much time you can dedicate..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <button type="submit" className="btn btn-primary w-full">
                      Submit Application
                    </button>
                  </div>
                  
                  <p className="text-sm text-gray-500">
                    By submitting this application, you consent to our review of your information for this extra income opportunity.
                  </p>
                </form>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about the extra income sales representative opportunity.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-lg border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold mb-2">Is this a full-time position?</h3>
                <p className="text-gray-600">
                  This is an independent contractor position designed for <strong>extra income</strong> with flexible hours. You can work as much or as little as you want, making it perfect for those seeking additional income alongside their current commitments.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-white rounded-lg border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold mb-2">How much extra income can I realistically earn?</h3>
                <p className="text-gray-600">
                  Your extra income depends on how much you involve yourself. Part-time representatives typically earn $500-$2,000 monthly, while those who involve themselves more can earn $3,000-$10,000+ monthly. Remember: the more you involve yourself, the more you get paid.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-white rounded-lg border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold mb-2">Do I need prior solar experience?</h3>
                <p className="text-gray-600">
                  No prior solar experience is required. We provide comprehensive training on our products, solar technology, and sales techniques. However, previous sales experience is beneficial for maximizing your extra income potential.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="bg-white rounded-lg border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold mb-2">How is commission paid?</h3>
                <p className="text-gray-600">
                  Commissions are paid in full upon the completion of the project installation (typically within 18 weeks from the start of construction). The commission is calculated as a percentage of the total system cost and increases as your project size and complexity grows.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="bg-white rounded-lg border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold mb-2">What support will I receive?</h3>
                <p className="text-gray-600">
                  You'll receive comprehensive training, marketing materials, lead generation support, and access to our sales tools and CRM system. You'll also be assigned a dedicated sales manager for ongoing support to help maximize your extra income potential.
                </p>
              </motion.div>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Start Earning Extra Income?</h2>
            <p className="text-xl mb-8 opacity-90">
              Apply today to join our team and start earning extra income in the solar industry. Remember: the more you involve yourself, the more you get paid.
            </p>
            <a href="#application-form" className="btn bg-white text-primary-700 hover:bg-gray-100">
              Apply for Extra Income Opportunity
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SalesRepPage;