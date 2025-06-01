export type Territory = {
  id: string;
  name: string;
  description: string;
  incentives: string[];
  paybackPeriod: {
    residential: {
      small: number;
      medium: number;
      large: number;
    };
    commercial: {
      small: number;
      medium: number;
      large: number;
    };
  };
};

export const territories: Territory[] = [
  {
    id: 'maryland',
    name: 'Maryland',
    description: 'Our home state with a strong track record of successful solar installations.',
    incentives: [
      'Residential Clean Energy Grant Program',
      'Solar Renewable Energy Credits (SRECs)',
      'Property Tax Exemption',
      'Sales Tax Exemption'
    ],
    paybackPeriod: {
      residential: {
        small: 5.8,
        medium: 5.4,
        large: 5.0,
      },
      commercial: {
        small: 4.9,
        medium: 4.5,
        large: 4.1,
      },
    },
  },
  {
    id: 'newjersey',
    name: 'New Jersey',
    description: 'One of the leading states in solar adoption with excellent incentives.',
    incentives: [
      'Transition Renewable Energy Certificates (TRECs)',
      'Property Tax Exemption',
      'Solar Sales Tax Exemption',
      'Net Metering'
    ],
    paybackPeriod: {
      residential: {
        small: 5.5,
        medium: 5.1,
        large: 4.7,
      },
      commercial: {
        small: 4.7,
        medium: 4.3,
        large: 3.9,
      },
    },
  },
  {
    id: 'pennsylvania',
    name: 'Pennsylvania',
    description: 'Strong solar potential with growing incentive programs and utility support.',
    incentives: [
      'Solar Renewable Energy Credits (SRECs)',
      'Net Metering',
      'Property Tax Assessment Benefits',
      'Local utility rebates'
    ],
    paybackPeriod: {
      residential: {
        small: 6.2,
        medium: 5.8,
        large: 5.4,
      },
      commercial: {
        small: 5.3,
        medium: 4.9,
        large: 4.5,
      },
    },
  },
  {
    id: 'dc',
    name: 'Washington DC',
    description: 'Leading the way in urban solar adoption with strong environmental policies.',
    incentives: [
      'Solar for All Program',
      'DC Solar Renewable Energy Credits (SRECs)',
      'Property Tax Exemption',
      'Solar Advantage Plus Program'
    ],
    paybackPeriod: {
      residential: {
        small: 5.4,
        medium: 5.0,
        large: 4.6,
      },
      commercial: {
        small: 4.6,
        medium: 4.2,
        large: 3.8,
      },
    },
  },
  {
    id: 'delaware',
    name: 'Delaware',
    description: 'Offering attractive solar incentives and strong net metering policies.',
    incentives: [
      'Green Energy Program',
      'Solar Renewable Energy Credits (SRECs)',
      'Net Metering',
      'Property Tax Exemption'
    ],
    paybackPeriod: {
      residential: {
        small: 6.0,
        medium: 5.6,
        large: 5.2,
      },
      commercial: {
        small: 5.1,
        medium: 4.7,
        large: 4.3,
      },
    },
  },
  {
    id: 'virginia',
    name: 'Virginia',
    description: 'Emerging solar market with growing incentives and utility support.',
    incentives: [
      'Net Metering',
      'Property Tax Exemption',
      'Solar Rights Law',
      'Local utility rebates'
    ],
    paybackPeriod: {
      residential: {
        small: 6.4,
        medium: 6.0,
        large: 5.6,
      },
      commercial: {
        small: 5.5,
        medium: 5.1,
        large: 4.7,
      },
    },
  }
];