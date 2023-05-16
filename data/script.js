const blogApi = "http://localhost:3000/posts/90";
const blogApi1 = "http://localhost:3000/posts/90";
let dataPosted = {

    "title": "NONONO",

}

/**
 * El único problema ahora es que al hacer DELETE
 * de algo que no existe o 
 * POST de algo ya existente da error aunque le ponga el catch.
 * !¿!¿!¿!¿¿!!
 */

// fetch(blogApi)
//     .then(res => res.jsahora on())
//     .then(data => console.log(data))
//     .catch(error => console.log("error"))

async function getBlogApi() {
    try {
        const res = await fetch(blogApi)
        console.log(res);
        const data = await res.json();
        console.log(data);

    } catch (error) {
        console.log(error);
    }
}


function deleteBlogApi() {

    fetch(blogApi, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(response => {
            if (response.ok) {
                //response.json().then(data => console.log(data))
                return response.json();
            } else {
                console.log(`HTTP Response Code: ${response?.status}`);
            }
        })
        .catch(error => console.log(error))

}


async function postBlogApi() {
    try {
        const res = await fetch(blogApi, {
            method: 'PATCH',
            body: JSON.stringify(dataPosted),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await res.json();
        console.log(data);

    } catch (error) {
        console.log(error);
    }
}
//getBlogApi();
//postBlogApi();
deleteBlogApi();

