import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Star } from 'lucide-react';

const ServiceDashboard = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const sampleData = {
    commercialTechsRevenue: [
      { name: "Tech 1", revenue: 2500 },
      { name: "Tech 2", revenue: 2200 },
      { name: "Tech 3", revenue: 2000 }
    ],
    residentialTechsRevenue: [
      { name: "Tech A", revenue: 1800 },
      { name: "Tech B", revenue: 1600 },
      { name: "Tech C", revenue: 1500 }
    ],
    commercialTechsAverage: [
      { name: "Tech X", average: 850 },
      { name: "Tech Y", average: 820 },
      { name: "Tech Z", average: 780 }
    ],
    residentialTechsAverage: [
      { name: "Tech M", average: 650 },
      { name: "Tech N", average: 620 },
      { name: "Tech O", average: 580 }
    ],
    reviews: [
      { 
        reviewer: "John Smith",
        text: "Rain One's service was exceptional! The technician was professional and fixed our irrigation system quickly.",
        rating: 5,
        date: "2024-01-15"
      },
      { 
        reviewer: "Sarah Johnson",
        text: "Great experience with Rain One. They were on time and very knowledgeable.",
        rating: 5,
        date: "2024-01-14"
      },
      { 
        reviewer: "Mike Wilson",
        text: "Professional service from start to finish. Highly recommend Rain One!",
        rating: 4,
        date: "2024-01-13"
      }
    ],
    topItems: [
      { name: "Service Item 1", sales: 45 },
      { name: "Service Item 2", sales: 38 },
      { name: "Service Item 3", sales: 32 },
      { name: "Service Item 4", sales: 28 },
      { name: "Service Item 5", sales: 25 }
    ],
    conversionRates: {
      residential: 65,
      commercial: 72
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReviewIndex((prev) => 
        (prev + 1) % sampleData.reviews.length
      );
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 p-8 relative">
      <div className="absolute top-4 left-4">
        <h1 className="text-white text-3xl font-bold">Rain One Service</h1>
      </div>

      <div className="grid grid-cols-12 gap-8 h-screen pt-16">
        {/* Left Column */}
        <div className="col-span-3 space-y-4">
          {/* Commercial Revenue */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-xl">Commercial Technician Revenue (Prior Day)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {sampleData.commercialTechsRevenue.map((tech, index) => (
                  <div key={tech.name} className="flex justify-between items-center p-3 bg-gray-700 rounded">
                    <span className="text-white text-lg">{tech.name}</span>
                    <span className="text-green-400 text-lg">${tech.revenue.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Commercial Average Ticket */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-xl">Commercial Technician Average Ticket (Prior Day)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {sampleData.commercialTechsAverage.map((tech, index) => (
                  <div key={tech.name} className="flex justify-between items-center p-3 bg-gray-700 rounded">
                    <span className="text-white text-lg">{tech.name}</span>
                    <span className="text-blue-400 text-lg">${tech.average.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Residential Revenue */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-xl">Residential Technician Revenue (Prior Day)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {sampleData.residentialTechsRevenue.map((tech, index) => (
                  <div key={tech.name} className="flex justify-between items-center p-3 bg-gray-700 rounded">
                    <span className="text-white text-lg">{tech.name}</span>
                    <span className="text-green-400 text-lg">${tech.revenue.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Residential Average Ticket */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-xl">Residential Technician Average Ticket (Prior Day)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {sampleData.residentialTechsAverage.map((tech, index) => (
                  <div key={tech.name} className="flex justify-between items-center p-3 bg-gray-700 rounded">
                    <span className="text-white text-lg">{tech.name}</span>
                    <span className="text-blue-400 text-lg">${tech.average.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Center Column - Featured Review */}
        <div className="col-span-6">
          <Card className="bg-gray-800 border-gray-700 h-full">
            <CardHeader>
              <CardTitle className="text-white text-2xl flex justify-between items-center">
                <span>Latest Google Reviews</span>
                <a 
                  href="https://www.google.com/maps/place/Rain+One,+Inc./@40.0669799,-82.9681761,17z/data=!4m8!3m7!1s0x8838f53234daaaab:0x4affe7ad175156d5!8m2!3d40.0669799!4d-82.9681761!9m1!1b1!16s%2Fg%2F1td_wh4t?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 text-lg hover:text-blue-300"
                >
                  View All Reviews
                </a>
              </CardTitle>
            </CardHeader>
            <CardContent className="h-5/6 flex items-center">
              <div className="bg-gray-700 rounded-lg p-8 w-full h-full flex flex-col justify-center">
                <div className="flex gap-2 mb-6">
                  {Array.from({ length: sampleData.reviews[currentReviewIndex].rating }).map((_, i) => (
                    <Star key={i} className="fill-yellow-400 text-yellow-400" size={40} />
                  ))}
                </div>
                <p className="text-white text-4xl mb-8 leading-relaxed">
                  "{sampleData.reviews[currentReviewIndex].text}"
                </p>
                <div className="mt-auto">
                  <p className="text-white text-2xl font-bold">
                    {sampleData.reviews[currentReviewIndex].reviewer}
                  </p>
                  <p className="text-gray-400 text-xl">
                    {sampleData.reviews[currentReviewIndex].date}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="col-span-3 space-y-8">
          {/* Top Items */}
          <Card className="bg-gray-800 border-gray-700 h-1/2">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Top Services</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-full">
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={sampleData.topItems}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#D1D5DB" />
                    <YAxis stroke="#D1D5DB" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
                      labelStyle={{ color: 'white' }}
                    />
                    <Bar dataKey="sales" fill="#1C85C2" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Conversion Rates */}
          <Card className="bg-gray-800 border-gray-700 h-1/2">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Conversion Rates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="bg-gray-700 p-6 rounded">
                  <div className="flex justify-between mb-4">
                    <span className="text-white text-xl">Residential</span>
                    <span className="text-green-400 text-xl">{sampleData.conversionRates.residential}%</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-4">
                    <div 
                      className="bg-green-400 h-4 rounded-full" 
                      style={{ width: `${sampleData.conversionRates.residential}%` }}
                    ></div>
                  </div>
                </div>
                <div className="bg-gray-700 p-6 rounded">
                  <div className="flex justify-between mb-4">
                    <span className="text-white text-xl">Commercial</span>
                    <span className="text-green-400 text-xl">{sampleData.conversionRates.commercial}%</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-4">
                    <div 
                      className="bg-green-400 h-4 rounded-full" 
                      style={{ width: `${sampleData.conversionRates.commercial}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ServiceDashboard;
