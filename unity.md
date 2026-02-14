---
title: Unity
layout: page
nav_order: 6
---

# Lagomorph AI Plugin for Unity

## Table of Contents

{: .no_toc }

- TOC
{:toc}

**AI-driven 3D art generation directly in your Unity workflow. Create game-ready models from text and images in minutes.**

[Download Plugin](https://github.com/LagomorphAI/unity-engine-plugin-release) | [Join Community](https://discord.gg/RsNwwy3WCc)

---

## Overview

Lagomorph empowers game developers with AI-driven 3D model generation. Generate game-ready assets directly within Unity using natural language or reference images, dramatically reducing iteration time from concept to implementation.

### Key Features

**Text to 3D Generation**
Describe models in natural language and generate game-ready assets instantly.

**Image to 3D Conversion**
Upload concept art and transform it into fully realized 3D models.

**Automatic Texturing**
Generate high-quality materials and textures automatically.

**Game-Ready Output**
Optimized for real-time rendering with clean topology and efficient UV layouts.

---

> **Beta Status**
>
> The Lagomorph Unity Plugin is currently in Beta. We're actively improving it based on community feedback. If you run into issues or have suggestions, reach out on [Discord](https://discord.gg/RsNwwy3WCc) or email us at [hello@lagomorph.ai](mailto:hello@lagomorph.ai).

---

## Installation

### Prerequisites

- Unity 6.x or higher
- Active internet connection for AI processing
- Minimum 8GB RAM (recommended)
- Windows operating system

### Installation Steps

#### Step 1: Download the Plugin

Visit the [Fab store](https://github.com/LagomorphAI/unity-engine-plugin-release)

#### Step 2: Import the Plugin

![Unity package import dialog](/images/unity_import.png)

![Unity asset window](/images/unity_asset.png)

#### Step 3: Restart Unity

Close and restart Unity. The plugin will be automatically detected and loaded when the engine starts.

#### Step 4: Launch the Plugin

Open the **Windows** menu in Unity and select **Lagomorph Plugin** to launch the interface.
![Lagomorph option in Windows menu](/images/lagomorph_window.png)

This will launch the Lagomorph Editor Window
![Lagomorph plugin interface in Unity](/images/lagomorph_unity.png)

> ✅ **Installation Complete**
>
> You're now ready to start generating 3D models with Lagomorph AI. The plugin interface will appear as a dockable window in your Unity editor.

---

## Quick Start Guide

Let's create your first 3D model. This quick start will walk you through the basic workflow.

### Creating Your First Model

1. Open the Lagomorph Plugin from the Windows menu
2. Enter a description of your desired model (e.g., "a medieval stone fountain")
3. Click the "Morph!" button to begin generation
4. Wait for Lagomorph to process (typically 2-5 minutes)
5. Review the generated results and import to your scene

> ⏱️ **Processing Time**
>
> Generation time varies based on complexity and server load. Feel free to continue working on other aspects of your project while waiting. You'll receive a notification when your model is ready.

---

## Text to 3D Generation

Transform natural language descriptions into fully realized 3D models. This feature is ideal for rapid prototyping and exploring design variations.

### Writing Effective Prompts

The quality of your generated models depends heavily on the clarity and specificity of your prompts. Be specific, include style direction, and specify materials for the best results.

For detailed prompt engineering tips, example prompts, and best practices, see the [Prompt Engineering & Best Practices](features#prompt-engineering--best-practices) guide.

---

## Image to 3D Conversion

Upload reference images or concept art to guide Lagomorph's generation process. This feature is perfect when you have a visual reference but need a 3D implementation.

In Unity, upload your reference image through the Lagomorph Plugin interface and click "Morph!" to begin generation.

For complete guidance on supported image formats, best practices for reference images, and tips for great results, see the **[Image to 3D](features#image-to-3d)** section in Features.

---

## Materials & Textures

After your model is generated in Unity, you can request automatic material and texture generation through the Lagomorph Plugin interface.

For more information about how texture generation works, see the **[Materials & Textures](features#materials--textures)** section in Features.

---

## Workflow

For a complete 6-step workflow from concept to implementation, see the **[Complete Workflow](features#complete-workflow)** in Features. The Unity Plugin follows the same workflow, with the plugin interface handling model import automatically.

---

## Best Practices

### Unity-Specific Tips

- Queue multiple morphs at once to work in parallel
- Continue other development tasks while waiting for results
- Organize generated assets with clear naming conventions

For detailed prompt engineering tips, iteration strategies, and performance optimization advice, see **[Prompt Engineering & Best Practices](features#prompt-engineering--best-practices)** in Features.

---

## Tips & Tricks

> 💡 **Pro Tip: Batch Generation**
>
> Generate multiple variations of the same object simultaneously. This gives you more options to choose from and helps identify the most effective prompts.

### Common Workflows

#### Rapid Prototyping

Use Lagomorph to quickly populate your levels with placeholder assets. Generate variations of props, furniture, and environmental objects to establish the visual direction before final asset production.

#### Concept Exploration

Experiment with different visual styles by generating the same object with varied style descriptions. Compare results to inform your game's art direction.

#### Reference Generation

Create reference models for your art team. Use Lagomorph to explore proportions, silhouettes, and design variations that can guide manual modeling efforts.

---

## Troubleshooting

### Plugin Not Appearing in Windows Menu

- Verify the plugin is installed in the correct Plugins folder
- Ensure you've restarted Unity after installation
- Check the Plugins window (Edit → Plugins) to confirm Lagomorph is enabled

### Import Errors

- Ensure you have write permissions in your Assets folder
- Verify sufficient disk space for asset import
- Check Unity's Console for specific error messages

### General Issues

For troubleshooting unexpected results, generation timing issues, and prompt refinement strategies, see the **[Troubleshooting](features#troubleshooting)** section in Features.

---

## Support

Need help or have questions? We're here to assist!

- **Email:** [hello@lagomorph.ai](mailto:hello@lagomorph.ai)
- **Discord Community:** [Join our Discord](https://discord.gg/RsNwwy3WCc)
- **Documentation:** [https://docs.lagomorph.ai](https://docs.lagomorph.ai)

> **Missing your favourite tool?**
>
> We want to make sure you can run Lagomorph on all your favourite platforms. Let us know where we should go next by emailing us or joining our Discord community!

---

_© Lagomorph AI 2025–2026 • All rights reserved_
