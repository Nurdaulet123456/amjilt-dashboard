let url = 'http://localhost:8000/v1/postAll'
let userData = []
let tbody = document.querySelector('.tbody')

async function getData (url) {
    let res = await fetch(url, {
        method: "GET"
    })

    let data = await res.json()

    Object.values(data.post).forEach((item, index) => {
        tbody.innerHTML += `
            <tr class="tr">
                <td>${index + 1}</td>
                <td>${item.postname}</td>
                <td>${item.phone}</td>
            </tr>
        `
    })
}

getData(url)