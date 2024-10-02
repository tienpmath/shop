import React from 'react';

// mui
import { Container } from '@mui/material';

// next
import dynamic from 'next/dynamic';

// components
import CheckoutMain from 'src/components/_main/checkout';
import HeaderBreadcrumbsSkeleton from 'src/components/skeletons/breadcrumbs';

// dynamic import
const HeaderBreadcrumbs = dynamic(() => import('src/components/headerBreadcrumbs'), {
  loading: () => <HeaderBreadcrumbsSkeleton />
});

// Meta information
export const metadata = {
  title: 'Giỏ hàng và thanh toán | Đặc sản Đà Lạt ✔️✔️',
  description:
    'Giỏ hàng và thanh toán | Đặc sản Đà Lạt ✔️✔️ ! Cam kết giao đúng hàng, thời gian nhanh chóng, được kiểm tra hàng, review đặc sản Đà Lạt',
  applicationName: 'Tiến Dev 0944838788',
  authors: 'Tiên Dev',
  keywords:
    'Giỏ hàng và thanh toán | Đặc sản Đà Lạt ✔️✔️ ! Cam kết giao đúng hàng, thời gian nhanh chóng, được kiểm tra hàng, review đặc sản Đà Lạt'
};

export default function Checkout() {
  return (
    <Container maxWidth="xl">
      <HeaderBreadcrumbs
        heading="Checkout"
        links={[
          {
            name: 'Home',
            href: '/'
          },
          {
            name: 'Cart',
            href: '/cart'
          },
          {
            name: 'Checkout'
          }
        ]}
      />

      <CheckoutMain />
    </Container>
  );
}
