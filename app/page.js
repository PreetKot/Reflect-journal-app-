import React from "react";
import {
  Book,
  Sparkles,
  Lock,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TestimonialCarousel from "@/components/testimonial-carousel";
import Link from "next/link";
import { getDailyPrompt } from "@/actions/public";
import faqs from "@/data/faqs";

const features = [
  {
    icon: Book,
    title: "Rich Text Editor",
    description:
      "Express yourself with a powerful editor supporting markdown, formatting, and more.",
  },
  {
    icon: Sparkles,
    title: "Daily Inspiration",
    description:
      "Get inspired with daily prompts and mood-based imagery to spark your creativity.",
  },
  {
    icon: Lock,
    title: "Secure & Private",
    description:
      "Your thoughts are safe with enterprise-grade security and privacy features.",
  },
];

export default async function LandingPage() {
  const advice = await getDailyPrompt();

  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen">
      <div className="container mx-auto px-4 pt-16 pb-24">
        {/* Hero Section */}
        <section className="text-center space-y-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
            Reflect, Write, Grow
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            A beautiful, intuitive space for journaling and self-reflection. Write your thoughts, track your moods, and grow with intention.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link href="/dashboard">
              <Button size="lg" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg transform hover:scale-105 transition-all duration-200">
                Start Writing ✨
              </Button>
            </Link>
            <Link href="#features">
              <Button variant="outline" size="lg" className="px-8 py-4 border-2 border-blue-300 text-blue-700 hover:bg-blue-50 hover:border-blue-400 transition-colors">
                Learn More
              </Button>
            </Link>
          </div>
        </section>

        {/* Daily Prompt */}
        {advice && (
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-2 text-blue-700 font-semibold mb-3">
                <Calendar className="h-5 w-5 text-purple-600" />
                Today&apos;s Prompt
              </div>
              <p className="text-lg text-gray-800 leading-relaxed">{advice}</p>
            </div>
          </div>
        )}

        {/* Features */}
        <section id="features" className="mt-20">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-12">
            Everything you need to journal mindfully
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, idx) => {
              const colors = [
                'from-blue-500 to-cyan-500',
                'from-purple-500 to-pink-500', 
                'from-green-500 to-emerald-500'
              ];
              const bgColors = [
                'from-blue-50 to-cyan-50',
                'from-purple-50 to-pink-50',
                'from-green-50 to-emerald-50'
              ];
              return (
                <Card key={idx} className={`bg-gradient-to-br ${bgColors[idx]} border-0 hover:shadow-lg transform hover:scale-105 transition-all duration-200`}>
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 bg-gradient-to-r ${colors[idx]} rounded-lg flex items-center justify-center mb-4 mx-auto shadow-md`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                    <p className="text-gray-700">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
        </div>
      </section>

      {/* Testimonials */}
      <div className="mt-20">
        <TestimonialCarousel />
      </div>

        {/* FAQ */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-10">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-white border border-blue-200 rounded-lg px-4 shadow-sm hover:shadow-md transition-shadow">
                <AccordionTrigger className="text-lg text-gray-800 font-medium hover:no-underline hover:text-blue-600 transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

        {/* CTA */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-indigo-100 rounded-xl p-12 text-center border border-blue-200 shadow-lg">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Start your journaling journey today
            </h2>
            <p className="text-gray-700 mb-8 text-lg">
              Join thousands of people who use Reflect for mindful writing and personal growth.
            </p>
            <Link href="/dashboard">
              <Button size="lg" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg transform hover:scale-105 transition-all duration-200">
                Get Started Free ✨
            </Button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}