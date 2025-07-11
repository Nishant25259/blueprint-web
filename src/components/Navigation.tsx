import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, HardHat, Phone, LogIn } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import AuthModal from './AuthModal';

  import logo from '@/assets/logo.jpg';
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const { user, isAdmin, signOut } = useAuth();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-card/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-steel">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
             <span
                className="w-10 h-10 bg-cover bg-center rounded-full"
              style={{ backgroundImage: `url(${logo})` }}
                ></span>
            <span className="text-xl font-bold text-foreground">SHIKU</span>
  
            <span className="text-xl font-bold text-primary">INFRA PRIVATE LIMITED</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.name}
              </Link>
            ))}
            {user ? (
              <div className="flex items-center gap-4">
                {isAdmin && (
                  <Button variant="ghost" asChild>
                    <Link to="/admin">Admin Panel</Link>
                  </Button>
                )}
                <Button variant="construction" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Order Sand
                </Button>
                <Button variant="outline" onClick={() => signOut()}>
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Button variant="construction" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Order Sand
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setAuthModalOpen(true)}
                  className="flex items-center gap-2"
                >
                  <LogIn className="h-4 w-4" />
                  Login
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium px-2 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {user ? (
                <div className="flex flex-col gap-2">
                  {isAdmin && (
                    <Button variant="ghost" asChild className="w-fit">
                      <Link to="/admin">Admin Panel</Link>
                    </Button>
                  )}
                  <Button variant="construction" className="flex items-center gap-2 w-fit">
                    <Phone className="h-4 w-4" />
                    Order Sand
                  </Button>
                  <Button variant="outline" onClick={() => signOut()} className="w-fit">
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <Button variant="construction" className="flex items-center gap-2 w-fit">
                    <Phone className="h-4 w-4" />
                    Order Sand
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setAuthModalOpen(true)}
                    className="flex items-center gap-2 w-fit"
                  >
                    <LogIn className="h-4 w-4" />
                    Login
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      
      <AuthModal 
        isOpen={authModalOpen} 
        onClose={() => setAuthModalOpen(false)} 
      />
    </nav>
  );
};

export default Navigation;