import React from 'react';
import FeatureCard from './FeatureCard';
import { FaLock, FaQuestionCircle, FaUserAlt } from 'react-icons/fa';

const Card = () => {
  return (
    <div className="mt-4 mix-blend-screen flex items-center justify-center bg-white-300 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          icon={<FaLock />}
          title="Guaranteed Secure Payments"
          description="We accept all major credit and debit cards."
          bgColor="bg-rose-300"
        />
        <FeatureCard
          icon={<FaUserAlt />}
          title="Beauty Advisor"
          description="Share what you're seeking, and I'll use my expertise to help you discover your ideal match."
          bgColor="bg-rose-300"
        />
        <FeatureCard
          icon={<FaQuestionCircle />}
          title="Help Center"
          description="Have a question? Explore our FAQs or send us your inquiry."
          bgColor="bg-rose-300"
        />
      </div>
    </div>
 

    );
    }
    export default Card;


