
const posts = [
    {
        "id": 1,
        "image": "https://picsum.photos/seed/1/300/225",
        "title": " Common",
        "content": "A webinar that innovation leaders shouldn’t miss. A survey of 217 enterpriseorganizations found that a staggering 23% of innovation programs fail. Many businesses don’t provideinnovation managers with what they need to succeed. A lack of resources, ballooning &#8230",
        "link": "www.google.com",
        "date": "Dec 2019"
    },
    {
        "id": 2,
        "image": "https://picsum.photos/seed/1/300/225",
        "title": "success",
        "content": "A webinar that innovation leaders shouldn’t miss. A survey of 217 enterpriseorganizations found that a staggering 23% of innovation programs fail. Many businesses don’t provideinnovation managers with what they need to succeed. A lack of resources, ballooning &#8230",
        "link": "www.google.com",
        "date": "Dec 2019"
    },
    {
        "id": 3,
        "image": "https://picsum.photos/seed/1/300/225",
        "title": "success",
        "content": "A webinar that innovation leaders shouldn’t miss. A survey of 217 enterpriseorganizations found that a staggering 23% of innovation programs fail. Many businesses don’t provideinnovation managers with what they need to succeed. A lack of resources, ballooning &#8230",
        "link": "www.google.com",
        "date": "Dec 2019"
    },
    {
        "id": 4,
        "image": "https://picsum.photos/seed/1/300/225",
        "title": "success",
        "content": "A webinar that innovation leaders shouldn’t miss. A survey of 217 enterpriseorganizations found that a staggering 23% of innovation programs fail. Many businesses don’t provideinnovation managers with what they need to succeed. A lack of resources, ballooning &#8230",
        "link": "www.",
        "date": "Dec 2019"
    },
    {
        "id": 5,
        "image": "https://picsum.photos/seed/1/300/225",
        "title": "success",
        "content": "A webinar that innovation leaders shouldn’t miss. A survey of 217 enterpriseorganizations found that a staggering 23% of innovation programs fail. Many businesses don’t provideinnovation managers with what they need to succeed. A lack of resources, ballooning &#8230",
        "link": "www.",
        "date": "Dec 2019"
    },
    {
        "id": 6,
        "image": "https://picsum.photos/seed/1/300/225",
        "title": "bbc",
        "content": "A webinar that innovation leaders shouldn’t miss. A survey of 217 enterpriseorganizations found that a staggering 23% of innovation programs fail. Many businesses don’t provideinnovation managers with what they need to succeed. A lack of resources, ballooning &#8230",
        "link": "www.",
        "date": "Dec 2019"
    },
    {
        "id": 7,
        "image": "https://picsum.photos/seed/1/300/225",
        "title": "success",
        "content": "A webinar that innovation leaders shouldn’t miss. A survey of 217 enterpriseorganizations found that a staggering 23% of innovation programs fail. Many businesses don’t provideinnovation managers with what they need to succeed. A lack of resources, ballooning &#8230",
        "link": "www.",
        "date": "Dec 2019"
    },
    {
        "id": 8,
        "image": "https://picsum.photos/seed/1/300/225",
        "title": "bbc",
        "content": "A webinar that innovation leaders shouldn’t miss. A survey of 217 enterpriseorganizations found that a staggering 23% of innovation programs fail. Many businesses don’t provideinnovation managers with what they need to succeed. A lack of resources, ballooning &#8230",
        "link": "www.",
        "date": "Dec 2019"
    },
    {
        "id": 9,
        "image": "https://picsum.photos/seed/1/300/225",
        "title": "success",
        "content": "A webinar that innovation leaders shouldn’t miss. A survey of 217 enterpriseorganizations found that a staggering 23% of innovation programs fail. Many businesses don’t provideinnovation managers with what they need to succeed. A lack of resources, ballooning &#8230",
        "link": "www.",
        "date": "Dec 2019"
    },
    {
        "id": 10,
        "image": "https://picsum.photos/seed/1/300/225",
        "title": "bbc",
        "content": "A webinar that innovation leaders shouldn’t miss. A survey of 217 enterpriseorganizations found that a staggering 23% of innovation programs fail. Many businesses don’t provideinnovation managers with what they need to succeed. A lack of resources, ballooning &#8230",
        "link": "www.google.com",
        "date": "Dec 2019"
    },
    {
        "id": 10,
        "image": "https://picsum.photos/seed/1/300/225",
        "title": "bbc",
        "content": "A webinar that innovation leaders shouldn’t miss. A survey of 217 enterpriseorganizations found that a staggering 23% of innovation programs fail. Many businesses don’t provideinnovation managers with what they need to succeed. A lack of resources, ballooning &#8230",
        "link": "www.google.com",
        "date": "Dec 2019"
    },

]
let page_number = 1
function displayRecords(posts) {
    post_per_page = 5
    total_page = 0
    const total_post = posts.length
    total_page = Math.ceil(total_post / post_per_page)
    let start_index = (page_number - 1) * post_per_page
    let end_index = start_index + (post_per_page - 1)

    let pagePost = ""
    for (let i = start_index; i <= end_index; i++) {
        
        pagePost += `
            <div class="mt-2" class="itemContainer">
            <div class="card shadow-sm">  
            <img src=${posts[i].image}>
            <div class="card-body">
                <h5>${posts[i].title}</h5>
                
                <p class="card-text"><small>${posts[i].content}}&#8230;</small></p>
                <p><a href="#">Read more &rarr;</a></p>
                <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted">${posts[i].link}</small>
                </div>
            </div>
            </div>
      </div>`

    }

    $('#post-container').html(`${pagePost}`)
    document.querySelectorAll(".dynamic-item").forEach(element => {
        element.classList.remove("active")
    });
    $(`#page${page_number}`).addClass("active")

    // if (page_number == 1) {
    //     $("#prevBtn").addClass("disabled")
    // }
    // else {
    //    $("#prevBtn").removeClass("disabled")
    // }
    // if (page_number == total_page) {
    //     document.getElementById("nextBtn").parentElement.classList.add("disabled")
    // }
    // else {
    //     $document.getElementById("nextBtn").parentElement.classList.remove("disabled")
    // }
}

