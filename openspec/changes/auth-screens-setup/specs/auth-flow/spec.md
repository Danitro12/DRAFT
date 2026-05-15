## ADDED Requirements

### Requirement: Login Interface
The application must provide a login screen with fields for Email and Password, and an "Iniciar Sesión" button.

#### Scenario: Visual Parity
- **WHEN** the user opens the app for the first time.
- **THEN** they should see a dark-themed login screen matching the reference image, featuring the DRVFT logo and a primary action button.

### Requirement: Registration Interface
The application must provide a registration screen for creating a new account.

#### Scenario: Account Creation Navigation
- **WHEN** the user clicks on "Crea una" or "Sign Up" from the login screen.
- **THEN** they should be navigated to the registration screen.

### Requirement: Mock Authentication Success
Login and Registration should simulate success states without backend verification.

#### Scenario: Successful Login
- **WHEN** the user enters any email/password and clicks "Iniciar Sesión".
- **THEN** the application should transition to the Home screen.

#### Scenario: Successful Registration
- **WHEN** the user fills out the registration form and clicks "Registrarse".
- **THEN** a success message should be shown, and the user should be redirected to the Login screen or logged in directly.

### Requirement: Forgot Password Interface
The application must provide a way to initiate password recovery.

#### Scenario: Navigation to Recovery
- **WHEN** the user clicks "¿Olvidaste tu contraseña?".
- **THEN** they should be navigated to a password recovery screen.
