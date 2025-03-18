/* eslint-disable @next/next/no-img-element */

import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface TestimonialProps {
  quote: string;
  name: string;
  position: string;
  avatarUrl: string;
}

const Testimonial = ({
  quote,
  name,
  position,
  avatarUrl,
}: TestimonialProps) => {
  return (
    <div className="flex flex-col p-6 md:p-8 rounded-xl bg-white shadow-soft border border-gray-100 h-full">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="text-gray-700 mb-6 flex-grow">{quote}</p>
      <div className="flex items-center mt-auto">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img
            src={avatarUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-600">{position}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  // In a real app, this would come from an API or CMS
  const testimonials = [
    {
      quote:
        "This AI Mitr has completely transformed how I create social media content. It saves me hours every week!",
      name: "Sarah Johnson",
      position: "Marketing Manager",
      avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      quote:
        "I was skeptical about AI-generated content, but the quality and personalization exceeded my expectations. Worth every penny.",
      name: "Michael Chen",
      position: "Freelance Designer",
      avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      quote:
        "The localization feature is a game-changer for our global campaigns. We can create content that resonates in multiple markets.",
      name: "Emma Rodriguez",
      position: "Content Strategist",
      avatarUrl: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-10">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-600">
            Join thousands of satisfied creators who&apos;ve transformed their
            content workflow
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <Testimonial {...testimonial} />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10 md:hidden">
            <Button variant="outline" size="icon" className="mr-2">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
