package cli

import (
	"fmt"
	"os"
	"os/exec"
	"runtime"
	"time"

	"github.com/jahidxuddin/hackathon-kevin-chromik/internal/clock"
	"github.com/jahidxuddin/hackathon-kevin-chromik/internal/weather"
	"github.com/pterm/pterm"
	"github.com/pterm/pterm/putils"
)

var currentTime string
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
		time.Sleep(time.Second)
	}
}

func update() bool {
	time := clock.GetCurrentTime()

	if time != currentTime {
		currentTime = time
		return true
	}

	return false
}

func render() {
	clearConsole()
	disableCursor()

	text, _ := pterm.DefaultBigText.WithLetters(putils.LettersFromString(currentTime)).Srender()
	pterm.DefaultCenter.Println(text)
	
	pterm.DefaultCenter.Printf(currentWeatherData.WeatherEmoji)
	pterm.DefaultCenter.Printf("Windspeed: %v km/h", int(currentWeatherData.WindSpeed))
	pterm.DefaultCenter.Printf("Temperature: %v °C", int(currentWeatherData.Temp))
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

func disableCursor() {
	pterm.DefaultCenter.Print("\033[?25l")
}
