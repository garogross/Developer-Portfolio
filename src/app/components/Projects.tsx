import { motion } from "motion/react";
import { useState } from "react";
import { useInView } from "./hooks/useInView";

// Swiper imports
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// AIVideoGenerator has no images listed
import AIVideoGenerator1 from "../../assets/projects/AIVideoGenerator/AIVideoGenerator1.png";
import AIVideoGenerator2 from "../../assets/projects/AIVideoGenerator/AIVideoGenerator2.png";
import AIVideoGenerator3 from "../../assets/projects/AIVideoGenerator/AIVideoGenerator3.png";

// BusinessCardWebsite
import BusinessCardWebsite1 from "../../assets/projects/BusinessCardWebsite/BusinessCardWebsite1.webp";
import BusinessCardWebsite2 from "../../assets/projects/BusinessCardWebsite/BusinessCardWebsite2.webp";
import BusinessCardWebsite3 from "../../assets/projects/BusinessCardWebsite/BusinessCardWebsite3.webp";

// ClickerTelegramWebApp
import ClickerTelegramWebApp from "../../assets/projects/ClickerTelegramWebApp/ClickerTelegramWebApp.webp";

// HelpDeskManagmentPanel
import HelpDeskManagmentPanel1 from "../../assets/projects/HelpDeskManagmentPanel/HelpDeskManagmentPanel1.png";
import HelpDeskManagmentPanel2 from "../../assets/projects/HelpDeskManagmentPanel/HelpDeskManagmentPanel2.png";
import HelpDeskManagmentPanel3 from "../../assets/projects/HelpDeskManagmentPanel/HelpDeskManagmentPanel3.png";

// JewelryDesignOrderWebsite
import JewelryDesignOrderWebsite1 from "../../assets/projects/JewelryDesignOrderWebsite/JewelryDesignOrderWebsite1.webp";
import JewelryDesignOrderWebsite2 from "../../assets/projects/JewelryDesignOrderWebsite/JewelryDesignOrderWebsite2.webp";
import JewelryDesignOrderWebsite3 from "../../assets/projects/JewelryDesignOrderWebsite/JewelryDesignOrderWebsite3.webp";

// JobAgency
import JobAgency1 from "../../assets/projects/JobAgency/JobAgency1.png";
import JobAgency2 from "../../assets/projects/JobAgency/JobAgency2.png";
import JobAgency3 from "../../assets/projects/JobAgency/JobAgency3.png";

// LogisticCRMSystem
import LogisticCRMSystem1 from "../../assets/projects/LogisticCRMSystem/LogisticCRMSystem1.webp";
import LogisticCRMSystem2 from "../../assets/projects/LogisticCRMSystem/LogisticCRMSystem2.webp";
import LogisticCRMSystem3 from "../../assets/projects/LogisticCRMSystem/LogisticCRMSystem3.webp";

// ModelAgency
import ModelAgency1 from "../../assets/projects/ModelAgency/ModelAgency1.png";
import ModelAgency2 from "../../assets/projects/ModelAgency/ModelAgency2.png";
import ModelAgency3 from "../../assets/projects/ModelAgency/ModelAgency3.png";

// RealEstateAgency
import RealEstateAgency1 from "../../assets/projects/RealEstateAgency/RealEstateAgency1.webp";
import RealEstateAgency2 from "../../assets/projects/RealEstateAgency/RealEstateAgency2.webp";
import RealEstateAgency3 from "../../assets/projects/RealEstateAgency/RealEstateAgency3.webp";

// SmartCryptoArbitrage
import SmartCryptoArbitrage1 from "../../assets/projects/SmartCryptoArbitrage/SmartCryptoArbitrage1.webp";
import SmartCryptoArbitrage2 from "../../assets/projects/SmartCryptoArbitrage/SmartCryptoArbitrage2.webp";
import SmartCryptoArbitrage3 from "../../assets/projects/SmartCryptoArbitrage/SmartCryptoArbitrage3.webp";

// SmartParkingApp
import SmartParkingApp1 from "../../assets/projects/SmartParkingApp/SmartParkingApp1.webp";
import SmartParkingApp2 from "../../assets/projects/SmartParkingApp/SmartParkingApp2.webp";
import SmartParkingApp3 from "../../assets/projects/SmartParkingApp/SmartParkingApp3.webp";

// SoftwareCompanyPortfolioWebsite
import SoftwareCompanyPortfolioWebsite1 from "../../assets/projects/SoftwareCompanyPortfolioWebsite/SoftwareCompanyPortfolioWebsite1.webp";
import SoftwareCompanyPortfolioWebsite2 from "../../assets/projects/SoftwareCompanyPortfolioWebsite/SoftwareCompanyPortfolioWebsite2.webp";
import SoftwareCompanyPortfolioWebsite3 from "../../assets/projects/SoftwareCompanyPortfolioWebsite/SoftwareCompanyPortfolioWebsite3.webp";

// TradingBot
import TradingBot1 from "../../assets/projects/TradingBot/TradingBot1.png";
import TradingBot2 from "../../assets/projects/TradingBot/TradingBot2.png";

// UGCSchool
import UGCSchool1 from "../../assets/projects/UGCSchool/UGCSchool1.png";
import UGCSchool2 from "../../assets/projects/UGCSchool/UGCSchool2.png";
import UGCSchool3 from "../../assets/projects/UGCSchool/UGCSchool3.png";

// MamnunAgency
import MamnunAgency1 from "../../assets/projects/MamnunAgency/image1.png";
import MamnunAgency2 from "../../assets/projects/MamnunAgency/image2.png";
import MamnunAgency3 from "../../assets/projects/MamnunAgency/image3.png";

