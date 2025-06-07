export function Line() {
    return (
        <>
            <div className="flex w-full items-center justify-center gap-4">
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect width="40" height="40" rx="20" fill="#74412F" />
                    <circle
                        cx="20"
                        cy="20"
                        r="4.5"
                        stroke="#EB561F"
                        strokeWidth="3"
                    />
                    <rect
                        x="1"
                        y="1"
                        width="38"
                        height="38"
                        rx="19"
                        stroke="#FF875B"
                        strokeWidth="2"
                    />
                </svg>
                <div className="bg-primary-white/80 h-0.25 w-full"></div>
            </div>
        </>
    )
}
