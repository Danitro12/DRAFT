## ADDED Requirements

### Requirement: Auth to App Navigation Stack
The application must maintain a separate stack for authentication and the main application.

#### Scenario: Redirect after Auth
- **WHEN** the authentication process (login or register) is marked as "successful".
- **THEN** the navigation state should change to the App stack, showing the Home screen.

### Requirement: Initial Screen Selection
The application must determine which stack to show on startup.

#### Scenario: Default Startup
- **WHEN** the app starts and no user session exists (mock).
- **THEN** the Login screen should be the initial route.
