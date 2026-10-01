const fs=require("fs");
const raw=JSON.parse(fs.readFileSync("raw-signals.json","utf8"));
const clamp=n=>Math.max(0,Math.min(100,n));
function score(x){
 let s=0; const age=x.ageDays??30;
 s+=age<=2?15:age<=7?12:age<=30?7:2;
 s+=x.explicitIntent?15:0;
 s+=x.budgetTier==="large"?20:x.budgetTier==="medium"?14:x.budgetTier==="small"?6:(x.budgetKnown?5:0);
 s+=x.repeatPotential==="high"?15:x.repeatPotential==="medium"?8:2;
 s+=x.chinaFit==="very high"?15:x.chinaFit==="high"?11:x.chinaFit==="medium"?5:0;
 s+=x.contactability==="high"?10:x.contactability==="medium"?5:0;
 s+=x.compliance==="low"?10:x.compliance==="medium"?5:0;
 return clamp(s);
}
const norm=x=>({score:score(x),title:x.title,buyer:x.buyer||"Unknown buyer",category:x.category||"Unclassified",budget:x.budget||"Not stated",repeat:x.repeat||x.repeatPotential||"Unknown",chinaFit:x.chinaFit||"Unknown",contactability:x.contactLabel||x.contactability||"Unknown",status:x.status||"NEW",source:x.source,url:x.url});
const byUrl=new Map(); raw.map(norm).forEach(x=>{if(x.url)byUrl.set(x.url,x)});
const out=[...byUrl.values()].sort((a,b)=>b.score-a.score);
fs.writeFileSync("signals.json",JSON.stringify(out,null,2)+"\n");
console.log(`Compiled ${out.length} unique signals; ${out.filter(x=>x.score>=80).length} score 80+`);
