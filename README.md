# Flavor Test Implementation Documentation
## Overview
This documentation outlines the implementation details of the Flavor Test, covering the development of a custom module serving as an API endpoint, the use of a server component to access data, and the decomposition of the flavor client component into smaller components for better code management and presentation.

## Custom API Endpoint
A custom module was built to function as an API endpoint, responsible for serving mock JSON data. This module facilitates the retrieval of flavor-related information required for testing purposes.

## Server Component Usage
Instead of employing traditional API endpoints and using SWR (React Hooks library for data fetching), a server component was utilized to access data from the custom API endpoint. This approach aimed to streamline the data retrieval process and provide a more tailored solution for the Flavor Test implementation.

## Decomposition of Flavor Client Component
To enhance code management and presentation, the Flavor client component, responsible for displaying rows and columns, was decomposed into three distinct components:

### FlavorTable Component
The FlavorTable component encapsulates the overall structure of the flavor table. It handles the layout and rendering of rows and columns within the specified width.

### FlavorRow Component
The FlavorRow component represents a single row within the flavor table. It encapsulates the logic and presentation for each flavor entry.

### FlavorImage Component
The FlavorImage component specifically handles the rendering of images associated with each flavor. It incorporates features such as displaying a grow in the top left corner within a small orange-colored box.

### Fixed Width and Initial View
The Flavor client component is designed with a fixed width of 780px, providing a consistent and visually appealing presentation. Additionally, the initial view of the flavor table displays five rows. An expand/collapse button allows users to dynamically toggle between displaying five and ten rows, enhancing user flexibility and experience.

## Assumptions
It is assumed that the growth is represented in the orange box, and a value of 0 is assigned to flavors without a growth attribute.
Flavors with specific categories are assumed to have a value greater than 0.01%. These values are utilized for appropriate categorization within the Flavor Test.


## Getting Started

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
