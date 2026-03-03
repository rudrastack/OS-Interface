import React, { useState, useEffect } from 'react'

const DateTime = () => {
    const [now, setNow] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setNow(new Date())
        }, 30000)
        return () => clearInterval(timer)
    }, [])

    const formatDate = (date) => {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',
        ]

        const dayName = days[date.getDay()]
        const monthName = months[date.getMonth()]
        const dayNumber = date.getDate()

        let hours = date.getHours()
        const minutes = date.getMinutes()
        const ampm = hours >= 12 ? 'pm' : 'am'
        hours = hours % 12
        hours = hours ? hours : 12 

        const minuteStr = minutes < 10 ? `0${minutes}` : minutes

        return `${dayName} ${monthName} ${dayNumber} ${hours}:${minuteStr}${ampm}`
    }

    return <div className="date-time">{formatDate(now)}</div>
}

export default DateTime