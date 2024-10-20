// /app/utils/queryErrorHandler.ts
export const queryErrorHandler = (error: unknown) => {
  const message =
    error instanceof Error ? error.message : "An unexpected error occurred";
  console.error(message);
};
