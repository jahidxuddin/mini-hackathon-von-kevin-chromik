package weather

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

type GeolocationResponse struct {
	Latitude  float64 `json:"lat"`
	Longitude float64 `json:"lon"`
}

func GetGeolocation(ip string) (float64, float64, error) {
	url := fmt.Sprintf("http://ip-api.com/json/%s?fields=lat,lon", ip)

	res, err := http.Get(url)
	if err != nil {
		return 0, 0, err
	}
	defer res.Body.Close()

	body, err := io.ReadAll(res.Body)
	if err != nil {
		return 0, 0, err
	}

	var geo GeolocationResponse

	err = json.Unmarshal(body, &geo)
	if err != nil {
		return 0, 0, err
	}

	return geo.Latitude, geo.Longitude, nil
}
