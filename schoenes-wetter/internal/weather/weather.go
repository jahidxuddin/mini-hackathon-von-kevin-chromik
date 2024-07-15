package weather

import (
	"context"
	"fmt"

	"github.com/hectormalot/omgo"
)

type CurrentWeatherData struct {
	Temp         float64
	WindSpeed    float64
	WeatherEmoji string
}

func GetWeatherDataByIp(ip string) (CurrentWeatherData, error) {
	lat, lon, err := GetGeolocation(ip)
	if err != nil {
		return CurrentWeatherData{}, fmt.Errorf("error getting geolocation: %s", err)
	}

	client, err := omgo.NewClient()
	if err != nil {
		return CurrentWeatherData{}, fmt.Errorf("error creating weather api client: %s", err)
	}

	location, err := omgo.NewLocation(lat, lon)
	if err != nil {
		return CurrentWeatherData{}, fmt.Errorf("error creating location based on latitude & longitude: %s", err)
	}

	options := omgo.Options{
		TemperatureUnit: "celsius",
		WindspeedUnit:   "kmh",
	}

	res, err := client.CurrentWeather(context.Background(), location, &options)
	if err != nil {
		return CurrentWeatherData{}, fmt.Errorf("error getting current weather from user: %s", err)
	}

	return CurrentWeatherData{
		Temp:         res.Temperature,
		WindSpeed:    res.WindSpeed,
		WeatherEmoji: WeatherCodeToASCIIArt(int(res.WeatherCode)),
	}, nil
}
