import './App.css';
import { PlanCard } from './planCard';

function App() {

  const plans = [
    {
      planType: 'FREE',
      price: '$0/month',
      features: [
        { name: 'Single User', available: true },
        { name: '50GB Storage', available: true },
        { name: 'Unlimited Public Projects', available: true },
        { name: 'Community Access', available: true },
        { name: 'Unlimited Private Projects', available: false },
        { name: 'Dedicated Phone Support', available: false },
        { name: 'Free Subdomain', available: false },
        { name: 'Monthly Status Reports', available: false },
      ],
    },
    {
      planType: 'PLUS',
      price: '$9/month',
      features: [
        { name: '5 Users', available: true },{ name: '50GB Storage', available: true },
        { name: 'Unlimited Public Projects', available: true },
        { name: 'Community Access', available: true },
        { name: 'Unlimited Private Projects', available: true },
        { name: 'Dedicated Phone Support', available: true },
        { name: 'Free Subdomain', available: true },
        { name: 'Monthly Status Reports', available: false },
      ],
    },
    {
      planType: 'PRO',
      price: '$49/month',
      features: [
        { name: 'Unlimited Users', available: true },
        { name: '50GB Storage', available: true },
        { name: 'Unlimited Public Projects', available: true },
        { name: 'Community Access', available: true },
        { name: 'Unlimited Private Projects', available: true },
        { name: 'Dedicated Phone Support', available: true },
        { name: 'Free Subdomain', available: true },
        { name: 'Monthly Status Reports', available: true },
        
      ],
    },
  ];
  return (
    <div className="plans-container">
      {plans.map((plan) => (
      <PlanCard key={plan.planType} planType={plan.planType} price={plan.price} features={plan.features}/>
    ))}
    
    </div>
  );
}

export default App;
