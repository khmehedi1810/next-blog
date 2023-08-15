
export async function getSingleBlog(id) {
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    let data = await res.json();
    return data;
}