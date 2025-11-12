import type { Book } from '@/data/booksMock';

import { BaseService } from '../base';

export async function fetchBooks() {
  const bookService = new BaseService('/books');
  const books = await bookService.fetch<Book[]>({
    init: {
      cache: 'force-cache', // Always fetch fresh data
    },
    onError: () => {
      console.error('Something when wrong!');
    },
  });

  if (!books) {
    return [];
  }

  return books;
}

export async function fetchBookById(id: string) {
  const bookByIdService = new BaseService(`/books/${id}`);
  const book = await bookByIdService.fetch<Book>({
    init: {
      cache: 'force-cache',
    },
    onError: () => {
      console.error('Failed to fetch book by id!');
    },
  });

  return book;
}
