"use client"

import Link from "next/link";  
import { Mail, Menu, Search } from "lucide-react";  
import { Button } from "@/components/ui/button";  

export function SiteHeader() {  
  return (  
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F3F0ED] backdrop-blur-sm">  
      <div className="w-full flex items-center justify-between h-16 px-2 md:px-4 lg:px-6">  
        <Link href="/" className="text-xl md:text-2xl font-serif">  
          Jamb.  
        </Link>  
        <div className="flex items-center space-x-2">  
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex">  
            <Search className="w-4 h-4 md:w-5 md:h-5" />  
          </Button>  
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex">  
            <Mail className="w-4 h-4 md:w-5 md:h-5" />  
          </Button>  
          <Button variant="ghost" size="icon">  
            <Menu className="w-8 h-4 md:w-5 md:h-5" />  
          </Button>  
        </div>  
      </div>  
    </header>  
  );  
}