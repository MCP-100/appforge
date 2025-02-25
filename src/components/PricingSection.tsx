import Link from 'next/link';

const pricingPlans = [
  {
    id: 'free',
    name: 'Free',
    description: 'Perfect for trying out AppForge',
    price: '$0',
    period: 'forever',
    features: [
      '3 app generations per month',
      'Basic templates',
      'Community support',
      'Download source code',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'For individuals and small teams',
    price: '$29',
    period: 'per month',
    features: [
      'Unlimited app generations',
      'All templates',
      'Priority support',
      'Download source code',
      'Custom branding',
      'API access',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For organizations with advanced needs',
    price: 'Custom',
    period: 'contact us',
    features: [
      'Everything in Pro',
      'Dedicated support',
      'Custom templates',
      'SSO authentication',
      'Advanced security',
      'SLA guarantees',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <div className="py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Choose the plan that fits your needs. All plans include access to our core features.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingPlans.map((plan) => (
          <div 
            key={plan.id} 
            className={`p-6 rounded-xl border ${
              plan.popular 
                ? 'border-primary shadow-lg relative' 
                : 'border-border'
            } bg-card flex flex-col h-full`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium py-1 px-3 rounded-full">
                Most Popular
              </div>
            )}
            
            <div className="mb-6">
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="text-muted-foreground mt-1">{plan.description}</p>
            </div>
            
            <div className="mb-6">
              <span className="text-3xl font-bold">{plan.price}</span>
              <span className="text-muted-foreground ml-1">/{plan.period}</span>
            </div>
            
            <ul className="space-y-3 mb-8 flex-grow">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="mr-2 text-primary"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Link 
              href={`/signup?plan=${plan.id}`} 
              className={`w-full py-2 px-4 rounded-lg text-center font-medium ${
                plan.popular 
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
              } transition-colors mt-auto`}
            >
              {plan.cta}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
} 