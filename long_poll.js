const express =require('express')
const app = express()
const jobs={}
app.post('/submit',(req,res)=>{
    const jobId = `job:${Date.now()}`
    jobs[jobId] = 0
    let val =0
   updateJ(jobId,0)
   res.send("\n\n"+jobId+"\n\n")

    
})
app.get('/checkStatus',async(req,res)=>{
    console.log(jobs[req.query.jobId])
    while(await awaijob(jobs[req.query.jobId])==false){
    res.json(jobs[req.query.jobId])
    }
})
app.listen(8080,()=>{console.log('listen on port 8080')})
async function awaijob(jobId) 
{
    return new Promise((resolve, reject) => {
        if(jobs[jobId]<100)
            this.setTimeout(()=>resolve(false),1000)
        else
        resolve(true)
    })
    
}
function updateJ(jobId,val){
    jobs[jobId]=val
    if(val==100)
        return;
    this.setTimeout(() => updateJ(jobId,val+10), (3000));

}