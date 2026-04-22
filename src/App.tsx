/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-paper text-ink selection:bg-white selection:text-black flex flex-col items-center justify-center p-4">
      <Navbar />
      
      {/* Main Container */}
      <div id="home" className="w-full max-w-[1000px] border border-border-dark relative flex flex-col lg:flex-row bg-paper min-h-[700px] lg:pb-[60px]">
        
        {/* Left Pane */}
        <div className="lg:w-[350px] lg:border-r border-border-dark flex flex-col p-10 gap-10">
          <Hero />
          <About />
          <Skills />
        </div>

        {/* Right Pane */}
        <div id="projects" className="flex-1 p-10">
          <Projects />
        </div>

        {/* Contact Bar (Absolute positioning inside relative container) */}
        <Contact />
      </div>

      <Footer />
    </main>
  );
}

