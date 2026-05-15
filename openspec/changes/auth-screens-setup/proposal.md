## Why

This change aims to establish the foundation for user interaction by providing a premium, scalable, and visually appealing authentication flow. It also serves to clean up the initial project template, removing boilerplate assets that are not needed, ensuring a lean and focused codebase from the start.

## What Changes

- Removal of unnecessary boilerplate icons from the `assets` directory (keeping `logo.png`).
- Implementation of a unified styling system (centralized styles) for scalability.
- Creation of a Login screen based on the provided design reference.
- Creation of a Registration (Sign Up) screen.
- Creation of a "Forgot Password" screen.
- Implementation of mock authentication logic that allows users to "log in" or "register" without a backend.
- Creation of a post-login Landing/Home screen (currently a simple blank screen with the logo).
- Basic navigation setup to handle transitions between these screens.

## Capabilities

### New Capabilities
- `auth-flow`: Implementation of the UI and mock logic for Login, Register, and Forgot Password.
- `navigation-setup`: Core navigation structure to move between Auth and App states.

### Modified Capabilities
- `project-cleanup`: Removing default icons and organizing the assets directory.

## Impact

- `assets/`: Cleanup of default Expo icons.
- `App.js`: Updated to include navigation and global styles.
- `src/`: New directory for components, screens, and styles to ensure scalability.
- `package.json`: Addition of necessary navigation dependencies if not already present.
