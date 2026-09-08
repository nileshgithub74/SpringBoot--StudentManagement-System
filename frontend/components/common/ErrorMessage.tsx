const ErrorMessage = ({
    message,
    onRetry,
}: {
    message: string;
    onRetry?: () => void;
}) => (
    <div className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
        <strong>Unable to load this view.</strong> {message}
        {onRetry && (
            <button onClick={onRetry} className="ml-3 font-semibold underline">
                Retry
            </button>
        )}
    </div>
);

export default ErrorMessage;
