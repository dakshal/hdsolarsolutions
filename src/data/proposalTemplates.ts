export interface ProposalTemplate {
  id: string;
  title: string;
  audience: string;
  projectDetails: {
    systemSize: string;
    equipment?: string;
    yearOneProduction: number;
  };
  financialModel: {
    grossCost: number;
    federalITC: number;
    netCost: number;
    annualSavings: number;
    depreciationSavings?: number;
    bonusAdder?: number;
    totalYearOneBenefits?: number;
    atRiskCapital?: number;
  };
  keyMetrics: {
    paybackPeriod: string;
    projectIRR?: string;
    netSavings: string;
  };
  revenueStreams?: {
    energySavings?: number;
    ppaIncome?: number;
    srecIncome?: number;
  };
}

export const proposalTemplates: ProposalTemplate[] = [
  {
    id: 'residential-10kw',
    title: '10kW Residential Solar System - New Jersey',
    audience: 'A homeowner in New Jersey',
    projectDetails: {
      systemSize: '10 kW DC',
      equipment: '25 x 400W panels',
      yearOneProduction: 12500
    },
    financialModel: {
      grossCost: 30000,
      federalITC: 9000,
      netCost: 21000,
      annualSavings: 2520
    },
    keyMetrics: {
      paybackPeriod: '8.3 years',
      netSavings: '~$85,000 over 25 years'
    }
  },
  {
    id: 'commercial-100kw',
    title: '100kW Commercial Solar System - Maryland',
    audience: 'A for-profit business owner in Maryland with high tax liability',
    projectDetails: {
      systemSize: '100 kW DC',
      yearOneProduction: 110000
    },
    financialModel: {
      grossCost: 250000,
      federalITC: 75000,
      depreciationSavings: 62900,
      totalYearOneBenefits: 137900,
      atRiskCapital: 112100,
      netCost: 112100,
      annualSavings: 14400
    },
    keyMetrics: {
      paybackPeriod: '4-5 years',
      projectIRR: '~28%',
      netSavings: '~$450,000 over 25 years'
    },
    revenueStreams: {
      energySavings: 10000,
      srecIncome: 4400
    }
  },
  {
    id: 'nonprofit-300kw',
    title: '300kW Non-Profit Solar System - Virginia',
    audience: 'A third-party investor funding a project for a non-profit (e.g., a school) in Virginia',
    projectDetails: {
      systemSize: '300 kW DC',
      yearOneProduction: 330000
    },
    financialModel: {
      grossCost: 660000,
      federalITC: 198000,
      bonusAdder: 66000,
      depreciationSavings: 140896,
      totalYearOneBenefits: 404896,
      atRiskCapital: 255104,
      netCost: 255104,
      annualSavings: 49500
    },
    keyMetrics: {
      paybackPeriod: '~4 years',
      projectIRR: '~32%',
      netSavings: '~$1.8 Million over 25 years'
    },
    revenueStreams: {
      ppaIncome: 39600,
      srecIncome: 9900
    }
  }
];