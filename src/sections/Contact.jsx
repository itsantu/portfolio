import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Antu",
          from_email: form.email,
          to_email: import.meta.env.VITE_TO_EMAIL,
          message: form.message,
        },
        import.meta.env.VITE_EMAIL_USER_ID
      );

      setLoading(false);
      setForm({
        name: "",
        email: "",
        message: "",
      });
      alert("Your message has been sent");
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <section
      className="py-20 "
      id="contact"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-2xl">
          <h2 className="text-4xl font-bold text-white mb-6">Contact Me</h2>
          <p className="text-lg text-gray-300 mb-8">
            Hey, whether you're looking for a frontend web developer or just
            want to chat, I'm here to help.
          </p>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-700 text-white p-4 rounded-md border-2 border-gray-600 focus:border-blue-500 focus:outline-none transition-all duration-300 peer"
                placeholder=" "
              />
              <label className="absolute text- text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                Full Name
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-700 text-white p-4 rounded-md border-2 border-gray-600 focus:border-blue-500 focus:outline-none transition-all duration-300 peer"
                placeholder=" "
              />
              <label className="absolute text- text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                Email
              </label>
            </div>
            <div className="relative">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-gray-700 text-white p-4 rounded-md border-2 border-gray-600 focus:border-blue-500 focus:outline-none transition-all duration-300 peer"
                placeholder=" "
              />
              <label className="absolute text- text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                Your message
              </label>
            </div>
            <button
              className={`w-full p-4 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
