
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Smartphone, Database, Cpu } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: <Globe className="h-12 w-12 text-purple-400" />,
      title: "Web Development",
      description: "Full-stack web applications using modern technologies like React, Node.js, and cloud services.",
      features: ["React & TypeScript", "REST APIs", "Database Design", "Cloud Deployment"]
    },
    {
      icon: <Smartphone className="h-12 w-12 text-blue-400" />,
      title: "Mobile Apps",
      description: "Cross-platform mobile applications that work seamlessly on iOS and Android devices.",
      features: ["React Native", "iOS & Android", "App Store Deployment", "Push Notifications"]
    },
    {
      icon: <Database className="h-12 w-12 text-pink-400" />,
      title: "Backend Systems",
      description: "Scalable backend infrastructure with robust APIs and database architecture.",
      features: ["Node.js & Python", "PostgreSQL & MongoDB", "Microservices", "API Security"]
    },
    {
      icon: <Cpu className="h-12 w-12 text-green-400" />,
      title: "DevOps & Cloud",
      description: "Cloud infrastructure setup, CI/CD pipelines, and performance optimization.",
      features: ["AWS & GCP", "Docker & Kubernetes", "CI/CD Pipelines", "Monitoring"]
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-black/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I offer comprehensive development services to bring your ideas to life, 
            from concept to deployment and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  {service.icon}
                  <CardTitle className="text-2xl text-white">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-400 flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
