"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {  FaInstagram, FaLink } from "react-icons/fa";

const projects = [
  {
    title: "Cartaz Africa",
    description: "Poster design: I Love Cidade do Berço. Thank you, <BrisadoMar>, for your trust",
    tags: ["Pixel Perfect", "Typography", "Book Design"],
    image: "/img1.jpeg",
    liveLink: "https://www.instagram.com/p/B9pen-jgXmo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    instaPost: "https://www.instagram.com/p/B9pen-jgXmo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "Fonte Lima Exhibition Panels ka Graphic Design",
    description: "Complete brand strategy and visual identity for  startup",
    tags: ["Page Design", "Typography", "Brand Guidelines"],
    image: "/img2.jpeg",
    liveLink: "",
    instaPost: ""
  },
  {
    title: "ARQUITETURA Logo",
    description: "Acrc Construcoes Sociedade Unipessoal",
    tags: ["Logo Design", "Typography", "Real World"],
    image: "/img3.jpeg",
    liveLink: "https://www.instagram.com/p/BouovBmhHEl/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    instaPost: "https://www.instagram.com/p/BouovBmhHEl/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "Pool Party Cartaz",
    description: "Pool Party Women's Day Poster The GS Design team thanks ANYEVENTOS for their trust",
    tags: ["Poster Design", "Poster", "Brand Guidelines"],
    image: "/img4.jpeg",
    liveLink: "https://www.instagram.com/p/B9pfBbhAtB4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    instaPost: "https://www.instagram.com/p/B9pfBbhAtB4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "Festa 15 De Agosto",
    description: "Colors that dance, shapes that enchant. Our design comes to life! 💫",
    tags: ["Poster", "Desiging", "Banner"],
    image: "/img91.jpeg",
    liveLink: "https://www.instagram.com/p/C9ptSIuo17k/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    instaPost: "https://www.instagram.com/p/C9ptSIuo17k/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "Ely Braids And Nails",
    description: "Design A Minimalistic Logo For Ely Braids And Nails",
    tags: ["Logo Design", "Styling", "Brand Guidelines"],
    image: "/img5.jpeg",
    liveLink: "https://www.instagram.com/p/DCxoMYnITTZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    instaPost: "https://www.instagram.com/p/DCxoMYnITTZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  // Add 5 more project objects here...
];

const WorkSection = () => {
  return (
    <section className=" relative py-20 px-4 md:px-8 bg-gray-50" id="work">
      <div className="max-w-7xl mx-auto pt-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
        >
          Featured <span className="text-red-500">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay Links */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    className="p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-red-500 transition-colors"
                  >
                    <FaLink className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href={project.instaPost}
                    target="_blank"
                    className="p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-red-500 transition-colors"
                  >
                    <FaInstagram className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <motion.h3
                  whileHover={{ color: "#ff4d5a" }}
                  className="text-xl font-bold mb-2 text-gray-900"
                >
                  {project.title}
                </motion.h3>
                
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram Feed Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Behind the <span className="text-red-500">Scenes</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {[...Array(6)].map((_, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 0.95 }}
                href="https://www.instagram.com/gs.designers?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                className="relative aspect-square overflow-hidden"
              >
                <Image
                  src={`/img${index + 1}.jpeg`}
                  alt="Instagram Post"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <FaInstagram className="w-8 h-8 text-white" />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;