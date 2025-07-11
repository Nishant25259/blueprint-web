import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Award, Target, Heart, ArrowRight } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Every detail matters in our pursuit of construction excellence.",
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "Collaborative approach with clients, architects, and specialists.",
    },
    {
      icon: Award,
      title: "Quality",
      description: "Premium materials and craftsmanship in every project.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Honest communication and transparent business practices.",
    },
  ];

  const team = [
    {
      name: "John Miller",
      role: "CEO & Founder",
      experience: "25+ Years",
      description: "Licensed contractor with expertise in commercial and residential construction.",
    },
    {
      name: "Sarah Williams",
      role: "Project Manager",
      experience: "15+ Years",
      description: "Specializes in large-scale projects and client relationship management.",
    },
    {
      name: "Mike Rodriguez",
      role: "Lead Engineer",
      experience: "20+ Years",
      description: "Structural engineering expert ensuring safety and compliance.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">About BuildCorp</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Building Excellence Since 2004
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              For over two decades, BuildCorp has been at the forefront of construction 
              innovation, delivering projects that shape communities and exceed expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Our Story</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                From Small Beginnings to Industry Leaders
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2004 by John Miller, BuildCorp started as a small residential 
                construction company with a simple mission: to build homes that families 
                could be proud of for generations.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Today, we've grown into a full-service construction company handling 
                projects of all sizes, from custom homes to large commercial developments. 
                Our commitment to quality, safety, and customer satisfaction remains unchanged.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Every project we undertake is a testament to our dedication to excellence 
                and our passion for creating spaces where people live, work, and thrive.
              </p>
              <Button variant="construction" size="lg" className="relative px-6 py-3 bg-orange-600 text-white font-semibold rounded transition-transform duration-300 ease-in-out hover:translate-x-2">
                See Our Projects <ArrowRight className="ml-2" />
              </Button>
            </div>
            
            <div className="construction-grid p-8 rounded-lg">
              <div className="bg-card p-8 rounded-lg shadow-steel">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <p className="text-muted-foreground mb-4">Successful Projects</p>
                  <div className="text-4xl font-bold text-primary mb-2">20+</div>
                  <p className="text-muted-foreground">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our core values guide every decision we make and every project we undertake.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center group transition-all duration-300 hover:shadow-steel hover:scale-105 hover:-translate-y-2 ">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                  <CardDescription>{value.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Team</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet the Experts
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our experienced team of professionals brings decades of combined expertise 
              to every project.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="group transition-all duration-300 hover:shadow-steel hover:scale-105 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4"></div>
                  <CardTitle className="text-center">{member.name}</CardTitle>
                  <CardDescription className="text-center">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge variant="secondary" className="mb-4">
                    {member.experience}
                  </Badge>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge className="mb-4 bg-primary  border-primary">Our Mission</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Building Communities, Creating Futures
          </h2>
          <p className="text-xl mb-8 opacity-90">
            We believe that construction is more than just building structures – it's about 
            creating spaces where memories are made, businesses thrive, and communities flourish. 
            Our mission is to be the trusted partner that brings your vision to life while 
            contributing to the sustainable development of our communities.
          </p>
          <Button variant="hero" size="lg" className="text-lg">
            Start Your Project Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;