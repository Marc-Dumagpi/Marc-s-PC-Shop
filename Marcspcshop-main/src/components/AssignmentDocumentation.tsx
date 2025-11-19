import { Card } from './ui/card';
import { CheckCircle2, Users, Lightbulb, Layout, MousePointer } from 'lucide-react';

export function AssignmentDocumentation() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <Card className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <h1 className="text-3xl mb-2">HCI Design Assignment</h1>
        <p className="text-blue-100">Designing a Simple User Interface: Marc's PC Shop</p>
        <p className="text-sm text-blue-200 mt-4">
          Activity Title: Designing a Simple Interactive System for PC Component Shopping
        </p>
      </Card>

      {/* 1. Data Gathering */}
      <Card className="p-6">
        <div className="flex items-start gap-3 mb-4">
          <Users className="size-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-xl mb-1">1. Data Gathering (10 pts)</h2>
            <p className="text-sm text-slate-600">User needs and expectations identified through interviews</p>
          </div>
        </div>
        
        <div className="ml-9 space-y-4">
          <div>
            <p className="text-sm mb-3">
              I interviewed 3 potential users (college students and PC gamers) about their needs when shopping for PC components online:
            </p>
          </div>

          <div className="bg-slate-50 rounded-lg p-4 space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm">
                  <strong>Need #1: Clear Product Specifications</strong><br/>
                  Users want to see detailed specs (processor cores, storage capacity, refresh rate) immediately without 
                  excessive clicking. They need to compare products quickly to make informed decisions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm">
                  <strong>Need #2: Easy Price Comparison and Cart Management</strong><br/>
                  Users expressed frustration with shops that hide prices or make it difficult to track their total. 
                  They want clear pricing in Philippine Pesos and the ability to easily adjust quantities.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm">
                  <strong>Need #3: Efficient Product Filtering</strong><br/>
                  Users mentioned they often know what category they need (processors, monitors, storage) and don't 
                  want to scroll through unrelated items. They need quick category filtering to save time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* 2. Design Approach */}
      <Card className="p-6">
        <div className="flex items-start gap-3 mb-4">
          <Lightbulb className="size-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-xl mb-1">2. Design Approach (10 pts)</h2>
            <p className="text-sm text-slate-600">HCI methodology selected and rationale</p>
          </div>
        </div>

        <div className="ml-9 space-y-4">
          <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
            <p className="mb-2"><strong>Chosen Approach: Rapid Prototyping with Iterative Design</strong></p>
            <p className="text-sm text-slate-700">
              I chose rapid prototyping because it allows me to quickly create a working version of the system 
              that users can interact with. This is crucial for an e-commerce application where user interaction 
              patterns (browsing, adding to cart, checking out) need to feel natural and intuitive.
            </p>
          </div>

          <div className="bg-slate-50 rounded-lg p-4">
            <p className="text-sm mb-2"><strong>Why this approach?</strong></p>
            <ul className="text-sm text-slate-700 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>
                  <strong>Early User Feedback:</strong> Users can test the actual shopping flow (browse → view details → add to cart) 
                  and provide immediate feedback on usability issues
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>
                  <strong>Quick Iterations:</strong> If users find the category filtering confusing or cart management unclear, 
                  I can quickly modify the interface based on their input
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>
                  <strong>Real Interaction Testing:</strong> Unlike static wireframes, a working prototype lets users experience 
                  responsive feedback (button clicks, cart updates, success messages) which is essential for e-commerce
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* 3. User-Centered Design */}
      <Card className="p-6">
        <div className="flex items-start gap-3 mb-4">
          <Users className="size-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-xl mb-1">3. User-Centered Design (20 pts)</h2>
            <p className="text-sm text-slate-600">How the design addresses user needs</p>
          </div>
        </div>

        <div className="ml-9 space-y-4">
          <div className="bg-slate-50 rounded-lg p-4">
            <p className="text-sm leading-relaxed">
              The design directly addresses the identified user needs by implementing a <strong>three-screen layout 
              with clear information hierarchy</strong>. The product catalog displays essential specs on each card 
              so users can quickly scan options, while a detailed view provides complete specifications for informed 
              decision-making—directly solving the "clear specifications" need. 
            </p>
            <p className="text-sm leading-relaxed mt-3">
              For price transparency and cart management, all prices are prominently displayed in Philippine Pesos (₱) 
              with comma separators for easy reading, and the cart page provides intuitive quantity controls with 
              instant subtotal updates and clear visual feedback when items are added or removed. 
            </p>
            <p className="text-sm leading-relaxed mt-3">
              The category filtering system with icon-based buttons at the top of the shop allows users to instantly 
              narrow down products to their needs (processors, monitors, storage, etc.), eliminating unnecessary 
              scrolling and making the shopping experience efficient and user-focused.
            </p>
          </div>
        </div>
      </Card>

      {/* 4. User Interface */}
      <Card className="p-6">
        <div className="flex items-start gap-3 mb-4">
          <Layout className="size-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-xl mb-1">4. User Interface (40 pts)</h2>
            <p className="text-sm text-slate-600">Screen designs and usability notes</p>
          </div>
        </div>

        <div className="ml-9 space-y-6">
          {/* Screen 1 */}
          <div>
            <div className="bg-blue-100 rounded-lg p-4 mb-3">
              <h3 className="mb-2">Screen 1: Product Catalog (Shop Page)</h3>
              <p className="text-sm text-slate-700">
                The main browsing interface where users can view all products or filter by category.
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 space-y-2 text-sm">
              <p><strong>Key Elements:</strong></p>
              <ul className="ml-4 space-y-1 text-slate-700">
                <li>• <strong>Header Navigation:</strong> "Shop", "Cart", and "Assignment" tabs with cart item badge</li>
                <li>• <strong>Category Filter Buttons:</strong> Clickable buttons with icons (All, Processors, Storage, Monitors, etc.)</li>
                <li>• <strong>Product Cards:</strong> Each shows image, name, first 2 specs, price in ₱, stock count</li>
                <li>• <strong>Action Buttons:</strong> "Details" (outline) and "Add to Cart" (filled blue) on each card</li>
                <li>• <strong>Visual Feedback:</strong> Cards have hover effects (shadow increases, image scales slightly)</li>
              </ul>
              <p className="mt-3 text-slate-600 italic">
                Usability: Grid layout with clear visual hierarchy. Category filters use recognizable icons. 
                Prices are prominently displayed. Low stock items show orange badge for urgency.
              </p>
            </div>
          </div>

          {/* Screen 2 */}
          <div>
            <div className="bg-green-100 rounded-lg p-4 mb-3">
              <h3 className="mb-2">Screen 2: Product Detail View (Modal)</h3>
              <p className="text-sm text-slate-700">
                Detailed view when user clicks on a product to see full specifications and select quantity.
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 space-y-2 text-sm">
              <p><strong>Key Elements:</strong></p>
              <ul className="ml-4 space-y-1 text-slate-700">
                <li>• <strong>Large Product Image:</strong> Square aspect ratio, high quality preview</li>
                <li>• <strong>Complete Specifications List:</strong> All 4 specs with green checkmark icons</li>
                <li>• <strong>Price Display:</strong> Large, prominent price in ₱ with gray background highlight</li>
                <li>• <strong>Quantity Selector:</strong> +/- buttons with current quantity, shows max available</li>
                <li>• <strong>Subtotal Calculator:</strong> Shows price × quantity in blue highlight box</li>
                <li>• <strong>Add to Cart Button:</strong> Large blue button, changes to green "Added!" with checkmark on success</li>
                <li>• <strong>Close Button:</strong> X icon in top-right corner</li>
              </ul>
              <p className="mt-3 text-slate-600 italic">
                Usability: Modal overlay focuses attention. All information needed for purchase decision is visible. 
                Quantity controls prevent errors (can't exceed stock). Success feedback confirms action.
              </p>
            </div>
          </div>

          {/* Screen 3 */}
          <div>
            <div className="bg-purple-100 rounded-lg p-4 mb-3">
              <h3 className="mb-2">Screen 3: Shopping Cart</h3>
              <p className="text-sm text-slate-700">
                Review page where users can adjust quantities, remove items, and see order total before checkout.
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 space-y-2 text-sm">
              <p><strong>Key Elements:</strong></p>
              <ul className="ml-4 space-y-1 text-slate-700">
                <li>• <strong>Cart Item Cards:</strong> Each shows thumbnail image, product name, category, price per unit</li>
                <li>• <strong>Quantity Controls:</strong> +/- buttons with live updates, shows "Maximum available" warning</li>
                <li>• <strong>Remove Button:</strong> Trash icon in red, positioned top-right of each item</li>
                <li>• <strong>Order Summary Sidebar:</strong> Sticky panel showing item count, subtotal, shipping (FREE), and total</li>
                <li>• <strong>Checkout Button:</strong> Large green "Proceed to Checkout" button</li>
                <li>• <strong>Continue Shopping:</strong> Secondary button to return to shop</li>
                <li>• <strong>Empty State:</strong> Shopping bag icon with message and "Continue Shopping" button when cart is empty</li>
              </ul>
              <p className="mt-3 text-slate-600 italic">
                Usability: Two-column layout separates items from summary. Real-time total calculation. 
                Clear action hierarchy (green checkout vs. outline continue shopping). Visual feedback when adjusting quantities.
              </p>
            </div>
          </div>

          {/* Overall Design Notes */}
          <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
            <p className="mb-2"><strong>Overall Design Clarity & Ease of Use:</strong></p>
            <p className="text-sm text-slate-700 leading-relaxed">
              The interface uses a consistent color system (blue for primary actions, green for success/checkout, 
              red for delete) to create intuitive visual cues. Typography hierarchy guides attention to important 
              information like prices and product names. Spacing and white space prevent cognitive overload. 
              All interactive elements have clear labels and icons. The design is responsive and works on both 
              desktop and mobile devices. Feedback is immediate—adding to cart shows success message, quantity 
              changes update totals instantly, and hover states indicate clickable elements.
            </p>
          </div>
        </div>
      </Card>

      {/* 5. System Interaction */}
      <Card className="p-6">
        <div className="flex items-start gap-3 mb-4">
          <MousePointer className="size-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-xl mb-1">5. System Interaction (20 pts)</h2>
            <p className="text-sm text-slate-600">Interaction methods and system feedback</p>
          </div>
        </div>

        <div className="ml-9 space-y-4">
          <div>
            <h3 className="mb-3">User Interaction Methods:</h3>
            <div className="bg-slate-50 rounded-lg p-4 space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="bg-blue-600 text-white size-6 rounded flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                <div>
                  <p><strong>Click/Tap Interactions:</strong></p>
                  <ul className="ml-4 mt-1 space-y-1 text-slate-700">
                    <li>• Click category filter buttons to filter products by type</li>
                    <li>• Click product cards or "Details" button to open detailed view</li>
                    <li>• Click "Add to Cart" buttons to add items (on card or in detail view)</li>
                    <li>• Click navigation tabs (Shop, Cart, Assignment) to switch views</li>
                    <li>• Click +/- buttons to adjust quantities</li>
                    <li>• Click trash icon to remove items from cart</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="bg-blue-600 text-white size-6 rounded flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                <div>
                  <p><strong>Hover Interactions (Desktop):</strong></p>
                  <ul className="ml-4 mt-1 space-y-1 text-slate-700">
                    <li>• Product cards elevate with shadow and image zoom on hover</li>
                    <li>• Buttons change color/appearance on hover to indicate interactivity</li>
                    <li>• Product names become blue when hovered to show they're clickable</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="bg-blue-600 text-white size-6 rounded flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                <div>
                  <p><strong>Scroll Interaction:</strong></p>
                  <ul className="ml-4 mt-1 space-y-1 text-slate-700">
                    <li>• Vertical scrolling to browse products in grid layout</li>
                    <li>• Cart order summary is sticky (stays visible while scrolling cart items)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-3">System Feedback & Error Prevention:</h3>
            <div className="bg-green-50 rounded-lg p-4 space-y-3 text-sm border-l-4 border-green-600">
              <div>
                <p><strong>Visual Feedback:</strong></p>
                <ul className="ml-4 mt-1 space-y-1 text-slate-700">
                  <li>• Cart badge updates immediately when items are added (shows total item count)</li>
                  <li>• "Add to Cart" button temporarily changes to green "Added to Cart!" with checkmark icon (2 seconds)</li>
                  <li>• Price totals and subtotals update in real-time as quantities change</li>
                  <li>• Active category filter is highlighted (solid blue vs. outline style)</li>
                  <li>• Hover states on all clickable elements (buttons, cards, links)</li>
                </ul>
              </div>

              <div>
                <p><strong>Error Prevention Mechanisms:</strong></p>
                <ul className="ml-4 mt-1 space-y-1 text-slate-700">
                  <li>• <strong>Stock Validation:</strong> Quantity controls are disabled when reaching max stock (shows "Maximum available quantity" message)</li>
                  <li>• <strong>Out of Stock:</strong> "Add to Cart" button is disabled with gray appearance when stock = 0</li>
                  <li>• <strong>Minimum Quantity:</strong> Decrease button (-) is disabled when quantity = 1 to prevent zero quantities</li>
                  <li>• <strong>Visual Warnings:</strong> Orange "Low Stock" badge appears when stock {"<"} 10 units</li>
                  <li>• <strong>Empty Cart State:</strong> Clear message with shopping bag icon when cart is empty, with call-to-action button</li>
                </ul>
              </div>

              <div>
                <p><strong>Informational Feedback:</strong></p>
                <ul className="ml-4 mt-1 space-y-1 text-slate-700">
                  <li>• Stock count displayed on every product card ("15 units available")</li>
                  <li>• Quantity selector shows "(X available)" next to controls</li>
                  <li>• Cart shows both individual item prices and line totals (price × quantity)</li>
                  <li>• Order summary breaks down: items count, subtotal, shipping cost, and grand total</li>
                  <li>• Currency note in footer: "All prices in Philippine Pesos (₱)"</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
            <p className="text-sm">
              <strong>Summary:</strong> The system uses multiple feedback mechanisms to keep users informed and prevent errors. 
              All interactions provide immediate visual response. Error prevention is prioritized through disabled states 
              and validation rather than error messages after the fact. The design follows the principle of "recognition 
              rather than recall" by showing stock levels, totals, and quantities at all times.
            </p>
          </div>
        </div>
      </Card>

      {/* Footer */}
      <Card className="p-6 bg-slate-100">
        <p className="text-sm text-slate-600 text-center">
          This assignment demonstrates the application of HCI principles including user-centered design, 
          rapid prototyping, clear visual hierarchy, immediate feedback, and error prevention in creating 
          an e-commerce interface for Marc's PC Shop.
        </p>
      </Card>
    </div>
  );
}
