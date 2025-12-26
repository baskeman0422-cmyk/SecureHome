import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

const AccordionItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button 
        className="w-full py-5 px-4 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Increased question text size */}
        <span className="font-bold text-gray-800 text-base md:text-lg pr-4">Q. {question}</span>
        {isOpen ? <ChevronUp className="w-6 h-6 text-gray-400 flex-shrink-0" /> : <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />}
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-base md:text-lg text-gray-600 leading-relaxed bg-gray-50 rounded-b-lg">
          {/* Changed to Red */}
          <span className="font-bold text-red-600 mr-2">A.</span>
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section className="py-16 bg-white" id="faq">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-gray-900">よくあるご質問</h2>
        </div>
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-2">
          {FAQS.map((faq, index) => (
            <AccordionItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;