"use client";

const ENTITY_W = 160;
const ENTITY_H = 50;
const DIAMOND_SIZE = 70;
const HALF_DIAMOND = DIAMOND_SIZE / 2;
const ISA_SIZE = 70;
const HALF_ISA = ISA_SIZE / 2;

// ----------------- NODE POSITIONS (derived from your JSON, rounded) -----------------

const entities: Record<string, { label: string; cx: number; cy: number }> = {
  Animal: { label: "ANIMAL", cx: 560, cy: 40 },
  VaccinationRecord: { label: "VACCINATIONRECORD", cx: 80, cy: 40 },
  FeedingEvent: { label: "FEEDINGEVENT", cx: 1180, cy: 40 },

  Vaccine: { label: "VACCINE", cx: -40, cy: 260 },
  Vet: { label: "VET", cx: 200, cy: 260 },

  Dog: { label: "DOG", cx: 470, cy: 290 },
  Cat: { label: "CAT", cx: 650, cy: 290 },

  Location: { label: "LOCATION", cx: 560, cy: 600 },
  Community: { label: "COMMUNITY", cx: 1180, cy: 600 },
  Volunteer: { label: "VOLUNTEER", cx: 1180, cy: 300 },
};

const rels: Record<string, { label: string; cx: number; cy: number }> = {
  has_vaccRecord_vaccine: { label: "HAS", cx: 0, cy: 135 },
  has_vaccRecord_vet: { label: "HAS", cx: 150, cy: 135 },
  feedsIn_feedingEvent_volunteer: { label: "FEEDS IN", cx: 1180, cy: 170 },
  has_community_volunteer: { label: "HAS", cx: 1180, cy: 450 },
  isa_dog_cat: { label: "ISA", cx: 560, cy: 145 },
  isAt_animal_location: { label: "IS AT", cx: 350, cy: 490 },
  isAt_community_location: { label: "IS AT", cx: 850, cy: 600 },
  isAt_volunteer_location: {label: "IS AT", cx: 850, cy: 300 },
  isFedBy: { label: "IS FED BY", cx: 850, cy: 40 },
  has_vaccRecord_animal: { label: "HAS", cx: 300, cy: 40 },

};

// ----------------- EDGES WITH EXPLICIT COORDS (EDIT THESE) -----------------

type DebugEdge = {
  id: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  noHead?: boolean;
};

// helper: start with center-to-center; you’ll tweak later
const center = (id: string) => {
  if (entities[id]) return entities[id];
  return rels[id];
};

