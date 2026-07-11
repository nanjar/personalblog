document.addEventListener("DOMContentLoaded", async () => {

    const container = document.getElementById("blog-container");

    if (!container) return;

    try {

        const response = await fetch("assets/data/blogs.json");

        if (!response.ok) {
            throw new Error("blogs.json not found");
        }

        const blogs = await response.json();

        container.innerHTML = blogs.map(blog => `

            <article class="blog-card">

                <div class="blog-image">
                    <img
                        src="${blog.image}"
                        alt="${blog.title}"
                        loading="lazy">
                </div>

                <div class="blog-content">

                    <span class="blog-category">
                        ${blog.category}
                    </span>

                    <span class="blog-date">
                        ${formatDate(blog.date)}
                    </span>

                    <h3>${blog.title}</h3>

                    <p>${blog.excerpt}</p>

                    <a href="${blog.url}">
                        Read More →
                    </a>

                </div>

            </article>

        `).join("");

    } catch (error) {

        console.error("Blog render error:", error);

        container.innerHTML = `
            <p>Articles are currently unavailable.</p>
        `;
    }
});

function formatDate(dateString){

    const date = new Date(dateString);

    return date.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

}