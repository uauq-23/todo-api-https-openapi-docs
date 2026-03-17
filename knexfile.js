import { TodoSchemas } from './schemas/todo-schema.js';
import { UserSchemas } from './schemas/user-schema.js';
import { ErrorSchemas } from './schemas/error-schema.js';

export const components = {
  schemas: {
    ...UserSchemas,
    ...TodoSchemas,
    ...ErrorSchemas,
  },
};