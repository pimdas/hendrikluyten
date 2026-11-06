import { DatabaseSync } from 'node:sqlite';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';
let db: DatabaseSync | undefined;
export function getDatabase(){
 if(db) return db;
 const directory=process.env.DATA_DIR || './data';
 mkdirSync(directory,{recursive:true});
 db=new DatabaseSync(join(directory,'registrations.sqlite'));
 db.exec('PRAGMA journal_mode=WAL; PRAGMA busy_timeout=5000;');
 db.exec(`CREATE TABLE IF NOT EXISTS registrations (id TEXT PRIMARY KEY, name TEXT NOT NULL, email TEXT NOT NULL, house TEXT NOT NULL, adults INTEGER NOT NULL, children INTEGER NOT NULL, total_cents INTEGER NOT NULL, created_at TEXT NOT NULL)`);
 return db;
}
