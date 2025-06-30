"use client"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Menu,
  X,
  MapPin,
  Briefcase,
  GraduationCap,
  Mail,
  Phone,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import CircularGallery from "./circular-gallery"
import Link from "next/link"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  const personalPhotos = [
    "/gallery/img1.jpeg",
    "/gallery/img2.jpeg",
    "/gallery/img3.jpeg",
    "/gallery/img4.jpeg",
    "/gallery/img5.jpeg",
    "/gallery/img6.jpeg",
    "/gallery/img7.jpeg",
    "/gallery/img8.jpeg",
    "/gallery/img9.jpeg",
    "/gallery/img10.jpeg",
  ]

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Journey", href: "#journey" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <motion.div
        className="fixed top-20 right-20 w-32 h-32 bg-red-100 rounded-full blur-3xl opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
      <motion.div
        className="fixed bottom-20 left-20 w-40 h-40 bg-sky-100 rounded-full blur-3xl opacity-30"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Navigation */}
      <nav className="fixed font-bree-serif top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-gray-900 hover:scale-110 transform transition-all duration-300 cursor-pointer"
            >
              <Image src={'/logo.png'} width={150} height={100} alt="logo"></Image>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-600 hover:text-red-800 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 border-t border-gray-100"
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-gray-600 hover:text-red-800 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section - Redesigned */}
      <section id="home" className="min-h-screen flex items-center pt-32 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-press-start-2p  md:text-4xl font-bold text-gray-900 leading-tight"
              >
                Bringing Stories to <span className="text-red-800">Life</span> Through{" "}
                <span className="text-sky-600">Visual</span> Storytelling
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className=" md:text-lg text-gray-600 leading-relaxed max-w-lg"
              >
                Hi, I'm Sunil! With a passion for visual storytelling, I craft engaging content that connects with
                audiences. Currently bringing news and stories to life at Bagmati Television.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button size="lg" className="bg-red-800 hover:bg-red-900 text-white px-8 py-3 rounded-full">
                  <a href="#about">Get to Know Me</a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-sky-600 text-sky-600 hover:bg-sky-50 px-8 py-3 rounded-full bg-transparent"
                >
                  <a href="#gallery">View Photos</a>
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-8 pt-8"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-800">1+</div>
                  <div className="text-sm text-gray-600">Years in Media</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-sky-600">Daily</div>
                  <div className="text-sm text-gray-600">News Editing</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800">TV</div>
                  <div className="text-sm text-gray-600">Broadcasting</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Hero Image with Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Main Image */}
                <div className="relative z-10 mx-auto w-80 h-80 lg:w-96 lg:h-96">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-red-50 to-sky-50 p-2 relative">
                    <Image
                      src="/gallery/img9.jpeg"
                      alt="Sunil Bogati"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover rounded-full"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 rounded-full pointer-events-none" style={{
                      background: "linear-gradient(135deg, rgba(220,38,38,0.18) 0%, rgba(2,132,199,0.18) 100%)"
                    }} />
                  </div>
                </div>

                {/* Decorative Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center"
                >
                  <div className="w-8 h-8 bg-red-800 rounded-md"></div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className="absolute top-20 -left-8 w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center"
                >
                  <div className="w-6 h-6 bg-sky-600 rounded-full"></div>
                </motion.div>

                <motion.div
                  animate={{ rotate: [0, 180, 360] }}
                  transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute bottom-16 -right-8 w-14 h-14 bg-gradient-to-br from-red-200 to-sky-200 rounded-lg"
                ></motion.div>

                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className="absolute bottom-4 -left-4 w-10 h-10 bg-yellow-200 rounded-full"
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-press-start-2p  md:text-4xl font-bold text-gray-900 mb-6">Who I Am</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-800 to-sky-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-gray-900">My Story</h3>
              <p className="text-gray-600 leading-relaxed ">
                Born and raised in the beautiful city of Chitwan, Nepal, I've always been drawn to the art of
                storytelling. My journey led me to Kathmandu, where I now work as a Visual Editor at Bagmati Television,
                bringing daily news and programs to life for viewers across Nepal.
              </p>
              <p className="text-gray-600 leading-relaxed ">
                Every day, I have the privilege of shaping how stories are told, ensuring that each piece of content
                resonates with our audience. When I'm not editing, you'll find me exploring new places, capturing
                moments, and always learning something new.
              </p>

              <div className="flex items-center space-x-2 text-gray-500 pt-4">
                <MapPin className="h-5 w-5 text-red-800" />
                <span className="text-lg">From Chitwan, Working in Kathmandu</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-square w-full max-w-sm mx-auto drop-shadow-2xl">
                <Image
                  src="/gallery/img9.jpeg"
                  alt="About Sunil"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-red-800/10 to-sky-600/10"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      <div style={{ height: '600px', position: 'relative' }}>
        <CircularGallery bend={3} borderRadius={0.05} />
      </div>
      {/* Personal Photo Gallery */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 font-press-start-2p ">Personal Moments</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-800 to-sky-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A glimpse into my life beyond work - moments that matter, places I've been, and memories I cherish.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {personalPhotos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group relative overflow-hidden rounded-xl aspect-square"
              >
                <Image
                  src={photo || "/placeholder.svg"}
                  alt={`Personal photo ${index + 1}`}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-press-start-2p ">My Journey</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-800 to-sky-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Work Experience */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center">
                <Briefcase className="h-6 w-6 mr-3 text-red-800" />
                Work Experience
              </h3>

              <div className="relative pl-8">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-800 to-sky-600"></div>
                <div className="relative bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-800">
                  <div className="absolute -left-10 top-6 w-4 h-4 bg-red-800 rounded-full border-4 border-white"></div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Junior Visual Editor</h4>
                  <p className="text-red-800 font-medium mb-2">Bagmati Television HD</p>
                  <p className="text-gray-600 text-sm mb-3">Dec 2024 - Present</p>
                  <p className="text-gray-700 leading-relaxed">
                    Editing daily news segments and television programs, ensuring high-quality visual content that
                    engages our audience. Working with a talented team to deliver timely and impactful news coverage
                    across Nepal.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center">
                <GraduationCap className="h-6 w-6 mr-3 text-sky-600" />
                Education
              </h3>

              <div className="relative pl-8">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-600 to-red-800"></div>
                <div className="relative bg-white p-6 rounded-lg shadow-sm border-l-4 border-sky-600">
                  <div className="absolute -left-10 top-6 w-4 h-4 bg-sky-600 rounded-full border-4 border-white"></div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">High School (+2)</h4>
                  <p className="text-sky-600 font-medium mb-2">Kapiya Secondary School</p>
                  <p className="text-gray-600 text-sm mb-3">Chitwan, Nepal</p>
                  <p className="text-gray-700 leading-relaxed">
                    Completed my higher secondary education in my hometown of Chitwan, building the foundation that
                    would later support my journey into visual media and storytelling.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-5 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-press-start-2p ">Let's Connect</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-800 to-sky-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I'd love to hear from you! Whether you want to chat about visual storytelling, Nepal, or just say hello -
              feel free to reach out.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">sunilbogati2080@email.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-sky-600 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">+977 98XXXXXXXX</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-800 to-sky-600 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Location</p>
                      <p className="text-gray-600">Kathmandu, Nepal</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Follow Me</h3>

                <div className=" flex gap-4 flex-col md:flex-row items-center">
                  <a
                    href="https://www.facebook.com/sunil.bogati.336"
                    className="flex items-center space-x-4 p-4 w-full md:w-1/2 bg-white rounded-lg hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <Facebook className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Facebook</p>
                      <p className="text-gray-600 text-sm">Connect with me</p>
                    </div>
                  </a>

                  <a
                    href="https://www.instagram.com/sunil_bogati_/"
                    className="flex items-center space-x-4 p-4 w-full  md:w-1/2 bg-white rounded-lg hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center">
                      <Instagram className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Instagram</p>
                      <p className="text-gray-600 text-sm">See my photos</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-gray-600 flex flex-col  items-center justify-center gap-2">© 2025 Sunil Bogati. Made with ❤️ by sudeepbogati <Link className="flex w-fit gap-1 hover:underline hover:text-sky-700" href={'https://sudipbogati.com.np'}>www.sudipbogati.com.np <ArrowRight className="-rotate-45 w-4 " /></Link>.</div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
