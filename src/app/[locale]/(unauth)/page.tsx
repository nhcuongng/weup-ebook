import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import BookCard from '@/components/BookCard';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/Container';
import { mockBooks } from '@/data/booksMock';

export async function generateMetadata(props: { params: { locale: string } }) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const IndexPage = async (props: { params: { locale: string } }) => {
  const { locale } = await props.params;
  unstable_setRequestLocale(locale);

  const t = await getTranslations({
    locale,
    namespace: 'Index',
  });

  const featuredBooks = mockBooks.slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t('hero_title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {t('hero_description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
              >
                {t('explore_library_button')}
              </Button>
              <Button
                variant="gradient1"
                size="lg"
              >
                {t('register_free_button')}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Books Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t('featured_books_title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('featured_books_description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default IndexPage;
