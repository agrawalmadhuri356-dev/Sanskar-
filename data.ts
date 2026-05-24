// =============================================================================
// Faceless AI Video Script & Prompt Generator - Embedded Dataset
// High-quality, realistic script-prompt combinations for viral faceless content
// =============================================================================

export type Niche = "Space & Sci-Fi" | "Horror/Crime Stories" | "Financial Freedom" | "Unsolved Mysteries" | "Motivation";
export type Tone = "Dramatic" | "Energetic" | "Suspenseful" | "Educational";

export interface ScriptSection {
  timestamp: string;
  label: string;
  content: string;
}

export interface PromptSection {
  scene: string;
  timestamp: string;
  prompt: string;
}

export interface ScriptPromptCombo {
  id: string;
  niche: Niche;
  topic: string;
  keywords: string[];
  tone: Tone;
  script: ScriptSection[];
  prompts: PromptSection[];
}

export const NICHES: Niche[] = [
  "Space & Sci-Fi",
  "Horror/Crime Stories",
  "Financial Freedom",
  "Unsolved Mysteries",
  "Motivation",
];

export const TONES: Tone[] = [
  "Dramatic",
  "Energetic",
  "Suspenseful",
  "Educational",
];

// =============================================================================
// 10+ Pre-built Viral Script-Prompt Combinations
// =============================================================================
export const SCRIPT_DATABASE: ScriptPromptCombo[] = [
  // 1. Space & Sci-Fi - Dark Secrets of Space
  {
    id: "space-1",
    niche: "Space & Sci-Fi",
    topic: "Dark Secrets of Space",
    keywords: ["space", "dark secrets", "universe", "cosmos", "galaxy", "mystery", "astronomy"],
    tone: "Dramatic",
    script: [
      {
        timestamp: "0:00-0:05",
        label: "Hook",
        content: "Did you know there is a giant structure in space that is eating entire galaxies right now? Scientists call it the Great Attractor, and it is pulling our Milky Way toward it at 600 kilometers per second — and we had no idea it existed until recently."
      },
      {
        timestamp: "0:05-0:30",
        label: "Core Body",
        content: "The Great Attractor is a gravitational anomaly located roughly 250 million light-years away in the Laniakea Supercluster. Its mass is equivalent to tens of thousands of Milky Ways, yet we cannot see it directly because it lies in the Zone of Avoidance — a region obscured by the dust and gas of our own galactic plane. Every galaxy within a 200-million-light-year radius is being pulled toward this cosmic monster, including our own. Scientists first detected its influence in the 1970s when they noticed our galaxy was moving faster than the expansion of the universe should allow. Think about that — something massive enough to override the expansion of the entire universe is out there, hidden behind a wall of stars."
      },
      {
        timestamp: "0:30-0:60",
        label: "CTA & Outro",
        content: "The scariest part? We still do not fully understand what the Great Attractor actually is. Some theorize it is a massive concentration of dark matter, while others believe it could be something we have never encountered before. If this blew your mind, hit that like button and subscribe — because next time, we are diving into the BOSS Great Wall, a structure so massive it should not exist according to current physics. You will not want to miss that one."
      }
    ],
    prompts: [
      {
        scene: "Scene 1",
        timestamp: "0:00-0:05",
        prompt: "Hyper-realistic cinematic shot of a colossal dark nebula-like anomaly in deep space slowly consuming a spiral galaxy, swirling streams of stars being pulled inward, dark sci-fi aesthetic, volumetric lighting, 8K resolution, cinematic color grading with deep purples and blues, dramatic lens flare, Unreal Engine 5 render quality"
      },
      {
        scene: "Scene 2",
        timestamp: "0:05-0:30",
        prompt: "Aerial cosmic perspective showing the Laniakea Supercluster with glowing filaments connecting thousands of galaxies, all converging toward a single unseen point, dark matter visualization with ethereal purple streams, the Zone of Avoidance shown as a dense band of dust across the frame, deep space photography style, 8K, National Geographic quality"
      },
      {
        scene: "Scene 3",
        timestamp: "0:30-0:60",
        prompt: "Mysterious dark gravitational well in the center of a vast cosmic web, galaxies spiraling inward like water down a drain, streaks of dark matter visible as ghostly purple threads, a single human silhouette in the foreground for scale, ominous atmosphere, 8K cinematic, anamorphic lens, dark moody lighting"
      }
    ]
  },

  // 2. Space & Sci-Fi - Black Holes
  {
    id: "space-2",
    niche: "Space & Sci-Fi",
    topic: "What Happens Inside a Black Hole",
    keywords: ["black hole", "spaghettification", "event horizon", "singularity", "gravity", "physics"],
    tone: "Suspenseful",
    script: [
      {
        timestamp: "0:00-0:05",
        label: "Hook",
        content: "If you fell into a black hole, your body would be stretched into a strand of spaghetti thinner than a human hair — and scientists actually call this process spaghettification. But what happens after that is even more terrifying."
      },
      {
        timestamp: "0:05-0:30",
        label: "Core Body",
        content: "As you approach the event horizon, time itself begins to slow down from an outside observer's perspective. You would see the entire future of the universe flash before your eyes in a single moment. But from your own perspective, you would cross the event horizon without even noticing — at first. Then the tidal forces kick in. The gravitational pull on your feet would be millions of times stronger than on your head, stretching you into an impossibly thin stream of atoms. Recent research from 2024 suggests that at the very center — the singularity — the laws of physics as we know them completely break down. Some physicists believe the singularity might actually be a gateway to another universe, a white hole on the other side, or even a cosmic database containing the information of everything that ever fell in."
      },
      {
        timestamp: "0:30-0:60",
        label: "CTA & Outro",
        content: "The truth is, nobody knows for certain what lies beyond the event horizon because no information can escape — not even light. But one thing is guaranteed: whatever happens, there is no coming back. If you want to explore more cosmic mysteries that keep physicists up at night, smash that subscribe button and share this with someone who loves space. Our next video reveals the planet that rains glass sideways — yes, that is real."
      }
    ],
    prompts: [
      {
        scene: "Scene 1",
        timestamp: "0:00-0:05",
        prompt: "Terrifying close-up visualization of a human silhouette being stretched into a thin spaghetti-like strand near a massive black hole, accretion disk swirling violently, intense gravitational lensing distorting the background stars, dark cinematic atmosphere, 8K resolution, photorealistic CGI"
      },
      {
        scene: "Scene 2",
        timestamp: "0:05-0:30",
        prompt: "Interior perspective of crossing a black hole's event horizon, time dilation visualized with frozen streaks of light from distant galaxies, spacetime warping around the viewer like a twisted mirror, cosmic blue and orange accretion glow, abstract physics visualization, 8K cinematic, surreal atmosphere"
      },
      {
        scene: "Scene 3",
        timestamp: "0:30-0:60",
        prompt: "A glowing white hole emerging from darkness on the other side of a singularity, particles and light streaming outward, a tunnel of pure energy connecting two realities, mysterious cosmic gateway aesthetic, vibrant white and gold against deep black space, 8K, sci-fi concept art quality"
      }
    ]
  },

  // 3. Horror/Crime Stories - The Vanishing
  {
    id: "horror-1",
    niche: "Horror/Crime Stories",
    topic: "People Who Vanished Without a Trace",
    keywords: ["disappearance", "missing persons", "vanished", "mystery", "unsolved", "crime", "missing"],
    tone: "Suspenseful",
    script: [
      {
        timestamp: "0:00-0:05",
        label: "Hook",
        content: "In 2014, a man walked into a hotel in Canada, booked a room, and then completely vanished. Security cameras caught him entering — but never leaving. His belongings were still in the room, his bed was untouched, and to this day, nobody has any idea what happened to him."
      },
      {
        timestamp: "0:05-0:30",
        label: "Core Body",
        content: "His name was Lars Mittank, and his case is one of the most baffling disappearances in modern history. The last footage of him shows him running out of the hotel at full speed, dropping his bags, and sprinting into a forest. Before he vanished, he sent a text to his mother that simply read: 'I am afraid. Do not answer the phone. I will call you.' Police found no evidence of foul play, no body, and no trail. This is not an isolated case. Every year, over 600,000 people go missing in the United States alone. Most are found. But a small percentage vanish so completely that even the FBI cannot explain it. There are places on Earth — like the Bermuda Triangle, the Alaskan Triangle, and the Bennington Triangle — where people seem to disappear at rates that defy statistical probability."
      },
      {
        timestamp: "0:30-0:60",
        label: "CTA & Outro",
        content: "Are these just tragic accidents and coincidences, or is there something more going on that we do not understand? The truth is, the world is full of vanishings that logic cannot explain. Drop a comment below telling me which missing persons case keeps you up at night, and subscribe for more deep dives into the darkest true crime stories on the internet. Next week, we are covering the hotel that has been the site of more mysterious deaths than any other building in America."
      }
    ],
    prompts: [
      {
        scene: "Scene 1",
        timestamp: "0:00-0:05",
        prompt: "A dimly lit hotel corridor at night, a solitary figure seen from behind walking toward the end of the hallway, security camera POV with slight fish-eye distortion, flickering overhead lights casting long shadows, cold blue and green color palette, noir thriller aesthetic, 8K cinematic, grainy film texture"
      },
      {
        scene: "Scene 2",
        timestamp: "0:05-0:30",
        prompt: "Split-screen surveillance footage showing a man running frantically from a building into dense fog-filled woods, dropping luggage behind him, distorted CCTV perspective with timestamp overlay, dark atmospheric horror lighting, desaturated colors with amber streetlight glow, found footage aesthetic, 8K"
      },
      {
        scene: "Scene 3",
        timestamp: "0:30-0:60",
        prompt: "An ominous aerial shot of three triangle-shaped regions marked on a dark map of North America — Bermuda, Alaska, and Bennington — connected by glowing red lines, fog rolling through forest landscapes below, dark mystery aesthetic, moody teal and crimson lighting, cinematic bird's eye view, 8K"
      }
    ]
  },

  // 4. Horror/Crime Stories - Dark Web
  {
    id: "horror-2",
    niche: "Horror/Crime Stories",
    topic: "The Scariest Things Found on the Dark Web",
    keywords: ["dark web", "internet", "scary", "deep web", "horror", "online", "hidden"],
    tone: "Dramatic",
    script: [
      {
        timestamp: "0:00-0:05",
        label: "Hook",
        content: "A researcher stumbled upon a live video feed on the dark web showing a concrete room with nothing but a chair and a single red light. That feed has been running for over six years — and nobody knows who set it up, where it is, or why."
      },
      {
        timestamp: "0:05-0:30",
        label: "Core Body",
        content: "This is just one of thousands of disturbing findings on the dark web, a hidden layer of the internet that makes up roughly 96 percent of all online content and requires special software like Tor to access. Researchers and cybersecurity experts have documented red rooms — alleged live streams of horrific acts whose authenticity remains debated. There are entire marketplaces selling things that cannot be mentioned on a public platform. Hidden services operating password-protected forums with invitation-only access. Numerical puzzles like Cicada 3301 that recruit individuals through impossibly complex cryptographic challenges. And then there are the numbers stations — mysterious audio broadcasts of automated voices reading sequences of numbers that intelligence agencies use to communicate with covert operatives. The dark web is not just a criminal marketplace — it is an entire shadow internet existing parallel to the one you use every day."
      },
      {
        timestamp: "0:30-0:60",
        label: "CTA & Outro",
        content: "Most of what lurks in the dark web will never see the light of day, and perhaps that is for the best. But the fact that this hidden world exists right beneath the surface of your everyday browsing should make you think twice. If you found this chilling, hit like and subscribe. I am working on a video about the most mysterious websites still active today that nobody can explain — and trust me, you will want to see that one."
      }
    ],
    prompts: [
      {
        scene: "Scene 1",
        timestamp: "0:00-0:05",
        prompt: "A grim concrete room illuminated only by a single red light bulb hanging from the ceiling, an empty metal chair in the center, grainy surveillance camera aesthetic with scan lines and timestamp, claustrophobic atmosphere, deep shadows, horror movie cinematography, 8K, dark and unsettling"
      },
      {
        scene: "Scene 2",
        timestamp: "0:05-0:30",
        prompt: "Abstract visualization of the dark web as a vast underground digital city, glowing neon green and red data streams flowing through tunnels, hooded figures at terminals, encrypted code cascading like rain, matrix-style aesthetic with deep black background, cybersecurity visualization, 8K concept art"
      },
      {
        scene: "Scene 3",
        timestamp: "0:30-0:60",
        prompt: "A person sitting in darkness illuminated only by a laptop screen casting an eerie blue glow on their face, screen reflected in their eyes showing scrolling encrypted text, deep shadows surrounding them, digital horror aesthetic, claustrophobic framing, 8K cinematic, psychological thriller mood"
      }
    ]
  },

  // 5. Financial Freedom - Side Hustles
  {
    id: "finance-1",
    niche: "Financial Freedom",
    topic: "Hidden Side Hustles That Pay More Than Your Job",
    keywords: ["side hustle", "money", "income", "financial freedom", "earn", "passive income", "wealth"],
    tone: "Energetic",
    script: [
      {
        timestamp: "0:00-0:05",
        label: "Hook",
        content: "There is a side hustle that pays 200 dollars per hour, requires zero experience, and less than one percent of people know about it. I am going to show you exactly what it is — and four more just like it — in the next sixty seconds."
      },
      {
        timestamp: "0:05-0:30",
        label: "Core Body",
        content: "Number one: Virtual Usability Testing. Companies like UserTesting and Trymata pay you to browse websites and give feedback. Most tests take 15 to 20 minutes and pay between 10 and 60 dollars. That translates to 30 to 180 dollars per hour. Number two: Print-on-Demand Arbitrage. You design simple graphics using free tools like Canva, list them on Amazon Merch or Redbubble, and earn royalties every time someone buys. Top sellers report earning 2,000 to 5,000 dollars per month in passive income. Number three: AI Prompt Engineering. Businesses are hiring people who can write effective ChatGPT and Midjourney prompts. Freelance rates range from 50 to 200 dollars per hour on platforms like Upwork. Number four: Niche Newsletter Monetization. Build an email list in a specific niche using free tools like Substack, and sponsors will pay you 25 to 50 dollars per 1,000 subscribers per issue."
      },
      {
        timestamp: "0:30-0:60",
        label: "CTA & Outro",
        content: "The common thread with all of these? They require zero upfront investment and can be started today. The only thing separating you from extra income is the decision to start. Save this video, share it with someone who needs to hear it, and subscribe for weekly breakdowns of real money-making strategies that actually work. I will see you in the next one."
      }
    ],
    prompts: [
      {
        scene: "Scene 1",
        timestamp: "0:00-0:05",
        prompt: "Dynamic shot of a laptop screen showing dollar signs and upward trending charts, money floating around the screen in golden light, modern minimalist desk setup with coffee and plants, warm motivational lighting, success aesthetic, clean and professional, 8K, cinematic bokeh background"
      },
      {
        scene: "Scene 2",
        timestamp: "0:05-0:30",
        prompt: "Split-screen montage of four side hustle concepts: usability testing on a laptop, print-on-demand product mockups, AI chatbot prompt interface, and an email newsletter dashboard with subscriber counts, each in its own quadrant with clean modern UI, vibrant but professional color scheme, 8K infographic aesthetic"
      },
      {
        scene: "Scene 3",
        timestamp: "0:30-0:60",
        prompt: "Inspirational image of a person working confidently from a beautiful home office at golden hour, sunlight streaming through large windows, laptop open with revenue dashboard showing growth, calm and empowering atmosphere, warm golden tones, aspirational lifestyle aesthetic, 8K cinematic photography"
      }
    ]
  },

  // 6. Financial Freedom - Compound Interest
  {
    id: "finance-2",
    niche: "Financial Freedom",
    topic: "How Compound Interest Makes You a Millionaire",
    keywords: ["compound interest", "investing", "millionaire", "wealth", "stocks", "retirement", "savings"],
    tone: "Educational",
    script: [
      {
        timestamp: "0:00-0:05",
        label: "Hook",
        content: "If you invested just 5 dollars a day starting at age 18, you would have over 1.2 million dollars by the time you retire. That is not a typo. That is the power of compound interest — and most people completely underestimate it."
      },
      {
        timestamp: "0:05-0:30",
        label: "Core Body",
        content: "Here is how it works. When you invest money and earn a return, that return gets added to your original amount. Then you earn returns on your returns. This creates an exponential growth curve that starts slow but eventually becomes unstoppable. At a conservative 8 percent annual return — which is roughly the historical average of the S&P 500 — five dollars a day becomes 7,300 dollars in five years, 47,000 dollars in fifteen years, and 1.2 million dollars in forty-seven years. The key insight is time, not money. Someone who starts investing at 25 with 200 dollars a month will end up with more money at age 65 than someone who starts at 35 with 400 dollars a month. That ten-year head start is worth more than double the monthly contribution. This is why financial advisors always say the best time to start investing was yesterday."
      },
      {
        timestamp: "0:30-0:60",
        label: "CTA & Outro",
        content: "Compound interest is the closest thing to a financial superpower that exists, but it only works if you give it time. Start today, even if it is just five dollars. Share this with someone who needs to hear it, subscribe for more financial education that actually makes sense, and tell me in the comments — at what age did you start investing? Let us see who the early birds are."
      }
    ],
    prompts: [
      {
        scene: "Scene 1",
        timestamp: "0:00-0:05",
        prompt: "Dramatic visualization of exponential growth: a single coin at the bottom of the frame multiplying into a massive tower of golden coins reaching upward, compound interest concept made visual, dark background with warm golden lighting, clean minimalist style, 8K, financial concept art"
      },
      {
        scene: "Scene 2",
        timestamp: "0:05-0:30",
        prompt: "Side-by-side comparison of two growth curves on a dark dashboard: a flat linear line versus a steep exponential curve, data visualization with glowing teal and gold lines, modern fintech aesthetic, clean typography showing timeline milestones, professional investment presentation style, 8K"
      },
      {
        scene: "Scene 3",
        timestamp: "0:30-0:60",
        prompt: "An hourglass filled with golden coins instead of sand, coins stacking up at the bottom exponentially, time and money concept visualized elegantly, dark moody background with warm gold accents, dramatic lighting from below, luxury financial aesthetic, 8K cinematic, shallow depth of field"
      }
    ]
  },

  // 7. Unsolved Mysteries - Dyatlov Pass
  {
    id: "mystery-1",
    niche: "Unsolved Mysteries",
    topic: "The Dyatlov Pass Incident",
    keywords: ["dyatlov", "pass", "mountain", "hikers", "russia", "mystery", "unexplained", "cold"],
    tone: "Suspenseful",
    script: [
      {
        timestamp: "0:00-0:05",
        label: "Hook",
        content: "In 1959, nine experienced hikers fled their tent in the middle of a Russian winter night — cutting their way out from the inside — and ran barefoot into sub-zero temperatures. When rescuers found them, some had impossible injuries. One was missing a tongue. Another had radiation on their clothes. And nobody can explain why."
      },
      {
        timestamp: "0:05-0:30",
        label: "Core Body",
        content: "This is the Dyatlov Pass Incident, one of the most enduring mysteries of the 20th century. The hikers were led by Igor Dyatlov, a seasoned mountaineer. Their tent was found slashed open from the inside, with all their belongings still inside — including their boots and warm clothing. The footprints in the snow showed they were running, not walking. Two bodies were found near a tree, their hands scratched as if they had tried to climb it. Three more were found between the tent and the forest, frozen in poses suggesting they were crawling back toward shelter. The final four were found in a ravine months later, with injuries that a doctor described as equivalent to being hit by a car — yet with no external wounds. One woman was missing her tongue, eyes, and part of her lip. Two had elevated levels of radiation on their clothing. Soviet investigators closed the case with the official cause of death listed as an unknown compelling force."
      },
      {
        timestamp: "0:30-0:60",
        label: "CTA & Outro",
        content: "In 2021, Swiss researchers used computer simulations to suggest a slab avalanche could explain some injuries, but it does not account for the radiation, the missing tongue, or why they cut their way out of the tent instead of using the door. The Dyatlov Pass Incident remains one of history's greatest unsolved mysteries. What do you think happened on that mountain? Drop your theory in the comments, subscribe for more deep dives into unexplained phenomena, and hit the bell so you never miss a mystery."
      }
    ],
    prompts: [
      {
        scene: "Scene 1",
        timestamp: "0:00-0:05",
        prompt: "A dark snowy mountain landscape at night, a single orange tent with a slash cut through its side, footprints leading away into the darkness, northern lights flickering overhead in greens and purples, eerie and desolate atmosphere, cold blue lighting, 8K cinematic, wide angle shot"
      },
      {
        scene: "Scene 2",
        timestamp: "0:05-0:30",
        prompt: "Forensic reconstruction of a snowy forest clearing with frozen figures in the snow, scratch marks on a tree trunk, scattered belongings, crime scene investigation aesthetic with evidence markers, cold desaturated color palette with harsh shadows, documentary style, 8K, chilling atmosphere"
      },
      {
        scene: "Scene 3",
        timestamp: "0:30-0:60",
        prompt: "Ominous aerial shot of Ural Mountains in winter, heavy snowfall, a vast white landscape with a tiny red circle marking the pass, swirling clouds and wind visible, isolation and dread, cold blue-gray palette with a single warm accent, 8K cinematic drone perspective"
      }
    ]
  },

  // 8. Unsolved Mysteries - The Hum
  {
    id: "mystery-2",
    niche: "Unsolved Mysteries",
    topic: "The Hum That Only Some People Can Hear",
    keywords: ["the hum", "sound", "hearing", "taos", "bristol", "mystery", "noise", "unexplained"],
    tone: "Dramatic",
    script: [
      {
        timestamp: "0:00-0:05",
        label: "Hook",
        content: "There is a low-frequency hum that about two percent of the global population can hear — and it drives them insane. It never stops. It cannot be recorded. And scientists have been trying to figure out what it is for over fifty years with no success."
      },
      {
        timestamp: "0:05-0:30",
        label: "Core Body",
        content: "They call it The Hum, and it has been reported in locations across the world — Taos, New Mexico; Bristol, England; Kokomo, Indiana; and Windsor, Ontario, among many others. People who hear it describe a constant low droning sound, like a diesel engine idling in the distance. It causes sleep deprivation, headaches, nosebleeds, and in extreme cases, suicidal thoughts. The Taos Hum was investigated by Congress in 1993. Researchers from the Los Alamos National Laboratory and Sandia National Laboratories set up sensitive acoustic equipment — and detected nothing. Audio recordings picked up no unusual sounds. Yet the sufferers could clearly hear it. Some researchers believe it could be caused by low-frequency radio transmissions, industrial equipment, tinnitus, or even atmospheric phenomena. Others theorize it might be generated by secret military communications or HAARP-like installations."
      },
      {
        timestamp: "0:30-0:60",
        label: "CTA & Outro",
        content: "The most disturbing theory? That The Hum is being caused by something humans were never meant to perceive — a frequency that only certain nervous systems can detect. Whether it is industrial, military, or something entirely unknown, the people who hear it are suffering, and science cannot help them. Can you hear The Hum? Let me know in the comments. Subscribe and hit the bell for more deep dives into phenomena that science cannot explain. Next up: the town where people simultaneously lost consciousness for no reason."
      }
    ],
    prompts: [
      {
        scene: "Scene 1",
        timestamp: "0:00-0:05",
        prompt: "Abstract visualization of invisible sound waves rippling through a suburban neighborhood at dawn, houses and streets slightly distorted by the waves, a single person standing on a porch pressing their hands against their ears in distress, atmospheric horror aesthetic, muted dawn colors with an unsettling warm tone, 8K cinematic"
      },
      {
        scene: "Scene 2",
        timestamp: "0:05-0:30",
        prompt: "Scientific laboratory with acoustic measurement equipment and waveform displays showing flat lines despite the presence of sound, a researcher looking confused at the readings, monitors glowing green in a dark room, cold fluorescent lighting, X-Files aesthetic, 8K, documentary cinematography style"
      },
      {
        scene: "Scene 3",
        timestamp: "0:30-0:60",
        prompt: "Eerie visualization of low-frequency waves pulsing through the Earth's atmosphere, visible as faint concentric rings emanating from an unknown source, overlay of radio tower silhouettes and military installations in the distance, twilight sky in deep orange and purple, conspiracy aesthetic, 8K, dramatic scale"
      }
    ]
  },

  // 9. Motivation - The 5AM Club
  {
    id: "motivation-1",
    niche: "Motivation",
    topic: "Why Waking Up at 5AM Changes Everything",
    keywords: ["5am", "morning", "routine", "waking up", "discipline", "success", "habits", "productivity"],
    tone: "Energetic",
    script: [
      {
        timestamp: "0:00-0:05",
        label: "Hook",
        content: "Every single self-made millionaire in a recent study had one thing in common — they all woke up before 6 AM. Not because they had to, but because they understood something that 95 percent of people never will."
      },
      {
        timestamp: "0:05-0:30",
        label: "Core Body",
        content: "The first hour of your day sets the trajectory for everything that follows. When you wake up at 5 AM, you claim the only truly undisturbed time in your day. No notifications. No demands. No interruptions. Just you and your ambition. Robin Sharma calls this the Victory Hour — twenty minutes of intense movement, twenty minutes of reflection through journaling or meditation, and twenty minutes of growth through reading or learning. This single hour compounds into extraordinary results over time. Neuroscience shows that your prefrontal cortex — the part of your brain responsible for decision-making and willpower — is at peak performance in the early morning hours. By the time most people hit snooze for the third time, you have already exercised, planned your day, and invested in your growth. The gap between where you are and where you want to be is bridged by what you do when nobody is watching."
      },
      {
        timestamp: "0:30-0:60",
        label: "CTA & Outro",
        content: "Tomorrow morning, when that alarm goes off, you have two choices: stay comfortable and keep getting the same results, or get up and start building the life you actually want. The choice is yours. Save this video for your next morning motivation, subscribe if you are serious about leveling up, and comment the time you are committing to wake up tomorrow. Let us hold each other accountable."
      }
    ],
    prompts: [
      {
        scene: "Scene 1",
        timestamp: "0:00-0:05",
        prompt: "Epic sunrise seen through a large window, a silhouette of a person standing powerfully with arms crossed looking out at the horizon, golden light flooding the room, motivational and empowering atmosphere, warm amber and orange tones, 8K cinematic, dramatic composition"
      },
      {
        scene: "Scene 2",
        timestamp: "0:05-0:30",
        prompt: "Split timeline visualization: left side shows a person hitting snooze in a messy dark room, right side shows the same person at 5 AM meditating, journaling, and exercising in a clean bright space, contrast between chaos and discipline, motivational infographic style, 8K, warm vs cold lighting"
      },
      {
        scene: "Scene 3",
        timestamp: "0:30-0:60",
        prompt: "A single alarm clock glowing 5:00 AM in a dark room, a hand reaching to turn it off with determination, morning light just beginning to peek through blinds, a running outfit and journal laid out ready on a chair, anticipation and commitment visualized, 8K, dramatic lighting"
      }
    ]
  },

  // 10. Motivation - Stop Procrastinating
  {
    id: "motivation-2",
    niche: "Motivation",
    topic: "The 2-Minute Rule That Destroys Procrastination",
    keywords: ["procrastination", "productivity", "two minute rule", "discipline", "motivation", "habits", "action"],
    tone: "Energetic",
    script: [
      {
        timestamp: "0:00-0:05",
        label: "Hook",
        content: "There is a psychological trick that takes exactly two minutes and can break through any episode of procrastination instantly. It is used by Navy SEALs, Olympic athletes, and Fortune 500 CEOs — and it is so simple you will not believe it works until you try it."
      },
      {
        timestamp: "0:05-0:30",
        label: "Core Body",
        content: "It is called the Two-Minute Rule, and it works like this: whenever you feel resistance to starting something, scale the task down to a version that takes less than two minutes. Want to start a workout? Just put on your shoes. That is it. Need to write a report? Just write the title. Want to read a book? Just open it to page one. The science behind this is powerful. Your brain perceives big tasks as threats, triggering an amygdala response that creates anxiety and avoidance. But a two-minute task does not register as a threat, so your brain bypasses the resistance entirely. And here is the magic — once you start, the Zeigarnik Effect kicks in. This is your brain's natural compulsion to finish what it starts. Studies show that 83 percent of people who use the two-minute rule end up completing the full task. Navy SEALs use a similar technique called micro-goals — breaking seemingly impossible missions into tiny, manageable actions."
      },
      {
        timestamp: "0:30-0:60",
        label: "CTA & Outro",
        content: "The hardest part of anything is starting. The Two-Minute Rule eliminates that barrier completely. Right now, pick one thing you have been putting off and do just two minutes of it. I promise you will keep going. Share this with someone who needs it, subscribe for more science-backed productivity strategies, and tell me in the comments — what is the first two-minute task you are going to tackle?"
      }
    ],
    prompts: [
      {
        scene: "Scene 1",
        timestamp: "0:00-0:05",
        prompt: "A dramatic clock showing two minutes, with the second hand at the starting position, the clock surrounded by floating tasks and to-do lists dissolving into light particles, dark background with vibrant energy bursts, motivational and dynamic aesthetic, 8K, high contrast"
      },
      {
        scene: "Scene 2",
        timestamp: "0:05-0:30",
        prompt: "Brain visualization showing the amygdala lighting up red with anxiety then transitioning to calm blue as a small action is taken, neural pathways glowing brighter as momentum builds, neuroscience meets motivation aesthetic, dark background with neon bio-luminescence, 8K, scientific visualization"
      },
      {
        scene: "Scene 3",
        timestamp: "0:30-0:60",
        prompt: "A person taking a single powerful step forward on a path that transforms from dark and foggy to bright and clear, the act of starting visualized as breaking through an invisible barrier, inspirational cinematic atmosphere, warm light breaking through clouds, 8K, hero's journey aesthetic"
      }
    ]
  },

  // 11. Space & Sci-Fi - Multiverse
  {
    id: "space-3",
    niche: "Space & Sci-Fi",
    topic: "Evidence That the Multiverse Actually Exists",
    keywords: ["multiverse", "parallel universe", "quantum", "many worlds", "dimensions", "reality", "physics"],
    tone: "Educational",
    script: [
      {
        timestamp: "0:00-0:05",
        label: "Hook",
        content: "A Nobel Prize-winning physicist recently stated that the multiverse is not just theoretical — it is the most logical conclusion of our best scientific models. And new evidence from the James Webb Space Telescope might actually prove it."
      },
      {
        timestamp: "0:05-0:30",
        label: "Core Body",
        content: "The idea of parallel universes sounds like science fiction, but it emerges naturally from three of our most successful theories in physics. First, cosmic inflation theory suggests that the Big Bang was not a single event but an ongoing process, creating infinite bubble universes with different physical laws. Second, quantum mechanics and the Many-Worlds Interpretation propose that every quantum decision creates a branching reality — meaning copies of you exist in universes where every possible choice was made. Third, string theory requires extra dimensions and predicts a landscape of roughly 10 to the power of 500 different possible universes. But here is where it gets real: the JWST has detected galaxies forming in ways that should not be possible in our universe's timeline — galaxies that are too massive, too organized, and too old. Some physicists argue this could be evidence of gravitational leakage from a neighboring universe in the multiverse."
      },
      {
        timestamp: "0:30-0:60",
        label: "CTA & Outro",
        content: "If the multiverse is real, then somewhere out there is a version of you watching a slightly different version of this video. The implications are staggering, and we are closer than ever to finding proof. Subscribe for more mind-expanding science content, share this with someone who thinks the multiverse is just a movie plot, and tell me in the comments — would you want to meet your parallel self?"
      }
    ],
    prompts: [
      {
        scene: "Scene 1",
        timestamp: "0:00-0:05",
        prompt: "Infinite mirror-like reflections of the same cosmic scene, each slightly different — galaxies rotated, colors shifted, stars in new positions — creating a visual representation of the multiverse, deep space background with fractal patterns, 8K, psychedelic meets scientific aesthetic"
      },
      {
        scene: "Scene 2",
        timestamp: "0:05-0:30",
        prompt: "The James Webb Space Telescope floating in space, its golden hexagonal mirror reflecting impossible galaxies that seem to phase in and out of existence, quantum branching visible as faint duplicated light trails, deep black space with warm golden telescope and cool blue distant galaxies, 8K cinematic"
      },
      {
        scene: "Scene 3",
        timestamp: "0:30-0:60",
        prompt: "A cosmic tree of universes, each branch containing an entire galaxy with its own laws of physics, roots extending into a quantum foam of possibilities, grand and philosophical scale, dark background with bioluminescent cosmic colors, 8K concept art, awe-inspiring composition"
      }
    ]
  },

  // 12. Horror/Crime Stories - Cursed Objects
  {
    id: "horror-3",
    niche: "Horror/Crime Stories",
    topic: "Cursed Objects That Kill Their Owners",
    keywords: ["cursed", "objects", "haunted", "annabelle", "dybbuk", "kill", "death", "supernatural"],
    tone: "Dramatic",
    script: [
      {
        timestamp: "0:00-0:05",
        label: "Hook",
        content: "There is a painting that kills anyone who hangs it in their home. A doll that attacks people while they sleep. And a box that drives its owners to hallucinate, self-harm, and worse. These are real objects with documented histories — and they are still out there."
      },
      {
        timestamp: "0:05-0:30",
        label: "Core Body",
        content: "The Dybbuk Box is perhaps the most infamous. This wine cabinet was sold on eBay in 2001 with a warning that it contained a restless spirit from Jewish mythology called a dybbuk. Every owner reported horrifying experiences: sudden illness, terrifying visions, insect infestations that appeared from nowhere, and the smell of cat urine and jasmine flowers. One owner woke up with claw marks on his body. Another was hospitalized with unexplained respiratory failure. The Annabelle doll, now housed in the Warrens' Occult Museum, has been linked to multiple attacks and a near-fatal car accident. The Hands Resist Him painting — known as the most haunted painting on the internet — has caused viewers to report nausea, blackouts, and the figures in the painting allegedly moving. Even the museum that displayed it received complaints that people near the painting fell ill."
      },
      {
        timestamp: "0:30-0:60",
        label: "CTA & Outro",
        content: "Whether you believe in curses or not, the documented experiences of these objects' owners are disturbingly consistent across unrelated people, cultures, and time periods. Something unexplainable is going on. Would you ever bring one of these objects into your home? Tell me in the comments — and subscribe for more deep dives into the dark side of history. Next video: the island where thousands of dolls hang from trees, and the curse that put them there."
      }
    ],
    prompts: [
      {
        scene: "Scene 1",
        timestamp: "0:00-0:05",
        prompt: "A collection of three cursed objects arranged on a dark velvet surface: an antique wine cabinet with Hebrew carvings, a porcelain doll with cracked features, and a painting of a boy and a doll with hands reaching from behind a door, dramatic chiaroscuro lighting, deep red and black color palette, horror museum aesthetic, 8K"
      },
      {
        scene: "Scene 2",
        timestamp: "0:05-0:30",
        prompt: "The Dybbuk Box wine cabinet open in a dark room, a faint ghostly figure emerging from inside, shadow tendrils reaching outward, flickering candlelight casting dancing shadows on the walls, Jewish mystical symbols faintly glowing, supernatural horror aesthetic, 8K, found footage style"
      },
      {
        scene: "Scene 3",
        timestamp: "0:30-0:60",
        prompt: "A dark corridor of a paranormal museum, glass cases containing eerie objects, the Annabelle doll visible in the distance under red light, visitors' reflections showing distorted versions of themselves, long perspective leading to a locked door at the end, institutional horror aesthetic, 8K cinematic"
      }
    ]
  },

  // 13. Financial Freedom - Digital Nomad
  {
    id: "finance-3",
    niche: "Financial Freedom",
    topic: "How to Work From Anywhere in the World",
    keywords: ["digital nomad", "remote work", "travel", "freedom", "location independent", "laptop lifestyle", "work from home"],
    tone: "Energetic",
    script: [
      {
        timestamp: "0:00-0:05",
        label: "Hook",
        content: "Right now, over 35 million people are working from beaches, mountains, and coffee shops around the world — and earning six figures doing it. The digital nomad lifestyle is not a fantasy. It is a strategy, and I am going to break it down in 60 seconds."
      },
      {
        timestamp: "0:05-0:30",
        label: "Core Body",
        content: "Step one: Pick a high-income remote skill. The top five right now are software development, UX design, copywriting, data analysis, and social media management. You do not need a degree for any of these — you need a portfolio. Step two: Build your income engine before you travel. You need at least 3,000 dollars per month in consistent remote income. Use platforms like Upwork, Toptal, or direct outreach to land your first clients. Step three: Choose a low-cost base. Chiang Mai, Bali, Lisbon, Medellin, and Tbilisi offer world-class coworking spaces, fast internet, and living costs under 1,500 dollars a month. Step four: Optimize your tax situation. Many countries now offer digital nomad visas with significant tax advantages. Portugal's NHR program, Estonia's e-Residency, and Barbados's Welcome Stamp can legally reduce your tax burden to near zero."
      },
      {
        timestamp: "0:30-0:60",
        label: "CTA & Outro",
        content: "The digital nomad lifestyle is not about escaping reality — it is about designing one. And the tools to do it have never been more accessible. If this inspired you, save this video, follow for more strategies, and comment your dream work-from-anywhere destination. The world is your office — start acting like it."
      }
    ],
    prompts: [
      {
        scene: "Scene 1",
        timestamp: "0:00-0:05",
        prompt: "Stunning panoramic shot of a person working on a laptop on a wooden deck overlooking tropical turquoise water and lush green mountains, golden hour lighting, freedom and paradise aesthetic, warm vibrant colors, aspirational travel lifestyle, 8K cinematic, drone perspective"
      },
      {
        scene: "Scene 2",
        timestamp: "0:05-0:30",
        prompt: "Clean infographic-style montage of five remote work skills represented as glowing icons (code, design pen, text, chart, social media) floating above a world map with highlighted digital nomad cities marked with pins, dark background with teal and gold accents, modern data visualization, 8K"
      },
      {
        scene: "Scene 3",
        timestamp: "0:30-0:60",
        prompt: "A person walking confidently through an airport with just a backpack and laptop, world map hologram projected from the laptop showing interconnected nomad cities, bright and optimistic atmosphere, travel and freedom concept, warm lighting, 8K cinematic, lifestyle photography"
      }
    ]
  },
];

