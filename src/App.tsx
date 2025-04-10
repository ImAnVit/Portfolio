import { User, Code, Briefcase, GraduationCap, Languages, Heart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div></div> {/* Removed "Vitaly Andriyko" */}
            <div className="space-x-8">
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
              <a href="#education" className="hover:text-blue-400 transition-colors">Education</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6">Vitaly Andriyko</h1>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-800/50">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-12">
            <User className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl font-bold">Profile</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/profile.jpg"
                alt="Vitaly Andriyko"
                className="rounded-lg shadow-xl w-full max-w-md mx-auto"
              />
            </div>
            <div>
              <p className="text-2xl italic text-gray-300 mb-6 border-l-4 border-blue-400 pl-4">
                "Professional with a diverse background in education, management and project leadership. Experienced in team coordination, problem-solving, and technical solutions development. Strong analytical and communication skills, with proficiency in languages and a passion for continuous learning."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-12">
            <Briefcase className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl font-bold">Employment History</h2>
          </div>
          <div className="space-y-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">Manager/Teacher at Bambini</h3>
                <p className="text-gray-400">09/2018–Present</p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Led a team of educators to implement engaging learning programs for students</li>
                <li>Designed and executed customized lesson plans to improve student performance</li>
                <li>Managed administrative tasks, curriculum development, and classroom operations</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">Manager of IT department at ASTA</h3>
                <p className="text-gray-400">10/2014–08/2018</p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Supervised IT operations and implemented strategic technology solutions</li>
                <li>Led a team of developers and engineers to optimize business processes</li>
                <li>Developed and managed IT infrastructure, ensuring system security and efficiency</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">Analyst at UMG (United Minerals Group)</h3>
                <p className="text-gray-400">03/2014–08/2014</p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Conducted data analysis and market research to improve business decision-making</li>
                <li>Provided insights and reports to optimize company strategies</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">Scientist at Donetsk Research Institute</h3>
                <p className="text-gray-400">01/2012–03/2014</p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Conducted research in economic and geological studies, analyzing large data sets</li>
                <li>Published research papers and collaborated with academic institutions</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">Project manager at AIESEC</h3>
                <p className="text-gray-400">01/2012–03/2014</p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Coordinated and executed international projects, managing multicultural teams</li>
                <li>Developed strategic initiatives to promote leadership and skill-building</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-gray-800/50">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-12">
            <GraduationCap className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl font-bold">Education</h2>
          </div>
          <div className="space-y-8">
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">PhD in Economics, Donetsk National Technical University</h3>
                <p className="text-gray-400">01/2018–Present</p>
              </div>
              <p className="text-gray-300">
                Currently pursuing advanced research in economic theory and applications, focusing on innovative solutions to modern economic challenges.
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">Master’s in Geology, Donetsk National Technical University</h3>
                <p className="text-gray-400">09/2006–01/2012</p>
              </div>
              <p className="text-gray-300">
                Specialized in geological sciences, mastering the study of earth processes, resource exploration, and environmental analysis.
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">Specialist in Management, Donetsk National Technical University</h3>
                <p className="text-gray-400">09/2010–01/2012</p>
              </div>
              <p className="text-gray-300">
                Developed expertise in organizational management, strategic planning, and leadership, with a focus on optimizing operational efficiency.
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold">Courses</h3>
              <ul className="list-disc list-inside text-gray-300">
                <li>Teaching Business English and Teaching Young Learners</li>
                <li>TEFL/TESL</li>
                <li>Professional retraining with the qualification “Coach/Teacher of physical culture and sports”</li>
                <li>Diving: Open water</li> {/* Added new course */}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Languages Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-8">
                <Code className="w-8 h-8 text-blue-400" />
                <h2 className="text-4xl font-bold">Skills</h2>
              </div>
              <div className="space-y-2">
                {[
                  "Computer Skills",
                  "Microsoft Office",
                  "Coding (python, html, css etc)", // Removed "java"
                  "WeChat Development Tool",
                  "Blender",
                  "Photoshop",
                  "FL Studio",
                  "Rekordbox",
                  "AutoCAD",
                  "MapInfo Professional",
                  "Critical thinking and problem solving",
                  "Communication Skills",
                  "Fast Learner",
                  "Effective Time Management",
                  "Ability to Work in a Team",
                  "Selling skills"
                ].map((skill) => (
                  <div key={skill} className="bg-gray-800/50 px-4 py-2 rounded-lg">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-8">
                <Languages className="w-8 h-8 text-blue-400" />
                <h2 className="text-4xl font-bold">Languages</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <p className="font-semibold">English</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <p className="font-semibold">Chinese</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <p className="font-semibold">Russian</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <p className="font-semibold">Ukrainian</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="py-20 px-6 bg-gray-800/50">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-12">
            <Heart className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl font-bold">Hobbies</h2>
          </div>
          <p className="text-lg text-gray-300">
            In my free time, I’m passionate about exploring new experiences and expanding my knowledge across a diverse range of interests. 
            I love traveling to uncover the beauty of different cultures and landscapes, while my curiosity drives me to delve into art, 
            philosophy, history, geology, astronomy, and psychology. I’m also an enthusiast of sports and enjoy staying active, 
            alongside contributing to community projects that make a positive impact. Personal development is close to my heart, 
            as I’m always seeking ways to grow and connect with the world around me.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-800/50">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-12">
            <User className="w-8 h-8 text-blue-400" /> {/* Add an icon for consistency */}
            <h2 className="text-4xl font-bold">Contact</h2>
          </div>
          <div className="space-y-4 text-center">
            <p className="text-lg text-gray-300">
              <a href="mailto:andriykovit@gmail.com" className="hover:text-blue-400 transition-colors">
                Email: andriykovit@gmail.com
              </a>
            </p>
            <p className="text-lg text-gray-300">
              <a href="tel:+8613087960924" className="hover:text-blue-400 transition-colors">
                Phone: +86 130 8796 0924
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-6">
        <div className="container mx-auto text-center text-gray-400">
          <p>© 2025 Vitaly Andriyko. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;