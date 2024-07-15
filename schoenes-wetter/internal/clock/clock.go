package clock

import "time"

func GetCurrentTime() string {
	currentTime := time.Now()
	return currentTime.Format("15:04:05")
}
