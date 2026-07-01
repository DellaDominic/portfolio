import { createRoot } from 'react-dom/client';
import AppRoutes from './AppRoutes';

const rootHtmlElement = document.getElementById('root');
const root = createRoot(rootHtmlElement);
root.render(<AppRoutes />);
