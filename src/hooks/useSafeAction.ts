"use client";

import { useCallback, useState } from "react";
import { toast } from "sonner"; // Assuming Sonner for toasting

export type ActionResponse<T> =
  | {
      success: true;
      data: T;
      message?: string;
      statusCode?: number;
      error?: undefined;
      fieldErrors?: undefined;
    }
  | {
      success: false;
      message?: string;
      error: string;
      fieldErrors?: Record<string, string[] | undefined>;
      statusCode?: number;
    };

type ServerAction<TInput, TOutput> = (
  input: TInput,
) => Promise<ActionResponse<TOutput>>;

type ActionOptions<TOutput> = {
  /** If true (default), the hook shows a default toast on success/error. */
  showDefaultToast?: boolean;
  /** Custom success message for the toast. Overrides the action's message. */
  successMessage?: string;
  /** Custom error message for the toast. Overrides the action's error/message. */
  errorMessage?: string;
  /** Function to call when the action returns success: true. */
  onSuccess?: (data: TOutput, message?: string) => void;
  /** Function to call when the action returns success: false. */
  onError?: (
    error: string,
    fieldErrors?: Record<string, string[] | undefined>,
  ) => void;
};

type DispatchOptions<TOutput> = ActionOptions<TOutput>;

// --- Implementation: The Client Hook ---

export const useSafeAction = <TInput, TOutput>(
  action: ServerAction<TInput, TOutput>,
  hookOptions: ActionOptions<TOutput> = { showDefaultToast: true }, // Default true
) => {
  type State = ActionResponse<TOutput> | undefined;

  const [state, setState] = useState<State>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useCallback(
    async (input: TInput, dispatchOptions?: DispatchOptions<TOutput>) => {
      setIsLoading(true);
      setState(undefined);

      // Merge options (dispatch > hook > base default)
      const finalOptions: ActionOptions<TOutput> = {
        showDefaultToast: true,
        ...hookOptions,
        ...dispatchOptions,
      };

      try {
        const result = await action(input);
        setState(result);

        if (result.success) {
          // --- SUCCESS HANDLING ---
          const message =
            finalOptions.successMessage ||
            result.message ||
            "Action executed successfully.";

          if (finalOptions.showDefaultToast) {
            toast.success(message);
            // toast.success("Success", {
            //   description: message,
            // });
          }
          finalOptions.onSuccess?.(result.data, message);
        } else {
          // --- ERROR HANDLING (Type Narrowing Applied) ---
          const defaultError = result.error || "An unknown error occurred.";
          const message =
            finalOptions.errorMessage || result.message || defaultError;

          if (finalOptions.showDefaultToast) {
            // For validation errors (400), use a softer message
            const toastMessage = result.fieldErrors
              ? finalOptions.errorMessage ||
                "Validation failed. Check form fields."
              : message;
            // toast.error("Error", {
            //   description: toastMessage,
            // });
            toast.error(toastMessage);
          }
          finalOptions.onError?.(defaultError, result.fieldErrors);
        }

        return result;
      } catch (error) {
        console.error("Critical client-side error executing action:", error);

        const response: ActionResponse<TOutput> = {
          success: false,
          error: "A critical client-side error occurred.",
          message:
            "A critical client-side error occurred. Check the console for details.",
          statusCode: 500,
        } as ActionResponse<TOutput>;

        setState(response);

        // Handle critical error toast/callback
        const message = finalOptions.errorMessage || response.message;
        if (finalOptions.showDefaultToast) {
          toast.error(message);
        }
        finalOptions.onError?.(response?.error as string, response.fieldErrors);
        return response;
      } finally {
        setIsLoading(false);
      }
    },
    [
      action,
      // All hookOptions dependencies
      hookOptions.showDefaultToast,
      hookOptions.successMessage,
      hookOptions.errorMessage,
      hookOptions.onSuccess,
      hookOptions.onError,
    ],
  );

  return { state, isLoading, dispatch };
};
