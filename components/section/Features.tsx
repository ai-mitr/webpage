import React from "react";
import { Brain, Globe, MessageSquare, Share2 } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="flex flex-col items-center p-6 rounded-xl bg-white shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-brand-purple/10 text-brand-purple mb-4 transform transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      title: "AI Mitr",
      description:
        "Generate text for flyers, captions, and headings using natural language processing",
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      title: "Auto Design Assistant",
      description:
        "Users can input their purpose (e.g., 'Create a wedding invitation') and get a pre-made design",
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-purple-600" />,
      title: "Mood-based generation",
      description:
        "Choose from various tones including Funny, Professional, Romantic, and more to match your content needs.",
    },
    {
      icon: <Share2 className="w-8 h-8 text-purple-600" />,
      title: "Social media integration",
      description:
        "Seamlessly share your generated content directly to all your social media platforms with a single click.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-10">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Power Your Creativity with AI
          </h2>
          <p className="text-lg text-gray-600">
            Our platform combines cutting-edge AI technology with intuitive
            design to help you create amazing content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
