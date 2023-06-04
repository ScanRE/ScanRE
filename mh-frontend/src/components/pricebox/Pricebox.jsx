import React from 'react';
import CTA from '../cta/CTA';
import './pricebox.css';

function Pricebox({
    tier="Pro",
    cost="$50",
    desc="For team collaboration with advanced features.",
    features=[
        "Up to 1TB of bandwidth",
        "Email Support",
    ],
    recommended=false,
    cta="Start Now"
}) {
    return (
        <div className={`price-box glowing-border ${recommended ? "lifted" : ""}`}>
            {recommended && <span className="rec">Recommended</span>}
            <div className="one">
                <span className="heading">{tier}</span>
                <div className="total-cost">
                    <span className="cost">{cost}</span>
                    <span className="per">per user / month</span>
                </div>
                <span className="desc">
                    {desc}
                </span>
            </div>
            <div className="two">
                <ul className="features">
                    {features.map((it) => <li className="feature">{it}</li>)}                    
                </ul>
                <CTA text={cta} />
            </div>
        </div>
    );

}

export default Pricebox;