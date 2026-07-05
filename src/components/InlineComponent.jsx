import "../App.css";

export default function InlineComponent({ year }) {
  return (
    <div>
      <h1 className="inline-header">InlineComponent {year}</h1>
    </div>
  );
}
