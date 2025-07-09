import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Building, 
  Users, 
  Award, 
  Clock, 
  ArrowRight, 
  CheckCircle,
  Star,
  Phone,
  Mail
} from 'lucide-react';
import constructionHero from '@/assets/construction-hero.jpg';

const Home = () => {
  const services = [
    {
      title: "Residential Construction",
      description: "Custom homes and residential projects built to perfection",
      icon: Building,
    },
    {
      title: "Commercial Building",
      description: "Office buildings, retail spaces, and industrial facilities",
      icon: Building,
    },
    {
      title: "Renovation & Remodeling",
      description: "Transform existing spaces with modern upgrades",
      icon: Building,
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "20+", label: "Years Experience" },
    { number: "50+", label: "Expert Team" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      content: "BuildCorp transformed our vision into reality. Exceptional quality and professionalism.",
      rating: 5,
    },
    {
      name: "Mike Chen",
      role: "Business Owner",
      content: "Outstanding commercial construction services. On time and within budget.",
      rating: 5,
    },
    {
      name: "Emily Davis",
      role: "Property Developer",
      content: "Reliable partner for all our construction needs. Highly recommended!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${constructionHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-overlay"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary">
            Professional Construction Services
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-shadow fade-in-up">
            Building Tomorrow's
            <span className="gradient-text block">Infrastructure Today</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 fade-in-up">
            With over 20 years of experience, we deliver exceptional construction 
            projects that stand the test of time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up">
            <Button variant="hero" size="lg" className="text-lg">
              Start Your Project
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="steel" size="lg" className="text-lg">
              <Phone className="mr-2" />
              Get Free Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comprehensive Construction Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From residential homes to commercial complexes, we provide end-to-end 
              construction services with unmatched quality and expertise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-steel transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="group-hover:text-primary">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Why Choose BuildCorp</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Excellence in Every Project
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We combine traditional craftsmanship with modern technology to deliver 
                construction projects that exceed expectations.
              </p>
              
              <div className="space-y-4">
                {[
                  "Licensed and Insured Professionals",
                  "On-Time Project Delivery",
                  "Quality Materials and Workmanship",
                  "24/7 Customer Support",
                  "Competitive Pricing",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              
              <Button variant="construction" size="lg" className="mt-8">
                Learn More About Us
              </Button>
            </div>
            
            <div className="construction-grid p-8 rounded-lg">
              <div className="bg-card p-6 rounded-lg shadow-steel">
                <Award className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Award Winning</h3>
                <p className="text-muted-foreground">
                  Recognized for excellence in construction and customer service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Our Clients Say
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-steel transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Construction Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get a free consultation and quote for your next construction project. 
            Our team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg">
              <Phone className="mr-2" />
              Call (555) 123-4567
            </Button>
            <Button variant="outline" size="lg" className="text-lg border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
              <Mail className="mr-2" />
              Email Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;