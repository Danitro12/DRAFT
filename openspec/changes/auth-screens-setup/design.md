## Context

The project is currently a basic Expo template with boilerplate assets. The user requires a professional authentication flow (Login, Register, Forgot Password) that is visually premium and architecturally scalable. The design must adhere to a specific dark-themed aesthetic provided in a reference image.

## Goals / Non-Goals

**Goals:**
- Implement a premium dark-themed UI for Login, Register, and Forgot Password.
- Centralize all styles (colors, fonts, spacing) for scalability.
- Clean up the `assets` directory by removing unused boilerplate icons.
- Create a reusable component library (Inputs, Buttons) for consistent UI.
- Establish a navigation structure that separates Auth and App flows.
- Ensure the "Forgot Password" and "Register" flows are logically structured even if mock.

**Non-Goals:**
- Implementing actual backend API calls.
- Implementing social logins (Apple/Google).
- Advanced form validation or security measures.

## Decisions

- **Navigation Architecture**: Use `React Navigation` with a Stack Navigator. Separate `AuthStack` and `AppStack` to handle the transition after login.
- **Styling Strategy**: Create a `src/theme` directory with `colors.js` and `typography.js`. Use these tokens throughout the app to ensure a unified "DRYFT" identity.
- **Component Design**: Build atoms (Input, Button, Logo) in `src/components` to be reused across all screens.
- **Visual Aesthetic**:
    - Background: Deep dark/gradient background.
    - Input Fields: Dark, rounded with subtle borders and clear labels.
    - Primary Button: Bright blue or brand color (based on logo/ref).
    - Typography: Clean, modern sans-serif.
- **Project Structure**:
    - `src/assets`: Store the brand logo and any other curated assets.
    - `src/components`: Reusable UI elements.
    - `src/screens`: Individual pages (Login, Register, ForgotPassword, Home).
    - `src/navigation`: Navigation configuration.

## Risks / Trade-offs

- **Mock Implementation**: Since there is no backend, the "success" states are purely visual. This requires careful coordination later when real logic is added.
- **Scalability vs. Simplicity**: Introducing a full `src` directory and theme system might seem overkill for a small app, but it is necessary for the requested "scalability".
