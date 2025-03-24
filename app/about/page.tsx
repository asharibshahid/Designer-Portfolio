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
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-8 pt-32">
      {/* Profile Section */}
      <section className="max-w-7xl mx-auto mb-16 md:mb-20 animate-section">
        <div className="flex flex-col md:grid md:grid-cols-3 gap-8 items-center">
          <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto">
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
                <span className="text-gray-700 text-sm md:text-base">
                  +238 994 03 92 / +238 983 12 32
                </span>
              </div>
              <div className="flex flex-col items-center md:items-start gap-1">
                <div className="flex items-center gap-2">
                  <FaEnvelope className="text-red-500 shrink-0" />
                  <a
                    href="mailto:creativevisionstudio23@gmail.com"
                    className="text-gray-700 hover:text-red-500 text-sm md:text-base"
                  >
                    creativevisionstudio23@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <FaInstagram className="text-red-500 shrink-0" />
                <a
                  href="https://instagram.com/gs.designers"
                  target="_blank"
                  className="text-gray-700 hover:text-red-500 text-sm md:text-base"
                >
                  @gs.designers
                </a>
              </div>
            </div>

            <a
              href="/cv.pdf"
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
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Profile Summary
        </h2>
        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
          Holder of a <span className="text-red-500 font-semibold">Licenciatura em design</span> from Universidade Lusófona de Cabo Verde.
          Creative professional with 4+ years of experience specializing in brand development, exhibition design, and cultural event branding.
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
          </div>
        </section>

        {/* Experience */}
        <section className="animate-section">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <div key={index} className="bg-white p-5 rounded-xl shadow-md">
                <h3 className="text-lg md:text-xl font-semibold text-red-500">{exp.title}</h3>
                <p className="text-gray-500 text-xs md:text-sm">{exp.duration}</p>
                <p className="text-gray-700 font-medium text-sm md:text-base mb-3">{exp.company}</p>
                <ul className="list-disc pl-4 text-gray-700 space-y-1.5 text-sm">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const experience = [
  {
    title: "Senior Graphic Designer",
    company: "Delta Engenharia",
    duration: "2022 - 2023",
    responsibilities: [
      "Layout production for festival catalogues",
      "Exhibition panel design for museums",
      "Graphic design for cultural heritage centers",
      "Promotional branding for events",
    ],
  },
  {
    title: "Graphic Designer",
    company: "Cultural Heritage Institute",
    duration: "2023 - Present",
    responsibilities: [
      "Designed and produced the Festival Catalogue of São João Baptista",
      "Created exhibition panels for Boavista Archaeology Museum",
      "Designed interactive visuals for Sema Lopi Interpretative Centre",
      "Developed branding materials for Farol D. Maria Pia Interpretative Centre",
      "Produced the Cimboa Catalogue showcasing cultural artifacts"
    ],
    technologies: ["Illustrator", "InDesign", "Photoshop", "Premiere Pro"]
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
  } ,
   {
    title: "Graphic Designer",
    company: "Casa+Print",
    duration: "2021",
    responsibilities: [
      "Label production for products",
      "Design and production of banners, posters, and flyers for advertising",
      "Creation of banners and social media posts",
    ],
  },
  {
    title: "Graphic Designer",
    company: "Ximango - Sabor e Arte Lda / Palmarejo",
    duration: "2019 - 2020",
    responsibilities: [
      "Label production for products",
      "Design and production of banners, posters, and flyers for advertising",
      "Development of business cards, logos, and stationery",
    ],
  },
];

export default AboutPage;
