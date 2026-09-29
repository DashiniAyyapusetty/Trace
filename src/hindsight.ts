export interface MemoryResult { id?:string; text:string; type?:string; mentioned_at?:string; context?:string; }
export interface HindsightResponse { configured:boolean; results?:MemoryResult[]; text?:string; based_on?:{memories?:MemoryResult[]}; message?:string; }

export async function retainMemory(content:string, context='TRACE product event', timestamp?:string){
  const r=await fetch('/api/hindsight/retain',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({content,context,timestamp})});
  if(!r.ok) throw new Error('Memory retain failed'); return r.json() as Promise<HindsightResponse>;
}
export async function recallMemory(query:string){
  const r=await fetch('/api/hindsight/recall',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({query})});
  if(!r.ok) throw new Error('Memory recall failed'); return r.json() as Promise<HindsightResponse>;
}
export async function reflectMemory(query:string){
  const r=await fetch('/api/hindsight/reflect',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({query})});
  if(!r.ok) throw new Error('Memory reflect failed'); return r.json() as Promise<HindsightResponse>;
}
