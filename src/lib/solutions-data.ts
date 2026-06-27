import bowling from "@/assets/sol-bowling.jpg";
import arcade from "@/assets/sol-arcade.jpg";
import vr from "@/assets/sol-vr.jpg";
import redemption from "@/assets/sol-redemption.jpg";
import kiddie from "@/assets/sol-kiddie.jpg";
import carnival from "@/assets/sol-carnival.jpg";

export type Solution = {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  highlights: string[];
};

export const SOLUTIONS: Solution[] = [
  {
    id: "bowling",
    name: "Bowling Solutions",
    category: "Bowling",
    image: bowling,
    description:
      "Premium tenpin and string-pin bowling systems engineered for commercial throughput — from boutique 4-lane installations to flagship 32-lane centers.",
    highlights: ["Lane design & supply", "Scoring & display systems", "Pin-spotter installation", "Service & spares"],
  },
  {
    id: "arcade",
    name: "Arcade Games",
    category: "Arcade",
    image: arcade,
    description:
      "Revenue-tuned arcade portfolios — video, prize, sports and simulator cabinets sourced from leading global manufacturers.",
    highlights: ["Curated game mix", "Card system integration", "Revenue tracking", "Lifecycle refreshes"],
  },
  {
    id: "vr",
    name: "VR Experiences",
    category: "VR",
    image: vr,
    description:
      "Immersive VR attractions — free-roam arenas, motion simulators and multiplayer pods that drive footfall and per-cap spend.",
    highlights: ["Free-roam arenas", "Motion simulators", "Multiplayer pods", "Content updates"],
  },
  {
    id: "redemption",
    name: "Redemption Games",
    category: "Redemption",
    image: redemption,
    description:
      "Ticket-based attractions and redemption counters designed to maximise repeat visits and average length-of-stay.",
    highlights: ["Ticket games", "E-ticket systems", "Prize merchandising", "Counter design"],
  },
  {
    id: "kiddie",
    name: "Kiddie Rides",
    category: "Kiddie",
    image: kiddie,
    description:
      "Compact, certified kiddie attractions for the 2–9 age band — proven anchors for family dwell-time in malls and resorts.",
    highlights: ["Carousels & coin-rides", "Soft-play modules", "Mini-trains", "Compliance certified"],
  },
  {
    id: "carnival",
    name: "Carnival Attractions",
    category: "Carnival",
    image: carnival,
    description:
      "Interactive midway-style games — skee-ball, basketball, ring-toss and crane attractions for high-throughput zones.",
    highlights: ["Skee-ball & alleys", "Basketball cabinets", "Cranes & prize merchandisers", "Custom theming"],
  },
];
