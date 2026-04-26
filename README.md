# Boundary Fill Algorithm Visualizer: Interactive Computer Graphics Simulation

An advanced, interactive web-based visualizer for the **Boundary Fill Algorithm**. This project provides a real-time simulation of how seed-fill algorithms work in a pixel-based grid, commonly used in computer graphics and paint applications.

![Boundary Fill Visualizer Preview](results/ui_preview.png)

## Overview

The **Boundary Fill Algorithm** is a fundamental technique in computer graphics used to fill an area with a specific color until it encounters a predefined boundary color. This simulation implements the **4-connected** approach, where the algorithm checks the top, bottom, left, and right neighbors of each pixel.

### Key Features
- **Interactive Grid**: Dynamic generation of grids with custom dimensions.
- **Real-time Boundary Drawing**: Click and drag to create complex shapes and boundaries.
- **Visual Algorithm Execution**: Watch the recursive filling process in action with smooth animations.
- **Premium UI**: Modern dark-mode design with glassmorphism effects and responsive layout.

## How It Works

1. **Seed Point**: The algorithm starts from a "seed" pixel provided by the user.
2. **Boundary Detection**: It checks the color of adjacent pixels.
3. **Recursive Filling**: If a pixel is neither the boundary color nor already filled, it colors the pixel and repeats the process for its neighbors.

## Installation and Usage

### Prerequisites
A modern web browser (Chrome, Firefox, Edge, or Safari).

### Getting Started
1. Clone this repository:
   ```bash
   git clone https://github.com/adhishagc/boundaryfill-algorithm-simulation-sample-code.git
   ```
2. Open `index.html` in your favorite browser.

### Using the Visualizer
1. **Define Grid**: Enter your desired rows and columns and click **Generate Grid**.
2. **Draw Boundaries**: Use your mouse to draw boundaries on the grid (dark grey cells).
3. **Set Seed**: Click **Pick Seed Point** and then click any empty cell inside your boundary.
4. **Fill**: Click **Run Algorithm** to start the simulation.

## Project Structure
- `index.html`: The main visual interface and structure.
- `style.css`: Premium styling and layout rules.
- `algorithm.js`: Core implementation of the Boundary Fill logic and UI event handling.
- `results/`: Contains project previews and documentation assets.

## About the Subject Matter
Seed filling algorithms are essential for operations like the "Bucket Fill" tool in image editors. Understanding the recursive logic behind boundary filling is a key concept in computer graphics education, demonstrating both spatial data traversal and recursion limits.

---
*Optimized for Educational Excellence and High SEO Visibility.*
