import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { DollarSign, MapPin, Calendar, TrendingUp, AlertTriangle, Building, Sun, Zap, Send, FileText, Calculator, Landmark, PiggyBank, Target, ExternalLink, Download, Shield } from 'lucide-react';

interface InvestmentProject {
  id: string;
  title: string;
  state: string;
  investmentAmount: number;
  availability: 'Available' | 'Under Contract' | 'Sold';
  imageUrl: string;
  systemSize: string;
  timeline: string;
  federalITC: number;
  depreciationSavings: number;
  srecIncome?: number;
  description: string;
}

const investmentProjects: InvestmentProject[] = [
  {
    id: 'commercial-austin-tx',
    title: 'Commercial Rooftop Solar - Austin, TX',
    state: 'Texas',
    investmentAmount: 500000,
    availability: 'Available',
    imageUrl: 'https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    systemSize: '500 kW',
    timeline: '9-12 months to completion',
    federalITC: 150000,
    depreciationSavings: 125000,
    srecIncome: 15000,
    description: 'Large-scale commercial rooftop installation on a manufacturing facility with excellent sun exposure and long-term PPA in place.'
  },
  {
    id: 'industrial-newark-nj',
    title: 'Industrial Solar Farm - Newark, NJ',
    state: 'New Jersey',
    investmentAmount: 750000,
    availability: 'Available',
    imageUrl: 'https://images.pexels.com/photos/9875384/pexels-photo-9875384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    systemSize: '750 kW',
    timeline: '12-15 months to completion',
    federalITC: 225000,
    depreciationSavings: 187500,
    srecIncome: 25000,
    description: 'Ground-mounted solar installation on industrial property with excellent SREC market potential in New Jersey.'
  },
  {
    id: 'commercial-baltimore-md',
    title: 'Multi-Building Commercial Complex - Baltimore, MD',
    state: 'Maryland',
    investmentAmount: 350000,
    availability: 'Under Contract',
    imageUrl: 'https://images.pexels.com/photos/9875409/pexels-photo-9875409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    systemSize: '350 kW',
    timeline: '8-10 months to completion',
    federalITC: 105000,
    depreciationSavings: 87500,
    srecIncome: 12000,
    description: 'Multi-building commercial complex with distributed solar installations across multiple rooftops.'
  },
  {
    id: 'warehouse-richmond-va',
    title: 'Warehouse Solar Installation - Richmond, VA',
    state: 'Virginia',
    investmentAmount: 425000,
    availability: 'Available',
    imageUrl: 'https://images.pexels.com/photos/9875426/pexels-photo-9875426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    systemSize: '425 kW',
    timeline: '10-12 months to completion',
    federalITC: 127500,
    depreciationSavings: 106250,
    srecIncome: 8500,
    description: 'Large warehouse facility with optimal roof conditions and strong creditworthy tenant with long-term lease.'
  },
  {
    id: 'retail-philadelphia-pa',
    title: 'Retail Shopping Center - Philadelphia, PA',
    state: 'Pennsylvania',
    investmentAmount: 600000,
    availability: 'Available',
    imageUrl: 'https://images.pexels.com/photos/9875398/pexels-photo-9875398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    systemSize: '600 kW',
    timeline: '11-14 months to completion',
    federalITC: 180000,
    depreciationSavings: 150000,
    srecIncome: 18000,
    description: 'Shopping center with multiple anchor tenants and excellent visibility for corporate sustainability messaging.'
  },
  {
    id: 'office-wilmington-de',
    title: 'Corporate Office Complex - Wilmington, DE',
    state: 'Delaware',
    investmentAmount: 300000,
    availability: 'Sold',
    imageUrl: 'https://images.pexels.com/photos/9875403/pexels-photo-9875403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    systemSize: '300 kW',
    timeline: 'Completed',
    federalITC: 90000,
    depreciationSavings: 75000,
    srecIncome: 10000,
    description: 'Modern office complex with energy-efficient design and strong corporate commitment to sustainability.'
  }
];

const InvestmentOpportunitiesPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<InvestmentProject | null>(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    projectId: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    setFormSubmitted(true);
    setContactForm({
      name: '',
      email: '',
      phone: '',
      message: '',
      projectId: ''
    });
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // 100kW Project Financial Data
  const project100kW = {
    totalInvestment: 350000,
    federalITC: 105000, // 30%
    businessDepreciation: 140000, // 40%
    stockIncome: 70000, // 20%
    solarEarnings: 35000, // 10%
    annualIncome: 18000, // PPA + SREC income
    yearlyData: Array.from({ length: 25 }, (_, i) => ({
      year: i + 1,
      cumulativeIncome: (i + 1) * 18000,
      netProfit: (i + 1) * 18000 - (i === 0 ? 105000 : 0) // Subtract remaining investment in year 1
    }))
  };

  // Pie Chart Component
  const PieChart = () => {
    const data = [
      { label: '30% Federal ITC', value: 30, amount: project100kW.federalITC, color: '#0ea5e9' },
      { label: '40% Business Depreciation', value: 40, amount: project100kW.businessDepreciation, color: '#14b8a6' },
      { label: '20% Stock Income', value: 20, amount: project100kW.stockIncome, color: '#f59e0b' },
      { label: '10% Solar Earnings', value: 10, amount: project100kW.solarEarnings, color: '#8b5cf6' }
    ];

    const radius = 120;
    const centerX = 150;
    const centerY = 150;
    let cumulativePercentage = 0;

    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-center">100kW Project Investment Breakdown</h3>
        <div className="flex items-center justify-center">
          <div className="relative">
            <svg width="300" height="300" className="transform -rotate-90">
              {data.map((segment, index) => {
                const startAngle = (cumulativePercentage / 100) * 360;
                const endAngle = ((cumulativePercentage + segment.value) / 100) * 360;
                const startAngleRad = (startAngle * Math.PI) / 180;
                const endAngleRad = (endAngle * Math.PI) / 180;

                const x1 = centerX + radius * Math.cos(startAngleRad);
                const y1 = centerY + radius * Math.sin(startAngleRad);
                const x2 = centerX + radius * Math.cos(endAngleRad);
                const y2 = centerY + radius * Math.sin(endAngleRad);

                const largeArcFlag = segment.value > 50 ? 1 : 0;

                const pathData = [
                  `M ${centerX} ${centerY}`,
                  `L ${x1} ${y1}`,
                  `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
                  'Z'
                ].join(' ');

                cumulativePercentage += segment.value;

                return (
                  <path
                    key={index}
                    d={pathData}
                    fill={segment.color}
                    stroke="white"
                    strokeWidth="2"
                  />
                );
              })}
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold">{formatCurrency(project100kW.totalInvestment)}</div>
                <div className="text-sm text-gray-600">Total Investment</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4">
          {data.map((segment, index) => (
            <div key={index} className="flex items-center">
              <div 
                className="w-4 h-4 rounded mr-2" 
                style={{ backgroundColor: segment.color }}
              ></div>
              <div className="text-sm">
                <div className="font-medium">{segment.label}</div>
                <div className="text-gray-600">{formatCurrency(segment.amount)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Line Chart Component for Yearly Income vs Investment
  const IncomeChart = () => {
    const maxIncome = Math.max(...project100kW.yearlyData.map(d => d.cumulativeIncome));
    const chartHeight = 300;
    const chartWidth = 600;
    const padding = 40;

    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-center">25-Year Cumulative Income vs Investment</h3>
        <div className="overflow-x-auto">
          <svg width={chartWidth + padding * 2} height={chartHeight + padding * 2}>
            {/* Grid lines */}
            {[0, 5, 10, 15, 20, 25].map(year => (
              <line
                key={year}
                x1={padding + (year / 25) * chartWidth}
                y1={padding}
                x2={padding + (year / 25) * chartWidth}
                y2={chartHeight + padding}
                stroke="#e5e7eb"
                strokeWidth="1"
              />
            ))}
            
            {/* Investment line (horizontal) */}
            <line
              x1={padding}
              y1={padding + chartHeight - (105000 / maxIncome) * chartHeight}
              x2={chartWidth + padding}
              y2={padding + chartHeight - (105000 / maxIncome) * chartHeight}
              stroke="#ef4444"
              strokeWidth="3"
              strokeDasharray="5,5"
            />
            
            {/* Income curve */}
            <polyline
              fill="none"
              stroke="#14b8a6"
              strokeWidth="3"
              points={project100kW.yearlyData.map((d, i) => 
                `${padding + (i / 24) * chartWidth},${padding + chartHeight - (d.cumulativeIncome / maxIncome) * chartHeight}`
              ).join(' ')}
            />
            
            {/* Breakeven point */}
            <circle
              cx={padding + (6 / 25) * chartWidth}
              cy={padding + chartHeight - (108000 / maxIncome) * chartHeight}
              r="6"
              fill="#f59e0b"
              stroke="white"
              strokeWidth="2"
            />
            
            {/* X-axis labels */}
            {[0, 5, 10, 15, 20, 25].map(year => (
              <text
                key={year}
                x={padding + (year / 25) * chartWidth}
                y={chartHeight + padding + 20}
                textAnchor="middle"
                className="text-sm fill-gray-600"
              >
                {year}
              </text>
            ))}
            
            {/* Y-axis labels */}
            {[0, 100000, 200000, 300000, 400000].map(amount => (
              <text
                key={amount}
                x={padding - 10}
                y={padding + chartHeight - (amount / maxIncome) * chartHeight + 5}
                textAnchor="end"
                className="text-sm fill-gray-600"
              >
                {formatCurrency(amount)}
              </text>
            ))}
            
            {/* Axis labels */}
            <text
              x={chartWidth / 2 + padding}
              y={chartHeight + padding + 50}
              textAnchor="middle"
              className="text-sm font-medium fill-gray-700"
            >
              Years
            </text>
            
            <text
              x={20}
              y={chartHeight / 2 + padding}
              textAnchor="middle"
              className="text-sm font-medium fill-gray-700"
              transform={`rotate(-90, 20, ${chartHeight / 2 + padding})`}
            >
              Cumulative Income
            </text>
          </svg>
        </div>
        
        <div className="mt-4 flex justify-center space-x-6 text-sm">
          <div className="flex items-center">
            <div className="w-4 h-1 bg-primary-600 mr-2"></div>
            <span>Cumulative Income</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-1 bg-red-500 border-dashed border-t-2 mr-2"></div>
            <span>Remaining Investment</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-accent-500 rounded-full mr-2"></div>
            <span>Breakeven Point (~6 years)</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 to-secondary-800 text-white pt-32 pb-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Solar Tax Credits & Investment Opportunities
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Transform your tax liability into a high-yield passive income vehicle. For those paying 5-6 figures in taxes annually, solar represents a powerful wealth-building strategy.
            </p>
          </div>
        </div>
      </section>

      {/* The $100k+ Tax Problem */}
      <section className="section bg-red-50 border-t-4 border-red-500">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 text-red-600 mb-6">
                <AlertTriangle className="w-10 h-10" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-700">
                Do You Pay Annual Taxes in Five or Six Figures?
              </h2>
              <h3 className="text-2xl font-semibold mb-8 text-gray-800">
                Turn Your Tax Liability into a High-Yield Passive Income Vehicle
              </h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Stop seeing taxes as a sunk cost. For individuals and businesses with an annual tax bill exceeding $100,000, solar energy represents a powerful and strategic financial tool. Instead of simply paying the IRS, you can redirect those funds into a tangible asset that generates passive income, offers substantial tax advantages, and delivers a secure return on investment. This isn't just about saving money; it's about transforming a liability into a lucrative income stream.
              </p>
              <Link to="#contact-form" className="btn btn-primary text-lg px-8 py-4">
                Transform Your Tax Strategy Today
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 100kW Tax Credit Example */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold mb-4">100kW Commercial Project: Tax Credit Example</h2>
            <p className="text-lg text-gray-600">
              See how a $350,000 investment in a 100kW commercial solar project can provide immediate tax benefits and long-term passive income.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <PieChart />
            <IncomeChart />
          </div>

          {/* Financial Breakdown */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 border border-green-200 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">100kW Project Financial Summary</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-4 text-primary-600">Investment Details</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Total Investment:</span>
                    <span className="font-medium">{formatCurrency(project100kW.totalInvestment)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>System Size:</span>
                    <span className="font-medium">100kW</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Annual Production:</span>
                    <span className="font-medium">120,000 kWh</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Annual Income:</span>
                    <span className="font-medium">{formatCurrency(project100kW.annualIncome)}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-4 text-green-600">Tax Benefits (Year 1)</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Federal ITC (30%):</span>
                    <span className="font-medium text-green-600">{formatCurrency(project100kW.federalITC)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Business Depreciation (40%):</span>
                    <span className="font-medium text-green-600">{formatCurrency(project100kW.businessDepreciation)}</span>
                  </div>
                  <div className="flex justify-between border-t pt-3">
                    <span className="font-semibold">Total Tax Benefits:</span>
                    <span className="font-semibold text-green-600">{formatCurrency(project100kW.federalITC + project100kW.businessDepreciation)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Remaining Investment:</span>
                    <span className="font-semibold">{formatCurrency(project100kW.stockIncome + project100kW.solarEarnings)}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4 text-center">Key Investment Metrics</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">70%</div>
                  <div className="text-sm text-gray-600">Secured in Year 1</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">~6 Years</div>
                  <div className="text-sm text-gray-600">Payback Period</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent-600 mb-2">$450k+</div>
                  <div className="text-sm text-gray-600">25-Year Net Profit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Strategy */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold mb-4">The Secure Solar Investment Strategy</h2>
            <p className="text-lg text-gray-600">
              Detailed financial mechanisms that make solar a compelling investment for high-income earners and businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white rounded-xl shadow-md p-8"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">60-70% Secured Day One</h3>
              <p className="text-gray-600 mb-4">
                Federal tax credits and accelerated depreciation allow you to recoup 60-70% of your initial investment almost immediately.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 30% Federal Investment Tax Credit (ITC)</li>
                <li>• 30-40% from MACRS depreciation savings</li>
                <li>• Dollar-for-dollar tax liability reduction</li>
              </ul>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-md p-8"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Rapid Payback</h3>
              <p className="text-gray-600 mb-4">
                The remaining 30-40% investment is typically recovered in under 5 years through energy savings and passive income.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Power Purchase Agreements (PPAs)</li>
                <li>• Solar Renewable Energy Credits (SRECs)</li>
                <li>• Minimal operating expenses</li>
              </ul>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl shadow-md p-8"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-100 text-accent-600 mb-6">
                <PiggyBank className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Long-term Wealth</h3>
              <p className="text-gray-600 mb-4">
                After payback, enjoy 15-20 years of pure passive income with minimal maintenance requirements.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 25-year system lifespan</li>
                <li>• Predictable revenue streams</li>
                <li>• Inflation-protected returns</li>
              </ul>
            </motion.div>
          </div>

          {/* Passive Income Streams */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-semibold mb-8 text-center">Building Passive Income Streams</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                  <FileText className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-semibold mb-3">Power Purchase Agreements</h4>
                <p className="text-gray-600 mb-4">
                  Secure 15-25 year contracts with creditworthy entities for steady, predictable revenue streams.
                </p>
                <a 
                  href="https://seia.org/wp-content/uploads/2024/09/SEIA-CI-PPA-v2.0.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Sample Commercial PPA
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-100 text-secondary-600 mb-4">
                  <Building className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-semibold mb-3">Solar Leases</h4>
                <p className="text-gray-600">
                  Lease equipment to property owners for fixed monthly payments while they benefit from reduced energy costs.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-100 text-accent-600 mb-4">
                  <Zap className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-semibold mb-3">Solar Credits (SRECs)</h4>
                <p className="text-gray-600">
                  Earn tradeable credits for every MWh produced, sold to utilities meeting renewable energy mandates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Federal ITC Details */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold mb-4">Federal Investment Tax Credit (ITC)</h2>
            <p className="text-lg text-gray-600">
              The Federal Solar Investment Tax Credit is one of the most significant financial incentives for solar energy adoption, especially powerful for Solar Buy Out options.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <Calculator className="w-6 h-6 text-primary-600 mr-2" />
                  How It Works
                </h3>
                
                <p className="text-gray-600 mb-6">
                  The Federal ITC allows you to deduct 30% of the cost of installing a solar energy system from your federal taxes. This immediate tax credit applies to Solar Buy Out purchases with no cap on its value.
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold mb-3">100kW Commercial Example:</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>System Cost:</span>
                      <span className="font-medium">$350,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Federal Tax Credit (30%):</span>
                      <span className="font-medium text-green-600">-$105,000</span>
                    </div>
                    <div className="flex justify-between border-t pt-2 mt-2">
                      <span className="font-semibold">After ITC Benefit:</span>
                      <span className="font-semibold">$245,000</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-primary-50 p-4 rounded-lg border border-primary-100">
                  <p className="text-sm text-gray-700">
                    <strong>Important:</strong> The ITC was recently extended through 2032 at 30%, then phases down to 26% in 2033 and 22% in 2034 before expiring in 2035.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <FileText className="w-6 h-6 text-primary-600 mr-2" />
                  Eligibility Requirements
                </h3>
                
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 text-xl leading-none">•</span>
                    <span className="text-gray-600">
                      <strong>System Ownership:</strong> You must own the solar system (Buy Out option only - not lease or PPA)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 text-xl leading-none">•</span>
                    <span className="text-gray-600">
                      <strong>Tax Liability:</strong> You must have sufficient tax liability to claim the credit
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 text-xl leading-none">•</span>
                    <span className="text-gray-600">
                      <strong>Business Property:</strong> For commercial systems on business property
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 text-xl leading-none">•</span>
                    <span className="text-gray-600">
                      <strong>Original Installation:</strong> System must be new (not used)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 text-xl leading-none">•</span>
                    <span className="text-gray-600">
                      <strong>Timing:</strong> System must be placed in service during the tax year for which the credit is claimed
                    </span>
                  </li>
                </ul>
                
                <div className="bg-accent-50 p-4 rounded-lg border border-accent-100">
                  <p className="text-sm text-gray-700">
                    <strong>Pro Tip:</strong> If your tax liability is less than your available credit in a given year, you can carry the unused portion forward to the next tax year.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current Investment Projects */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Current Investment Opportunities</h2>
            <p className="text-lg text-gray-600">
              Below is a list of our current solar investment opportunities. These projects offer significant tax benefits and strong potential for returns. Please note that all financial figures are approximate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {investmentProjects.map((project) => (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition-all duration-300"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      project.availability === 'Available' 
                        ? 'bg-green-100 text-green-700' 
                        : project.availability === 'Under Contract'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-red-100 text-red-700'
                    }`}>
                      {project.availability}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{project.state}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3 line-clamp-2">{project.title}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Investment Amount:</span>
                      <span className="font-medium">{formatCurrency(project.investmentAmount)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">System Size:</span>
                      <span className="font-medium">{project.systemSize}</span>
                    </div>
                  </div>
                  
                  <button 
                    className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
                    disabled={project.availability === 'Sold'}
                  >
                    {project.availability === 'Sold' ? 'Project Completed' : 'View Details'} 
                    <span className="ml-1">→</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md z-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="h-64 md:h-80 overflow-hidden">
                <img 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap justify-between items-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-0">{selectedProject.title}</h2>
                  <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                    selectedProject.availability === 'Available' 
                      ? 'bg-green-100 text-green-700' 
                      : selectedProject.availability === 'Under Contract'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-red-100 text-red-700'
                  }`}>
                    {selectedProject.availability}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-8">{selectedProject.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold mb-4 flex items-center">
                      <Building className="w-5 h-5 text-primary-600 mr-2" />
                      Project Details
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Solar System Size:</span>
                        <span className="font-medium">{selectedProject.systemSize}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total Investment:</span>
                        <span className="font-medium">{formatCurrency(selectedProject.investmentAmount)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Timeline:</span>
                        <span className="font-medium">{selectedProject.timeline}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Location:</span>
                        <span className="font-medium">{selectedProject.state}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <h3 className="font-semibold mb-4 flex items-center text-green-700">
                      <TrendingUp className="w-5 h-5 mr-2" />
                      Tax & Credit Summary (Approximate)
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">30% Federal ITC:</span>
                        <span className="font-medium text-green-600">{formatCurrency(selectedProject.federalITC)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Depreciation Tax Savings:</span>
                        <span className="font-medium text-green-600">{formatCurrency(selectedProject.depreciationSavings)}</span>
                      </div>
                      {selectedProject.srecIncome && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Annual SREC Income:</span>
                          <span className="font-medium text-green-600">{formatCurrency(selectedProject.srecIncome)}</span>
                        </div>
                      )}
                      <div className="border-t pt-3 flex justify-between text-lg font-semibold">
                        <span>Total Year 1 Benefits:</span>
                        <span className="text-green-600">
                          {formatCurrency(selectedProject.federalITC + selectedProject.depreciationSavings)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-8">
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" />
                    <p className="text-sm text-gray-700">
                      <strong>Disclaimer:</strong> These figures are approximations and are for illustrative purposes only. Actual returns and tax benefits may vary. We recommend consulting with a tax professional.
                    </p>
                  </div>
                </div>
                
                {selectedProject.availability !== 'Sold' && (
                  <div className="text-center">
                    <button 
                      onClick={() => {
                        setContactForm(prev => ({ ...prev, projectId: selectedProject.id }));
                        setSelectedProject(null);
                        document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="btn btn-primary mr-4"
                    >
                      Connect with Us if Interested
                    </button>
                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="btn btn-outline"
                    >
                      Close Details
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Contact Form */}
      <section id="contact-form" className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Connect with Us</h2>
              <p className="text-lg text-gray-600">
                Interested in transforming your tax liability into a profitable solar investment? Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

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
                <h3 className="text-2xl font-bold text-green-700 mb-4">Message Sent!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for your interest in our investment opportunities. Our team will review your inquiry and contact you within 24 hours.
                </p>
                <button 
                  onClick={() => setFormSubmitted(false)}
                  className="btn btn-primary"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-md p-8"
              >
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={contactForm.name}
                        onChange={handleContactChange}
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
                        value={contactForm.email}
                        onChange={handleContactChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={contactForm.phone}
                      onChange={handleContactChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  
                  {contactForm.projectId && (
                    <div className="bg-primary-50 p-4 rounded-lg border border-primary-200">
                      <p className="text-sm text-primary-700">
                        <strong>Project of Interest:</strong> {investmentProjects.find(p => p.id === contactForm.projectId)?.title}
                      </p>
                    </div>
                  )}
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={contactForm.message}
                      onChange={handleContactChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Tell us about your investment goals, annual tax liability, and any specific questions about solar tax benefits..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <button type="submit" className="btn btn-primary w-full">
                      Send Message
                    </button>
                  </div>
                  
                  <p className="text-sm text-gray-500">
                    By submitting this form, you agree to our privacy policy and consent to be contacted regarding investment opportunities.
                  </p>
                </form>
              </motion.div>
            )}
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
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Tax Strategy?</h2>
            <p className="text-xl mb-8 opacity-90">
              If you paid 5 to 6 figures in taxes, contact our specialists today to explore how solar can become a powerful part of your wealth-building and tax reduction strategy.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#contact-form" className="btn bg-white text-primary-700 hover:bg-gray-100">
                Schedule a Tax Strategy Consultation
              </a>
              <Link to="/services/options/collaborations" className="btn bg-transparent border border-white hover:bg-white/10">
                Explore EPC Partnerships
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default InvestmentOpportunitiesPage;