import { createNavTab, createTabContent } from './tabComponent.js';

export function renderTabs(containerId, tabs) {
     const container = document.getElementById(containerId);
     container.innerHTML = '';
     if (!container) return;
     const tabNav = createNavTab(tabs);
     const tabContent = createTabContent(tabs);
     container.innerHTML = `
        <div class="job-post-feeds">
            ${tabNav}
            ${tabContent}
        </div>
     `
}