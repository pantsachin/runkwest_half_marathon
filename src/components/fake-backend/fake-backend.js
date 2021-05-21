
//Backend Database (MongoDb)
const user = {
  username: "sachin",
  password: "sachin1234"

}


export const fakeAuthApi = (username, password) => {
return new Promise((resolve, reject) => {
  setTimeout(() => {
    if (username === user.username && password === user.password) {
      resolve({success: true, status: 200})
    } else {
      reject({success: false, status: 401})
    }
  }, 3000)
})
}