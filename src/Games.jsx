import { Card, CardContent, Typography, Box } from '@mui/material';

export default function Games() {
  return (
    <Box id='games'>
    <Typography variant="h5" gutterBottom>
      Game Projects
    </Typography>
    <Card sx={{ margin: '10px 0' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Project Title 1
        </Typography>
        <Typography variant="body2">
          Description of the project goes here.
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ margin: '10px 0' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Project Title 1
        </Typography>
        <Typography variant="body2">
          Description of the project goes here.
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ margin: '10px 0' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Project Title 1
        </Typography>
        <Typography variant="body2">
          Description of the project goes here.
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ margin: '10px 0' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Project Title 1
        </Typography>
        <Typography variant="body2">
          Description of the project goes here.
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ margin: '10px 0' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Project Title 1
        </Typography>
        <Typography variant="body2">
          Description of the project goes here.
        </Typography>
      </CardContent>
    </Card>
    {/* Add more projects here */}
  </Box>
  );
}
