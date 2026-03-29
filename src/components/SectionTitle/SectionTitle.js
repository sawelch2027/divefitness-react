import "./SectionTitle.css";

function SectionTitle({ title, subtitle, center = false }) {
  return (
    <div className={`section-title ${center ? "center" : ""}`}>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;