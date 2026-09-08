# Student Management System

Full-stack student management system with a Spring Boot backend and Next.js frontend.

## Structure

```text
SpringBoot--StudentManagement-System/
|-- Java backend/
|   |-- pom.xml
|   |-- mvnw
|   |-- mvnw.cmd
|   |-- .mvn/
|   `-- src/
`-- frontend/
    |-- app/
    |-- components/
    |-- services/
    |-- hooks/
    |-- types/
    |-- utils/
    |-- lib/
    |-- package.json
    `-- package-lock.json
```

## Run the Backend

Configure MySQL in `Java backend/src/main/resources/application.properties`, then run:

```powershell
cd "Java backend"
./mvnw.cmd spring-boot:run
```

The API runs at `http://localhost:8080`.

## Run the Frontend

```powershell
cd frontend
npm install
npm run dev
```

The frontend runs at `http://localhost:3000`.

Create `frontend/.env.local`:

```env
NEXT_PUBLIC_API_URL=/api
```

The Next.js development proxy forwards `/api/*` to the Spring Boot API.

## Main Pages

- `/dashboard`
- `/students`
- `/students/add`
- `/students/{id}`
- `/students/{id}/edit`