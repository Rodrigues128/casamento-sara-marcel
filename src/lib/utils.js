import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
} 

export function formatPhoneNumber(value) {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, '');
  const length = phoneNumber.length;
  
  if (length < 3) return phoneNumber;
  if (length < 7) return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
  
  return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7, 11)}`;
}
