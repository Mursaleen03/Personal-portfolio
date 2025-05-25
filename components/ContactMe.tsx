import React, { useState } from "react";
import { FaGithub, FaEnvelope, FaPhone, FaPaperPlane } from "react-icons/fa";
import MagicButton from "./MagicButton";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // You can implement your form submission logic here
      console.log("Form submitted:", formData);
      setSubmitStatus('success');
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12" id="contact">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Contact Info */}
        <div 
          className="relative overflow-hidden rounded-3xl p-8"
          style={{
            background: "rgb(4,7,29)",
            backgroundImage: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          }}
        >
          <div className="relative z-10 space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch</h3>
            <div className="space-y-6">
              <a 
                href="mailto:mohdmursaleen9306@gmail.com"
                className="flex items-center gap-4 text-white-200 hover:text-purple transition-colors group"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#161A31] group-hover:bg-purple/10 transition-colors">
                  <FaEnvelope className="text-xl" />
                </div>
                <span className="sm:overflow-auto">mohdmursaleen9306@gmail.com</span>
              </a>
              <a 
                href="tel:+919306266208"
                className="flex items-center gap-4 text-white-200 hover:text-purple transition-colors group"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#161A31] group-hover:bg-purple/10 transition-colors">
                  <FaPhone className="text-xl" />
                </div>
                <span>+91 9306266208</span>
              </a>
              <a 
                href="https://github.com/Mursaleen03"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white-200 hover:text-purple transition-colors group"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#161A31] group-hover:bg-purple/10 transition-colors">
                  <FaGithub className="text-xl" />
                </div>
                <span>github.com/Mursaleen03</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/mohd-mursaleen-557a10296/"
                target="_blank"
                rel="noopener noreferrer"
                className="items-center gap-4 text-white-200 hover:text-purple transition-colors group inline-block"
              >
                <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#161A31] group-hover:bg-purple/10 transition-colors">
                  {/* <FaLinkedin className="text-xl" /> */}
                  <img src="/link.svg" alt="" />
                </span>
              </a>
              <a 
                href="https://www.instagram.com/mr_ishan_o3/"
                target="_blank"
                rel="noopener noreferrer"
                className="items-center gap-4 text-white-200 hover:text-purple transition-colors group inline-block m-2"
              >
                <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#161A31] group-hover:bg-purple/10 transition-colors">
                  {/* <FaInstagram className="text-xl" /> */}
                  <img src="/insta.svg" alt="" />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div 
          className="relative overflow-hidden rounded-3xl p-8"
          style={{
            background: "rgb(4,7,29)",
            backgroundImage: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          }}
        >
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#161A31] border border-white/[0.1] text-white placeholder:text-white-200 focus:outline-none focus:border-purple transition-colors"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#161A31] border border-white/[0.1] text-white placeholder:text-white-200 focus:outline-none focus:border-purple transition-colors"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#161A31] border border-white/[0.1] text-white placeholder:text-white-200 focus:outline-none focus:border-purple transition-colors resize-none"
                  required
                ></textarea>
              </div>
              <div>
                <MagicButton
                  title={isSubmitting ? "Sending..." : "Send Message"}
                  icon={<FaPaperPlane />}
                  position="right"
                  handleClick={() => {
                    if (!isSubmitting) {
                      handleSubmit(new Event('submit') as any);
                    }
                  }}
                  otherClasses="w-full justify-center !bg-[#161A31]"
                />
              </div>
              {submitStatus === 'success' && (
                <p className="text-green-500 text-center">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
