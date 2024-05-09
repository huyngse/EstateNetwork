export function calculateTimeSince(date: Date): string {
    const now = new Date();
    const elapsedMilliseconds = now.getTime() - date.getTime();
    const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
  
    if (elapsedSeconds < 60) {
      return `${elapsedSeconds} giây trước`;
    }
  
    const elapsedMinutes = Math.floor(elapsedSeconds / 60);
  
    if (elapsedMinutes < 60) {
      return `${elapsedMinutes} phút trước`;
    }
  
    const elapsedHours = Math.floor(elapsedMinutes / 60);
  
    if (elapsedHours < 24) {
      return `${elapsedHours} giờ trước`;
    }
  
    const elapsedDays = Math.floor(elapsedHours / 24);
  
    if (elapsedDays < 30) {
      return `${elapsedDays} ngày trước`;
    }
  
    const elapsedMonths = Math.floor(elapsedDays / 30);
  
    if (elapsedMonths < 12) {
      return `${elapsedMonths} tháng trước`;
    }
  
    const elapsedYears = Math.floor(elapsedMonths / 12);
  
    return `${elapsedYears} năm trước`;
  }