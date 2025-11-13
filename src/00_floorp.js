// JavaScript glue exposing Floorp OS API operations to workflows

/**
 * Check the health status of the Floorp service.
 * @returns {Promise<any>} The health status of the Floorp service
 */
function floorpHealth() {
  return Deno.core.ops.op_floorp_health();
}

/**
 * Create a new scraper instance.
 * @returns {Promise<string>} The ID of the created scraper instance
 */
function floorpCreateScraper() {
  return Deno.core.ops.op_floorp_create_scraper_instance();
}

/**
 * Navigate the scraper to a given URL.
 * @param {string} id - The scraper instance ID
 * @param {string} url - The URL to navigate to
 * @returns {Promise<void>}
 */
function floorpNavigate(id, url) {
  return Deno.core.ops.op_floorp_navigate_scraper(id, url);
}

/**
 * Get the HTML content of the current page from the scraper.
 * @param {string} id - The scraper instance ID
 * @returns {Promise<string>} The HTML content of the current page
 */
function floorpScraperHtml(id) {
  return Deno.core.ops.op_floorp_scraper_html(id);
}

/**
 * Get the URI of the current page from the scraper.
 * @param {string} id - The scraper instance ID
 * @returns {Promise<string>} The URI of the current page
 */
function floorpScraperUri(id) {
  return Deno.core.ops.op_floorp_scraper_uri(id);
}

/**
 * Wait for an element to appear on the page using a CSS selector.
 * @param {string} id - The scraper instance ID
 * @param {string} selector - The CSS selector for the element
 * @param {number} [timeoutMs] - Optional timeout in milliseconds
 * @returns {Promise<void>}
 */
function floorpWaitForElement(id, selector, timeoutMs) {
  return Deno.core.ops.op_floorp_wait_for_element(
    id,
    selector,
    timeoutMs?.toString()
  );
}

/**
 * Click an element on the page using a CSS selector.
 * @param {string} id - The scraper instance ID
 * @param {string} selector - The CSS selector for the element
 * @returns {Promise<void>}
 */
function floorpClick(id, selector) {
  return Deno.core.ops.op_floorp_click_element(id, selector);
}

/**
 * Get the text content of an element using a CSS selector.
 * @param {string} id - The scraper instance ID
 * @param {string} selector - The CSS selector for the element
 * @returns {Promise<string>} The text content of the element
 */
function floorpElementText(id, selector) {
  return Deno.core.ops.op_floorp_element_text(id, selector);
}

/**
 * Get the value of an input element using a CSS selector.
 * @param {string} id - The scraper instance ID
 * @param {string} selector - The CSS selector for the element
 * @returns {Promise<string>} The value of the input element
 */
function floorpElementValue(id, selector) {
  return Deno.core.ops.op_floorp_element_value(id, selector);
}

/**
 * Fill a form input with a value using a CSS selector.
 * @param {string} id - The scraper instance ID
 * @param {string} selector - The CSS selector for the input element
 * @param {string} value - The value to fill in
 * @returns {Promise<void>}
 */
function floorpFillForm(id, selector, value) {
  return Deno.core.ops.op_floorp_fill_form(id, selector, value);
}

/**
 * Submit a form using a CSS selector.
 * @param {string} id - The scraper instance ID
 * @param {string} selector - The CSS selector for the form
 * @returns {Promise<void>}
 */
function floorpSubmitForm(id, selector) {
  return Deno.core.ops.op_floorp_submit_form(id, selector);
}

/**
 * Take a screenshot of the current viewport.
 * @param {string} id - The scraper instance ID
 * @returns {Promise<string>} Base64 encoded screenshot data
 */
function floorpScreenshot(id) {
  return Deno.core.ops.op_floorp_screenshot(id);
}

/**
 * Take a screenshot of a specific element.
 * @param {string} id - The scraper instance ID
 * @param {string} selector - The CSS selector for the element
 * @returns {Promise<string>} Base64 encoded screenshot data
 */
