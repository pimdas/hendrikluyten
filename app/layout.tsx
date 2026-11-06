import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {icons:{icon:[{url:'/favicon.svg?v=henry',type:'image/svg+xml'},{url:'/favicon.ico?v=henry',sizes:'16x16 32x32 48x48'}],apple:[{url:'/apple-touch-icon.png?v=henry',sizes:'180x180',type:'image/png'}]},title:'Straatfeest | Hendrik Luytenstraat',description:'Een straat, een lange tafel, alle buren. Lees over het straatfeest van de Hendrik Luytenstraat en meld je aan.'};
export default function Layout({children}:{children:React.ReactNode}) {return <html lang="nl"><head><link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=switzer@400,500,600,700&display=swap"/></head><body>{children}</body></html>}
