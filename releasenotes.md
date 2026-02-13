---
title: Release Notes & Roadmap
layout: page
nav_order: 11
---

# Release Notes & Roadmap

## Table of Contents
{: .no_toc }

- TOC
{:toc}

## Roadmap

Here's what we're working on. Priorities may shift based on community feedback. If there's something you'd love to see, let us know on [Discord](https://discord.gg/RsNwwy3WCc) or at [hello@lagomorph.ai](mailto:hello@lagomorph.ai).

### In Progress

- **Improved Text to 3D quality** - Upgrading from preview to standard quality
- **Blender plugin** - Professional 3D modeling workflow integration
- **Godot plugin** - Open-source game engine support
- **[Lagomorph Pro](lagomorph-pro)** - Targeted for Q2 2026, includes:
  - Pro Quality morphs for both image and text morphing
  - Higher monthly morph limits
  - User accounts and history management
  - Priority processing for faster morph times
  - API access for custom workflows and automation

### Planned

- Additional export format support
- Batch generation improvements
- Enhanced texture quality

### Under Consideration

- Team and collaboration features
- Advanced material editing tools

---

## Changelog

### Beta (Current)

<!-- TODO: Add release date when Beta launched -->

The initial public release of Lagomorph AI, available across web and game engine plugins.

**Platforms:**

- **Lagomorph Web** at [app.lagomorph.ai](https://app.lagomorph.ai) - No account or installation required
- **Unity plugin** - Available on the [Fab store](https://github.com/LagomorphAI/unity-engine-plugin-release) (Windows only)
- **Unreal Engine plugin** - Available on the [Fab store](https://github.com/LagomorphAI/unreal-engine-plugin-release) (Windows only)

**Generation Features:**

- **Image to 3D** - Convert reference images to 3D models (standard quality)
  - Supported formats: JPEG, PNG, SVG, BMP
  - Best results with single objects and clean backgrounds
- **Text to 3D** - Generate from text descriptions (preview quality - actively improving)
  - Generate up to 4 variants from a single prompt
  - Best for inorganic objects (props, weapons, furniture, architecture)

**Processing & Export:**

- **Automatic material and texture generation** - Optional post-processing step
- **Simplify mesh** - Reduce polygon count for game-ready assets
- **Export formats:**
  - Lagomorph Web: OBJ and FBX
  - Unity plugin: FBX
  - Unreal Engine plugin: OBJ

**Limits:**

- 50 morphs per month (across all platforms)
- 50 texture generations per month

<!-- TODO: Add any earlier version history or milestones here -->

---

_© Lagomorph AI 2025–2026 • All rights reserved_
