"use client";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the best time to visit Kashmir?",
      answer:
        "The best time to visit Kashmir is between March and October. During this period, the weather is pleasant, and you can enjoy the lush greenery and beautiful landscapes.",
    },
    {
      question: "Is it safe to travel to Kashmir?",
      answer:
        "Yes, Kashmir is generally safe for tourists. However, it's always good to stay updated on the local news and follow travel advisories for a hassle-free experience.",
    },
    {
      question: "Do I need a permit to visit Kashmir?",
      answer:
        "No, Indian citizens do not need a special permit to visit most areas in Kashmir. However, some restricted regions like Ladakh’s inner line areas may require permits for non-Indians.",
    },
    {
      question: "Can I book a self-drive car in Kashmir?",
      answer:
        "Yes, we offer self-drive car rentals in Kashmir. You can explore the region at your own pace and enjoy complete privacy during your trip.",
    },
    {
      question: "What activities can I enjoy in Kashmir?",
      answer:
        "Kashmir offers activities like shikara rides, trekking, skiing, snowboarding, and exploring the famous Mughal gardens and local markets.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-3xl font-bold text-center text-[#228B22] mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-[#228B22] rounded-lg shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 text-left text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#228B22]"
            >
              <span className="font-medium text-[18px]">{faq.question}</span>
              {activeIndex === index ? (
                <FiChevronUp className="text-[#56C2C3] text-lg" />
              ) : (
                <FiChevronDown className="text-[#56C2C3] text-lg" />
              )}
            </button>
            {activeIndex === index && (
              <div className="p-4 border-t border-gray-200 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
