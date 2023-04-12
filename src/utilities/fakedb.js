
// use local storage to manage cart data
const addToDb = JobDetails => {
    let jobs = getJobs();
    // add quantity
    const isExists = jobs[JobDetails.id];
    if (isExists) {
        alert('Already Applied');
    }
    else {
        
        jobs[JobDetails.id] = JobDetails;
    }
    localStorage.setItem('jobs', JSON.stringify(jobs));
}

const removeFromDb = id => {
    const shoppingCart = getJobs();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('jobs', JSON.stringify(shoppingCart));
    }
}

const getJobs = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('jobs');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('jobs');
}

export {
    addToDb,
    removeFromDb,
    getJobs,
    deleteShoppingCart
}