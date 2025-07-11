import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Building, 
  Home, 
  Factory, 
  Wrench, 
  HardHat, 
  Users, 
  ArrowRight,
  CheckCircle,
  Calculator,
  Clock
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Construction",
      description: "Custom homes, additions, and residential developments",
      features: [
        "Custom Home Design & Build",
        "Home Additions & Extensions",
        "Kitchen & Bathroom Remodeling",
        "Basement Finishing",
        "Outdoor Living Spaces"
      ],
      price: "Starting from $150/sq ft"
    },
    {
      icon: Building,
      title: "Commercial Construction",
      description: "Office buildings, retail spaces, and commercial complexes",
      features: [
        "Office Building Construction",
        "Retail Space Development",
        "Restaurant & Hospitality",
        "Medical Facilities",
        "Educational Buildings"
      ],
      price: "Custom Pricing"
    },
    {
      icon: Factory,
      title: "Industrial Construction",
      description: "Warehouses, manufacturing facilities, and industrial buildings",
      features: [
        "Warehouse Construction",
        "Manufacturing Facilities",
        "Distribution Centers",
        "Industrial Renovations",
        "Specialized Industrial Projects"
      ],
      price: "Custom Pricing"
    },
    {
      icon: Wrench,
      title: "Renovation & Remodeling",
      description: "Transform existing spaces with modern upgrades",
      features: [
        "Complete Home Renovations",
        "Commercial Space Makeovers",
        "Historic Building Restoration",
        "Energy Efficiency Upgrades",
        "Accessibility Modifications"
      ],
      price: "Starting from $75/sq ft"
    },
    {
      icon: HardHat,
      title: "Project Management",
      description: "Comprehensive project oversight and coordination",
      features: [
        "Project Planning & Scheduling",
        "Budget Management",
        "Quality Control & Inspections",
        "Permit & Regulatory Compliance",
        "Vendor & Subcontractor Management"
      ],
      price: "10-15% of project cost"
    },
    {
      icon: Users,
      title: "Consulting Services",
      description: "Expert advice and guidance for your construction needs",
      features: [
        "Feasibility Studies",
        "Cost Estimation",
        "Design Review & Optimization",
        "Code Compliance Consulting",
        "Value Engineering"
      ],
      price: "$150-250/hour"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We meet to discuss your vision, requirements, and budget.",
      icon: Users
    },
    {
      step: "02",
      title: "Design & Planning",
      description: "Our team creates detailed plans and specifications.",
      icon: Calculator
    },
    {
      step: "03",
      title: "Project Execution",
      description: "Construction begins with regular progress updates.",
      icon: HardHat
    },
    {
      step: "04",
      title: "Quality Delivery",
      description: "Final inspection and handover of your completed project.",
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Services</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Construction Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From residential homes to large commercial projects, we provide end-to-end 
              construction services tailored to your specific needs and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group transition-all duration-300 hover:shadow-steel hover:scale-200 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t">
                    <Badge variant="secondary" className="mb-4">
                      {service.price}
                    </Badge>
                    <Button variant="ghost" className="w-full bg-orange-400 text-white">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How We Work With You
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our streamlined process ensures your project runs smoothly from 
              concept to completion.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Why Choose Our Services</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Unmatched Quality & Reliability
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We combine cutting-edge technology with time-tested construction methods 
                to deliver projects that exceed industry standards.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">On-Time Delivery</h3>
                    <p className="text-muted-foreground">
                      98% of our projects are completed on schedule, thanks to our 
                      meticulous planning and project management.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Quality Assurance</h3>
                    <p className="text-muted-foreground">
                      Multiple quality checkpoints ensure every aspect meets our 
                      high standards before project completion.
                    </p>
                  </div>
                </div>
              </div>
              
              <Button variant="construction" size="lg" className="mt-8 relative px-6 py-3 bg-orange-400 text-white font-semibold rounded transition-transform duration-300 ease-in-out hover:translate-x-2">
                Get Your Free Quote
              </Button>
            </div>
            
            <div className="construction-grid p-8 rounded-lg">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card p-4 rounded-lg shadow-steel">
                  <div className="text-2xl font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="bg-card p-4 rounded-lg shadow-steel">
                  <div className="text-2xl font-bold text-primary mb-1">20+</div>
                  <div className="text-sm text-muted-foreground">Years</div>
                </div>
                <div className="bg-card p-4 rounded-lg shadow-steel">
                  <div className="text-2xl font-bold text-primary mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Licensed</div>
                </div>
                <div className="bg-card p-4 rounded-lg shadow-steel">
                  <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get a detailed quote for your construction project. Our experts are ready 
            to discuss your needs and provide a comprehensive solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg">
              Request Free Consultation
            </Button>
            <Button variant="outline" size="lg" className="text-lg border-secondary-foreground text-primary-foreground hover:bg-secondary-foreground hover:text-secondary">
              View Our Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;