import { Home, Building2, Heart } from 'lucide-react';

export type MarketSegment = {
  id: string;
  name: string;
  icon: Icon;
  summary: string;
  features: string[];
  details: Detail;
  systemLimits: {
    min: string;
    max: string;
  };
};

export type Detail = {
  imageUrl: string;
  title: string;
  description: string;
  keyOfferings: KeyOffering[];
}

export type KeyOffering = {
  name: string;
  description: string;
};

export const marketSegments: MarketSegment[] = [
  {
    id: 'residential',
    name: 'Residential',
    icon: Home,
    summary: 'Custom solar solutions for homeowners that reduce electricity bills and increase property value while contributing to a sustainable future.',
    features: [
      'Systems sized from 5kW to 10kW',
      'Rooftop and ground mount options',
      'Battery backup available',
      'Average payback period: 5-7 years'
    ],
    systemLimits: {
      min: '5kW',
      max: '10kW'
    },
    details: {
      imageUrl: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Power Your Home with Clean Energy',
      description: 'Our residential solar solutions are designed to fit your home\'s unique energy needs and your financial goals. We handle everything from the initial consultation and custom design to installation and final inspection. By switching to solar, you not only lock in lower energy costs but also make a significant contribution to a cleaner environment.',
      keyOfferings: [
        { name: 'Custom System Design', description: 'We analyze your energy usage and roof layout to design the most efficient system possible.' },
        { name: 'Tier-1 Equipment', description: 'We use only the highest quality solar panels, inverters, and racking for maximum performance and longevity.' },
        { name: 'Seamless Installation', description: 'Our certified installation teams ensure a safe, clean, and efficient installation process with minimal disruption to your home.' },
        { name: 'Energy Monitoring', description: 'Track your system\'s production in real-time through our intuitive mobile app.' },
      ]
    }
  },
  {
    id: 'commercial',
    name: 'Commercial',
    icon: Building2,
    summary: 'Scalable solar solutions for businesses looking to reduce operating costs, achieve sustainability goals, and enhance brand reputation.',
    features: [
      'Systems from 50kW to 500kW',
      'Rooftop, ground mount, and carport options',
      'Customized energy storage solutions',
      'Average payback period: 4-7 years'
    ],
    systemLimits: {
      min: '50kW',
      max: '500kW'
    },
    details: {
      imageUrl: 'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Smart Energy for Your Business',
      description: 'Lower your operating expenses and demonstrate your commitment to sustainability with our commercial solar solutions. We provide comprehensive energy analysis to design a system that maximizes your return on investment. Solar energy can provide your business with predictable energy costs for decades, protecting you from volatile utility rates.',
      keyOfferings: [
        { name: 'Financial Analysis & ROI', description: 'We provide detailed financial models showing your projected savings, payback period, and long-term ROI.' },
        { name: 'Scalable System Architecture', description: 'Our systems are designed to grow with your business, allowing for future expansion.' },
        { name: 'Accelerated Depreciation (MACRS)', description: 'Benefit from significant tax advantages that can offset a large portion of your initial investment.' },
        { name: 'Public Relations Boost', description: 'Showcase your commitment to corporate social responsibility and attract environmentally-conscious customers.' },
      ]
    }
  },
  {
    id: 'nonprofit',
    name: 'Non-Profit Organizations',
    icon: Heart,
    summary: 'Specialized financing solutions for non-profit organizations to achieve energy independence, reduce operating costs, and redirect savings to mission-critical activities.',
    features: [
      'Systems sized from 250kW to 1MW',
      'Innovative financing options for non-profits',
      'Mission-aligned sustainability solutions',
      'Average payback period: 5-10 years'
    ],
    systemLimits: {
      min: '250kW',
      max: '1MW'
    },
    details: {
      imageUrl: 'https://d3i6fh83elv35t.cloudfront.net/static/2023/12/pentagon-1024x683.jpg',
      title: 'Sustainable Solutions for Non-Profit Organizations',
      description: 'We partner with non-profit organizations to deploy reliable and cost-effective solar energy solutions that align with their mission and values. Our specialized financing options help non-profits reduce their carbon footprint, achieve energy security, and redirect budget savings to essential programs and services. We understand the unique challenges non-profits face and provide tailored solutions.',
      keyOfferings: [
        { name: 'Mission-Aligned Financing', description: 'Specialized financing structures designed specifically for non-profit organizations and their unique constraints.' },
        { name: 'Energy Cost Reduction', description: 'Significant reduction in energy costs allows more resources to be directed toward mission-critical activities.' },
        { name: 'Sustainability Leadership', description: 'Demonstrate environmental stewardship and attract donors who value sustainability initiatives.' },
        { name: 'Community Impact Programs', description: 'Develop projects that can serve as educational tools and community engagement opportunities.' },
      ]
    }
  }
];