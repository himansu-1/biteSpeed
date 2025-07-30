import { useLocation, useNavigate } from 'react-router-dom';
import Home from './Home';
import type { Edge, Node } from 'reactflow';

export default function Editor() {
    const location = useLocation();
    const navigate = useNavigate();

    // Check if editing an existing layout
    const layout = location.state?.layout ?? null;

    const hasInvalidNodes = (nodes: Node[], edges: Edge[]) => {
        const nodesWithoutIncoming = nodes.filter(
            (node: Node) => !edges.some((edge) => edge.target === node.id)
        );

        // Allow only 1 root (no incoming edges), flag if more than 1
        return nodesWithoutIncoming.length > 1;
    };

    // Save handler — passed down
    const handleSave = (nodes: any, edges: any) => {
        if (hasInvalidNodes(nodes, edges)) {
            alert('Error: More than one node does not have an incoming connection.');
            return;
        }

        const flows = JSON.parse(localStorage.getItem('flows') || '[]');

        if (layout?.id) {
            // Editing existing
            const updated = flows.map((f: any) =>
                f.id === layout.id ? { id: layout.id, nodes, edges } : f
            );
            localStorage.setItem('flows', JSON.stringify(updated));
        } else {
            // Creating new
            const newLayout = {
                id: `layout-${Date.now()}`,
                nodes,
                edges,
            };
            flows.push(newLayout);
            localStorage.setItem('flows', JSON.stringify(flows));

            alert('New layout saved successfully!');
        }

        navigate('/layouts');
    };

    return <Home initialLayout={layout} onSave={handleSave} />;
}
