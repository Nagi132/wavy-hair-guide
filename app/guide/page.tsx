import { GuideHeader } from '@/components/guide/guide-header';
import { GuideCategories } from '@/components/guide/guide-categories';

export const metadata = {
  title: 'Guide - Wavy Hair Guide',
  description: 'Comprehensive guides for wavy hair care',
};

export default function GuidePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <GuideHeader />
      <GuideCategories />
    </div>
  );
}