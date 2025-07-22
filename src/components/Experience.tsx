import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDown, ExternalLink, Calendar, MapPin } from "lucide-react";
import { useState } from "react";

interface Project {
  name: string;
  description: string;
  technologies: string[];
  details: string[];
}

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  companyUrl?: string;
  projects: Project[];
}

const experienceData: ExperienceItem[] = [
  {
    title: "Junior Embedded Software Engineer",
    company: "Elmatrix & Novel GmbH",
    location: "Munich, Germany",
    period: "Jan 2021 – Present",
    companyUrl: "https://www.novel.de/",
    projects: [
      {
        name: "Plidar-Projekt",
        description: "Design & development of a C++ GUI with QT-Creator for Plidar system simulation",
        technologies: ["C++", "Network", "TCP/IP", "UDP", "Wi-Fi", "QtCreator", "Flutter"],
        details: [
          "Communication via UDP and TCP/IP protocols",
          "Simulator: Generates pressure datasets; Receiver: Collects, processes and visualizes sensor data in 2D diagrams based on sensor shape",
          "Real-time data visualization and network communication"
        ]
      },
      {
        name: "Loadsol-Pro Project",
        description: "Library for EEPROM-Flash communication via USB (FTDI) for efficient read/write access",
        technologies: ["C/C++", "QtCreator", "USB", "FTDI", "GitLab", "Agile/Jira", "Thales Encryption"],
        details: [
          "Integration of communication APIs into C++/Qt-Creator GUI for downloading and visualizing measurement data",
          "Data processing & synchronization: Sensor-to-sensor alignment",
          "Automated app testing with various test cases",
          "Generation of encrypted installer for end customers"
        ]
      }
    ]
  },
  {
    title: "Praktikum & Projekte",
    company: "Elmatrix & Novel GmbH",
    location: "Munich, Germany",
    period: "Feb 2020 – Dec 2020",
    companyUrl: "https://www.novel.de/",
    projects: [
      {
        name: "IMU-Evaluation & Development",
        description: "Comparison of various Inertial Measurement Units and library integration",
        technologies: ["C++", "QtCreator", "Flash", "USB", "FTDI", "SPI", "I2C", "Git", "Agile", "ARM Cortex-M4", "FreeRTOS"],
        details: [
          "Library: Integration into ARM Cortex-M4 Smart-Basic MCU",
          "FTDI-USB Bridge: Research and development of bridge library for SPI-EEPROM communication",
          "Smart-Basic Communication: Development of API for ARM Cortex-M4 in Smart-Basic"
        ]
      }
    ]
  },
  {
    title: "Praktikum",
    company: "STMicroelectronics",
    location: "Tunis, Tunisia",
    period: "Jun 2019 – Aug 2019",
    companyUrl: "https://www.st.com",
    projects: [
      {
        name: "C++ GUI Application",
        description: "Generation of test JSON files for bootloader microcontroller tests",
        technologies: ["C++", "Qt Creator", "JSON", "USART", "I2C", "SPI", "Flash Memory", "Google Test"],
        details: [
          "Parser: Dynamic integration of various test templates into the GUI",
          "Architecture & Workflow: Design of app flow and implementation with QtCreator",
          "Testing: Unit tests with Google Test",
          "Methodology: Agile software development"
        ]
      }
    ]
  },
  {
    title: "Projektmitarbeit",
    company: "Codintek",
    location: "Tunisia",
    period: "Mai 2019 – Jun 2019",
    projects: [
      {
        name: "Cattle Heat Detection System",
        description: "System for detecting estrus (heat moment) in cows",
        technologies: ["C", "Embedded C", "IMU", "BLE", "Raspberry Pi", "Dashboard"],
        details: [
          "Microcontroller software: Receives IMU data, processes it and sends BLE notifications to Raspberry Pi",
          "Dashboard on Raspberry Pi for statistical evaluation of multiple animals"
        ]
      }
    ]
  },
  {
    title: "Hochschulprojekt",
    company: "CIIP-Labor, ENIT University",
    location: "Tunisia",
    period: "Jan 2019 – Apr 2019",
    projects: [
      {
        name: "Energy Monitoring System",
        description: "Node-RED algorithm on Raspberry Pi for capturing current data",
        technologies: ["Node-RED", "MQTT", "Raspberry Pi", "Emoncms", "IoT"],
        details: [
          "Data transmission via MQTT and visualization on Emoncms dashboard",
          "Real-time energy monitoring and data analytics"
        ]
      }
    ]
  },
  {
    title: "Universitätsprojekt",
    company: "ENIT University",
    location: "Tunisia",
    period: "Nov 2018 – Dec 2018",
    projects: [
      {
        name: "Wall Following Robot",
        description: "Robot design for tracking walls in various shapes",
        technologies: ["C", "Linux", "BeagleBone", "UART", "Embedded Robotics"],
        details: [
          "Implementation on BeagleBone under Linux in C",
          "Communication via UART protocol",
          "Real-time wall detection and following algorithms"
        ]
      }
    ]
  },
  {
    title: "Persönliches Projekt",
    company: "Shell Eco-Marathon",
    location: "London",
    period: "Jan 2017 – Jun 2017",
    projects: [
      {
        name: "Eco-Car Control Unit",
        description: "Dashboard development with steering wheel touchscreen",
        technologies: ["C", "Arduino", "FreeRTOS", "Hall-Effect Sensor", "Circuit Design", "Embedded UI"],
        details: [
          "Display of speed, distance, laps, temperature, pressure and battery status",
          "Speed sensor via Hall effect for measuring speed and distance",
          "Circuit design for lights and horn",
          "Real-time system on Mega-Arduino under FreeRTOS",
          "Participation in Shell Eco-Marathon London"
        ]
      }
    ]
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <Card className="border-border/50 hover:border-primary/30 transition-all duration-300">
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <CardTitle className="text-lg">{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </div>
              <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </div>
          </CardHeader>
        </CollapsibleTrigger>
        
        <CollapsibleContent>
          <CardContent className="pt-0">
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Project Details:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {project.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A journey through embedded systems development, from IoT projects to industrial applications
          </p>
        </div>

        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index < experienceData.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-primary to-transparent -z-10" />
              )}
              
              <div className="flex gap-6">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                  <div className="w-8 h-8 bg-background rounded-full" />
                </div>
                
                <div className="flex-1 space-y-4">
                  {/* Experience header */}
                  <div className="space-y-2">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                      <h3 className="text-2xl font-bold">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                      <div className="flex items-center gap-2">
                        {exp.companyUrl ? (
                          <Button variant="link" className="p-0 h-auto font-medium text-primary" asChild>
                            <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer">
                              {exp.company}
                              <ExternalLink className="ml-1 h-3 w-3" />
                            </a>
                          </Button>
                        ) : (
                          <span className="font-medium text-primary">{exp.company}</span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Projects */}
                  <div className="space-y-4">
                    {exp.projects.map((project, projectIndex) => (
                      <ProjectCard key={projectIndex} project={project} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;