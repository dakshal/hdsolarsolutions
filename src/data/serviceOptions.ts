export type ServiceOption = {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  process: ProcessStep[];
  documentation: string[];
  reduction: {
    min: number;
    max: number;
  };
};

export type ProcessStep = {
  title: string;
  description: string;
  leadTime?: string;
};

export const serviceOptions: ServiceOption[] = [
  {
    id: 'buyout',
    name: 'Solar Buy Out',
    description: 'Purchase your solar system outright and enjoy maximum long-term savings. Own your energy production with zero monthly payments after the initial investment.',
    benefits: [
      'Complete ownership of your solar system',
      'Maximum long-term savings',
      'Increase in property value',
      'Full eligibility for tax incentives and rebates',
      'No monthly payments for solar energy',
      'Fixed energy costs for decades'
    ],
    process: [
      {
        title: 'Initial Consultation',
        description: 'We\'ll discuss your energy needs, analyze your electricity usage, and assess your property for solar suitability.',
        leadTime: '1-2 days'
      },
      {
        title: 'Custom Design',
        description: 'Our engineers will design a custom solar system optimized for your property and energy requirements.',
        leadTime: '3-5 days'
      },
      {
        title: 'Proposal and Contract',
        description: 'We\'ll present a detailed proposal with pricing, savings estimates, and system specifications.',
        leadTime: '1-2 days'
      },
      {
        title: 'Permitting',
        description: 'We handle all necessary permits and approvals from local authorities.',
        leadTime: '2-4 weeks'
      },
      {
        title: 'Installation',
        description: 'Our certified technicians will install your solar system with minimal disruption.',
        leadTime: '1-3 days'
      },
      {
        title: 'Inspection and Interconnection',
        description: 'System will be inspected and connected to the grid with your utility company.',
        leadTime: '1-3 weeks'
      },
      {
        title: 'System Activation',
        description: 'Your solar system goes live! Start generating clean energy and saving money.',
        leadTime: '1 day'
      }
    ],
    documentation: [
      'Proof of property ownership or landlord approval',
      'Recent electric bills (12 months preferred)',
      'Photo ID',
      'Tax information for credit applications',
      'Roof information (age, material, warranty if available)'
    ],
    reduction: {
      min: 70,
      max: 100
    }
  },
  {
    id: 'lease',
    name: 'Solar Lease',
    description: 'Lease a solar system with fixed monthly payments, typically lower than your current electric bill. Enjoy the benefits of solar with zero or low upfront costs.',
    benefits: [
      'Zero or low upfront costs',
      'Fixed monthly payments',
      'Reduced electricity bills',
      'Maintenance included',
      'Performance guarantees',
      'Potential to transfer lease if you sell your home'
    ],
    process: [
      {
        title: 'Initial Consultation',
        description: 'We\'ll assess your energy needs and evaluate your property\'s solar potential.',
        leadTime: '1-2 days'
      },
      {
        title: 'Custom Design',
        description: 'Our team will design a system to maximize your energy production and savings.',
        leadTime: '3-5 days'
      },
      {
        title: 'Lease Agreement',
        description: 'Review and sign a solar lease agreement with clear terms and payment schedule.',
        leadTime: '1-3 days'
      },
      {
        title: 'Permitting',
        description: 'We handle all necessary permits and approvals.',
        leadTime: '2-4 weeks'
      },
      {
        title: 'Installation',
        description: 'Professional installation of your leased solar system.',
        leadTime: '1-3 days'
      },
      {
        title: 'Inspection and Connection',
        description: 'Final inspection and grid connection.',
        leadTime: '1-3 weeks'
      },
      {
        title: 'System Activation',
        description: 'Start enjoying solar power with your new leased system.',
        leadTime: '1 day'
      }
    ],
    documentation: [
      'Proof of property ownership or landlord approval',
      'Recent electric bills (at least 6 months)',
      'Photo ID',
      'Proof of income or employment',
      'Credit check authorization',
      'Roof information (age, material)'
    ],
    reduction: {
      min: 25,
      max: 40
    }
  },
  {
    id: 'ppa',
    name: 'Power Purchase Agreement (PPA)',
    description: 'Pay only for the power your solar system produces at a rate lower than utility prices. No system ownership or maintenance responsibilities.',
    benefits: [
      'No upfront costs',
      'Pay only for the power produced',
      'Lower rate than utility prices',
      'No maintenance responsibilities',
      'Performance guarantees',
      'Predictable energy costs'
    ],
    process: [
      {
        title: 'Energy Assessment',
        description: 'We analyze your energy consumption and site conditions.',
        leadTime: '1-2 days'
      },
      {
        title: 'System Design',
        description: 'Custom system design to optimize production.',
        leadTime: '3-5 days'
      },
      {
        title: 'PPA Contract',
        description: 'Review and sign PPA with clear pricing and terms.',
        leadTime: '1-3 days'
      },
      {
        title: 'Permitting',
        description: 'We manage all permitting requirements.',
        leadTime: '2-4 weeks'
      },
      {
        title: 'Installation',
        description: 'Professional installation of the PPA solar system.',
        leadTime: '1-3 days'
      },
      {
        title: 'Inspection and Grid Connection',
        description: 'Final inspection and utility interconnection.',
        leadTime: '1-3 weeks'
      },
      {
        title: 'System Activation',
        description: 'Begin generating clean energy and paying only for what you produce.',
        leadTime: '1 day'
      }
    ],
    documentation: [
      'Proof of property ownership',
      'Recent electric bills (12 months preferred)',
      'Photo ID',
      'Credit check authorization',
      'Proof of income (for some providers)',
      'Roof information (age, material, warranty)'
    ],
    reduction: {
      min: 25,
      max: 40
    }
  },
  {
    id: 'battery',
    name: 'Battery Backup Solutions',
    description: 'Integrated battery systems to power your home during outages and charge your EV efficiently.',
    benefits: [
      'Maintain power during grid outages for essential appliances',
      'Increase energy independence and resilience',
      'Optimize self-consumption of your solar energy',
      'Potential savings by avoiding peak utility rates (Time-of-Use shifting)',
      'Provides clean, quiet power with no fossil fuels',
      'Seamlessly integrates with new or existing solar panel systems'
    ],
    process: [
      {
        title: 'Backup Needs Consultation',
        description: 'We assess your critical power needs, energy goals, and existing electrical setup.',
        leadTime: '1-2 days'
      },
      {
        title: 'System Sizing & Design',
        description: 'Our team designs a battery system appropriately sized for your requirements, integrated with your home and solar array.',
        leadTime: '2-4 days'
      },
      {
        title: 'Proposal and Contract',
        description: 'We provide a detailed proposal covering battery specs, costs, and backup performance expectations.',
        leadTime: '1-2 days'
      },
      {
        title: 'Electrical Permitting',
        description: 'We secure all necessary electrical permits for the battery installation.',
        leadTime: '1-3 weeks'
      },
      {
        title: 'Installation & Integration',
        description: 'Our certified electricians install the battery system and integrate it with your main electrical panel.',
        leadTime: '1-2 days'
      },
      {
        title: 'Inspection and Commissioning',
        description: 'The system undergoes a final inspection and we commission it to ensure optimal performance.',
        leadTime: '1-2 weeks'
      },
      {
        title: 'Customer Walkthrough',
        description: 'We demonstrate how to monitor and manage your new battery backup system.',
        leadTime: '1 hour'
      }
    ],
    documentation: [
      'Proof of property ownership',
      'Recent electric bills (to analyze usage patterns)',
      'Photo ID',
      'Details of main electrical panel',
      'Specifications of existing solar system (if applicable)'
    ],
    reduction: {
      min: 0,
      max: 20
    }
  },
  {
    id: 'collaborations',
    name: 'EPC Collaborations',
    description: 'Strategic partnerships with existing solar EPC companies to maximize tax benefits and project success.',
    benefits: [
      'Unlock project financing through specialized tax equity partnerships',
      'Maximize project profitability by monetizing federal tax credits (ITC)',
      'Reduce financial risk and capital requirements for large-scale projects',
      'Access to a network of financial institutions and renewable energy investors',
      'Expertise in navigating complex tax law and financial structuring',
      'Co-development opportunities to expand your project pipeline'
    ],
    process: [
      {
        title: 'Initial Partnership Inquiry',
        description: 'Prospective EPC partners submit their project portfolio or specific financing needs for review.',
        leadTime: '1-3 days'
      },
      {
        title: 'Project Due Diligence',
        description: 'We conduct a thorough review of project financials, technical specifications, and legal documentation.',
        leadTime: '1-2 weeks'
      },
      {
        title: 'Financial Modeling & Structuring',
        description: 'Our team models the project\'s financial outcomes and structures the optimal tax equity deal.',
        leadTime: '1 week'
      },
      {
        title: 'Partnership Agreement',
        description: 'Drafting and execution of a comprehensive legal agreement defining roles, responsibilities, and returns.',
        leadTime: '1-2 weeks'
      },
      {
        title: 'Funding & Project Execution',
        description: 'Collaboration through the project lifecycle to ensure all financial and regulatory milestones are met.',
        leadTime: 'Project Duration'
      },
      {
        title: 'Incentive Monetization & Reporting',
        description: 'Managing the claim process for tax benefits and handling all long-term compliance and reporting.',
        leadTime: 'Ongoing'
      }
    ],
    documentation: [
      'Corporate Profile & Financial Statements',
      'Detailed Project Proposals (including technical specs and site plans)',
      'Financial Pro-Forma models for each project',
      'Executed Power Purchase Agreements (PPAs)',
      'Utility Interconnection Agreements',
      'Evidence of Site Control (deeds, leases, etc.)'
    ],
    reduction: {
      min: 0,
      max: 0
    }
  }
];