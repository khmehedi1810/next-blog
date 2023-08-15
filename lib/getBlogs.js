export async function getBlogs(){
    try{
        let res1 =await fetch('https://jsonplaceholder.typicode.com/posts')

        let data1 = await res1.json();

    
        return data1
    }catch(e){
        throw new Error("Something is wrong")
    }
}