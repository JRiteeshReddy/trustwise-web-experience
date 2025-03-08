
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone } from 'lucide-react';

const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="support" className="py-24 bg-navy-50" ref={sectionRef}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden fade-in-section">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 lg:p-16">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-6">
                Ready to Elevate Your Professional Experience?
              </h2>
              <p className="text-navy-600 text-lg mb-8">
                Our dedicated team is here to answer your questions and provide personalized guidance as you explore our premium solution.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-navy-800" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-navy-800">Call Us Directly</h4>
                    <p className="text-navy-600">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-navy-800" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-navy-800">Email Us</h4>
                    <p className="text-navy-600">support@trustwise.com</p>
                  </div>
                </div>
              </div>
              
              <Button className="bg-navy-800 hover:bg-navy-900 text-white hover-lift text-lg py-6 px-8">
                Schedule a Consultation
              </Button>
            </div>
            
            <div className="bg-navy-800 p-12 lg:p-16 text-white">
              <h3 className="text-2xl font-bold mb-6">Request Information</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-navy-100 mb-2 text-lg">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-4 rounded-lg bg-navy-700 text-white border border-navy-600 focus:outline-none focus:ring-2 focus:ring-gold-500 text-lg"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-navy-100 mb-2 text-lg">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-4 rounded-lg bg-navy-700 text-white border border-navy-600 focus:outline-none focus:ring-2 focus:ring-gold-500 text-lg"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-navy-100 mb-2 text-lg">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full p-4 rounded-lg bg-navy-700 text-white border border-navy-600 focus:outline-none focus:ring-2 focus:ring-gold-500 text-lg"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-navy-100 mb-2 text-lg">
                    Your Inquiry
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-4 rounded-lg bg-navy-700 text-white border border-navy-600 focus:outline-none focus:ring-2 focus:ring-gold-500 text-lg resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gold-500 hover:bg-gold-600 text-navy-900 hover-lift text-lg py-6"
                >
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
