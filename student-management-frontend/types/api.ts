export interface ApiErrorResponse {
  message?: string;
  error?: string;
  validationErrors?: Record<string, string>;
  errors?: Record<string, string>;
}

export interface PaginatedResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  number: number;
  size: number;
}
