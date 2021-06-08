//get the authors
/*const authors=fetch('https://fakerestapi.azurewebsites.net/api/v1/Authors');
const userAuthors=authors.then(response=>response.json());
userAuthors.then(data=> console.log(data));
*/
//adding new author
/*const headers=new Headers();
headers.append('content-type','application/json')
const options={
    method:'POST',
    headers,
    body: JSON.stringify({
    firstName: "First Name 608",
    id: 608,
    idBook: 201,
    lastName: "Last Name 608",
    })
};*/

//modife the  authors
/*const headers=new Headers();
headers.append('content-type','application/json')
const options={
    method:'put',
    headers,
    body: JSON.stringify({
    firstName: "First Name 608",
    id: 608,
    idBook: 201,
    lastName: "Last Name 608",
    })
};
const authors=fetch('https://fakerestapi.azurewebsites.net/api/v1/Authors/608',options);*/
//const authors=fetch('https://fakerestapi.azurewebsites.net/api/v1/Authors',options);

//to modife with patch
/*const options={
    method:'DELET',
    headers,
    body: JSON.stringify({
    firstName: "First Name Hl 608",
    id: 608,
    idBook: 201,
    lastName: "Last Name 608",
    })
};

const userAuthors=authors.then(response=>response.json());
userAuthors.then(data=> console.log(data));*/



//for patch this the stauts that apears to me :   status: 405,
/*const options={
    method:'PATCH',
    headers,
    body: JSON.stringify({
    firstName: "First Name Hl 608",
    id: 608,
    idBook: 201,
    lastName: "Last Name 608",
    })
};


const authors=fetch('https://fakerestapi.azurewebsites.net/api/v1/Authors/608',options);
const userAuthors=authors.then(response=>{
	console.log(response);
	response.json()
});
userAuthors.then(data=> console.log('data: ',data));*/



