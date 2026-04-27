import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  ChevronDown, ChevronUp, Search, SlidersHorizontal, 
  FileText, Navigation, Phone, Languages, HelpCircle, Mail, Send
} from 'lucide-react';

const HelpSupport = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "How to find hospitals?",
      answer: "Navigate to the 'Find a Doctor' section from the top menu. Enter your current city or location in the search bar, select the medical specialty you need, and browse the list of verified hospitals nearby."
    },
    {
      id: 2,
      question: "How to use the translation feature?",
      answer: "Our translation feature offers predefined medical phrases. Go to the 'About' or 'Emergency' sections to access the medical phrasebook. Select your symptom and show the translated text to the local medical staff."
    },
    {
      id: 3,
      question: "How to call hospitals?",
      answer: "Once you select a hospital from the list, you will see a 'Call' button on their details page. If it is a severe emergency, please use the 'Emergency' tab to instantly call local emergency hotlines like an ambulance."
    }
  ];

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-bg-light pb-16">
      {/* 1. Header Section */}
      <section className="bg-white py-16 px-4 md:px-8 shadow-sm border-b border-gray-100 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-50 p-4 rounded-full text-primary-blue">
              <HelpCircle size={40} />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Help & Support
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Find answers and guidance to use TourAid effectively.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 max-w-6xl mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        <div className="lg:col-span-2 space-y-12">
          {/* 2. FAQ Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  <button 
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    {openFaq === faq.id ? (
                      <ChevronUp className="text-primary-blue" size={20} />
                    ) : (
                      <ChevronDown className="text-gray-400" size={20} />
                    )}
                  </button>
                  {openFaq === faq.id && (
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* 3. How It Works Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h2>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="bg-blue-50 text-primary-blue w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 flex items-center gap-2"><Search size={18} className="text-gray-400"/> Search Location</h3>
                    <p className="text-sm text-gray-600">Enter your current city or address into the hospital locator tool.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-blue-50 text-primary-blue w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 flex items-center gap-2"><SlidersHorizontal size={18} className="text-gray-400"/> Apply Filters</h3>
                    <p className="text-sm text-gray-600">Narrow down results by medical specialty, 24/7 availability, or rating.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-blue-50 text-primary-blue w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 flex items-center gap-2"><FileText size={18} className="text-gray-400"/> View Details</h3>
                    <p className="text-sm text-gray-600">Check hospital credentials, services offered, and read patient reviews.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-blue-50 text-primary-blue w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 flex items-center gap-2"><Navigation size={18} className="text-gray-400"/> Call or Navigate</h3>
                    <p className="text-sm text-gray-600">Use the built-in map to get directions or call the clinic instantly.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-8">
          {/* 4. Quick Help Actions */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h3>
            <div className="space-y-3">
              <NavLink 
                to="/find-doctor"
                className="w-full bg-blue-50 hover:bg-blue-100 text-primary-blue font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <Search size={20} />
                  Go to Hospital Search
                </div>
              </NavLink>
              <NavLink 
                to="/about"
                className="w-full bg-blue-50 hover:bg-blue-100 text-primary-blue font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <Languages size={20} />
                  Open Translator
                </div>
              </NavLink>
            </div>
          </section>

          {/* 5. Contact Support */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Contact Support</h3>
            <p className="text-sm text-gray-600 mb-6 flex items-center gap-2">
              <Mail size={16} /> support@touraid.com
            </p>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-all"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  rows="3"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-all resize-none"
                  placeholder="How can we help?"
                ></textarea>
              </div>
              <button className="w-full bg-primary-blue hover:bg-primary-hover text-white font-bold py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                Send Message <Send size={16} />
              </button>
            </form>
          </section>
        </div>

      </div>
    </div>
  );
};

export default HelpSupport;
