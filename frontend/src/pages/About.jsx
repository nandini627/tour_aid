import { Stethoscope, Languages, AlertTriangle, Search, Clock, MessageSquare, Globe, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-bg-light pb-16">
      {/* 1. Hero Section */}
      <section className="bg-white py-20 px-4 md:px-8 shadow-sm border-b border-gray-100 text-center">
        <div className="max-w-3xl mx-auto mt-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            About <span className="text-primary-blue">TourAid</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            TourAid is your dedicated medical companion on the go. We empower travelers with immediate access to healthcare resources, breaking down barriers and providing peace of mind wherever you are in the world.
          </p>
        </div>
      </section>

      {/* 2. Problem Section */}
      <section className="container mx-auto px-4 md:px-8 max-w-6xl mt-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">The Challenges Travelers Face</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Getting sick away from home is stressful. We identified the three biggest hurdles travelers face when seeking medical care abroad.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="bg-red-50 p-4 rounded-full text-red-500 mb-6">
              <AlertTriangle size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Emergency Situations</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Not knowing the local emergency numbers or where the nearest 24/7 care facility is located during a crisis.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="bg-amber-50 p-4 rounded-full text-amber-500 mb-6">
              <Stethoscope size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Finding the Right Care</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Struggling to find reputable hospitals or clinics that offer the specific medical specialties required.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="bg-blue-50 p-4 rounded-full text-primary-blue mb-6">
              <Languages size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Language Barriers</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Inability to accurately communicate symptoms or understand a doctor's diagnosis due to speaking different languages.</p>
          </div>
        </div>
      </section>

      {/* 3. Solution Section */}
      <section className="container mx-auto px-4 md:px-8 max-w-6xl mt-24">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">How TourAid Solves Them</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">We provide a comprehensive suite of tools designed specifically for the traveling patient.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex gap-5 items-start">
              <div className="bg-blue-50 p-3 rounded-xl text-primary-blue flex-shrink-0 mt-1">
                <Search size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Smart Hospital Search</h3>
                <p className="text-gray-600 leading-relaxed">Instantly locate nearby hospitals, filter by medical specialties, and verify the quality of care before you arrive.</p>
              </div>
            </div>
            <div className="flex gap-5 items-start">
              <div className="bg-blue-50 p-3 rounded-xl text-primary-blue flex-shrink-0 mt-1">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Quick Assistance</h3>
                <p className="text-gray-600 leading-relaxed">One-tap access to local emergency contacts, ambulance services, and immediate first-aid tips when time matters most.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Unique Feature (USP) */}
      <section className="container mx-auto px-4 md:px-8 max-w-6xl mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-primary-blue opacity-5 blur-3xl rounded-full transform scale-150"></div>
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 relative z-10">
              <div className="flex items-center gap-3 border-b border-gray-100 pb-4 mb-4">
                <Globe className="text-primary-blue" size={24} />
                <h4 className="font-bold text-lg">Medical Phrasebook</h4>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                  <p className="text-xs text-primary-blue font-bold uppercase tracking-wider mb-1">English</p>
                  <p className="text-gray-800 font-medium">I have severe pain in my chest.</p>
                </div>
                <div className="flex justify-center">
                  <MessageSquare size={20} className="text-gray-300" />
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Spanish (Translated)</p>
                  <p className="text-gray-800 font-medium">Tengo un dolor fuerte en el pecho.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary-blue font-semibold text-sm mb-6">
              <Languages size={16} /> Key Feature
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">Break the language barrier at the clinic.</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Communicating medical symptoms in a foreign language is dangerous. TourAid features a built-in medical translator with predefined, doctor-verified phrases.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Simply select your symptoms, choose the local language, and show the translation to your healthcare provider to ensure you get the right treatment.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Mission Section */}
      <section className="bg-primary-blue text-white mt-24 py-20 px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <Heart size={48} className="text-blue-200 mb-6" />
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-blue-50 leading-relaxed">
            We believe that high-quality medical care should be universally accessible, regardless of where you travel. TourAid is dedicated to building a safer world for global explorers.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
