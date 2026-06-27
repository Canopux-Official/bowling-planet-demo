import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  align = "left",
  size = "md",
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  image: string;
  align?: "left" | "center";
  size?: "md" | "lg";
  children?: ReactNode;
}) {
  return (
    <section
      className={`relative isolate w-full overflow-hidden ${
        size === "lg" ? "min-h-[88vh]" : "min-h-[68vh]"
      } flex items-end`}
    >
      <img
        src={image}
        alt=""
        aria-hidden
        width={1920}
        height={1080}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,17,32,0.85) 0%, rgba(8,17,32,0.55) 35%, rgba(8,17,32,0.7) 75%, rgba(8,17,32,0.92) 100%)",
        }}
      />
      <div className={`container-page pt-40 pb-16 md:pt-48 md:pb-20 ${align === "center" ? "text-center mx-auto" : ""}`}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={align === "center" ? "max-w-3xl mx-auto" : "max-w-3xl"}
        >
          {eyebrow && (
            <p className="text-[12px] font-display font-semibold tracking-[0.22em] uppercase text-green">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-5 text-white text-[40px] md:text-[64px] leading-[1.02] font-bold">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 text-[17px] md:text-[19px] leading-[1.6] text-white/80 max-w-2xl">
              {intro}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
}
