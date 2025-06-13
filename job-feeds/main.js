console.log("main.js loaded");
import { jobTabs } from './jobData.js';
import { renderTabs } from './renderTabs.js';
import { applicationForm } from './applicationForm.js';

document.addEventListener("DOMContentLoaded", () => {
     console.log("DOM ready");
     console.log("jobTabs:", jobTabs);
     renderTabs("job-post-container", jobTabs);
     document.querySelectorAll(".j-feed .main-btn").forEach(btn => {
          btn.addEventListener("click", e => {
               e.preventDefault();
               console.log('a clicked');
               const category = btn.dataset.category;
               const title = btn.dataset.title;

               applicationForm("app-form-main", category, title);

               // Smooth scroll
               document.getElementById("appication-form-wrapper").scrollIntoView({ behavior: "smooth" });
          });
     });
});