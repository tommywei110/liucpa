export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-2xl font-bold text-blue-900">Liu CPA</div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-900">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-900">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-900">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Expert CPA Services You Can Trust
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Professional accounting and tax services tailored to your business needs
          </p>
          <button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
            Schedule a Consultation
          </button>
        </div>
      </section>

      <section id="services" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Tax Preparation</h3>
              <p className="text-gray-600">Comprehensive tax preparation for individuals and businesses</p>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Bookkeeping</h3>
              <p className="text-gray-600">Accurate and timely bookkeeping services to keep your finances in order</p>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Business Consulting</h3>
              <p className="text-gray-600">Strategic financial advice to help your business grow</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Liu CPA</h2>
            <p className="text-gray-600 mb-4">
              With years of experience in accounting and tax services, Liu CPA provides professional,
              reliable financial services to individuals and businesses.
            </p>
            <p className="text-gray-600">
              We are committed to helping our clients achieve their financial goals through expert
              guidance and personalized service.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <p className="text-blue-100 mb-8">Ready to discuss your accounting needs?</p>
          <div className="space-y-2">
            <p>Email: contact@liucpa.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Liu CPA. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
