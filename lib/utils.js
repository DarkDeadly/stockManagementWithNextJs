import { clsx } from "clsx";
import { AlertTriangle, BadgeIcon, Ban, Bell, BoxesIcon, Briefcase, House, LayoutDashboard, MailWarningIcon, Package, Timer, TimerOff, TrendingDown, User2Icon } from "lucide-react";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


export const featuresElements = [
  {
    id : 1 ,
    title : "Real-time Tracking",
    description : "Monitor your inventory levels in real-time with instant updates across all locations.",
    icons : Timer
  },
  {
    id : 2 ,
    title : "Low Stock Alerts",
    description : "Get notified when inventory levels drop below your set thresholds.",
    icons : Bell
  },
  {
    id : 3 ,
    title : "Multi-Warehouse",
    description : "Manage multiple warehouses and locations from a single dashboard.",
    icons : House
    
  },
  {
    id : 4,
    title : "Reports & Analytics",
    description : "Generate detailed reports and gain insights into your inventory performance.",
    icons : MailWarningIcon
    
  },
]
export const guideItems = [
  {
    id : 1 ,
    title : "Setup Your Account",
    description : "Create your account and configure your warehouse settings in minutes.",
  },
  {
    id : 2 ,
    title : "Import Your Data",
    description : "Upload your existing inventory data or start fresh with our easy-to-use interface.",
  },
  {
    id : 3 ,
    title : "Start Managing",
    description : "Begin tracking your inventory with real-time updates and automated workflows.",
    
  },

]
export const priceItems = [
  {
    id : 1 ,
    title : "Basic",
    Price : "30 Dinars /month",
    Benefits : ["Up to 1,000 products" , "Real-time tracking" , "Basic reports"]
  },
  {
    id : 2 ,
    title : "Pro",
    Price : "80 Dinars /month",
    Benefits : ["Up to 10,000 products" , "Multi-warehouse support" , "Advanced analytics" , "Priority support"]

  },
  {
    id : 3 ,
    title : "Enterprise",
    Price : "200 Dinars /month",
    Benefits : ["Unlimited products" , "Custom integrations" , "24/7 support" , "Dedicated manager"]

    
  },

]


export const SidebarItems = [
   {
    title: "Products",
    url: "/workspace",
    icon: Package,
  },
  {
    title: "Dashboard",
    url: "/workspace",
    icon: LayoutDashboard,
  },
  {
    title: "Profile",
    url: "/workspace/profile",
    icon: User2Icon,
  },
  {
    title: "employers",
    url: "/workspace",
    icon: Briefcase,
  },
 
]

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim()) ? true : "Please enter a valid email address.";
};

export const PasswordVerificaiton = (password) => {
  let errors = [];

  if (password.length < 8) {
    errors.push("Password must be at least 8 characters long.");
  }
  if (!/[A-Z]/.test(password)) {
    errors.push("Password must include at least one uppercase letter.");
  }
  if (!/\d/.test(password)) {
    errors.push("Password must include at least one numeric digit.");
  }

  return errors;
};

export const PasswordMatching = (password, passwordConfirm) => {
  return password === passwordConfirm ? true : "Passwords do not match.";
};

export const ProductAnalytics = [
  {
    icon : BoxesIcon,
    title: "Total Products" ,
    text : "total products in the stock",
    value : 120
  },
   {
    icon : AlertTriangle ,
    title: "Low Stock Items" ,
    text : "Number of items that are running low",
    value : 5
  },
   {
    icon : TimerOff,
    title: "Expired Items" ,
    text : "Number of items past their expiration date",
    value : 7
  },
  
]