
import { useState } from "react";

export default function HomePage() {
  const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <nav className="sticky top-0 z-50 bg-white border-b shadow-sm py-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="w-10 h-10" />
          <span className="text-lg font-bold">Curated Environments</span>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#services" className="hover:underline">Services</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#portfolio" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </nav>

      <section className="bg-black text-white py-20 px-6 text-center">
        <div className="flex flex-col items-center justify-center">
          <img src="/logo.png" alt="Curated Environments Logo" className="w-32 h-32 mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Spaces That Inspire. Studios That Perform.</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Custom creative environments for content creators, musicians, and remote professionals—bridging space, tech, and personal brand.
          </p>
        </div>
      </section>
    </main>
  );
}
