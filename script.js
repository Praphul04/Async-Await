console.log('person1 shows ticket');
console.log('person2 shows ticket');

const preMovie = async () => {

  const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });
  const getPopcorn =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('popcorn'), 3000);
  });
  
  const getButter =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('butter'), 3000);
  });
  
   const getColdDrink =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('coke'), 3000);
  });

  const posts = []
const createPost= new Promise( (resolve, reject) => {
           
    setTimeout(() => resolve('post'), 3000);
       
    }) 
    const deletePost= new Promise((resolve, reject) => {
           
                if(posts.length > 0){
                    const poppedElement  = posts.pop();
                    resolve(poppedElement);
                } else {
                    reject("ERROR: ARRAY IS EMPTY")
                }
         
        })

  let ticket = await person3PromiseToShowTicketWhenWifeArrives;
  
    let [ popcorn, butter, coke,] =
    await Promise.all([ getPopcorn, getButter, getColdDrink, createPost, deletePost  ]);

    console.log(`got ${popcorn}, ${butter}, ${coke} ${posts}`);

  
  return ticket;
  
};

preMovie().then((t) => console.log(`person3 shows ${t}`));

console.log('person4 shows ticket');

