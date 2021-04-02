const data = [
    {
        name: 'jhon Doe',
        age: 32,
        gender: 'Male',
        lookingfor: 'Female',
        location: 'Bhiwandi',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name: 'Salman Ansari',
        age: 22,
        gender: 'Male',
        lookingfor: 'Female',
        location: 'Bhiwandi',
        image: 'https://randomuser.me/api/portraits/men/3.jpg'
    },
    {
        name: 'Osama Ansari',
        age: 22,
        gender: 'Female',
        lookingfor: 'Male',
        location: 'Bhiwandi', 
        image: 'https://randomuser.me/api/portraits/men/83ll.jpg'
    }
];
const profiles = new profileIterator(data);
document.getElementById('next').addEventListener('click',nextProfile);
function nextProfile(){
    const currentProfile = profiles.next().value;
    document.getElementById('imageDisplay').innerHTML = `
    <img src="${currentProfile.image}">
    `
    document.getElementById('profileDisplay').innerHTML = `
    <ul class = "list-group">
        <li class = "list-group-item">Name: ${currentProfile.name}</li>
        <li class = "list-group-item">Age: ${currentProfile.age}</li>
        <li class = "list-group-item">Gender: ${currentProfile.gender}</li>
        <li class = "list-group-item">Looking for: ${currentProfile.lookingfor}</li>
        <li class = "list-group-item">Location: ${currentProfile.location}</li>
    </ul>
    `
}

function profileIterator(profiles){
    let nextIndex=0;
    return{
        next: function(){
            return nextIndex < profiles.length?
            {value:profiles[nextIndex++],done: false}:
            {done:true}
        }
    };
}
