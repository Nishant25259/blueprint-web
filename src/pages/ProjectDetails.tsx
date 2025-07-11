import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building, Home, Factory } from 'lucide-react';
import { useParams } from 'react-router-dom';

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

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === Number(id));

  if (!project) return <div>Project not found.</div>;

  return (
  <div className="max-w-md mx-auto my-12 rounded-lg overflow-hidden shadow-md bg-white">
    {/* Image or Icon */}
    <div className="bg-gray-100 flex items-center justify-center h-48">
      <img
        src={project.image}
        alt={project.title}
        className="h-24 w-24 object-contain"
      />
    </div>

    {/* Content */}
    <div className="p-6">
      {/* Badges */}
      <div className="flex items-center justify-between mb-4">
        <span className="px-3 py-1 text-sm font-semibold text-white bg-gray-800 rounded-full">
          {project.year}
        </span>
        <span className="px-3 py-1 text-sm font-semibold text-green-700 bg-green-100 rounded-full">
          {project.status}
        </span>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold text-gray-800 mb-2">
        {project.title}
      </h2>

      {/* Description */}
      <p className="text-gray-600 mb-4">{project.description}</p>

      {/* Details */}
      <ul className="space-y-2">
        <li className="flex justify-between items-center text-gray-700">
          <span className="flex items-center gap-2">
            💲 Project Value
          </span>
          <span className="font-bold">{project.value}</span>
        </li>
        <li className="flex justify-between items-center text-gray-700">
          <span className="flex items-center gap-2">
            📅 Duration
          </span>
          <span className="font-bold">{project.duration}</span>
        </li>
        <li className="flex justify-between items-center text-gray-700">
          <span className="flex items-center gap-2">
            👥 Team Size
          </span>
          <span className="font-bold">{project.team}</span>
        </li>
      </ul>
    </div>
  </div>
);


};

export default ProjectDetails;