// src/pages/About.tsx

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  RotateCcw,
  Headphones,
  Target,
  Gem,
  HeartHandshake,
  Sparkles,
} from "lucide-react";

const About = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const features = [
    {
      icon: ShieldCheck,
      title: "Trusted & Secure",
      description:
        "Security and customer trust are among our highest priorities.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description:
        "Reliable shipping designed to get your products to you quickly.",
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description:
        "A simple and straightforward return process for eligible items.",
    },
    {
      icon: Headphones,
      title: "Customer Support",
      description:
        "Friendly assistance whenever you need help with your orders.",
    },
  ];

  const values = [
    "Quality Livestock",
    "Customer Satisfaction",
    "Trust & Security",
    "Continuous Improvement",
    "Integrity & Responsibility",
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900 overflow-hidden">
      {/* Soft Background Accents */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-sky-500/5 blur-[150px]" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/20 bg-orange-50 text-orange-600 text-sm font-semibold mb-8">
                <Sparkles size={16} />
                About EGB Backyard
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight"
            >
              Our Story,
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-sky-500 bg-clip-text text-transparent">
                Our Purpose
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="max-w-3xl mx-auto mt-8 text-lg md:text-xl text-zinc-600 leading-relaxed"
            >
              EGB Backyard is a rooster farm e-commerce project built on the
              CC Ecom developer platform — created to deliver quality livestock,
              reliable service, and a trusted shopping experience on a worldwide
              scale.
            </motion.p>
          </div>
        </section>

        {/* Story Section */}
        <section className="px-6 pb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-sky-500/5 blur-3xl rounded-[40px]" />

              <div className="relative bg-white border border-zinc-200 shadow-sm rounded-[32px] p-8 md:p-14">
                <span className="inline-flex px-4 py-2 rounded-full bg-sky-50 text-sky-600 text-sm font-semibold mb-6">
                  Our Story
                </span>

                <h2 className="text-4xl font-bold mb-8">
                  How EGB Backyard Started
                </h2>

                <div className="space-y-6 text-zinc-600 text-lg leading-relaxed">
                  <p>
                    <strong className="text-zinc-900">CC Ecom</strong> is a
                    developer platform that mainly generates e-commerce
                    applications.{" "}
                    <strong className="text-zinc-900">EGB Backyard</strong> is
                    one of the projects built on this platform — a digital
                    commerce experience focused on rooster farms, where
                    customers can purchase quality roosters and related farm
                    products directly from their devices.
                  </p>

                  <p>
                    The goal was never just to create another online store. It
                    was to build a meaningful and useful platform capable of
                    serving people better — not only within the Philippines, but
                    on a worldwide scale.
                  </p>

                  <blockquote className="border-l-4 border-orange-500 bg-orange-50/50 rounded-r-2xl p-6 italic text-zinc-700">
                    “CC Ecom development platform created this shop in order to
                    serve better services — not just for Filipinos, but on a
                    worldwide scale. Every feature, every process, and every
                    decision was designed so that quality livestock and reliable
                    service could reach more people, more efficiently, and with
                    greater trust.”
                  </blockquote>

                  <p>
                    Building a digital platform for rooster farms requires
                    attention, focus, and genuine care for both the animals and
                    the customers. These principles became the foundation of
                    EGB Backyard’s development on the CC Ecom platform.
                  </p>

                  <p>
                    From the start, the focus has been on continuous learning,
                    modern technology, and strong software security — ensuring
                    that customer trust and the safety of every transaction
                    remain a priority.
                  </p>

                  <p>
                    Today, EGB Backyard continues to grow with the same values
                    it started with: quality livestock, reliability, continuous
                    improvement, and a commitment to serving customers with
                    integrity — powered by the CC Ecom developer platform and
                    ready to serve a global audience.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="px-6 pb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-8"
            >
              <motion.div
                variants={fadeUp}
                className="bg-white border border-zinc-200 shadow-sm rounded-3xl p-10"
              >
                <Target className="w-12 h-12 text-sky-500 mb-6" />

                <h3 className="text-3xl font-bold mb-4">Our Mission</h3>

                <p className="text-zinc-600 leading-relaxed">
                  To provide quality roosters and farm products, dependable
                  service, and a secure shopping experience while continuously
                  improving the value we deliver to customers — locally and
                  worldwide.
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="bg-white border border-zinc-200 shadow-sm rounded-3xl p-10"
              >
                <Gem className="w-12 h-12 text-orange-500 mb-6" />

                <h3 className="text-3xl font-bold mb-4">Our Values</h3>

                <div className="space-y-4">
                  {values.map((value) => (
                    <div
                      key={value}
                      className="flex items-center gap-3 text-zinc-700"
                    >
                      <HeartHandshake size={18} className="text-orange-500" />
                      {value}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="px-6 pb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                variants={fadeUp}
                className="text-4xl font-bold text-center mb-14"
              >
                Why Choose EGB Backyard?
              </motion.h2>

              <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                {features.map((feature) => (
                  <motion.div
                    key={feature.title}
                    variants={fadeUp}
                    whileHover={{
                      y: -8,
                    }}
                    className="bg-white border border-zinc-200 shadow-sm rounded-3xl p-8"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mb-5">
                      <feature.icon className="text-orange-500" size={28} />
                    </div>

                    <h3 className="text-xl font-semibold mb-3">
                      {feature.title}
                    </h3>

                    <p className="text-zinc-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Customer Promise */}
        <section className="px-6 pb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gradient-to-r from-orange-50 to-sky-50 border border-zinc-200 rounded-[32px] p-10 md:p-14"
            >
              <h2 className="text-4xl font-bold mb-6">Our Commitment</h2>

              <p className="text-zinc-600 text-lg leading-relaxed">
                Every decision we make is guided by a commitment to quality
                livestock, customer satisfaction, and continuous improvement. We
                aim to provide a shopping experience that customers can trust
                today and in the future — powered by the CC Ecom developer
                platform and built to serve the world.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-28">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Explore What EGB Backyard Has To Offer
            </motion.h2>

            <p className="text-zinc-500 text-lg mb-10">
              Discover quality roosters and farm products carefully selected to
              bring value, reliability, and excellence to your farm.
            </p>

            <Link to="/Shop">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
              >
                Start Shopping
                <ArrowRight size={22} />
              </motion.button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
