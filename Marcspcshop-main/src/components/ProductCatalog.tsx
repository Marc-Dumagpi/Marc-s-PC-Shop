import { useState } from 'react';
import { Product } from '../App';
import { ProductCard } from './ProductCard';
import { ProductDetail } from './ProductDetail';
import { Button } from './ui/button';
import { Cpu, HardDrive, Monitor, Keyboard, MemoryStick, Wifi } from 'lucide-react';

const categories = [
  { id: 'all', name: 'All Products', icon: null },
  { id: 'processor', name: 'Processors', icon: Cpu },
  { id: 'storage', name: 'Storage', icon: HardDrive },
  { id: 'monitor', name: 'Monitors', icon: Monitor },
  { id: 'peripheral', name: 'Peripherals', icon: Keyboard },
  { id: 'memory', name: 'Memory', icon: MemoryStick },
  { id: 'networking', name: 'Networking', icon: Wifi },
];

const products: Product[] = [
  {
    id: '1',
    name: 'Intel Core i5-13400F',
    category: 'processor',
    price: 9500,
    image: 'https://images.unsplash.com/photo-1592664474496-8f2c35acd655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlbCUyMHByb2Nlc3NvciUyMGNwdXxlbnwxfHx8fDE3NjM1MjczNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    specs: ['10 Cores (6P+4E)', 'Up to 4.6 GHz', 'LGA1700 Socket', '20MB Cache'],
    stock: 15
  },
  {
    id: '2',
    name: 'AMD Ryzen 5 5600X',
    category: 'processor',
    price: 8200,
    image: 'https://images.unsplash.com/photo-1613483187550-1458bbdb0996?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWQlMjByeXplbiUyMHByb2Nlc3NvcnxlbnwxfHx8fDE3NjM1MjczNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    specs: ['6 Cores / 12 Threads', 'Up to 4.6 GHz', 'AM4 Socket', '35MB Cache'],
    stock: 12
  },
  {
    id: '3',
    name: 'Samsung 1TB NVMe SSD',
    category: 'storage',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1686705562930-4f3e46f620d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudm1lJTIwc3NkfGVufDF8fHx8MTc2MzUyNzM3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    specs: ['1TB Capacity', 'PCIe Gen3 x4', 'Read: 3500 MB/s', 'Write: 3000 MB/s'],
    stock: 25
  },
  {
    id: '4',
    name: 'WD Blue 2TB HDD',
    category: 'storage',
    price: 2800,
    image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXJkJTIwZHJpdmUlMjBoZGR8ZW58MXx8fHwxNzYzNTI3MzcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    specs: ['2TB Capacity', '7200 RPM', 'SATA 6Gb/s', '256MB Cache'],
    stock: 20
  },
  {
    id: '5',
    name: 'LG 24" IPS Monitor',
    category: 'monitor',
    price: 6500,
    image: 'https://images.unsplash.com/photo-1611648694931-1aeda329f9da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMG1vbml0b3J8ZW58MXx8fHwxNzYzNDc1MDI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    specs: ['24-inch Display', '1920x1080 Full HD', 'IPS Panel', '75Hz Refresh Rate'],
    stock: 8
  },
  {
    id: '6',
    name: 'ASUS 27" Gaming Monitor',
    category: 'monitor',
    price: 12500,
    image: 'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBtb25pdG9yfGVufDF8fHx8MTc2MzUyNDI5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    specs: ['27-inch Display', '2560x1440 QHD', 'IPS Panel', '165Hz Refresh Rate'],
    stock: 6
  },
  {
    id: '7',
    name: 'Logitech G502 Gaming Mouse',
    category: 'peripheral',
    price: 2200,
    image: 'https://images.unsplash.com/photo-1628832307345-7404b47f1751?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBtb3VzZXxlbnwxfHx8fDE3NjM0Njc0OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    specs: ['Hero 25K Sensor', '11 Programmable Buttons', 'RGB Lighting', 'Adjustable Weight'],
    stock: 18
  },
  {
    id: '8',
    name: 'Keychron K2 Mechanical Keyboard',
    category: 'peripheral',
    price: 4800,
    image: 'https://images.unsplash.com/photo-1602025882379-e01cf08baa51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNoYW5pY2FsJTIwa2V5Ym9hcmR8ZW58MXx8fHwxNzYzNTA4MTI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    specs: ['Hot-swappable', 'RGB Backlight', 'Wireless/Wired', 'Compact 75% Layout'],
    stock: 10
  },
  {
    id: '9',
    name: 'Corsair Vengeance 16GB DDR4',
    category: 'memory',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1672165407836-4c376e7d72c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHJhbSUyMG1lbW9yeXxlbnwxfHx8fDE3NjM0ODYxNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    specs: ['16GB (2x8GB)', 'DDR4 3200MHz', 'Heat Spreader', 'XMP 2.0 Support'],
    stock: 22
  },
  {
    id: '10',
    name: 'TP-Link WiFi 6 Router',
    category: 'networking',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aWZpJTIwcm91dGVyfGVufDF8fHx8MTc2MzQ2Nzk3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    specs: ['WiFi 6 AX1800', 'Dual-Band', '4 Gigabit Ports', 'OFDMA & MU-MIMO'],
    stock: 14
  },
];

interface ProductCatalogProps {
  onAddToCart: (product: Product) => void;
}

export function ProductCatalog({ onAddToCart }: ProductCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  if (selectedProduct) {
    return (
      <ProductDetail
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={onAddToCart}
      />
    );
  }

  return (
    <div>
      {/* Welcome Banner */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-2xl mb-2">Welcome to Marc's PC Shop!</h2>
        <p className="text-slate-600">
          Browse our wide selection of quality PC components. Click on any product to view details, 
          or add directly to cart. We offer competitive prices in Philippine Pesos!
        </p>
      </div>

      {/* Category Filter */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <h3 className="text-sm text-slate-600 mb-3">Filter by Category:</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => {
            const Icon = category.icon;
            return (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center gap-2"
              >
                {Icon && <Icon className="size-4" />}
                {category.name}
              </Button>
            );
          })}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            onViewDetails={setSelectedProduct}
          />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="bg-white rounded-lg shadow-sm p-12 text-center">
          <p className="text-slate-500">No products found in this category.</p>
        </div>
      )}
    </div>
  );
}