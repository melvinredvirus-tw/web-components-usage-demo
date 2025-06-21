'use client';

import { useState } from 'react';

export default function AboutPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you could trigger an API call or integration
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <main className="p-6 max-w-5xl mx-auto">
      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>

      {/* About Premium Service */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">About Our Premium Service</h2>
        <p className="text-gray-500 leading-relaxed">
          Our premium service is designed to provide the best quality and experience to our customers. From high-quality
          fabrics to personalized customer support, we ensure every product meets the highest standards of excellence.
        </p>
      </section>

      {/* Vision from the Founder */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">A Vision for the Top</h2>
        <p className="text-gray-500 leading-relaxed">
          Our founder envisions taking this company to the very top of the fashion and lifestyle industry. With
          innovative ideas, sustainable practices, and a customer-first approach, we are committed to building a global
          brand that truly makes a difference.
        </p>
      </section>

      {/* Help to the Eco-System */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Helping the Eco-System</h2>
        <p className="text-gray-500 leading-relaxed">
          We believe in giving back to the environment. By using eco-friendly materials and processes, and ensuring the
          durability and quality of every cloth, we aim to reduce fashion waste and help build a more sustainable
          future.
        </p>
      </section>

      {/* Contact Us Form */}
      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="grid gap-6 max-w-xl mx-auto">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="border p-3 rounded outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="border p-3 rounded outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows={5}
            className="border p-3 rounded outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <button type="submit" className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
