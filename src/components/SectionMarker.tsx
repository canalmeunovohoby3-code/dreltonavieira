type SectionMarkerProps = {
  numero: string;
  rotulo: string;
  claro?: boolean;
  className?: string;
};

export function SectionMarker({
  numero,
  rotulo,
  claro = false,
  className,
}: SectionMarkerProps) {
  return (
    <div
      className={`marcador${claro ? " marcador--claro" : ""}${
        className ? ` ${className}` : ""
      }`}
    >
      <span className="marcador__numero">{numero}</span>
      <span className="marcador__linha" aria-hidden="true" />
      <span>{rotulo}</span>
    </div>
  );
}
