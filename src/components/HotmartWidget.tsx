'use client'

import { useEffect } from 'react'

export default function HotmartWidget() {
    useEffect(() => {
        const script = document.createElement('script')
        script.src =
            'https://checkout.hotmart.com/lib/hotmart-checkout-elements.js'
        script.async = true
        script.onload = () => {
            //@ts-ignore
            checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel')
        }
        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    }, [])

    return (
        <div>
            {/* Esse é o contêiner onde o widget será montado */}
            <div id="hotmart-sales-funnel" />
        </div>
    )
}
