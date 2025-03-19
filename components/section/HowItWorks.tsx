import React from "react";
import { Target, Wand2, Download } from "lucide-react";
import { motion } from "framer-motion";

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};
const HowItWorks = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <Target className="h-8 w-8" />,
            title: "Set Your Goal",
            description: "Enter content goal and tone",
          },
          {
            icon: <Wand2 className="h-8 w-8" />,
            title: "AI Magic",
            description: "AI generates personalized content",
          },
          {
            icon: <Download className="h-8 w-8" />,
            title: "Download & Share",
            description: "Download or share directly",
          },
        ].map((step, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            variants={slideUp}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="text-center"
          >
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-blue-600">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