function floorpElementScreenshot(id, selector) {
  return Deno.core.ops.op_floorp_element_screenshot(id, selector);
}

/**
 * Take a screenshot of the full page.
 * @param {string} id - The scraper instance ID
 * @returns {Promise<string>} Base64 encoded screenshot data
 */
function floorpFullPageScreenshot(id) {
  return Deno.core.ops.op_floorp_fullpage_screenshot(id);
}

/**
 * Take a screenshot of a specific region on the page.
 * @param {string} id - The scraper instance ID
 * @param {number} x - The X coordinate of the region
 * @param {number} y - The Y coordinate of the region
 * @param {number} w - The width of the region
 * @param {number} h - The height of the region
 * @returns {Promise<string>} Base64 encoded screenshot data
 */
function floorpRegionScreenshot(id, x, y, w, h) {
  return Deno.core.ops.op_floorp_region_screenshot(
    id,
    x?.toString(),
    y?.toString(),
    w?.toString(),
    h?.toString()
  );
}

/**
 * Create a new tab with an optional URL.
 * @param {string} url - The URL to load in the tab
 * @param {boolean} [inBackground] - Optional flag to create tab in background
 * @returns {Promise<string>} The ID of the created tab instance
 */
function floorpCreateTab(url, inBackground) {
  return Deno.core.ops.op_floorp_create_tab_instance(
    url,
    inBackground?.toString()
  );
}

/**
 * Navigate a tab to a given URL.
 * @param {string} id - The tab instance ID
 * @param {string} url - The URL to navigate to
 * @returns {Promise<void>}
 */
function floorpNavigateTab(id, url) {
  return Deno.core.ops.op_floorp_navigate_tab(id, url);
}

/**
 * Get the URI of the current page from the tab.
 * @param {string} id - The tab instance ID
 * @returns {Promise<string>} The URI of the current page
 */
function floorpTabUri(id) {
  return Deno.core.ops.op_floorp_tab_uri(id);
}

/**
 * Get the HTML content of the current page from the tab.
 * @param {string} id - The tab instance ID
 * @returns {Promise<string>} The HTML content of the current page
 */
function floorpTabHtml(id) {
  return Deno.core.ops.op_floorp_tab_html(id);
}

/**
 * Take a screenshot of the tab's current viewport.
 * @param {string} id - The tab instance ID
 * @returns {Promise<string>} Base64 encoded screenshot data
 */
function floorpTabScreenshot(id) {
  return Deno.core.ops.op_floorp_tab_screenshot(id);
}

/**
 * Get an element from the tab using a CSS selector.
 * @param {string} id - The tab instance ID
 * @param {string} selector - The CSS selector for the element
 * @returns {Promise<any>} The element object
 */
function floorpTabElement(id, selector) {
  return Deno.core.ops.op_floorp_tab_element(id, selector);
}

/**
 * Get the text content of an element in the tab using a CSS selector.
 * @param {string} id - The tab instance ID
 * @param {string} selector - The CSS selector for the element
 * @returns {Promise<string>} The text content of the element
 */
function floorpTabElementText(id, selector) {
  return Deno.core.ops.op_floorp_tab_element_text(id, selector);
}

/**
 * Click an element in the tab using a CSS selector.
 * @param {string} id - The tab instance ID
 * @param {string} selector - The CSS selector for the element
 * @returns {Promise<void>}
 */
function floorpTabClick(id, selector) {
  return Deno.core.ops.op_floorp_tab_click_element(id, selector);
}

/**
 * Wait for an element to appear in the tab using a CSS selector.
 * @param {string} id - The tab instance ID
 * @param {string} selector - The CSS selector for the element
 * @param {number} [timeoutMs] - Optional timeout in milliseconds
 * @returns {Promise<void>}
 */
function floorpTabWaitForElement(id, selector, timeoutMs) {
  return Deno.core.ops.op_floorp_tab_wait_for_element(
    id,
    selector,
    timeoutMs?.toString()
  );
}

