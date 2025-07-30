import { TextField } from "@mui/material";

export default function SettingsPanel({ node, onChange }: { node: any, onChange: (label: string) => void }) {
  return (
    <div>
      <h3>Settings Panel</h3>
      <TextField
        label="Edit Text"
        value={node?.data.label}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
