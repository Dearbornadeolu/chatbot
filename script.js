function start(){
    let res_msg = document.createElement('div')
    res_msg.innerHTML = 'hello i am an AI created by Dearborn. the only input i understand is `hi` just send hi and i would reply you';
    res_msg.setAttribute("class", "left")
    document.getElementById('msg_area').appendChild(res_msg)
}

document.getElementById('send').addEventListener('click', async(e) =>{
    e.preventDefault()
    var req = document.getElementById('text').value
    if (req == undefined || req == ''){
        
    } else{
        let msg_req = document.createElement('div')
        let con2 = document.createElement('div')
        con2.setAttribute('class', 'msgcon2')
        msg_req.innerHTML = req
        msg_req.setAttribute('class', 'right')
        let message = document.getElementById('msg_area')
        message.appendChild(con2)
        con2.appendChild(msg_req)
        document.getElementById('text').value = ''
        
    }
    if (req === 'hi') {
        let res = 'how are you doing'
        let msg_res = document.createElement('div')
        let con1 = document.createElement('div')
        con1.setAttribute('class', 'msgcon1')
        msg_res.innerHTML = res
        msg_res.setAttribute('class', 'left')
        con1.appendChild(msg_res)
        let message = document.getElementById('msg_area')
        message.appendChild(con1)
    }
    /*if (req == undefined || req == ''){

    } else{
        let res = ''
        await axios.get(`https://api.monkedev.com/fun/chat?msg=${req}`).then(data =>{
            res = JSON.stringify(data.data.response)
        })
        let msg_req = document.createElement('div')
        let msg_res = document.createElement('div')

        let con1 = document.createElement('div')
        let con2 = document.createElement('div')

        con1.setAttribute('class', 'msgcon1')
        con2.setAttribute('class', 'msgcon2')

        msg_req.innerHTML= req
        msg_res.innerHTML = res

        msg_req.setAttribute('class', 'right')
        msg_res.setAttribute('class', 'left')

        let message = document.getElementById('msg_area')
        message.appendChild(con1)
        message.appendChild(con2)

        con1.appendChild(msg_req)
        con2.appendChild(msg_res)

        document.getElementById('text').value = ''
    }*/
})