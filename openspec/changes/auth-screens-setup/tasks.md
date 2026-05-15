## 1. Project Cleanup and Initial Setup

- [x] 1.1 Remove unused icons (`adaptive-icon.png`, `favicon.png`, `icon.png`, `splash-icon.png`) from `assets/`.
- [x] 1.2 Create directory structure: `src/assets`, `src/components`, `src/screens`, `src/navigation`, `src/theme`.
- [x] 1.3 Install navigation dependencies: `@react-navigation/native`, `@react-navigation/stack`, `react-native-screens`, `react-native-safe-area-context`.

## 2. Design System and Reusable Components

- [x] 2.1 Define theme tokens in `src/theme/` (colors, spacing, typography).
- [x] 2.2 Create a reusable `BrandLogo` component using `assets/logo.png`.
- [x] 2.3 Create a reusable `CustomInput` component with labels and modern styling.
- [x] 2.4 Create a reusable `CustomButton` component for primary and secondary actions.

## 3. Screen Implementation

- [x] 3.1 Implement `LoginScreen` with the layout and aesthetic of the reference image.
- [x] 3.2 Implement `RegisterScreen` with fields for Name, Email, Password, and Password Confirmation.
- [x] 3.3 Implement `ForgotPasswordScreen` with an Email field and recovery instructions.
- [x] 3.4 Implement a simple `HomeScreen` (blank screen with logo in center).

## 4. Navigation and Mock Logic

- [x] 4.1 Configure `AuthNavigator` to handle Login, Register, and ForgotPassword screens.
- [x] 4.2 Configure `AppNavigator` for the main application (Home screen).
- [x] 4.3 Update `App.js` to manage the root navigation state.
- [x] 4.4 Add mock login/register handlers that navigate to the Home screen on success.
