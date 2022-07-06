import React, { useEffect, useState } from 'react';
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Container,
  Stack,
  Typography,
  Grid,
  Icon as MuiIcon
} from '@mui/material';
import { Icon } from '@iconify/react';
import {
  COLOR_PRIMARY,
  COLOR_PRIMARY_OPACITY,
  FONT_FAMILY_PRIMARY,
  FONT_FAMILY_SECONDARY,
  FONT_SIZE_BODY1_DESKTOP,
  FONT_SIZE_BODY1_MOBILE,
  FONT_SIZE_H4_DESKTOP,
  FONT_SIZE_H4_MOBILE,
  FONT_SIZE_H5_DESKTOP,
  FONT_SIZE_H5_MOBILE,
  FONT_SIZE_H6_DESKTOP,
  FONT_SIZE_H6_MOBILE,
  NAME_FROM_CRYPTO,
  NAME_TO_CRYPTO
} from '../utils/constants';
import {
  ExchangeTextField,
  PrimaryButton,
  PrimaryLinearProgressbar
} from '../components/styledComponents';
import useWallet from '../hooks/useWallet';

/* --------------------------------------------------------------------------- */

const REGEX_NUMBER_VALID = /^[0-9]*\.?[0-9]*$/;

/* --------------------------------------------------------------------------- */

