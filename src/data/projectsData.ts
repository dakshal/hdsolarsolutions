export type Project = {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'government';
  location: string;
  systemSize: string;
  savings: string;
  description: string;
  imageUrl: string;
  features: string[];
};

export const projects: Project[] = [
  {
    id: 'res-maryland-1',
    title: 'Modern Family Home Solar Installation',
    category: 'residential',
    location: 'Baltimore, Maryland',
    systemSize: '8.5 kW',
    savings: '$1,850 annually',
    description: 'A complete rooftop solar installation for a modern family home in Baltimore, Maryland. The system includes 24 high-efficiency panels and provides nearly 100% of the family\'s electricity needs.',
    imageUrl: 'https://t4.ftcdn.net/jpg/11/68/75/85/360_F_1168758564_HkQpcZSgfACwDCvU8DLeFmWDkTZhkgko.jpg',
    features: [
      '24 high-efficiency solar panels',
      'Integrated monitoring system',
      'Battery backup for essential circuits',
      'Annual production of 13,500 kWh'
    ]
  },
  {
    id: 'res-pennsylvania-1',
    title: 'Home Solar + Battery System',
    category: 'residential',
    location: 'Pittsburgh, Pennsylvania',
    systemSize: '10.2 kW with 13.5 kWh battery',
    savings: '$2,200 annually',
    description: 'A comprehensive solar and battery installation for a residential home, providing both daytime power and evening backup during outages.',
    imageUrl: 'https://eitaisolar.com/wp-content/uploads/2023/12/blog-1229-2-1024x457.jpg',
    features: [
      'High-temperature rated solar panels',
      'Powerwall battery integration',
      'Smart home energy management',
      'Annual production of 16,800 kWh'
    ]
  },
  {
    id: 'comm-newjersey-1',
    title: 'Retail Shopping Center Solar Canopy',
    category: 'commercial',
    location: 'Edison, New Jersey',
    systemSize: '175 kW',
    savings: '$42,000 annually',
    description: 'A solar canopy installation covering the parking area of a busy retail shopping center. The system provides shade for customers while generating significant electricity for the retail operations.',
    imageUrl: 'https://image.cnbcfm.com/api/v1/image/107031478-1647451827051-Target_net_zero_energy_store.jpg',
    features: [
      'Dual-purpose parking shade structure',
      'EV charging stations integration',
      'High-capacity commercial inverters',
      'Annual production of 280,000 kWh'
    ]
  },
  {
    id: 'comm-virginia-1',
    title: 'Manufacturing Facility Rooftop Solar',
    category: 'commercial',
    location: 'Fairfax, Virginia',
    systemSize: '350 kW',
    savings: '$76,000 annually',
    description: 'A large-scale rooftop solar installation for a manufacturing facility, helping the company achieve sustainability goals while significantly reducing operating costs.',
    imageUrl: 'https://www.pv-magazine.com/wp-content/uploads/2021/04/Hunter-Douglas-warehouse-solar-at-Rydalmere-manufacturing-site.-1536x779-1-1200x609.png',
    features: [
      'Over 800 commercial-grade panels',
      'Custom mounting system for industrial roofing',
      'Multiple string inverter configuration',
      'Annual production of 525,000 kWh'
    ]
  },
  {
    id: 'gov-maryland-1',
    title: 'Municipal Building Solar Array',
    category: 'government',
    location: 'Frederick, Maryland',
    systemSize: '125 kW',
    savings: '$29,000 annually',
    description: 'A solar installation for a municipal government building, showcasing the city\'s commitment to renewable energy while providing significant taxpayer savings.',
    imageUrl: 'https://media.bizj.us/view/img/1355651/1108staples-2*1200xx1024-576-0-96.jpg',
    features: [
      'Ballasted racking system',
      'Snowshed panel technology',
      'Public energy production display',
      'Annual production of 187,000 kWh'
    ]
  },
  {
    id: 'gov-pennsylvania-1',
    title: 'Public School Solar Initiative',
    category: 'government',
    location: 'Harrisburgh, Pennsylvania',
    systemSize: '200 kW',
    savings: '$47,000 annually',
    description: 'A comprehensive solar installation across multiple school buildings, reducing operating costs and providing educational opportunities for students.',
    imageUrl: 'https://irecusa.org/wp-content/uploads/2021/06/SCUSD-District-Borrego-Solar-scaled.jpg',
    features: [
      'Multiple building integration',
      'Educational monitoring displays',
      'Shade structures for playground areas',
      'Annual production of 320,000 kWh'
    ]
  }
];