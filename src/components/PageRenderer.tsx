import { Helmet } from 'react-helmet-async';
import type { CMSPage } from '../types';

interface PageRendererProps {
  page: CMSPage;
}

const stripTag = (value: string, tagName: string) => {
  const tagPattern = new RegExp(`<\\/?${tagName}[^>]*>`, 'gi');
  return value.replace(tagPattern, '');
};

const cleanMetaString = (value: unknown) => {
  if (typeof value !== 'string') return undefined;
  const withoutTitleTag = stripTag(value, 'title');
  const withoutTags = withoutTitleTag.replace(/<[^>]+>/g, '');
  const cleaned = withoutTags.replace(/data-rh="true"/gi, '').trim();
  return cleaned || undefined;
};

export function PageRenderer({ page }: PageRendererProps) {
  const meta = (page.meta ?? {}) as Record<string, unknown>;
  const metaTitle = cleanMetaString(meta.title) || page.title;
  const metaDescription = cleanMetaString(meta.description);

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        {metaDescription && <meta name="description" content={metaDescription} />}
      </Helmet>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <header className="max-w-3xl mb-8">
            <p className="text-sm uppercase tracking-wide text-gray-400">Editable Page</p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              {page.title}
            </h1>
          </header>
          <div
            className="max-w-none text-gray-700 leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: page.content }}
          />
        </div>
      </section>
    </>
  );
}
