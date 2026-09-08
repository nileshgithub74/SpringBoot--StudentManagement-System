const Loader = ({ label = "Loading" }: { label?: string }) => (
    <div className="flex items-center gap-3 text-sm text-[var(--muted)]">
        <span className="loader-dot" />
        {label}
    </div>
);

export default Loader;
