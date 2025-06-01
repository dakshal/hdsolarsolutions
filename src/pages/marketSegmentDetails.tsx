import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { marketSegments } from '../data/marketSegments';
import { motion } from 'framer-motion';
import { CheckCircle, Lightbulb, AlertCircle, TrendingUp, ShieldCheck } from 'lucide-react';

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

      {/* In-Depth Look Section */}
      <section className="section bg-gray-50">
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
      <section className="section bg-white">
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