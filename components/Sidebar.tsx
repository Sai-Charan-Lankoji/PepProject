"use client";

import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { FileText, BarChart2, Users, Calendar, Settings, ChevronLeft, ChevronRight, BookOpen, UserCheck, MessageSquare } from 'lucide-react';

const menuItems = [
  { name: 'Examinations', icon: FileText, items: ['External Exams', 'Internal Exams', 'Overall Result Analysis'] },
  { name: 'Academics', icon: BookOpen, items: ['Promotion List', 'Marks', 'Attendance (By Tech)', 'Attendance New', 'Attendance'] },
  { name: 'Time Tables', icon: Calendar },
  { name: 'Alumni', icon: Users },
  { name: 'Attainments', icon: BarChart2 },
  { name: 'Feedback', icon: MessageSquare },
];

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className={cn(
      "bg-white text-gray-800 flex flex-col transition-all duration-300 ease-in-out",
      expanded ? "w-64" : "w-20"
    )}>
      <div className="flex items-center justify-end p-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </Button>
      </div>
      <ScrollArea className="flex-1">
        <nav className="space-y-2 p-2">
          {menuItems.map((item, index) => (
            <div key={index}>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !expanded && "justify-center"
                )}
              >
                <item.icon className="mr-2 h-5 w-5" />
                <span className={cn("transition-opacity duration-300", 
                  expanded ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
                )}>
                  {item.name}
                </span>
              </Button>
              {expanded && item.items && (
                <div className="ml-6 mt-2 space-y-1">
                  {item.items.map((subItem, subIndex) => (
                    <Button
                      key={subIndex}
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start"
                    >
                      {subItem}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </ScrollArea>
      <div className="p-4">
        <Button variant="outline" className="w-full">
          <Settings className="mr-2 h-5 w-5" />
          <span className={cn("transition-opacity duration-300", 
            expanded ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
          )}>
            Settings
          </span>
        </Button>
      </div>
    </div>
  );
}