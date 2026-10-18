# Specification before Coding

## 1. Navigation Toggle
* **Trigger:** Tapping the hamburger menu button in mobile-view.
* **DOM Change:** Toggles 'is-open' clsas in mobile navigation container to show or hide it,
* **Edge Cases:**
    * Window size is changed from mobile to desktop while the menu is open. 
    * User clicks a link on the menu in mobile view yet the menu remains open. 
    * User clicks outside the mobile menu while it is open (the menu closes automatically).

## 2. Dark Mode
* **Trigger:** Clicking the dark mode toggle button.
* **DOM Change:** Toggles a 'dark-theme' class on the '<body>' element and updates the button text/icon.
* **Edge Cases:**
    * Dark mode preference is lost when user refreshes the page.
    * System color preference is ignored on user's first visit.
    * Browser blocks 'localStorage' in private browsing mode (the code fails gracefully without crashing the page).

## 3. Dynamic Content from an Array
* **Trigger:** Page loads in the browser.
* **DOM Change:** Uses .map() to look at a list of items then turn them into HTML cards and display them on the webpage.
* **Edge Cases:**
    * The array displays a blank area or no items available.
    * Data contains special characters or random HTML tags.
    * An object in the array is missing a property like an image source. 

## 4. Contact Form Validation
* **Trigger:** Submitting the contact form.
* **DOM Change:** Stops default form submission, validates input, and sends specific error message to any invalid input fields while adding a red border.
* **Edge Cases:**
 * Email field does not contain the @ sign or domain.
 * Inputs contain whitespace.
 * User corrects the input but the previous input is still seen.  
 * User corrects their mistakes and successfully submits the form (previous error messages and red borders gets removed).