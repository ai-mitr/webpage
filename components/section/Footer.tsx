import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-4">AI Mitr</h3>
            <p className="text-gray-600 max-w-md">
              Create engaging, personalized content with the power of AI.
              Perfect for marketers, content creators, and businesses.
            </p>
          </div>
          <div className="md:text-right">
            <div className="flex gap-4 md:justify-end mb-4">
              <a
                href="https://x.com/ai_mitr_"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/ai_mitr_/"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/ai-mitr"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/showcase/ai-mitr/about/?viewAsMember=true"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="space-x-4">
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} AI Mitr. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
