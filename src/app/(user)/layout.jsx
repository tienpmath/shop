import React from 'react';

// mui
import { Toolbar } from '@mui/material';

// components
import Navbar from 'src/layout/_main/navbar';
import Footer from 'src/layout/_main/footer';
import Topbar from 'src/layout/_main/topbar';
import ActionBar from 'src/layout/_main/actionbar';

// Meta information
export const metadata = {
  title:
    'Đặc sản Đà Lạt ✔️✔️ Nhà nông chuyên nghiệp, uy tín tại Đà Lạt ☎️ 0943838788 chuyên hồng sấy, hồng treo gió, đặc sản, hạt mắc ca, dâu tây, dâu nhật, rau, củ quả sấy Đà Lạt',
  description:
    'Đặc sản Đà Lạt ✔️✔️ nhà nông chuyên nghiệp, uy tín tại Đà Lạt, Di Linh, Lâm Hà.☎️ 0943838788 chuyên hồng sấy, hồng treo gió, đặc sản, hạt mắc ca, dâu tây, dâu nhật, rau, củ quả sấy Đà Lạt',
  applicationName: 'Tiến Dev',
  authors: 'Tiến Dev 0943838788',
  keywords:
    'Đặc sản Đà Lạt ✔️✔️ Là đơn vị chuyên nghiệp, uy tín tại Đà Lạt, Bảo Lộc.☎️ 0943838788 chuyên hồng sấy, hồng treo gió, đặc sản, hạt mắc ca, dâu tây, dâu nhật, rau, củ quả sấy Đà Lạt,Nông sản, đặc sản, thủ công mỹ nghệ, sản phẩm đặc trưng Lâm Đồng, sản phẩm OCOP Đà Lạt Lâm Đồng. Farm Đà Lạt Kết nối giao thương và phát triển thương hiệu, quảng bá sản phẩm Lâm Đồng ra khắp thế giới.',
  icons: {
    icon: '/favicon.png'
  },
  openGraph: {
    images: '/favicon.png'
  }
};

export default async function RootLayout({ children }) {
  return (
    <>
      <Topbar />
      <Navbar />
      <ActionBar />
      {children}
      <Toolbar sx={{ display: { xs: 'block', md: 'none' } }} />
      <Footer />
    </>
  );
}