export function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "AI Video Generator",
      description:
        "A web tool that generates videos with AI, supporting advanced editing and content creation. Features intuitive controls and export options.",
      tags: ["React", "Next.js", "Node.js", "ffmpeg.wasm"],
      images: [AIVideoGenerator1, AIVideoGenerator2, AIVideoGenerator3],
    },
    {
      title: "Business Card Website",
      description:
        "Minimal portfolio and business card website for professionals, with mobile-first design and contact integrations.",
      tags: ["React", "Vite", "Tailwind CSS"],
      images: [
        BusinessCardWebsite1,
        BusinessCardWebsite2,
        BusinessCardWebsite3,
      ],
    },
    {
      title: "Clicker Telegram WebApp",
      description:
        "Fun clicker-game app compatible with Telegram Web Apps, built for viral engagement and real-time leaderboards.",
      tags: ["React", "Telegram WebApp", "Redux"],
      images: [ClickerTelegramWebApp],
    },
    {
      title: "Help Desk Management Panel",
      description:
        "Admin and agent panel for operating support/ticket systems. Includes real-time tracking, analytics, and role policies.",
      tags: ["React", "Node.js", "MUI", "MongoDB"],
      images: [
        HelpDeskManagmentPanel1,
        HelpDeskManagmentPanel2,
        HelpDeskManagmentPanel3,
      ],
    },
    {
      title: "Mamnun Agency Site",
      description:
        "An informational website for a traveling agency featuring comprehensive travel details, engaging destination galleries, and a contact form for inquiries.",
      tags: ["Next.js", "React", "Tailwind CSS", "MongoDB"],
      images: [MamnunAgency1, MamnunAgency2, MamnunAgency3],
    },
    {
      title: "Jewelry Design & Order Website",
      description:
        "E-commerce for custom jewelry design, with live editing, instant quoting, and order management dashboard.",
      tags: ["React", "Redux.js", "SCSS"],
      images: [
        JewelryDesignOrderWebsite1,
        JewelryDesignOrderWebsite2,
        JewelryDesignOrderWebsite3,
      ],
    },
    {
      title: "Job Agency Portal",
      description:
        "Job board and HR management portal connecting employers and job seekers, with messaging, filters, and admin CRM.",
      tags: ["Next.js", "TypeScript", "Vercel"],
      images: [JobAgency1, JobAgency2, JobAgency3],
    },
    {
      title: "Logistic CRM System",
      description:
        "B2B logistic CRM for shipment and route management, status tracking, reporting, and automated reminders.",
      tags: ["React", "Redux", "Node.js", "MongoDB"],
      images: [LogisticCRMSystem1, LogisticCRMSystem2, LogisticCRMSystem3],
    },
    {
      title: "Model Agency Website",
      description:
        "Responsive catalog and promotional site for a modeling agency, with management backoffice and photo galleries.",
      tags: ["React", "Tailwind.css", "Express.js", "MongoDB"],
      images: [ModelAgency1, ModelAgency2, ModelAgency3],
    },
    {
      title: "Real Estate Agency Platform",
      description:
        "Modern real estate listings platform with agent portal, property galleries, contact forms, and dynamic maps.",
      tags: ["Next.js", "Mapbox", "TypeScript", "Vercel"],
      images: [RealEstateAgency1, RealEstateAgency2, RealEstateAgency3],
    },
    {
      title: "Smart Crypto Arbitrage",
      description:
        "Cross-exchange crypto arbitrage trading bot and analytics UI, featuring event-driven alerts and trade simulation.",
      tags: ["React", "Node.js", "WebSockets", "THREE.js"],
      images: [
        SmartCryptoArbitrage1,
        SmartCryptoArbitrage2,
        SmartCryptoArbitrage3,
      ],
    },
    {
      title: "Smart Parking App",
      description:
        "IoT-enabled smart parking app for real-time spot discovery, reservations, and payment integration.",
      tags: ["React.js", "TypeScript", "Node.js", "Express", "MySQL"],
      images: [SmartParkingApp1, SmartParkingApp2, SmartParkingApp3],
    },
    {
      title: "Software Co. Portfolio Website",
      description:
        "Professional company portfolio site with blog, project case studies, testimonials, and job board.",
      tags: ["Next.js", "Contentlayer", "Tailwind", "Vercel"],
      images: [
        SoftwareCompanyPortfolioWebsite1,
        SoftwareCompanyPortfolioWebsite2,
        SoftwareCompanyPortfolioWebsite3,
      ],
    },
    {
      title: "Trading Bot Dashboard",
      description:
        "Interactive dashboard for controlling and visualizing automated crypto trading strategies with backtesting.",
      tags: ["React", "Node.js", "Socket.io"],
      images: [TradingBot1, TradingBot2],
    },
    {
      title: "UGC School Platform",
      description:
        "Educational content platform with video library, live events, assignments, and progress tracking.",
      tags: ["React", "TypeScript", "Firebase"],
      images: [UGCSchool1, UGCSchool2, UGCSchool3],
    },
  ];

  const VISIBLE_COUNT = 6;
  const displayedProjects = showAll
    ? projects
    : projects.slice(0, VISIBLE_COUNT);

  return (
    <section id="projects" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-center">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden bg-slate-200">
                  {project.images.length > 1 ? (
                    <Swiper
                      modules={[Navigation, Pagination]}
                      navigation
                      pagination={{ clickable: true }}
                      className="h-full"
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      {project.images.map((imgSrc, i) => (
                        <SwiperSlide key={i}>
                          <img
                            src={imgSrc}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  ) : (
                    <>
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl mb-3">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {!showAll && projects.length > VISIBLE_COUNT && (
            <div className="flex justify-center mt-10">
              <button
                onClick={() => setShowAll(true)}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition"
              >
                Show More
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
