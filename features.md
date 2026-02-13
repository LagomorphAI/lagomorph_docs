---
title: Features
layout: page
nav_order: 3
---

# Features

This page applies across all Lagomorph platforms: [Lagomorph Web](web), the [Unity Plugin](unity), and the [Unreal Engine Plugin](unreal).

---

## Generation Modes

### Image to 3D

Upload a reference image and Lagomorph will morph it into a 3D model. This is the more mature generation mode and generally produces the strongest results.

**Supported image formats:** PNG, JPEG, BMP, SVG

Lagomorph interprets the shape, proportions, and details in your image to construct a 3D mesh. Clear, well-lit images of single objects against simple backgrounds produce the best output.

### Text to 3D _(Preview)_

Describe what you want in plain language and Lagomorph will morph it into a 3D model.

This feature is still in a preview phase, as we're actively working on improving quality. Current strengths:

- **Inorganic objects** produce the best results (props, weapons, furniture, architecture, vehicles)
- **Specific, descriptive prompts** outperform vague ones
- **Style keywords** help guide the output (e.g. "low-poly", "realistic", "stylized")

See the [Prompt Engineering & Best Practices](#prompt-engineering--best-practices) section below for detailed guidance.

---

## Morphing Parameters

### Simplify

Automatically reduces the number of faces on the output model, producing a lighter mesh that's easier to load and render in real-time.

- **When to enable:** Most of the time. Game-ready assets benefit from cleaner, more efficient meshes. This is especially important for mobile games or scenes with many objects.
- **When to disable:** If you need maximum geometric detail and plan to handle mesh optimization yourself in your 3D editor.

---

## Post-Processing Tools

### Material Generation

After generating a 3D mesh, you can request automatic material and texture generation as a post-processing step. Lagomorph analyzes the geometry and your original prompt or reference image to create appropriate surface materials.

Generated materials include:

- **Base Color / Albedo Map**: the surface color and pattern
- **Normal Map**: surface detail and bumps without adding extra geometry
- **Roughness Map**: controls how shiny or matte different parts of the surface appear
- **Metallic Map**: defines which parts of the surface are metallic (when appropriate)

UV mapping is handled automatically. You can use the generated textures as-is or modify them in your preferred image editor or 3D software.

> **Why are my models gray?**
>
> By default, generated meshes don't include materials or textures. Materials are added as a separate post-generation step. This lets you review the mesh shape before committing to texture generation.

---

## Export

### Supported Formats

| Format  | Lagomorph Web | Unity Plugin | Unreal Plugin |
| ------- | ------------- | ------------ | ------------- |
| **FBX** | Yes           | Yes          | -             |
| **OBJ** | Yes           | -            | Yes           |

**FBX** is the native format for Unity and is widely supported across 3D software including Blender, Maya, and 3ds Max.

**OBJ** is the native format for Unreal Engine and is also universally supported. It's a simpler format that works well for static meshes.

Both formats include the mesh geometry and any generated texture files.

> **Using Lagomorph Web?** You can export in either format, which makes Lagomorph Web a good choice when you need flexibility, for example, if you work across multiple engines or want to import into Blender.

---

## Prompt Engineering & Best Practices

These tips apply across all Lagomorph platforms, Lagomorph Web and plugins alike.

### Writing Effective Text Prompts

#### Be Specific

Instead of: "a sword"

Try: "a medieval longsword with ornate crossguard and leather-wrapped handle"

#### Include Style Direction

```
"a cartoon-style submarine with rounded edges and bright colors"
"a photorealistic vintage radio with brass dials and wooden cabinet"
"a low-poly stylized tree suitable for mobile games"
```

#### Specify Materials

```
"a rusty iron gate with peeling paint"
"a polished marble statue"
"a wooden barrel with metal bands"
```

### Example Prompts

| Category     | Example Prompt                                        | Use Case               |
| ------------ | ----------------------------------------------------- | ---------------------- |
| Props        | "a Victorian street lamp with ornate metalwork"       | Environment decoration |
| Weapons      | "a futuristic energy rifle with glowing blue accents" | Player equipment       |
| Vehicles     | "a military helicopter with camouflage paint"         | Transportation         |
| Architecture | "a medieval stone well with wooden bucket"            | Level design           |

### Tips for Image to 3D

- **Use high-resolution images**: minimum 1024x1024 recommended
- **Keep backgrounds clean**: simple or transparent backgrounds work best
- **Good lighting matters**: well-lit subjects with clear details translate better to 3D
- **Single objects work best**: one clear subject per image gives Lagomorph the best chance
- **Avoid complex backgrounds**: busy or cluttered backgrounds can confuse the interpretation

### General Best Practices

- **Start with broad descriptions**, then add specific details in subsequent morphs
- **Include material descriptions**: wood, metal, stone, fabric, etc.
- **Mention scale or size** when it's relevant to the result
- **Generate multiple variations**: morph the same prompt several times and pick the best result
- **Start with simpler objects** before tackling complex assemblies
- **Keep track of effective prompts** for reuse across your project

---

## Usage Limits

For information about monthly morph limits and how to maximize your usage, see [Usage Limits](usage-limits).

Looking for increased limits? Check out [Lagomorph Pro](lagomorph-pro).

---

## Known Limitations

We believe in being upfront about where things stand:

- **Text to 3D is in preview**: quality is improving but not yet at the level of Image to 3D
- **Inorganic objects work best**: props, weapons, furniture, and architecture produce the strongest results
- **Single objects only**: the system works best for individual objects rather than complex multi-part scenes
- **Processing times vary**: generation typically takes 2–5 minutes but may be longer during peak usage

---

_© Lagomorph AI 2025–2026 • All rights reserved_
