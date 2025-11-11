'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useTranslations } from 'next-intl';
import React from 'react';

import { mockBooks } from '@/data/booksMock';

type BookPageProps = {
  params: {
    id: string;
    locale: string;
  };
};

const BookPage: React.FC<BookPageProps> = ({ params }) => {
  const t = useTranslations('BookPage');
  const tCard = useTranslations('BookCard');

  const book = mockBooks.find(b => b.id === params.id);

  if (!book) {
    notFound();
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="text-yellow-400 text-xl">★</span>,
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="text-yellow-400 text-xl">☆</span>,
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="text-gray-300 text-xl">☆</span>,
      );
    }

    return stars;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6">
        <div className="flex items-center space-x-2 text-sm">
          <Link href="/" className="text-blue-600 hover:underline">
            {t('home')}
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">{book.title}</span>
        </div>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Book Cover */}
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <div className="relative">
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
              />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {book.isFree && (
                  <span className="bg-green-500 text-white text-sm px-3 py-1 rounded">
                    {tCard('free')}
                  </span>
                )}
                {book.isNew && (
                  <span className="bg-blue-500 text-white text-sm px-3 py-1 rounded">
                    {tCard('new')}
                  </span>
                )}
                {book.isBestseller && (
                  <span className="bg-red-500 text-white text-sm px-3 py-1 rounded">
                    {tCard('bestseller')}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Book Details */}
        <div className="lg:col-span-2">
          <div className="space-y-6">
            {/* Title and Author */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{book.title}</h1>
              <p className="text-xl text-gray-600">
                {t('by')}
                {' '}
                {book.author}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {renderStars(book.rating)}
              </div>
              <span className="text-lg font-semibold">{book.rating}</span>
              <span className="text-gray-500">
                (
                {book.totalRatings}
                {' '}
                {t('ratings')}
                )
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              {book.isFree
                ? (
                    <span className="text-2xl font-bold text-green-600">{tCard('free')}</span>
                  )
                : (
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl font-bold text-red-600">
                        {formatPrice(book.price)}
                      </span>
                      {book.originalPrice && (
                        <span className="text-lg text-gray-400 line-through">
                          {formatPrice(book.originalPrice)}
                        </span>
                      )}
                    </div>
                  )}
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button
                type="button"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-colors"
              >
                {book.isFree ? tCard('read_now') : tCard('buy_book')}
              </button>
              <button
                type="button"
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {t('add_to_wishlist')}
              </button>
            </div>

            {/* Book Info */}
            <div className="grid grid-cols-2 gap-4 p-6 bg-gray-50 rounded-lg">
              <div>
                <span className="font-semibold text-gray-700">
                  {t('category')}
                  :
                </span>
                <span className="ml-2 text-gray-600">{book.category}</span>
              </div>
              <div>
                <span className="font-semibold text-gray-700">
                  {t('pages')}
                  :
                </span>
                <span className="ml-2 text-gray-600">{book.pages}</span>
              </div>
              <div>
                <span className="font-semibold text-gray-700">
                  {t('language')}
                  :
                </span>
                <span className="ml-2 text-gray-600">{book.language}</span>
              </div>
              <div>
                <span className="font-semibold text-gray-700">
                  {t('published')}
                  :
                </span>
                <span className="ml-2 text-gray-600">{book.publishedDate}</span>
              </div>
            </div>

            {/* Formats */}
            <div>
              <h3 className="text-lg font-semibold mb-3">{t('available_formats')}</h3>
              <div className="flex space-x-2">
                {book.format.map(format => (
                  <span
                    key={format}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {format}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold mb-3">{t('description')}</h3>
              <p className="text-gray-700 leading-relaxed">{book.description}</p>
            </div>

            {/* Tags */}
            <div>
              <h3 className="text-lg font-semibold mb-3">{t('tags')}</h3>
              <div className="flex flex-wrap gap-2">
                {book.tags.map(tag => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 cursor-pointer transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
