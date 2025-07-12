import React, { useState, useEffect } from 'react';
import { Calculator, Sun, DollarSign, Zap, Home, TrendingUp } from 'lucide-react';

interface CalculatorInputs {
  zipCode: string;
  monthlyBill: number;
  roofType: string;
  shadingLevel: string;
  systemSize: number;
  batteryBackup: boolean;
  evCharger: boolean;
  state: string;
}

interface CostBreakdown {
  equipment: number;
  labor: number;
  permitting: number;
  design: number;
  additional: number;
  grossCost: number;
  federalITC: number;
  stateIncentives: number;
  netCost: number;
  annualSavings: number;
  paybackPeriod: number;
}

const SolarCalculator: React.FC = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    zipCode: '',
    monthlyBill: 150,
    roofType: 'asphalt',
    shadingLevel: 'minimal',
    systemSize: 8,
    batteryBackup: false,
    evCharger: false,
    state: 'maryland'
  });

  const [results, setResults] = useState<CostBreakdown | null>(null);
  const [showResults, setShowResults] = useState(false);

  const stateIncentiveRates = {
    maryland: 0.08,
    newjersey: 0.12,
    pennsylvania: 0.06,
    dc: 0.15,
    delaware: 0.07,
    virginia: 0.05
  };

  const stateSrecIncome = {
    maryland: 60,
    newjersey: 85,
    pennsylvania: 40,
    dc: 400,
    delaware: 167,
    virginia: 30
  }

  const installationCost = {
    maryland: 3200,
    newjersey: 3300,
    pennsylvania: 3100,
    dc: 3500,
    delaware: 3250,
    virginia: 3050
  }

  const calculateCosts = () => {
    const baseSystemCost = inputs.systemSize * 3500; // $3500/kW
    
    // Equipment (70% of base cost)
    const equipment = baseSystemCost * 0.70;
    
    // Labor (20% of base cost)
    const labor = baseSystemCost * 0.20;
    
    // Permitting & Interconnection (fixed costs)
    const permitting = 1500 + (inputs.systemSize * 50);
    
    // Design & Engineering (5% of base cost)
    const design = baseSystemCost * 0.05;
    
    // Additional costs
    let additional = 0;
    if (inputs.batteryBackup) additional += 15000;
    if (inputs.evCharger) additional += 2500;
    if (inputs.roofType === 'tile' || inputs.roofType === 'metal') additional += 1000;
    if (inputs.shadingLevel === 'heavy') additional += inputs.systemSize * 200;
    
    const grossCost = equipment + labor + permitting + design + additional;
    
    // Federal ITC (30%)
    const federalITC = grossCost * 0.30;
    
    // State incentives
    const stateRate = stateIncentiveRates[inputs.state as keyof typeof stateIncentiveRates] || 0.05;
    const stateIncentives = grossCost * stateRate;

    const srecIncome = inputs.systemSize * 1.2 * 25 * ( stateSrecIncome[inputs.state as keyof typeof stateSrecIncome] || 40); // SREC income per MWh per year

    
    const netCost = grossCost - federalITC - stateIncentives - srecIncome;
    
    // Annual savings calculation
    const annualGeneration = inputs.systemSize * 1200; // kWh per year per kW
    const electricityRate = inputs.monthlyBill / (inputs.monthlyBill * 8); // Estimate kWh usage
    const annualSavings = Math.min(annualGeneration * 0.12, inputs.monthlyBill * 12 * 0.9);
    
    const paybackPeriod = netCost / annualSavings;

    const breakdown: CostBreakdown = {
      equipment,
      labor,
      permitting,
      design,
      additional,
      grossCost,
      federalITC,
      stateIncentives,
      srecIncome,
      netCost,
      annualSavings,
      paybackPeriod
    };

    setResults(breakdown);
    setShowResults(true);
  };

  const handleInputChange = (field: keyof CalculatorInputs, value: any) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
          <Calculator className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-bold mb-2">Interactive Solar Cost Calculator</h2>
        <p className="text-gray-600">Get an instant estimate for your solar installation</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Zip Code
              </label>
              <input
                type="text"
                value={inputs.zipCode}
                onChange={(e) => handleInputChange('zipCode', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                placeholder="Enter zip code"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monthly Electric Bill
              </label>
              <input
                type="number"
                value={inputs.monthlyBill}
                onChange={(e) => handleInputChange('monthlyBill', Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                placeholder="$150"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Roof Type
              </label>
              <select
                value={inputs.roofType}
                onChange={(e) => handleInputChange('roofType', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="asphalt">Asphalt Shingles</option>
                <option value="tile">Tile</option>
                <option value="metal">Metal</option>
                <option value="flat">Flat Roof</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Shading Level
              </label>
              <select
                value={inputs.shadingLevel}
                onChange={(e) => handleInputChange('shadingLevel', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="minimal">Minimal (0-10%)</option>
                <option value="moderate">Moderate (10-30%)</option>
                <option value="heavy">Heavy (30%+)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Desired System Size (kW)
              </label>
              <input
                type="number"
                value={inputs.systemSize}
                onChange={(e) => handleInputChange('systemSize', Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                min="3"
                max="20"
                step="0.5"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                State
              </label>
              <select
                value={inputs.state}
                onChange={(e) => handleInputChange('state', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="maryland">Maryland</option>
                <option value="newjersey">New Jersey</option>
                <option value="pennsylvania">Pennsylvania</option>
                <option value="dc">Washington DC</option>
                <option value="delaware">Delaware</option>
                <option value="virginia">Virginia</option>
              </select>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="batteryBackup"
                checked={inputs.batteryBackup}
                onChange={(e) => handleInputChange('batteryBackup', e.target.checked)}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="batteryBackup" className="ml-2 text-sm text-gray-700">
                Add Battery Backup (+$15,000)
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="evCharger"
                checked={inputs.evCharger}
                onChange={(e) => handleInputChange('evCharger', e.target.checked)}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="evCharger" className="ml-2 text-sm text-gray-700">
                Add EV Charger (+$2,500)
              </label>
            </div>
          </div>

          <button
            onClick={calculateCosts}
            className="btn btn-primary w-full"
          >
            Calculate Solar Costs
          </button>
        </div>

        {/* Results */}
        <div className="space-y-6">
          {showResults && results ? (
            <>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <DollarSign className="w-5 h-5 text-primary-600 mr-2" />
                  Cost Breakdown
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Equipment (Panels, Inverters, Hardware):</span>
                    <span className="font-medium">{formatCurrency(results.equipment)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Labor & Installation:</span>
                    <span className="font-medium">{formatCurrency(results.labor)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Permitting & Interconnection:</span>
                    <span className="font-medium">{formatCurrency(results.permitting)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Design & Engineering:</span>
                    <span className="font-medium">{formatCurrency(results.design)}</span>
                  </div>
                  {results.additional > 0 && (
                    <div className="flex justify-between">
                      <span>Additional Features:</span>
                      <span className="font-medium">{formatCurrency(results.additional)}</span>
                    </div>
                  )}
                  <div className="border-t pt-3 flex justify-between text-lg font-semibold">
                    <span>Gross System Cost:</span>
                    <span>{formatCurrency(results.grossCost)}</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-xl font-semibold mb-4 flex items-center text-green-700">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Incentives & Net Cost
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Federal Tax Credit (30%):</span>
                    <span className="font-medium text-green-600">-{formatCurrency(results.federalITC)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>State Incentives:</span>
                    <span className="font-medium text-green-600">-{formatCurrency(results.stateIncentives)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SREC Income:</span>
                    <span className="font-medium text-green-600">-{formatCurrency(results.srecIncome)}</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between text-lg font-semibold">
                    <span>Net Cost After Incentives:</span>
                    <span className="text-primary-600">{formatCurrency(results.netCost)}</span>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 p-6 rounded-lg border border-primary-200">
                <h3 className="text-xl font-semibold mb-4 flex items-center text-primary-700">
                  <Sun className="w-5 h-5 mr-2" />
                  Savings & Payback
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Estimated Annual Savings:</span>
                    <span className="font-medium">{formatCurrency(results.annualSavings)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Payback Period:</span>
                    <span className="font-medium">{results.paybackPeriod.toFixed(1)} years</span>
                  </div>
                  <div className="flex justify-between">
                    <span>25-Year Savings:</span>
                    <span className="font-medium text-green-600">{formatCurrency(results.annualSavings * 25 - results.netCost)}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 text-center">
                  <strong>Note:</strong> This is an estimate based on average values. Actual costs and savings may vary based on specific site conditions, local utility rates, and available incentives.
                </p>
              </div>
            </>
          ) : (
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <Home className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">
                Enter your information and click "Calculate Solar Costs" to see your personalized estimate.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SolarCalculator;