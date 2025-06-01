import { Home, Building2, Landmark } from 'lucide-react';

export type MarketSegment = {
  id: string;
  name: string;
  icon: Icon;
  summary: string;
  features: string[];
  details: Detail;
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
      'Systems sized from 5kW to 15kW',
      'Rooftop and ground mount options',
      'Battery backup available',
      'Average payback period: 5-8 years'
    ],
    details: {
      imageUrl: 'https://images.pexels.com/photos/433309/pexels-photo-433309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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
      'Systems from 50kW to 1MW+',
      'Rooftop, ground mount, and carport options',
      'Customized energy storage solutions',
      'Average payback period: 4-7 years'
    ],
    details: {
      imageUrl: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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
    id: 'government',
    name: 'Government',
    icon: Landmark,
    summary: 'Helping public institutions achieve energy independence, meet renewable energy mandates, and save taxpayer dollars on energy costs.',
    features: [
      'Systems sized for municipal needs',
      'Innovative financing options for public entities',
      'Microgrid and resilience solutions',
      'Average payback period: 5-10 years'
    ],
    details: {
      imageUrl: 'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Resilient and Sustainable Public Infrastructure',
      description: 'We partner with federal, state, and local government entities to deploy reliable and cost-effective solar energy solutions. Our projects help public institutions reduce their carbon footprint, achieve energy security, and redirect budget savings to essential public services. We are experienced in navigating government procurement processes and securing specialized financing.',
      keyOfferings: [
        { name: 'Power Purchase Agreements (PPAs)', description: 'Install solar with no upfront capital expenditure and simply purchase the clean energy at a reduced rate.' },
        { name: 'Energy Resilience', description: 'Incorporate battery storage and microgrids to ensure critical facilities remain powered during grid outages.' },
        { name:'Regulatory Compliance', description: 'Meet clean energy mandates and sustainability goals with verifiable renewable energy projects.' },
        { name: 'Community Solar Programs', description: 'Develop projects that allow local residents and businesses to benefit from clean energy savings.' },
      ]
    }
  }
];