import { CartItem } from '../App';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Card } from './ui/card';

interface ShoppingCartProps {
  cart: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onContinueShopping: () => void;
}

export function ShoppingCart({ cart, onUpdateQuantity, onRemoveItem, onContinueShopping }: ShoppingCartProps) {
  const formatPrice = (price: number) => {
    return `₱${price.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const getSubtotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card className="p-12 text-center">
          <ShoppingBag className="size-16 mx-auto text-slate-300 mb-4" />
          <h2 className="text-2xl mb-2">Your cart is empty</h2>
          <p className="text-slate-600 mb-6">
            Browse our products and add items to your cart!
          </p>
          <Button onClick={onContinueShopping} className="bg-blue-600 hover:bg-blue-700">
            <ArrowLeft className="size-4 mr-2" />
            Continue Shopping
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl mb-2">Shopping Cart</h2>
        <p className="text-slate-600">Review your items before checkout</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map(item => (
            <Card key={item.id} className="p-4">
              <div className="flex gap-4">
                {/* Product Image */}
                <div className="w-24 h-24 bg-slate-100 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1 min-w-0 pr-4">
                      <h3 className="truncate">{item.name}</h3>
                      <p className="text-sm text-slate-600">{item.category}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onRemoveItem(item.id)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50 flex-shrink-0"
                    >
                      <Trash2 className="size-4" />
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="size-4" />
                      </Button>
                      <span className="w-12 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        disabled={item.quantity >= item.stock}
                      >
                        <Plus className="size-4" />
                      </Button>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <p className="text-sm text-slate-600">{formatPrice(item.price)} each</p>
                      <p className="text-lg text-blue-600">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  </div>

                  {item.quantity >= item.stock && (
                    <p className="text-xs text-orange-600 mt-2">Maximum available quantity</p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="p-6 sticky top-24">
            <h3 className="text-lg mb-4">Order Summary</h3>
            
            <div className="space-y-3 mb-4 pb-4 border-b border-slate-200">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Items ({getTotalItems()})</span>
                <span>{formatPrice(getSubtotal())}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Shipping</span>
                <span className="text-green-600">FREE</span>
              </div>
            </div>

            <div className="flex justify-between mb-6 pb-6 border-b border-slate-200">
              <span className="text-lg">Total</span>
              <span className="text-2xl text-blue-600">{formatPrice(getSubtotal())}</span>
            </div>

            <Button className="w-full bg-green-600 hover:bg-green-700 mb-3 h-12">
              Proceed to Checkout
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full"
              onClick={onContinueShopping}
            >
              <ArrowLeft className="size-4 mr-2" />
              Continue Shopping
            </Button>

            <div className="mt-6 pt-6 border-t border-slate-200">
              <p className="text-xs text-slate-600 text-center">
                All prices in Philippine Pesos (₱)
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}