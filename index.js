function fetchData()
{
    var url = "http://localhost:3000/students"
    axios.get(url).then(res => {
        console.log(res.data);
        var str = `<html><body><table><tr><th>ID</th><th>Name</th><th>Dept</th><th>Action</th></tr>`;
        res.data.forEach( student =>{
            str += `<tr><td>${student.id}</td><td>${student.name}</td><td>${student.dept}</td><td><button onclick="updateData()">Edit</button><button onclick="deleteData(${student.id})">Remove</button></td></td></tr>`
        });
        str += `</body></html>`;
        document.getElementById("result").innerHTML = str;
    });
}
function postData()
{
    var url = "http://localhost:3000/students"
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var dept = document.getElementById("dept").value;
    const obj = 
    {
        id:id,
        name:name,
        dept:dept
    }
    axios.post(url, obj).then( res => {
        fetchData();
    });
}
deleteData = () =>
{
    var url = "http://localhost:3000/students/"
    var id = document.getElementById("id").value;
    url += id;
    axios.delete(url).then(res =>
        {
            fetchData();
        }
    );
}
updateData = () =>
{
    var url = "http://localhost:3000/students/"
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var dept = document.getElementById("dept").value;
    url += id;
    const obj = 
    {
        "name":name,
        "dept":dept
    };
    axios.patch(url,obj).then( res =>{
        fetchData();
    });
}
function removeData(id)
{
    var url = "http://localhost:3000/students/"
    url += id;
    axios.delete(url).then(res =>
        {
            fetchData();
        }
    );
}