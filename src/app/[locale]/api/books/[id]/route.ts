import { mockBooks } from '@/data/booksMock';

export const dynamic = 'force-static';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const book = mockBooks.find(b => b.id === id);

    if (!book) {
      return Response.json(
        { success: false, error: 'Book not found' },
        { status: 404 },
      );
    }

    return Response.json({
      success: true,
      data: book,
    });
  } catch {
    return Response.json(
      { success: false, error: 'Failed to fetch book' },
      { status: 500 },
    );
  }
}
