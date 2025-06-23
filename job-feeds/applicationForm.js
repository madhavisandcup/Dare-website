import { jobTabs } from "./jobData.js";

export function applicationForm(formContainerId, selectedCategory = null, selectedJobTitle = null) {
     const applicationMain = document.getElementById(formContainerId);
     if (!applicationMain) return;

     // Step 1: Find selected category index
     let selectedSectorIndex = jobTabs.findIndex(tab => tab.category === selectedCategory);
     //  if (selectedSectorIndex === -1) selectedSectorIndex = 0;
     const selectedSector = jobTabs[selectedSectorIndex];

     // Step 2: Find selected job index from selected sector
     let selectedJobIndex = selectedSector.posts.findIndex(job => job.title === selectedJobTitle);
     //  if (selectedJobIndex === -1) selectedJobIndex = 0;

     applicationMain.innerHTML = `
        <div class="m-sec-bottom">
            <h2>Submit your application</h2>
            <form id="application-form" class="application-form-inner radius-16" action="">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-input">
                            <label for="job-sector" class="form-label">Job Sector*</label>
                            <select class="form-select" id="job-sector">
                            ${jobTabs.map((tab,index)=> `
                                <option value="${index}" ${index === selectedSectorIndex  ? 'selected': ''}>${tab.category}</option>
                            `
                            ).join('')}
                        </select>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-input">
                            <label for="position" class="form-label">Position*</label>
                            <select class="form-select" id="position">
                           ${selectedSector.posts
                .map(
                  (job, idx) =>
                    `<option value="${idx}" ${idx === selectedJobIndex ? "selected" : ""}>${job.title}</option>`
                )
                .join("")}
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-input">
                            <label for="applicant-name" class="form-label">Name*</label>
                            <input type="text" class="form-control" id="applicant-name" placeholder="Enter your full name">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-input">
                            <label for="email" class="form-label">Email*</label>
                            <input type="email" class="form-control" id="email" placeholder="hello@gmail.com">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-input">
                            <label for="message" class="form-label">Description</label>
                            <textarea  type="text" class="form-control" id="message" rows="3" placeholder="why you want to apply"></textarea>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-input">
                            <label for="uploadResume" class="form-label">Upload your resume*</label>
                            <div class="custom-file-uploader position-relative">
                                <span class="choose-file-button">Choose files</span>
                                <span class="choose-text"><img src="images/job/add-ic.svg" alt="svg"><span>Files supported: PDF, Docx, PNG</span></span>
                                <input type="file" class="file-input" placeholder="" id="uploadResume">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                       <div class="main-btn-inner mt-0 position-relative">
                            <button type="submit" class="main-btn position-relative"><span class="btn-text">Apply Now</span><span class="arrw-btn">
                                <span class="arrws-inner d-block overflow-hidden"><i class="icon-Vector-Strokearrow arrw-icon one"></i><i class="icon-Vector-Strokearrow arrw-icon two"></i></span></span>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
            </div>
     `


    //   // Bind sector change event to update positions
    // const sectorSelect = applicationMain.querySelector("#job-sector");
    // const positionSelect = applicationMain.querySelector("#position");

    // sectorSelect.addEventListener("change", () => {
    //     const newIndex = parseInt(sectorSelect.value, 10);
    //     const newSector = jobTabs[newIndex];

    //     // Reset position dropdown
    //     positionSelect.innerHTML = newSector.posts
    //     .map((job, idx) => `<option value="${idx}">${job.title}</option>`)
    //     .join('');
    // });
}