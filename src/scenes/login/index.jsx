import React, { useState } from 'react';
import { Lock, Mail, User, EyeOff, Eye, ArrowRight } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Hardcoded user credentials
  const credentials = {
    admin: {
      email: 'admin@crm.com',
      password: 'admin123'
    },
    user: {
      email: 'user@crm.com', 
      password: 'user123'
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate network delay
    setTimeout(() => {
      // Basic validation
      if (!email || !password) {
        setError('Please enter both email and password');
        setIsLoading(false);
        return;
      }

      // Check credentials
      if (email === credentials.admin.email && password === credentials.admin.password) {
        setIsLoading(false);
        alert('Admin Login Successful!');
        // Here you would typically handle admin route/navigation
      } else if (email === credentials.user.email && password === credentials.user.password) {
        setIsLoading(false);
        alert('User Login Successful!');
        // Here you would typically handle user route/navigation
      } else {
        setError('Invalid email or password');
        setIsLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-[#f0f9ff] p-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-100 transform transition-all duration-300 hover:scale-[1.02]">
        <div className="p-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="bg-[#4cceac]/10 p-4 rounded-full">
                <User className="text-[#4cceac]" size={40} strokeWidth={1.5} />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-2">Sign In</h2>
            <p className="text-gray-500">Enter your credentials to access your account</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {error && (
              <div className="bg-red-50 border border-red-300 text-red-600 px-4 py-3 rounded-xl text-center animate-pulse">
                {error}
              </div>
            )}

            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#4cceac] transition-colors" size={20} />
              <input 
                type="email" 
                placeholder="Email Address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4cceac] transition-all duration-300 group-focus-within:border-[#4cceac]"
              />
            </div>

            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#4cceac] transition-colors" size={20} />
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-12 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4cceac] transition-all duration-300 group-focus-within:border-[#4cceac]"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#4cceac] transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-[#4cceac] text-white py-4 rounded-xl hover:bg-[#3ab092] transition duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
              ) : (
                <>
                  <span>Login</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </>
              )}
            </button>

            <div className="text-center">
              <a href="#" className="text-[#4cceac] hover:underline text-sm flex items-center justify-center space-x-2">
                <span>Forgot Password?</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;