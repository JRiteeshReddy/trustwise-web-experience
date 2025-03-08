
import { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

const ProductShowcase = () => {
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

  const features = [
    {
      title: "Intuitive Design",
      description: "Designed with simplicity in mind, making it accessible for everyone regardless of technical expertise.",
    },
    {
      title: "Premium Quality",
      description: "Crafted with the finest materials to ensure durability and a luxurious experience for years to come.",
    },
    {
      title: "Expert Support",
      description: "Our dedicated support team is always ready to assist you with any questions or concerns.",
    },
    {
      title: "Exclusive Benefits",
      description: "Gain access to special features and benefits available only to our premium customers.",
    }
  ];

  return (
    <section id="product" className="py-24 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-6">
            Premium Solution for Discerning Professionals
          </h2>
          <p className="text-lg text-navy-600 max-w-3xl mx-auto">
            Discover why experienced leaders across India trust our product to enhance their professional capabilities and maintain their leadership edge.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 fade-in-section">
            <div className="bg-navy-50 p-8 rounded-3xl relative">
              <div className="absolute -top-5 -right-5 bg-gold-500 text-white py-2 px-4 rounded-full font-medium">
                Premium Edition
              </div>
              <img 
                src="https://images.unsplash.com/photo-1581092921461-39b91d57f8f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Premium product" 
                className="w-full h-auto rounded-2xl shadow-lg hover-lift transition-all duration-500 transform hover:scale-[1.02]"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 fade-in-section">
            <h3 className="text-2xl md:text-3xl font-bold text-navy-800 mb-6">
              Elegantly Designed, Exceptionally Functional
            </h3>
            <p className="text-navy-600 text-lg mb-8">
              Our product combines sophisticated design with intuitive functionality, making it the perfect choice for business leaders who value both aesthetics and performance in their professional tools.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex space-x-4 items-start">
                  <div className="bg-navy-800 rounded-full p-1 mt-1 flex-shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-navy-800 mb-2">{feature.title}</h4>
                    <p className="text-navy-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
