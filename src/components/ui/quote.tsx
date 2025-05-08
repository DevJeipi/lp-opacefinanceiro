export function Quote({ children }: { children: React.ReactNode }) {
    return (
        <div className="mx-auto flex max-w-md items-stretch text-left">
            <div className="bg-gradient-animated w-1 rounded-s" />
            <div className="bg-primary-black/10 font-body flex w-full items-center justify-center p-2 md:p-4">
                <p className="text-primary-black leading-relaxed">{children}</p>
            </div>
        </div>
    )
}