// =============================================================================
// Template structures for the fallback generation engine
// =============================================================================

export const HOOK_TEMPLATES: Record<Niche, string[]> = {
  "Space & Sci-Fi": [
    "Did you know that {topic}? Scientists are still trying to explain this, and what they have found will change how you see the universe forever.",
    "What if I told you that {topic}? This is not science fiction — this is real, and it is happening right now.",
    "Astronomers just discovered something about {topic} that defies everything we thought we knew about space.",
    "The truth about {topic} is so shocking that most people refuse to believe it — but the evidence is undeniable.",
  ],
  "Horror/Crime Stories": [
    "There is something deeply wrong with {topic}, and the people who have experienced it firsthand will never be the same.",
    "What happened with {topic} is so disturbing that the full story has been kept from the public — until now.",
    "In {topic}, something was found that should not exist. And it is still out there.",
    "The case of {topic} has haunted investigators for decades, and every new clue only deepens the mystery.",
  ],
  "Financial Freedom": [
    "There is a hidden strategy behind {topic} that the top one percent do not want you to know about — and I am going to reveal it right now.",
    "Everyone talks about {topic}, but almost nobody is doing it the right way. Here is the method that actually works.",
    "What if I told you that {topic} could replace your full-time income in 90 days? Here is the blueprint.",
    "The number one mistake people make with {topic} costs them thousands every single month. Let me show you the fix.",
  ],
  "Unsolved Mysteries": [
    "For decades, {topic} has baffled the world's greatest minds. And despite new technology, we are no closer to the truth.",
    "The case of {topic} has more questions than answers — and some of those questions might be better left unasked.",
    "Scientists, investigators, and governments have all tried to explain {topic}. Every single one has failed.",
    "What really happened with {topic}? The official explanation does not add up, and the truth may be far stranger.",
  ],
  "Motivation": [
    "Every successful person you admire discovered one truth about {topic} — and it changed everything for them.",
    "The difference between where you are and where you want to be comes down to one thing: {topic}.",
    "Ninety-five percent of people ignore {topic}, and that is exactly why ninety-five percent of people stay stuck.",
    "What if the secret to {topic} was not about doing more, but about doing one specific thing differently starting today?",
  ],
};

