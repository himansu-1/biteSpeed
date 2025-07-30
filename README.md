# BiteSpeed Flow Builder

A React-based flow builder for creating and managing message flows using draggable nodes and edges.

## Features

### 1. **Text Node**
- Supports only one type of message: **Text Message**.
- Multiple Text Nodes can be added to a single flow.
- Nodes are added by dragging and dropping from the Nodes Panel.

### 2. **Nodes Panel**
- Displays all node types supported by the Flow Builder.
- Currently supports only the Message Node.
- Designed to be extensible for future node types.

### 3. **Edge**
- Connects two nodes together visually and logically.

### 4. **Source Handle**
- The starting point for a connecting edge.
- Only **one edge** can originate from a source handle.

### 5. **Target Handle**
- The endpoint for a connecting edge.
- Multiple edges can connect to a single target handle.

### 6. **Settings Panel**
- Replaces the Nodes Panel when a node is selected.
- Allows editing the text of the selected Text Node.

### 7. **Save Button**
- Saves the current flow layout.
- Displays an error if there are multiple nodes and more than one node has no incoming connections (empty target handles).

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Visit [http://localhost:5173](http://localhost:5173)

## Project Structure

- `src/pages/Editor.tsx` — Handles flow editing and saving logic.
- `src/pages/Home.tsx` — Main flow builder UI.
- `src/components/Draw.tsx` — Layout and navigation.
- `src/pages/Layouts.tsx` — Displays saved layouts.

## Future Improvements

- Add more node types to the Nodes Panel.
- Enhance validation and error handling.
- Improve UI/UX for large flows.

---

**BiteSpeed Flow Builder** — Easily create, connect, and manage message flows with extensible node