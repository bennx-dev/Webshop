export function Logo() {
    return (
        <svg viewBox="0 0 320 90" style={{maxWidth: '140px', height: '50px'}}>
            <g transform="translate(5,15)">
                <path d="M20 20 L80 20 L70 50 L30 50 Z" fill="#1E90FF"/>
                <path d="M10 20 Q0 20 5 30 L20 30" stroke="#1E90FF" strokeWidth="5" fill="none" strokeLinecap="round"/>
                <circle cx="35" cy="60" r="6" fill="#32CD32"/>
                <circle cx="65" cy="60" r="6" fill="#32CD32"/>
                <path d="M30 10 Q40 5 50 10 Q60 5 70 10 L70 20 Q60 15 50 20 Q40 15 30 20 Z" fill="#32CD32"/>
            </g>

            <text x="110" y="55" fontSize="36" fontWeight="600">
                <tspan fill="#1E90FF">Edu</tspan>
                <tspan fill="#32CD32">Shop</tspan>
            </text>
        </svg>
    );
}