export default function Home() {
  const [fromCrypto, setFromCrypto] = useState(0);
  const {
    currentAccount,
    connectWallet,
    disconnectWallet,
    contract,
    getProviderAndContract
  } = useWallet();

  const handleFromCrypto = (value) => {
    if (value.match(REGEX_NUMBER_VALID)) {
      setFromCrypto(value);
    }
  };

  useEffect(() => {
    getProviderAndContract();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <Stack sx={{ minHeight: '94vh' }} justifyContent="center" alignItems="center" spacing={5}>
        {/* Logo */}
        <Stack direction="row" justifyContent="center">
          <Box
            component="img"
            src="assets/images/logo.png"
            width={100}
            alt=""
          />
        </Stack>

        <Card
          sx={{
            width: '100%',
            minHeight: '70vh',
            boxShadow: '0px 2px 15px -1px rgb(0 0 0 / 20%), 0px 1px 10px 0px rgb(0 0 0 / 14%), 10px 1px 15px 0px rgb(0 0 0 / 12%)',
            p: 2
          }}
        >
          <Stack spacing={2} sx={{ minHeight: 'inherit' }}>
            {/* Title */}
            <CardHeader
              title="Private Sale"
              titleTypographyProps={{
                color: COLOR_PRIMARY,
                fontFamily: FONT_FAMILY_PRIMARY,
                fontSize: { xs: FONT_SIZE_H4_MOBILE, md: FONT_SIZE_H4_DESKTOP },
                fontWeight: 900,
              }}
              action={
                currentAccount ? (
                  <PrimaryButton
                    sx={{
                      fontSize: { xs: FONT_SIZE_BODY1_MOBILE, md: FONT_SIZE_BODY1_DESKTOP },
                      fontWeight: 700
                    }}
                    variant="contained"
                    onClick={() => disconnectWallet()}
                  >
                    {currentAccount.slice(0, 10)}...{currentAccount.slice(-5)}
                  </PrimaryButton>
                ) : (
                  <PrimaryButton
                    sx={{
                      fontSize: { xs: FONT_SIZE_BODY1_MOBILE, md: FONT_SIZE_BODY1_DESKTOP },
                      fontWeight: 700
                    }}
                    variant="contained"
                    onClick={() => connectWallet()}
                  >
                    Connect Wallet
                  </PrimaryButton>
                )

              }
            />
            <CardContent
              sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              {/* Progress */}
              <Stack spacing={2}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Typography
                    component="span"
                    fontSize={{ xs: FONT_SIZE_BODY1_MOBILE, md: FONT_SIZE_H6_DESKTOP }}
                    fontFamily={FONT_FAMILY_SECONDARY}
                    fontWeight={900}
                  >Sold: 9,081,576.95 {NAME_TO_CRYPTO}</Typography>
                  <Typography
                    component="span"
                    fontSize={{ xs: FONT_SIZE_BODY1_MOBILE, md: FONT_SIZE_H6_DESKTOP }}
                    fontFamily={FONT_FAMILY_SECONDARY}
                    fontWeight={900}
                  >Hard Cap: 20,000,000.00 {NAME_TO_CRYPTO}</Typography>
                </Stack>

                <PrimaryLinearProgressbar
                  variant="determinate"
                  value={40}
                />
              </Stack>

              <Box mt={4}>
                <Grid container spacing={2} alignItems="stretch">
                  {/* Current status */}
                  <Grid item xs={12} md={6}>
                    <Stack
                      px={3}
                      justifyContent="center"
                      spacing={3}
                      borderRadius="50px 0 50px 0"
                      bgcolor={COLOR_PRIMARY_OPACITY}
                      sx={{ height: '100%' }}
                    >
                      <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography
                          component="span"
                          fontSize={{ xs: FONT_SIZE_H5_MOBILE, md: FONT_SIZE_H5_DESKTOP }}
                          fontFamily={FONT_FAMILY_SECONDARY}
                          color={COLOR_PRIMARY}
                          fontWeight={900}
                        >Price: </Typography>
                        <Typography
                          component="span"
                          fontSize={{ xs: FONT_SIZE_H5_MOBILE, md: FONT_SIZE_H5_DESKTOP }}
                          fontFamily={FONT_FAMILY_SECONDARY}
                          fontWeight={900}
                        >0.0046 {NAME_FROM_CRYPTO} / {NAME_TO_CRYPTO}</Typography>
                      </Stack>
                      {/* <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography
                          component="span"
                          fontSize={{ xs: FONT_SIZE_H5_MOBILE, md: FONT_SIZE_H5_DESKTOP }}
                          fontFamily={FONT_FAMILY_SECONDARY}
                          color={COLOR_PRIMARY}
                          fontWeight={900}
                        >Next Price: </Typography>
                        <Typography
                          component="span"
                          fontSize={{ xs: FONT_SIZE_H5_MOBILE, md: FONT_SIZE_H5_DESKTOP }}
                          fontFamily={FONT_FAMILY_SECONDARY}
                          fontWeight={900}
                        >0.0046 {NAME_FROM_CRYPTO} / {NAME_TO_CRYPTO}</Typography>
                      </Stack>
                      <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography
                          component="span"
                          fontSize={{ xs: FONT_SIZE_H5_MOBILE, md: FONT_SIZE_H5_DESKTOP }}
                          fontFamily={FONT_FAMILY_SECONDARY}
                          color={COLOR_PRIMARY}
                          fontWeight={900}
                        >In 0d 0h 13m 57s </Typography>
                      </Stack> */}
                      <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography
                          component="span"
                          fontSize={{ xs: FONT_SIZE_H5_MOBILE, md: FONT_SIZE_H5_DESKTOP }}
                          fontFamily={FONT_FAMILY_SECONDARY}
                          color={COLOR_PRIMARY}
                          fontWeight={900}
                        >Min Buy: </Typography>
                        <Typography
                          component="span"
                          fontSize={{ xs: FONT_SIZE_H5_MOBILE, md: FONT_SIZE_H5_DESKTOP }}
                          fontFamily={FONT_FAMILY_SECONDARY}
                          fontWeight={900}
                        >100.00 {NAME_FROM_CRYPTO}</Typography>
                      </Stack>
                      <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography
                          component="span"
                          fontSize={{ xs: FONT_SIZE_H5_MOBILE, md: FONT_SIZE_H5_DESKTOP }}
                          fontFamily={FONT_FAMILY_SECONDARY}
                          color={COLOR_PRIMARY}
                          fontWeight={900}
                        >Max Buy: </Typography>
                        <Typography
                          component="span"
                          fontSize={{ xs: FONT_SIZE_H5_MOBILE, md: FONT_SIZE_H5_DESKTOP }}
                          fontFamily={FONT_FAMILY_SECONDARY}
                          fontWeight={900}
                        >150.00 {NAME_FROM_CRYPTO}</Typography>
                      </Stack>
                    </Stack>
                  </Grid>

                  {/* Exchange */}
                  <Grid item xs={12} md={6}>
                    <Stack sx={{ height: '100%' }} justifyContent="center" spacing={2}>
                      {/* {NAME_FROM_CRYPTO} */}
                      <Stack
                        spacing={1}
                        px={2}
                        py={1}
                        bgcolor={COLOR_PRIMARY_OPACITY}
                        borderRadius="0 20px 0 20px"
                      >
                        <Typography
                          component="span"
                          fontSize={{ xs: FONT_SIZE_H6_MOBILE, md: FONT_SIZE_H6_DESKTOP }}
                          color={COLOR_PRIMARY}
                          fontFamily={FONT_FAMILY_SECONDARY}
                          fontWeight={900}
                        >From</Typography>

                        <Box>
                          <Grid container spacing={2} alignItems="center">
                            <Grid item xs={8} md={8}>
                              <ExchangeTextField
                                name="from-crypto"
                                value={fromCrypto}
                                onChange={(e) => handleFromCrypto(e.target.value)}
                              />
                            </Grid>
                            <Grid item xs={4} md={4}>
                              <Stack
                                direction="row"
                                alignItems="center"
                                justifyContent="center"
                                spacing={1}
                              >
                                <Box
                                  component="img"
                                  src="assets/images/bnb.png"
                                  alt=""
                                  width={{ xs: 20, md: 40 }}
                                />
                                <Typography
                                  component="span"
                                  fontSize={{ xs: FONT_SIZE_H6_MOBILE, md: FONT_SIZE_H6_DESKTOP }}
                                  fontWeight={900}
                                  fontFamily={FONT_FAMILY_SECONDARY}
                                >{NAME_FROM_CRYPTO}</Typography>
                              </Stack>
                            </Grid>
                          </Grid>
                        </Box>
                      </Stack>

                      {/* Arrow */}
                      <Stack direction="row" justifyContent="center">
                        <MuiIcon sx={{ fontSize: { xs: 24, md: 38 }, color: COLOR_PRIMARY, height: 'auto' }}>
                          <Icon icon="simple-icons:convertio" />
                        </MuiIcon>
                      </Stack>

                      {/* CCharge */}
                      <Stack
                        spacing={1}
                        px={2}
                        py={1}
                        bgcolor={COLOR_PRIMARY_OPACITY}
                        borderRadius="0 20px 0 20px"
                      >
                        <Typography
                          component="span"
                          fontSize={{ xs: FONT_SIZE_H6_MOBILE, md: FONT_SIZE_H6_DESKTOP }}
                          color={COLOR_PRIMARY}
                          fontFamily={FONT_FAMILY_SECONDARY}
                          fontWeight={900}
                        >To</Typography>

                        <Box>
                          <Grid container spacing={2} alignItems="center">
                            <Grid item xs={8} md={8}>
                              <Typography
                                component="span"
                                fontSize={{ xs: FONT_SIZE_H4_MOBILE, md: FONT_SIZE_H4_DESKTOP }}
                                fontFamily={FONT_FAMILY_SECONDARY}
                                fontWeight={900}
                              >0.00</Typography>
                            </Grid>
                            <Grid item xs={4} md={4}>
                              <Stack
                                direction="row"
                                alignItems="center"
                                justifyContent="center"
                                spacing={1}
                              >
                                <Box
                                  component="img"
                                  src="assets/images/logo.png"
                                  alt=""
                                  width={{ xs: 20, md: 40 }}
                                />
                                <Typography
                                  component="span"
                                  fontSize={{ xs: FONT_SIZE_H6_MOBILE, md: FONT_SIZE_H6_DESKTOP }}
                                  fontWeight={900}
                                  fontFamily={FONT_FAMILY_SECONDARY}
                                >{NAME_TO_CRYPTO}</Typography>
                              </Stack>
                            </Grid>
                          </Grid>
                        </Box>
                      </Stack>
                    </Stack>
                  </Grid>
                </Grid>
              </Box>

              <Stack direction="row" justifyContent="center" mt={4}>
                <PrimaryButton
                  sx={{
                    fontSize: { xs: FONT_SIZE_H5_MOBILE, md: FONT_SIZE_H5_MOBILE },
                    fontWeight: 900,
                    px: 6
                  }}
                  variant="contained"
                >
                  Approve
                </PrimaryButton>
              </Stack>
            </CardContent>
          </Stack>
        </Card>
      </Stack>
    </Container>
  );
}