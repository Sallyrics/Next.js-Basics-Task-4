import styles from "./ProfileCard.module.css";

export default function ProfileCard({
  name = "Sally Student",
  role = "Frontend Developer",
  bio = "Learning Next.js, CSS Modules, and Tailwind CSS.",
  bgColor = "#1e293b",
  accentColor = "#38bdf8",
}) {
  return (
    <div
      className={`${styles.card} text-white`}
      style={{
        backgroundColor: bgColor,
        borderTop: `4px solid ${accentColor}`,
      }}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold tracking-tight">{name}</h2>
        <span
          className="rounded-full px-3 py-1 text-xs font-semibold text-slate-900"
          style={{ backgroundColor: accentColor }}
        >
          {role}
        </span>
      </div>
      <p className="mt-3 text-sm text-slate-200">{bio}</p>
    </div>
  );
}
