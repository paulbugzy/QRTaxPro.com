import type { ServiceCategory } from '../types';

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Residential Plumbing Services",
    slug: "residential",
    description: "Complete plumbing solutions for homes in Chicago and surrounding areas. From repairs to installations, we handle all residential plumbing needs.",
    services: [
      {
        title: "Basement Sewer Backup",
        slug: "basement-sewer-backup",
        description: "Expert solutions for basement sewer backups, including preventive measures and emergency cleanup services.",
        image: "https://narssoplumbing.com/images/services/basement-sewer-backup-plumbing-service.webp",
        hiring: [
          {
            point: "When you notice water backing up in basement drains",
          },
          {
            point: "If there's a sewage smell coming from your drains",
          },
          {
            point: "During heavy rainfall when backups are more likely",
          },
          {
            point: "For preventive maintenance before rainy seasons",
          }
        ],
        faqs: [
          {
            question: "What causes basement sewer backups?",
            answer: "Common causes include heavy rainfall, clogged main sewer lines, tree root intrusion, and damaged sewer pipes."
          },
          {
            question: "How can I prevent basement sewer backups?",
            answer: "Regular maintenance, installing a backwater valve, and proper disposal practices can help prevent backups."
          }
        ]
      },{
        title: "Faucet Installation",
        slug: "faucet-installation",
        description: "Professional faucet installation services for kitchens, bathrooms, and outdoor areas, ensuring functionality and leak-free performance.",
        image: "https://narssoplumbing.com/images/services/faucet-installation-plumbing-service.webp",
        hiring: [
          {
            point: "When upgrading to a modern or water-efficient faucet"
          },
          {
            point: "If your current faucet is leaking or damaged"
          },
          {
            point: "When remodeling your kitchen or bathroom"
          },
          {
            point: "For outdoor faucet installations or replacements"
          }
        ],
        faqs: [
          {
            question: "What types of faucets can you install?",
            answer: "We install all types of faucets, including single-handle, double-handle, pull-out, pull-down, and wall-mounted faucets."
          },
          {
            question: "Do you provide faucet recommendations?",
            answer: "Yes, we can recommend faucets based on your style, budget, and functional needs."
          }
        ]
      },    
      {
        title: "Faucet Repair",
        slug: "faucet-repair",
        description: "Reliable faucet repair services to fix leaks, low water pressure, and other common faucet issues, restoring full functionality.",
        image: "https://narssoplumbing.com/images/services/faucet-repair-plumbing-service.webp",
        hiring: [
          {
            point: "When your faucet is leaking or dripping water"
          },
          {
            point: "If the faucet handle is stuck or difficult to turn"
          },
          {
            point: "When experiencing low or irregular water pressure"
          },
          {
            point: "If there are unusual noises or water discoloration from the faucet"
          }
        ],
        faqs: [
          {
            question: "What common faucet issues can you repair?",
            answer: "We can repair leaks, dripping faucets, broken handles, faulty seals, and water pressure problems."
          },
          {
            question: "Should I repair or replace my faucet?",
            answer: "Repair is often sufficient for minor issues, but we can advise replacement if the faucet is severely damaged or outdated."
          }
        ]
      },
      {
        title: "Plumbing Leak Detection",
        slug: "plumbing-leak-detection",
        description: "Accurate plumbing leak detection services to identify hidden leaks in walls, ceilings, and underground pipes, preventing costly damage.",
        image: "https://narssoplumbing.com/images/services/plumbing-leak-detection-plumbing-service.webp",
        hiring: [
          {
            point: "When you notice unusually high water bills"
          },
          {
            point: "If you see water stains on walls or ceilings"
          },
          {
            point: "When you hear running water even when taps are off"
          },
          {
            point: "If you notice damp or musty smells in your home"
          }
        ],
        faqs: [
          {
            question: "How do you detect hidden plumbing leaks?",
            answer: "We use advanced tools like thermal imaging, acoustic sensors, and moisture meters to pinpoint hidden leaks."
          },
          {
            question: "Can undetected leaks cause significant damage?",
            answer: "Yes, undetected leaks can lead to water damage, mold growth, and structural issues if not addressed promptly."
          }
        ]
      },
      {
        title: "Plumbing Pipe Repair",
        slug: "plumbing-pipe-repair",
        description: "Comprehensive plumbing pipe repair services to fix leaks, cracks, and bursts, ensuring your water system operates efficiently and reliably.",
        image: "https://narssoplumbing.com/images/services/plumbing-pipe-repair-plumbing-service.webp",
        hiring: [
          {
            point: "When you notice water pooling or leaking from pipes"
          },
          {
            point: "If your water pressure has suddenly dropped"
          },
          {
            point: "When pipes are visibly corroded or cracked"
          },
          {
            point: "In the event of a pipe burst causing flooding"
          }
        ],
        faqs: [
          {
            question: "What types of pipes can you repair?",
            answer: "We repair all types of pipes, including PVC, copper, galvanized steel, and PEX pipes."
          },
          {
            question: "How do I know if my pipe needs repair or replacement?",
            answer: "Minor leaks or cracks can often be repaired, but severe damage, corrosion, or aging pipes may require replacement."
          }
        ]
      },
      {
        title: "Shower Installation",
        slug: "shower-installation",
        description: "Expert shower installation services to upgrade your bathroom with modern, efficient, and stylish shower systems tailored to your needs.",
        image: "https://narssoplumbing.com/images/services/shower-installation-plumbing-service.webp",
        hiring: [
          {
            point: "When building or remodeling your bathroom"
          },
          {
            point: "If you want to upgrade to a more modern shower system"
          },
          {
            point: "For installing walk-in showers or custom enclosures"
          },
          {
            point: "To replace an outdated or damaged shower"
          }
        ],
        faqs: [
          {
            question: "What types of showers can you install?",
            answer: "We install a variety of showers, including walk-in, rain showers, handheld systems, and custom enclosures."
          },
          {
            question: "Do you handle both plumbing and enclosure installation?",
            answer: "Yes, we provide complete shower installation services, including plumbing connections and enclosure setups."
          }
        ]
      },
      {
        title: "Toilet Repair",
        slug: "toilet-repair",
        description: "Reliable toilet repair services to fix leaks, clogs, running water, and other issues, restoring your toilet's functionality quickly and efficiently.",
        image: "https://narssoplumbing.com/images/services/toilet-repair-plumbing-service.webp",
        hiring: [
          {
            point: "When your toilet is constantly running or won't flush properly"
          },
          {
            point: "If there is water leaking from the base or tank"
          },
          {
            point: "When experiencing frequent clogs or slow drainage"
          },
          {
            point: "For unusual noises or poor water refill in the tank"
          }
        ],
        faqs: [
          {
            question: "What types of toilet issues can you repair?",
            answer: "We handle leaks, clogs, flushing problems, damaged seals, and tank or bowl issues."
          },
          {
            question: "How do I know if my toilet needs repair or replacement?",
            answer: "Minor issues can often be repaired, but if the toilet is severely damaged, old, or inefficient, replacement might be a better option."
          }
        ]
      },
      {
        title: "Water Heater Installation",
        slug: "water-heater-installation",
        description: "Professional water heater installation services to ensure a reliable supply of hot water with energy-efficient and properly installed systems.",
        image: "https://narssoplumbing.com/images/services/water-heater-installation-plumbing-service.webp",
        hiring: [
          {
            point: "When upgrading to a more energy-efficient water heater"
          },
          {
            point: "If your current water heater is old or malfunctioning"
          },
          {
            point: "During new home construction or major renovations"
          },
          {
            point: "For installing tankless or solar water heating systems"
          }
        ],
        faqs: [
          {
            question: "What types of water heaters can you install?",
            answer: "We install tank water heaters, tankless water heaters, hybrid systems, and solar water heaters."
          },
          {
            question: "Do you provide recommendations for water heaters?",
            answer: "Yes, we can recommend the best water heater for your home's size, usage, and energy efficiency needs."
          }
        ]
      },
      {
        title: "Drain Cleaning",
        slug: "drain-cleaning",
        description: "Expert drain cleaning services to remove clogs, clear blockages, and ensure your plumbing system runs smoothly and efficiently.",
        image: "https://narssoplumbing.com/images/services/drain-cleaning-plumbing-service.webp",
        hiring: [
          {
            point: "When your sinks, showers, or tubs are draining slowly"
          },
          {
            point: "If you notice foul odors coming from your drains"
          },
          {
            point: "When water backs up in your sinks or tubs"
          },
          {
            point: "For routine maintenance to prevent future clogs"
          }
        ],
        faqs: [
          {
            question: "What methods do you use for drain cleaning?",
            answer: "We use advanced tools like hydro jetting, drain snakes, and chemical-free solutions to clear clogs safely and effectively."
          },
          {
            question: "Can regular drain cleaning prevent plumbing issues?",
            answer: "Yes, routine drain cleaning can prevent major clogs, reduce odors, and extend the life of your plumbing system."
          }
        ]
      },
      {
        title: "Garbage Disposal Installation",
        slug: "garbage-disposal-installation",
        description: "Professional garbage disposal installation services to make kitchen cleanup easier, with expert setup for reliable and safe operation.",
        image: "https://narssoplumbing.com/images/services/garbage-disposal-installation-plumbing-service.webp",
        hiring: [
          {
            point: "When upgrading to a more powerful or efficient garbage disposal"
          },
          {
            point: "If your current unit is outdated or malfunctioning"
          },
          {
            point: "During a kitchen remodel or renovation"
          },
          {
            point: "For first-time installation in a new kitchen sink"
          }
        ],
        faqs: [
          {
            question: "What types of garbage disposals can you install?",
            answer: "We install continuous feed and batch feed garbage disposals from all major brands."
          },
          {
            question: "Do you provide recommendations for garbage disposals?",
            answer: "Yes, we can recommend a unit based on your kitchen needs, sink compatibility, and budget."
          }
        ]
      },
      {
        title: "Outdoor Plumbing System Repair",
        slug: "outdoor-plumbing-system-repair",
        description: "Expert outdoor plumbing system repair services to address leaks, damaged pipes, and faulty fixtures, ensuring your outdoor water systems function properly.",
        image: "https://narssoplumbing.com/images/services/outdoor-plumbing-system-repair-plumbing-service.webp",
        hiring: [
          {
            point: "When outdoor faucets or spigots are leaking"
          },
          {
            point: "If underground pipes are damaged or causing water pooling"
          },
          {
            point: "When your sprinkler or irrigation system malfunctions"
          },
          {
            point: "To repair outdoor drainage issues or prevent flooding"
          }
        ],
        faqs: [
          {
            question: "What types of outdoor plumbing systems can you repair?",
            answer: "We repair outdoor faucets, sprinkler systems, irrigation systems, drainage pipes, and water supply lines."
          },
          {
            question: "How do I know if I have an outdoor plumbing issue?",
            answer: "Signs include water pooling, reduced water pressure, unexplained high water bills, or malfunctioning outdoor fixtures."
          }
        ]
      },
      {
        title: "Plumbing Leak Repair",
        slug: "plumbing-leak-repair",
        description: "Trusted plumbing leak repair services to quickly identify and fix leaks, preventing water damage and ensuring the integrity of your plumbing system.",
        image: "https://narssoplumbing.com/images/services/plumbing-leak-repair-plumbing-service.webp",
        hiring: [
          {
            point: "When you notice water pooling under sinks or appliances"
          },
          {
            point: "If there are water stains or discoloration on walls or ceilings"
          },
          {
            point: "When you hear dripping sounds or see visible leaks in pipes"
          },
          {
            point: "For unexplained increases in your water bill"
          }
        ],
        faqs: [
          {
            question: "What types of plumbing leaks can you repair?",
            answer: "We repair leaks in pipes, faucets, water heaters, shower heads, and more, both indoors and outdoors."
          },
          {
            question: "Can you detect hidden leaks?",
            answer: "Yes, we use advanced tools like thermal imaging and moisture sensors to locate hidden leaks in walls, floors, and ceilings."
          }
        ]
      },
      {
        title: "Sewer Cleaning",
        slug: "sewer-cleaning",
        description: "Professional sewer cleaning services to remove blockages, clear debris, and ensure your sewer system operates efficiently and without backups.",
        image: "https://narssoplumbing.com/images/services/sewer-cleaning-plumbing-service.webp",
        hiring: [
          {
            point: "When experiencing frequent sewer backups or slow drainage"
          },
          {
            point: "If you notice foul odors coming from drains or sewer lines"
          },
          {
            point: "When tree roots or debris are causing sewer blockages"
          },
          {
            point: "For routine maintenance to prevent costly sewer repairs"
          }
        ],
        faqs: [
          {
            question: "What methods do you use for sewer cleaning?",
            answer: "We use advanced methods such as hydro jetting, rodding, and rooter services to effectively clean sewer lines."
          },
          {
            question: "How often should I schedule sewer cleaning?",
            answer: "It is recommended to schedule sewer cleaning every 1–2 years for preventative maintenance or sooner if issues arise."
          }
        ]
      },
      {
        title: "Sewer Repair",
        slug: "sewer-repair",
        description: "Expert sewer repair services to address broken, clogged, or damaged sewer lines, ensuring safe and efficient wastewater removal.",
        image: "https://narssoplumbing.com/images/services/sewer-repair-plumbing-service.webp",
        hiring: [
          {
            point: "When you notice frequent sewer backups or blockages"
          },
          {
            point: "If there are foul odors or wet spots in your yard"
          },
          {
            point: "When drains are slow or gurgling noises are heard"
          },
          {
            point: "For cracked, corroded, or collapsed sewer lines"
          }
        ],
        faqs: [
          {
            question: "What types of sewer repairs do you offer?",
            answer: "We provide trenchless repairs, pipe relining, and traditional excavation services to fix sewer line issues."
          },
          {
            question: "How can I prevent future sewer line problems?",
            answer: "Routine maintenance, avoiding flushing non-degradable items, and addressing tree root intrusion can help prevent future issues."
          }
        ]
      },
      {
        title: "Shower Repair",
        slug: "shower-repair",
        description: "Reliable shower repair services to fix leaks, clogs, water pressure issues, and faulty fixtures, restoring your shower's functionality and comfort.",
        image: "https://narssoplumbing.com/images/services/shower-repair-plumbing-service.webp",
        hiring: [
          {
            point: "When your shower is leaking or dripping constantly"
          },
          {
            point: "If the water pressure is low or inconsistent"
          },
          {
            point: "When the showerhead or faucet is clogged or damaged"
          },
          {
            point: "For issues with temperature control or water flow"
          }
        ],
        faqs: [
          {
            question: "What shower issues can you repair?",
            answer: "We repair leaks, broken faucets, clogged showerheads, low water pressure, and issues with valves or temperature control."
          },
          {
            question: "Can you fix both standalone and built-in showers?",
            answer: "Yes, we can repair all types of showers, including walk-in, built-in, and custom shower systems."
          }
        ]
      },
      {
        title: "Sump Pump Installation",
        slug: "sump-pump-installation",
        description: "Professional sump pump installation services to protect your basement or crawl space from flooding and water damage, ensuring peace of mind during heavy rains.",
        image: "https://narssoplumbing.com/images/services/sump-pump-installation-plumbing-service.webp",
        hiring: [
          {
            point: "When your basement is prone to flooding or water pooling"
          },
          {
            point: "If you live in an area with a high water table or heavy rains"
          },
          {
            point: "To prevent water damage during storms or snow melts"
          },
          {
            point: "When replacing an old or malfunctioning sump pump"
          }
        ],
        faqs: [
          {
            question: "What types of sump pumps can you install?",
            answer: "We install submersible, pedestal, and battery-backup sump pumps to suit your home's needs."
          },
          {
            question: "Do you provide maintenance tips for sump pumps?",
            answer: "Yes, we offer guidance on regular maintenance to keep your sump pump functioning optimally."
          }
        ]
      },
      {
        title: "Sump Pump Repair",
        slug: "sump-pump-repair",
        description: "Expert sump pump repair services to fix malfunctions, clogs, and other issues, ensuring your basement or crawl space stays dry and protected from water damage.",
        image: "https://narssoplumbing.com/images/services/sump-pump-repair-plumbing-service.webp",
        hiring: [
          {
            point: "When your sump pump fails to turn on during heavy rains"
          },
          {
            point: "If the pump is making unusual noises or vibrating excessively"
          },
          {
            point: "When the pump is clogged or not discharging water properly"
          },
          {
            point: "For addressing electrical or float switch issues"
          }
        ],
        faqs: [
          {
            question: "What are common issues with sump pumps?",
            answer: "Common problems include motor failure, clogged discharge lines, stuck float switches, and power supply issues."
          },
          {
            question: "Can you repair all types of sump pumps?",
            answer: "Yes, we repair submersible, pedestal, and battery-backup sump pumps from all major brands."
          }
        ]
      },
      {
        title: "Water Heater Repair",
        slug: "water-heater-repair",
        description: "Professional water heater repair services to resolve issues like leaks, inconsistent heating, and unusual noises, ensuring a reliable hot water supply for your home.",
        image: "https://narssoplumbing.com/images/services/water-heater-repair-plumbing-service.webp",
        hiring: [
          {
            point: "When your water heater is leaking or showing signs of corrosion"
          },
          {
            point: "If you're experiencing inconsistent water temperatures"
          },
          {
            point: "When unusual noises, such as banging or popping, come from the unit"
          },
          {
            point: "For reduced hot water output or increased energy bills"
          }
        ],
        faqs: [
          {
            question: "What types of water heater problems can you repair?",
            answer: "We address issues like heating element failures, thermostat problems, sediment buildup, leaks, and electrical faults."
          },
          {
            question: "How do I know if my water heater needs repair or replacement?",
            answer: "Minor issues can often be repaired, but if your water heater is over 10–15 years old or extensively damaged, replacement might be more cost-effective."
          }
        ]
      },
      {
        title: "Water Heater Services",
        slug: "water-heater",
        description: "Installation, repair, and maintenance of traditional and tankless water heaters.",
        image: "https://narssoplumbing.com/images/services/water-heater-plumbing-service.webp",
        hiring: [
          {
            point: "When you have no hot water or inconsistent temperatures",
          },
          {
            point: "If you notice leaks around your water heater",
          },
          {
            point: "When your water heater is over 10 years old",
          },
          {
            point: "For annual maintenance and efficiency checks",
          }
        ],
        faqs: [
          {
            question: "How long do water heaters last?",
            answer: "Traditional water heaters typically last 8-12 years, while tankless units can last up to 20 years with proper maintenance."
          },
          {
            question: "What are signs of water heater failure?",
            answer: "Rusty water, strange noises, leaks, and inconsistent heating are common signs."
          }
        ]
      }
    ]
  },
  {
    title: "Commercial Plumbing Services",
    slug: "commercial",
    description: "Professional plumbing solutions for businesses of all sizes. We minimize downtime and ensure your operations run smoothly.",
    services: [
      {
        title: "Commercial Plumbing Installation",
        slug: "commercial-installation",
        description: "Expert installation of commercial plumbing systems, including water lines, drainage, and fixtures.",
        image: "https://narssoplumbing.com/images/services/commercial-installation-plumbing-service.webp",
        hiring: [
          {
            point: "When building or renovating commercial spaces"
          },
          {
            point: "For upgrading existing plumbing systems"
          },
          {
            point: "When expanding your business facilities"
          },
          {
            point: "To meet current building codes and regulations"
          }
        ],
        faqs: [
          {
            question: "What types of commercial installations do you handle?",
            answer: "We handle all types of commercial installations, from small retail spaces to large industrial facilities."
          },
          {
            question: "How long does a commercial installation typically take?",
            answer: "Timeline varies based on project scope, but we work efficiently to minimize business disruption."
          }
        ]
      },
      {
        title: "Commercial Plumbing Repair",
        slug: "commercial-repair",
        description: "Fast, reliable repairs for all commercial plumbing systems to minimize business disruption.",
        image: "https://narssoplumbing.com/images/services/commercial-repair-plumbing-service.webp",
        hiring: [
          {
            point: "When experiencing plumbing emergencies"
          },
          {
            point: "For routine repairs and maintenance"
          },
          {
            point: "If you notice water pressure issues"
          },
          {
            point: "When dealing with persistent clogs or backups"
          }
        ],
        faqs: [
          {
            question: "Do you offer emergency commercial repair services?",
            answer: "Yes, we provide 24/7 emergency services for all commercial properties."
          },
          {
            question: "What types of businesses do you serve?",
            answer: "We serve restaurants, offices, retail stores, warehouses, and industrial facilities."
          }
        ]
      },
      {
        title: "Commercial Maintenance",
        slug: "commercial-maintenance",
        description: "Preventive maintenance programs to keep your commercial plumbing system running efficiently.",
        image: "https://narssoplumbing.com/images/services/commercial-maintenance-plumbing-service.webp",
        hiring: [
          {
            point: "For regular system inspections and maintenance"
          },
          {
            point: "To prevent costly emergency repairs"
          },
          {
            point: "When implementing preventive maintenance programs"
          },
          {
            point: "For compliance with building regulations"
          }
        ],
        faqs: [
          {
            question: "What does maintenance include?",
            answer: "Regular inspections, cleaning, repairs, and system optimization to prevent issues."
          },
          {
            question: "How often is maintenance needed?",
            answer: "We recommend quarterly maintenance for most commercial properties."
          }
        ]
      }
    ]
  },
  {
    title: "Emergency Plumbing Services",
    slug: "emergency",
    description: "24/7 emergency plumbing services for both residential and commercial properties.",
    services: [
      {
        title: "24/7 Emergency Repairs",
        slug: "emergency-repairs",
        description: "Immediate response to urgent plumbing issues including burst pipes and severe leaks.",
        image: "https://narssoplumbing.com/images/services/emergency-repairs-plumbing-service.webp",
        hiring: [
          {
            point: "When experiencing water flooding or severe leaks"
          },
          {
            point: "For burst or frozen pipes"
          },
          {
            point: "During sewer system backups"
          },
          {
            point: "When facing any plumbing emergency"
          }
        ],
        faqs: [
          {
            question: "What is your response time?",
            answer: "We typically arrive within 1-2 hours for emergency calls in our service area."
          },
          {
            question: "What constitutes a plumbing emergency?",
            answer: "Burst pipes, severe leaks, sewer backups, or any situation causing water damage."
          }
        ]
      }
    ]
  },
  {
    title: "Eco-Friendly Plumbing Solutions",
    slug: "eco-friendly",
    description: "Sustainable plumbing solutions that help conserve water and reduce energy consumption.",
    services: [
      {
        title: "Water Conservation Systems",
        slug: "water-conservation",
        description: "Installation and maintenance of water-saving fixtures and systems.",
        image: "https://narssoplumbing.com/images/services/water-conservation-plumbing-service.webp",
        hiring: [
          {
            point: "When looking to reduce water consumption"
          },
          {
            point: "For upgrading to eco-friendly fixtures"
          },
          {
            point: "To implement water recycling systems"
          },
          {
            point: "When seeking green building certification"
          }
        ],
        faqs: [
          {
            question: "What water conservation solutions do you offer?",
            answer: "We offer low-flow fixtures, dual-flush toilets, greywater systems, and smart irrigation solutions."
          },
          {
            question: "Are there tax incentives for water conservation?",
            answer: "Yes, many water conservation upgrades qualify for local and federal tax incentives."
          }
        ]
      },
      {
        title: "Energy-Efficient Water Heating",
        slug: "energy-efficient-heating",
        description: "Installation of solar and high-efficiency water heating systems.",
        image: "https://narssoplumbing.com/images/services/energy-efficient-heating-plumbing-service.webp",
        hiring: [
          {
            point: "When upgrading to an energy-efficient system"
          },
          {
            point: "For solar water heater installation"
          },
          {
            point: "To reduce energy consumption"
          },
          {
            point: "When seeking green energy solutions"
          }
        ],
        faqs: [
          {
            question: "What types of efficient water heaters do you install?",
            answer: "We install solar water heaters, heat pump water heaters, and high-efficiency tankless systems."
          },
          {
            question: "How much can I save with an efficient water heater?",
            answer: "Energy-efficient water heaters can reduce water heating costs by 50-80% annually."
          }
        ]
      }
    ]
  }
];