import { triggerAsyncId } from "async_hooks";
import { url } from "inspector";
import swaggerJSDoc from "swagger-jsdoc";
import { serve } from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Events API",
      version: "1.0.0",
      description: "API documentation for Events API",
    },
    servers: [
      process.env.NODE_ENV !== "production"
        ? {
            url: "http://localhost:3000/api",
            description: "Development server",
          }
        : {
            url: "https://event-api-u0p4.onrender.com/api",
            description: "Production server",
          },
    ],
    components: {
      schemas: {
        Event: {
          type: "object",
          properties: {
            name: {
              type: "string",
              description: "Name of the event",
            },
            date: {
              type: "string",
              format: "date",
              description: "Date of the event",
            },
            location: {
              type: "string",
              description: "Location of the event",
            },
            description: {
              type: "string",
              description: "Description of the event",
            },
            isFree: {
              type: "boolean",
              description: "Whether the event is free or not",
            },
          },
        },
        Error: {
          type: "object",
          properties: {
            message: {
              type: "string",
              description: "Error message",
            },
          },
        },
      },
    },
    tags: [
      {
        name: "Events",
        description: "API endpoints for managing events",
      },
    ],
  },
  apis: ["**/*.ts"],
};

export const specs = swaggerJSDoc(options);
