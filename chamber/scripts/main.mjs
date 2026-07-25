import { initNavigation } from "./navigation.mjs";
import { initFooterDates } from "./dates.mjs";
import { initWeather } from "./weather.mjs";
import { initSpotlights } from "./spotlights.mjs";

document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initFooterDates();
    // initWeather();      // Uncomment when API key is ready
    // initSpotlights();   // Uncomment when members.json file is ready
});
