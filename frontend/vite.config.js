import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default ({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '')

    return defineConfig({
        plugins: [react()],
        base: '/webshop/',
        server: {
            proxy: {
                '/webshop/api/': env.VITE_API_URL
            }
        }
    })
}