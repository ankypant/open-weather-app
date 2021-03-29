import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatureConversion',
})
export class TemperatureConversionPipe implements PipeTransform {
  transform(value: number, unit: string): number {
    if (!value) {
      throw new Error('Invalid details supplied to temperature pipe');
    }

    // const celsius = Math.round(((value - 32) * 5) / 9);
    // Ignoring the conversion as getting metric (degree C from api)
    const celsius = Math.round(value);
    const fahrenheit = Math.round(value * (9 / 5) + 32);

    return unit === 'C' ? celsius : fahrenheit;
  }
}
