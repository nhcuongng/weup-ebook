import { mockBooks } from '@/data/booksMock';

export const dynamic = 'force-static';

export async function GET() {
  try {
    return Response.json({
      success: true,
      data: mockBooks,
    });
  } catch {
    return Response.json(
      { success: false, error: 'Failed to fetch books' },
      { status: 500 },
    );
  }
}
