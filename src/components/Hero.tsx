
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Star } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.classList.add('is-visible');
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroElement = document.querySelector('.hero-parallax') as HTMLElement;
      if (heroElement) {
        heroElement.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen pt-28 pb-16 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background element */}
      <div className="absolute -right-24 top-24 w-96 h-96 bg-navy-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -left-24 bottom-24 w-96 h-96 bg-gold-200 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={heroRef} className="fade-in-section">
            {/* Trust badge */}
            <div className="inline-flex items-center mb-8 px-4 py-2 bg-gold-100 rounded-full text-navy-800 font-medium">
              <Star className="w-5 h-5 mr-2 text-gold-600" fill="currentColor" />
              <span>Trusted by business leaders worldwide</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-navy-800 leading-tight">
              Empower Your <br/>
              <span className="text-gold-600">Professional Legacy</span>
            </h1>
            
            <p className="text-lg md:text-xl text-navy-600 mb-8 max-w-xl">
              The premium solution designed exclusively for experienced professionals who value trust, quality, and ease of use.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <Button 
                className="bg-navy-800 hover:bg-navy-900 text-white text-lg py-6 px-8 hover-lift"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                className="border-navy-300 text-navy-800 text-lg py-6 px-8 hover-lift"
              >
                Watch Testimonials
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center">
                <Shield className="h-6 w-6 text-navy-800 mr-2" />
                <span className="text-navy-700">Premium Quality</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-6 w-6 text-navy-800 mr-2" />
                <span className="text-navy-700">Secure Technology</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-6 w-6 text-navy-800 mr-2" />
                <span className="text-navy-700">Expert Support</span>
              </div>
            </div>
          </div>
          
          <div className="relative hero-parallax">
            <div className="absolute top-6 -left-6 w-full h-full bg-gold-200 rounded-3xl transform -rotate-3"></div>
            <div className="relative rounded-3xl overflow-hidden border-8 border-white shadow-xl animate-subtle-pulse">
              <img 
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" 
                alt="Professional using our product" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-lg">
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                      <img 
                        src={`https://randomuser.me/api/portraits/men/${30 + i}.jpg`} 
                        alt="User" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-sm font-medium text-navy-900">3,500+ Leaders</div>
                  <div className="text-xs text-navy-600">Trust our solution</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
