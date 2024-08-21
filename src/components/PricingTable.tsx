import React from "react";
import "./PricingTable.scss";
import { FaArrowRight } from "react-icons/fa";

const PricingTable: React.FC = () => {
  return (
    <div className="pricing-table">
      <PricingCard
        title="Starter"
        price="$ 0.00"
        description="Suitable for Starter"
        buttonText="Start Free"
        features={[
          "Full Access",
          "Enhanced Security",
          "Source Files",
          "1 Domain Free",
          "Free Appointments",
          "Free Installment",
        ]}
      />
      <PricingCard
        title="Standerd"
        price="$ 19.00"
        description="Suitable for Collaborating Team"
        buttonText="Start Standerd"
        highlighted
        features={[
          "Full Access",
          "Enhanced Security",
          "Source Files",
          "1 Domain Free",
          "Free Appointments",
          "Free Installment",
        ]}
      />
      <PricingCard
        title="Premium"
        price="$ 9.00"
        description="Suitable for Premium"
        buttonText="Start Premium"
        features={[
          "Full Access",
          "Enhanced Security",
          "Source Files",
          "1 Domain Free",
          "Free Appointments",
          "Free Installment",
        ]}
      />
    </div>
  );
};

const PricingCard: React.FC<{
  title: string;
  price: string;
  description: string;
  buttonText: string;
  features: string[];
  highlighted?: boolean;
}> = ({ title, price, description, buttonText, features, highlighted }) => {
  return (
    <div className={`pricing-card ${highlighted ? "highlighted" : ""}`}>
      <div className="card-header">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="card-price">
        <h2>{price}</h2>
        <p>Billed monthly per user</p>
      </div>
      <button className="card-button">{buttonText}</button>
      <div className="card-features">
        <h4>What's included:</h4>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>
              <FaArrowRight style={{ marginRight: "5px" }} />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingTable;
