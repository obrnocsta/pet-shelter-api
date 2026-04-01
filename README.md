# 🐾 Pet Shelter API

A typed Express.js API built with TypeScript for managing a pet shelter's inventory. Query and retrieve pet information with built-in filtering, custom middleware, and a fully typed request/response system.

## About This Project

**Pet Shelter API** is a learning project that demonstrates building a RESTful API with Express.js and TypeScript. It provides endpoints to browse available pets for adoption, filtered by species, age, adoption status, and more. The API showcases key backend development concepts including typed routes, custom middleware, controllers, and data management.

## Key Features

- **Fully Typed API**: Built with TypeScript for type safety across routes, controllers, and middleware
- **Advanced Filtering**: Query pets by species, age range, and adoption status
- **Custom Middleware**: Request validation (numeric ID checks) and authentication middleware
- **Router Architecture**: Clean separation of concerns using Express routers and controllers
- **CORS Support**: Pre-configured for cross-origin requests
- **Rich Pet Data**: Includes medical records, vaccination history, and adoption tracking

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or your preferred package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/obrnocsta/pet-shelter-api.git
   cd pet-shelter-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

   The server will start at `http://localhost:8000`

## Usage

### Get All Pets

Retrieve a list of all pets in the shelter:

```bash
curl http://localhost:8000/pets
```

**Response:**
```json
[
  {
    "id": 1,
    "name": "Bella",
    "species": "Dog",
    "breed": "Border Collie",
    "age": 3,
    "adopted": false,
    "intakeDate": "2024-06-15T00:00:00.000Z",
    "medicalRecord": {
      "vaccinations": ["Rabies", "Distemper", "Parvovirus"],
      "weightKg": 18.4,
      "microchipId": null
    },
    "photo": "bella-border-collie.jpg"
  },
  ...
]
```

### Filter Pets by Query Parameters

**By Species:**
```bash
curl "http://localhost:8000/pets?species=Dog"
```

**By Adoption Status:**
```bash
curl "http://localhost:8000/pets?adopted=false"
```

**By Age Range:**
```bash
curl "http://localhost:8000/pets?minAge=2&maxAge=5"
```

**Combine Multiple Filters:**
```bash
curl "http://localhost:8000/pets?species=Cat&adopted=false&maxAge=3"
```

### Get a Specific Pet

Retrieve a pet by ID (requires authentication):

```bash
curl "http://localhost:8000/pets/1?password=please"
```

**Note:** This endpoint requires a `password` query parameter set to `"please"` and the pet ID must be numeric.

**Response:**
```json
{
  "id": 1,
  "name": "Bella",
  "species": "Dog",
  "breed": "Border Collie",
  "age": 3,
  "adopted": false,
  ...
}
```

## Project Structure

```
src/
├── index.ts                    # Server entry point & Express setup
├── data/
│   └── pets.ts                 # Pet data & type definitions
├── routes/
│   └── pets.routes.ts          # Route definitions
├── controllers/
│   └── pets.controllers.ts      # Request handlers & business logic
└── middlewares/
    └── pets.middleware.ts       # Custom middleware (auth, validation)
```

## API Endpoints

| Method | Endpoint | Query Parameters | Description |
|--------|----------|------------------|-------------|
| GET | `/pets` | `species`, `adopted`, `minAge`, `maxAge` | List all pets with optional filters |
| GET | `/pets/:id` | `password` | Get a specific pet (requires password="please") |

## Query Parameters

- **`species`** (string): Filter by pet species (e.g., "Dog", "Cat", "Rabbit")
- **`adopted`** (boolean): Filter by adoption status ("true" or "false")
- **`minAge`** (number): Minimum pet age in years
- **`maxAge`** (number): Maximum pet age in years

## Technology Stack

- **Express.js**: Web framework
- **TypeScript**: Language for type safety
- **CORS**: Cross-origin resource sharing
- **dotenv**: Environment variable management
- **tsx**: TypeScript executor for development

## Environment Variables

Create a `.env` file in the root directory to configure:

```env
PORT=8000
```

The API will default to port 8000 if not specified.

## Next Steps & Future Enhancements

This project provides a solid foundation for a shelter management system. Consider these improvements:

- **Database Integration**: Replace the in-memory pet data with SQLite, MySQL, or PostgreSQL
- **Async Operations**: Implement async controllers and error handlers for database queries
- **Frontend Development**: Build a web or mobile frontend to consume this API
- **Additional Endpoints**: Add POST, PUT, and DELETE operations for pet management
- **Validation**: Implement request body validation for new pet entries
- **Error Handling**: Add comprehensive error handling middleware
- **Testing**: Write unit and integration tests for endpoints

## Support & Resources

- **Express.js Documentation**: [expressjs.com](https://expressjs.com/)
- **TypeScript Documentation**: [typescriptlang.org](https://www.typescriptlang.org/)
- **REST API Best Practices**: See comments in the source code for design decisions

## Contributing

Contributions are welcome! To get started:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

---

**Maintainer**: [@obrnocsta](https://github.com/obrnocsta)

Built as a learning project for Express.js and TypeScript fundamentals.
