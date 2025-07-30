import { Button, TextField } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import ReactFlow, {
    addEdge,
    Background,
    Controls,
    Handle,
    Position,
    useNodesState,
    useEdgesState,
    MarkerType,
} from 'reactflow';
import type { Edge, Node, Connection } from 'reactflow';
import 'reactflow/dist/style.css';
import SettingsPanel from '../components/SettingsPanel';
import NodePanel from '../components/NodePanel';

let id = 0;
const getId = () => `text-node-${id++}`;

function TextNode({ data }: any) {
    return (
        <div style={{ padding: 10, border: '1px solid gray', borderRadius: 5 }}>
            <Handle type="target" position={Position.Top} />
            <div>{data.label}</div>
            <Handle type="source" position={Position.Bottom} />
        </div>
    );
}

const nodeTypes = { textNode: TextNode };

export default function Home(props: any) {
    const [selectedNode, setSelectedNode] = useState<Node | null>(null);

    const [nodes, setNodes, onNodesChange] = useNodesState(props.initialLayout?.nodes || []);
    const [edges, setEdges, onEdgesChange] = useEdgesState(props.initialLayout?.edges || []);
    const isEditing = !!props.initialLayout;

    const onConnect = useCallback(
        (params: Edge | Connection) => {

            const edgeWithArrow: Edge = {
                ...params,
                target: selectedNode?.id ?? params.target,
                markerEnd: {
                    type: MarkerType.ArrowClosed,
                    color: 'black',
                },
                style: { stroke: 'black' }
            };

            setEdges((eds) => addEdge(edgeWithArrow, eds));
        },
        [edges]
    );

    const onEdgeDoubleClick = useCallback((event: React.MouseEvent, edge: Edge) => {
        event.stopPropagation(); // Prevent canvas deselection
        setEdges((eds) => eds.filter((e) => e.id !== edge.id));
    }, [setEdges]);

    // Listen to Add Node events from Drawer
    useEffect(() => {
        const handleAddNode = (e: any) => {
            const label = e.detail;
            const newNode: Node = {
                id: getId(),
                type: 'textNode',
                data: { label },
                position: { x: Math.random() * 250, y: Math.random() * 250 },
            };
            setNodes((nds) => [...nds, newNode]);
        };

        window.addEventListener('add-text-node', handleAddNode);
        return () => window.removeEventListener('add-text-node', handleAddNode);
    }, [setNodes]);

    return (
        <div style={{ height: '80vh', width: '100%' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                // onReconnectEnd={onReconnectEnd}
                onEdgeDoubleClick={onEdgeDoubleClick}
                onConnect={onConnect}
                fitView
            >
                <Controls />
                <Background />
            </ReactFlow>

            {/* <Button onClick={handleSave}>Save</Button> */}
            <Button 
                variant={isEditing ? 'secondary' : 'contained'}
                onClick={() => props.onSave(nodes, edges)}
            >
                {isEditing ? 'Update Layout' : 'Save Layout'}
            </Button>

            <div style={{ marginTop: 20 }}>
                {selectedNode ? (
                    <SettingsPanel
                        node={selectedNode}
                        onChange={(label) => {
                            setNodes((nds) =>
                                nds.map((n) =>
                                    n.id === selectedNode.id
                                        ? { ...n, data: { ...n.data, label } }
                                        : n
                                )
                            );
                            setSelectedNode({ ...selectedNode, data: { label } });
                        }}
                    />
                ) : (
                    <NodePanel />
                )}

            </div>
        </div>
    );
}
