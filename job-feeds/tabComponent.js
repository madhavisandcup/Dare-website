export function createNavTab(tabs) {
     return `
        <div class="job-nav-top">
        <h3 class="dm_medium extra_light_grey mb-0">Job categories :</h3>
        <div class="nav nav-tabs border-0 main-flex-tabs justify-content-start" role="tablist">
            ${tabs.map((tab, idx) => `
            <button class="tabs-name nav-link ${idx === 2 ? 'active' : ''}"
                data-bs-toggle="tab"
                data-bs-target="#tab-${tab.id}"
                type="button"
                role="tab"
                aria-selected="${idx === 2}">
                <h5>${tab.category}</h5>
            </button>
            `).join("")}
        </div>
        </div>
    `
}

export function createTabContent(tabs) {
  return `
    <div class="tab-content">
      ${tabs.map((tab, idx) => `
        <div class="tab-pane fade ${idx === 2 ? 'show active' : ''}" id="tab-${tab.id}" role="tabpanel">
          <div class="feed-grid row">
            ${tab.posts.map(job => `
              <div class="col-md-6 d-flex">
                <article class="j-feed radius-16">
                  <div class="j-designation">
                    <div>
                      <h4 class="text-black">${job.title}</h4>
                      <h5 class="dm_light text_light mb-0">
                        <img src="./images/job/map.svg" class="me-1" alt="map">${job.location}
                      </h5>
                    </div>
                    <p class="dm_medium text_green j-cat mb-0">${tab.category}</p>
                  </div>
                  <div class="j-desc">
                    <p>${job.desc}</p>
                  </div>
                  <div class="main-btn-inner position-relative">
                    <a class="main-btn position-relative"  data-category="${tab.category}"
   data-title="${job.title}">
                      <span class="btn-text">Apply Now</span>
                      <span class="arrw-btn">
                        <span class="arrws-inner d-block overflow-hidden">
                          <i class="icon-Vector-Strokearrow arrw-icon one"></i>
                          <i class="icon-Vector-Strokearrow arrw-icon two"></i>
                        </span>
                      </span>
                    </a>
                  </div>
                </article>
              </div>
            `).join("")}
          </div>
        </div>
      `).join("")}
    </div>
  `;
}