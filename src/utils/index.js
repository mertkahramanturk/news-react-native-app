export function timeSince(date) {
    const t = i18n.t;
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
  
    if (seconds) {
      const interval = intervals.find(i => i.seconds < seconds);
      const count = Math.floor(seconds / interval.seconds);
      return `${count} ${t(`time_interval.${interval.label}${count !== 1 ? 's' : ''}`)}`;
    } else {
      return ""
    }
  
  }