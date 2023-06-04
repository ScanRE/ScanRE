import { Navbar, CTA, Pricebox } from '../../components';
import './pricing.css';

function Pricing() {
    return ( 
        <div className="pricing">
                <Navbar />
                <div className="wrapper">
                    <div className="title">
                        <h1 className="gradient-text">Pricing</h1>
                        <span className="tagline">Find a plan to power your projects.</span>
                    </div>
                    <section className="pricing-models">
                        <Pricebox/>
                        <Pricebox/>
                        <Pricebox recommended={true}/>
                        <Pricebox/>
                    </section>
                </div>
            </div>
     );
}

export default Pricing;