import { useNavigate } from 'react-router-dom';
import { Button, Card, CardContent, Typography, Box, Grid } from '@mui/material';

export default function Layouts() {
    const navigate = useNavigate();
    const layouts = JSON.parse(localStorage.getItem('flows') || '[]');

    return (
        <Box sx={{ minHeight: '100vh', marginTop: 6, padding: 2 }}>
            <Typography variant="h4" gutterBottom>
                Saved Layouts
            </Typography>

            {layouts.length === 0 ? (
                <Typography>No layouts saved yet.</Typography>
            ) : (
                <Grid container spacing={2}>
                    {layouts.map((layout: any, index: number) => (
                        <Grid key={layout.id}>
                            <Card elevation={3}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        Layout {index + 1}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Nodes: {layout.nodes.length}, Edges: {layout.edges.length}
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        onClick={() =>
                                            navigate('/', { state: { layout } })
                                        }
                                    >
                                        Edit Layout
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Box>
    );
}
