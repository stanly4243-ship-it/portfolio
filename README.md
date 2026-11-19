# Portfolio

Project source is kept in its own folder:

- [ITCS website experiment](itcs/) — hosted at `/portfolio/itcs/`.

Install with `npm ci --prefix itcs`, run locally with `npm run dev`, and build the complete portfolio with `npm run build`. The GitHub Pages workflow publishes the root project index and each built project.

Official image and character binary assets have text `.base64` copies for connector-based source transport. `scripts/restore-assets.mjs` restores them before building. Microsoft’s MIT licence accompanies the character in the deployed assets.
