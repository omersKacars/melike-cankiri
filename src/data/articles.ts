const modules=import.meta.glob('../../content/articles/*.md',{eager:true});
export const articles=Object.values(modules).filter((m:any)=>m.frontmatter.published===true).sort((a:any,b:any)=>String(b.frontmatter.date).localeCompare(String(a.frontmatter.date))) as any[];
