# Student Management System

A full-stack student management application built with Spring Boot, Java, MySQL, Next.js, TypeScript, Tailwind CSS, and Axios.

The backend provides REST APIs for student management. The frontend consumes those APIs through a responsive Next.js interface.

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

## Technology Stack

### Backend

- Java
- Spring Boot
- Spring Data JPA
- MySQL
- Bean Validation
- REST APIs
- Maven Wrapper

### Frontend

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Axios
- Responsive UI

## Prerequisites

- Java 17 or later
- Node.js 20 or later
- MySQL

## Run the Backend

Configure MySQL in `Java backend/src/main/resources/application.properties`, then run:

```powershell
cd "Java backend"
.\mvnw.cmd spring-boot:run
```

The backend runs at `http://localhost:8080`.

Student API base URL:

```text
http://localhost:8080/api/students
```

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

## Frontend API Flow

```text
User
    -> Next.js page
    -> React component
    -> Student service
    -> Axios
    -> Spring Boot controller
    -> Spring service
    -> JPA repository
    -> MySQL
```

The response travels back through the same layers and is rendered by the reusable frontend components.

## Main Pages

- `/dashboard`
- `/students`
- `/students/add`
- `/students/{id}`
- `/students/{id}/edit`

## Student API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/api/students` | Get all students |
| GET | `/api/students/{id}` | Get one student |
| POST | `/api/students` | Create a student |
| PUT | `/api/students/{id}` | Update a student |
| DELETE | `/api/students/{id}` | Delete a student |
| GET | `/api/students/search?name={name}` | Search by name |
| GET | `/api/students/filter?age={age}` | Filter by age |
| GET | `/api/students/filter/course?course={course}` | Filter by course |

## Repository Notes

Generated dependencies, build output, environment files, and IDE metadata are excluded through `.gitignore`.