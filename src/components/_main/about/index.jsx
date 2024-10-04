'use client';
import React from 'react';
// material ui
import { Box, Grid, Stack, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
// images
import AboutImage from '../../../../public/images/about 1.jpg';
import AboutImage2 from '../../../../public/images/about 2.jpg';
// components
import WhyUs from '../home/whyUs';
import Team from './team';

const Data = [
  {
    name: 'Sản phẩm',
    range: '65k+',
    description: 'Cung cấp sản phẩm chất lượng cao, có nguồn gốc xuất xứ rõ ràng.'
  },
  {
    name: 'Giá cả',
    range: '$45B+',
    description: 'Giá cả ổn định, công khai, minh bạch.'
  },
  {
    name: 'Dịch vụ',
    range: '25M+',
    description: 'Dịch vụ chuyên nghiệp, tận tâm.'
  },
  {
    name: 'Giao hàng',
    range: '70k+',
    description: 'Giao hàng nhanh chóng, đúng hẹn.'
  }
];

export default function Index() {
  const theme = useTheme();

  return (
    <>
      <Box sx={{ my: 8 }}>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <Stack direction="row" spacing={3} mt={5}>
              <Box sx={{ position: 'relative', width: '100%', height: 418, borderRadius: 4, overflow: 'hidden' }}>
                <Image src={AboutImage} alt="" fill placeholder="blur" objectFit="cover" />
              </Box>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: 418,
                  borderRadius: 4,
                  overflow: 'hidden',
                  transform: 'translateY(-40px)'
                }}
              >
                <Image src={AboutImage2} alt="" fill placeholder="blur" objectFit="cover" />
              </Box>
            </Stack>
          </Grid>
          <Grid item md={6} xs={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="h6" fontSize="16px" textTransform="uppercase" color="primary">
              Farm Đà Lạt là Điểm mua sắm nông sản đặc sản hàng đầu Đà Lạt, Lâm Đồng?
            </Typography>
            <Typography variant="h2" fontWeight={800}>
              Sản phẩm nông sản đặc sản tươi ngon, chất lượng cao tại Đà Lạt.
            </Typography>
            <Typography variant="body1" fontWeight={400} color="text.secondary" mt={2}>
              Chúng tôi cam kết với phương châm: <br />
              Nguồn hàng đa dạng, chất lượng: từ trái cây, rau củ, hoa tươi đến đặc sản địa phương như dâu tây, atiso,
              măng tây, hồng treo gió, trà atiso, rượu vang, cà phê đặc sản, bánh mứt, quà lưu niệm...
              <br />
              Chất lượng, nguồn gốc sản phẩm: Đều đạt tiêu chuẩn cao và chứng nhận VietGAP, OCOP, ATVSTT,...khác biệt
              hoàn toàn với những sản phẩm bán tràn lan ở chợ hoặc các lò mứt không có nguồn gốc uy tín.
              <br />
              Giá cả hợp lý: Mua trực tiếp từ nhà sản xuất, hợp tác xã, đảm bảo giá cả ổn định, cạnh tranh.
              <br />
              Không gian mua sắm hiện đại: Thiết kế thoáng đãng, tiện nghi, tạo cảm giác thoải mái cho khách hàng.
              <br />
              Dịch vụ chuyên nghiệp: Đội ngũ nhân viên tận tình, chu đáo, sẵn sàng hỗ trợ khách hàng.
              <br />
              Giao hàng online nhanh chóng: Đặt hàng dễ dàng qua website hoặc điện thoại, giao hàng tận nơi nhanh chóng.
              <br />
              Trải nghiệm ẩm thực độc đáo: Thưởng thức món mì hoành thánh xá xíu chuẩn vị Hoa, làm từ nguyên liệu tươi
              ngon.
              <br />
              Không gian thư giãn: Thưởng thức trà, cà phê, sữa bò nguyên chất trong không gian xanh mát.
              <br />
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ marginTop: 5 }}>
          <Typography variant="h3" fontWeight={700} textAlign="center">
            Sản phẩm của Chúng tôi phân phối toàn quốc call là có 0943838788
          </Typography>
          <Typography
            variant="body1"
            fontWeight={400}
            color="text.secondary"
            sx={{ maxWidth: 350, textAlign: 'center', mx: 'auto' }}
          >
            Chúng tôi là một thương hiệu có xuất xứ <br /> Từ Đà Lạt và các huyện của tỉnh Lâm Đồng
          </Typography>
        </Box>
      </Box>
      {/* WhyUs  */}
      <WhyUs />
      <Box sx={{ marginY: { md: 10, sm: 8, xs: 5 } }}>
        <Grid container spacing={3}>
          {Data.map((item, idx) => (
            <Grid item md={3} sm={6} xs={12} key={Math.random()}>
              <Stack
                textAlign="center"
                sx={{ border: `1px solid ${theme.palette.divider}`, borderRadius: 2, p: 2 }}
                key={idx}
              >
                <Typography variant="h3" color="text.secondary">
                  {item.range}
                </Typography>
                <Typography variant="h3" color="text.primary">
                  {item.name}
                </Typography>
                <Typography
                  variant="body1"
                  fontWeight={400}
                  color="text.secondary"
                  sx={{ maxWidth: 350, textAlign: 'center', mx: 'auto' }}
                >
                  {item.description}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* <Box sx={{ paddingBottom: 10 }}>
        <Typography variant="h3" fontWeight={700} textAlign="center">
         Đội ngũ
        </Typography>
        <Typography
          variant="body1"
          fontWeight={400}
          color="text.secondary"
          sx={{ maxWidth: 350, textAlign: 'center', mx: 'auto' }}
        >
          Meet out expert team members.
        </Typography>
        <Grid container spacing={3} mt={5}>
          {[1, 2, 3, 4].map((index) => (
            <Grid item md={3} sm={2} xs={6} key={index}>
              <Team />
            </Grid>
          ))}
        </Grid>
      </Box> */}
    </>
  );
}
