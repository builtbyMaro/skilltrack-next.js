export default function Spinner({ size = 40 }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        border: "4px solid hsl(220, 13%, 91%)",
        borderTop: "4px solid hsl(227, 99%, 58%)",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
      }}
    />
  );
}
