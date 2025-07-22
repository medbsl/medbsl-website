import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Download, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent)] pointer-events-none" />
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <Badge variant="secondary" className="mb-4">
              Available for Freelance Projects
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Embedded Software{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Engineer
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Specialized in C++, Qt development, and microcontroller programming. 
              Creating efficient, reliable embedded solutions for innovative projects.
            </p>
          </div>

          {/* Key skills */}
          <div className="flex flex-wrap gap-2">
            {["C/C++", "Qt Creator", "ARM Cortex-M4", "FreeRTOS", "TCP/IP", "USB/FTDI"].map((skill) => (
              <Badge key={skill} variant="outline" className="text-primary border-primary/30">
                {skill}
              </Badge>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              className="border-primary/30 hover:bg-primary/10"
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>
        </div>

        {/* Right content - Profile image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-card bg-gradient-secondary p-1">
              <img 
                src="/lovable-uploads/b1e6fa1e-75b9-401f-bcc6-ac7a35d088c9.png"
                alt="Professional Profile"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-2xl rounded-2xl -z-10" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={() => scrollToSection('experience')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="h-6 w-6 text-primary" />
      </button>
    </section>
  );
};

export default Hero;