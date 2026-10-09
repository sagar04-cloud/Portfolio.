import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-background relative z-10 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm font-semibold tracking-widest text-secondary">06 — CONTACT</span>
          <div className="h-[1px] flex-1 max-w-[100px] bg-border"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Side: Content */}
          <div>
            <div className="mb-12">
              <h2 className="text-[clamp(3rem,6vw,6rem)] leading-[1.1] font-bold tracking-tighter mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-secondary"
                >
                  Let's start
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-foreground"
                >
                  a conversation.
                </motion.div>
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-xl md:text-2xl text-secondary max-w-md leading-relaxed font-medium"
              >
                Whether you're building an AI product, web application, automation workflow or something completely new, let's create something meaningful.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <a 
                href="mailto:sagaru.works@gmail.com"
                className="group flex items-center justify-center gap-2 bg-foreground text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 hover:shadow-2xl hover:shadow-foreground/20 w-full sm:w-auto"
              >
                <Mail size={20} />
                <span>EMAIL ME</span>
                <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ml-1" />
              </a>
              
              <div className="flex items-center gap-4 w-full sm:w-auto mt-4 sm:mt-0">
                <a 
                  href="https://www.linkedin.com/in/sagar-u/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex justify-center items-center gap-2 px-6 py-4 rounded-full border border-border font-bold hover:border-foreground hover:bg-foreground hover:text-white transition-all group"
                  title="LinkedIn"
                >
                  <span className="">LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/sagar04-cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex justify-center items-center gap-2 px-6 py-4 rounded-full border border-border font-bold hover:border-foreground hover:bg-foreground hover:text-white transition-all group"
                  title="GitHub"
                >
                  <span className="">GitHub</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Attractive Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-full min-h-[400px] lg:min-h-[500px] flex items-center justify-center"
          >
            {/* Background glowing orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-accent/20 rounded-full blur-[80px] -z-10 animate-pulse"></div>
            
            {/* Glassmorphic floating card */}
            <motion.div 
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 1, -1, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10 w-full max-w-sm bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]"
            >
              <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mb-6 shadow-lg shadow-accent/30">
                <MessageSquare size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Available for Work</h3>
              <p className="text-secondary mb-6 font-medium">I'm currently accepting new projects and freelance opportunities.</p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm font-semibold text-foreground bg-white/50 p-3 rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  Responsive globally
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-foreground bg-white/50 p-3 rounded-xl">
                  <span className="text-xl">⚡</span>
                  Fast turnaround
                </div>
              </div>
              
              {/* Decorative circles */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-accent/40 to-purple-500/40 rounded-full blur-xl -z-10"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-tr from-blue-400/30 to-accent/30 rounded-full blur-xl -z-10"></div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
