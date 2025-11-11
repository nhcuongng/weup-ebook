'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

import type { Book } from '@/data/booksMock';

type BookCardProps = {
  book: Book;
};

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const t = useTranslations('BookCard');

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
        <span key={i} className="text-yellow-400">★</span>,
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="text-yellow-400">☆</span>,
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="text-gray-300">☆</span>,
      );
    }

    return stars;
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <Link href={`/books/${book.id}`}>
        <div className="relative">
          <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
            <img src={book.coverImage} alt={book.title} className="object-cover w-full h-full" />
          </div>

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {book.isFree && (
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                {t('free')}
              </span>
            )}
            {book.isNew && (
              <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
                {t('new')}
              </span>
            )}
            {book.isBestseller && (
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                {t('bestseller')}
              </span>
            )}
          </div>
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/books/${book.id}`}>
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
            {book.title}
          </h3>
        </Link>

        <p className="text-gray-600 text-sm mb-2">{book.author}</p>

        <div className="flex items-center mb-2">
          <div className="flex mr-2">
            {renderStars(book.rating)}
          </div>
          <span className="text-sm text-gray-500">
            {book.rating}
            {' '}
            (
            {book.totalRatings}
            )
          </span>
        </div>

        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {book.category}
          </span>
          <span className="text-sm text-gray-500">
            {book.pages}
            {' '}
            {t('pages')}
          </span>
        </div>

        <p className="text-gray-700 text-sm mb-3 line-clamp-2">
          {book.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            {book.isFree
              ? (
                  <span className="text-green-600 font-semibold">{t('free')}</span>
                )
              : (
                  <div className="flex items-center gap-2">
                    <span className="text-red-600 font-semibold">
                      {formatPrice(book.price)}
                    </span>
                    {book.originalPrice && (
                      <span className="text-gray-400 text-sm line-through">
                        {formatPrice(book.originalPrice)}
                      </span>
                    )}
                  </div>
                )}
          </div>

          <button
            type="button"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm transition-colors"
          >
            {book.isFree ? t('read_now') : t('buy_book')}
          </button>
        </div>

        <div className="mt-3 flex flex-wrap gap-1">
          {book.tags.slice(0, 3).map(tag => (
            <span
              key={tag}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
