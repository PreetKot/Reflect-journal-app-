"use client";

import React from "react";
import { Card, CardContent } from "./ui/card";
import testimonials from "@/data/testimonials";

const TestimonialCarousel = () => {
  const colors = [
    'from-blue-100 to-cyan-100 border-blue-200',
    'from-purple-100 to-pink-100 border-purple-200',
    'from-green-100 to-emerald-100 border-green-200',
    'from-orange-100 to-yellow-100 border-orange-200',
    'from-indigo-100 to-purple-100 border-indigo-200',
    'from-pink-100 to-rose-100 border-pink-200'
  ];

  return (
    <div className="mt-20">
      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-12">
        What Our Writers Say
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.slice(0, 6).map((testimonial, index) => (
          <Card key={index} className={`bg-gradient-to-br ${colors[index]} border-0 hover:shadow-lg transform hover:scale-105 transition-all duration-200`}>
            <CardContent className="p-6">
              <blockquote className="space-y-4">
                <p className="text-gray-700 italic leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </p>
                <footer>
                  <div className="font-semibold text-gray-800">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </footer>
              </blockquote>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
