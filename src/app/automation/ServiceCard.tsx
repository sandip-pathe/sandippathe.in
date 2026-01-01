interface ServiceCardProps {
  tag: string;
  title: string;
  description: string;
  videoUrl?: string;
  tagColor?: "blue" | "green" | "orange";
}

const tagColorStyles = {
  blue: "bg-blue-100 text-blue-700 border-blue-200",
  green: "bg-green-100 text-green-700 border-green-200",
  orange: "bg-orange-100 text-orange-700 border-orange-200",
};

export default function ServiceCard({
  tag,
  title,
  description,
  videoUrl = "https://www.loom.com/embed/7a7a2c6611e5456e9296782933014cd6",
  tagColor = "blue",
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-slate-200">
      {/* Content Section */}
      <div className="p-8">
        {/* Tag */}
        <div className="mb-4">
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${tagColorStyles[tagColor]}`}
          >
            {tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 leading-relaxed">{description}</p>
      </div>

      {/* Video Section */}
      <div className="relative bg-gradient-to-br from-purple-400 via-blue-400 to-cyan-300 p-1">
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            src={videoUrl}
            frameBorder="0"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-b-xl"
            style={{
              border: "none",
            }}
          />
        </div>
      </div>
    </div>
  );
}
