import Image from 'next/image';

interface FoodCardProps {
  name: string;
  tamilName?: string;
  description: string;
  image: string;
  isVeg: boolean;
  isStarDish?: boolean;
}

export default function FoodCard({ name, tamilName, description, image, isVeg, isStarDish }: FoodCardProps) {
  return (
    <div className="bg-surface border border-border rounded-xl overflow-hidden hover:border-gold/50 transition-all group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {isStarDish && (
          <span className="absolute top-3 right-3 bg-gold text-background text-xs font-semibold px-3 py-1 rounded-full">
            ⭐ Star Dish
          </span>
        )}
        <span className={`absolute top-3 left-3 w-5 h-5 rounded-full border-2 ${isVeg ? 'border-green-500 bg-green-500/20' : 'border-red-500 bg-red-500/20'} flex items-center justify-center`}>
          <span className={`w-2 h-2 rounded-full ${isVeg ? 'bg-green-500' : 'bg-red-500'}`}></span>
        </span>
      </div>
      <div className="p-4">
        {tamilName && (
          <span className="text-xs text-gold bg-gold/10 px-2 py-0.5 rounded-full">{tamilName}</span>
        )}
        <h3 className="font-heading text-lg text-text-primary mt-2">{name}</h3>
        <p className="text-text-muted text-sm mt-1">{description}</p>
      </div>
    </div>
  );
}
