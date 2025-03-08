
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const InfluencerSection = () => {
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

  const influencers = [
    {
      name: "Ratan Tata",
      title: "Industrialist & Philanthropist",
      quote: "This product represents the kind of innovative thinking that will drive India's future.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Ratan_Tata_photo.jpg/330px-Ratan_Tata_photo.jpg",
    },
    {
      name: "Anand Mahindra",
      title: "Chairman of Mahindra Group",
      quote: "A truly exceptional solution for business leaders seeking to enhance their professional toolkit.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Anand_Mahindra_World_Economic_Forum_2013.jpg/330px-Anand_Mahindra_World_Economic_Forum_2013.jpg",
    },
    {
      name: "Narayan Murthy",
      title: "Co-founder of Infosys",
      quote: "The attention to detail and user experience sets this product apart from anything else I've used.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/N_R_Narayana_Murthy.jpg/330px-N_R_Narayana_Murthy.jpg",
    },
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-navy-50 to-white" ref={sectionRef}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-6">
            Endorsed by Leaders You Trust
          </h2>
          <p className="text-lg text-navy-600 max-w-3xl mx-auto">
            See why the most respected figures in Indian business and technology recommend our solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {influencers.map((influencer, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 fade-in-section"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-navy-100">
                  <img 
                    src={influencer.image} 
                    alt={influencer.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <blockquote className="text-navy-700 italic mb-6">
                  "{influencer.quote}"
                </blockquote>
                <div className="mt-auto">
                  <h4 className="text-xl font-bold text-navy-800">{influencer.name}</h4>
                  <p className="text-navy-600">{influencer.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-navy-800 rounded-2xl overflow-hidden shadow-xl fade-in-section">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-white mb-6">
                See the Product in Action
              </h3>
              <p className="text-navy-100 text-lg mb-8">
                Watch our exclusive interview with Ratan Tata as he discusses how our product has transformed his approach to business leadership.
              </p>
              <Button className="bg-white text-navy-800 hover:bg-navy-50 hover-lift self-start">
                Watch Interview
              </Button>
            </div>
            <div className="relative min-h-[300px] lg:min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80" 
                alt="Business interview setting" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-navy-800 bg-opacity-70 rounded-full flex items-center justify-center cursor-pointer hover-lift">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfluencerSection;
