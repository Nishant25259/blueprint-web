import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Settings, 
  FileText, 
  Users, 
  TrendingUp,
  Database,
  Shield,
  Calendar,
  BarChart3
} from 'lucide-react';

const AdminDashboard = () => {
  const { profile } = useAuth();

  const stats = [
    { title: 'Total Orders', value: '156', icon: TrendingUp, color: 'text-green-600' },
    { title: 'Active Projects', value: '12', icon: FileText, color: 'text-blue-600' },
    { title: 'Customers', value: '89', icon: Users, color: 'text-purple-600' },
    { title: 'This Month Revenue', value: '₹2.4L', icon: BarChart3, color: 'text-orange-600' },
  ];

  const quickActions = [
    { title: 'Manage Services', href: '/admin/services', icon: Settings, description: 'Add, edit, or remove sand types and services' },
    { title: 'Manage Projects', href: '/admin/projects', icon: FileText, description: 'Update project gallery and case studies' },
    { title: 'View Analytics', href: '/admin/analytics', icon: BarChart3, description: 'Track website performance and orders' },
    { title: 'System Settings', href: '/admin/settings', icon: Shield, description: 'Configure site settings and preferences' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, Admin
          </h1>
          <p className="text-muted-foreground">
            Manage your SandCorp website and business operations from this dashboard.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold text-foreground">
                      {stat.value}
                    </p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quickActions.map((action) => (
              <Card key={action.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <action.icon className="h-6 w-6 text-primary" />
                    {action.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4">
                    {action.description}
                  </p>
                  <Button asChild variant="construction">
                    <Link to={action.href}>
                      Open {action.title}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Calendar className="h-6 w-6 text-primary" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-border">
                <div>
                  <p className="font-medium">New order received</p>
                  <p className="text-sm text-muted-foreground">50 tons river sand - Construction Site A</p>
                </div>
                <span className="text-sm text-muted-foreground">2 hours ago</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-border">
                <div>
                  <p className="font-medium">Project updated</p>
                  <p className="text-sm text-muted-foreground">Mall Construction project images added</p>
                </div>
                <span className="text-sm text-muted-foreground">1 day ago</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="font-medium">New customer registered</p>
                  <p className="text-sm text-muted-foreground">ABC Builders joined SandCorp</p>
                </div>
                <span className="text-sm text-muted-foreground">3 days ago</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;