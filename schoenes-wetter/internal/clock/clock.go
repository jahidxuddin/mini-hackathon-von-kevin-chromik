package clock

import "time"

type CurrentTime struct {
	Time string
	Date string
}

func GetCurrentTime() CurrentTime {
	currentTime := time.Now()
	return CurrentTime{
		Time: currentTime.Format("15:04"),
		Date: currentTime.Format("02-01-2006"),
	}
}
