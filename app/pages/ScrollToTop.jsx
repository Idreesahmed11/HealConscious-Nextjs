'use client';
import { useEffect } from "react";
import { useLocation } from "import Link from 'next/link';";

const ScrollToTop = () => {
  const { pathname } = useLocation();

useEffect(() => {
  window.scrollTo(0, 0); 
}, [pathname]);

  return null;
};

export default ScrollToTop;

