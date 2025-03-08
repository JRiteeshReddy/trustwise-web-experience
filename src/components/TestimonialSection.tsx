
import { useEffect, useRef, useState } from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';

const TestimonialSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const testimonials = [
    {
      name: "Vikram Mehta",
      title: "CEO, Mumbai Technologies",
      quote: "As someone with over 40 years of business experience, I appreciate products that respect my time and expertise. This solution has significantly improved how I manage my team, with an interface that's refreshingly straightforward yet sophisticated.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
    },
    {
      name: "Rajiv Sharma",
      title: "Director, Delhi Investment Group",
      quote: "The learning curve was minimal, which I greatly appreciate. Within days, I was able to fully integrate this tool into my daily workflow. The customer service team has been exceptional, always ready to assist whenever I had questions.",
      image: "https://randomuser.me/api/portraits/men/33.jpg",
      rating: 5,
    },
    {
      name: "Sunil Kapoor",
      title: "Senior Manager, Bangalore Enterprises",
      quote: "I was hesitant at first, having never purchased a similar product before. The endorsement from Ratan Tata convinced me to try it, and I'm glad I did. It has transformed how I approach leadership and team management.",
      image: "https://randomuser.me/api/portraits/men/34.jpg",
      rating: 4,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="reviews" className="py-24 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-6">
            Trusted by Professional Leaders
          </h2>
          <p className="text-lg text-navy-600 max-w-3xl mx-auto">
            Hear from experienced managers and executives who have integrated our solution into their professional lives.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto fade-in-section">
          <div className="overflow-hidden rounded-2xl bg-navy-50 relative">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 p-12 md:p-16">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                    <div className="md:col-span-2">
                      <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden mx-auto md:mx-0 border-4 border-white shadow-lg">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-3">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-6 h-6 ${
                              i < testimonial.rating ? 'text-gold-500 fill-gold-500' : 'text-navy-300'
                            }`}
                          />
                        ))}
                      </div>
                      <blockquote className="text-navy-700 text-lg md:text-xl italic mb-6">
                        "{testimonial.quote}"
                      </blockquote>
                      <div>
                        <h4 className="text-xl font-bold text-navy-800">{testimonial.name}</h4>
                        <p className="text-navy-600">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-navy-50 hover-lift"
            >
              <ArrowLeft className="w-5 h-5 text-navy-800" />
            </button>

            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-navy-50 hover-lift"
            >
              <ArrowRight className="w-5 h-5 text-navy-800" />
            </button>
          </div>

          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentSlide === index ? 'bg-navy-800' : 'bg-navy-200'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-center fade-in-section">
          {[
            { number: "3,500+", label: "Business Leaders" },
            { number: "98%", label: "Satisfaction Rate" },
            { number: "15+", label: "Years Experience" },
            { number: "24/7", label: "Premium Support" },
          ].map((stat, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-4xl font-bold text-navy-800 mb-2">{stat.number}</h3>
              <p className="text-navy-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
