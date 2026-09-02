import { StorageService } from "./storageService";

const SETTINGS_OPENED_KEY = "istqb_settings_opened";
const TOUR_SEEN_PREFIX = "istqb_tour_seen_";
const CHECKLIST_DISMISSED_KEY = "istqb_onboarding_dismissed";

export const OnboardingService = {
  hasPracticed() {
    return StorageService.loadResults().length > 0 || !!StorageService.loadExam();
  },

  hasBookmarked() {
    return StorageService.loadBookmarks().length > 0;
  },

  hasOpenedSettings() {
    return localStorage.getItem(SETTINGS_OPENED_KEY) === "1";
  },
  markSettingsOpened() {
    localStorage.setItem(SETTINGS_OPENED_KEY, "1");
  },

  hasSeenTour(page = "dashboard") {
    return localStorage.getItem(TOUR_SEEN_PREFIX + page) === "1";
  },
  markTourSeen(page = "dashboard") {
    localStorage.setItem(TOUR_SEEN_PREFIX + page, "1");
  },

  isChecklistDismissed() {
    return localStorage.getItem(CHECKLIST_DISMISSED_KEY) === "1";
  },
  dismissChecklist() {
    localStorage.setItem(CHECKLIST_DISMISSED_KEY, "1");
  },
};
