---
title: Lagomorph Web
layout: page
nav_order: 5
---

# Lagomorph Web

**Morph your ideas into 3D right from your browser. No plugins, no installs, no account required.**

[Open Lagomorph Web](https://app.lagomorph.ai){: .btn .btn-primary } [Join Community](https://discord.gg/RsNwwy3WCc){: .btn }

---

## Overview

Lagomorph Web is the fastest way to start morphing. Open [app.lagomorph.ai](https://app.lagomorph.ai) in your browser and you're ready to go. No downloads, no sign-ups, no setup.

Lagomorph Web is functionally equivalent to our Unity and Unreal Engine plugins. It uses the same AI backend and produces the same quality output. The difference is simply the interface: instead of working inside a game engine editor, you work in your browser and download the results.

This makes Lagomorph Web ideal for:

- **Trying Lagomorph for the first time**: zero friction, instant access
- **Working outside a game engine**: concept exploration, asset pipelines, or use with Blender/Godot
- **Quick morphs on the go**: any device with a modern browser

> Lagomorph is currently in **Beta** across all platforms (Lagomorph Web, Unity Plugin, and Unreal Engine Plugin). We're actively improving it based on community feedback. If you run into issues or have suggestions, reach out on [Discord](https://discord.gg/RsNwwy3WCc) or email us at [hello@lagomorph.ai](mailto:hello@lagomorph.ai).

---

## Getting Started

1. Open [app.lagomorph.ai](https://app.lagomorph.ai) in your browser
2. Choose your generation mode (Image to 3D or Text to 3D)
3. Upload an image or enter a text prompt
4. Click **Generate**
5. Download your model when it's ready

That's it. No account needed, no sign-up required.

<!-- TODO: screenshot webapp_main.png — main interface when you open app.lagomorph.ai -->

---

## Image to 3D

Upload a reference image and Lagomorph will morph it into a 3D model. This is the more mature generation mode and generally produces the best results.

### How It Works

1. Select **Image to 3D** mode
2. Upload your reference image
3. Optionally enable **Simplify** to reduce face count
4. Click **Generate**
5. Wait for processing (typically 2–5 minutes)
6. Review your result and download

For complete guidance on supported image formats, best practices for reference images, and tips for great results, see the **[Image to 3D](features#image-to-3d)** section in Features.

<!-- TODO: screenshot webapp_image_to_3d.png — image-to-3D generation interface -->

---

## Text to 3D (Preview)

Describe what you want in plain language and Lagomorph will morph it into a 3D model.

> **Preview Feature**
>
> Text to 3D is still in an early preview phase. Inorganic objects (props, weapons, furniture, architecture) currently produce the best results. We're actively working on improving quality across the board.

### How It Works

1. Select **Text to 3D** mode
2. Type a description of the model you want
3. Optionally enable **Simplify** to reduce face count
4. Click **Generate**
5. Wait for processing
6. Review your result and download

For detailed tips on writing effective prompts, see the [Prompt Engineering & Best Practices](features#prompt-engineering--best-practices) guide.

<!-- TODO: screenshot webapp_text_to_3d.png — text-to-3D generation interface -->

---

## Materials & Textures

After your model is generated, you can request automatic material and texture generation. Lagomorph will analyze the geometry and create appropriate surface materials based on your original prompt or reference image.

1. Generate your 3D model first
2. Review the mesh to make sure you're happy with the shape
3. Request material generation as a post-processing step
4. Download the model with textures included

For more information about materials and textures, see the **[Materials & Textures](features#materials--textures)** section in Features.

---

## Downloading & Exporting

Lagomorph Web supports exporting in both major 3D formats:

| Format  | Best For                                 |
| ------- | ---------------------------------------- |
| **FBX** | Unity, Blender, most 3D software         |
| **OBJ** | Unreal Engine, Blender, most 3D software |

Both formats include the mesh and any generated textures.

### Importing into Game Engines

After downloading from Lagomorph Web, you can import the files into your engine of choice:

**Unity**: Drag the downloaded FBX file into your Unity project's Assets folder. Unity will automatically import the mesh and textures. For a full in-editor workflow, check out the [Unity Plugin](unity).

**Unreal Engine**: Use the Import button in the Content Browser to bring in the downloaded OBJ file. For a full in-editor workflow, check out the [Unreal Engine Plugin](unreal).

**Blender**: Use File → Import to load either FBX or OBJ files directly.

**Godot**: Import FBX or OBJ files through the editor's import system.

---

## Best Practices

- **Use Image to 3D when you can**: it's the more mature mode and gives more predictable results
- **Enable Simplify** for game-ready meshes unless you specifically need high-poly output
- **Request materials** to see how your model will actually look in-game

For a complete 6-step workflow from concept to implementation, see the **[Complete Workflow](features#complete-workflow)** in Features.

For iteration strategies, prompt engineering tips, and performance optimization advice, see **[Prompt Engineering & Best Practices](features#prompt-engineering--best-practices)** in Features.

For information about monthly morph limits and tips to maximize your usage, see [Usage Limits](usage-limits).

Interested in higher limits and professional features? Check out [Lagomorph Pro](lagomorph-pro).

---

## Troubleshooting

### Generation Seems Stuck

If the progress indicator isn't moving:

- Refresh the page. Your morph continues to process server-side
- Try a different browser if the issue persists
- Check your internet connection

### Download Not Working

- Check your browser's download settings and pop-up blocker
- Try right-clicking the download button and selecting "Save As"
- Ensure you have sufficient disk space

### General Issues

For troubleshooting unexpected results, generation timing issues, and prompt refinement strategies, see the **[Troubleshooting](features#troubleshooting)** section in Features.

For any other issues, reach out to us at [hello@lagomorph.ai](mailto:hello@lagomorph.ai) or on [Discord](https://discord.gg/RsNwwy3WCc).

---

## Support

Need help or have feedback? We're a small team and we read every message.

- **Email:** [hello@lagomorph.ai](mailto:hello@lagomorph.ai)
- **Discord Community:** [Join our Discord](https://discord.gg/RsNwwy3WCc)
- **Documentation:** [docs.lagomorph.ai](https://docs.lagomorph.ai)

> **Missing a feature?**
>
> We build Lagomorph based on what game developers actually need. If there's something you'd love to see, tell us on Discord or email, it genuinely shapes our roadmap.

---

_© Lagomorph AI 2025–2026 • All rights reserved_
