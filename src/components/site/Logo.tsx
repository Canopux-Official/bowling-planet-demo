import logo from "../../assets/logo.png";

export function Logo({ className = "h-9 md:h-10" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`} aria-label="Bowling Planet">
      <img
        src={logo}
        alt="Bowling Planet"
        className="h-full w-auto object-contain"
      />
    </div>
  );
}
