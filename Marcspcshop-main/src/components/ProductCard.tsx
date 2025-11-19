import { Product } from '../App';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ShoppingCart, Info } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart, onViewDetails }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return `₱${price.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
      {/* Product Image */}
      <div 
        className="aspect-[4/3] bg-slate-100 overflow-hidden cursor-pointer"
        onClick={() => onViewDetails(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 
            className="text-lg cursor-pointer hover:text-blue-600 transition-colors"
            onClick={() => onViewDetails(product)}
          >
            {product.name}
          </h3>
          {product.stock < 10 && (
            <Badge variant="outline" className="text-orange-600 border-orange-600">
              Low Stock
            </Badge>
          )}
        </div>

        {/* First 2 specs */}
        <ul className="text-sm text-slate-600 mb-3 space-y-1">
          {product.specs.slice(0, 2).map((spec, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
              {spec}
            </li>
          ))}
        </ul>

        {/* Price */}
        <div className="mb-4">
          <p className="text-2xl text-blue-600">{formatPrice(product.price)}</p>
          <p className="text-xs text-slate-500">{product.stock} units available</p>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => onViewDetails(product)}
          >
            <Info className="size-4 mr-2" />
            Details
          </Button>
          <Button
            className="flex-1 bg-blue-600 hover:bg-blue-700"
            onClick={() => onAddToCart(product)}
            disabled={product.stock === 0}
          >
            <ShoppingCart className="size-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}