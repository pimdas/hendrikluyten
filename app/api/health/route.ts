import { getDatabase } from '../../../lib/registrations';
export const runtime='nodejs';
export const dynamic='force-dynamic';
export function GET(){try {getDatabase().prepare('SELECT 1').get();return Response.json({ok:true});}catch{return Response.json({ok:false},{status:503});}}
