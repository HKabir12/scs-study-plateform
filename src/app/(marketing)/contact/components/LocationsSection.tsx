"use client";

import { motion } from "framer-motion";

export default function LocationsSection() {
  return (
    <section className="py-6 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          আমাদের অবস্থান
        </motion.h2>
        <motion.p
          className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          আমাদের অফিসগুলো পাবনা জেলায় অবস্থিত। নিচে আমাদের প্রধান অফিস ও উত্তরা
          শাখার অবস্থান দেখানো হলো:
        </motion.p>

        <div>
          {/* Head Office */}
          <motion.div
            className="rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-xl mb-2 bg-emerald-500 text-white py-2">
              Head Office
            </h3>
            <iframe
              title="Head Office Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227.78500335118838!2d89.23799454178709!3d24.011307962449294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b4c1da4b84f%3A0xee6b6c13246f4e8a!2sSazzad%20Physics%20Academy%20%26%20Admission%20Care!5e0!3m2!1sen!2sbd!4v1760620452599!5m2!1sen!2sbd"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-b-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
