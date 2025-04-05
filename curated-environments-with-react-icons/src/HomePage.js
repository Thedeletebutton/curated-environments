
import { useState } from "react";

export default function HomePage() {
  const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <nav className="sticky top-0 z-50 bg-white border-b shadow-sm h-20 px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/CURATED ENVIRONMENTS FINAL DRAFT BLUE2.png" alt="Logo" className="h-12 w-auto" />
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#services" className="hover:underline">Services</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </nav>

      <section className="bg-black text-white pt-3 pb-1 px-6 text-center"><div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="flex flex-col items-center justify-center">
          <img src="/CURATED ENVIRONMENTS FINAL DRAFT BLUE2.png" alt="Curated Environments Logo" className="w-[500px] h-auto mb-4 mx-auto" />
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Spaces That Inspire. Studios That Perform.</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Custom creative environments for content creators, musicians, and remote professionals—bridging space, tech, and personal brand.
          </p>
        </div>
</div>
      </section>

      <section id="services" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="py-16 px-6 text-center"><div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="max-w-2xl mx-auto space-y-8 text-left">
          <div className="p-6 border rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Custom Studio Builds</h3>
            <p>Full-service workspace design and installation for creators, musicians, and professionals.</p>
          </div>
          <div className="p-6 border rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Brand & Social Strategy</h3>
            <p>Align your content, visuals, and audience growth with your creative environment.</p>
          </div>
          <div className="p-6 border rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Curated Gear & Tools</h3>
            <p>Recommended tech setups with affiliate links and hands-on integration support.</p>
          </div>
        </div>
</div>
      </section>


      <section id="about" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="bg-gray-100 py-16 px-6 text-center"><div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Curated Environments is a premium studio-building and multimedia workspace consultancy.
          We craft custom environments tailored to the needs of content creators, musicians, and remote professionals —
          blending interior design, technology, and brand strategy. Now based in Amsterdam, we serve clients across
          Europe and the U.S., helping them create spaces that inspire, perform, and grow.
        </p>
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-2">Who We Work With</h3>
          






<ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 list-disc text-lg text-gray-800 text-center md:text-left mx-auto w-fit pl-4">
  <li>Content Creators (streamers, podcasters, YouTubers)</li>
  <li>Musicians, Producers & Vocalists</li>
  <li>Remote Professionals & Freelancers</li>
  <li>Creative Startups & Agencies</li>
  <li>Coworking Hubs and Shared Spaces</li>
  <li>Students</li>
</ul>


  </li>
  <li>Remote Professionals & Freelancers</li>
  <li>Creative Startups & Agencies</li>
  <li>
    Coworking Hubs and Shared Spaces
    <ul className="list-disc pl-6 mt-2 text-sm text-center md:text-left">
      <li>Students</li>
    </ul>
  </li>
</ul>

  </li>
  <li>Remote Professionals & Freelancers</li>
  <li>Creative Startups & Agencies</li>
  <li>
    Coworking Hubs and Shared Spaces
    <ul className="list-disc pl-6 mt-2 text-sm text-center md:text-left">
      <li>Students</li>
    </ul>
  </li>
</ul>

  </li>
  <li>Remote Professionals & Freelancers</li>
  <li>Creative Startups & Agencies</li>
  <li>
    Coworking Hubs and Shared Spaces
    <ul className="list-disc pl-6 mt-2 text-sm text-center md:text-left">
      <li>Students</li>
    </ul>
  </li>
</ul>

  </li>
  <li>Remote Professionals & Freelancers</li>
  <li>Creative Startups & Agencies</li>
  <li>
    Coworking Hubs and Shared Spaces
    <ul className="list-disc pl-6 mt-2 text-sm text-center md:text-left">
      <li>Students</li>
    </ul>
  </li>
</ul>

  </li>
  <li>Remote Professionals & Freelancers</li>
  <li>Creative Startups & Agencies</li>
  <li>Coworking Hubs and Shared Spaces
    





<ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 list-disc text-lg text-gray-800 text-center md:text-left mx-auto w-fit pl-4">
  <li>Content Creators (streamers, podcasters, YouTubers)</li>
  <li>Musicians, Producers & Vocalists</li>
  <li>Remote Professionals & Freelancers</li>
  <li>Creative Startups & Agencies</li>
  <li>Coworking Hubs and Shared Spaces</li>
  <li>Students</li>
</ul>


  </li>
  <li>Remote Professionals & Freelancers</li>
  <li>Creative Startups & Agencies</li>
  <li>
    Coworking Hubs and Shared Spaces
    <ul className="list-disc pl-6 mt-2 text-sm text-center md:text-left">
      <li>Students</li>
    </ul>
  </li>
</ul>

  </li>
  <li>Remote Professionals & Freelancers</li>
  <li>Creative Startups & Agencies</li>
  <li>
    Coworking Hubs and Shared Spaces
    <ul className="list-disc pl-6 mt-2 text-sm text-center md:text-left">
      <li>Students</li>
    </ul>
  </li>
</ul>

  </li>
  <li>Remote Professionals & Freelancers</li>
  <li>Creative Startups & Agencies</li>
  <li>
    Coworking Hubs and Shared Spaces
    <ul className="list-disc pl-6 mt-2 text-sm text-center md:text-left">
      <li>Students</li>
    </ul>
  </li>
</ul>

  </li>
  <li>Remote Professionals & Freelancers</li>
  <li>Creative Startups & Agencies</li>
  <li>
    Coworking Hubs and Shared Spaces
    <ul className="list-disc pl-6 mt-2 text-sm text-center md:text-left">
      <li>Students</li>
    </ul>
  </li>
</ul>

  </li>
</ul>

        </div>
</div>
</section>

      <section id="socials" className="py-16 px-6 text-center"><div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h2 className="text-3xl font-bold mb-6">Connect With Us</h2>
        <div className="flex flex-col gap-4 text-lg text-blue-600">
          <a href="https://www.youtube.com/@CuratedEnvironments" target="_blank" rel="noopener noreferrer" className="hover:underline">YouTube</a>
          <a href="https://www.instagram.com/CuratedEnvironments" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
          <a href="https://www.facebook.com/CuratedEnvironments" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
          <a href="https://www.tiktok.com/@CuratedEnvironments" target="_blank" rel="noopener noreferrer" className="hover:underline">TikTok</a>
          <a href="https://www.twitch.tv/CuratedEnvironments" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitch</a>
        </div>
</div>
      </section>
    </main>
  );
}