import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { MdContentCopy } from "react-icons/md";
import { IoCopySharp } from "react-icons/io5";

const Contact = () => {
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
          reply_to: form.email, 
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

  const [copySuccess, setCopySuccess] = useState(false);
  const handleMailCopied = async () => {
    setCopySuccess(true);
    navigator.clipboard.writeText("mallickantu19@gmail.com");
    setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
  }

  return (
    <section className="py-16 px-4 md:px-5 lg:px-8" id="contact">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-12 px-10 bg-gray-800 rounded-[50px] hover:shadow-2xl duration-300">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mb-8 md:mb-0"
        >
          <h2 className="text-white text-4xl font-bold mb-4">Let's Talk</h2>
          <p className="text-gray-100 mb-4 md:mb-6 lg:mb-24 max-w-sm ">
            You got any crazy ideas or just want to say hi? <br />Feel{" "}
            <span className="line-through text-gray-400">free</span> to drop a message.
          </p>
          <div className="text-sm">
            <h3 className="font-semibold text-gray-400 mb-1 ">EMAIL</h3>
            <div className="flex gap-3 items-center text-gray-200 text-lg">
              <p>mallickantu19@gmail.com</p>
              <div
                className="cursor-pointer p-2 hover:bg-gray-700 duration-100 rounded-full"
                onClick={handleMailCopied}
              >
                {copySuccess ? <IoCopySharp /> : <MdContentCopy />}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="w-full max-w-lg"
        >
          <form onSubmit={handleSubmit}>
            <label className="text-gray-400">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full py-1 bg-transparent mb-6 border-b-[1px] border-gray-300 text-gray-200 focus:outline-none"
            />
            <label className="text-gray-400">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full py-1 bg-transparent mb-6 border-b-[1px] border-gray-300 text-gray-200 focus:outline-none"
            />
            <label className="text-gray-400">Type your message here</label>
            <textarea
              rows={4}
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full py-1 bg-transparent mb-6 border-b-[1px] border-gray-300 text-gray-200 focus:outline-none"
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 float-right bg-gray-600 hover:bg-gray-500 transition text-white"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;