# memora
A cross-platform AI-powered memory &amp; legacy app that lets people preserve, relive, and feel connected to their loved ones whether they're gone or just far away.

To support the cross-platform ecosystem of Memora, we need to initialize a monorepo workspace. This architecture will house our React Native mobile client, Next.js web application, Node.js API Gateway, and FastAPI AI microservice. 

The goal is to cleanly separate concerns while allowing code sharing (like TypeScript types and linting configurations) across the JavaScript/TypeScript environments, and isolating the Python processing environment.

## Acceptance Criteria
- A monorepo tool (e.g., Turborepo or Yarn Workspaces) is initialized at the root.
- The `apps/` directory is created and populated with placeholder directories for `mobile`, `web`, `api-gateway`, and `ai-service`.
- The `packages/` directory is created for shared configurations (ESLint, TypeScript, Shared Types).
- Root-level configuration files (`package.json`, `.gitignore`, `docker-compose.yml`) are scaffolded.
- The project successfully passes a dry-run build command without directory path errors.

## Implementation Tasks

### 1. Root Setup
* **Monorepo Manager:** Initialize the repository and configure the monorepo workspace manager (Turborepo/Yarn).
* **Gitignore:** Add a global `.gitignore` covering Node, Python (PyCache/Virtualenvs), OS files, and React Native builds.
* **Docker:** Create a skeletal `docker-compose.yml` to define local orchestration for the API Gateway, AI Service, and databases.

### 2. Scaffold `apps/` Directory
* **`apps/mobile` (React Native):** Create standard folders (`src/components`, `src/screens`, `src/navigation`, `src/services`, `src/store`).
* **`apps/web` (Next.js):** Create App Router folders (`src/app`, `src/components`, `src/lib`, `src/hooks`).
* **`apps/api-gateway` (Node.js):** Create backend structure (`src/controllers`, `src/routes`, `src/models`, `src/services`, `src/middlewares`).
* **`apps/ai-service` (FastAPI):** Create Python service structure (`app/api`, `app/core`, `app/llm`, `app/models`, `app/services`) and add a `requirements.txt`.

### 3. Scaffold `packages/` Directory
* **`packages/shared-types`:** Initialize a standard `index.ts` and `package.json` for unified DB schemas and DTOs.
* **`packages/config-eslint`:** Set up the base ESLint configuration for the JS/TS ecosystem.
* **`packages/config-typescript`:** Set up the base `tsconfig.json` configurations.

---

## Technical Notes
* Keep the `ai-service` completely independent in its dependency management (Python environment) from the root `package.json`. It will only be orchestrated alongside the Node ecosystem via Docker.
* Ensure naming conventions in `shared-types` are strictly defined early, as both the mobile and web clients will rely heavily on these DTOs for API communication with the Node gateway.