
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: <Code className="h-8 w-8 text-purple-400" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that follows best practices and industry standards."
    },
    {
      icon: <Palette className="h-8 w-8 text-blue-400" />,
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive interfaces that provide exceptional user experiences."
    },
    {
      icon: <Zap className="h-8 w-8 text-pink-400" />,
      title: "Performance",
      description: "Optimizing applications for speed, efficiency, and seamless user interactions."
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a passionate developer with 5+ years of experience creating digital solutions 
            that bridge the gap between design and technology. I love turning complex problems 
            into simple, beautiful, and intuitive designs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white/10 border-white/20 backdrop-blur-md hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
