export const PlanCard = ({ planType, price, features }) => {
    return (
        <div className='plan-card'>
            <div className="plan-header">
                <h5>{planType}</h5>
                <p className="price">{price}</p>
            </div>
            <ul className="features">
                {features.map((feature) => (<li key={feature.name} className={feature.available ? 'available' : 'unavailable'}>
                    {feature.available ? '✓' : '✕'} {feature.name}
                </li>
                ))}
            </ul>
            <button className={planType == 'PRO' ? 'pro-button' :'button' }>Button</button>
        </div>
    );
    
};