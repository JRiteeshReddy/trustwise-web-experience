
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-6">TrustWise</h3>
            <p className="text-navy-200 mb-6">
              Premium solutions designed for experienced professionals who value quality, trust, and sophisticated simplicity.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-10 h-10 rounded-full bg-navy-700 flex items-center justify-center hover:bg-gold-500 transition-colors duration-300"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['About Us', 'Products', 'Services', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-navy-200 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Resources</h4>
            <ul className="space-y-4">
              {['FAQs', 'Support Center', 'Privacy Policy', 'Terms of Service', 'Blog'].map((resource) => (
                <li key={resource}>
                  <a 
                    href="#" 
                    className="text-navy-200 hover:text-white transition-colors duration-200"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0" />
                <span className="text-navy-200">
                  100 Business Park, Tower A, <br />
                  Mumbai, Maharashtra 400001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <span className="text-navy-200">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <span className="text-navy-200">support@trustwise.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-navy-700 text-center">
          <p className="text-navy-300">
            &copy; {new Date().getFullYear()} TrustWise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
