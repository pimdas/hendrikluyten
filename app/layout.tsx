import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'Straatfeest | Hendrik Luytenstraat',description:'Een straat, een lange tafel, alle buren. Lees over het straatfeest van de Hendrik Luytenstraat en meld je aan.'};
export default function Layout({children}:{children:React.ReactNode}) {return <html lang="nl"><head><link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=switzer@400,500,600,700&display=swap"/></head><body>{children}</body></html>}
