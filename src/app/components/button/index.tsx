
export function Button({ children,}: { children: React.ReactNode }) {
    return (
        <button className="flex items-center justify-center gap-2 px-4 py-2 text-md rounded-lg font-bold focus:outline-none">
            {children}
        </button>
    )
}