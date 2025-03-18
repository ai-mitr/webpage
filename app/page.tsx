"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Brain,
  Globe,
  Smile,
  Share2,
  Target,
  Wand2,
  Download,
  Github,
  Twitter,
  Instagram,
  Linkedin,
  Loader2,
  Copy,
  Check,
  Briefcase,
  User,
} from "lucide-react";
import Testimonials from "@/components/section/Testimonals";
import Features from "@/components/section/Features";
import * as dotenv from "dotenv";
dotenv.config();

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

interface FormData {
  usageType: string;
  contentType: string;
  tone: string;
  prompt: string;
}

export default function Home() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState("");
  const [formData, setFormData] = useState<FormData>({
    usageType: "",
    contentType: "",
    tone: "",
    prompt: "",
  });
  const [isCopied, setIsCopied] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const generateContent = async (
    usageType: string,
    type: string,
    tone: string,
    prompt: string
  ) => {
    try {
      // Instead of calling the API, just return a message about future updates
      return "Your content request has been received. We'll update you with the generated content soon.";

      // The API call code is commented out to be used in the future
      /*
      const payload = {
        prompt: `Generate a ${tone} ${type} ${usageType} post with the following details: ${prompt}`,
        maxTokens: 150,
      };
  
      console.log("Payload being sent to /api/openai:", payload);
  
      const response = await fetch("/api/openai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      console.log("Response from /api/openai:", response);
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error(`API Error: ${response.statusText}`, errorText);
        throw new Error(`API Error: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log("Parsed response data:", data);
  
      return data.data || "No content was generated. Try refining your input.";
      */
    } catch (error) {
      console.error("Error generating content:", error);
      return "An error occurred while processing your request. Please try again.";
    }
  };

  const handleGenerate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsGenerating(true);

    try {
      // Just show the update message instead of calling the API
      setGeneratedContent(
        "Your request has been submitted. We'll notify you when your content is ready."
      );

      // Commented out API call for future implementation
      /*
      const content = await generateContent(
        formData.usageType,
        formData.contentType,
        formData.tone,
        formData.prompt
      );
      setGeneratedContent(content);
      */
    } catch (error) {
      console.error("Error processing request:", error);
      setGeneratedContent(
        "Sorry, there was an error submitting your request. Please try again."
      );
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedContent);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  const handleDialogOpenChange = (open: boolean) => {
    setIsDialogOpen(open);
    if (!open) {
      // Reset form when dialog closes
      setFormData({ usageType: "", contentType: "", tone: "", prompt: "" });
      setGeneratedContent("");
      setIsCopied(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-5" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto z-10"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
            Create Personalized, AI-Generated Content Effortlessly
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Generate posts, posters, invitation cards, and more with AI-driven
            creativity
          </p>
          <Dialog open={isDialogOpen} onOpenChange={handleDialogOpenChange}>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Generate Now
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Generate Content</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleGenerate} className="space-y-6 mt-4">
                <div className="space-y-2">
                  <Label>Usage Type</Label>
                  <RadioGroup
                    className="flex gap-4"
                    value={formData.usageType}
                    onValueChange={(value) =>
                      setFormData({ ...formData, usageType: value })
                    }
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="personal" id="personal" />
                      <Label
                        htmlFor="personal"
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <User className="h-4 w-4" />
                        Personal
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="professional" id="professional" />
                      <Label
                        htmlFor="professional"
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <Briefcase className="h-4 w-4" />
                        Professional
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contentType">Content Type</Label>
                  <Select
                    required
                    value={formData.contentType}
                    onValueChange={(value) =>
                      setFormData({ ...formData, contentType: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select content type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="social">Social Media Post</SelectItem>
                      <SelectItem value="blog">Blog Post</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="ad">Advertisement</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tone">Tone</Label>
                  <Select
                    required
                    value={formData.tone}
                    onValueChange={(value) =>
                      setFormData({ ...formData, tone: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select tone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="casual">Casual</SelectItem>
                      <SelectItem value="funny">Funny</SelectItem>
                      <SelectItem value="formal">Formal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="prompt">What would you like to create?</Label>
                  <Textarea
                    id="prompt"
                    placeholder="Describe what you want to generate..."
                    className="min-h-[100px]"
                    required
                    value={formData.prompt}
                    onChange={(e) =>
                      setFormData({ ...formData, prompt: e.target.value })
                    }
                  />
                </div>

                <div className="flex justify-end space-x-4">
                  <DialogTrigger asChild>
                    <Button variant="outline" type="button">
                      Cancel
                    </Button>
                  </DialogTrigger>
                  <Button
                    type="submit"
                    disabled={isGenerating || !formData.usageType}
                  >
                    {isGenerating ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      "Generate"
                    )}
                  </Button>
                </div>

                {generatedContent && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-gray-50 rounded-lg relative"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <Label>Generated Content:</Label>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 px-2"
                        onClick={handleCopy}
                      >
                        {isCopied ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    <p className="mt-2 text-gray-700 whitespace-pre-wrap">
                      {generatedContent}
                    </p>
                  </motion.div>
                )}
              </form>
            </DialogContent>
          </Dialog>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <Features />
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
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
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <Testimonials />
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4">AI Content Generator</h3>
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
            © {new Date().getFullYear()} AI Content Generator. All rights
            reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
