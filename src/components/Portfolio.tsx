import React from 'react';
import { BookOpen, Code } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-24">
      {/* Portfolio Header */}
      <section className="py-10 px-6">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-8">Portfolio</h1>
          <p className="text-xl text-gray-300 mb-10">
            A collection of my IT courses and projects demonstrating my skills and experience.
          </p>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-10 px-6 bg-gray-800/50">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <BookOpen className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl font-bold">Courses</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Course cards will be added here */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-blue-400/20 transition-all">
              <h3 className="text-xl font-bold mb-3">Coming Soon</h3>
              <p className="text-gray-300">
                Course details will be added here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-10 px-6">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Code className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl font-bold">Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project cards will be added here */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-blue-400/20 transition-all">
              <h3 className="text-xl font-bold mb-3">Coming Soon</h3>
              <p className="text-gray-300">
                Project details will be added here.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
