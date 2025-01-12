import React from 'react';
import { Camera, Upload, Home, FileText, MessageSquare, Library } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Home className="h-8 w-8 text-red-600" />
              <h1 className="ml-2 text-xl font-semibold text-gray-900">ClaimAssist</h1>
            </div>
            <nav className="flex space-x-4">
              <button className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Sign In
              </button>
              <button className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700">
                Get Started
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Simplify Your Wildfire Insurance Claims
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Document, organize, and manage your insurance claim process with ease. We're here to help you recover what matters most.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Photo Library Scanner */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <Library className="h-8 w-8 text-red-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Photo Library Scanner</h3>
            <p className="text-gray-600">
              Automatically scan your photo library to identify and document your belongings.
            </p>
          </div>

          {/* Document Upload */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <Upload className="h-8 w-8 text-red-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Document Upload</h3>
            <p className="text-gray-600">
              Securely upload and organize receipts, photos, and important documents.
            </p>
          </div>

          {/* Damage Documentation */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <Camera className="h-8 w-8 text-red-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Damage Documentation</h3>
            <p className="text-gray-600">
              Capture and organize detailed photos and videos of damage sustained.
            </p>
          </div>

          {/* Inventory Management */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <FileText className="h-8 w-8 text-red-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Inventory Management</h3>
            <p className="text-gray-600">
              Create detailed room-by-room inventories with cost estimates and notes.
            </p>
          </div>

          {/* Communication Tracker */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <MessageSquare className="h-8 w-8 text-red-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Communication Log</h3>
            <p className="text-gray-600">
              Track all conversations with adjusters, including dates and key details.
            </p>
          </div>

          {/* Cost Calculator */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="h-8 w-8 text-red-600 mb-4">$</div>
            <h3 className="text-lg font-semibold mb-2">Cost Calculator</h3>
            <p className="text-gray-600">
              Calculate replacement costs and track temporary living expenses.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-red-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Start Documenting Your Claim Today
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Don't wait to begin the documentation process. The more detailed your records, 
            the better chance you have of receiving fair compensation.
          </p>
          <button className="bg-red-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-red-700 transition-colors">
            Create Free Account
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500 text-sm">
            <p>© 2024 ClaimAssist. Helping LA wildfire victims rebuild their lives.</p>
            <p className="mt-2">
              If you need immediate assistance, contact your insurance provider or call the 
              LA Wildfire Support Hotline at 1-800-XXX-XXXX
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;