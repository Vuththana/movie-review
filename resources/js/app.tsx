import '../css/app.css';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { createRoot } from 'react-dom/client';
import Navbar from './Components/Navbar/Navbar';

createInertiaApp({
    resolve: async (name) => {
        const page = await import(`./Pages/${name}`);
        return page.default;
    },
    setup({ el, App, props }) {
        const root = createRoot(el); // Use createRoot instead of render
        root.render(<App {...props} />);
    },
});
