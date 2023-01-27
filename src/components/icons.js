
export default function Icons({icon, width, height}) {

    switch(icon) {
        case "menu":
            return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height={height} width={width}><path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z"/></svg>
        
        case "cloud":
            return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height={height} width={width}><path d="M12.55 40q-4.4 0-7.475-3.075Q2 33.85 2 29.45q0-3.9 2.5-6.85 2.5-2.95 6.35-3.55 1-4.85 4.7-7.925T24.1 8.05q5.6 0 9.45 4.075Q37.4 16.2 37.4 21.9v1.2q3.6-.1 6.1 2.325Q46 27.85 46 31.55q0 3.45-2.5 5.95T37.55 40Z"/></svg>
        default:
            return null;
    }
}