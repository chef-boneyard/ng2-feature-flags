import { Injectable } from '@angular/core';

@Injectable()
export class FeatureFlagsService {

  private _features: Object = {};

  constructor() {
    this.loadLocalStorage();
  }

  loadLocalStorage() {
    Object.keys(localStorage)
      .filter((item: string) => item.startsWith('feature-flag'))
      .forEach(item => {
        this._features[item.substr(13)] = (localStorage.getItem(item) === 'true');
    });
  }

  setFeature(name: string, status: boolean): void {
    this._features[name] = status;
    this.serialize();
  }

  removeFeature(name: string): void {
    delete this._features[name];
    localStorage.removeItem(`feature-flag-${name}`);
  }

  getFeatureStatus(name: string): boolean {
    return this._features[name] || false;
  }

  private serialize(): void {
    Object.keys(this._features)
      .forEach((feature: string) => {
        localStorage.setItem(`feature-flag-${feature}`,
          this._features[feature]);
      });
  }
}
