export default function Card({ bgColor = "#1e293b", title = "Card Title", description = "This card uses inline styles." }) {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: "#ffffff",
        padding: "20px",
        borderRadius: "8px",
        margin: "12px 0",
        maxWidth: "400px",
      }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
