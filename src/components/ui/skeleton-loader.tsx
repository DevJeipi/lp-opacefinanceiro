export function HeroSectionSkeleton() {
    return (
        <section className="relative animate-pulse">
            {/* Header skeleton */}
            <div className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <div className="mr-3 h-8 w-8 rounded-lg bg-gray-200"></div>
                            <div className="h-6 w-32 rounded bg-gray-200"></div>
                        </div>
                        <div className="hidden space-x-4 md:flex">
                            {[...Array(5)].map((_, i) => (
                                <div
                                    key={i}
                                    className="h-4 w-16 rounded bg-gray-200"
                                ></div>
                            ))}
                        </div>
                        <div className="hidden space-x-2 md:flex">
                            <div className="h-8 w-16 rounded bg-gray-200"></div>
                            <div className="h-8 w-20 rounded bg-gray-200"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background image skeleton */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200"></div>

            {/* Hero image area */}
            <div className="relative flex h-80 w-full items-center justify-center md:h-120">
                <div className="xs:w-64 absolute -z-10 h-full w-48 rounded-lg bg-gray-300 md:w-80"></div>
                <div className="absolute top-20 -z-20 h-32 w-32 rounded-full bg-gray-200 blur-xl md:top-35"></div>
            </div>

            {/* Content area */}
            <div className="mt-[-8rem] flex w-full flex-col items-center justify-center bg-gradient-to-b from-gray-400 to-gray-500 text-center">
                <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
                    <div className="mb-4 space-y-4">
                        {/* Title skeleton */}
                        <div className="space-y-2">
                            <div className="mx-auto h-8 w-3/4 rounded bg-white/20"></div>
                            <div className="mx-auto h-8 w-2/3 rounded bg-white/20 md:hidden"></div>
                        </div>
                        {/* Subtitle skeleton */}
                        <div className="space-y-2">
                            <div className="mx-auto h-5 w-5/6 rounded bg-white/15"></div>
                            <div className="mx-auto h-5 w-4/5 rounded bg-white/15"></div>
                        </div>
                    </div>
                    {/* Button skeleton */}
                    <div className="mb-8 flex w-full items-center justify-center">
                        <div className="h-12 w-48 rounded-full bg-white/20"></div>
                    </div>
                </div>
                {/* Bottom curve */}
                <div className="h-8 w-full rounded-t-full bg-white"></div>
            </div>
        </section>
    )
}