export const BODY_TEMPLATES: Record<Niche, string[]> = {
  "Space & Sci-Fi": [
    "The science behind {topic} reveals something extraordinary. Recent observations from the James Webb Space Telescope have provided data that challenges our fundamental understanding of the cosmos. According to leading astrophysicists, the implications of {topic} extend far beyond what we currently comprehend. The data suggests that our models of the universe may need significant revision. What makes this particularly fascinating is that the evidence has been hiding in plain sight for decades, waiting for the right instruments and the right minds to interpret it correctly. When you combine this with recent findings from gravitational wave detectors and quantum field theory, a new picture of reality begins to emerge — one that is far stranger and more beautiful than anyone imagined.",
    "Here is what makes {topic} so mind-bending. The universe operates on scales that are almost impossible for the human mind to grasp. When we look at {topic} through the lens of modern physics, we find that space and time behave in ways that contradict our everyday experience. Quantum mechanics tells us that particles can exist in multiple states simultaneously, and general relativity shows us that massive objects warp the fabric of spacetime itself. {topic} sits at the intersection of these two great theories, exposing the deep mystery that lies at the heart of physical reality.",
  ],
  "Horror/Crime Stories": [
    "The details of {topic} read like a horror script, but they are terrifyingly real. Multiple witnesses have come forward with accounts that are disturbingly consistent, despite having no contact with each other. Investigators found evidence that should have led to answers, but instead, every lead created more questions. The pattern in {topic} suggests something systematic — something deliberate — that goes beyond coincidence. What makes this case particularly chilling is the silence surrounding it. People who got too close to the truth have a tendency to disappear, change their stories, or simply stop talking altogether.",
    "When you dig into {topic}, the layers of darkness go deeper than anyone expected. What started as a single incident has revealed a web of connections stretching across years and continents. Forensic evidence contradicts witness statements, and witness statements contradict the official narrative. There are gaps in the timeline that nobody can explain — black holes in the story where something clearly happened, but no one is talking. The people involved in {topic} share one thing in common: they all wish they had never gotten involved.",
  ],
  "Financial Freedom": [
    "Let me break down exactly how {topic} works, because the mechanics are simpler than most people realize. The key is understanding that wealth is not built through a single lucky break — it is built through consistent application of proven strategies. With {topic}, the approach is systematic: identify the opportunity, validate the market, create a minimum viable offer, and scale through reinvestment. What separates those who succeed from those who fail is not talent or luck — it is execution speed and consistency. The data is clear: people who commit to {topic} for at least six months see an average return that dwarfs traditional employment income.",
    "The strategy behind {topic} has been quietly used by the wealthy for generations, but the internet has made it accessible to anyone willing to learn. Here is the framework: first, you need to understand the underlying economics. Then, you need to leverage the compounding effect of small, consistent actions. The beauty of {topic} is that it scales exponentially — the first month might produce modest results, but by month six, the growth curve becomes almost vertical. The key metric to track is not revenue — it is profit per hour of effort invested. Once you optimize for that, everything else falls into place.",
  ],
  "Unsolved Mysteries": [
    "The evidence surrounding {topic} creates a puzzle that refuses to be solved. Every new investigation unearths more contradictions than conclusions. Witnesses describe events that defy logical explanation. Physical evidence exists that should be impossible according to known science. And the official records contain gaps and redactions that suggest someone, somewhere, knows more than they are willing to share. What makes {topic} particularly haunting is that it is not a cold case from centuries ago — it is recent, it is documented, and it remains utterly unexplained despite the best efforts of modern science and investigation.",
    "Consider the facts of {topic}: multiple independent accounts describe the same inexplicable phenomenon. Physical traces were found and documented by trained professionals. Government agencies were involved, yet their reports raise more questions than they answer. The official explanation has been challenged by experts across multiple fields, and no alternative theory has been able to account for all the evidence. {topic} sits in that uncomfortable space where the data demands an answer that our current understanding of the world cannot provide.",
  ],
  "Motivation": [
    "Here is the truth about {topic} that nobody tells you: it is not about motivation — it is about systems. Motivation is fleeting. It shows up when you watch a video like this one and disappears by tomorrow morning. But a system? A system runs whether you feel like it or not. The people who master {topic} do not have more willpower than you. They have better systems. They have engineered their environment so that doing the right thing is the path of least resistance. They have eliminated decision fatigue by automating their habits. And they have replaced the question of should I do this? with when am I doing this? That single shift — from optional to scheduled — is what separates the top five percent from everyone else.",
    "The science behind {topic} is clearer than ever. Neuroplasticity research shows that your brain physically rewires itself through repeated action — not through wishful thinking. When you practice {topic} consistently, you are literally building new neural pathways that make the behavior automatic over time. The first 21 days are the hardest because your brain is still running on old wiring. But once those new connections strengthen, {topic} stops being something you have to do and becomes something you simply do — like brushing your teeth. The key is surviving the transition period, and that is where most people quit. But not you. Not after hearing this.",
  ],
};

