
const firstRow = [
  "NO CURFEW.",
  "NO RULES.",
  "NO LIMITS.",
  "AFTERHOURS.",
];

const secondRow = [
  "MOVE DIFFERENT.",
  "THINK DIFFERENT.",
  "EXIST DIFFERENT.",
];

function MarqueeTrack({ items, reverse = false, outlined = false }) {
  return (
    <div
      className={`marquee-track ${
        reverse ? "marquee-reverse" : ""
      }`}
      aria-hidden="true"
    >
      {[0, 1, 2, 3].map((copy) => (
        <div className="marquee-group" key={copy}>
          {items.map((item, index) => (
            <div className="marquee-item" key={`${copy}-${index}`}>
              <span className={outlined ? "marquee-outline" : ""}>
                {item}
              </span>

              <span className="marquee-star">✳</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section
      id="next"
      className="marquee-section"
      aria-label="AFTERHOURS brand statements"
    >
      {/* Section metadata */}
      <div className="marquee-header">
        <span>INDEPENDENT BY DESIGN</span>
        <span>AFTERHOURS / 002</span>
      </div>

      {/* First moving row */}
      <div className="marquee-viewport">
        <MarqueeTrack items={firstRow} />
      </div>

      {/* Second moving row */}
      <div className="marquee-viewport marquee-second">
        <MarqueeTrack
          items={secondRow}
          reverse
          outlined
        />
      </div>

      {/* Bottom metadata */}
      <div className="marquee-footer">
        <span>EST. AFTER DARK</span>
        <span>YOUR WORLD. YOUR RULES.</span>
      </div>
    </section>
  );
}
