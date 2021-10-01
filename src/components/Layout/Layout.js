import { Container, CssBaseline, Box } from '@mui/material';

const Layout = (props) => {
  return (
    <Container
      sx={{
        mt: 20,
      }}
      component='main'
      maxWidth='xs'
    >
      <CssBaseline />
      <Box
        component='div'
        sx={{
          boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
          px: 3,
          py: 4,
        }}
      >
        {props.children}
      </Box>
    </Container>
  );
};

export default Layout;
