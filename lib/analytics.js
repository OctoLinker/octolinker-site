export const GA_TRACKING_ID = "UA-88792224-6";

export const trackEvent = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value
  });
};
