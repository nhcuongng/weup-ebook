'use client';

import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React, { useCallback, useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.mjs`;

type PdfViewerModalProps = {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title?: string;
};

const PdfViewerModal: React.FC<PdfViewerModalProps> = ({
  isOpen,
  onClose,
  pdfUrl,
  title = 'PDF Viewer',
}) => {
  const t = useTranslations('BookPage.pdf_viewer');
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Reset state when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setPageNumber(1);
      setScale(1.0);
      setLoading(true);
      setError(null);
    }
  }, [isOpen]);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setLoading(false);
    setError(null);
  };

  const onDocumentLoadError = (error: Error) => {
    console.error('PDF load error:', error);
    setError(t('error'));
    setLoading(false);
  };

  const goToPreviousPage = useCallback(() => {
    setPageNumber(prev => Math.max(prev - 1, 1));
  }, []);

  const goToNextPage = useCallback(() => {
    setPageNumber(prev => Math.min(prev + 1, numPages));
  }, [numPages]);

  const zoomIn = useCallback(() => {
    setScale(prev => Math.min(prev + 0.2, 3.0));
  }, []);

  const zoomOut = useCallback(() => {
    setScale(prev => Math.max(prev - 0.2, 0.5));
  }, []);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) {
        return;
      }

      switch (event.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          goToPreviousPage();
          break;
        case 'ArrowRight':
          goToNextPage();
          break;
        case '=':
        case '+':
          if (event.ctrlKey || event.metaKey) {
            event.preventDefault();
            zoomIn();
          }
          break;
        case '-':
          if (event.ctrlKey || event.metaKey) {
            event.preventDefault();
            zoomOut();
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, goToNextPage, goToPreviousPage, onClose, zoomIn, zoomOut]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative w-full h-full max-w-7xl max-h-screen bg-white rounded-lg shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-gray-50 rounded-t-lg">
          <h2 className="text-lg font-semibold text-gray-900 truncate">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors"
            aria-label={t('close')}
            type="button"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 p-4 border-b bg-gray-50">
          <button
            onClick={goToPreviousPage}
            disabled={pageNumber <= 1}
            className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            aria-label={t('previous_page')}
            type="button"
          >
            <ChevronLeft className="w-4 h-4" />
            {t('previous_page')}
          </button>

          <span className="text-sm text-gray-600 min-w-[120px] text-center">
            {loading ? t('loading') : t('page_info', { current: pageNumber, total: numPages })}
          </span>

          <button
            onClick={goToNextPage}
            disabled={pageNumber >= numPages}
            className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            aria-label={t('next_page')}
            type="button"
          >
            {t('next_page')}
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 ml-4">
            <button
              onClick={zoomOut}
              className="p-2 bg-gray-200 hover:bg-gray-300 rounded transition-colors"
              aria-label={t('zoom_out')}
              type="button"
            >
              <ZoomOut className="w-4 h-4" />
            </button>

            <span className="text-sm text-gray-600 min-w-[60px] text-center">
              {Math.round(scale * 100)}
              %
            </span>

            <button
              onClick={zoomIn}
              className="p-2 bg-gray-200 hover:bg-gray-300 rounded transition-colors"
              aria-label={t('zoom_in')}
              type="button"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* PDF Content */}
        <div className="flex-1 overflow-auto bg-gray-100 p-4">
          <div className="flex justify-center">
            {error
              ? (
                  <div className="text-center py-8">
                    <p className="text-red-600 text-lg">{error}</p>
                  </div>
                )
              : (
                  <Document
                    file={pdfUrl}
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadError={onDocumentLoadError}
                    loading={(
                      <div className="text-center py-8">
                        <p className="text-gray-600">{t('loading')}</p>
                      </div>
                    )}
                    className="max-w-full"
                  >
                    <Page
                      pageNumber={pageNumber}
                      scale={scale}
                      className="shadow-lg"
                      loading={(
                        <div className="text-center py-8">
                          <p className="text-gray-600">{t('loading')}</p>
                        </div>
                      )}
                    />
                  </Document>
                )}
          </div>
        </div>

        {/* Footer with keyboard shortcuts */}
        <div className="px-4 py-2 border-t bg-gray-50 text-xs text-gray-500 rounded-b-lg">
          <p>
            Keyboard shortcuts: ← → (navigate), Ctrl/Cmd + +/- (zoom), Esc (close)
          </p>
        </div>
      </div>
    </div>
  );
};

export default PdfViewerModal;
