import { notFound } from 'next/navigation';
import { Mdx } from '@/components/mdx';
import { allGuides } from 'contentlayer/generated';

interface GuidePageProps {
  params: {
    slug: string;
  };
}

async function getGuideFromParams(params: GuidePageProps['params']) {
  const guide = allGuides.find((guide) => guide.slugAsParams === params.slug);

  if (!guide) {
    null;
  }

  return guide;
}

export async function generateMetadata({ params }: GuidePageProps) {
  const guide = await getGuideFromParams(params);

  if (!guide) {
    return {};
  }

  return {
    title: guide.title,
    description: guide.description,
  };
}

export async function generateStaticParams() {
  return allGuides.map((guide) => ({
    slug: guide.slugAsParams,
  }));
}

export default async function GuidePage({ params }: GuidePageProps) {
  const guide = await getGuideFromParams(params);

  if (!guide) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-8 prose dark:prose-invert">
      <h1>{guide.title}</h1>
      <Mdx code={guide.body.code} />
    </article>
  );
}