export type MenuItem = {
  id: string;
  titleKey: string; // Changed from title to titleKey to use translation keys
  href?: string;
  submenu?: MenuItem[];
};

export const menuItems: MenuItem[] = [
  {
    id: 'library',
    titleKey: 'library',
    submenu: [
      { id: 'latest-books', titleKey: 'latest_books', href: '/books/latest' },
      { id: 'bestsellers', titleKey: 'bestsellers', href: '/books/bestseller' },
      { id: 'free-books', titleKey: 'free_books', href: '/books/free' },
      { id: 'categories', titleKey: 'categories', href: '/categories' },
    ],
  },
  {
    id: 'features',
    titleKey: 'features',
    href: '#features',
    submenu: [
      {
        id: 'offline-reading',
        titleKey: 'offline_reading',
        href: '/features/offline',
      },
      {
        id: 'notes-highlights',
        titleKey: 'notes_highlights',
        href: '/features/notes',
      },
      { id: 'sync-devices', titleKey: 'sync_devices', href: '/features/sync' },
      { id: 'night-mode', titleKey: 'night_mode', href: '/features/night-mode' },
      { id: 'bookmarks', titleKey: 'bookmarks', href: '/features/bookmarks' },
      { id: 'search', titleKey: 'search', href: '/features/search' },
      {
        id: 'reading-progress',
        titleKey: 'reading_progress',
        href: '/features/progress',
      },
    ],
  },
  {
    id: 'my-library',
    titleKey: 'my_library',
    href: '/my-library',
  },
  {
    id: 'support',
    titleKey: 'support',
    href: '/support',
    submenu: [
      { id: 'faq', titleKey: 'faq', href: '/faq' },
      { id: 'user-guide', titleKey: 'user_guide', href: '/guide' },
      { id: 'contact', titleKey: 'contact', href: '/contact' },
    ],
  },
];