const edgesDebug: DebugEdge[] = [
  // VaccinationRecord -> has_vaccRecord_animal -> Animal
  (() => {
    const a = center("VaccinationRecord");
    const b = center("has_vaccRecord_animal");
    return { id: "VaccRec_to_hasAnimal", x1: a.cx+80, y1: a.cy, x2: b.cx-42, y2: b.cy };
  })(),
  (() => {
    const a = center("has_vaccRecord_animal");
    const b = center("Animal");
    return { id: "hasAnimal_to_Animal", x1: a.cx+36, y1: a.cy, x2: b.cx-80, y2: b.cy, noHead: true};
  })(),

  // VaccinationRecord -> has_vaccRecord_vaccine -> Vaccine
  (() => {
    const a = center("VaccinationRecord");
    const b = center("has_vaccRecord_vaccine");
    return { id: "VaccRec_to_hasVaccine", x1: a.cx-20, y1: a.cy+25, x2: b.cx+7, y2: b.cy-40 };
  })(),
  (() => {
    const a = center("has_vaccRecord_vaccine");
    const b = center("Vaccine");
    return { id: "hasVaccine_to_Vaccine", x1: a.cx, y1: a.cy+35, x2: b.cx+40, y2: b.cy-25, noHead: true};
  })(),

  // VaccinationRecord -> has_vaccRecord_vet -> Vet
  (() => {
    const a = center("VaccinationRecord");
    const b = center("has_vaccRecord_vet");
    return { id: "VaccRec_to_hasVet", x1: a.cx+20, y1: a.cy+25, x2: b.cx-7, y2: b.cy-40 };
  })(),
  (() => {
    const a = center("has_vaccRecord_vet");
    const b = center("Vet");
    return { id: "hasVet_to_Vet", x1: a.cx, y1: a.cy+35, x2: b.cx-50, y2: b.cy-25, noHead: true };
  })(),

  // ISA: Animal -> isa_dog_cat -> Dog, Cat
  (() => {
    const a = center("Animal");
    const b = center("isa_dog_cat");
    return { id: "Animal_to_ISA", x1: a.cx, y1: a.cy+25, x2: b.cx, y2: b.cy-35, noHead: true };
  })(),
  (() => {
    const a = center("isa_dog_cat");
    const b = center("Dog");
    return { id: "ISA_to_Dog", x1: a.cx-35, y1: a.cy+35, x2: b.cx, y2: b.cy-25, noHead: true };
  })(),
  (() => {
    const a = center("isa_dog_cat");
    const b = center("Cat");
    return { id: "ISA_to_Cat", x1: a.cx+35, y1: a.cy+35, x2: b.cx, y2: b.cy-25, noHead: true};
  })(),

  // Animal -> isAt_animal_location -> Location
  (() => {
    const a = center("Animal");
    const b = center("isAt_animal_location");
    return { id: "Animal_to_isAtLoc", x1: a.cx-76, y1: a.cy+23, x2: 350, y2: 150, noHead: true };
  })(),
  (() => {
    const a = center("Animal");
    const b = center("isAt_animal_location");
    return { id: "Animal_to_isAtLoc2", x1: 350, y1: 150, x2: b.cx, y2: b.cy-42};
  })(),
  (() => {
    const a = center("isAt_animal_location");
    const b = center("Location");
    return { id: "isAtLoc_to_Location", x1: a.cx, y1: a.cy+35, x2: b.cx-80, y2: b.cy, noHead: true };
  })(),

  // Community -> isAt_community_location -> Location
  (() => {
    const a = center("Community");
    const b = center("isAt_community_location");
    return { id: "Comm_to_isAtLoc2", x1: a.cx-80, y1: a.cy, x2: b.cx+42, y2: b.cy};
  })(),
  (() => {
    const a = center("isAt_community_location");
    const b = center("Location");
    return { id: "isAtLoc2_to_Location", x1: a.cx-35, y1: a.cy, x2: b.cx+80, y2: b.cy, noHead: true};
  })(),

  // Community -> has_community_volunteer -> Volunteer
  (() => {
    const a = center("Community");
    const b = center("has_community_volunteer");
    return { id: "Comm_to_hasVol", x1: a.cx, y1: a.cy-25, x2: b.cx, y2: b.cy+35, noHead: true};
  })(),
  (() => {
    const a = center("has_community_volunteer");
    const b = center("Volunteer");
    return { id: "hasVol_to_Volunteer", x1: a.cx, y1: a.cy-35, x2: b.cx, y2: b.cy+25, noHead: true};
  })(),

    // Volunteer -> feedsIn_feedingEvent_volunteer -> FeedingEvent
  (() => {
    const a = center("Volunteer");
    const b = center("feedsIn_feedingEvent_volunteer");
    return { id: "Comm_to_hasVol2", x1: a.cx, y1: a.cy-25, x2: b.cx, y2: b.cy+35, noHead: true};
  })(),
  (() => {
    const a = center("feedsIn_feedingEvent_volunteer");
    const b = center("FeedingEvent");
    return { id: "hasVol_to_Volunteer2", x2: a.cx, y2: a.cy-42, x1: b.cx, y1: b.cy+25};
  })(),

  // Animal -> isFedBy -> FeedingEvent
  (() => {
    const a = center("FeedingEvent");
    const b = center("isFedBy");
    return { id: "Feed_to_isFedBy", x1: a.cx-80, y1: a.cy, x2: b.cx+35, y2: b.cy, noHead: true};
  })(),
  (() => {
    const a = center("isFedBy");
    const b = center("Animal");
    return { id: "isFedBy_to_Volunteer", x1: a.cx-35, y1: a.cy, x2: b.cx+80, y2: b.cy, noHead: true};
  })(),

  (() => {
    const a = center("Volunteer");
    const b = center("isAt_volunteer_location");
    return { id: "Feed_to_isFedBy2", x1: a.cx-80, y1: a.cy, x2: b.cx+35, y2: b.cy, noHead: true};
  })(),
  (() => {
    const a = center("isAt_volunteer_location");
    const b = center("Location");
    return { id: "isFedBy_to_Volunteer2", x1: a.cx-3-17, y1: a.cy+17, x2: b.cx+76, y2: b.cy-22, noHead: true};
  })(),

  // VaccinationRecord -> center diamond (has_vaccRecord_animal) already covered above,
  // but we can add any extra link you want later.
];

