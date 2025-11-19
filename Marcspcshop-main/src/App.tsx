import { useState } from 'react';
import { ProductCatalog } from './components/ProductCatalog';
import { ShoppingCart } from './components/ShoppingCart';
import { ShoppingCart as CartIcon, Store } from 'lucide-react';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  specs: string[];
  stock: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export default function App() {
  const [currentView, setCurrentView] = useState<'shop' | 'cart'>('shop');
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity === 0) {
      setCart(prevCart => prevCart.filter(item => item.id !== productId));
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const removeFromCart = (productId: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Store className="size-8" />
              <div>
                <h1 className="text-2xl">Marc's PC Shop</h1>
                <p className="text-blue-100 text-sm">Your Trusted PC Components Store</p>
              </div>
            </div>
            
            <nav className="flex gap-2">
              <Button
                variant={currentView === 'shop' ? 'secondary' : 'ghost'}
                onClick={() => setCurrentView('shop')}
                className={currentView === 'shop' ? '' : 'text-white hover:bg-blue-500'}
              >
                <Store className="size-4 mr-2" />
                Shop
              </Button>
              
              <Button
                variant={currentView === 'cart' ? 'secondary' : 'ghost'}
                onClick={() => setCurrentView('cart')}
                className={`relative ${currentView === 'cart' ? '' : 'text-white hover:bg-blue-500'}`}
              >
                <CartIcon className="size-4 mr-2" />
                Cart
                {getTotalItems() > 0 && (
                  <Badge className="ml-2 bg-red-500 text-white">
                    {getTotalItems()}
                  </Badge>
                )}
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {currentView === 'shop' && (
          <ProductCatalog onAddToCart={addToCart} />
        )}
        
        {currentView === 'cart' && (
          <ShoppingCart
            cart={cart}
            onUpdateQuantity={updateQuantity}
            onRemoveItem={removeFromCart}
            onContinueShopping={() => setCurrentView('shop')}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-300 mt-12 py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Marc's PC Shop - Quality PC Components in the Philippines</p>
          <p className="text-sm text-slate-400 mt-1">All prices in Philippine Pesos (₱)</p>
        </div>
      </footer>
    </div>
  );
}