const getPostsById= (id=1) => {
    let request = new XMLHttpRequest()

    request.open("GET", `https://jsonplaceholder.typicode.com/posts?userId=${id}`)
                request.responseType = 'json';
                request.send()
                request.onload = () => {
                    let section = document.querySelector('section')

                    section.innerHTML='';
                    
                    request.response.map(i => {
                        const div = document.createElement('div')
                        const h4 = document.createElement('h4')
                        h4.innerText= i.title

                        const p = document.createElement('p')
                        p.innerText= i.body

                        div.append(h4)
                        div.append(p)
                        
                        const line= document.createElement('hr')
                        
                        section.append(div)
                        section.append(line)
                    })
        
                    }
}


window.addEventListener('load', () => {
    let preElement;
    let req = new XMLHttpRequest()
    req.open("GET", "https://jsonplaceholder.typicode.com/users")
    req.responseType= "json"
    req.send()
    req.onload = () => {
        const ul = document.querySelector('ul') 

        req.response.map(i => {

            const li= document.createElement('li')
            const h4= document.createElement('h4')
            h4.innerText=i.name;

            const p= document.createElement('p')
            p.innerText= i.email

            li.append(h4)
            li.append(p)

            ul.append(li)
            
            getPostsById()

            
            li.addEventListener('click', () => {
                
                preElement.classList.remove('clicked')
                li.classList.add('clicked')
                getPostsById(i.id)
                preElement=li;
            })
        })
        preElement=document.querySelector('li')
        preElement.classList.add('clicked')
 
    }

    
})