// ----------------- COMPONENT -----------------

export default function ERDiagram() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1200 700"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Neon Styles */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <style>
            {`
              .entity {
                fill: rgba(0,0,0,0.6);
                stroke: #f8d568;
                stroke-width: 2;
                filter: url(#glow);
              }
              .rel {
                fill: rgba(255,60,60,0.15);
                stroke: #ff7777;
                stroke-width: 2;
                filter: url(#glow);
              }
              .label {
                font-family: Inter, system-ui, -apple-system, sans-serif;
                font-size: 13px;
                fill: #ffe9a6;
                text-anchor: middle;
                dominant-baseline: middle;
              }
              .arrow {
                stroke: #ff7777;
                stroke-width: 2.2;
                marker-end: url(#arrowhead);
              }
              .grid-line {
                stroke: rgba(148,163,184,0.25);
                stroke-width: 0.5;
              }
              .grid-label {
                font-family: Inter, system-ui, -apple-system, sans-serif;
                font-size: 10px;
                fill: #6b7280;
              }

              .arrow-nohead {
                stroke: #ff7777;
                stroke-width: 2.2;
                marker-end: none;
              }

            `}
          </style>

          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="5"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="#ff7777" />
          </marker>
        </defs>

        {/* ----------------- ENTITY RECTANGLES ----------------- */}
        {Object.entries(entities).map(([id, { label, cx, cy }]) => {
          const x = cx - ENTITY_W / 2;
          const y = cy - ENTITY_H / 2;
          return (
            <g key={id}>
              <rect
                x={x}
                y={y}
                width={ENTITY_W}
                height={ENTITY_H}
                rx={10}
                className="entity"
              />
              <text x={cx} y={cy} className="label">
                {label}
              </text>
            </g>
          );
        })}

        {/* ----------------- RELATIONSHIP NODES ----------------- */}
        {Object.entries(rels).map(([id, { label, cx, cy }]) => {
          if (id === "isa_dog_cat") {
            // ISA as triangle
            const points = [
              `${cx},${cy - HALF_ISA}`,
              `${cx - HALF_ISA},${cy + HALF_ISA}`,
              `${cx + HALF_ISA},${cy + HALF_ISA}`,
            ].join(" ");
            return (
              <g key={id}>
                <polygon
                  points={points}
                  fill="rgba(255,60,60,0.18)"
                  stroke="#ff7777"
                  strokeWidth={2}
                  filter="url(#glow)"
                />
                <text x={cx} y={cy + 10} className="label">
                  {label}
                </text>
              </g>
            );
          }

          const points = [
            `${cx},${cy - HALF_DIAMOND}`,
            `${cx + HALF_DIAMOND},${cy}`,
            `${cx},${cy + HALF_DIAMOND}`,
            `${cx - HALF_DIAMOND},${cy}`,
          ].join(" ");

          return (
            <g key={id}>
              <polygon points={points} className="rel" />
              <text x={cx} y={cy} className="label">
                {label}
              </text>
            </g>
          );
        })}

        {/* ----------------- ARROWS (EDITABLE COORDS) ----------------- */}
        {edgesDebug.map((e) => (
          <line
            key={e.id}
            x1={e.x1}
            y1={e.y1}
            x2={e.x2}
            y2={e.y2}
            className={e.noHead ? "arrow-nohead" : "arrow"}
          />
        ))}
      </svg>
    </div>
  );
}
