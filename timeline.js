// timeline slick-slider.js

const timelineData = [
    {
        year: "2012",
        title: "The beginning",
        subtitle: "Early Corporate Exposure",
        description: "Entered the corporate world as a strategy analyst, building a foundation in systems thinking and organizational leadership.This phase sharpened his understanding of systems, structure, and leadership grounded in impact.",
        images: ["./images/about/tm-grid-1.svg", "./images/about/tm-grid-2.svg", "./images/about/tm-grid-3.svg"]
    },
    {
        year: "2013",
        title: "Early exposure",
        subtitle: "Strategy in the Real World",
        description: "Oluwadare began his professional journey in corporate strategy roles, working closely with teams in finance and operations. This phase helped him understand how structured thinking and decision-making impact real outcomes, forming the base of his leadership mindset.",
        images: ["./images/about/tm-grid-4.svg", "./images/about/tm-grid-6.svg", "./images/about/tm-grid-5.svg"]
    },
    {
        year: "2014",
        title: "Finance",
        subtitle: "Learning How Systems Move",
        description: "Expanding into the financial sector, he participated in high level analysis and planning, seeing firsthand how policy, funding, and execution intersect especially when applied to national infrastructure and economic reform.",
        images: ["./images/about/tm-grid-7.svg", "./images/about/tm-grid-8.svg"]
    },
    {
        year: "2016",
        title: "Leadership role",
        subtitle: "From Team Member to Team Leader",
        description: "He began advising emerging political figures, translating data and grassroots insights into actionable policy input. This marked the start of his deeper engagement with governance and public reform, bridging private insights with civic outcomes.",
        images: ["./images/about/tm-grid-9.svg", "./images/about/tm-grid-10.svg", "./images/about/tm-grid-11.svg"]
    },
    {
        year: "2018",
        title: "Community roots",
        subtitle: "Bridging Boardroom and Community",
        description: "With growing recognition, Dare contributed to youth and education policy panels. His proposals focused on inclusive learning, vocational pathways, and the digital divide bringing structural thinking and equity into the same conversation.",
        images: ["./images/about/tm-grid-12.svg", "./images/about/tm-grid-13.svg"]
    },
    {
        year: "2020",
        title: "Civic engagement",
        subtitle: "Beyond Business: Into Advocacy",
        description: "Oluwadare launched Digital Youth Labs, a free skills program across secondary schools, impacting over 300 students. It was a direct manifestation of his belief that leadership should create access, not just ambition.",
        images: ["./images/about/tm-grid-1.svg", "./images/about/tm-grid-2.svg", "./images/about/tm-grid-3.svg"]
    },
    {
        year: "2022",
        title: "Policy making",
        subtitle: "Vision meets structure",
        description: "He officially aligned with the All Progressives Congress (APC), strengthening his platform and gaining national visibility. This year was marked by clarity in purpose and the beginning of formal political planning.",
        images: ["./images/about/tm-grid-1.svg", "./images/about/tm-grid-2.svg", "./images/about/tm-grid-3.svg"]
    },
    {
        year: "2023",
        title: "Youth initiatives",
        subtitle: "Ideas in action",
        description: "Grassroots support deepened. His team grew into a volunteer-driven movement, rolling out water access pilot projects and creating platforms for youth voices to directly influence policy ideas.",
        images: ["./images/about/tm-grid-1.svg", "./images/about/tm-grid-2.svg", "./images/about/tm-grid-3.svg"]
    },
    {
        year: "2024",
        title: "Political network",
        subtitle: "From voice to platform",
        description: "With a clear vision and proven groundwork, Dare stepped fully into public leadership. His campaign now carries the values of trust, dignity, and future readiness rooted in communities, rising for all.",
        images: ["./images/about/tm-grid-1.svg", "./images/about/tm-grid-2.svg", "./images/about/tm-grid-3.svg"]
    }
];

// Render dynamically into slickSlider container
window.addEventListener("DOMContentLoaded", () => {
    let sliderContainer;

    // You can adjust this breakpoint
    if (window.innerWidth <= 768) {
        sliderContainer = document.querySelector('.slickSlider.mobile-layout');
    } else {
        sliderContainer = document.querySelector('.slickSlider.desktop-layout');
    }

    if (!sliderContainer) return;

    timelineData.forEach((item, index) => {
        const slide = document.createElement('div');
        slide.className = `tm-slick-item img${index + 1}`;

        slide.innerHTML = `
        <div class="tm-main container">
            <div class="child-content">
                <div class="timeline-info-text">
                <span class="dm_sbold d-inline-block tm-year">${item.year}</span>
                <div class="tm-heading-text">
                    <h2 class="text-white dm_medium">${item.title}</h2>
                </div>
                <h3 class="text-white dm_medium mb-0 desc-desktop">${item.subtitle}</h3>
                <p class="mb-0 text-white desc-desktop">${item.description}</p>
                </div>
            </div>
            <div class="child-image">
                <div class="timeline-photo-grid">
                ${item.images.map((src, i) => `<img src="${src}" alt="" class="radius-16 tm_grid${i + 1}">`).join('')}
                </div>
                <h3 class="text-white dm_medium mb-0 desc-mobile">${item.subtitle}</h3>
                <p class="mb-0 text-white desc-mobile">${item.description}</p>
            </div>
        </div>
    `;

        sliderContainer.appendChild(slide);
    });
});