import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building, Home, Factory, Calendar, DollarSign, Users } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "Modern Family Residence",
      category: "residential",
      description: "Custom 4,500 sq ft home with contemporary design and sustainable features",
      value: "$850,000",
      duration: "8 months",
      team: "12 specialists",
      status: "Completed",
      year: "2024",
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "Downtown Office Complex",
      category: "commercial",
      description: "15-story mixed-use building with retail and office spaces",
      value: "$12.5M",
      duration: "18 months",
      team: "45 specialists",
      status: "In Progress",
      year: "2024",
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "Manufacturing Facility",
      category: "industrial",
      description: "50,000 sq ft manufacturing plant with specialized equipment installation",
      value: "$3.2M",
      duration: "12 months",
      team: "25 specialists",
      status: "Completed",
      year: "2023",
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      title: "Luxury Townhouse Development",
      category: "residential",
      description: "15-unit townhouse complex with premium finishes and landscaping",
      value: "$4.8M",
      duration: "14 months",
      team: "30 specialists",
      status: "Completed",
      year: "2023",
      image: "/api/placeholder/600/400"
    },
    {
      id: 5,
      title: "Retail Shopping Center",
      category: "commercial",
      description: "75,000 sq ft shopping center with anchor stores and parking",
      value: "$8.7M",
      duration: "16 months",
      team: "35 specialists",
      status: "Completed",
      year: "2023",
      image: "/api/placeholder/600/400"
    },
    {
      id: 6,
      title: "Warehouse Distribution Hub",
      category: "industrial",
      description: "120,000 sq ft automated distribution center with loading docks",
      value: "$5.4M",
      duration: "10 months",
      team: "28 specialists",
      status: "In Progress",
      year: "2024",
      image: "/api/placeholder/600/400"
    }
  ];

  const categories = [
    { id: 'all', label: 'Projects', icon: Building },
    // { id: 'residential', label: 'Residential', icon: Home },
    // { id: 'commercial', label: 'Commercial', icon: Building },
    // { id: 'industrial', label: 'Industrial', icon: Factory }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const getStatusColor = (status: string) => {
    return status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800';
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Portfolio</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Showcasing Our Construction Excellence
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our diverse portfolio of completed and ongoing construction projects 
              that demonstrate our expertise across residential, commercial, and industrial sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground font-medium">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">$250M+</div>
              <div className="text-muted-foreground font-medium">Total Project Value</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground font-medium">On-Time Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={filter === category.id ? "construction" : "outline"}
                  onClick={() => setFilter(category.id)}
                  className="flex items-center gap-2 sidebar-button transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="h-4 w-4" />
                  {category.label}
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden transition-all duration-300 group hover:shadow-steel hover:scale-105 hover:-translate-y-2">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="hero"
                      onClick={() => navigate(`/projects/${project.id}`)}
                    >
                      View Details
                    </Button>
                  </div>
                  <div className="w-full h-full bg-construction-grid flex items-center justify-center">
                    <Building className="h-16 w-16 text-muted-foreground/50" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">{project.year}</Badge>
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <DollarSign className="h-4 w-4" />
                        <span>Project Value</span>
                      </div>
                      <span className="font-semibold">{project.value}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>Duration</span>
                      </div>
                      <span className="font-semibold">{project.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>Team Size</span>
                      </div>
                      <span className="font-semibold">{project.team}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Highlight */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Approach</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Excellence in Every Phase
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every project in our portfolio represents our commitment to quality, 
              innovation, and client satisfaction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Design Excellence</h3>
              <p className="text-muted-foreground">
                Innovative designs that balance aesthetics, functionality, and sustainability.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Execution</h3>
              <p className="text-muted-foreground">
                Skilled craftsmen and project managers ensuring flawless implementation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Timely Delivery</h3>
              <p className="text-muted-foreground">
                Rigorous project management to meet deadlines and exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Add Your Project to Our Portfolio?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can bring your construction vision to life with 
            the same excellence demonstrated in our completed projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg">
              Start Your Project
            </Button>
            <Button variant="outline" size="lg" className="text-lg border-secondary-foreground text-primary-foreground hover:bg-secondary-foreground hover:text-secondary">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;