export const CTA_TEMPLATES: Record<Niche, string[]> = {
  "Space & Sci-Fi": [
    "The universe is far stranger than we ever imagined, and we are just beginning to scratch the surface. If this expanded your mind, hit that like button and subscribe — because next time, we are going even deeper down the cosmic rabbit hole. Share this with someone who needs their perspective shifted today.",
    "Space keeps proving that reality is wilder than fiction. Stay curious, keep exploring, and subscribe for more content that reveals the hidden wonders of the cosmos. Drop a comment telling me which space mystery keeps you up at night — I read every single one.",
  ],
  "Horror/Crime Stories": [
    "The darkness in this world is deeper than most people dare to acknowledge. If this sent chills down your spine, you are not alone. Subscribe and hit the bell for more deep dives into true crime and the unexplained. And remember — sometimes the scariest stories are the ones that are true.",
    "Sleep well tonight — or try to, at least. If you want more stories from the dark side, subscribe now and enable notifications. I am working on something even more unsettling for next time. Drop a comment with the creepiest true story you have ever heard.",
  ],
  "Financial Freedom": [
    "The only thing standing between you and financial freedom is the decision to start. Take one action today — even a small one — and let the compound effect do the rest. Save this video, share it with someone who needs it, and subscribe for weekly strategies that actually move the needle on your income.",
    "Wealth is not a mystery — it is a method. If this gave you actionable insights, like and subscribe for more no-BS financial content. Comment below with your biggest money goal this year, and let us build this community of people who are serious about freedom.",
  ],
  "Unsolved Mysteries": [
    "Some mysteries are meant to remain unsolved — but that does not mean we stop searching. If this left you with more questions than answers, good. That means you are paying attention. Subscribe for more investigations into the unexplained, and tell me in the comments: what is the one mystery you would give anything to solve?",
    "The truth is out there, even if it is hiding in the shadows. If you are as fascinated by the unexplained as I am, subscribe and join a community of people who refuse to accept easy answers. What mystery should I cover next? Your suggestions in the comments decide the next video.",
  ],
  "Motivation": [
    "The gap between knowing and doing is where most people live their entire lives. But not you — not after watching this. Take one action in the next five minutes that moves you closer to your goal. Then subscribe for daily reminders of what you are capable of. Share this with someone who needs to hear it today.",
    "Your future self is counting on the decisions you make right now. Start today. Start messy. Just start. If this lit a fire in you, save it for when you need it, subscribe for more fuel, and comment your commitment below. Accountability creates results. Let us build together.",
  ],
};

