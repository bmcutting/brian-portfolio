import { habilities } from "./habilities";
import { HabilitiesLayout } from "./HabilitiesLayout";

export const SkillsGrid = () => {
  // Filtrar habilidades por tipo
  const frontendHabilities = habilities.filter(
    (item) => item.type === "frontend"
  );
  const backendHabilities = habilities.filter(
    (item) => item.type === "backend"
  );
  const otherHabilities = habilities.filter((item) => item.type === "others");

  return (
    <div className="h-full overflow-hidden">
      <div className="p-4 h-full overflow-y-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-full content-start">
          <HabilitiesLayout
            habilities={frontendHabilities}
            label={"Frontend"}
          />
          <HabilitiesLayout habilities={backendHabilities} label={"Backend"} />
          <HabilitiesLayout habilities={otherHabilities} label={"Others"} />
        </div>
      </div>
    </div>
  );
};
