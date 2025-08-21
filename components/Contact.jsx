"use client";

import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Coding",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hello, my name is ${form.name}.
Email: ${form.email}
WhatsApp: ${form.phone}
I am interested in: ${form.service}`;

    // Nomor WA tujuan → ganti dengan nomor kamu
    const waNumber = "6285378336699";
    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="max-w-lg mx-5 md:mx-auto mt-25 p-6 shadow-lg rounded-2xl shadow-green-400 cursor-pointer">
      <h2 className="text-2xl font-semibold mb-5 text-center">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name of Company"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-green-400"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-green-400"
          />
        </div>

        {/* WhatsApp */}
        <div>
          <label className="block mb-1 font-medium">WhatsApp Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="0853xxxxxxxx"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-green-400"
          />
        </div>

        {/* Dropdown */}
        <div>
          <label className="block mb-1 font-medium">Service</label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-green-400"
          >
            <option value="Coding">Coding</option>
            <option value="Kitchen Management">Kitchen Management</option>
            <option value="Data Entry">Data Entry</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full border-green-400 border cursor-pointer font-semibold py-2 px-4 rounded-lg hover:text-green-400 transition-all duration-200"
        >
          Send via WhatsApp
        </button>
      </form>
    </div>
  );
};

export default Contact;