/**
 * Execute JavaScript code in the context of the tab.
 * @param {string} id - The tab instance ID
 * @param {string} script - The JavaScript code to execute
 * @returns {Promise<any>} The result of the script execution
 */
function floorpTabExecuteScript(id, script) {
  return Deno.core.ops.op_floorp_tab_execute_script(id, script);
}

/**
 * Take a screenshot of a specific element in the tab.
 * @param {string} id - The tab instance ID
 * @param {string} selector - The CSS selector for the element
 * @returns {Promise<string>} Base64 encoded screenshot data
 */
function floorpTabElementScreenshot(id, selector) {
  return Deno.core.ops.op_floorp_tab_element_screenshot(id, selector);
}

/**
 * Take a screenshot of the full page in the tab.
 * @param {string} id - The tab instance ID
 * @returns {Promise<string>} Base64 encoded screenshot data
 */
function floorpTabFullPageScreenshot(id) {
  return Deno.core.ops.op_floorp_tab_fullpage_screenshot(id);
}

/**
 * Take a screenshot of a specific region in the tab.
 * @param {string} id - The tab instance ID
 * @param {number} x - The X coordinate of the region
 * @param {number} y - The Y coordinate of the region
 * @param {number} w - The width of the region
 * @param {number} h - The height of the region
 * @returns {Promise<string>} Base64 encoded screenshot data
 */
function floorpTabRegionScreenshot(id, x, y, w, h) {
  return Deno.core.ops.op_floorp_tab_region_screenshot(
    id,
    x?.toString(),
    y?.toString(),
    w?.toString(),
    h?.toString()
  );
}

/**
 * Fill a form input in the tab with a value using a CSS selector.
 * @param {string} id - The tab instance ID
 * @param {string} selector - The CSS selector for the input element
 * @param {string} value - The value to fill in
 * @returns {Promise<void>}
 */
function floorpTabFillForm(id, selector, value) {
  return Deno.core.ops.op_floorp_tab_fill_form(id, selector, value);
}

/**
 * Get the value of an input element in the tab using a CSS selector.
 * @param {string} id - The tab instance ID
 * @param {string} selector - The CSS selector for the element
 * @returns {Promise<string>} The value of the input element
 */
function floorpTabElementValue(id, selector) {
  return Deno.core.ops.op_floorp_tab_element_value(id, selector);
}

/**
 * Submit a form in the tab using a CSS selector.
 * @param {string} id - The tab instance ID
 * @param {string} selector - The CSS selector for the form
 * @returns {Promise<void>}
 */
function floorpTabSubmitForm(id, selector) {
  return Deno.core.ops.op_floorp_tab_submit_form(id, selector);
}

/**
 * List all browser tabs currently open.
 * @returns {Promise<Array>} An array of browser tab information
 */
function floorpListBrowserTabs() {
  return Deno.core.ops.op_floorp_list_browser_tabs();
}

/**
 * Get all browser tabs.
 * @returns {Promise<Array>} An array of browser tab objects
 */
function floorpBrowserTabs() {
  return Deno.core.ops.op_floorp_browser_tabs();
}

/**
 * Get the browser history.
 * @param {number} [limit] - Optional limit on the number of history entries to return
 * @returns {Promise<Array>} An array of history entries
 */
function floorpBrowserHistory(limit) {
  return Deno.core.ops.op_floorp_browser_history(limit?.toString());
}

/**
 * Get the browser downloads.
 * @param {number} [limit] - Optional limit on the number of downloads to return
 * @returns {Promise<Array>} An array of download entries
 */
function floorpBrowserDownloads(limit) {
  return Deno.core.ops.op_floorp_browser_downloads(limit?.toString());
}

/**
 * Get the complete browser context including tabs, history, and downloads.
 * @param {number} [historyLimit] - Optional limit on the number of history entries
 * @param {number} [downloadLimit] - Optional limit on the number of downloads
 * @returns {Promise<Object>} An object containing browser context data
 */
