import './index.css';

// import Vegan from '~/app/Vegan.tsx';
// import Hot from '~/app/Hot.tsx'
// import { store } from '~/store/configure-store.ts';
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';

import App from '~/app/App.tsx';
import Juiciest from '~/app/Hot.tsx';
import VeganKichen from '~/app/Vegan.tsx';

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <StrictMode>
            <ChakraProvider>
                <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='/hot' element={<Juiciest />} />
                    <Route path='/vegan-food' element={<VeganKichen />} />
                </Routes>
            </ChakraProvider>
        </StrictMode>
    </BrowserRouter>,
);
