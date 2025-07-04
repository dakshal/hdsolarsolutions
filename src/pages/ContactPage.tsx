import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, Upload } from 'lucide-react';
import { territories } from '../data/territoryData';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    state: '',
    service: '',
    message: '',
    monthlyBill: '',
  });

  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setUploadedFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData, 'Files:', uploadedFiles);
    setFormSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      state: '',
      service: '',
      message: '',
      monthlyBill: '',
    });
    setUploadedFiles([]);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 to-secondary-800 text-white pt-32 pb-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Ready to start your solar journey? Reach out to our team for a free consultation and quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our solar experts are ready to answer your questions and help you find the perfect solar solution for your needs.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a href="tel:+15163959279" className="text-gray-600 hover:text-primary-600 transition-colors">
                      (516) 395-9279
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:info@hdsolarsolutions.com" className="text-gray-600 hover:text-primary-600 transition-colors">
                      info@hdsolarsolutions.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Office</h3>
                    <address className="text-gray-600 not-italic">
                      1706 S Shore ct<br />
                      Pittsburgh, PA, 15203
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold mb-3">Service Areas</h3>
                <p className="text-gray-600 mb-4">
                  <strong>We are open to doing projects anywhere in the U.S.</strong><br />
                  Our primary focus is in these 6 states:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {territories.map((territory) => (
                    <div key={territory.id} className="bg-white px-3 py-2 rounded border border-gray-200 text-sm text-center">
                      {territory.name}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6">
                    <Send className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-700 mb-4">Message Sent!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out! Our team will review your inquiry and get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="btn btn-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-bold mb-6">Request a Quote</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Fill out the form below and one of our solar consultants will contact you to discuss your options.
                  </p>
                  
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
                        <label htmlFor="monthlyBill" className="block text-sm font-medium text-gray-700 mb-1">
                          Average Monthly Electric Bill
                        </label>
                        <input
                          type="text"
                          id="monthlyBill"
                          name="monthlyBill"
                          value={formData.monthlyBill}
                          onChange={handleChange}
                          placeholder="e.g. $150"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                        Property Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                          State *
                        </label>
                        <select
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                        >
                          <option value="">Select a state</option>
                          {territories.map((territory) => (
                            <option key={territory.id} value={territory.id}>
                              {territory.name}
                            </option>
                          ))}
                          <option value="other">Other (Outside Primary Focus Area)</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                          Interested In *
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                        >
                          <option value="">Select an option</option>
                          <option value="buyout">Solar Buy Out</option>
                          <option value="lease">Solar Lease</option>
                          <option value="ppa">Power Purchase Agreement</option>
                          <option value="residential">Residential Solar</option>
                          <option value="commercial">Commercial Solar</option>
                          <option value="nonprofit">Non-Profit Solar</option>
                          <option value="battery">Battery Backup</option>
                          <option value="taxcredits">Tax Credits & Investment</option>
                          <option value="epc">EPC Collaboration</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Document Upload Section */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Upload Your Documents for Faster Processing
                      </label>
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
                        <p className="text-sm text-gray-600 mb-3">Please upload the following documents:</p>
                        <ul className="text-sm text-gray-600 space-y-1 mb-4">
                          <li>• Past 6 months of your property's utility bills</li>
                          <li>• Your last 3 years of federal and state tax returns (for business/investor verification)</li>
                          <li>• Proof of property ownership (e.g., deed or title document)</li>
                        </ul>
                        <div className="flex items-center justify-center w-full">
                          <label htmlFor="file-upload" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                              <Upload className="w-8 h-8 mb-4 text-gray-500" />
                              <p className="mb-2 text-sm text-gray-500">
                                <span className="font-semibold">Click to upload</span> or drag and drop
                              </p>
                              <p className="text-xs text-gray-500">PDF, DOC, DOCX, JPG, PNG (MAX. 10MB each)</p>
                            </div>
                            <input 
                              id="file-upload" 
                              type="file" 
                              className="hidden" 
                              multiple
                              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                              onChange={handleFileUpload}
                            />
                          </label>
                        </div>
                      </div>
                      
                      {uploadedFiles.length > 0 && (
                        <div className="space-y-2">
                          <p className="text-sm font-medium text-gray-700">Uploaded Files:</p>
                          {uploadedFiles.map((file, index) => (
                            <div key={index} className="flex items-center justify-between bg-white p-2 rounded border border-gray-200">
                              <span className="text-sm text-gray-600">{file.name}</span>
                              <button
                                type="button"
                                onClick={() => removeFile(index)}
                                className="text-red-500 hover:text-red-700 text-sm"
                              >
                                Remove
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Additional Information
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Tell us about your project, tax situation, or any specific questions you have..."
                      ></textarea>
                    </div>
                    
                    <div>
                      <button type="submit" className="btn btn-primary w-full">
                        Submit Request
                      </button>
                    </div>
                    
                    <p className="text-sm text-gray-500">
                      By submitting this form, you agree to our privacy policy and consent to be contacted regarding our services.
                    </p>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Documents Required Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Required Documentation</h2>
            <p className="text-lg text-gray-600">
              To expedite your solar installation process, please be prepared to provide the following documents based on your chosen financing option.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card"
            >
              <h3 className="text-xl font-semibold mb-4">For Buy Out</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">•</span>
                  <span><strong>3 years of tax returns</strong></span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Proof of property ownership</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Recent electric bills (12 months preferred)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Photo ID</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Tax information for credit applications</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card"
            >
              <h3 className="text-xl font-semibold mb-4">For Lease</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">•</span>
                  <span><strong>3 years of tax returns</strong></span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Proof of property ownership</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Recent electric bills (at least 6 months)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Photo ID</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Proof of income or employment</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Credit check authorization</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="card"
            >
              <h3 className="text-xl font-semibold mb-4">For PPA</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">•</span>
                  <span><strong>3 years of tax returns</strong></span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Proof of property ownership</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Recent electric bills (12 months preferred)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Photo ID</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Credit check authorization</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="mt-12 p-6 bg-primary-50 rounded-lg border border-primary-100 max-w-3xl mx-auto">
            <p className="text-center text-gray-700">
              Don't worry if you don't have all these documents ready. Our team will guide you through the process and help you gather what's needed at each stage.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;