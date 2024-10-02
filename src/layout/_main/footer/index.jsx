'use client';
import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
// mui
import { alpha, useTheme } from '@mui/material/styles';
import { Typography, Container, Stack, Box, IconButton, Grid, Link, Fab, Divider } from '@mui/material';

// components
import NewsLetter from './newsletter';
import Logo from 'src/components/logo';

// icons
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MdOutlineLocationOn } from 'react-icons/md';
import { FiMail } from 'react-icons/fi';
import { MdOutlineCall } from 'react-icons/md';

const SOCIAL_MEDIA_LINK = [
  {
    linkPath: 'https://www.facebook.com/tienpmath',
    icon: <FaFacebookF size={18} />
  },
  {
    linkPath: 'https://www.instagram.com/tienpmath',
    icon: <FaInstagram size={18} />
  },
  {
    linkPath: 'https://www.linkedin.com/#',
    icon: <FaLinkedinIn size={18} />
  }
];

const ADDRESS = [
  {
    name: 'Tổ Vạn Thành, phường 5, thành phố Đà Lạt',
    icon: <MdOutlineLocationOn />
  },
  {
    name: 'tiendev88@gmail.com',
    linkPath: '/',
    icon: <FiMail fontSize={20} />
  },
  {
    name: '0944838788 - 0943838788',
    linkPath: '/',
    icon: <MdOutlineCall />
  }
];

const MAIN_LINKS = [
  {
    heading: 'Sản phẩm',
    listText1: 'Đặc Sản Đà lạt',
    listLink1: '/contact',
    listText2: 'Hồng Treo Gió',
    listLink2: '/products',
    listText3: 'Mắc Ca Lâm Hà',
    listLink3: '/Rau Củ Quả Sấy',
    listText4: 'Nông sản',
    listLink4: '/compaigns'
  },
  {
    heading: 'Về Chúng tôi',
    listText1: 'Giới thiệu',
    listLink1: '/about',
    listText2: 'Chính sách',
    listLink2: '/privacy-policy',
    listText3: 'Điều kiện',
    listLink3: '/terms-and-conditions',
    listText4: 'Đổi trả Sản phẩm',
    listLink4: '/refund-return-policy'
  }
];

export default function Footer() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        bgcolor: (theme) => alpha(theme.palette.info.light, 0.1),
        py: 4,
        mt: 7,
        overflow: 'hidden',
        position: 'relative',

        display: {
          md: 'block',
          xs: 'none'
        }
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item md={3}>
            <Stack spacing={3}>
              <Link href="/">
                <Image
                  src="/logo.png"
                  w
                  width={500}
                  height={500}
                  style={{ width: '100%', height: 'auto' }}
                  alt="Đặc sản hồng treo gió Đà Lạt, Mắc Ca Lâm Đồng"
                />
              </Link>
              <Typography variant="body1" color="text.secondary">
                Farm Đà Lạt cam kết:
                <br />
                Cung cấp sản phẩm chất lượng cao, có nguồn gốc xuất xứ rõ ràng.
                <br />
                Giá cả ổn định, công khai, minh bạch.
                <br />
                Dịch vụ chuyên nghiệp, tận tâm.
                <br />
                Giao hàng nhanh chóng, đúng hẹn.
                <br />
              </Typography>
              <Stack>
                {ADDRESS.map((item, idx) => (
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }} key={idx}>
                    <IconButton
                      sx={{
                        svg: {
                          color: theme.palette.primary.main
                        }
                      }}
                    >
                      {item.icon}
                    </IconButton>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      component={NextLink}
                      href={`${item.linkPath}`}
                      sx={{
                        ':hover': {
                          color: theme.palette.primary.main
                        }
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Grid>
          {MAIN_LINKS.map((item, idx) => (
            <Grid item md={2} key={idx}>
              <Stack spacing={3}>
                <Typography variant="h4" color="text.primary">
                  {item.heading}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1
                  }}
                >
                  <Link
                    href={`${item.listLink1}`}
                    component={NextLink}
                    underline="none"
                    sx={{
                      color: 'text.secondary',
                      transition: '0.3s ease-in-out',
                      ':hover': {
                        color: theme.palette.primary.main,
                        transform: 'translateX(10px)'
                      }
                    }}
                  >
                    {item.listText1}
                  </Link>
                  <Link
                    href={`${item.listLink2}`}
                    component={NextLink}
                    underline="none"
                    sx={{
                      color: 'text.secondary',
                      transition: '0.3s ease-in-out',
                      ':hover': {
                        color: theme.palette.primary.main,
                        transform: 'translateX(10px)'
                      }
                    }}
                  >
                    {item.listText2}
                  </Link>
                  <Link
                    href={`${item.listLink3}`}
                    component={NextLink}
                    underline="none"
                    sx={{
                      color: 'text.secondary',
                      transition: '0.3s ease-in-out',
                      ':hover': {
                        color: theme.palette.primary.main,
                        transform: 'translateX(10px)'
                      }
                    }}
                  >
                    {item.listText3}
                  </Link>
                  <Link
                    href={`${item.listLink4}`}
                    component={NextLink}
                    underline="none"
                    sx={{
                      color: 'text.secondary',
                      transition: '0.3s ease-in-out',
                      ':hover': {
                        color: theme.palette.primary.main,
                        transform: 'translateX(10px)'
                      }
                    }}
                  >
                    {item.listText4}
                  </Link>
                  <Link
                    href={`${item.listLink5}`}
                    component={NextLink}
                    underline="none"
                    sx={{
                      color: 'text.secondary',
                      transition: '0.3s ease-in-out',
                      ':hover': {
                        color: theme.palette.primary.main,
                        transform: 'translateX(10px)'
                      }
                    }}
                  >
                    {item.listText5}
                  </Link>
                </Box>
              </Stack>
            </Grid>
          ))}

          <Grid item md={5}>
            <Stack spacing={3}>
              <Typography variant="h4" color="text.primary">
                Nhận Email thông báo - Khuyến mãi - Giá tốt
              </Typography>
              <NewsLetter />

              <Stack direction="row" alignItems="center" spacing={2}>
                {SOCIAL_MEDIA_LINK.map((item, idx) => (
                  <Fab
                    size="small"
                    color="primary"
                    key={idx}
                    component={NextLink}
                    href={item.linkPath}
                    sx={{
                      zIndex: 1
                    }}
                  >
                    {item.icon}
                  </Fab>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
        <Divider sx={{ my: 3 }} />
        <Typography variant="body1" color="text.primary" textAlign="center">
          © 2024 Đặc Sản Đà Lạt - Lâm Đồng giữ bản quyền website này.
        </Typography>
      </Container>
    </Box>
  );
}
