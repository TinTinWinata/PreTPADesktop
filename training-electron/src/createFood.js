import {app} from "./Firebase.mjs"
import { getFirestore, collection, addDoc, query, where, getDocs, deleteDoc,doc} from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js'


const db = getFirestore(app)

document.getElementById("foodForm").addEventListener("submit", async ()=>{
  event.preventDefault()
  let foodName = document.getElementById("foodName").value
  let foodDesc = document.getElementById("foodDesc").value
  let foodStock = document.getElementById("foodStock").value
  let foodPrice = document.getElementById("foodPrice").value

  try {
    let docRef = await addDoc(collection(db, "foods"),{
      foodName:foodName , 
      foodDesc:foodDesc,
      foodStock:foodStock,
      foodPrice:foodPrice
    })
    console.log("Succesfully added food! " + docRef.id)
  } catch (error) {
    console.error(error)
  }

})

document.getElementById("viewBtn").addEventListener("click", async ()=>{
  const foodName = document.getElementById('viewInp').value
  document.getElementById('viewInp').value = ""

  const q = query(collection(db, "foods"), where("foodName", "==", foodName))
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc)=>{
    console.log(doc.id, '=>', doc.data())
  })
})

document.getElementById("delBtn").addEventListener("click", async()=>{
  const id = document.getElementById("delInp").value
  document.getElementById("delInp").value = ""
  await deleteDoc(doc(db, "foods", id)) 
  console.log("Deleted")  
})
