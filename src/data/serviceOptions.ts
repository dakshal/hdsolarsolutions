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
  upfrontCost: string;
  paybackPeriod?: string;
  termLength?: string;
  taxBenefits: boolean;
  maintenanceIncluded: boolean;
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
    upfrontCost: 'Full system cost',
    paybackPeriod: '6-7 years',
    taxBenefits: true,
    maintenanceIncluded: false,
    benefits: [
      'Complete ownership of your solar system',
      'Maximum long-term savings and future cost savings',
      'Immediate eligibility for Investment Tax Credit (ITC)',
      'Increase in property value',
      'Full eligibility for tax incentives and rebates',
      'No monthly payments for solar energy',
      'Fixed energy costs for decades'
    ],
    process: [
      {
        title: 'Initial Consultation',
        description: 'We\'ll discuss your energy needs, analyze your electricity usage, assess your property for solar suitability, and conduct a roof inspection.',
        leadTime: '1 week'
      },
      {
        title: 'Custom Design',
        description: 'Our engineers will design a custom solar system optimized for your property and energy requirements.',
        leadTime: '1-2 weeks'
      },
      {
        title: 'Proposal and Contract',
        description: 'We\'ll present a detailed proposal with pricing, savings estimates, and system specifications.',
        leadTime: '1-2 weeks'
      },
      {
        title: 'Permitting',
        description: 'We handle all necessary permits and approvals from local authorities.',
        leadTime: '2-4 weeks'
      },
      {
        title: 'Installation',
        description: 'Our certified technicians will install your solar system with minimal disruption.',
        leadTime: '3-4 weeks'
      },
      {
        title: 'Inspection',
        description: 'System will be inspected by local authorities and utility company.',
        leadTime: '3-4 weeks'
      },
      {
        title: 'System Activation',
        description: 'Your solar system goes live! Start generating clean energy and saving money.',
        leadTime: '1 day'
      }
    ],
    documentation: [
      '3 years of tax returns',
      'Proof of property ownership or landlord approval',
      'Recent electric bills (12 months preferred)',
      'Photo ID',
      'Tax information for credit applications'
    ],
    reduction: {
      min: 70,
      max: 100
    }
  },
  {
    id: 'lease',
    name: 'Solar Lease',
    description: '$0 upfront cost with fixed monthly payments, typically offering a 25% discount to your current electricity bill. Maintenance included through solar panel\'s life of 25 years.',
    upfrontCost: '$0',
    termLength: 'upto 25 years',
    taxBenefits: false,
    maintenanceIncluded: true,
    benefits: [
      '$0 upfront costs',
      'Fixed monthly payments',
      '25% discount to current electricity bill',
      'Operation & Maintenance (O&M) included',
      'No tax benefits (retained by system owner)',
      'Performance guarantees',
      'Potential to transfer lease if you sell your home'
    ],
    process: [
      {
        title: 'Initial Consultation',
        description: 'We\'ll assess your energy needs, evaluate your property\'s solar potential, and conduct a roof inspection.',
        leadTime: '1 week'
      },
      {
        title: 'Custom Design',
        description: 'Our team will design a system to maximize your energy production and savings.',
        leadTime: '1-2 weeks'
      },
      {
        title: 'Lease Agreement',
        description: 'Review and sign a solar lease agreement with clear terms and payment schedule.',
        leadTime: '1-2 weeks'
      },
      {
        title: 'Permitting',
        description: 'We handle all necessary permits and approvals.',
        leadTime: '2-4 weeks'
      },
      {
        title: 'Installation',
        description: 'Professional installation of your leased solar system.',
        leadTime: '3-4 weeks'
      },
      {
        title: 'Inspection',
        description: 'Final inspection and grid connection.',
        leadTime: '3-4 weeks'
      },
      {
        title: 'System Activation',
        description: 'Start enjoying solar power with your new leased system.',
        leadTime: '1 day'
      }
    ],
    documentation: [
      '3 years of tax returns',
      'Proof of property ownership or landlord approval',
      'Recent electric bills (at least 6 months)',
      'Photo ID',
      'Proof of income or employment',
      'Credit check authorization'
    ],
    reduction: {
      min: 25,
      max: 25
    }
  },
  {
    id: 'ppa',
    name: 'Power Purchase Agreement (PPA)',
    description: '$0 upfront cost. Pay only for the electricity generated by your solar system at rates lower than utility prices. O&M included through out the life of solar panel upto 25 years.',
    upfrontCost: '$0',
    termLength: 'upto 25 years',
    taxBenefits: false,
    maintenanceIncluded: true,
    benefits: [
      '$0 upfront costs',
      'Pay only if the power produced',
      '25% utility bill reduction',
      'Operation & Maintenance (O&M) included',
      'No maintenance responsibilities',
      'Performance guarantees',
      'Predictable energy costs'
    ],
    process: [
      {
        title: 'Energy Assessment',
        description: 'We analyze your energy consumption, site conditions, and conduct a roof inspection.',
        leadTime: '1 week'
      },
      {
        title: 'System Design',
        description: 'Custom system design to optimize production.',
        leadTime: '1-2 weeks'
      },
      {
        title: 'PPA Contract',
        description: 'Review and sign PPA with clear pricing and terms.',
        leadTime: '1-2 weeks'
      },
      {
        title: 'Permitting',
        description: 'We manage all permitting requirements.',
        leadTime: '2-4 weeks'
      },
      {
        title: 'Installation',
        description: 'Professional installation of the PPA solar system.',
        leadTime: '3-4 weeks'
      },
      {
        title: 'Inspection',
        description: 'Final inspection and utility interconnection.',
        leadTime: '3-4 weeks'
      },
      {
        title: 'System Activation',
        description: 'Begin generating clean energy and paying only for what you produce.',
        leadTime: '1 day'
      }
    ],
    documentation: [
      '3 years of tax returns',
      'Proof of property ownership',
      'Recent electric bills (6 months preferred)',
      'Photo ID',
      'Credit check authorization',
      'Proof of income (for some providers)'
    ],
    reduction: {
      min: 25,
      max: 25
    }
  },
  {
    id: 'battery',
    name: 'Battery Backup Solutions',
    description: 'Integrated battery systems for EV charging and backup power during outages, seamlessly integrating with new or existing solar panel systems.',
    upfrontCost: 'Varies by system size',
    taxBenefits: true,
    maintenanceIncluded: true,
    benefits: [
      'EV car charging solutions',
      'Backup power during grid outages for essential appliances',
      'Increase energy independence and resilience',
      'Optimize self-consumption of your solar energy',
      'Potential savings by avoiding peak utility rates (Time-of-Use shifting)',
      'Provides clean, quiet power with no fossil fuels',
      'Seamlessly integrates with new or existing solar panel systems'
    ],
    process: [
      {
        title: 'Backup Needs Consultation',
        description: 'We assess your critical power needs, energy goals, existing electrical setup, and conduct a roof inspection.',
        leadTime: '1 week'
      },
      {
        title: 'System Sizing & Design',
        description: 'Our team designs a battery system appropriately sized for your requirements, integrated with your home and solar array.',
        leadTime: '1-2 weeks'
      },
      {
        title: 'Proposal and Contract',
        description: 'We provide a detailed proposal covering battery specs, costs, and backup performance expectations.',
        leadTime: '1-2 weeks'
      },
      {
        title: 'Electrical Permitting',
        description: 'We secure all necessary electrical permits for the battery installation.',
        leadTime: '2-4 weeks'
      },
      {
        title: 'Installation & Integration',
        description: 'Our certified electricians install the battery system and integrate it with your main electrical panel.',
        leadTime: '3-4 weeks'
      },
      {
        title: 'Inspection and Commissioning',
        description: 'The system undergoes a final inspection and we commission it to ensure optimal performance.',
        leadTime: '3-4 weeks'
      },
      {
        title: 'Customer Walkthrough',
        description: 'We demonstrate how to monitor and manage your new battery backup system.',
        leadTime: '1 day'
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
    description: 'We finance projects for PPA, and solar leasing for existing EPC companies, helping maximize tax benefits and project success.',
    upfrontCost: 'Varies by project',
    taxBenefits: true,
    maintenanceIncluded: false,
    benefits: [
      'We finance solar purchase, PPA, and solar leasing',
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
        leadTime: '1 week'
      },
      {
        title: 'Project Due Diligence',
        description: 'We conduct a thorough review of project financials, technical specifications, and legal documentation.',
        leadTime: '1-2 weeks'
      },
      {
        title: 'Financial Modeling & Structuring',
        description: 'Our team models the project\'s financial outcomes and structures the optimal tax equity deal.',
        leadTime: '1-2 weeks'
      },
      {
        title: 'Partnership Agreement',
        description: 'Drafting and execution of a comprehensive legal agreement defining roles, responsibilities, and returns.',
        leadTime: '2-4 weeks'
      },
      {
        title: 'Funding & Project Execution',
        description: 'Collaboration through the project lifecycle to ensure all financial and regulatory milestones are met.',
        leadTime: '3-4 weeks'
      },
      {
        title: 'Incentive Monetization & Reporting',
        description: 'Managing the claim process for tax benefits and handling all long-term compliance and reporting.',
        leadTime: '3-4 weeks'
      },
      {
        title: 'Project Completion',
        description: 'Final project delivery and transition to long-term operation and maintenance phase.',
        leadTime: '1 day'
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