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
app.get('/checkStatus',(req,res)=>{
    res.send('\n\n JobStatus '+ jobs[req.query.jobId]+"%\n\n")
})
app.listen(8080,()=>{console.log('listen on port 8080')})
function updateJ(jobId,val){
    jobs[jobId]=val
    if(val==100)
        return;
    this.setTimeout(() => updateJ(jobId,val+10), (3000));

}