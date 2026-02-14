---
title: Troubleshooting & FAQs
layout: page
nav_order: 8
---

# Troubleshooting & FAQs

## Table of Contents
{: .no_toc }

- TOC
{:toc}

Having trouble? Check below for common questions and solutions. If you can't find what you're looking for, reach out to us at [hello@lagomorph.ai](mailto:hello@lagomorph.ai) or on [Discord](https://discord.gg/RsNwwy3WCc).

---

## Frequently Asked Questions

**Are there any usage limits?**
Yes. See [Usage Limits](usage-limits) for details on monthly morph limits and how they work.

**Why is there a quality difference between morph methods?**
Image to 3D uses our Morph Core generation pipeline and produces the most reliable results. Text to 3D is still in preview and uses a lighter method while we gather feedback and improve it. Quality improvements to Text to 3D are actively in development.

**Why are my models gray?**
By default, generated meshes don't have materials added. Materials can be added as a post-generation step. Look for the material generation option after your mesh is ready. See [Materials & Textures](features#materials--textures) for details.

**Can I use generated assets in commercial projects?**
Yes. Assets generated with Lagomorph are owned by you and can be used in commercial projects. See [Best Practices & Ethics](ethics) for full details.

---

## Common Issues

### Lagomorph Web

**Generation seems stuck or spinner won't stop**

- Refresh the page, as your morph continues processing server-side and won't be lost
- Check your internet connection

**Download not working**

- Check your browser's download settings and pop-up blocker
- Ensure you have sufficient disk space

### Unity Plugin

**Plugin not appearing in the Windows menu**

- Ensure you restarted Unity after importing the plugin package
- Check Edit → Project Settings → Plugins to verify Lagomorph is enabled
- Verify you're running Unity 6.x or higher

**Import errors on generated assets**

- Check Unity's Console window for specific error messages
- Ensure you have write permissions in your Assets folder
- Verify sufficient disk space

### Unreal Engine Plugin

**Plugin not appearing in the Tools menu**

- Verify the plugin is enabled in Edit → Plugins
- Restart the editor after enabling
- Verify you're running Unreal Engine 5.6 or higher

**Assets not importing correctly**

- Check the Output Log for specific error details
- Ensure sufficient disk space
- Verify write permissions in your Content folder

---

## Performance Tips

- Unless you specifically need a high-fidelity mesh, enable the **Simplify** option. It produces lighter, game-ready models
- Our current focus is on generating inorganic game elements. You'll get the best quality results with props, weapons, furniture, architecture, and vehicles
- Use **Image to 3D** when possible: it produces more reliable results than Text to 3D in its current preview state
- Queue multiple morphs and continue working on other tasks while they process

---

## Still Need Help?

- **Email:** [hello@lagomorph.ai](mailto:hello@lagomorph.ai)
- **Discord:** [Join our community](https://discord.gg/RsNwwy3WCc)

---

_© Lagomorph AI 2025–2026 • All rights reserved_
