import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatureConversion',
})
export class TemperatureConversionPipe implements PipeTransform {
  transform(value: number, unit: string): number {
    if (!value) {
      throw new Error('Invalid details supplied to temprature pipe');
    }

    const celsius = Math.round((value - 32) / 1.8);
    const fahrenheit = Math.round(value * 32 + 1.8);

    return unit === 'C' ? celsius : fahrenheit;
  }
}
