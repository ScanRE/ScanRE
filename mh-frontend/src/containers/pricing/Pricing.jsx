import { Navbar, CTA, Pricebox } from '../../components';
import './pricing.css';

function Pricing() {
    const str = `1. Price: $0 
    Free: 
    Quick scan of 20 repositories/month 
    
    2. Price: $20/month 
    Pro: 
    Deep Scan of 50 repositories/month
    (Scans dependencies along with code) [slighty smaller/lighter font]
    
    3. Price: $50/month
    AI Pro: 
    Scan 20K LOC per month, with Quick or Deep Scan 
    (Use cutting-edge GPT-4 for improvements to code) [again a slightly smaller/lighter font]
    
    4. Enterprise: 
    Custom Contracts depending on team size and needs if one of the ready plans does not suit the needs of the business
    Contact Sales`

    const lst = [
        {
            tier: "free",
            cost: "$0",
            desc: "For enthusiasts and our community.",
            features: [
                "Quick Scan of 20 repositories/month",
            ],
        },
        {
            tier: "Pro",
            cost: "$20",
            desc: "For developers with special needs.",
            features: [
                "Deep Scan of 50 repositories/month",
                "Scans dependencies along with code",
                "Everything in Free Tier",
            ],
        },
        {
            tier: "AI Pro",
            cost: "$50",
            desc: "For Vulnerabilty Mitigation Suggestions",
            features: [
                "Scan 20K LOC per month",
                "With both Quick or Deep Scan",
                "Uses GPT-4 for improvements to code",
            ],
            recommended: true
        },
        {
            tier: "Enterprise",
            cost: "Custom",
            desc: "For Larger Teams and Organisations",
            features: [
                "Custom Contracts depending on team size and needs",
                "Everything in the remaining tier",
            ],
            cta: "Contact Sales"
        },
    ]
    return ( 
        <div className="pricing">
                <Navbar />
                <div className="wrapper">
                    <div className="title">
                        <h1 className="gradient-text">Pricing</h1>
                        <span className="tagline">Find a plan to power your projects.</span>
                    </div>
                    <section className="pricing-models">
                        {lst.map((obj) => <Pricebox tier={obj.tier} cost={obj.cost} desc={obj.desc} features={obj.features} recommended={obj.recommended || false} cta={obj.cta || "Start Now"} />)}
                    </section>
                </div>
            </div>
     );
}

export default Pricing;