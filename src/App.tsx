import React from 'react';
import { ArrowRight, CheckCircle2, Globe2, Zap, Shield, Users } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Build Something Amazing
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Create stunning websites with our powerful platform. Fast, secure, and beautiful out of the box.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium inline-flex items-center hover:bg-blue-700 transition-colors">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
            <p className="mt-4 text-gray-600">Everything you need to succeed</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Globe2 className="h-8 w-8 text-blue-600" />}
              title="Global Reach"
              description="Connect with customers worldwide through our powerful platform."
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8 text-blue-600" />}
              title="Lightning Fast"
              description="Optimized performance ensures your site loads in milliseconds."
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8 text-blue-600" />}
              title="Secure by Default"
              description="Enterprise-grade security keeps your data safe and protected."
            />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
            <p className="mt-4 text-gray-600">Trusted by thousands of companies worldwide</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80"
              name="Sarah Johnson"
              role="CEO at TechCorp"
              quote="This platform has transformed how we do business. The results have been incredible."
            />
            <TestimonialCard
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80"
              name="Mark Thompson"
              role="Founder at StartupX"
              quote="The best decision we made was choosing this platform. Our productivity has soared."
            />
            <TestimonialCard
              image="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80"
              name="Emily Chen"
              role="CTO at InnovateCo"
              quote="Exceptional service and outstanding results. Highly recommended!"
            />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Ready to Get Started?</h2>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium inline-flex items-center hover:bg-blue-700 transition-colors">
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">About</a></li>
                <li><a href="#" className="hover:text-blue-400">Careers</a></li>
                <li><a href="#" className="hover:text-blue-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Documentation</a></li>
                <li><a href="#" className="hover:text-blue-400">Blog</a></li>
                <li><a href="#" className="hover:text-blue-400">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Privacy</a></li>
                <li><a href="#" className="hover:text-blue-400">Terms</a></li>
                <li><a href="#" className="hover:text-blue-400">Security</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Twitter</a></li>
                <li><a href="#" className="hover:text-blue-400">LinkedIn</a></li>
                <li><a href="#" className="hover:text-blue-400">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center text-gray-400">
            <p>&copy; 2025 Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function TestimonialCard({ image, name, role, quote }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
          <p className="text-gray-600">{role}</p>
        </div>
      </div>
      <p className="text-gray-600 italic">"{quote}"</p>
    </div>
  );
}

export default App;