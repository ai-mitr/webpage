import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Copy, Check, Briefcase, User } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Interface for form data
interface FormData {
  usageType: string;
  contentType: string;
  tone: string;
  prompt: string;
}

const HeroSection = () => {
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

  // Simulate content generation
  const generateContent = async (
    usageType: string,
    contentType: string,
    tone: string,
    prompt: string
  ) => {
    // Simulate an API call delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Return mock content
    return `Generated ${tone} ${contentType} for ${usageType} use:\n\n${prompt}`;
  };

  // Handle form submission
  const handleGenerate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsGenerating(true);

    try {
      const content = await generateContent(
        formData.usageType,
        formData.contentType,
        formData.tone,
        formData.prompt
      );
      setGeneratedContent(content);
    } catch (error) {
      console.error("Error generating content:", error);
      setGeneratedContent("An error occurred. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  // Handle copying generated content to clipboard
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedContent);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  // Reset form when dialog closes
  const handleDialogOpenChange = (open: boolean) => {
    setIsDialogOpen(open);
    if (!open) {
      setFormData({ usageType: "", contentType: "", tone: "", prompt: "" });
      setGeneratedContent("");
      setIsCopied(false);
    }
  };

  return (
    <div>
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-5 z-0" />

      {/* Hero content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto z-10 relative"
      >
        <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-8 pb-3">
          Create Personalized, DIY Marketing Tool AI Startup
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Generate posts, posters, invitation cards, and more with AI-driven
          creativity.
        </p>

        {/* Dialog for content generation */}
        <Dialog open={isDialogOpen} onOpenChange={handleDialogOpenChange}>
          <DialogTrigger asChild>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 hover:cursor-pointer"
            >
              Generate Now
            </Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Generate Content</DialogTitle>
            </DialogHeader>

            {/* Form */}
            <form onSubmit={handleGenerate} className="space-y-6 mt-4">
              {/* Usage Type */}
              <div className="space-y-2">
                <Label>Usage Type</Label>
                <RadioGroup
                  className="flex gap-4"
                  value={formData.usageType}
                  onValueChange={(value) =>
                    setFormData({ ...formData, usageType: value })
                  }
                  required
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

              {/* Content Type */}
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

              {/* Tone */}
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

              {/* Prompt */}
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

              {/* Form actions */}
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

              {/* Generated content */}
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
    </div>
  );
};

export default HeroSection;
