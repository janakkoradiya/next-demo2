import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Here you would add your password reset logic
      // For example, calling an API endpoint

      toast.success("Password reset link sent to your email!");
      setEmail("");
    } catch (error) {
      toast.error("Failed to send reset link. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-xl"
      >
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-800">
            Reset your password
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter your email address and we'll send you a link to reset your
            password
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">
              Email address
            </label>
            <div className="relative flex items-center">
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-md outline-primary"
                placeholder="Enter email"
              />
            </div>
          </div>

          <div className="mt-8">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className="w-full shadow-xl py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary/80 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                "Send reset link"
              )}
            </motion.button>
          </div>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-800">
              Remember your password?{" "}
              <a href="/auth/login" className="text-primary hover:underline">
                Login
              </a>
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default ResetPassword;
