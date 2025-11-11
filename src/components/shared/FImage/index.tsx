import Image from 'next/image';
import React from 'react';

import { AspectRatio } from '@/components/ui/aspect-ratio';

type BaseImageProps = {
  src: string;
  alt?: string;
  className?: string;
  aspectRatio?: number;
};

type ImageDimensions = {
  width: number;
  height: number;
};

type ImageNonDimensions = {
  width?: never;
  height?: never;
};

type ImageAspectRatio = {
  width?: never;
  height?: never;
  aspectRatio: number;
};

type FImageProps = BaseImageProps & (ImageDimensions | ImageNonDimensions | ImageAspectRatio);

const BaseImage = (props: Omit<FImageProps, 'aspectRatio'>) => {
  const {
    className,
    width,
    height,
  } = props;

  // Build src
  const base = `/assets`;
  const src = `${base}/${props.src}`;
  const alt = props.alt || `Hình ${src}`;
  const dimensionProps = width && height ? { width, height } : { fill: true };

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      {...dimensionProps}
    />
  );
};

/**
 * Component `FImage` là một wrapper linh hoạt cho `next/image`, cho phép hiển thị hình ảnh
 * theo một trong ba chế độ chính dựa trên props được cung cấp:
 *
 * 1. **Chế độ Kích thước Cố định**: Cung cấp `width` và `height` để render hình ảnh với kích thước chính xác.
 * 2. **Chế độ Tỷ lệ Khung hình**: Cung cấp `aspectRatio` để render hình ảnh đáp ứng (responsive)
 * bên trong một container giữ đúng tỷ lệ.
 * 3. **Chế độ Lấp đầy (Fill)**: Không cung cấp `width`, `height`, hoặc `aspectRatio`. Hình ảnh
 * sẽ tự động lấp đầy kích thước của component cha (yêu cầu cha có `position: relative`).
 *
 * @param {FImageProps} props - Props cho component FImage.
 * @param {string} props.src - Đường dẫn tương đối của hình ảnh, tính từ thư mục `/assets`. Ví dụ: `images/my-photo.png`.
 * @param {string} [props.alt] - Văn bản thay thế cho hình ảnh. Nếu không được cung cấp, một giá trị mặc định sẽ được tạo.
 * @param {string} [props.className] - Các lớp CSS để tùy chỉnh style cho thẻ `img`.
 * @param {number} [props.width] - Chiều rộng của hình ảnh (tính bằng pixel). Phải được sử dụng cùng với `height`.
 * @param {number} [props.height] - Chiều cao của hình ảnh (tính bằng pixel). Phải được sử dụng cùng với `width`.
 * @param {number} [props.aspectRatio] - Tỷ lệ khung hình mong muốn (ví dụ: `16 / 9`). Không dùng chung với `width` và `height`.
 *
 * @example
 * // 1. Sử dụng với kích thước cố định
 * <FImage src="logo.svg" alt="Logo công ty" width={200} height={50} />
 *
 * @example
 * // 2. Sử dụng với tỷ lệ khung hình (responsive)
 * <FImage src="banners/promo.jpg" alt="Banner khuyến mãi" aspectRatio={16 / 9} />
 *
 * @example
 * // 3. Sử dụng ở chế độ lấp đầy (fill)
 * <div style={{ position: 'relative', width: '100%', height: '300px' }}>
 * <FImage src="backgrounds/main.jpg" alt="Ảnh nền" className="object-cover" />
 * </div>
 * @see https://nextjs.org/docs/pages/api-reference/components/image - Tài liệu về next/image
 * @see https://ui.shadcn.com/docs/components/aspect-ratio - Tài liệu về AspectRatio của shadcn/ui
 */
const FImage = (props: FImageProps) => {
  const {
    src,
    alt,
    className,
    width,
    height,
  } = props;

  if ('aspectRatio' in props && props.aspectRatio) {
    return (
      <AspectRatio ratio={props.aspectRatio}>
        <BaseImage src={src} alt={alt} className={className} width={width} height={height} />
      </AspectRatio>
    );
  } else {
    return (
      <BaseImage src={src} alt={alt} width={width} height={height} className={className} />
    );
  }
};

export default FImage;
