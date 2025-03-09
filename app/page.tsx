import { Suspense } from 'react';
import HeroSection from './components/HeroSection';

export default function HomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeroSection />
    </Suspense>
  );
}