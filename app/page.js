import React from "react";
import {
  Book,
  Sparkles,
  Lock,
  Calendar,
  ChevronRight,
  BarChart2,
  FileText,
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
import { Skeleton } from "@/components/ui/skeleton";
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
  <div className="container mx-auto px-4 pt-20 pb-32">
    {/* Hero Section */}
    <section className="text-center space-y-6 max-w-4xl mx-auto">
      <h1 className="text-6xl md:text-7xl font-serif text-orange-900 leading-tight tracking-tight">
        Reflect, Write, Grow.
      </h1>
      <p className="text-lg md:text-xl text-orange-700">
        A mindful space for journaling, self-reflection, and personal growth.
      </p>
      <div className="mt-10 flex flex-col md:flex-row justify-center gap-4">
        <Link href="/dashboard">
          <Button variant="journal" className="px-6 py-4 text-lg rounded-full">
            Start Journaling <ChevronRight className="h-5 w-5" />
          </Button>
        </Link>
        <Link href="#features">
          <Button variant="outline" className="px-6 py-4 text-lg rounded-full border-orange-600 text-orange-600 hover:bg-orange-100">
            Learn More
          </Button>
        </Link>
      </div>
    </section>

    {/* Glass Prompt */}
    <div className="relative mt-20 max-w-3xl mx-auto bg-white/30 backdrop-blur-lg border border-orange-100 rounded-xl p-6 shadow-lg">
      <div className="flex items-center justify-between border-b border-orange-200 pb-3 mb-4">
        <div className="flex items-center gap-2 text-orange-700 font-medium">
          <Calendar className="h-5 w-5" /> Today’s Prompt
        </div>
        <div className="flex gap-1">
          <div className="h-2 w-2 bg-orange-300 rounded-full" />
          <div className="h-2 w-2 bg-orange-400 rounded-full" />
        </div>
      </div>
      {advice ? (
        <p className="text-lg text-orange-900">{advice}</p>
      ) : (
        <div className="space-y-2">
          <Skeleton className="h-4 w-3/4 bg-orange-100 rounded" />
          <Skeleton className="h-4 w-full bg-orange-100 rounded" />
          <Skeleton className="h-4 w-2/3 bg-orange-100 rounded" />
        </div>
      )}
    </div>

    {/* Features */}
    <section id="features" className="mt-24 grid md:grid-cols-3 gap-8">
      {features.map((feature, idx) => (
        <Card key={idx} className="bg-white hover:shadow-xl transition-shadow border border-orange-100 rounded-2xl">
          <CardContent className="p-6">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <feature.icon className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-orange-900 mb-2">{feature.title}</h3>
            <p className="text-orange-700 text-sm">{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </section>

    {/* Testimonials */}
    <div className="mt-28">
      <TestimonialCarousel />
    </div>

    {/* FAQ */}
    <div className="mt-24 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-orange-900 mb-10">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map((faq, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`}>
            <AccordionTrigger className="text-lg text-orange-900 font-medium">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-orange-700">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>

    {/* CTA */}
    <div className="mt-32">
      <Card className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-3xl shadow-inner">
        <CardContent className="p-12 text-center">
          <h2 className="text-3xl font-bold text-orange-900 mb-4">
            Begin Your Journey with Reflct
          </h2>
          <p className="text-orange-700 mb-6">
            Join a growing community of mindful writers.
          </p>
          <Button size="lg" variant="journal" className="rounded-full px-8 py-4 text-lg">
            Get Started <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </CardContent>
      </Card>
    </div>
  </div>
);

}
