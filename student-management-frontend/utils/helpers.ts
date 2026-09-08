import type { ApiErrorResponse } from "@/types/api";
import type { AxiosError } from "axios";

export function getErrorMessage(
  error: unknown,
  fallback = "Something went wrong. Please try again.",
): string {
  const response = (error as AxiosError<ApiErrorResponse>)?.response?.data;
  if (response?.validationErrors)
    return Object.values(response.validationErrors).join(" ");
  if (response?.errors) return Object.values(response.errors).join(" ");
  return (
    response?.message ??
    response?.error ??
    (error instanceof Error ? error.message : fallback)
  );
}

export function formatDate(value: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

export function initials(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
}
