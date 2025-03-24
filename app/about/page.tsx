"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { FaPhone, FaEnvelope, FaInstagram, FaDownload } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>(".animate-section").forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 30,
        scrollTrigger: {
          trigger: section,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        duration: 0.6,
      });
    });

    gsap.from(".skill-bar", {
      width: 0,
      stagger: 0.15,
      scrollTrigger: {
        trigger: "#skills",
        start: "top center",
      },
      duration: 1.2,
      ease: "power3.out",
    });
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-8  pt-32">
      {/* Profile Section */}
      <section className="max-w-7xl mx-auto mb-16 md:mb-20 animate-section ">
        <div className="flex flex-col md:grid md:grid-cols-3 gap-8 items-center ">
          <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto ">
            <Image
              src="/img8.jpg"
              alt="Gelson Cabral"
              fill
              className="rounded-full object-cover border-4 border-red-500 shadow-lg"
            />
          </div>

          <div className="md:col-span-2 space-y-4 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Gelson Cabral
              <span className="block text-red-500 text-xl md:text-2xl mt-2">
                Design Specialist
              </span>
            </h1>

            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <FaPhone className="text-red-500 shrink-0" />
                <span className="text-gray-700 text-sm md:text-base">983 12 32</span>
              </div>
              <div className="flex flex-col items-center md:items-start gap-1">
                <div className="flex items-center gap-2">
                  <FaEnvelope className="text-red-500 shrink-0" />
                  <a href="mailto:gelsonmonteiro93@gmail.com" className="text-gray-700 hover:text-red-500 text-sm md:text-base">
                  creativevisionstudio23@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <FaEnvelope className="text-red-500 shrink-0 opacity-0" />
                  <a href="mailto:gsdesign15@gmail.com" className="text-gray-700 hover:text-red-500 text-sm md:text-base">
                   creativevisionstudio23@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <FaInstagram className="text-red-500 shrink-0" />
                <a href="https://instagram.com/gs.designers" target="_blank" className="text-gray-700 hover:text-red-500 text-sm md:text-base">
                  @gs.designers
                </a>
              </div>
            </div>

            <a
              href="/cv-1.jpg"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm md:text-base mx-auto md:mx-0"
            >
              <FaDownload className="text-lg" />
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* Profile Summary */}
      <section className="max-w-4xl mx-auto mb-16 md:mb-20 animate-section px-2">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Profile Summary</h2>
        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
          Holder of a <span className="text-red-500 font-semibold">Licenciatura em design</span> from Universidade Lusófona de Cabo Verde. 
          Creative professional with 4+ years experience specializing in brand development and digital solutions. 
          Proven expertise in exhibition design, promotional campaigns, and cultural event branding.
        </p>
      </section>

      {/* Education & Experience */}
      <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16 md:mb-20 px-2">
        {/* Education */}
        <section className="animate-section">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-red-500">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
          Licenciatura em design
            </h3>
            <p className="text-gray-700 text-sm md:text-base mb-1">
              Universidade Lusófona de Cabo Verde
            </p>
            <p className="text-gray-500 text-xs md:text-sm mb-3">2016 - 2020</p>
            <ul className="list-disc pl-4 text-gray-700 space-y-1 text-sm">
              <li>Focus on Digital Media & Brand Strategy</li>
              <li>Advanced Visualization Techniques</li>
              <li>Multimedia e Audio Visuals</li>
            </ul>
          </div>
        </section>

        {/* Experience */}
        <section className="animate-section">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <div key={index} className="bg-white p-5 rounded-xl shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between mb-2">
                  <h3 className="text-lg md:text-xl font-semibold text-red-500">{exp.title}</h3>
                  <p className="text-gray-500 text-xs md:text-sm">{exp.duration}</p>
                </div>
                <p className="text-gray-700 font-medium text-sm md:text-base mb-3">{exp.company}</p>
                <ul className="list-disc pl-4 text-gray-700 space-y-1.5 text-sm">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="leading-tight">{item}</li>
                  ))}
                </ul>
                {exp.technologies && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="px-2.5 py-1 bg-red-50 text-red-700 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

// Updated Experience Data with requested changes
const experience = [
  {
    title: "Senior Graphic Designer",
    company: "Delta Engenharia",
    duration: "2023 Present",
    responsibilities: [
      "Led brand development for architectural firms",
      "Created comprehensive marketing packages",
      "Produced 3D visualizations for engineering projects",
      "Managed social media content strategy"
    ],
    technologies: ["Adobe CC", "Blender", "WordPress", "Social Media"]
  },
  {
    title: "Graphic Designer",
    company: "Cultural Heritage Institute",
    duration: "2021 2022",
    responsibilities: [
      "Designed promotional materials for cultural preservation projects",
      "Created visual identities for heritage conservation campaigns",
      "Produced educational materials about Cabo Verdean cultural heritage",
      "Collaborated with historians on exhibition designs"
    ],
    technologies: ["Illustrator", "InDesign", "Photoshop", "Premiere Pro"]
  },
  {
    title: "Institude Of Cultural Heritage",
    company: "Graphic Design",
    duration: "2021 2022",
    responsibilities: [
      "Designed Fonte Lima historical exhibition panels",
      "Developed wayfinding systems for cultural centers",
      "Created environmental graphics for municipal projects",
      "Produced heritage conservation displays"
    ],
    technologies: ["AutoCAD", "Illustrator", "InDesign", "Photoshop"]
  },
  {
    title: "Freelance Designer",
    company: "GS Designers",
    duration: "2020 2021",
    responsibilities: [
      "Created Festa 15 de Agosto promotional posters",
      "Developed brand identities for local businesses",
      "Produced event marketing materials",
      "Designed cultural festival collateral"
    ],
    technologies: ["Procreate", "After Effects", "Canva", "Figma"]
  }
];


export default AboutPage;
