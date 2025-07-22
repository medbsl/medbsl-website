import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Cpu, 
  Wifi, 
  Database, 
  TestTube, 
  GitBranch,
  Microchip,
  Network
} from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  description: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: <Code className="h-6 w-6" />,
    description: "Core programming languages for embedded development",
    skills: ["C/C++", "Embedded C", "Qt Creator", "Python", "JavaScript"]
  },
  {
    title: "Microcontrollers & Hardware",
    icon: <Cpu className="h-6 w-6" />,
    description: "Microcontroller platforms and hardware interfaces",
    skills: ["ARM Cortex-M4", "Arduino", "BeagleBone", "Raspberry Pi", "STM32", "Smart-Basic MCU"]
  },
  {
    title: "Communication Protocols",
    icon: <Network className="h-6 w-6" />,
    description: "Various communication protocols and interfaces",
    skills: ["TCP/IP", "UDP", "UART", "SPI", "I2C", "USB/FTDI", "BLE", "Wi-Fi", "MQTT"]
  },
  {
    title: "Real-Time Systems",
    icon: <Microchip className="h-6 w-6" />,
    description: "Real-time operating systems and embedded frameworks",
    skills: ["FreeRTOS", "Linux Embedded", "Real-time Programming", "Interrupt Handling"]
  },
  {
    title: "Development Tools",
    icon: <GitBranch className="h-6 w-6" />,
    description: "Development environment and version control",
    skills: ["Git", "GitLab", "QtCreator", "Google Test", "Agile/Jira", "Node-RED"]
  },
  {
    title: "Specialized Technologies",
    icon: <Database className="h-6 w-6" />,
    description: "Domain-specific technologies and tools",
    skills: ["EEPROM/Flash", "IMU Sensors", "Hall-Effect Sensors", "JSON", "Thales Encryption", "Circuit Design"]
  }
];

const Skills = () => {
  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set spanning embedded systems, real-time programming, and hardware interfaces
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-300 group"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-gradient-primary rounded-lg text-primary-foreground group-hover:shadow-glow transition-all duration-300">
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Strengths */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Key Strengths</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="p-4 bg-gradient-primary rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <TestTube className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="text-lg font-semibold">Problem Solving</h4>
              <p className="text-muted-foreground">
                Analytical approach to complex embedded systems challenges with focus on efficient solutions
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-gradient-primary rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <Wifi className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="text-lg font-semibold">System Integration</h4>
              <p className="text-muted-foreground">
                Expertise in integrating hardware and software components for seamless operation
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-gradient-primary rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <GitBranch className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="text-lg font-semibold">Agile Development</h4>
              <p className="text-muted-foreground">
                Experience with agile methodologies and collaborative development practices
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;