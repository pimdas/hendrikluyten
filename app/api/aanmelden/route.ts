import { getDatabase } from '../../../lib/registrations';
export const runtime = 'nodejs';
export async function POST(request: Request) {
 try {
  if(request.headers.get('origin') && new URL(request.headers.get('origin')!).host !== (request.headers.get('x-forwarded-host') || request.headers.get('host') || new URL(request.url).host)) return Response.json({error:'Ongeldige aanvraag.'},{status:403});
  const p=await request.json() as {name?:string;email?:string;house?:string;adults:number;children:number;consent?:boolean};
  const name=typeof p.name==='string'?p.name.trim():''; const email=typeof p.email==='string'?p.email.trim().toLowerCase():''; const house=typeof p.house==='string'?p.house.trim():'';
  if(!name || name.length>100 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length>254 || !/^\d{1,4}\s?[a-zA-Z]?(?:[-/]\d{1,3})?$/.test(house) || !Number.isInteger(p.adults)||!Number.isInteger(p.children)||p.adults<0||p.children<0||p.adults+p.children<1||p.adults>50||p.children>50||p.consent!==true) return Response.json({error:'Controleer je gegevens en kies minstens één deelnemer.'},{status:400});
  const id=crypto.randomUUID(); const totalCents=p.adults*2500+p.children*1250;
  getDatabase().prepare('INSERT INTO registrations (id,name,email,house,adults,children,total_cents,created_at) VALUES (?,?,?,?,?,?,?,?)').run(id,name,email,house,p.adults,p.children,totalCents,new Date().toISOString());
  return Response.json({id,totalCents},{status:201});
 } catch { return Response.json({error:'Opslaan is niet gelukt. Probeer het straks opnieuw; je aanmelding is nog niet bevestigd.'},{status:503}); }
}
