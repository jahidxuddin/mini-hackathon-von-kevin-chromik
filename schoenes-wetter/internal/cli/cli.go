package cli

import (
	"fmt"
	"os"
	"os/exec"
	"runtime"
	"time"

	"github.com/jahidxuddin/hackathon-kevin-chromik/internal/clock"
	"github.com/jahidxuddin/hackathon-kevin-chromik/internal/weather"
)

var currentTime clock.CurrentTime
var currentWeatherData weather.CurrentWeatherData

func Run() {
	loop()
}

func init() {
	currentTime = clock.GetCurrentTime()

	ip, err := weather.GetIpFromUser()
	if err != nil {
		fmt.Println(err)
	}

	data, err := weather.GetWeatherDataByIp(ip)
	if err != nil {
		fmt.Println(err)
	}

	currentWeatherData = data
}

func loop() {
	render()
	for {
		isUpdated := update()
		if isUpdated {
			render()
		}
		time.Sleep(100 * time.Millisecond)
	}
}

func update() bool {
	time := clock.GetCurrentTime()

	if time.Time != currentTime.Time {
		currentTime = time
		return true
	}

	return false
}

func render() {
	clearConsole()
	fmt.Print("\033[?25l")
	fmt.Printf("\n")
	fmt.Printf("\t%s | %s\n\n", currentTime.Time, currentTime.Date)
	fmt.Printf(currentWeatherData.WeatherEmoji)
	fmt.Printf("\tWindspeed: %v km/h\n", int(currentWeatherData.WindSpeed))
	fmt.Printf("\tTemperature: %v °C\n", int(currentWeatherData.Temp))
}

func clearConsole() {
	var cmd *exec.Cmd
	switch runtime.GOOS {
	case "linux", "darwin":
		cmd = exec.Command("clear")
	case "windows":
		cmd = exec.Command("cmd", "/c", "cls")
	}
	cmd.Stdout = os.Stdout
	cmd.Run()
}