export const PROMPT_TEMPLATES: Record<Niche, string[]> = {
  "Space & Sci-Fi": [
    "Scene {n}: Breathtaking cosmic visualization of {topic}, deep space nebulae and star clusters in the background, volumetric lighting with deep purples and blues, hyper-realistic 8K cinematic quality, sci-fi concept art, Unreal Engine 5 render, dramatic scale comparison, anamorphic lens flare",
    "Scene {n}: Astronomical phenomenon related to {topic}, swirling galaxies and cosmic dust, gravitational lensing effects, dark matter visualization as ethereal streams, deep black space with bioluminescent cosmic colors, 8K resolution, cinematic wide shot, NASA visualization quality",
  ],
  "Horror/Crime Stories": [
    "Scene {n}: Dark atmospheric scene depicting {topic}, shadows concealing more than they reveal, a single flickering light source casting long distorted shadows, cold desaturated color palette with occasional warm accent, found footage grain texture, horror cinematography, 8K, psychological thriller mood",
    "Scene {n}: Eerie crime scene aesthetic related to {topic}, fog and haze in a desolate location, evidence markers and investigation elements, noir lighting with harsh contrasts, unsettling atmosphere that suggests something unseen is present, 8K cinematic, documentary style",
  ],
  "Financial Freedom": [
    "Scene {n}: Professional financial visualization of {topic}, clean modern dashboard with glowing charts and upward trending lines, warm golden and teal accent lighting, motivational success aesthetic, luxury office environment in background with soft bokeh, 8K, fintech design quality",
    "Scene {n}: Aspirational lifestyle concept for {topic}, golden hour lighting, modern workspace with laptop showing growth metrics, minimalist and clean environment, warm amber tones suggesting prosperity and freedom, 8K cinematic, professional photography quality",
  ],
  "Unsolved Mysteries": [
    "Scene {n}: Mysterious atmospheric scene related to {topic}, fog-filled environment with faint unexplained lights in the distance, desaturated earth tones with a single point of vivid color, evidence boards and investigation materials in the composition, X-Files aesthetic, 8K, moody cinematography",
    "Scene {n}: Haunting landscape connected to {topic}, abandoned or isolated location, twilight sky in deep oranges and purples, forensic or investigative elements partially visible, sense of something hidden waiting to be discovered, 8K cinematic, true crime documentary style",
  ],
  "Motivation": [
    "Scene {n}: Powerful motivational visualization of {topic}, a lone figure in a moment of determination and breakthrough, dramatic lighting from behind creating a powerful silhouette, warm golden and orange tones suggesting energy and possibility, 8K cinematic, inspirational poster quality",
    "Scene {n}: Dynamic action scene representing {topic}, motion blur suggesting speed and forward momentum, sunrise or golden hour lighting symbolizing new beginnings, clean and powerful composition, motivational aesthetic with high contrast, 8K, hero's journey cinematography",
  ],
};
