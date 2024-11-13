package data

import "testing"

func TestChecksVadlidation(t *testing.T) {
	p := &Product{
		Name:  "Vadim",
		Price: 2.00,
		SKU:   "abs-abc-def",
	}

	err := p.Validate()

	if err != nil {
		t.Fatal(err)
	}
}