function generateButton() {
    let prevBtn = `
    <li class="page-item" id="prevBtn">
        <a class="page-link"  onclick="prev()" href="javascript:void(0)">Previous</a>
    </li>`
    let nextBtn = ` 
    <li class="page-item" id="nextBtn">
        <a class="page-link"  onclick="next()" href="javascript:void(0)">Next</a>
    </li>`

    let buttons = ""
    let activeClass = ""

    for (let i = 1; i < total_page; i++) {
        if (i == 1) {
            activeClass = "active"
        } else {
            activeClass = ""
        }
        buttons += `
        <li class="page-item dynamic-item ${activeClass}" id="page${i}">
            <a class="page-link" onclick="page(${i})"href="javascript:void(0)">${i}</a>
        </li>`
    }
    $('#pagination').html(`${prevBtn} ${buttons} ${nextBtn}`)

}

function next() {
    page_number = page_number + 1
    displayRecords(posts)
}

function prev() {
    page_number = page_number - 1
    displayRecords(posts)
}

function page(index) {
    page_number = parseInt(index)
    displayRecords(posts)
}




$(document).ready(function () {


    function displayTemplate(templateID, containerToDisplay, items) {
        var itemTemplate = $(templateID).html();
        var compiledPost = Handlebars.compile(itemTemplate);
        $(containerToDisplay).html(compiledPost(items));
    }

    $("#bbcNews").click(function () {
        const items = [
            {
                "id": 1,
                "image": "https://picsum.photos/seed/1/300/225",
                "title": " BBc",
                "content": "A webinar that innovation leaders shouldn’t miss. A survey of 217 enterpriseorganizations found that a staggering 23% of innovation programs fail. Many businesses don’t provideinnovation managers with what they need to succeed. A lack of resources, ballooning &#8230",
                "link": "www.google.com",
                "date": "Dec 2019"
            },
            {
                "id": 2,
                "image": "https://picsum.photos/seed/1/300/225",
                "title": "success",
                "content": "A webinar that innovation leaders shouldn’t miss. A survey of 217 enterpriseorganizations found that a staggering 23% of innovation programs fail. Many businesses don’t provideinnovation managers with what they need to succeed. A lack of resources, ballooning &#8230",
                "link": "www.google.com",
                "date": "Dec 2019"
            },
            {
                "id": 3,
                "image": "https://picsum.photos/seed/1/300/225",
                "title": "success",
                "content": "A webinar that innovation leaders shouldn’t miss. A survey of 217 enterpriseorganizations found that a staggering 23% of innovation programs fail. Many businesses don’t provideinnovation managers with what they need to succeed. A lack of resources, ballooning &#8230",
                "link": "www.google.com",
                "date": "Dec 2019"
            },
            {
                "id": 4,
                "image": "https://picsum.photos/seed/1/300/225",
                "title": "success",
                "content": "A webinar that innovation leaders shouldn’t miss. A survey of 217 enterpriseorganizations found that a staggering 23% of innovation programs fail. Many businesses don’t provideinnovation managers with what they need to succeed. A lack of resources, ballooning &#8230",
                "link": "www.",
                "date": "Dec 2019"
            },
            {
                "id": 5,
                "image": "https://picsum.photos/seed/1/300/225",
                "title": "success",
                "content": "A webinar that innovation leaders shouldn’t miss. A survey of 217 enterpriseorganizations found that a staggering 23% of innovation programs fail. Many businesses don’t provideinnovation managers with what they need to succeed. A lack of resources, ballooning &#8230",
                "link": "www.",
                "date": "Dec 2019"
            },
            {
                "id": 6,
                "image": "https://picsum.photos/seed/1/300/225",
                "title": "bbc",
                "content": "A webinar that innovation leaders shouldn’t miss. A survey of 217 enterpriseorganizations found that a staggering 23% of innovation programs fail. Many businesses don’t provideinnovation managers with what they need to succeed. A lack of resources, ballooning &#8230",
                "link": "www.",
                "date": "Dec 2019"
            },
            {
                "id": 7,
                "image": "https://picsum.photos/seed/1/300/225",
                "title": "success",
                "content": "A webinar that innovation leaders shouldn’t miss. A survey of 217 enterpriseorganizations found that a staggering 23% of innovation programs fail. Many businesses don’t provideinnovation managers with what they need to succeed. A lack of resources, ballooning &#8230",
                "link": "www.",
                "date": "Dec 2019"
            },
            {
                "id": 8,
                "image": "https://picsum.photos/seed/1/300/225",
                "title": "bbc",
                "content": "A webinar that innovation leaders shouldn’t miss. A survey of 217 enterpriseorganizations found that a staggering 23% of innovation programs fail. Many businesses don’t provideinnovation managers with what they need to succeed. A lack of resources, ballooning &#8230",
                "link": "www.",
                "date": "Dec 2019"
            },
            {
                "id": 9,
                "image": "https://picsum.photos/seed/1/300/225",
                "title": "success",
                "content": "A webinar that innovation leaders shouldn’t miss. A survey of 217 enterpriseorganizations found that a staggering 23% of innovation programs fail. Many businesses don’t provideinnovation managers with what they need to succeed. A lack of resources, ballooning &#8230",
                "link": "www.",
                "date": "Dec 2019"
            },
            {
                "id": 10,
                "image": "https://picsum.photos/seed/1/300/225",
                "title": "bbc",
                "content": "A webinar that innovation leaders shouldn’t miss. A survey of 217 enterpriseorganizations found that a staggering 23% of innovation programs fail. Many businesses don’t provideinnovation managers with what they need to succeed. A lack of resources, ballooning &#8230",
                "link": "www.google.com",
                "date": "Dec 2019"
            },
            {
                "id": 10,
                "image": "https://picsum.photos/seed/1/300/225",
                "title": "bbc",
                "content": "A webinar that innovation leaders shouldn’t miss. A survey of 217 enterpriseorganizations found that a staggering 23% of innovation programs fail. Many businesses don’t provideinnovation managers with what they need to succeed. A lack of resources, ballooning &#8230",
                "link": "www.google.com",
                "date": "Dec 2019"
            },
        
        ]
        displayRecords(items)
        generateButton()

    })

    //
    $("#buzzFeedNews").click(function () {
        displayRecords(posts)
        generateButton()
    })

    $("#Fliplet").click(function () {
        displayRecords(posts)
        generateButton()
    })

    $("#FT").click(function () {
        displayRecords(posts)
        generateButton()
    });

})