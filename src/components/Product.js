import { useState } from 'react';
import { useCart } from '../context/CartContext';

function Product() {
  const [selectedOption, setSelectedOption] = useState(null);
  const { addToCart } = useCart();

  const productOptions = [
    {
      id: 1,
      quantity: 1,
      price: 69.99,
      stripeLink: "your-stripe-link-for-1-item",
      label: "Personal Wellness Package",
      features: [
        "Perfect for personal use",
        "Ideal for bedroom or office",
        "Up to 10m² coverage",
        "12-hour battery life",
        "USB-C charging"
      ]
    },
    {
      id: 2,
      quantity: 2,
      price: 99.99,
      stripeLink: "your-stripe-link-for-2-items",
      label: "Family Package",
      features: [
        "Cover multiple rooms",
        "Ideal for families",
        "Up to 20m² coverage per device",
        "12-hour battery life",
        "USB-C charging",
        "Save $39.99"
      ]
    },
    {
      id: 3,
      quantity: 3,
      price: 139.99,
      stripeLink: "your-stripe-link-for-3-items",
      label: "Complete Home Solution",
      features: [
        "Whole home coverage",
        "Perfect for large families",
        "Up to 30m² coverage per device",
        "12-hour battery life",
        "USB-C charging",
        "Save $69.98"
      ]
    }
  ];

  const product = {
    name: "Schumann Resonance Device",
    description: "Experience the natural frequency of Earth for better sleep and wellness",
    features: [
      "7.83 Hz Frequency Generation",
      "Sleep Enhancement Mode",
      "EMF Harmonization",
      "Portable Design",
      "12-Hour Battery Life"
    ]
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleAddToCart = () => {
    if (!selectedOption) {
      alert('Please select a package option');
      return;
    }
    addToCart({
      ...product,
      id: selectedOption.id,
      price: selectedOption.price,
      quantity: selectedOption.quantity,
      stripeLink: selectedOption.stripeLink
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
        {/* Product Image */}
        <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden">
          <img
            src="/product-image.jpg"
            alt="Schumann Device"
            className="w-full h-full object-center object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{product.name}</h1>

          <div className="mt-6">
            <h3 className="sr-only">Description</h3>
            <p className="text-gray-500">{product.description}</p>
          </div>

          {/* Package Options */}
          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Select Your Package</h3>
            <div className="space-y-4">
              {productOptions.map((option) => (
                <div
                  key={option.id}
                  onClick={() => handleOptionSelect(option)}
                  className={`relative rounded-lg p-6 border cursor-pointer transition-all ${
                    selectedOption?.id === option.id 
                      ? 'border-blue-600 bg-blue-50' 
                      : 'border-gray-300 hover:border-blue-400'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-lg font-medium">{option.quantity} Device{option.quantity > 1 ? 's' : ''}</h4>
                      <p className="text-sm text-gray-500">
                        ${(option.price / option.quantity).toFixed(2)} per device
                      </p>
                    </div>
                    <p className="text-xl font-bold text-blue-600">${option.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={!selectedOption}
            className={`mt-8 w-full py-3 px-8 rounded-md text-white text-lg font-medium ${
              selectedOption 
                ? 'bg-blue-600 hover:bg-blue-700' 
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product; 