export function PersuasiveSectionSkeleton() {
    return (
        <section className="animate-pulse bg-white">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mb-8 flex w-full flex-col items-center justify-center gap-8">
                    {/* Header section */}
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        {/* Icon skeleton */}
                        <div className="h-8 w-8 rounded bg-orange-200"></div>

                        {/* Title skeleton */}
                        <div className="space-y-2">
                            <div className="mx-auto h-8 w-48 rounded bg-gray-200"></div>
                            <div className="mx-auto h-8 w-56 rounded bg-gray-200"></div>
                        </div>

                        {/* Description skeleton */}
                        <div className="w-full max-w-md space-y-2">
                            <div className="h-4 w-full rounded bg-gray-200"></div>
                            <div className="mx-auto h-4 w-5/6 rounded bg-gray-200"></div>
                            <div className="mx-auto h-4 w-4/5 rounded bg-gray-200"></div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="h-0.5 w-full rounded-full bg-orange-200"></div>

                    {/* List items skeleton */}
                    <div className="flex w-full flex-col items-center justify-center gap-6 sm:w-3/4 md:w-2/3 lg:w-1/2">
                        {[...Array(4)].map((_, i) => (
                            <div
                                key={i}
                                className="flex w-full flex-col items-center justify-center gap-6 text-center"
                            >
                                <div className="w-full space-y-4">
                                    <div className="flex flex-col items-center gap-2">
                                        {/* Icon skeleton */}
                                        <div className="h-6 w-6 rounded bg-orange-200"></div>
                                        {/* Item title skeleton */}
                                        <div className="h-6 w-40 rounded bg-gray-200"></div>
                                    </div>
                                    {/* Item description skeleton */}
                                    <div className="w-full space-y-2 px-8">
                                        <div className="h-4 w-full rounded bg-gray-200"></div>
                                        <div className="mx-auto h-4 w-5/6 rounded bg-gray-200"></div>
                                        <div className="mx-auto h-4 w-4/5 rounded bg-gray-200"></div>
                                    </div>
                                </div>
                                {/* Divider between items */}
                                {i < 3 && (
                                    <div className="h-0.5 w-full rounded-full bg-orange-100"></div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Bottom divider */}
                    <div className="h-0.5 w-full rounded-full bg-orange-200"></div>
                </div>

                {/* CTA Button skeleton */}
                <div className="flex justify-center">
                    <div className="h-12 w-48 rounded-full bg-gray-200"></div>
                </div>
            </div>
        </section>
    )
}

export function BenefitsSectionSkeleton() {
    return (
        <section className="animate-pulse rounded-br-4xl bg-white">
            <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center p-0 px-4 pt-48 sm:px-6 md:flex-row md:px-8 lg:px-8 lg:py-6">
                {/* Image skeleton */}
                <div className="absolute z-20 -translate-y-11/12 lg:-translate-x-3/4 lg:-translate-y-0">
                    <div className="h-80 w-80 rounded-lg bg-gray-200 lg:h-112 lg:w-112"></div>
                </div>

                {/* Card skeleton */}
                <div className="relative z-10 w-full max-w-2xl rounded-tl-4xl rounded-tr-none rounded-br-4xl rounded-bl-none bg-blue-200 pt-32 lg:pt-6 lg:pr-8 lg:pl-48">
                    <div className="space-y-6 p-6">
                        {/* Title skeleton */}
                        <div className="space-y-3">
                            <div className="mx-auto h-8 w-3/4 rounded bg-white/30 lg:mx-0"></div>
                            <div className="mx-auto h-8 w-2/3 rounded bg-white/30 lg:mx-0"></div>
                            <div className="mx-auto h-6 w-32 rounded bg-white/20 lg:mx-0"></div>
                        </div>

                        {/* Description skeleton */}
                        <div className="space-y-2">
                            <div className="h-4 w-full rounded bg-white/20"></div>
                            <div className="mx-auto h-4 w-3/4 rounded bg-white/20 lg:mx-0"></div>
                        </div>

                        {/* Benefits list skeleton */}
                        <div className="space-y-4">
                            {[...Array(4)].map((_, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 rounded-full bg-white/90 px-3 py-2"
                                >
                                    <div className="h-6 w-6 rounded-full bg-orange-200"></div>
                                    <div className="h-4 flex-1 rounded bg-gray-200"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function GuaranteeSectionSkeleton() {
    return (
        <section className="animate-pulse bg-white">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-4 py-16 sm:px-6 lg:px-8">
                {/* Header skeleton */}
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="h-8 w-8 rounded bg-orange-200"></div>
                    <div className="h-8 w-64 rounded bg-gray-200"></div>
                </div>

                {/* Guarantee card skeleton */}
                <div className="flex w-full max-w-md flex-col items-center justify-center gap-8 rounded-tr-4xl rounded-bl-4xl bg-blue-200 px-4 py-8">
                    {/* Badge skeleton */}
                    <div className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2">
                        <div className="h-2 w-2 rounded-full bg-orange-200"></div>
                        <div className="h-4 w-16 rounded bg-white/30"></div>
                    </div>

                    {/* Days skeleton */}
                    <div className="space-y-4 text-center">
                        <div className="mx-auto h-16 w-20 rounded bg-white/30"></div>
                        <div className="space-y-2">
                            <div className="h-4 w-48 rounded bg-white/20"></div>
                            <div className="h-4 w-40 rounded bg-white/20"></div>
                            <div className="h-4 w-32 rounded bg-white/20"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function ListSectionSkeleton() {
    return (
        <section className="animate-pulse bg-blue-50">
            <div className="rounded-br-4xl bg-white">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-6 px-4 py-16 sm:px-6 lg:px-8">
                    {/* Header skeleton */}
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="h-8 w-8 rounded bg-orange-200"></div>
                        <div className="h-4 w-48 rounded bg-gray-300"></div>
                        <div className="space-y-2">
                            <div className="h-8 w-56 rounded bg-gray-200"></div>
                            <div className="h-8 w-48 rounded bg-gray-200"></div>
                        </div>
                    </div>

                    {/* Mobile list skeleton */}
                    <div className="flex w-full flex-col items-center justify-center md:hidden">
                        <div className="flex w-full max-w-md flex-col gap-4">
                            {[...Array(4)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`flex items-center justify-start gap-6 rounded-tl-3xl rounded-br-3xl px-9 py-6 ${
                                        i % 2 === 0
                                            ? 'bg-blue-200'
                                            : 'bg-blue-50'
                                    }`}
                                >
                                    <div className="h-9 w-9 rounded bg-orange-200"></div>
                                    <div className="h-4 flex-1 rounded bg-white/50"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Desktop timeline skeleton */}
                    <div className="relative hidden w-full max-w-4xl md:block">
                        <div className="absolute top-0 left-1/2 z-0 h-full w-0.5 -translate-x-1/2 bg-blue-200"></div>
                        <div className="relative z-10 grid grid-cols-2 grid-rows-4 gap-8">
                            {[...Array(4)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`flex items-center ${i % 2 === 0 ? 'justify-end' : 'justify-start'}`}
                                >
                                    {i % 2 === 0 ? (
                                        <>
                                            <div className="flex w-80 flex-col items-center justify-center gap-2 rounded-tr-2xl rounded-bl-2xl bg-blue-200 px-4 py-6">
                                                <div className="h-9 w-9 rounded bg-orange-200"></div>
                                                <div className="h-4 w-3/4 rounded bg-white/50"></div>
                                            </div>
                                            <div className="h-0.5 w-12 bg-blue-200"></div>
                                            <div className="h-6 w-6 rounded-full bg-orange-200"></div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="h-6 w-6 rounded-full bg-orange-200"></div>
                                            <div className="h-0.5 w-12 bg-blue-200"></div>
                                            <div className="flex w-80 flex-col items-center justify-center gap-2 rounded-tr-2xl rounded-bl-2xl bg-blue-200 px-4 py-6">
                                                <div className="h-9 w-9 rounded bg-orange-200"></div>
                                                <div className="h-4 w-3/4 rounded bg-white/50"></div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Button skeleton */}
                    <div className="h-12 w-48 rounded-full bg-gray-200"></div>
                </div>
            </div>
        </section>
    )
}

export function PricingSectionSkeleton() {
    return (
        <section className="animate-pulse bg-white">
            <div className="rounded-tl-4xl rounded-br-4xl bg-blue-50">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-12 px-4 py-16 text-center sm:px-6 lg:px-8">
                    {/* Title skeleton */}
                    <div className="space-y-2">
                        <div className="h-6 w-48 rounded bg-gray-300"></div>
                        <div className="h-8 w-56 rounded bg-blue-200"></div>
                        <div className="h-6 w-40 rounded bg-gray-300"></div>
                    </div>

                    {/* Comparison card skeleton */}
                    <div className="w-full max-w-md rounded-lg border border-red-200 bg-white shadow-sm">
                        <div className="space-y-4 p-6 text-center">
                            <div className="mx-auto h-6 w-3/4 rounded bg-gray-200"></div>
                            <div className="mx-auto h-8 w-24 rounded bg-gray-200"></div>
                        </div>
                        <div className="px-6 pb-6">
                            <div className="mb-6 h-0.5 rounded bg-red-200"></div>
                            <div className="space-y-4">
                                {[...Array(4)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-2"
                                    >
                                        <div className="h-5 w-5 rounded-full bg-red-200"></div>
                                        <div className="h-4 flex-1 rounded bg-gray-200"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Description skeleton */}
                    <div className="max-w-2xl space-y-4">
                        <div className="mx-auto h-6 w-48 rounded bg-gray-200"></div>
                        <div className="space-y-2">
                            <div className="h-4 w-full rounded bg-gray-200"></div>
                            <div className="mx-auto h-4 w-5/6 rounded bg-gray-200"></div>
                            <div className="mx-auto h-4 w-4/5 rounded bg-gray-200"></div>
                        </div>
                    </div>

                    {/* Main pricing card skeleton */}
                    <div className="w-full rounded-lg bg-gray-800 text-white md:w-2/3">
                        <div className="space-y-4 p-6">
                            <div className="space-y-2">
                                <div className="mx-auto h-8 w-3/4 rounded bg-white/20"></div>
                                <div className="mx-auto h-8 w-2/3 rounded bg-white/20"></div>
                            </div>
                        </div>
                        <div className="px-6 pb-6">
                            <div className="mb-6 h-0.5 rounded-full bg-white"></div>
                            <div className="mb-6 space-y-4">
                                {[...Array(8)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center justify-between gap-4"
                                    >
                                        <div className="flex flex-1 items-center gap-2">
                                            <div className="h-5 w-5 rounded-full bg-orange-200"></div>
                                            <div className="h-4 flex-1 rounded bg-white/20"></div>
                                        </div>
                                        <div className="h-4 w-16 rounded bg-white/20"></div>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-4 text-center">
                                <div className="space-y-2">
                                    <div className="mx-auto h-6 w-32 rounded bg-white/20"></div>
                                    <div className="mx-auto h-12 w-40 rounded bg-white/20"></div>
                                </div>
                                <div className="mx-auto h-12 w-48 rounded-full bg-orange-200"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function WhoamiSectionSkeleton() {
    return (
        <section className="animate-pulse rounded-tl-4xl bg-white">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 px-4 py-16 text-center sm:px-6 md:flex-row lg:px-8">
                {/* Profile image skeleton */}
                <div className="h-80 w-80 rounded-tl-4xl rounded-br-4xl bg-gray-200 md:h-96"></div>

                {/* Content skeleton */}
                <div className="flex flex-1 flex-col items-center justify-center gap-4 md:items-start">
                    {/* Badge skeleton */}
                    <div className="h-6 w-24 rounded-full bg-gray-200"></div>

                    {/* Quote skeleton */}
                    <div className="w-full space-y-3">
                        <div className="h-4 w-full rounded bg-gray-200"></div>
                        <div className="h-4 w-5/6 rounded bg-gray-200"></div>
                        <div className="h-4 w-4/5 rounded bg-gray-200"></div>
                        <div className="h-4 w-3/4 rounded bg-gray-200"></div>
                    </div>

                    {/* Achievements list skeleton */}
                    <div className="w-full space-y-2">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <div className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-orange-200"></div>
                                <div className="h-4 flex-1 rounded bg-gray-200"></div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button skeleton */}
                    <div className="h-12 w-48 rounded-full bg-gray-200"></div>
                </div>
            </div>
        </section>
    )
}
