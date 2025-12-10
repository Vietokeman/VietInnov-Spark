# Vietnam History Landing Page - GSAP Refactor

## ✨ GSAP Features Implemented

### Advanced Animations
- **ScrollSmoother**: Buttery smooth scrolling experience
- **ScrollTrigger**: Advanced scroll-based animations with parallax
- **TextPlugin**: Dynamic text animations
- **DrawSVGPlugin**: SVG path drawing animations
- **3D Transforms**: Perspective and rotation effects

### Custom Hooks
- `useGSAP`: Context-based GSAP animations
- `useScrollTriggerAnimation`: Scroll-triggered animations
- `useParallax`: Parallax scrolling effects
- `useHoverAnimation`: Interactive hover states

### Animation Features
1. **Hero Section**
   - Staggered title word animations with 3D rotation
   - Elastic button entrance
   - Continuous floating animations
   - Parallax backgrounds
   - Sparkle effects

2. **Scroll Animations**
   - Section-based stagger animations
   - Parallax backgrounds
   - Toggle actions on scroll
   - Smooth scrubbing

3. **Interactive Elements**
   - Hover effects with GSAP
   - Click animations
   - Timeline-based sequences

## 🚀 Usage

```bash
npm install
npm run dev
```

## 📚 GSAP Plugins Used
- gsap-core
- ScrollTrigger
- ScrollSmoother
- TextPlugin
- DrawSVGPlugin
- All plugins located in `src/lib/gsap/`

## 🎨 Animation Patterns
- Entrance animations: `power3.out` easing
- Continuous animations: `sine.inOut` with yoyo
- Interactive animations: `back.out(1.7)` for elastic effect
- Scroll animations: Scrub for smooth parallax

## 📖 Resources
- [GSAP Documentation](https://gsap.com/docs/v3/)
- [ScrollTrigger Demos](https://gsap.com/docs/v3/Plugins/ScrollTrigger)
- [GSAP Cheat Sheet](https://gsap.com/cheatsheet/)
