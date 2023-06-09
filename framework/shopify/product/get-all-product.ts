
const fetchApi=async ()=>{


    const url ="https://jsonplaceholder.typicode.com/todos"

    const response= await fetch(url , {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })

    const data = await response.json()

    return {data}


}

const getAllProduct=async (): Promise<any[]>=>{


    const product =await fetchApi()


    return product.data
}

export default getAllProduct