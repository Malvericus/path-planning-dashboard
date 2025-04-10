## Path Planning Algorithms Dashboard

The website complementary to the path planning algorithms code in python.

Link: https://github.com/Malvericus/PathPlanning_Algorithms 

This site showcases results of the agent's simulation in avoiding obstacles.

# Comparative Analysis of Path Planning Algorithms: PSO, RRT, and A* in Robotic Navigation

# Path Planning Algorithms Dashboard

![Dashboard Preview](final.png) <!-- Replace with your actual preview image -->

## Features

| Feature | Description | Supported Algorithms |
|---------|-------------|----------------------|
| **Interactive Visualization** | Live demonstrations of algorithm execution | PSO, RRT, A* |
| **Algorithm Comparison** | Side-by-side performance metrics | All three |
| **Parameter Customization** | Adjust algorithm parameters in real-time | PSO (swarm size, iterations), RRT (step size) |
| **Obstacle Configuration** | Create custom obstacle layouts | All environments |
| **Path Optimization** | Visualize different optimization approaches | PSO (smooth paths), A* (shortest path) |

| Feature | Description | Supported Algorithms |
|---------|-------------|----------------------|
| **3D Environment** | View path planning in 3D space | RRT (3D implementation) |
| **Performance Metrics** | Execution time and path length display | All algorithms |
| **Code Implementation** | View algorithm source code | Python examples provided |
| **Export Results** | Save path visualizations | PNG/MP4 formats |
| **Responsive Design** | Works on desktop and mobile | All components |

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher) or yarn
- Git (optional)

### Installation
```bash
# Clone the repository (if not already done)
git clone https://github.com/yourusername/path-planning-dashboard.git
cd path-planning-dashboard

# Install dependencies
npm install

# Or using yarn
yarn install 
```

## Algorithm Overviews

### 1. Particle Swarm Optimization (PSO)
- **Type:** Population-based metaheuristic
- **Mechanism:** Simulates swarm behavior where particles (potential solutions) move toward the best-known positions.

#### Strengths:
- Effective in continuous spaces
- Handles non-linear, non-convex environments
- Produces smooth, optimized paths

#### Limitations:
- No collision guarantee (depends on cost function)
- May get stuck in local optima

**Best for:** Environments requiring smooth trajectories (e.g., drone path planning).

---

### 2. Rapidly-exploring Random Tree (RRT)
- **Type:** Sampling-based exploration
- **Mechanism:** Incrementally builds a tree by randomly sampling points and connecting them via collision-free paths.

#### Strengths:
- Works well in high-dimensional spaces
- Probabilistically complete (guaranteed to find a path if one exists, given enough time)
- No need for explicit obstacle modeling

#### Limitations:
- Paths may be suboptimal
- Jerky, non-smooth trajectories

**Best for:** Robotic arms, dynamic environments, and 3D spaces.

---

### 3. A* (A-Star)
- **Type:** Heuristic-guided graph search
- **Mechanism:** Uses a cost function \( f(n) = g(n) + h(n) \) to explore the most promising nodes first.

#### Strengths:
- Guarantees optimality (with admissible heuristic)
- Computationally efficient for grid-based maps

#### Limitations:
- Struggles in high-dimensional spaces
- Requires discretization (grid-based)

**Best for:** Warehouse robots, video game AI, and structured 2D/3D environments.

---

## Why Compare These Algorithms?

### Performance in Different Environments
- **Structured (e.g., warehouses):** A* dominates due to optimality.
- **Unstructured (e.g., outdoor drones):** RRT or PSO may be better.

### Real-Time vs. Offline Planning
- **A*** is fast for precomputed grids.
- **RRT** adapts better to dynamic changes.
- **PSO** is slower but optimizes smoother paths.

### Optimality vs. Feasibility Trade-off
- **A*** guarantees the shortest path.
- **RRT** finds feasible paths quickly.
- **PSO** optimizes for smoothness rather than strict minimal distance.

## Conclusion
The choice between PSO, RRT, and A* depends on the application’s requirements:

- **Use A*** for grid-based, optimal pathfinding (e.g., warehouse robots).
- **Use RRT** for high-dimensional, dynamic environments (e.g., robotic arms).
- **Use PSO** when path smoothness is critical (e.g., drone navigation).