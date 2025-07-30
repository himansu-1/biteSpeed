import { useNavigate } from 'react-router-dom';
import { Button, Card, CardContent, Typography } from '@mui/material';

export default function Layouts() {
    const navigate = useNavigate();
    const layouts = JSON.parse(localStorage.getItem('flows') || '[]');

    return (
        <div>
            <h2>Saved Layouts</h2>
            {layouts.map((layout: any, index: number) => (
                <Card key={index} sx={{ mb: 2 }}>
                    <CardContent>
                        <Typography variant="h6">Layout {index + 1}</Typography>

                        <Button onClick={() => navigate('/', { state: { layout } })}>
                            Edit Layout
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
