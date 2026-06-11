interface ServiceCardProps {
  icon: string;
  tamilName: string;
  englishName: string;
  description: string;
}

export default function ServiceCard({ icon, tamilName, englishName, description }: ServiceCardProps) {
  return (
    <div className="bg-surface border border-border rounded-xl p-6 hover:border-gold/50 transition-all group text-center">
      <span className="text-4xl mb-4 block">{icon}</span>
      <span className="text-xs text-gold bg-gold/10 px-3 py-1 rounded-full">{tamilName}</span>
      <h3 className="font-heading text-xl text-text-primary mt-3 mb-2">{englishName}</h3>
      <p className="text-text-muted text-sm">{description}</p>
    </div>
  );
}
