import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Mail, Twitter, Github, Linkedin, MessageCircle, BookOpen, Headphones, Activity } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const Contact = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
    // Handle form submission
  }

  const supportOptions = [
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Explore our detailed guides and FAQs",
      buttonText: "Visit Docs",
      link: "/docs",
    },
    {
      icon: Headphones,
      title: "Live Chat",
      description: "Talk to our team in real time (Pro & Team plans)",
      buttonText: "Start Chat",
      link: "/chat",
    },
    {
      icon: Activity,
      title: "Status Page",
      description: "Check system status for updates",
      buttonText: "View Status",
      link: "/status",
    },
  ];

  return (
    <section className="relative">
      <Navbar />
      <section className="flex flex-col w-full items-center pt-[5%] min-h-screen px-4 md:px-8 py-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-[poppins] font-bold text-3xl md:text-4xl mb-4">
            Get in Touch with Us
          </h1>
          <p className="text-gray-600 text-lg">
            Have questions, feedback, or just want to say hi? We're here to help you code, collaborate, and succeed.
          </p>
        </div>

        {/* Contact Form */}
        <div className="w-full max-w-2xl mx-auto mb-24">
          <h2 className="text-2xl font-bold text-center mb-8 font-[poppins]">Send Us a Message</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="support">Support</SelectItem>
                        <SelectItem value="sales">Sales</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Your message..." className="min-h-[150px]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-[#774BE5] hover:bg-[#774BE5]/90">
                Send Message
              </Button>
            </form>
          </Form>
          <p className="text-center text-gray-600 mt-6">
            We'll get back to you within 24 hours. Need urgent help? Check our{" "}
            <Link to="/docs" className="text-purple-600 hover:underline">
              Support Docs
            </Link>{" "}
            or join our community chat.
          </p>
        </div>

        {/* Contact Information */}
        <div className="w-full max-w-4xl mx-auto mb-24">
          <h2 className="text-2xl font-bold text-center mb-12 font-[poppins]">Other Ways to Reach Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <Mail className="w-8 h-8 text-purple-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600">support@codetogether.com</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <MessageCircle className="w-8 h-8 text-purple-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Community</h3>
              <p className="text-gray-600">Join our Discord server</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="flex justify-center gap-4 mb-4">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
              <h3 className="font-semibold mb-2">Social Media</h3>
              <p className="text-gray-600">Follow us for updates</p>
            </div>
          </div>
        </div>

        {/* Support Options */}
        <div className="w-full max-w-6xl mx-auto mb-24">
          <h2 className="text-2xl font-bold text-center mb-12 font-[poppins]">Need Help Right Now?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportOptions.map((option) => (
              <div key={option.title} className="text-center p-6 bg-white rounded-xl shadow-sm">
                <option.icon className="w-8 h-8 text-purple-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <Button variant="outline" asChild>
                  <Link to={option.link}>{option.buttonText}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="w-full max-w-4xl mx-auto mb-24 text-center">
          <h2 className="text-2xl font-bold mb-4 font-[poppins]">Where We Are</h2>
          <p className="text-gray-600">
            Based in San Francisco, California, serving developers worldwide.
          </p>
        </div>

        {/* Final CTA */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 font-[poppins]">Let's Build Something Together</h2>
          <p className="text-gray-600 mb-8">
            Whether it's a question about features, a partnership idea, or technical support, we're excited to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" className="bg-[#774BE5] hover:bg-[#774BE5]/90" asChild>
              <Link to="/register">Start Free</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="#contact-form">Send Message</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Contact;