function floorpBrowserContext(historyLimit, downloadLimit) {
  return Deno.core.ops.op_floorp_browser_context(
    historyLimit?.toString(),
    downloadLimit?.toString()
  );
}

/**
 * Attach a scraper instance to an existing browser tab.
 * @param {string} instanceId - The ID of the browser tab to attach to
 * @returns {Promise<string>} The ID of the scraper instance
 */
function floorpAttachToTab(instanceId) {
  return Deno.core.ops.op_floorp_attach_to_tab(instanceId);
}

/**
 * Destroy a tab instance and clean up its resources.
 * @param {string} id - The tab instance ID
 * @returns {Promise<void>}
 */
function floorpDestroyTabInstance(id) {
  return Deno.core.ops.op_floorp_destroy_tab_instance(id);
}

/**
 * Destroy a scraper instance and clean up its resources.
 * @param {string} id - The scraper instance ID
 * @returns {Promise<void>}
 */
function floorpDestroyScraperInstance(id) {
  return Deno.core.ops.op_floorp_destroy_scraper_instance(id);
}

/**
 * Check if a tab instance exists.
 * @param {string} id - The tab instance ID
 * @returns {Promise<boolean>} True if the tab instance exists, false otherwise
 */
function floorpCheckTabInstanceExists(id) {
  return Deno.core.ops.op_floorp_check_tab_instance_exists(id);
}

/**
 * Check if a scraper instance exists.
 * @param {string} id - The scraper instance ID
 * @returns {Promise<boolean>} True if the scraper instance exists, false otherwise
 */
function floorpCheckScraperInstanceExists(id) {
  return Deno.core.ops.op_floorp_check_scraper_instance_exists(id);
}

/**
 * Global Floorp API namespace providing access to browser automation and scraping capabilities.
 * @namespace floorp
 */
globalThis.floorp = {
  health: floorpHealth,
  createScraper: floorpCreateScraper,
  navigate: floorpNavigate,
  html: floorpScraperHtml,
  uri: floorpScraperUri,
  waitForElement: floorpWaitForElement,
  click: floorpClick,
  text: floorpElementText,
  value: floorpElementValue,
  fillForm: floorpFillForm,
  submitForm: floorpSubmitForm,
  screenshot: floorpScreenshot,
  elementScreenshot: floorpElementScreenshot,
  fullPageScreenshot: floorpFullPageScreenshot,
  regionScreenshot: floorpRegionScreenshot,
  createTab: floorpCreateTab,
  navigateTab: floorpNavigateTab,
  tabUri: floorpTabUri,
  tabHtml: floorpTabHtml,
  tabScreenshot: floorpTabScreenshot,
  tabElement: floorpTabElement,
  tabElementText: floorpTabElementText,
  tabClick: floorpTabClick,
  tabWaitForElement: floorpTabWaitForElement,
  tabExecuteScript: floorpTabExecuteScript,
  tabElementScreenshot: floorpTabElementScreenshot,
  tabFullPageScreenshot: floorpTabFullPageScreenshot,
  tabRegionScreenshot: floorpTabRegionScreenshot,
  tabFillForm: floorpTabFillForm,
  tabElementValue: floorpTabElementValue,
  tabSubmitForm: floorpTabSubmitForm,
  listBrowserTabs: floorpListBrowserTabs,
  browserTabs: floorpBrowserTabs,
  browserHistory: floorpBrowserHistory,
  browserDownloads: floorpBrowserDownloads,
  browserContext: floorpBrowserContext,
  attachToTab: floorpAttachToTab,
  destroyTabInstance: floorpDestroyTabInstance,
  destroyScraperInstance: floorpDestroyScraperInstance,
  checkTabInstanceExists: floorpCheckTabInstanceExists,
  checkScraperInstanceExists: floorpCheckScraperInstanceExists,
};
