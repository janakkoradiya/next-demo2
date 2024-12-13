import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

const Features = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen mt-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
        {/* Contact Form Component */}
        <section className="flex justify-center py-12 px-6">
          <div className="w-full max-w-2xl bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Features</h2>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Features
